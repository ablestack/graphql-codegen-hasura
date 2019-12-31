import { FieldDefinitionNode, FragmentDefinitionNode } from "graphql";
import { TypeMap } from "graphql/type/schema";
import { ContentManager, makeImportStatement, makeShortName } from ".";
import { makeCamelCase, makePascalCase, getPrimaryKeyIdField } from "./utils";

// ---------------------------------
//
export function injectGlobalConfigCode({
  contentManager,
  typescriptCodegenOutputPath,
  withResolverTypes,
  withTypePolicies
}: {
  contentManager: ContentManager;
  typescriptCodegenOutputPath: string;
  withResolverTypes: boolean;
  withTypePolicies: boolean;
}) {
  if (withResolverTypes) {
    contentManager.addImport(`/* eslint-disable @typescript-eslint/class-name-casing */`);
    contentManager.addImport(`import { ApolloCache, NormalizedCacheObject, ApolloClient, StoreObject } from '@apollo/client';`);
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

  if (withTypePolicies) {
    contentManager.addImport(`import { TypePolicies } from '@apollo/client/cache/inmemory/policies';`);
  }
}

// ---------------------------------
//
export function injectEntityTypePolicy({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentManager: ContentManager;
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField?: FieldDefinitionNode | null;
  typescriptCodegenOutputPath: string;
}) {
  if (!primaryKeyIdField) return;

  const entityShortName = makeShortName(entityName, trimString);

  contentManager.addContent(`
    // ${entityName} Type Policy
    //------------------------------------------------
  `);

  contentManager.addContent(`
      export const ${entityShortName}TypePoliciesConfig: TypePolicies = {
        Query: {
          fields: {
            ${entityName}_by_pk:{
              keyArgs: ["id"],
              read(existingData, { args, toReference }) {
                return existingData || toReference({ __typename: '${entityName}', id: args!.id });
              },
            }
          },
        },
      };
  `);

  //contentManager.addImport(makeImportStatement(`${entityShortName}`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectEntityCacheRedirect({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentManager: ContentManager;
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField?: FieldDefinitionNode | null;
  typescriptCodegenOutputPath: string;
}) {
  if (!primaryKeyIdField) return;

  const entityShortName = makeShortName(entityName, trimString);

  contentManager.addContent(`
    // ${entityName} Type Policy
    //------------------------------------------------
  `);

  contentManager.addContent(`
    export const ${entityShortName}CacheRedirectConfig: CacheResolverMap = {
      Query: {
        ${entityName}_by_pk: (_, args, { getCacheKey }) =>
          getCacheKey({ __typename: '${entityName}', id: args.id })
      },
    };
  `);

  //contentManager.addImport(makeImportStatement(`${entityShortName}`, typescriptCodegenOutputPath));
}

// ---------------------------------
//

// ---------------------------------
//
export function injectEntityResolverTypes({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentManager: ContentManager;
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const entityPascalName = makePascalCase(entityName);
  const entityShortName = makeShortName(entityName, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const entityShortPascalCaseName = makePascalCase(entityShortName);

  contentManager.addContent(`
  // ${entityName} Resolver Types
  //------------------------------------------------

  /** 
   *  The ${entityName} Resolver types can be used as follows:
   * 
   *  export const ${entityShortPascalCaseName}Resolvers: RootResolver<${entityShortPascalCaseName}ResolverMap> = {
   *    ${entityName}: {
   *      anyFieldName: (${entityShortCamelCaseName}, args, context, info) => {
   *        return ${entityShortCamelCaseName}.anyFieldName;
   *      },
   *     },
   *  };
  */

  //------------------------------------------------
  `);

  contentManager.addContent(`
  export interface ${entityShortPascalCaseName}ResolverFn<TContext> {
    (${entityShortCamelCaseName}: Partial<${entityPascalName}>, args: Query_Root${entityPascalName}Args, context: TContext, info: any): any;
  }

  export interface ${entityShortPascalCaseName}ResolverMap<TContext = ApolloContext> {
    [field: string]: ${entityShortName}ResolverFn<TContext>;
  }
  `);

  contentManager.addImport(makeImportStatement(`${entityPascalName}`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Query_Root${entityPascalName}Args`, typescriptCodegenOutputPath));
}

// --------------------------------------
//

export function injectCombinedTypePolicyObject(fragmentDefinitionNodes: FragmentDefinitionNode[], contentManager: ContentManager, schemaTypeMap: TypeMap, trimString?: string) {
  const entitiesFromFragments = fragmentDefinitionNodes.map(fragmentDefinitionNode => {
    const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
    const relatedTableNamedType = schemaTypeMap[fragmentTableName];
    const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);

    if (!relatedTablePrimaryKeyIdField) return null;

    const entityShortName = makeShortName(relatedTableNamedType.name, trimString);
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
