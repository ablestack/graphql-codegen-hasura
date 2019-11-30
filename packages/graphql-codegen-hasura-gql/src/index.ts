import { GraphQLNamedType, GraphQLSchema, ObjectTypeDefinitionNode } from "graphql";
import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import {
  getIdPostGresFieldType,
  getPrimaryKeyIdField,
  makeFragmentName,
  makeFragmentsImport,
  makeModelName,
  makeShortCamelCaseName,
  SCALAR_TYPE_TEST,
  TABLE_TYPE_FILTER
} from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  reactApolloVersion?: number;
  fragmentImportFrom?: string;
  trimString?: string;
  withFragments?: boolean;
  withQueries?: boolean;
  withInserts?: boolean;
  withUpdates?: boolean;
  withDeletes?: boolean;
}

export const plugin: PluginFunction<CstmHasuraCrudPluginConfig> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: CstmHasuraCrudPluginConfig) => {
  // Set config defaults
  if (!config.reactApolloVersion) config.reactApolloVersion = 3;

  const importArray: string[] = [
    "/* eslint-disable @typescript-eslint/no-unused-vars */",
    //`import gql from '${config.reactApolloVersion === 3 ? "@apollo/client" : "graphql-tag"}';` //graphql-code-generator still only picking up gql from 'graphql-tag' import. Will switch to "@apollo/client" import when this issue is addressed
    `import gql from 'graphql-tag';`
  ];
  const contentArray: string[] = [];

  Object.values(schema.getTypeMap())
    .filter(t => TABLE_TYPE_FILTER(t))
    .map(t => {
      return `
      ${config.withFragments && makeEntityModelFragmentsGql(t, importArray, contentArray, config)}
      ${config.withInserts && makeEntityInsertMutationGql(t, importArray, contentArray, config)}
      ${config.withQueries && makeEntityQueryMutationGql(t, importArray, contentArray, config)}
      ${config.withUpdates && makeEntityUpdateMutationGql(t, importArray, contentArray, config)}
      ${config.withDeletes && makeEntityDeleteMutationGql(t, importArray, contentArray, config)}
      `;
    });

  return {
    prepend: importArray,
    content: contentArray.join("\n")
  };
};

// --------------------------------------
//

function makeEntityModelFragmentsGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const entityName = namedType.name;
  const entityModelName = makeModelName(entityName, config.trimString);
  const entityFragmentName = makeFragmentName(entityName, config.trimString);
  const fields = (namedType.astNode as ObjectTypeDefinitionNode).fields;
  const scalarFieldNamesArray: string[] = [];

  if (!fields) return;

  fields.forEach(f => {
    if (SCALAR_TYPE_TEST(f)) {
      scalarFieldNamesArray.push(f.name.value);
    }
  });

  contentArray.push(`
    export const ${entityFragmentName} = gql\`
      fragment ${entityModelName}Fields on ${entityName} {
      ${scalarFieldNamesArray.join("\n      ")}
      }
    \`;`);
}

// --------------------------------------
//

function makeEntityQueryMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const entityShortCamelName = makeShortCamelCaseName(namedType.name, config.trimString);
  const entityModelName = makeModelName(entityName, config.trimString);
  const entityFragmentName = makeFragmentName(entityName, config.trimString);
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);

  contentArray.push(`
    const FETCH_${entityName.toUpperCase()}_MODEL_BYID = gql\`
      query fetch${entityModelName}ById($${entityShortCamelName}Id: ${primaryKeyIdPostGresFieldType}!) {
        ${entityName}_by_pk(id: $${entityShortCamelName}Id) {
          ...${entityFragmentName}
        }
      }
      \${${entityFragmentName}}
    \`;`);

  contentArray.push(`
    const FETCH_${entityName.toUpperCase()}_MODELS = gql\`
      query fetch${entityModelName}(
        $distinct_on: [${entityName}_select_column!]
        $where: ${entityName}_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [${entityName}_order_by!]
      ) {
        ${entityName}(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...${entityFragmentName}
        }
      }
      \${${entityFragmentName}}
    \`;`);

  if (!config.withFragments) importArray.push(makeFragmentsImport(entityName, config.fragmentImportFrom));
}

// --------------------------------------
//

function makeEntityInsertMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  if (!getPrimaryKeyIdField(namedType)) return;

  const entityName = namedType.name;
  const entityModelName = makeModelName(entityName, config.trimString);
  const entityFragmentName = makeFragmentName(entityName, config.trimString);

  contentArray.push(`
    const INSERT_${entityName.toUpperCase()}_MODEL = gql\`
      mutation insert${entityModelName}($objects: [${entityName}_insert_input!]!, $onConflict: ${entityName}_on_conflict) {
        insert_${entityName}(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...${entityFragmentName}
          }
        }
      }
      \${${entityFragmentName}}
    \`;`);

  if (!config.withFragments) importArray.push(makeFragmentsImport(entityName, config.fragmentImportFrom));
}

// --------------------------------------
//

function makeEntityUpdateMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const entityModelName = makeModelName(entityName, config.trimString);
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);
  const entityFragmentName = makeFragmentName(entityName, config.trimString);

  contentArray.push(`
    const UPDATE_${entityName.toUpperCase()}_MODEL_BYID = gql\`
      mutation update${entityModelName}ById($id: ${primaryKeyIdPostGresFieldType}, $set: ${entityName}_set_input) {
        update_${entityName}(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...${entityFragmentName}
          }
        }
      }
      \${${entityFragmentName}}
    \`;`);

  contentArray.push(`
    const UPDATE_${entityName.toUpperCase()}_MODELS = gql\`
      mutation update${entityModelName}($set: ${entityName}_set_input, $where:${entityName}_bool_exp!) {
        update_${entityName}(_set: $set, where: $where) {
          affected_rows
          returning {
            ...${entityFragmentName}
          }
        }
      }
      \${${entityFragmentName}}
    \`;`);

  if (!config.withFragments) importArray.push(makeFragmentsImport(entityName, config.fragmentImportFrom));
}

// --------------------------------------
//

function makeEntityDeleteMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const entityModelName = makeModelName(entityName, config.trimString);
  const primaryKeyIdPostGresFieldType = getIdPostGresFieldType(primaryKeyIdField);
  const entityFragmentName = makeFragmentName(entityName, config.trimString);

  contentArray.push(`
    const REMOVE_${entityName.toUpperCase()}_MODEL_BYID = gql\`
      mutation remove${entityModelName}ById($id: ${primaryKeyIdPostGresFieldType}) {
        delete_${entityName}(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      \${${entityFragmentName}}
    \`;`);

  contentArray.push(`
    const REMOVE_${entityName.toUpperCase()}_MODELS = gql\`
      mutation remove${entityModelName}($where:${entityName}_bool_exp!) {
        delete_${entityName}(where: $where) {
          affected_rows
        }
      }
      \${${entityFragmentName}}
    \`;`);

  if (!config.withFragments) importArray.push(makeFragmentsImport(entityName, config.fragmentImportFrom));
}

// --------------------------------------
//
