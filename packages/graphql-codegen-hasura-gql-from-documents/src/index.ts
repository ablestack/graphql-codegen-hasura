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

  // find fragment documents
  const documentFragments = documents.flatMap(document => {
    return document.content.definitions.filter(definition => definition.kind === "FragmentDefinition");
  }) as FragmentDefinitionNode[];

  // iterate and generate
  documentFragments.map(fragmentDefinition => {
    injectEntityModelSharedGql(fragmentDefinition, typeMap, contentManager, config);
    config.withQueries && injectEntityQueryGql(fragmentDefinition, typeMap, contentManager, config);
    config.withInserts && injectEntityInsertMutationGql(fragmentDefinition, typeMap, contentManager, config);
    config.withUpdates && injectEntityUpdateMutationGql(fragmentDefinition, typeMap, contentManager, config);
    config.withDeletes && injectEntityDeleteMutationGql(fragmentDefinition, typeMap, contentManager, config);
  });

  return {
    prepend: contentManager.generateImportArray(),
    content: contentManager.createContentString()
  };
};

// --------------------------------------
//

function injectEntityModelSharedGql(fragmentDefinitionNode: FragmentDefinitionNode, schemaTypeMap: TypeMap, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;

  contentManager.addContent(`
    // ${fragmentName} GQL
    //------------------------------------------------ 
  `);

  if (config.typescriptCodegenOutputPath) injectFragmentImport({ contentManager, fragmentName, fragmentRelativeImportPath: config.typescriptCodegenOutputPath });
}

// --------------------------------------
//

function injectEntityQueryGql(fragmentDefinitionNode: FragmentDefinitionNode, schemaTypeMap: TypeMap, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);

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

function injectEntityInsertMutationGql(fragmentDefinitionNode: FragmentDefinitionNode, schemaTypeMap: TypeMap, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
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

function injectEntityUpdateMutationGql(fragmentDefinitionNode: FragmentDefinitionNode, schemaTypeMap: TypeMap, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
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

function injectEntityDeleteMutationGql(fragmentDefinitionNode: FragmentDefinitionNode, schemaTypeMap: TypeMap, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
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
