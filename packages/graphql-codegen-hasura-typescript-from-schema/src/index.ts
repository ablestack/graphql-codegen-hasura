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
  makeFragmentName
} from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  reactApolloVersion?: number;
  typescriptCodegenOutputRelativePath: string;
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
    `import { ApolloClient } from '${config.reactApolloVersion === 3 ? "@apollo/client" : "apollo-client"}'`,
    `import { FetchResult } from '${config.reactApolloVersion === 3 ? "@apollo/client" : "apollo-link"}'`,
    `import { QueryOptions, MutationOptions } from '${config.reactApolloVersion === 3 ? "@apollo/client" : "react-apollo"}'`
  ];
  const contentArray: string[] = [];

  // iterate and generate
  Object.values(schema.getTypeMap())
    .filter(t => TABLE_TYPE_FILTER(t))
    .map(t => {
      return `
      ${makeEntitySharedTypeScript(t, importArray, contentArray, config)}
      ${config.withQueries && makeEntityQueryMutationTypeScript(t, importArray, contentArray, config)}
      ${config.withInserts && makeEntityInsertMutationTypeScript(t, importArray, contentArray, config)}
      ${config.withUpdates && makeEntityUpdateMutationTypeScript(t, importArray, contentArray, config)}
      ${config.withDeletes && makeEntityDeleteMutationTypeScript(t, importArray, contentArray, config)}
      `;
    });

  return {
    prepend: importArray,
    content: contentArray.join("\n")
  };
};

/// --------------------------------------
//

function makeEntitySharedTypeScript(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const fragmentName = makeFragmentName(namedType.name, config.trimString);

  injectSharedHelpers({
    contentArray,
    importArray,
    entityName: namedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField,
    typescriptCodegenOutputRelativePath: config.typescriptCodegenOutputRelativePath
  });
}
// --------------------------------------
//

function makeEntityQueryMutationTypeScript(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const fragmentName = makeFragmentName(namedType.name, config.trimString);

  injectFetchHelpers({
    contentArray,
    importArray,
    entityName: namedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField,
    typescriptCodegenOutputRelativePath: config.typescriptCodegenOutputRelativePath
  });
}

// --------------------------------------
//

function makeEntityInsertMutationTypeScript(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const fragmentName = makeFragmentName(namedType.name, config.trimString);

  injectInsertHelpers({
    contentArray,
    importArray,
    entityName: namedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField,
    typescriptCodegenOutputRelativePath: config.typescriptCodegenOutputRelativePath
  });
}
// --------------------------------------
//

function makeEntityUpdateMutationTypeScript(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const fragmentName = makeFragmentName(namedType.name, config.trimString);

  injectUpdateHelpers({
    contentArray,
    importArray,
    entityName: namedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField,
    typescriptCodegenOutputRelativePath: config.typescriptCodegenOutputRelativePath
  });
}

// --------------------------------------
//

function makeEntityDeleteMutationTypeScript(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const fragmentName = makeFragmentName(namedType.name, config.trimString);

  injectDeleteHelpers({
    contentArray,
    importArray,
    entityName: namedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField,
    typescriptCodegenOutputRelativePath: config.typescriptCodegenOutputRelativePath
  });
}

// --------------------------------------
//
