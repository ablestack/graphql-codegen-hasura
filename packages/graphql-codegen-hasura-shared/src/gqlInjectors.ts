import { FieldDefinitionNode } from "graphql";
import { getIdPostGresFieldType, makeModelName, makeFragmentDocName, ContentManager } from ".";
import { makeImportStatement, makeShortName, makeCamelCase, makePascalCase, camelToSnakeUpperCase } from "./utils";

// ---------------------------------
//
export function injectGlobalGqlCode({ contentManager, typescriptCodegenOutputPath }: { contentManager: ContentManager; typescriptCodegenOutputPath: string }) {
  contentManager.addImport("/* eslint-disable @typescript-eslint/no-unused-vars */");
  //contentManager.addImport(`import gql from '@apollo/client'`);  //graphql-code-generator still only picking up gql from 'graphql-tag' import. Will switch to "@apollo/client" import when this issue is addressed
  contentManager.addImport(`import gql from 'graphql-tag';`);
}

// ---------------------------------
//
export function injectFragmentImport({
  contentManager,
  fragmentName,
  fragmentRelativeImportPath
}: {
  contentManager: ContentManager;
  fragmentName: string;
  fragmentRelativeImportPath: string;
}) {
  const fragmentDocName = makeFragmentDocName(fragmentName);
  const fragmentImport = makeImportStatement(fragmentDocName, fragmentRelativeImportPath);
  contentManager.addImport(fragmentImport);
}

// ---------------------------------
//
export function injectFetchAsQueryGql({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField
}: {
  contentManager: ContentManager;
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField?: FieldDefinitionNode | null;
}) {
  const shortName = makeShortName(entityName, trimString);
  const entityShortCamelName = makeCamelCase(shortName);
  const fragmentDocName = makeFragmentDocName(fragmentName);

  if (primaryKeyIdField) {
    const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);
    contentManager.addContent(`

    // Query: FetchById
    //
    ${makeFetchByIdGQL({ fetchType: "query", entityName, fragmentName, trimString, primaryKeyIdField })}`);
  }

  contentManager.addContent(`

    // Query: Fetch
    //
    ${makeFetchObjectsGQL({ fetchType: "query", entityName, fragmentName, trimString, primaryKeyIdField })}`);
}

// ---------------------------------
//
export function injectFetchAsSubscriptionGql({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField
}: {
  contentManager: ContentManager;
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField?: FieldDefinitionNode | null;
}) {
  const shortName = makeShortName(entityName, trimString);
  const entityShortCamelName = makeCamelCase(shortName);
  const fragmentDocName = makeFragmentDocName(fragmentName);

  if (primaryKeyIdField) {
    const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);
    contentManager.addContent(`

    // Subscription: FetchById
    //
    ${makeFetchByIdGQL({ fetchType: "subscription", entityName, fragmentName, trimString, primaryKeyIdField })}`);
  }

  contentManager.addContent(`

    // Subscription: Fetch
    //
    ${makeFetchObjectsGQL({ fetchType: "subscription", entityName, fragmentName, trimString, primaryKeyIdField })}`);
}

function makeFetchByIdGQL({
  fetchType,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField
}: {
  fetchType: "query" | "subscription";
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField?: FieldDefinitionNode | null;
}) {
  const shortName = makeShortName(entityName, trimString);
  const entityShortCamelName = makeCamelCase(shortName);
  const fragmentDocName = makeFragmentDocName(fragmentName);
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);
  const fetchCamelCaseTypeVerb = fetchType === "query" ? "query" : "subscribeTo";
  const fetchTypeVerbUpperCase = camelToSnakeUpperCase(fetchCamelCaseTypeVerb);

  return `const ${fetchTypeVerbUpperCase}_${fragmentName.toUpperCase()}_BYID = gql\`
  ${fetchType} ${fetchCamelCaseTypeVerb}${fragmentName}ById($${entityShortCamelName}Id: ${primaryKeyIdPostGresFieldType}!) {
    ${entityName}_by_pk(id: $${entityShortCamelName}Id) {
      ...${fragmentName}
    }
  }
  \${${fragmentDocName}}\`;`;
}

function makeFetchObjectsGQL({
  fetchType,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField
}: {
  fetchType: "query" | "subscription";
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField?: FieldDefinitionNode | null;
}) {
  const shortName = makeShortName(entityName, trimString);
  const entityShortCamelName = makeCamelCase(shortName);
  const fragmentDocName = makeFragmentDocName(fragmentName);
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);
  const fetchCamelCaseTypeVerb = fetchType === "query" ? "query" : "subscribeTo";
  const fetchTypeVerbUpperCase = camelToSnakeUpperCase(fetchCamelCaseTypeVerb);

  return `const ${fetchTypeVerbUpperCase}_${fragmentName.toUpperCase()}_OBJECTS = gql\`
  ${fetchType} ${fetchCamelCaseTypeVerb}${fragmentName}Objects(
    $distinct_on: [${entityName}_select_column!]
    $where: ${entityName}_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [${entityName}_order_by!]
  ) {
    ${entityName}(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...${fragmentName}
    }
  }
  \${${fragmentDocName}}
  \`;`;
}

// ---------------------------------
//
export function injectInsertGql({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField
}: {
  contentManager: ContentManager;
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
}) {
  const fragmentDocName = makeFragmentDocName(fragmentName);

  contentManager.addContent(`

    // Mutation: Insert
    //

    const INSERT_${fragmentName.toUpperCase()} = gql\`
      mutation insert${fragmentName}($objects: [${entityName}_insert_input!]!) {
        insert_${entityName}(objects: $objects) {
          affected_rows
          returning {
            ...${fragmentName}
          }
        }
      }
      \${${fragmentDocName}}
    \`;`);

  contentManager.addContent(`

    // Mutation: Insert
    //

    const INSERT_${fragmentName.toUpperCase()}_WITH_ONCONFLICT = gql\`
      mutation insert${fragmentName}WithOnConflict($objects: [${entityName}_insert_input!]!, $onConflict: ${entityName}_on_conflict) {
        insert_${entityName}(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...${fragmentName}
          }
        }
      }
      \${${fragmentDocName}}
    \`;`);
}

// ---------------------------------
//
export function injectUpdateGql({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField
}: {
  contentManager: ContentManager;
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
}) {
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);
  const fragmentDocName = makeFragmentDocName(fragmentName);

  contentManager.addContent(`

    // Mutation: Update by Id
    //

    const UPDATE_${fragmentName.toUpperCase()}_BYID = gql\`
      mutation update${fragmentName}ById($id: ${primaryKeyIdPostGresFieldType}, $set: ${entityName}_set_input) {
        update_${entityName}(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...${fragmentName}
          }
        }
      }
      \${${fragmentDocName}}
    \`;`);

  contentManager.addContent(`

    // Mutation: Update
    //

    const UPDATE_${fragmentName.toUpperCase()}S = gql\`
      mutation update${fragmentName}($set: ${entityName}_set_input, $where:${entityName}_bool_exp!) {
        update_${entityName}(_set: $set, where: $where) {
          affected_rows
          returning {
            ...${fragmentName}
          }
        }
      }
      \${${fragmentDocName}}
    \`;`);
}

// ---------------------------------
//
export function injectDeleteGql({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField
}: {
  contentManager: ContentManager;
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
}) {
  const entityModelName = makeModelName(entityName, trimString);
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);
  const fragmentDocName = makeFragmentDocName(fragmentName);

  contentManager.addContent(`

    // Mutation: Remove by Id
    //

    const REMOVE_${entityModelName.toUpperCase()}_BYID = gql\`
      mutation remove${entityModelName}ById($id: ${primaryKeyIdPostGresFieldType}) {
        delete_${entityName}(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
    \`;`);

  contentManager.addContent(`

    // Mutation: Remove
    //

    const REMOVE_${entityModelName.toUpperCase()}S = gql\`
      mutation remove${entityModelName}($where:${entityName}_bool_exp!) {
        delete_${entityName}(where: $where) {
          affected_rows
        }
      }
    \`;`);
}
