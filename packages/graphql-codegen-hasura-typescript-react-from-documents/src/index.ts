import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { FragmentDefinitionNode, GraphQLSchema } from "graphql";
import { TypeMap } from "graphql/type/schema";
import { getPrimaryKeyIdField, injectDeleteReact, injectFetchReact, injectInsertReact, injectSharedReact, injectUpdateReact, ContentManager } from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  reactApolloVersion?: number;
  typescriptCodegenOutputPath: string;
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

  contentManager.addImport(`
    import { QueryHookOptions, useQuery, LazyQueryHookOptions, useLazyQuery, MutationHookOptions, useMutation } from '${
      config.reactApolloVersion === 3 ? "@apollo/client" : "@apollo/react-hooks"
    }'`);
  contentManager.addImport(`import { FetchResult } from '${config.reactApolloVersion === 3 ? "@apollo/client" : "apollo-link"}'`);
  contentManager.addImport(`import { ApolloClient, QueryLazyOptions, MutationFunctionOptions } from '${config.reactApolloVersion === 3 ? "@apollo/client" : "apollo-client"}'`);

  // get typemap from schema
  const typeMap = schema.getTypeMap();

  // find fragment documents
  const documentFragments = documents.flatMap(document => {
    return document.content.definitions.filter(definition => definition.kind === "FragmentDefinition");
  }) as FragmentDefinitionNode[];

  // iterate and generate
  documentFragments.map(fragmentDefinition => {
    injectEntitySharedTypeScript(fragmentDefinition, contentManager, typeMap, config);
    config.withQueries && injectEntityQueryTypeScript(fragmentDefinition, contentManager, typeMap, config);
    config.withInserts && injectEntityInsertMutationTypeScript(fragmentDefinition, contentManager, typeMap, config);
    config.withUpdates && injectEntityUpdateMutationTypeScript(fragmentDefinition, contentManager, typeMap, config);
    config.withDeletes && injectEntityDeleteMutationTypeScript(fragmentDefinition, contentManager, typeMap, config);
  });

  return {
    prepend: contentManager.generateImportArray(),
    content: contentManager.createContentString()
  };
};

// --------------------------------------
//

function injectEntitySharedTypeScript(fragmentDefinitionNode: FragmentDefinitionNode, contentManager: ContentManager, schemaTypeMap: TypeMap, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectSharedReact({
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

function injectEntityQueryTypeScript(fragmentDefinitionNode: FragmentDefinitionNode, contentManager: ContentManager, schemaTypeMap: TypeMap, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);

  injectFetchReact({
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
