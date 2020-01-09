"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const utils_1 = require("./utils");
// ---------------------------------
//
function injectGlobalHelperCode({ contentManager, typescriptCodegenOutputPath, withUpdates }) {
    contentManager.addImport(`import { ObjectWithId, generateOptimisticResponseForMutation } from 'graphql-codegen-hasura-core'`);
    contentManager.addImport(`import { ApolloClient, QueryOptions, MutationOptions, ApolloQueryResult, FetchResult, defaultDataIdFromObject } from '@apollo/client'`);
    contentManager.addContent(`
    // GLOBAL TYPES
    //------------------------------------------------
    export type RemoveEntitiesQueryHelperResultEx = { affected_rows:number };
  `);
    // // Inject utility methods as needed
    // withUpdates &&
    //   contentManager.addContent(`
    //   // UTILITY METHODS
    //   //------------------------------------------------
    // `);
}
exports.injectGlobalHelperCode = injectGlobalHelperCode;
// ---------------------------------
//
function injectSharedHelpers({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const fragmentTypeScriptTypeName = utils_1.makeFragmentTypeScriptTypeName(fragmentName);
    contentManager.addContent(`
    // ${entityName} HELPERS
    //------------------------------------------------

    export type ${fragmentName}ByIdHelperResultEx = { ${fragmentNameCamelCase}:${fragmentTypeScriptTypeName} | null | undefined };
    export type ${fragmentName}ObjectsHelperResultEx = { objects:${fragmentTypeScriptTypeName}[] };
  
  `);
    if (!primaryKeyIdTypeScriptFieldType.isNative) {
        const typeImport = _1.makeImportStatement(`${primaryKeyIdTypeScriptFieldType.typeName}`, typescriptCodegenOutputPath);
        contentManager.addImport(typeImport);
    }
    contentManager.addImport(_1.makeImportStatement(fragmentTypeScriptTypeName, typescriptCodegenOutputPath));
}
exports.injectSharedHelpers = injectSharedHelpers;
// ---------------------------------
//
function injectClientAndCacheHelpers({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const entityShortName = _1.makeShortName(entityName, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const fragmentTypeScriptTypeName = utils_1.makeFragmentTypeScriptTypeName(fragmentName);
    const fragmentDocName = utils_1.makeFragmentDocName(fragmentName);
    if (primaryKeyIdField) {
        contentManager.addContent(`
      // Direct Client & Cache Helpers
      //
      export function clientReadFragment${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id}: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: string }): ${fragmentTypeScriptTypeName} | null | undefined {
        return apolloClient.readFragment<${fragmentTypeScriptTypeName} | null | undefined>({fragment: ${fragmentName}FragmentDoc, fragmentName:'${fragmentName}', id:${fragmentNameCamelCase}Id });
      }
  
      export function clientWriteFragment${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Partial }: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Partial: Partial<${fragmentTypeScriptTypeName}> & { id: string } }): void {
        return apolloClient.writeFragment<Partial<${fragmentTypeScriptTypeName}>>({fragment: ${fragmentName}FragmentDoc, fragmentName:'${fragmentName}', id: defaultDataIdFromObject(${fragmentNameCamelCase}Partial), data: ${fragmentNameCamelCase}Partial });
      }
  
      export function cacheWriteFragment${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Partial }: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Partial: Partial<${fragmentTypeScriptTypeName}> & { id: string } }): void {
        return apolloClient.cache.writeFragment<Partial<${fragmentTypeScriptTypeName}>>({fragment: ${fragmentName}FragmentDoc, fragmentName:'${fragmentName}', id: defaultDataIdFromObject(${fragmentNameCamelCase}Partial), data: ${fragmentNameCamelCase}Partial });
      }

      export function clientReadQuery${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id}: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: string }): ${fragmentName}Fragment | null | undefined {
        return apolloClient.readQuery<${fragmentName}Fragment | null | undefined>({ query: Fetch${fragmentName}ByIdDocument, variables: { ${fragmentNameCamelCase}Id }  });
      }

      export function clientWriteQuery${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id, ${fragmentNameCamelCase} }: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: string, ${fragmentNameCamelCase}: ${fragmentName}Fragment | null }): void {
        return apolloClient.writeQuery<${fragmentName}Fragment | null>({ query: Fetch${fragmentName}ByIdDocument, variables: { ${fragmentNameCamelCase}Id }, data:${fragmentNameCamelCase} });
      }

      export function cacheReadQuery${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id}: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: string }): ${fragmentName}Fragment | null | undefined {
        return apolloClient.cache.readQuery<${fragmentName}Fragment | null | undefined>({ query: Fetch${fragmentName}ByIdDocument, variables: { ${fragmentNameCamelCase}Id }  });
      }

      export function cacheWriteQuery${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id, ${fragmentNameCamelCase} }: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: string, ${fragmentNameCamelCase}: ${fragmentName}Fragment | null }): void {
        return apolloClient.cache.writeQuery<${fragmentName}Fragment | null>({ query: Fetch${fragmentName}ByIdDocument, variables: { ${fragmentNameCamelCase}Id }, data:${fragmentNameCamelCase} });
      }
    `);
        contentManager.addImport(_1.makeImportStatement(fragmentDocName, typescriptCodegenOutputPath));
    }
}
exports.injectClientAndCacheHelpers = injectClientAndCacheHelpers;
// ---------------------------------
//
function injectFetchHelpers({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const entityShortName = _1.makeShortName(entityName, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const fragmentTypeScriptTypeName = utils_1.makeFragmentTypeScriptTypeName(fragmentName);
    if (primaryKeyIdField) {
        contentManager.addContent(`
      // Fetch Helper
      //
      export type Fetch${fragmentName}ByIdApolloQueryResult = ApolloQueryResult<Fetch${fragmentName}ByIdQuery>;
      export type Fetch${fragmentName}ByIdApolloQueryHelperResultEx = Fetch${fragmentName}ByIdApolloQueryResult & ${fragmentName}ByIdHelperResultEx;

      export async function fetch${fragmentName}ById({ apolloClient, ${entityShortCamelCaseName}Id, options }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: string, options?: Omit<QueryOptions<Fetch${fragmentName}QueryVariables>, 'query' | 'variables'> }): Promise<Fetch${fragmentName}ByIdApolloQueryHelperResultEx> {
        const query: Fetch${fragmentName}ByIdApolloQueryResult = await apolloClient.query<Fetch${fragmentName}ByIdQuery>({ query: Fetch${fragmentName}ByIdDocument, variables: { ${entityShortCamelCaseName}Id }, ...options });
        
        return { ...query, ${fragmentNameCamelCase}: query && query.data && query.data.${entityName}_by_pk }
      }
    `);
    }
    contentManager.addContent(`
      // Fetch Objects Helper
      //
      export type Fetch${fragmentName}ObjectsApolloQueryResult = ApolloQueryResult<Fetch${fragmentName}Query>;
      export type Fetch${fragmentName}ObjectsApolloQueryResultEx = Fetch${fragmentName}ObjectsApolloQueryResult & ${fragmentName}ObjectsHelperResultEx;

      export async function fetch${fragmentName}Objects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<Fetch${fragmentName}QueryVariables>, 'query'> }): Promise<Fetch${fragmentName}ObjectsApolloQueryResultEx> {
        const query: Fetch${fragmentName}ObjectsApolloQueryResult = await apolloClient.query<Fetch${fragmentName}Query>({ query: Fetch${fragmentName}Document, ...options });
        
        return { ...query, objects: (query && query.data && query.data.${entityName}) || [] }
      }
    `);
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`Fetch${fragmentName}ByIdQuery`, typescriptCodegenOutputPath));
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`Fetch${fragmentName}ByIdDocument`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Fetch${fragmentName}Query`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Fetch${fragmentName}Document`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Fetch${fragmentName}QueryVariables`, typescriptCodegenOutputPath));
}
exports.injectFetchHelpers = injectFetchHelpers;
// ---------------------------------
//
function injectInsertHelpers({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const entityPascalName = utils_1.makePascalCase(entityName);
    const entityShortName = _1.makeShortName(entityName, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    contentManager.addContent(`
    // Insert Helper
    //
    type Insert${fragmentName}FetchResult = FetchResult<Insert${fragmentName}Mutation, Record<string, any>, Record<string, any>>;
    export type Insert${fragmentName}FetchHelperResultEx = Insert${fragmentName}FetchResult & ${fragmentName}ByIdHelperResultEx;

    export async function insert${fragmentName}({ apolloClient, ${entityShortCamelCaseName}, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input & ObjectWithId<${primaryKeyIdTypeScriptFieldType.typeName}>, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation' | 'variables'> }): Promise<Insert${fragmentName}FetchHelperResultEx> {
      const mutationOptions:MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables> = { mutation: Insert${fragmentName}Document, variables: { objects: [${entityShortCamelCaseName}] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Insert${fragmentName}Mutation>({ operationType: 'insert', entityName:'${entityName}', objects:[${entityShortCamelCaseName}] }); }
      
      const mutation:Insert${fragmentName}FetchResult = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>(mutationOptions);
        
      return { ...mutation, ${fragmentNameCamelCase}:mutation && mutation.data && mutation.data.insert_${entityName} && mutation.data.insert_${entityName}!.returning && mutation.data.insert_${entityName}!.returning[0] };
    }

    export async function insert${fragmentName}WithOnConflict({ apolloClient, ${entityShortCamelCaseName}, onConflict, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input & ObjectWithId<${primaryKeyIdTypeScriptFieldType.typeName}>, onConflict: ${entityPascalName}_On_Conflict, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation' | 'variables'> }): Promise<Insert${fragmentName}FetchHelperResultEx> {
      const mutationOptions:MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables> = { mutation: Insert${fragmentName}Document, variables: { objects: [${entityShortCamelCaseName}], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Insert${fragmentName}Mutation>({ operationType: 'insert', entityName:'${entityName}', objects:[${entityShortCamelCaseName}] }); }
      
      const mutation:Insert${fragmentName}FetchResult = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, ${fragmentNameCamelCase}:mutation && mutation.data && mutation.data.insert_${entityName} && mutation.data.insert_${entityName}!.returning && mutation.data.insert_${entityName}!.returning[0] };
    }



  `);
    contentManager.addContent(`
    // Insert Objects Helper
    //
    type Insert${fragmentName}ObjectsFetchResult = FetchResult<Insert${fragmentName}Mutation, Record<string, any>, Record<string, any>>;
    export type Insert${fragmentName}ObjectsHelperResultEx = Insert${fragmentName}ObjectsFetchResult & ${fragmentName}ObjectsHelperResultEx;

    export async function insert${fragmentName}Objects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation'> }): Promise<Insert${fragmentName}ObjectsHelperResultEx> {
      const mutation: Insert${fragmentName}ObjectsFetchResult = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>({ mutation: Insert${fragmentName}Document, ...options });
       
      return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_${entityName} && mutation.data.insert_${entityName}!.returning) || [] };
    }
  `);
    contentManager.addImport(_1.makeImportStatement(`${entityPascalName}_Insert_Input`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${entityPascalName}_On_Conflict`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Insert${fragmentName}Mutation`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Insert${fragmentName}MutationVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Insert${fragmentName}WithOnConflictMutationVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Insert${fragmentName}Document`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Insert${fragmentName}WithOnConflictDocument`, typescriptCodegenOutputPath));
}
exports.injectInsertHelpers = injectInsertHelpers;
// ---------------------------------
//
function injectUpdateHelpers({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const entityPascalName = utils_1.makePascalCase(entityName);
    const entityShortName = _1.makeShortName(entityName, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    contentManager.addContent(`
    // Update Helper
    //
    type Update${fragmentName}ByIdQueryResult = FetchResult<Update${fragmentName}ByIdMutation, Record<string, any>, Record<string, any>>;
    export type Update${fragmentName}ByIdHelperResultEx = Update${fragmentName}ByIdQueryResult & ${fragmentName}ByIdHelperResultEx;

    export async function update${fragmentName}ById({ apolloClient, ${entityShortCamelCaseName}Id, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, set: ${entityPascalName}_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, 'mutation'> }): Promise<Update${fragmentName}ByIdHelperResultEx> {
      const mutationOptions:MutationOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables> = { mutation: Update${fragmentName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Update${fragmentName}ByIdMutation>({ operationType: 'update', entityName:'${entityName}', objects:[{ id:${entityShortCamelCaseName}Id, ...set }] }); }

      const mutation:Update${fragmentName}ByIdQueryResult = await apolloClient.mutate<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, ${fragmentNameCamelCase}:mutation && mutation.data && mutation.data.update_${entityName} && mutation.data.update_${entityName}!.returning && mutation.data.update_${entityName}!.returning[0] };
    }
  `);
    contentManager.addContent(`
    // Update Objects Helper
    //
    type Update${fragmentName}ObjectsFetchResult = FetchResult<Update${fragmentName}Mutation, Record<string, any>, Record<string, any>>;
    export type Update${fragmentName}ObjectsHelperResultEx = Update${fragmentName}ObjectsFetchResult & ${fragmentName}ObjectsHelperResultEx;

    export async function update${fragmentName}Objects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>, 'mutation'> }): Promise<Update${fragmentName}ObjectsHelperResultEx> {  
      const mutation:Update${fragmentName}ObjectsFetchResult = await apolloClient.mutate<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>({ mutation: Update${fragmentName}Document, ...options } );
        
      return { ...mutation, objects:(mutation && mutation.data && mutation.data.update_${entityName} && mutation.data.update_${entityName}!.returning) || [] };
    }
  `);
    contentManager.addImport(_1.makeImportStatement(`${entityPascalName}_Set_Input`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Update${fragmentName}ByIdMutation`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Update${fragmentName}ByIdMutationVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Update${fragmentName}ByIdDocument`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Update${fragmentName}Mutation`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Update${fragmentName}MutationVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Update${fragmentName}Document`, typescriptCodegenOutputPath));
}
exports.injectUpdateHelpers = injectUpdateHelpers;
// ---------------------------------
//
function injectDeleteHelpers({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const entityShortName = _1.makeShortName(entityName, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const entityModelName = _1.makeModelName(entityName, trimString);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    contentManager.addContent(`  

    // Delete Helper
    //

    type Remove${entityModelName}ByIdQueryResult = FetchResult<Remove${entityModelName}ByIdMutation, Record<string, any>, Record<string, any>>;
    export type Remove${entityModelName}ByIdQueryHelperResultEx = Remove${entityModelName}ByIdQueryResult & RemoveEntitiesQueryHelperResultEx;
  
    export async function remove${entityModelName}ById({ apolloClient, ${entityShortCamelCaseName}Id, options } :{ apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, options?: Omit<MutationOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, 'mutation'> }): Promise<Remove${entityModelName}ByIdQueryHelperResultEx> {
      const mutation:Remove${entityModelName}ByIdQueryResult = await apolloClient.mutate<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>({ mutation: Remove${entityModelName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id, }, ...options } );
    
      return { ...mutation, affected_rows:(mutation && mutation.data && mutation.data.delete_${entityName} && mutation.data.delete_${entityName}!.affected_rows) || 0 };
    }
  `);
    contentManager.addContent(`
    type Remove${entityModelName}ObjectsQueryResult = FetchResult<Remove${entityModelName}Mutation, Record<string, any>, Record<string, any>>;
    export type Remove${entityModelName}ObjectsQueryHelperResultEx = Remove${entityModelName}ObjectsQueryResult & RemoveEntitiesQueryHelperResultEx;  
  
    export async function remove${entityModelName}Objects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, 'mutation'> }): Promise<Remove${entityModelName}ObjectsQueryHelperResultEx> {  
        const mutation:Remove${entityModelName}ByIdQueryResult = await apolloClient.mutate<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>({ mutation: Remove${entityModelName}Document, ...options } );
          
        return { ...mutation, affected_rows:(mutation && mutation.data && mutation.data.delete_${entityName} && mutation.data.delete_${entityName}!.affected_rows) || 0 };
      }
  `);
    contentManager.addImport(_1.makeImportStatement(`Remove${entityModelName}Mutation`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Remove${entityModelName}MutationVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Remove${entityModelName}Document`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Remove${entityModelName}ByIdMutation`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Remove${entityModelName}ByIdMutationVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Remove${entityModelName}ByIdDocument`, typescriptCodegenOutputPath));
}
exports.injectDeleteHelpers = injectDeleteHelpers;
//# sourceMappingURL=helperInjectors.js.map