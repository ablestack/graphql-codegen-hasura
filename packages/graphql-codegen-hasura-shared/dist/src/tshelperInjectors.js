"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const utils_1 = require("./utils");
// ---------------------------------
//
function injectGlobalHelperCodePre({ contentManager, typescriptCodegenOutputPath, withUpdates }) {
    contentManager.addImport(`import { generateOptimisticResponseForMutation, generateUpdateFunctionForMutation, ObjectWithId } from 'graphql-codegen-hasura-core'`);
    contentManager.addImport(`import { ApolloClient, ApolloQueryResult, defaultDataIdFromObject, FetchResult, MutationOptions, ObservableQuery, QueryOptions, SubscriptionOptions, Observable } from '@apollo/client'`);
    contentManager.addContent(`
    // GLOBAL TYPES
    //------------------------------------------------
    export type RemoveEntitiesQueryHelperResultEx = { affected_rows:number };
  `);
}
exports.injectGlobalHelperCodePre = injectGlobalHelperCodePre;
// ---------------------------------
//
function injectSharedHelpersPre({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const fragmentTypeScriptTypeName = utils_1.makeFragmentTypeScriptTypeName(fragmentName);
    contentManager.addContent(`
    // ${entityNamedType.name} HELPERS
    //------------------------------------------------

    export type ${fragmentNamePascalCase}ByIdHelperResultEx = { ${fragmentNameCamelCase}:${fragmentTypeScriptTypeName} | null | undefined };
    export type ${fragmentNamePascalCase}ObjectsHelperResultEx = { objects:${fragmentTypeScriptTypeName}[] };
  
  `);
    if (!primaryKeyIdTypeScriptFieldType.isNative) {
        const typeImport = _1.makeImportStatement(`${primaryKeyIdTypeScriptFieldType.typeName}`, typescriptCodegenOutputPath);
        contentManager.addImport(typeImport);
    }
    contentManager.addImport(_1.makeImportStatement(fragmentTypeScriptTypeName, typescriptCodegenOutputPath));
}
exports.injectSharedHelpersPre = injectSharedHelpersPre;
// ---------------------------------
//
function injectClientAndCacheHelpers({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const entityShortName = _1.makeShortName(entityNamedType.name, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const fragmentTypeScriptTypeName = utils_1.makeFragmentTypeScriptTypeName(fragmentName);
    const fragmentDocName = utils_1.makeFragmentDocName(fragmentName);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    const queryByIdName = `Query${fragmentNamePascalCase}ById`;
    if (primaryKeyIdField) {
        contentManager.addContent(`
      // Direct Client & Cache Helpers
      //
      function clientReadFragment${fragmentNamePascalCase}ById({ apolloClient, ${entityShortCamelCaseName}Id}: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName} }): ${fragmentTypeScriptTypeName} | null | undefined {
        return apolloClient.readFragment<${fragmentTypeScriptTypeName} | null | undefined>({ fragment: ${fragmentDocName}, fragmentName:'${fragmentName}', id: defaultDataIdFromObject({ __typename: '${entityNamedType.name}', id:${entityShortCamelCaseName}Id }) });
      }
  
      function clientWriteFragment${fragmentNamePascalCase}ById({ apolloClient, ${entityShortCamelCaseName}Id, ${fragmentNameCamelCase}Partial }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}Partial: Partial<${fragmentTypeScriptTypeName}> | null }): void {
        return apolloClient.writeFragment<Partial<${fragmentTypeScriptTypeName}> | null>({ fragment: ${fragmentDocName}, fragmentName:'${fragmentName}', id: defaultDataIdFromObject({ ...${fragmentNameCamelCase}Partial, id:${entityShortCamelCaseName}Id, __typename: '${entityNamedType.name}' }), data: { ...${fragmentNameCamelCase}Partial, __typename: '${entityNamedType.name}' } });
      }
  
      function cacheWriteFragment${fragmentNamePascalCase}ById({ apolloClient, ${entityShortCamelCaseName}Id, ${fragmentNameCamelCase}Partial }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}Partial: Partial<${fragmentTypeScriptTypeName}> | null }): void {
        return apolloClient.cache.writeFragment<Partial<${fragmentTypeScriptTypeName}> | null>({ fragment: ${fragmentDocName}, fragmentName:'${fragmentName}', id: defaultDataIdFromObject({ ...${fragmentNameCamelCase}Partial, id:${entityShortCamelCaseName}Id, __typename: '${entityNamedType.name}' }), data: { ...${fragmentNameCamelCase}Partial, __typename: '${entityNamedType.name}' } });
      }

      function clientReadQuery${fragmentNamePascalCase}ById({ apolloClient, ${entityShortCamelCaseName}Id}: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName} }): ${fragmentNamePascalCase}Fragment | null | undefined {
        return apolloClient.readQuery<${fragmentNamePascalCase}Fragment | null >({ query: ${queryByIdName}Document, variables: { ${entityShortCamelCaseName}Id }  });
      }

      function clientWriteQuery${fragmentNamePascalCase}ById({ apolloClient, ${entityShortCamelCaseName}Id, ${fragmentNameCamelCase} }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}: ${fragmentNamePascalCase}Fragment | null }): void {
        return apolloClient.writeQuery<${fragmentNamePascalCase}Fragment | null>({ query: ${queryByIdName}Document, variables: { ${entityShortCamelCaseName}Id }, data: (${fragmentNameCamelCase} ? { ...${fragmentNameCamelCase}, __typename: '${entityNamedType.name}' } : null) });
      }

      function cacheWriteQuery${fragmentNamePascalCase}ById({ apolloClient, ${entityShortCamelCaseName}Id, ${fragmentNameCamelCase} }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}: ${fragmentNamePascalCase}Fragment | null }): void {
        return apolloClient.cache.writeQuery<${fragmentNamePascalCase}Fragment | null>({ query: ${queryByIdName}Document, variables: { ${entityShortCamelCaseName}Id }, data: (${fragmentNameCamelCase} ? { ...${fragmentNameCamelCase}, __typename: '${entityNamedType.name}' } : null) });
      }
    `);
        contentManager.addImport(_1.makeImportStatement(fragmentDocName, typescriptCodegenOutputPath));
        if (primaryKeyIdField)
            contentManager.addImport(_1.makeImportStatement(`${queryByIdName}Query`, typescriptCodegenOutputPath));
        if (primaryKeyIdField)
            contentManager.addImport(_1.makeImportStatement(`${queryByIdName}Document`, typescriptCodegenOutputPath));
        if (primaryKeyIdField)
            contentManager.addImport(_1.makeImportStatement(`${queryByIdName}QueryVariables`, typescriptCodegenOutputPath));
    }
}
exports.injectClientAndCacheHelpers = injectClientAndCacheHelpers;
// ---------------------------------
//
function injectQueryHelpers({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const queryByIdName = `Query${fragmentNamePascalCase}ById`;
    const queryObjectsName = `Query${fragmentNamePascalCase}Objects`;
    const entityShortName = _1.makeShortName(entityNamedType.name, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const fragmentTypeScriptTypeName = utils_1.makeFragmentTypeScriptTypeName(fragmentName);
    const queryByIdNameCamelCase = utils_1.makeCamelCase(queryByIdName);
    const queryObjectsNameCamelCase = utils_1.makeCamelCase(queryObjectsName);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    if (primaryKeyIdField) {
        contentManager.addContent(`
      // Query Fetch Helper
      //
      export type ${queryByIdName}ApolloQueryResult = ApolloQueryResult<${queryByIdName}Query>;
      export type ${queryByIdName}ApolloQueryHelperResultEx = ${queryByIdName}ApolloQueryResult & ${fragmentNamePascalCase}ByIdHelperResultEx;

      async function ${queryByIdNameCamelCase}({ apolloClient, ${entityShortCamelCaseName}Id, options }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, options?: Omit<QueryOptions<${queryByIdName}QueryVariables>, 'query' | 'variables'> }): Promise<${queryByIdName}ApolloQueryHelperResultEx> {
        const query: ${queryByIdName}ApolloQueryResult = await apolloClient.query<${queryByIdName}Query>({ query: ${queryByIdName}Document, variables: { ${entityShortCamelCaseName}Id }, ...options });
        
        return { ...query, ${fragmentNameCamelCase}: query?.data?.${entityNamedType.name}_by_pk }
      }

      // Query Watch ById Helper
      //
      export type Watch${queryByIdName}ApolloObservableQuery = ObservableQuery<${queryByIdName}Query>;
      async function watch${queryByIdName}({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<${queryByIdName}QueryVariables>, 'query'> }) : Promise<Watch${queryByIdName}ApolloObservableQuery> {
        return apolloClient.watchQuery<${queryByIdName}Query>({ query: ${queryByIdName}Document, ...options });
      }
    `);
    }
    contentManager.addContent(`
      // Query Fetch Objects Helper
      //
      export type ${queryObjectsName}ObjectsApolloQueryResult = ApolloQueryResult<${queryObjectsName}Query>;
      export type ${queryObjectsName}ObjectsApolloQueryResultEx = ${queryObjectsName}ObjectsApolloQueryResult & ${fragmentNamePascalCase}ObjectsHelperResultEx;

      async function ${queryObjectsNameCamelCase}({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<${queryObjectsName}QueryVariables>, 'query'> }): Promise<${queryObjectsName}ObjectsApolloQueryResultEx> {
        const query: ${queryObjectsName}ObjectsApolloQueryResult = await apolloClient.query<${queryObjectsName}Query>({ query: ${queryObjectsName}Document, ...options });
        
        return { ...query, objects: query?.data?.${entityNamedType.name} || [] }
      }

      // Query Watch Objects Helper
      //
      export type Watch${queryObjectsName}ApolloObservableQuery = ObservableQuery<${queryObjectsName}Query>;
      async function watch${queryObjectsName}({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<${queryObjectsName}QueryVariables>, 'query'> }) : Promise<Watch${queryObjectsName}ApolloObservableQuery> {
        return apolloClient.watchQuery<${queryObjectsName}Query>({ query: ${queryObjectsName}Document, ...options });
      }
    `);
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`${queryByIdName}Query`, typescriptCodegenOutputPath));
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`${queryByIdName}Document`, typescriptCodegenOutputPath));
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`${queryByIdName}QueryVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${queryObjectsName}Query`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${queryObjectsName}Document`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${queryObjectsName}QueryVariables`, typescriptCodegenOutputPath));
}
exports.injectQueryHelpers = injectQueryHelpers;
// ---------------------------------
//
function injectSubscriptionHelpers({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const subscribeByIdName = `SubscribeTo${fragmentNamePascalCase}ById`;
    const subscribeObjectsName = `SubscribeTo${fragmentNamePascalCase}Objects`;
    const entityShortName = _1.makeShortName(entityNamedType.name, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const fragmentTypeScriptTypeName = utils_1.makeFragmentTypeScriptTypeName(fragmentName);
    const subscribeByIdNameCamelCase = utils_1.makeCamelCase(subscribeByIdName);
    const subscribeObjectsNameCamelCase = utils_1.makeCamelCase(subscribeObjectsName);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    if (primaryKeyIdField) {
        contentManager.addContent(`
    // Subscription Fetch ById Helper
    //
    export type ${subscribeByIdName}SubscriptionFetchResult = FetchResult<${subscribeByIdName}Subscription, Record<string, any>, Record<string, any>>;
    export type ${subscribeByIdName}SubscriptionFetchResultEx = FetchResult<${subscribeByIdName}Subscription, Record<string, any>, Record<string, any>> & ${fragmentNamePascalCase}ByIdHelperResultEx;
    
    async function ${subscribeByIdNameCamelCase}({ apolloClient, ${entityShortCamelCaseName}Id, options }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id:${primaryKeyIdTypeScriptFieldType.typeName}, options?: Omit<SubscriptionOptions<${subscribeByIdName}SubscriptionVariables>, 'query' | 'variables'> }): Promise<Observable<${subscribeByIdName}SubscriptionFetchResultEx>> {
      const subscription:Observable<${subscribeByIdName}SubscriptionFetchResult> = apolloClient.subscribe<${subscribeByIdName}Subscription>({ query: ${subscribeByIdName}Document, variables: { ${entityShortCamelCaseName}Id }, ...options });
      
      return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, ${fragmentNameCamelCase}:value?.data?.${entityNamedType.name}_by_pk || [] }  as ${subscribeByIdName}SubscriptionFetchResultEx }) ;
    }
    `);
    }
    contentManager.addContent(`
      // Subscription Fetch Objects Helper
      //
      export type ${subscribeObjectsName}SubscriptionFetchResult = FetchResult<${subscribeObjectsName}Subscription, Record<string, any>, Record<string, any>>;
      export type ${subscribeObjectsName}SubscriptionFetchResultEx = FetchResult<${subscribeObjectsName}Subscription, Record<string, any>, Record<string, any>> & ${fragmentNamePascalCase}ObjectsHelperResultEx;

      async function ${subscribeObjectsNameCamelCase}({ apolloClient, options }: { apolloClient: ApolloClient<object>, options?: Omit<SubscriptionOptions<${subscribeObjectsName}SubscriptionVariables>, 'query'> }): Promise<Observable<${subscribeObjectsName}SubscriptionFetchResultEx>> {
        const subscription:Observable<${subscribeObjectsName}SubscriptionFetchResult> = apolloClient.subscribe<${subscribeObjectsName}Subscription>({ query: ${subscribeObjectsName}Document, ...options });
        
        return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, objects: value?.data?.${entityNamedType.name} || [] }  as ${subscribeObjectsName}SubscriptionFetchResultEx }) ;
      }
    `);
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`${subscribeByIdName}Subscription`, typescriptCodegenOutputPath));
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`${subscribeByIdName}Document`, typescriptCodegenOutputPath));
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`${subscribeByIdName}SubscriptionVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${subscribeObjectsName}Subscription`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${subscribeObjectsName}Document`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${subscribeObjectsName}SubscriptionVariables`, typescriptCodegenOutputPath));
}
exports.injectSubscriptionHelpers = injectSubscriptionHelpers;
// ---------------------------------
//
function injectInsertHelpers({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const entityPascalName = utils_1.makePascalCase(entityNamedType.name);
    const entityShortName = _1.makeShortName(entityNamedType.name, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    contentManager.addContent(`
    // Insert Helper
    //
    type Insert${fragmentNamePascalCase}FetchResult = FetchResult<Insert${fragmentNamePascalCase}Mutation, Record<string, any>, Record<string, any>>;
    export type Insert${fragmentNamePascalCase}FetchHelperResultEx = Insert${fragmentNamePascalCase}FetchResult & ${fragmentNamePascalCase}ByIdHelperResultEx;

    async function insert${fragmentNamePascalCase}({ apolloClient, ${entityShortCamelCaseName}, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>, 'mutation' | 'variables'> }): Promise<Insert${fragmentNamePascalCase}FetchHelperResultEx> {
      const mutationOptions:MutationOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables> = { mutation: Insert${fragmentNamePascalCase}Document, variables: { objects: [${entityShortCamelCaseName}] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!${entityShortCamelCaseName}.id) throw new Error(\`if autoOptimisticResponse = true, id must be set in object '${entityShortCamelCaseName}'\`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Insert${fragmentNamePascalCase}Mutation>({ operationType: 'insert', entityName:'${entityNamedType.name}', objects:[${entityShortCamelCaseName} as ${entityPascalName}_Insert_Input & ObjectWithId] }); 
      }
      
      const mutation:Insert${fragmentNamePascalCase}FetchResult = await apolloClient.mutate<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>(mutationOptions);
        
      return { ...mutation, ${fragmentNameCamelCase}: mutation?.data?.insert_${entityNamedType.name}?.returning && mutation.data.insert_${entityNamedType.name}.returning[0] };
    }

    async function insert${fragmentNamePascalCase}WithOnConflict({ apolloClient, ${entityShortCamelCaseName}, onConflict, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input, onConflict: ${entityPascalName}_On_Conflict, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>, 'mutation' | 'variables'> }): Promise<Insert${fragmentNamePascalCase}FetchHelperResultEx> {
      const mutationOptions:MutationOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}WithOnConflictMutationVariables> = { mutation: Insert${fragmentNamePascalCase}Document, variables: { objects: [${entityShortCamelCaseName}], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!${entityShortCamelCaseName}.id) throw new Error(\`if autoOptimisticResponse = true, id must be set in object '${entityShortCamelCaseName}'\`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Insert${fragmentNamePascalCase}Mutation>({ operationType: 'insert', entityName:'${entityNamedType.name}', objects:[${entityShortCamelCaseName} as ${entityPascalName}_Insert_Input & ObjectWithId] }); 
      }
      
      const mutation:Insert${fragmentNamePascalCase}FetchResult = await apolloClient.mutate<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}WithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, ${fragmentNameCamelCase}: mutation?.data?.insert_${entityNamedType.name}?.returning && mutation.data.insert_${entityNamedType.name}.returning[0] };
    }



  `);
    contentManager.addContent(`
    // Insert Objects Helper
    //
    type Insert${fragmentNamePascalCase}ObjectsFetchResult = FetchResult<Insert${fragmentNamePascalCase}Mutation, Record<string, any>, Record<string, any>>;
    export type Insert${fragmentNamePascalCase}ObjectsHelperResultEx = Insert${fragmentNamePascalCase}ObjectsFetchResult & ${fragmentNamePascalCase}ObjectsHelperResultEx;

    async function insert${fragmentNamePascalCase}Objects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>, 'mutation'> }): Promise<Insert${fragmentNamePascalCase}ObjectsHelperResultEx> {
      const mutation: Insert${fragmentNamePascalCase}ObjectsFetchResult = await apolloClient.mutate<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>({ mutation: Insert${fragmentNamePascalCase}Document, ...options });
       
      return { ...mutation, objects: mutation?.data?.insert_${entityNamedType.name}?.returning || [] };
    }
  `);
    contentManager.addImport(_1.makeImportStatement(`${entityPascalName}_Insert_Input`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${entityPascalName}_On_Conflict`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Insert${fragmentNamePascalCase}Mutation`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Insert${fragmentNamePascalCase}MutationVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Insert${fragmentNamePascalCase}WithOnConflictMutationVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Insert${fragmentNamePascalCase}Document`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Insert${fragmentNamePascalCase}WithOnConflictDocument`, typescriptCodegenOutputPath));
}
exports.injectInsertHelpers = injectInsertHelpers;
// ---------------------------------
//
function injectUpdateHelpers({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const entityPascalName = utils_1.makePascalCase(entityNamedType.name);
    const entityShortName = _1.makeShortName(entityNamedType.name, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    contentManager.addContent(`
    // Update Helper
    //
    type Update${fragmentNamePascalCase}ByIdQueryResult = FetchResult<Update${fragmentNamePascalCase}ByIdMutation, Record<string, any>, Record<string, any>>;
    export type Update${fragmentNamePascalCase}ByIdHelperResultEx = Update${fragmentNamePascalCase}ByIdQueryResult & ${fragmentNamePascalCase}ByIdHelperResultEx;

    async function update${fragmentNamePascalCase}ById({ apolloClient, ${entityShortCamelCaseName}Id, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, set: ${entityPascalName}_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Update${fragmentNamePascalCase}ByIdMutation, Update${fragmentNamePascalCase}ByIdMutationVariables>, 'mutation'> }): Promise<Update${fragmentNamePascalCase}ByIdHelperResultEx> {
      const mutationOptions:MutationOptions<Update${fragmentNamePascalCase}ByIdMutation, Update${fragmentNamePascalCase}ByIdMutationVariables> = { mutation: Update${fragmentNamePascalCase}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Update${fragmentNamePascalCase}ByIdMutation>({ operationType: 'update', entityName:'${entityNamedType.name}', objects:[{ id:${entityShortCamelCaseName}Id, ...set }] }); }

      const mutation:Update${fragmentNamePascalCase}ByIdQueryResult = await apolloClient.mutate<Update${fragmentNamePascalCase}ByIdMutation, Update${fragmentNamePascalCase}ByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, ${fragmentNameCamelCase}: mutation?.data?.update_${entityNamedType.name}?.returning && mutation.data.update_${entityNamedType.name}.returning[0] };
    }
  `);
    contentManager.addContent(`
    // Update Objects Helper
    //
    type Update${fragmentNamePascalCase}ObjectsFetchResult = FetchResult<Update${fragmentNamePascalCase}Mutation, Record<string, any>, Record<string, any>>;
    export type Update${fragmentNamePascalCase}ObjectsHelperResultEx = Update${fragmentNamePascalCase}ObjectsFetchResult & ${fragmentNamePascalCase}ObjectsHelperResultEx;

    async function update${fragmentNamePascalCase}Objects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Update${fragmentNamePascalCase}Mutation, Update${fragmentNamePascalCase}MutationVariables>, 'mutation'> }): Promise<Update${fragmentNamePascalCase}ObjectsHelperResultEx> {  
      const mutation:Update${fragmentNamePascalCase}ObjectsFetchResult = await apolloClient.mutate<Update${fragmentNamePascalCase}Mutation, Update${fragmentNamePascalCase}MutationVariables>({ mutation: Update${fragmentNamePascalCase}Document, ...options } );
        
      return { ...mutation, objects:mutation?.data?.update_${entityNamedType.name}?.returning || [] };
    }
  `);
    contentManager.addImport(_1.makeImportStatement(`${entityPascalName}_Set_Input`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Update${fragmentNamePascalCase}ByIdMutation`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Update${fragmentNamePascalCase}ByIdMutationVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Update${fragmentNamePascalCase}ByIdDocument`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Update${fragmentNamePascalCase}Mutation`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Update${fragmentNamePascalCase}MutationVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Update${fragmentNamePascalCase}Document`, typescriptCodegenOutputPath));
}
exports.injectUpdateHelpers = injectUpdateHelpers;
// ---------------------------------
//
function injectDeleteHelpers({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const entityShortName = _1.makeShortName(entityNamedType.name, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const entityModelName = _1.makeModelName(entityNamedType.name, trimString);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    contentManager.addContent(`  

    // Delete Helper
    //

    type Remove${entityModelName}ByIdQueryResult = FetchResult<Remove${entityModelName}ByIdMutation, Record<string, any>, Record<string, any>>;
    export type Remove${entityModelName}ByIdQueryHelperResultEx = Remove${entityModelName}ByIdQueryResult & RemoveEntitiesQueryHelperResultEx;
  
    async function remove${entityModelName}ById({ apolloClient, ${entityShortCamelCaseName}Id, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, 'mutation'> }): Promise<Remove${entityModelName}ByIdQueryHelperResultEx> {
      const mutationOptions:MutationOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables> = { mutation: Remove${entityModelName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id, }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Remove${entityModelName}ByIdMutation>({ operationType: 'delete', entityName:'${entityShortCamelCaseName}', objects:[{ id:${entityShortCamelCaseName}Id }] }); }
      if((!options || !options.update)){ mutationOptions.update = generateUpdateFunctionForMutation<Remove${entityModelName}ByIdMutation>({ operationType: 'delete', entityName:'${entityShortCamelCaseName}', entityId:${entityShortCamelCaseName}Id }); }
      
      const mutation:Remove${entityModelName}ByIdQueryResult = await apolloClient.mutate<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>(mutationOptions);
    
      return { ...mutation, affected_rows: mutation?.data?.delete_${entityNamedType.name}?.affected_rows || 0 };
    }
  `);
    contentManager.addContent(`
    type Remove${entityModelName}ObjectsQueryResult = FetchResult<Remove${entityModelName}Mutation, Record<string, any>, Record<string, any>>;
    export type Remove${entityModelName}ObjectsQueryHelperResultEx = Remove${entityModelName}ObjectsQueryResult & RemoveEntitiesQueryHelperResultEx;  
  
    async function remove${entityModelName}Objects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, 'mutation'> }): Promise<Remove${entityModelName}ObjectsQueryHelperResultEx> {  
        const mutation:Remove${entityModelName}ByIdQueryResult = await apolloClient.mutate<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>({ mutation: Remove${entityModelName}Document, ...options } );
          
        return { ...mutation, affected_rows: mutation?.data?.delete_${entityNamedType.name}?.affected_rows || 0 };
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
// ---------------------------------
//
function injectSharedHelpersPost({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath, withClientAndCacheHelpers, withQueries, withSubscriptions, withInserts, withUpdates, withDeletes }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const entityModelName = _1.makeModelName(entityNamedType.name, trimString);
    if (withClientAndCacheHelpers || withQueries || withInserts || withUpdates || withSubscriptions) {
        let fragmentHelperObject = `
    // ${fragmentNamePascalCase} Fragment Helper Object
    //------------------------------------------------

    export const ${fragmentNamePascalCase}FragmentGQLHelper = {\n`;
        if (withClientAndCacheHelpers)
            fragmentHelperObject += `      clientReadFragmentById: clientReadFragment${fragmentNamePascalCase}ById,\n`;
        if (withClientAndCacheHelpers)
            fragmentHelperObject += `      clientWriteFragmentById: clientWriteFragment${fragmentNamePascalCase}ById,\n`;
        if (withClientAndCacheHelpers)
            fragmentHelperObject += `      cacheWriteFragmentById: cacheWriteFragment${fragmentNamePascalCase}ById,\n`;
        if (withClientAndCacheHelpers)
            fragmentHelperObject += `      clientReadQueryById: clientReadQuery${fragmentNamePascalCase}ById,\n`;
        if (withClientAndCacheHelpers)
            fragmentHelperObject += `      clientWriteQueryById: clientWriteQuery${fragmentNamePascalCase}ById,\n`;
        if (withClientAndCacheHelpers)
            fragmentHelperObject += `      cacheWriteQueryById: cacheWriteQuery${fragmentNamePascalCase}ById,\n`;
        if (withQueries)
            fragmentHelperObject += `      queryById: query${fragmentNamePascalCase}ById,\n`;
        if (withQueries)
            fragmentHelperObject += `      queryObjects: query${fragmentNamePascalCase}Objects,\n`;
        if (withQueries)
            fragmentHelperObject += `      watchQueryById: watchQuery${fragmentNamePascalCase}ById,\n`;
        if (withQueries)
            fragmentHelperObject += `      watchQueryObjects: watchQuery${fragmentNamePascalCase}Objects,\n`;
        if (withSubscriptions)
            fragmentHelperObject += `      subscribeToById: subscribeTo${fragmentNamePascalCase}ById,\n`;
        if (withSubscriptions)
            fragmentHelperObject += `      subscribeToObjects: subscribeTo${fragmentNamePascalCase}Objects,\n`;
        if (withInserts)
            fragmentHelperObject += `      insert: insert${fragmentNamePascalCase},\n`;
        if (withInserts)
            fragmentHelperObject += `      insertWithOnConflict: insert${fragmentNamePascalCase}WithOnConflict,\n`;
        if (withInserts)
            fragmentHelperObject += `      insertObjects: insert${fragmentNamePascalCase}Objects,\n`;
        if (withUpdates)
            fragmentHelperObject += `      updateById: update${fragmentNamePascalCase}ById,\n`;
        if (withUpdates)
            fragmentHelperObject += `      updateObjects: update${fragmentNamePascalCase}Objects\n`;
        fragmentHelperObject += `    }
  `;
        contentManager.addContent(fragmentHelperObject);
    }
    if (withDeletes) {
        let entityHelperObject = `
    // ${entityNamedType.name} Entity Helper Object
    //------------------------------------------------

    export const ${entityModelName}GQLHelper = {
      removeById: remove${entityModelName}ById,
      removeObjects: remove${entityModelName}Objects
    }
  `;
        contentManager.addContent(entityHelperObject);
    }
}
exports.injectSharedHelpersPost = injectSharedHelpersPost;
// ---------------------------------
//
function injectGlobalHelperCodePost({ contentManager, fragmentDefinitionNodes, schemaTypeMap, trimString, withClientAndCacheHelpers, withQueries, withInserts, withUpdates, withDeletes }) {
    const uniqueModelNamesFromFragments = utils_1.getUniqueEntitiesFromFragmentDefinitions({ fragmentDefinitionNodes, schemaTypeMap, trimString }).map(entityName => `${_1.makeShortName(entityName, trimString)}`);
    contentManager.addContent(`
    // COMBINED HELPER OBJECT
    //------------------------------------------------
    export const GQLHelpers = {
      ${withClientAndCacheHelpers || withQueries || withInserts || withUpdates
        ? `Fragments: {
        ${fragmentDefinitionNodes
            .map(fragmentDefinitionNode => `${_1.makeShortName(fragmentDefinitionNode.name.value, trimString)}: ${_1.makeShortName(fragmentDefinitionNode.name.value, trimString)}FragmentGQLHelper`)
            .join(",\n        ")}
      },`
        : ""}
      ${withDeletes
        ? `Models: {
        ${uniqueModelNamesFromFragments.map(modelName => `${modelName}: ${modelName}ModelGQLHelper`).join(",\n        ")}
      }`
        : ""}
    }
  `);
}
exports.injectGlobalHelperCodePost = injectGlobalHelperCodePost;
//# sourceMappingURL=tshelperInjectors.js.map