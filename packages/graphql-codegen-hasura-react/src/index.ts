import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { FragmentDefinitionNode, GraphQLSchema } from "graphql";
import { TypeMap } from "graphql/type/schema";
import {
  ContentManager,
  getPrimaryKeyIdField,
  injectDeleteReact,
  injectQueryReact,
  injectInsertReact,
  injectUpdateReact,
  injectGlobalReactCodePre,
  injectSharedReactPre,
  injectGlobalReactCodePost,
  injectSharedReactPost,
  injectSubscriptionReact
} from "graphql-codegen-hasura-shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  reactApolloVersion?: number;
  typescriptCodegenOutputPath: string;
  trimString?: string;
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

  injectGlobalReactCodePre({
    contentManager,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath,
    withUpdates: config.withUpdates
  });

  // get typemap from schema
  const typeMap = schema.getTypeMap();

  // find fragment documents
  const documentFragments = documents.flatMap(documentItem => {
    return documentItem.document.definitions.filter(definition => definition.kind === "FragmentDefinition");
  }) as FragmentDefinitionNode[];

  // iterate and generate
  documentFragments.map(fragmentDefinition => {
    injectEntitySharedTypeScriptPre(fragmentDefinition, contentManager, typeMap, config);
    config.withQueries && injectEntityQueryTypeScript(fragmentDefinition, contentManager, typeMap, config);
    config.withSubscriptions && injectEntitySubscriptionTypeScript(fragmentDefinition, contentManager, typeMap, config);
    config.withInserts && injectEntityInsertMutationTypeScript(fragmentDefinition, contentManager, typeMap, config);
    config.withUpdates && injectEntityUpdateMutationTypeScript(fragmentDefinition, contentManager, typeMap, config);
    config.withDeletes && injectEntityDeleteMutationTypeScript(fragmentDefinition, contentManager, typeMap, config);
    injectEntitySharedTypeScriptPost(fragmentDefinition, typeMap, contentManager, config);
  });

  injectGlobalReactCodePost({
    contentManager,
    fragmentDefinitionNodes: documentFragments,
    schemaTypeMap: typeMap,
    trimString: config.trimString,
    withQueries: config.withQueries,
    withSubscriptions: config.withSubscriptions,
    withUpdates: config.withUpdates,
    withInserts: config.withInserts,
    withDeletes: config.withDeletes
  });

  return {
    prepend: contentManager.generateImportArray(),
    content: contentManager.createContentString()
  };
};

// --------------------------------------
//

function injectEntitySharedTypeScriptPre(
  fragmentDefinitionNode: FragmentDefinitionNode,
  contentManager: ContentManager,
  schemaTypeMap: TypeMap,
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectSharedReactPre({
    contentManager,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath
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
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectSharedReactPost({
    contentManager,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath,
    withQueries: config.withQueries,
    withSubscriptions: config.withSubscriptions,
    withInserts: config.withInserts,
    withUpdates: config.withUpdates,
    withDeletes: config.withDeletes
  });
}

// --------------------------------------
//

function injectEntityQueryTypeScript(fragmentDefinitionNode: FragmentDefinitionNode, contentManager: ContentManager, schemaTypeMap: TypeMap, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);

  injectQueryReact({
    contentManager,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath
  });
}

// --------------------------------------
//

function injectEntitySubscriptionTypeScript(
  fragmentDefinitionNode: FragmentDefinitionNode,
  contentManager: ContentManager,
  schemaTypeMap: TypeMap,
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);

  injectSubscriptionReact({
    contentManager,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath
  });
}

// --------------------------------------
//

function injectEntityInsertMutationTypeScript(
  fragmentDefinitionNode: FragmentDefinitionNode,
  contentManager: ContentManager,
  schemaTypeMap: TypeMap,
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectInsertReact({
    contentManager,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath
  });
}
// --------------------------------------
//

function injectEntityUpdateMutationTypeScript(
  fragmentDefinitionNode: FragmentDefinitionNode,
  contentManager: ContentManager,
  schemaTypeMap: TypeMap,
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectUpdateReact({
    contentManager,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath
  });
}

// --------------------------------------
//

function injectEntityDeleteMutationTypeScript(
  fragmentDefinitionNode: FragmentDefinitionNode,
  contentManager: ContentManager,
  schemaTypeMap: TypeMap,
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectDeleteReact({
    contentManager,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath
  });
}

// --------------------------------------
//
