import { GraphQLNamedType, GraphQLSchema, ObjectTypeDefinitionNode } from "graphql";
import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import {
  getIdFieldType,
  getPrimaryKeyIdField,
  makeFragmentName,
  makeFragmentsImport,
  makeModelEntityName,
  makeShortCamelCaseEntityName,
  SCALAR_TYPE_TEST,
  TABLE_TYPE_FILTER
} from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  fragmentImportFrom: string;
  withFragments?: boolean;
  withQueries?: boolean;
  withInserts?: boolean;
  withUpdates?: boolean;
  withDeletes?: boolean;
}

export const plugin: PluginFunction<CstmHasuraCrudPluginConfig> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: CstmHasuraCrudPluginConfig) => {
  const importArray: string[] = ["/* eslint-disable @typescript-eslint/no-unused-vars */", "import gql from 'graphql-tag';"];
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
  const entityModelName = makeModelEntityName(entityName);
  const entityFragmentName = makeFragmentName(entityName);
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
  const entityShortCamelName = makeShortCamelCaseEntityName(namedType.name);
  const entityModelName = makeModelEntityName(entityName);
  const entityFragmentName = makeFragmentName(entityName);
  const primaryKeyIdFieldType = getIdFieldType(primaryKeyIdField);

  contentArray.push(`
    const FETCH_${entityName.toUpperCase()}_MODEL = gql\`
      query fetch${entityModelName}($${entityShortCamelName}Id: ${primaryKeyIdFieldType}!) {
        ${entityName}_by_pk(id: $${entityShortCamelName}Id) {
          ...${entityFragmentName}
        }
      }
      \${${entityFragmentName}}
    \`;`);

  importArray.push(makeFragmentsImport(entityName, config.fragmentImportFrom));
}

// --------------------------------------
//

function makeEntityInsertMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  if (!getPrimaryKeyIdField(namedType)) return;

  const entityName = namedType.name;
  const entityModelName = makeModelEntityName(entityName);
  const entityFragmentName = makeFragmentName(entityName);

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

  importArray.push(makeFragmentsImport(entityName, config.fragmentImportFrom));
}

// --------------------------------------
//

function makeEntityUpdateMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const entityModelName = makeModelEntityName(entityName);
  const primaryKeyIdFieldType = getIdFieldType(primaryKeyIdField);
  const entityFragmentName = makeFragmentName(entityName);

  contentArray.push(`
    const UPDATE_${entityName.toUpperCase()}_MODEL = gql\`
      mutation update${entityModelName}ById($id: ${primaryKeyIdFieldType}, $changes: ${entityName}_set_input) {
        update_${entityName}(where: { id: { _eq: $id } }, _set: $changes) {
          affected_rows
          returning {
            ...${entityFragmentName}
          }
        }
      }
      \${${entityFragmentName}}
    \`;`);

  importArray.push(makeFragmentsImport(entityName, config.fragmentImportFrom));
}

// --------------------------------------
//

function makeEntityDeleteMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const entityModelName = makeModelEntityName(entityName);
  const primaryKeyIdFieldType = getIdFieldType(primaryKeyIdField);
  const entityFragmentName = makeFragmentName(entityName);

  contentArray.push(`
    const REMOVE_${entityName.toUpperCase()}_MODEL = gql\`
      mutation remove${entityModelName}ById($id: ${primaryKeyIdFieldType}) {
        delete_${entityName}(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      \${${entityFragmentName}}
    \`;`);

  importArray.push(makeFragmentsImport(entityName, config.fragmentImportFrom));
}

// --------------------------------------
//
