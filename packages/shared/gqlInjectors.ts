import { GraphQLNamedType, GraphQLSchema, ObjectTypeDefinitionNode, FieldDefinitionNode } from "graphql";
import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { getIdPostGresFieldType, getPrimaryKeyIdField, makeFragmentName, makeFragmentsImport, makeModelName, makeShortCamelCaseName, SCALAR_TYPE_TEST, TABLE_TYPE_FILTER } from ".";

export function injectFragmentGql({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  fields
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  fields: readonly FieldDefinitionNode[];
}) {
  const entityModelName = makeModelName(entityName, trimString);

  const scalarFieldNamesArray: string[] = [];

  fields.forEach(f => {
    if (SCALAR_TYPE_TEST(f)) {
      scalarFieldNamesArray.push(f.name.value);
    }
  });

  contentArray.push(`
  
      // Scalar Fields Fragment
      //
  
      export const ${fragmentName} = gql\`
        fragment ${entityModelName}Fields on ${entityName} {
        ${scalarFieldNamesArray.join("\n      ")}
        }
      \`;`);
}

// ---------------------------------
//
export function injectFetchHelpers({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  withFragments,
  fragmentImportFrom,
  primaryKeyIdField
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  withFragments: boolean;
  fragmentImportFrom: string;
  primaryKeyIdField: FieldDefinitionNode;
}) {
  const entityShortCamelName = makeShortCamelCaseName(entityName, trimString);
  const entityModelName = makeModelName(entityName, trimString);
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);

  contentArray.push(`

    // Query: FetchById
    //

    const FETCH_${entityName.toUpperCase()}_MODEL_BYID = gql\`
      query fetch${entityModelName}ById($${entityShortCamelName}Id: ${primaryKeyIdPostGresFieldType}!) {
        ${entityName}_by_pk(id: $${entityShortCamelName}Id) {
          ...${fragmentName}
        }
      }
      \${${fragmentName}}
    \`;`);

  contentArray.push(`

    // Query: Fetch
    //

    const FETCH_${entityName.toUpperCase()}_MODELS = gql\`
      query fetch${entityModelName}(
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
      \${${fragmentName}}
    \`;`);

  if (!withFragments) importArray.push(makeFragmentsImport(entityName, fragmentImportFrom));
}

// ---------------------------------
//
export function injectInsertHelpers({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  withFragments,
  fragmentImportFrom,
  primaryKeyIdField
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  withFragments: boolean;
  fragmentImportFrom: string;
  primaryKeyIdField: FieldDefinitionNode;
}) {
  const entityModelName = makeModelName(entityName, trimString);

  contentArray.push(`

    // Mutation: Insert
    //

    const INSERT_${entityName.toUpperCase()}_MODEL = gql\`
      mutation insert${entityModelName}($objects: [${entityName}_insert_input!]!, $onConflict: ${entityName}_on_conflict) {
        insert_${entityName}(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...${fragmentName}
          }
        }
      }
      \${${fragmentName}}
    \`;`);

  if (!withFragments) importArray.push(makeFragmentsImport(entityName, fragmentImportFrom));
}

// ---------------------------------
//
export function injectUpdateHelpers({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  withFragments,
  fragmentImportFrom,
  primaryKeyIdField
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  withFragments: boolean;
  fragmentImportFrom: string;
  primaryKeyIdField: FieldDefinitionNode;
}) {
  const entityModelName = makeModelName(entityName, trimString);
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);

  contentArray.push(`

    // Mutation: Update by Id
    //

    const UPDATE_${entityName.toUpperCase()}_MODEL_BYID = gql\`
      mutation update${entityModelName}ById($id: ${primaryKeyIdPostGresFieldType}, $set: ${entityName}_set_input) {
        update_${entityName}(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...${fragmentName}
          }
        }
      }
      \${${fragmentName}}
    \`;`);

  contentArray.push(`

    // Mutation: Update
    //

    const UPDATE_${entityName.toUpperCase()}_MODELS = gql\`
      mutation update${entityModelName}($set: ${entityName}_set_input, $where:${entityName}_bool_exp!) {
        update_${entityName}(_set: $set, where: $where) {
          affected_rows
          returning {
            ...${fragmentName}
          }
        }
      }
      \${${fragmentName}}
    \`;`);

  if (!withFragments) importArray.push(makeFragmentsImport(entityName, fragmentImportFrom));
}

// ---------------------------------
//
export function injectDeleteHelpers({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  withFragments,
  fragmentImportFrom,
  primaryKeyIdField
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  withFragments: boolean;
  fragmentImportFrom: string;
  primaryKeyIdField: FieldDefinitionNode;
}) {
  const entityModelName = makeModelName(entityName, trimString);
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);

  contentArray.push(`

    // Mutation: Remove by Id
    //

    const REMOVE_${entityName.toUpperCase()}_MODEL_BYID = gql\`
      mutation remove${entityModelName}ById($id: ${primaryKeyIdPostGresFieldType}) {
        delete_${entityName}(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      \${${fragmentName}}
    \`;`);

  contentArray.push(`

    // Mutation: Remove
    //

    const REMOVE_${entityName.toUpperCase()}_MODELS = gql\`
      mutation remove${entityModelName}($where:${entityName}_bool_exp!) {
        delete_${entityName}(where: $where) {
          affected_rows
        }
      }
      \${${fragmentName}}
    \`;`);

  if (!withFragments) importArray.push(makeFragmentsImport(entityName, fragmentImportFrom));
}
