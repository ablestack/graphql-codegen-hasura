import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { GraphQLNamedType, GraphQLSchema } from "graphql";
import {
  getPrimaryKeyIdField,
  injectDeleteHelpers,
  injectFetchHelpers,
  injectInsertHelpers,
  injectSharedHelpers,
  injectUpdateHelpers,
  TABLE_TYPE_FILTER,
  makeFragmentName,
  ContentManager
} from "../../shared";
import { injectUtilityMethodGenerateOptimisticResponseForMutationById } from "../../shared/sharedInjectors";

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
  if (!config.reactApolloVersion) config.reactApolloVersion = 2;

  const contentManager = new ContentManager();

  contentManager.addImport(`import { ApolloClient, QueryOptions, MutationOptions } from '${config.reactApolloVersion === 3 ? "@apollo/client" : "apollo-client"}'`);

  // Inject utility methods as needed
  config.withUpdates &&
    contentManager.addContent(`
    // UTILITY METHODS
    //------------------------------------------------
  `);
  config.withUpdates && injectUtilityMethodGenerateOptimisticResponseForMutationById({ contentManager });

  // iterate and generate
  Object.values(schema.getTypeMap())
    .filter(t => TABLE_TYPE_FILTER(t))
    .map(t => {
      injectEntitySharedTypeScript(t, contentManager, config);
      config.withQueries && injectEntityQueryTypeScript(t, contentManager, config);
      config.withInserts && injectEntityInsertMutationTypeScript(t, contentManager, config);
      config.withUpdates && injectEntityUpdateMutationTypeScript(t, contentManager, config);
      config.withDeletes && injectEntityDeleteMutationTypeScript(t, contentManager, config);
    });

  return {
    prepend: contentManager.generateImportArray(),
    content: contentManager.createContentString()
  };
};

/// --------------------------------------
//

function injectEntitySharedTypeScript(namedType: GraphQLNamedType, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const fragmentName = makeFragmentName(namedType.name, config.trimString);

  injectSharedHelpers({
    contentManager,
    entityName: namedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath
  });
}
// --------------------------------------
//

function injectEntityQueryTypeScript(namedType: GraphQLNamedType, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);

  const fragmentName = makeFragmentName(namedType.name, config.trimString);

  injectFetchHelpers({
    contentManager,
    entityName: namedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath
  });
}

// --------------------------------------
//

function injectEntityInsertMutationTypeScript(namedType: GraphQLNamedType, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const fragmentName = makeFragmentName(namedType.name, config.trimString);

  injectInsertHelpers({
    contentManager,
    entityName: namedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath
  });
}
// --------------------------------------
//

function injectEntityUpdateMutationTypeScript(namedType: GraphQLNamedType, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const fragmentName = makeFragmentName(namedType.name, config.trimString);

  injectUpdateHelpers({
    contentManager,
    entityName: namedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath
  });
}

// --------------------------------------
//

function injectEntityDeleteMutationTypeScript(namedType: GraphQLNamedType, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const fragmentName = makeFragmentName(namedType.name, config.trimString);

  injectDeleteHelpers({
    contentManager,
    entityName: namedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath
  });
}

// --------------------------------------
//
