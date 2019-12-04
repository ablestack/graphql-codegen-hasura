import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { FragmentDefinitionNode, GraphQLSchema } from "graphql";
import { TypeMap } from "graphql/type/schema";
import { getPrimaryKeyIdField, injectDeleteGql, injectFetchGql, injectFragmentImport, injectInsertGql, injectUpdateGql, ContentManager } from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  reactApolloVersion?: number;
  typescriptCodegenOutputPath?: string;
  trimString?: string;
  withQueries?: boolean;
  withInserts?: boolean;
  withUpdates?: boolean;
  withDeletes?: boolean;
}

export const plugin: PluginFunction<CstmHasuraCrudPluginConfig> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: CstmHasuraCrudPluginConfig) => {
  // Set config defaults
  if (!config.reactApolloVersion) config.reactApolloVersion = 3;

  const contentManager = new ContentManager();

  contentManager.addImport("/* eslint-disable @typescript-eslint/no-unused-vars */");
  //contentManager.addImport(`import gql from '${config.reactApolloVersion === 3 ? "@apollo/client" : "graphql-tag"}';`);  //graphql-code-generator still only picking up gql from 'graphql-tag' import. Will switch to "@apollo/client" import when this issue is addressed
  contentManager.addImport(`import gql from 'graphql-tag';`);

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
      ${makeEntityModelSharedGql(fd, typeMap, contentManager, config)}
      ${config.withQueries && makeEntityQueryMutationGql(fd, typeMap, contentManager, config)}
      ${config.withInserts && makeEntityInsertMutationGql(fd, typeMap, contentManager, config)}
      ${config.withUpdates && makeEntityUpdateMutationGql(fd, typeMap, contentManager, config)}
      ${config.withDeletes && makeEntityDeleteMutationGql(fd, typeMap, contentManager, config)}
      `;
        });
    })
    .flat();

  return {
    prepend: contentManager.generateImportArray(),
    content: contentManager.createContentString()
  };
};

// --------------------------------------
//

function makeEntityModelSharedGql(fragmentDefinitionNode: FragmentDefinitionNode, schemaTypeMap: TypeMap, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;

  contentManager.addContent(`
    // ${fragmentName} GQL
    //------------------------------------------------ 
  `);

  if (config.typescriptCodegenOutputPath) injectFragmentImport({ contentManager, fragmentName, fragmentRelativeImportPath: config.typescriptCodegenOutputPath });
}

// --------------------------------------
//

function makeEntityQueryMutationGql(fragmentDefinitionNode: FragmentDefinitionNode, schemaTypeMap: TypeMap, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectFetchGql({
    contentManager,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//

function makeEntityInsertMutationGql(fragmentDefinitionNode: FragmentDefinitionNode, schemaTypeMap: TypeMap, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectInsertGql({
    contentManager,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//

function makeEntityUpdateMutationGql(fragmentDefinitionNode: FragmentDefinitionNode, schemaTypeMap: TypeMap, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectUpdateGql({
    contentManager,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//

function makeEntityDeleteMutationGql(fragmentDefinitionNode: FragmentDefinitionNode, schemaTypeMap: TypeMap, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectDeleteGql({
    contentManager,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//
