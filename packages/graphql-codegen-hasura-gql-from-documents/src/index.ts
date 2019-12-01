import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { FragmentDefinitionNode, GraphQLSchema } from "graphql";
import { TypeMap } from "graphql/type/schema";
import { getPrimaryKeyIdField, injectDeleteGql, injectFetchGql, injectFragmentImport, injectInsertGql, injectUpdateGql } from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  reactApolloVersion?: number;
  typescriptCodegenOutputRelativePath?: string;
  trimString?: string;
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

  // get typemap from schema
  const typeMap = schema.getTypeMap();

  // iterate and generate
  documents
    .map(document => {
      document.content.definitions
        .filter(definition => definition.kind === "FragmentDefinition")
        .map(definition => {
          const fd = definition as FragmentDefinitionNode;
          return `
      ${makeEntityModelSharedGql(fd, typeMap, importArray, contentArray, config)}
      ${config.withQueries && makeEntityQueryMutationGql(fd, typeMap, importArray, contentArray, config)}
      ${config.withInserts && makeEntityInsertMutationGql(fd, typeMap, importArray, contentArray, config)}
      ${config.withUpdates && makeEntityUpdateMutationGql(fd, typeMap, importArray, contentArray, config)}
      ${config.withDeletes && makeEntityDeleteMutationGql(fd, typeMap, importArray, contentArray, config)}
      `;
        });
    })
    .flat();

  return {
    prepend: importArray,
    content: contentArray.join("\n")
  };
};

// --------------------------------------
//

function makeEntityModelSharedGql(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  importArray: string[],
  contentArray: string[],
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;

  contentArray.push(`
    // ${fragmentName} GQL
    //------------------------------------------------ 
  `);

  if (config.typescriptCodegenOutputRelativePath) injectFragmentImport({ importArray, fragmentName, fragmentRelativeImportPath: config.typescriptCodegenOutputRelativePath });
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

  injectFetchGql({
    contentArray,
    importArray,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
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

  injectInsertGql({
    contentArray,
    importArray,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
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

  injectUpdateGql({
    contentArray,
    importArray,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
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

  injectDeleteGql({
    contentArray,
    importArray,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//
