import { FieldDefinitionNode } from "graphql";
import { getIdPostGresFieldType, makeModelName, makeShortCamelCaseName } from ".";

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
}
