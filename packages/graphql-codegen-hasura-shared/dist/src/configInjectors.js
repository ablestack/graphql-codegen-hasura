"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const utils_1 = require("./utils");
// ---------------------------------
//
function injectGlobalConfigCode({ contentManager, typescriptCodegenOutputPath, withResolverTypes, withTypePolicies }) {
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
exports.injectGlobalConfigCode = injectGlobalConfigCode;
// ---------------------------------
//
function injectEntityTypePolicy({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    if (!primaryKeyIdField)
        return;
    const entityShortName = _1.makeShortName(entityName, trimString);
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
exports.injectEntityTypePolicy = injectEntityTypePolicy;
// ---------------------------------
//
function injectEntityCacheRedirect({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    if (!primaryKeyIdField)
        return;
    const entityShortName = _1.makeShortName(entityName, trimString);
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
exports.injectEntityCacheRedirect = injectEntityCacheRedirect;
// ---------------------------------
//
// ---------------------------------
//
function injectEntityResolverTypes({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const entityPascalName = utils_1.makePascalCase(entityName);
    const entityShortName = _1.makeShortName(entityName, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const entityShortPascalCaseName = utils_1.makePascalCase(entityShortName);
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
    contentManager.addImport(_1.makeImportStatement(`${entityPascalName}`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Query_Root${entityPascalName}Args`, typescriptCodegenOutputPath));
}
exports.injectEntityResolverTypes = injectEntityResolverTypes;
// --------------------------------------
//
function injectCombinedTypePolicyObject(fragmentDefinitionNodes, contentManager, schemaTypeMap, trimString) {
    const uniqueEntityNamesFromFragments = utils_1.getUniqueEntitiesFromFragmentDefinitions({ fragmentDefinitionNodes, schemaTypeMap, trimString }).map(entityName => `${entityName}TypePoliciesConfig`);
    contentManager.addContent(`

  //------------------------------------
  //

  // COMBINED TYPE POLICIES CONFIG

  export const CombinedTypePoliciesConfig: TypePolicies = {
    Query: {
      fields: { 
        ${uniqueEntityNamesFromFragments.map(entityString => `...${entityString}.Query.fields`).join(",\n        ")}
      },
    },
  }`);
}
exports.injectCombinedTypePolicyObject = injectCombinedTypePolicyObject;
//# sourceMappingURL=configInjectors.js.map