import { GraphQLNamedType, GraphQLSchema, ObjectTypeDefinitionNode, FragmentDefinitionNode } from "graphql";
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
  TABLE_TYPE_FILTER,
  injectFragmentGql,
  injectFetchHelpers,
  injectInsertHelpers,
  injectUpdateHelpers,
  injectDeleteHelpers
} from "../../shared";
import { TypeMap } from "graphql/type/schema";

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
      ${makeEntityModelSharedGql(t, importArray, contentArray, config)}
      ${config.withQueries && makeEntityQueryMutationGql(t, importArray, contentArray, config)}
      ${config.withInserts && makeEntityInsertMutationGql(t, importArray, contentArray, config)}
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

function makeEntityModelSharedGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const entityName = namedType.name;

  contentArray.push(`
    // ${entityName} GQL
    //------------------------------------------------
  `);
}

// --------------------------------------
//

function makeEntityQueryMutationGql(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  importArray: string[],
  contentArray: string[],
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectFetchHelpers({
    contentArray,
    importArray,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    withFragments: config.withFragments,
    fragmentImportFrom: config.fragmentImportFrom,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//

function makeEntityInsertMutationGql(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  importArray: string[],
  contentArray: string[],
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectInsertHelpers({
    contentArray,
    importArray,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    withFragments: config.withFragments,
    fragmentImportFrom: config.fragmentImportFrom,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//

function makeEntityUpdateMutationGql(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  importArray: string[],
  contentArray: string[],
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectUpdateHelpers({
    contentArray,
    importArray,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    withFragments: config.withFragments,
    fragmentImportFrom: config.fragmentImportFrom,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//

function makeEntityDeleteMutationGql(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  importArray: string[],
  contentArray: string[],
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectDeleteHelpers({
    contentArray,
    importArray,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    withFragments: config.withFragments,
    fragmentImportFrom: config.fragmentImportFrom,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//
