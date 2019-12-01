import { FieldDefinitionNode } from "graphql";
import { getIdPostGresFieldType, makeModelName, makeShortCamelCaseName, makeFragmentName, makeFragmentDocName } from ".";
import { makeImportStatement } from "./utils";

// ---------------------------------
//
export function injectFragmentImport({ importArray, fragmentName, fragmentImportFrom }: { importArray: string[]; fragmentName: string; fragmentImportFrom: string }) {
  const fragmentDocName = makeFragmentDocName(fragmentName);
  const fragmentImport = makeImportStatement(fragmentDocName, fragmentImportFrom);
  // import fragment if not already
  if (!importArray.includes(fragmentImport)) {
    importArray.push(fragmentImport);
  }
}

// ---------------------------------
//
export function injectFetchGql({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
}) {
  const entityShortCamelName = makeShortCamelCaseName(entityName, trimString);
  const entityModelName = makeModelName(entityName, trimString);
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);
  const fragmentDocName = makeFragmentName(fragmentName, trimString);

  contentArray.push(`

    // Query: FetchById
    //

    const FETCH_${fragmentName.toUpperCase()}_MODEL_BYID = gql\`
      query fetch${fragmentName}ById($${entityShortCamelName}Id: ${primaryKeyIdPostGresFieldType}!) {
        ${entityName}_by_pk(id: $${entityShortCamelName}Id) {
          ...${fragmentName}
        }
      }
      \${${fragmentDocName}}
    \`;`);

  contentArray.push(`

    // Query: Fetch
    //

    const FETCH_${fragmentName.toUpperCase()}_MODELS = gql\`
      query fetch${fragmentName}(
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
    \`;`);
}

// ---------------------------------
//
export function injectInsertGql({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
}) {
  const entityModelName = makeModelName(entityName, trimString);
  const fragmentDocName = makeFragmentName(fragmentName, trimString);

  contentArray.push(`

    // Mutation: Insert
    //

    const INSERT_${fragmentName.toUpperCase()}_MODEL = gql\`
      mutation insert${fragmentName}($objects: [${entityName}_insert_input!]!, $onConflict: ${entityName}_on_conflict) {
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
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
}) {
  const entityModelName = makeModelName(entityName, trimString);
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);
  const fragmentDocName = makeFragmentName(fragmentName, trimString);

  contentArray.push(`

    // Mutation: Update by Id
    //

    const UPDATE_${fragmentName.toUpperCase()}_MODEL_BYID = gql\`
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

  contentArray.push(`

    // Mutation: Update
    //

    const UPDATE_${fragmentName.toUpperCase()}_MODELS = gql\`
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
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
}) {
  const entityModelName = makeModelName(entityName, trimString);
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);
  const fragmentDocName = makeFragmentName(fragmentName, trimString);

  contentArray.push(`

    // Mutation: Remove by Id
    //

    const REMOVE_${entityModelName.toUpperCase()}_MODEL_BYID = gql\`
      mutation remove${entityModelName}ById($id: ${primaryKeyIdPostGresFieldType}) {
        delete_${entityName}(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      \${${fragmentDocName}}
    \`;`);

  contentArray.push(`

    // Mutation: Remove
    //

    const REMOVE_${entityModelName.toUpperCase()}_MODELS = gql\`
      mutation remove${entityModelName}($where:${entityName}_bool_exp!) {
        delete_${entityName}(where: $where) {
          affected_rows
        }
      }
      \${${fragmentDocName}}
    \`;`);
}
