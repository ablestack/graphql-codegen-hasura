import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { FragmentDefinitionNode, GraphQLSchema } from "graphql";
import { TypeMap } from "graphql/type/schema";
import {
  getPrimaryKeyIdField,
  injectEntityTypePolicy,
  injectEntityResolverTypes,
  ContentManager,
  makeShortName,
  injectEntityCacheRedirect,
  injectGlobalConfigCode,
  injectCombinedTypePolicyObject,
  getUniqueEntitiesFromFragmentDefinitions
} from "graphql-codegen-hasura-shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  reactApolloVersion?: number;
  typescriptCodegenOutputPath: string;
  trimString?: string;
  withTypePolicies?: boolean;
  withResolverTypes?: boolean;
  withCombinedTypePolicyObject: boolean;
  withCacheRedirects: boolean;
  withCombinedCacheRedirectObject: boolean;
}

export const plugin: PluginFunction<CstmHasuraCrudPluginConfig> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: CstmHasuraCrudPluginConfig) => {
  // Set config defaults
  if (config.reactApolloVersion && config.reactApolloVersion !== 3) {
    throw new Error("Currently this codegen tool is only compatible with Apollo Client V3");
  }

  const contentManager = new ContentManager();

  injectGlobalConfigCode({
    contentManager,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath,
    withResolverTypes: config.withResolverTypes,
    withTypePolicies: config.withTypePolicies
  });

  // get typemap from schema
  const typeMap = schema.getTypeMap();

  // find fragment documents
  const documentFragments = documents.flatMap(document => {
    return document.content.definitions.filter(definition => definition.kind === "FragmentDefinition");
  }) as FragmentDefinitionNode[];

  // iterate and generate
  documentFragments.map(fragmentDefinition => {
    if (config.withResolverTypes) injectTableResolverTypes(fragmentDefinition, contentManager, typeMap, config);
    if (config.withTypePolicies) injectTypePolicies(fragmentDefinition, contentManager, typeMap, config);
  });

  // Inject combined TypePolicy object per config
  if (config.withTypePolicies && config.withCombinedTypePolicyObject) {
    injectCombinedTypePolicyObject(documentFragments, contentManager, typeMap, config.trimString);
  }

  return {
    prepend: contentManager.generateImportArray(),
    content: contentManager.createContentString()
  };
};

// --------------------------------------
//

function injectTableResolverTypes(fragmentDefinitionNode: FragmentDefinitionNode, contentManager: ContentManager, schemaTypeMap: TypeMap, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);

  injectEntityResolverTypes({
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

function injectTypePolicies(fragmentDefinitionNode: FragmentDefinitionNode, contentManager: ContentManager, schemaTypeMap: TypeMap, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);

  injectEntityTypePolicy({
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

function injectCacheRedirects(fragmentDefinitionNode: FragmentDefinitionNode, contentManager: ContentManager, schemaTypeMap: TypeMap, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);

  injectEntityCacheRedirect({
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

function injectCombinedCacheRedirectObject(
  fragmentDefinitionNodes: FragmentDefinitionNode[],
  contentManager: ContentManager,
  schemaTypeMap: TypeMap,
  config: CstmHasuraCrudPluginConfig
) {
  const entitiesFromFragments = getUniqueEntitiesFromFragmentDefinitions({ fragmentDefinitionNodes, schemaTypeMap, trimString: config.trimString }).map(
    entityName => `${entityName}CacheRedirectConfig`
  );
  const uniqueEntitiesFromFragments = [...new Set(entitiesFromFragments.filter(item => item != null))];

  contentManager.addContent(`

  //------------------------------------
  //

  // COMBINED CACHE REDIRECT CONFIG

  export const CombinedCacheRedirectConfig: CacheResolverMap = {
    Query: {
      ${uniqueEntitiesFromFragments.map(entityString => `...${entityString}.Query`).join(",\n      ")}
    },
  }`);
}
// --------------------------------------
//
