import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { FragmentDefinitionNode, GraphQLSchema } from "graphql";
import { TypeMap } from "graphql/type/schema";
import { getPrimaryKeyIdField, injectEntityTypePolicy, injectEntityResolverTypes, ContentManager, makeShortName } from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  typescriptCodegenOutputPath: string;
  trimString?: string;
  withTypePolicies?: boolean;
  withResolverTypes?: boolean;
}

export const plugin: PluginFunction<CstmHasuraCrudPluginConfig> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: CstmHasuraCrudPluginConfig) => {
  const contentManager = new ContentManager();

  if (config.withResolverTypes) {
    contentManager.addImport(`/* eslint-disable @typescript-eslint/class-name-casing */`);
    contentManager.addImport(`import { ApolloCache, NormalizedCacheObject, ApolloClient, StoreObject } from '@apollo/client';`);
  }

  if (config.withTypePolicies) {
    contentManager.addImport(`import { TypePolicies } from '@apollo/client/cache/inmemory/policies';`);
  }

  // get typemap from schema
  const typeMap = schema.getTypeMap();

  // find fragment documents
  const documentFragments = documents.flatMap(document => {
    return document.content.definitions.filter(definition => definition.kind === "FragmentDefinition");
  }) as FragmentDefinitionNode[];

  // iterate and generate
  if (config.withResolverTypes) {
    injectTableResolversBaseTypes(contentManager, config);

    documentFragments.map(fragmentDefinition => {
      if (config.withResolverTypes) injectTableResolverTypes(fragmentDefinition, contentManager, typeMap, config);
      if (config.withTypePolicies) injectTableTypePolicies(fragmentDefinition, contentManager, typeMap, config);
    });
  }

  if (config.withTypePolicies) {
    injectTablesTypePolicies(documentFragments, contentManager, typeMap, config);
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

function injectTableTypePolicies(fragmentDefinitionNode: FragmentDefinitionNode, contentManager: ContentManager, schemaTypeMap: TypeMap, config: CstmHasuraCrudPluginConfig) {
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

function injectTablesTypePolicies(fragmentDefinitionNodes: FragmentDefinitionNode[], contentManager: ContentManager, schemaTypeMap: TypeMap, config: CstmHasuraCrudPluginConfig) {
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

  export const CombinedTypePoliciesConfig: TypePolicies = Object.assign(
    \{\},
    ${uniqueEntitiesFromFragments.join(",\n    ")}
  );
  `);
}
// --------------------------------------
//
