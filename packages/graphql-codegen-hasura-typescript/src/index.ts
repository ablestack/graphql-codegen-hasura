import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { FragmentDefinitionNode, GraphQLSchema } from "graphql";
import { TypeMap } from "graphql/type/schema";
import {
  getPrimaryKeyIdField,
  injectDeleteHelpers,
  injectQueryHelpers,
  injectSubscriptionHelpers,
  injectInsertHelpers,
  injectUpdateHelpers,
  ContentManager,
  injectCacheHelpers,
  injectGlobalHelperCodePre,
  injectSharedHelpersPre,
  injectSharedHelpersPost,
  injectGlobalHelperCodePost,
} from "graphql-codegen-hasura-shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  reactApolloVersion?: number;
  typescriptCodegenOutputPath: string;
  trimString?: string;
  withClientAndCacheHelpers?: boolean;
  withQueries?: boolean;
  withSubscriptions?: boolean;
  withInserts?: boolean;
  withUpdates?: boolean;
  withDeletes?: boolean;
}

export const plugin: PluginFunction<CstmHasuraCrudPluginConfig> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: CstmHasuraCrudPluginConfig) => {
  // Set config defaults
  if (config.reactApolloVersion && config.reactApolloVersion !== 3) {
    throw new Error("Currently this codegen tool is only compatible with Apollo Client V3");
  }

  const contentManager = new ContentManager();

  injectGlobalHelperCodePre({
    contentManager,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath,
    withUpdates: config.withUpdates,
  });

  // get typemap from schema
  const typeMap = schema.getTypeMap();

  // find fragment documents
  const documentFragments = documents.flatMap((documentItem) => {
    return documentItem.document.definitions.filter((definition) => definition.kind === "FragmentDefinition");
  }) as FragmentDefinitionNode[];

  // iterate and generate
  documentFragments.map((fragmentDefinition) => {
    injectEntitySharedTypeScriptPre(fragmentDefinition, typeMap, contentManager, config);
    config.withClientAndCacheHelpers && injectClientAndCacheTypeScript(fragmentDefinition, typeMap, contentManager, config);
    config.withQueries && injectEntityQueryTypeScript(fragmentDefinition, typeMap, contentManager, config);
    config.withSubscriptions && injectEntitySubscriptionTypeScript(fragmentDefinition, typeMap, contentManager, config);
    config.withInserts && injectEntityInsertMutationTypeScript(fragmentDefinition, typeMap, contentManager, config);
    config.withUpdates && injectEntityUpdateMutationTypeScript(fragmentDefinition, typeMap, contentManager, config);
    config.withDeletes && injectEntityDeleteMutationTypeScript(fragmentDefinition, typeMap, contentManager, config);
    injectEntitySharedTypeScriptPost(fragmentDefinition, typeMap, contentManager, config);
  });

  injectGlobalHelperCodePost({
    contentManager,
    fragmentDefinitionNodes: documentFragments,
    schemaTypeMap: typeMap,
    trimString: config.trimString,
    withClientAndCacheHelpers: config.withClientAndCacheHelpers,
    withQueries: config.withQueries,
    withSubscriptions: config.withSubscriptions,
    withInserts: config.withInserts,
    withUpdates: config.withUpdates,
    withDeletes: config.withDeletes,
  });

  return {
    prepend: contentManager.generateImportArray(),
    content: contentManager.createContentString(),
  };
};

// --------------------------------------
//

function injectEntitySharedTypeScriptPre(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  contentManager: ContentManager,
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const entityNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(entityNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectSharedHelpersPre({
    contentManager,
    entityNamedType,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath,
  });
}

// --------------------------------------
//

function injectEntitySharedTypeScriptPost(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  contentManager: ContentManager,
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const entityNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(entityNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectSharedHelpersPost({
    contentManager,
    entityNamedType,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath,
    withClientAndCacheHelpers: config.withClientAndCacheHelpers,
    withQueries: config.withQueries,
    withSubscriptions: config.withSubscriptions,
    withUpdates: config.withUpdates,
    withInserts: config.withInserts,
    withDeletes: config.withDeletes,
  });
}

// --------------------------------------
//

function injectClientAndCacheTypeScript(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  contentManager: ContentManager,
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const entityNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(entityNamedType);

  injectCacheHelpers({
    contentManager,
    entityNamedType,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath,
  });
}

// --------------------------------------
//

function injectEntityQueryTypeScript(fragmentDefinitionNode: FragmentDefinitionNode, schemaTypeMap: TypeMap, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const entityNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(entityNamedType);

  injectQueryHelpers({
    contentManager,
    entityNamedType,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath,
  });
}

// --------------------------------------
//

function injectEntitySubscriptionTypeScript(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  contentManager: ContentManager,
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const entityNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(entityNamedType);

  injectSubscriptionHelpers({
    contentManager,
    entityNamedType,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath,
  });
}

// --------------------------------------
//

function injectEntityInsertMutationTypeScript(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  contentManager: ContentManager,
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const entityNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(entityNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectInsertHelpers({
    contentManager,
    entityNamedType,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath,
  });
}
// --------------------------------------
//

function injectEntityUpdateMutationTypeScript(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  contentManager: ContentManager,
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const entityNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(entityNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectUpdateHelpers({
    contentManager,
    entityNamedType,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath,
  });
}

// --------------------------------------
//

function injectEntityDeleteMutationTypeScript(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  contentManager: ContentManager,
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const entityNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(entityNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectDeleteHelpers({
    contentManager,
    entityNamedType,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath,
  });
}

// --------------------------------------
//
