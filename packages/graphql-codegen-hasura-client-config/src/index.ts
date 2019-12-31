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
  injectGlobalConfigCode
} from "../../shared";

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
  if (!config.reactApolloVersion && config.reactApolloVersion !== 3) {
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
  if (config.withResolverTypes) {
    injectTableResolversBaseTypes(contentManager, config);
  }

  documentFragments.map(fragmentDefinition => {
    if (config.withResolverTypes && config.reactApolloVersion === 3) injectTableResolverTypes(fragmentDefinition, contentManager, typeMap, config);
    if (config.withTypePolicies && config.reactApolloVersion === 3) injectTypePolicies(fragmentDefinition, contentManager, typeMap, config);
    if (config.withCacheRedirects && config.reactApolloVersion === 2) injectCacheRedirects(fragmentDefinition, contentManager, typeMap, config);
  });

  if (config.withTypePolicies && config.withCombinedTypePolicyObject && config.reactApolloVersion === 3) {
    injectCombinedTypePolicyObject(documentFragments, contentManager, typeMap, config);
  }

  if (config.withCacheRedirects && config.withCombinedCacheRedirectObject && config.reactApolloVersion === 2) {
    injectCombinedCacheRedirectObject(documentFragments, contentManager, typeMap, config);
  }

  return {
    prepend: contentManager.generateImportArray(),
    content: contentManager.createContentString()
  };
};

// --------------------------------------
//

function injectTableResolversBaseTypes(contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  contentManager.addContent(`
  export interface ApolloContext {
    cache: ApolloCache<NormalizedCacheObject>;
    client: ApolloClient<NormalizedCacheObject>;
    getCacheKey: (object: StoreObject) => string;
  }
  
  export interface RootResolver<TableResolverMap> {
    [table: string]: TableResolverMap;
  }
  `);
}
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

function injectCombinedTypePolicyObject(
  fragmentDefinitionNodes: FragmentDefinitionNode[],
  contentManager: ContentManager,
  schemaTypeMap: TypeMap,
  config: CstmHasuraCrudPluginConfig
) {
  const entitiesFromFragments = fragmentDefinitionNodes.map(fragmentDefinitionNode => {
    const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
    const relatedTableNamedType = schemaTypeMap[fragmentTableName];
    const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);

    if (!relatedTablePrimaryKeyIdField) return null;

    const entityShortName = makeShortName(relatedTableNamedType.name, config.trimString);
    return `${entityShortName}TypePoliciesConfig`;
  });

  const uniqueEntitiesFromFragments = [...new Set(entitiesFromFragments.filter(item => item != null))];

  contentManager.addContent(`

  //------------------------------------
  //

  // COMBINED TYPE POLICIES CONFIG

  export const CombinedTypePoliciesConfig: TypePolicies = {
    Query: {
      fields: { 
        ${uniqueEntitiesFromFragments.map(entityString => `...${entityString}.Query.fields`).join(",\n        ")}
      },
    },
  }`);
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
  const entitiesFromFragments = fragmentDefinitionNodes.map(fragmentDefinitionNode => {
    const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
    const relatedTableNamedType = schemaTypeMap[fragmentTableName];
    const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);

    if (!relatedTablePrimaryKeyIdField) return null;

    const entityShortName = makeShortName(relatedTableNamedType.name, config.trimString);
    return `${entityShortName}CacheRedirectConfig`;
  });

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
