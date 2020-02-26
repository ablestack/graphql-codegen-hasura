"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const utils_1 = require("./utils");
// ---------------------------------
//
function injectGlobalReactCodePre({ contentManager, typescriptCodegenOutputPath, withUpdates }) {
    contentManager.addImport(`import { ObjectWithId, generateOptimisticResponseForMutation, generateUpdateFunctionForMutation, stripInsertInputClientFields } from 'graphql-codegen-hasura-core'`);
    contentManager.addImport(`import { QueryHookOptions, useQuery, LazyQueryHookOptions, useLazyQuery, MutationHookOptions, useMutation, QueryLazyOptions, MutationFunctionOptions, LazyQueryResult, MutationTuple, FetchResult, SubscriptionResult, SubscriptionHookOptions, useSubscription, ApolloError, SubscribeToMoreOptions } from '@apollo/client';`);
    contentManager.addContent(`
    // GLOBAL TYPES
    //------------------------------------------------
    export type RemoveEntitiesQueryHookResultEx = { affected_rows:number };
  `);
}
exports.injectGlobalReactCodePre = injectGlobalReactCodePre;
// ---------------------------------
//
function injectSharedReactPre({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const fragmentTypeScriptTypeName = utils_1.makeFragmentTypeScriptTypeName(fragmentName);
    contentManager.addContent(`
    // ${entityName} REACT
    //------------------------------------------------

    export type ${fragmentNamePascalCase}ByIdHookResultEx = { ${fragmentNameCamelCase}:${fragmentTypeScriptTypeName} | null | undefined };
    export type ${fragmentNamePascalCase}ObjectsHookResultEx = { objects:${fragmentTypeScriptTypeName}[] };

  `);
    if (!primaryKeyIdTypeScriptFieldType.isNative) {
        const typeImport = _1.makeImportStatement(`${primaryKeyIdTypeScriptFieldType.typeName}`, typescriptCodegenOutputPath);
        contentManager.addImport(typeImport);
    }
    contentManager.addImport(_1.makeImportStatement(fragmentTypeScriptTypeName, typescriptCodegenOutputPath));
}
exports.injectSharedReactPre = injectSharedReactPre;
// ---------------------------------
//
function injectQueryReact({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const entityShortName = _1.makeShortName(entityName, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const fragmentTypeScriptTypeName = utils_1.makeFragmentTypeScriptTypeName(fragmentName);
    const queryByIdName = `Query${fragmentNamePascalCase}ById`;
    const queryObjectsName = `Query${fragmentNamePascalCase}Objects`;
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    if (primaryKeyIdField) {
        contentManager.addContent(`
    /**
     *  Query Hook
     */

    // Types
    type ${queryByIdName}Result = LazyQueryResult<${queryByIdName}Query, ${queryByIdName}QueryVariables>;
    type ${queryByIdName}SubScribeToMore = (options?: Omit<SubscribeToMoreOptions<${queryByIdName}Query, ${queryByIdName}QueryVariables, ${queryByIdName}Query>, 'document' | 'variables'> | undefined) => void
    export type ${queryByIdName}ResultEx = Omit<${queryByIdName}Result, 'subscribeToMore'> & { subscribeToMore:${queryByIdName}SubScribeToMore } & ${fragmentNamePascalCase}ByIdHookResultEx;

    // Function
    function use${queryByIdName}({ ${entityShortCamelCaseName}Id, options }: { ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}; options?: Omit<QueryHookOptions<${queryByIdName}Query, ${queryByIdName}QueryVariables>, "query" | "variables">; }): ${queryByIdName}ResultEx {
      const _query: ${queryByIdName}Result = useQuery<${queryByIdName}Query, ${queryByIdName}QueryVariables>(${queryByIdName}Document, { variables: { ${entityShortCamelCaseName}Id }, ...options });
      
      const typedSubscribeToMore:${queryByIdName}SubScribeToMore = (options) => { _query.subscribeToMore({document: ${queryByIdName}Document, variables: { ${entityShortCamelCaseName}Id } as ${queryByIdName}QueryVariables, ...options });}
      const { subscribeToMore, ...query } = _query;      
      return { ...query, subscribeToMore:typedSubscribeToMore, ${fragmentNameCamelCase}: query?.data?.${entityName}_by_pk };
    }
    `);
        contentManager.addContent(`
    /**
     *  Lazy Query Hook
     */
    
    // Types
    type Pick${queryByIdName}Fn = (query: ${queryByIdName}Query | null | undefined) =>${fragmentNamePascalCase}Fragment | null | undefined;
    type ${queryByIdName}LazyFn = [(options?: QueryLazyOptions<${queryByIdName}QueryVariables> | undefined) => void, ${queryByIdName}Result]
    type ${queryByIdName}WrappedLazyFn = (options: Omit<QueryLazyOptions<${queryByIdName}QueryVariables>, "variables">) => void;
    export type ${queryByIdName}LazyReturn = [${queryByIdName}WrappedLazyFn, ${queryByIdName}ResultEx];

    // Function
    function use${queryByIdName}Lazy({ ${entityShortCamelCaseName}Id, options }: { ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}; options?: Omit<QueryHookOptions<${queryByIdName}Query, ${queryByIdName}QueryVariables>, "query" | "variables">; }): ${queryByIdName}LazyReturn {
      const lazyQuery: ${queryByIdName}LazyFn = useLazyQuery<${queryByIdName}Query, ${queryByIdName}QueryVariables>(${queryByIdName}Document, options);
      
      // Setting up typed version of lazyQuery
      const pick${queryByIdName}: Pick${queryByIdName}Fn = query => { return query && query.${entityName}_by_pk; };
      const wrappedLazyQuery: ${queryByIdName}WrappedLazyFn = (options) => { return lazyQuery[0](options); };
      
      // Switching out SubcribeToMore with typed version
      const typedSubcribeToMore:${queryByIdName}SubScribeToMore = (options) => { lazyQuery[1].subscribeToMore && lazyQuery[1].subscribeToMore({document: ${queryByIdName}Document, variables: { ${entityShortCamelCaseName}Id } as ${queryByIdName}QueryVariables, ...options });}
      const { subscribeToMore, ...lazyQueryResult } = lazyQuery[1];  

      return [wrappedLazyQuery, { ...lazyQueryResult, subscribeToMore:typedSubcribeToMore, ${fragmentNameCamelCase}: pick${queryByIdName}(lazyQuery[1].data) }];
    }
    `);
    }
    contentManager.addContent(`
    /**
     *  Query Collection Hook
     */

    // Types
    export type ${queryObjectsName}Result = LazyQueryResult<${queryObjectsName}Query, ${queryObjectsName}QueryVariables>;
    type ${queryObjectsName}SubScribeToMore = (options?: Omit<SubscribeToMoreOptions<${queryObjectsName}Query, ${queryObjectsName}QueryVariables, ${queryObjectsName}Query>, 'document' | 'variables'> | undefined) => void
    export type ${queryObjectsName}ResultEx = Omit<${queryObjectsName}Result, 'subscribeToMore'> & { subscribeToMore:${queryObjectsName}SubScribeToMore } & ${fragmentNamePascalCase}ObjectsHookResultEx;

    // Function
    function use${queryObjectsName}(options: Omit<QueryHookOptions<${queryObjectsName}Query, ${queryObjectsName}QueryVariables>, "query">): ${queryObjectsName}ResultEx {
      const _query:${queryObjectsName}Result = useQuery<${queryObjectsName}Query, ${queryObjectsName}QueryVariables>(${queryObjectsName}Document, options);

      const typedSubscribeToMore:${queryObjectsName}SubScribeToMore = (options) => { _query.subscribeToMore({document: ${queryObjectsName}Document, ...options });}
      const { subscribeToMore, ...query } = _query;  

      return { ...query, subscribeToMore:typedSubscribeToMore, objects: query?.data?.${entityName} || [] };
    }
    `);
    contentManager.addContent(`  
    /**
     *  Lazy Query Collection Hook
     */

    // Types
    type Pick${queryObjectsName}Fn = (query: ${queryObjectsName}Query | null | undefined) => ${fragmentNamePascalCase}Fragment[];
    type ${queryObjectsName}LazyFn = [(options?: QueryLazyOptions<${queryObjectsName}QueryVariables> | undefined) => void, ${queryObjectsName}Result]
    type ${queryObjectsName}WrappedLazyFn = (options?: QueryLazyOptions<${queryObjectsName}QueryVariables>) => void;
    export type ${queryObjectsName}LazyReturn = [${queryObjectsName}WrappedLazyFn, ${queryObjectsName}ResultEx];

    // Function
    function use${queryObjectsName}Lazy(options?: Omit<LazyQueryHookOptions<${queryObjectsName}Query, ${queryObjectsName}QueryVariables>, "query">): ${queryObjectsName}LazyReturn {
      const lazyQuery: ${queryObjectsName}LazyFn = useLazyQuery<${queryObjectsName}Query, ${queryObjectsName}QueryVariables>(${queryObjectsName}Document, options);
      
      // Setting up typed version of lazyQuery
      const pickObjects: Pick${queryObjectsName}Fn = (query: ${queryObjectsName}Query | null | undefined) => { return query?.${entityName} || []; };
      const wrappedLazyQuery: ${queryObjectsName}WrappedLazyFn = (options) => { return lazyQuery[0]( options ); };
      
      // Switching out SubcribeToMore with typed version
      const typedSubcribeToMore:${queryObjectsName}SubScribeToMore = (options) => { lazyQuery[1].subscribeToMore && lazyQuery[1].subscribeToMore({document: ${queryObjectsName}Document, ...options });}
      const { subscribeToMore, ...lazyQueryResult } = lazyQuery[1];  
      
      return [wrappedLazyQuery, { ...lazyQueryResult, subscribeToMore:typedSubcribeToMore, objects: pickObjects(lazyQuery[1].data) }];
    }
  `);
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`${queryByIdName}Query`, typescriptCodegenOutputPath));
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`${queryByIdName}QueryVariables`, typescriptCodegenOutputPath));
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`${queryByIdName}Document`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${queryObjectsName}Query`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${queryObjectsName}Document`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${queryObjectsName}QueryVariables`, typescriptCodegenOutputPath));
}
exports.injectQueryReact = injectQueryReact;
// ---------------------------------
//
function injectSubscriptionReact({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const entityShortName = _1.makeShortName(entityName, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const fragmentTypeScriptTypeName = utils_1.makeFragmentTypeScriptTypeName(fragmentName);
    const subscriptionByIdName = `SubscribeTo${fragmentNamePascalCase}ById`;
    const subscriptionByObjectsName = `SubscribeTo${fragmentNamePascalCase}Objects`;
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    if (primaryKeyIdField) {
        contentManager.addContent(`     
    /**
     *  Subscription Hook
     */

    // Types
    type ${subscriptionByIdName}Result = { variables: ${subscriptionByIdName}SubscriptionVariables; loading: boolean; data?: ${subscriptionByIdName}Subscription; error?: ApolloError | undefined; };
    export type ${subscriptionByIdName}ResultEx = ${subscriptionByIdName}Result & ${fragmentNamePascalCase}ByIdHookResultEx;

    // Function
    function use${subscriptionByIdName}({ ${entityShortCamelCaseName}Id, options }: { ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}; options?: Omit<SubscriptionHookOptions<${subscriptionByIdName}Subscription, ${subscriptionByIdName}SubscriptionVariables>, "query" | "variables">; }): ${subscriptionByIdName}ResultEx {
      const subscription: ${subscriptionByIdName}Result = useSubscription<${subscriptionByIdName}Subscription, ${subscriptionByIdName}SubscriptionVariables>(${subscriptionByIdName}Document, { variables: { ${entityShortCamelCaseName}Id }, ...options });
      return { ...subscription, ${fragmentNameCamelCase}: subscription?.data?.${entityName}_by_pk };
    }
    `);
    }
    contentManager.addContent(`
    /**
     *  Subscription Collection Hook
     */

    // Types
    export type ${subscriptionByObjectsName}Result = { variables: ${subscriptionByObjectsName}SubscriptionVariables; loading: boolean; data?: ${subscriptionByObjectsName}Subscription; error?: ApolloError | undefined; };
    export type ${subscriptionByObjectsName}ResultEx = ${subscriptionByObjectsName}Result & ${fragmentNamePascalCase}ObjectsHookResultEx;

    // Function
    function use${subscriptionByObjectsName}(options: Omit<SubscriptionHookOptions<${subscriptionByObjectsName}Subscription, ${subscriptionByObjectsName}SubscriptionVariables>, "query">): ${subscriptionByObjectsName}ResultEx {
      const subscription:${subscriptionByObjectsName}Result = useSubscription<${subscriptionByObjectsName}Subscription, ${subscriptionByObjectsName}SubscriptionVariables>(${subscriptionByObjectsName}Document, options);
      return { ...subscription, objects: subscription?.data?.${entityName} || [] };
    }
    `);
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`${subscriptionByIdName}Subscription`, typescriptCodegenOutputPath));
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`${subscriptionByIdName}SubscriptionVariables`, typescriptCodegenOutputPath));
    if (primaryKeyIdField)
        contentManager.addImport(_1.makeImportStatement(`${subscriptionByIdName}Document`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${subscriptionByObjectsName}Subscription`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${subscriptionByObjectsName}Document`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`${subscriptionByObjectsName}SubscriptionVariables`, typescriptCodegenOutputPath));
}
exports.injectSubscriptionReact = injectSubscriptionReact;
// ---------------------------------
//
function injectInsertReact({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const entityPascalName = utils_1.makePascalCase(entityName);
    const entityShortName = _1.makeShortName(entityName, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    contentManager.addContent(`
    /**
     *  Insert Hooks
     */

    // Types
    type Insert${fragmentNamePascalCase}MutationResult = FetchResult<Insert${fragmentNamePascalCase}Mutation, Record<string, any>, Record<string, any>>;
    export type Insert${fragmentNamePascalCase}MutationResultEx = Insert${fragmentNamePascalCase}MutationResult & ${fragmentNamePascalCase}ByIdHookResultEx;

    type PickInsert${fragmentNamePascalCase}Fn = (mutation: Insert${fragmentNamePascalCase}Mutation | null | undefined) => ${fragmentNamePascalCase}Fragment | null | undefined;
    type Insert${fragmentNamePascalCase}LazyMutationFn = MutationTuple<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>;
    type Insert${fragmentNamePascalCase}WrappedLazyMutationFn = ({ ${entityShortCamelCaseName}, autoOptimisticResponse, options }: { ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input; autoOptimisticResponse?:boolean, options?: Omit<MutationFunctionOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>, "variables">; }) => Promise<Insert${fragmentNamePascalCase}MutationResultEx>;
    export type Insert${fragmentNamePascalCase}LazyMutationReturn = [Insert${fragmentNamePascalCase}WrappedLazyMutationFn, Insert${fragmentNamePascalCase}MutationResultEx];

    // Function
    function useInsert${fragmentNamePascalCase}(options?: Omit<MutationHookOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>, "mutation" | "variables">): Insert${fragmentNamePascalCase}LazyMutationReturn {
      const lazyMutation: Insert${fragmentNamePascalCase}LazyMutationFn = useMutation<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>(Insert${fragmentNamePascalCase}Document, options);
      const pick${fragmentNamePascalCase}: PickInsert${fragmentNamePascalCase}Fn = (mutation) => { return mutation?.insert_${entityName}?.returning && mutation?.insert_${entityName}?.returning[0]; };

      const wrappedLazyMutation: Insert${fragmentNamePascalCase}WrappedLazyMutationFn = async ({ ${entityShortCamelCaseName}, autoOptimisticResponse, options }) => {
        const objectForInsert = stripInsertInputClientFields({ input: ${entityShortCamelCaseName} });
        const mutationOptions:MutationFunctionOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables> = { variables: { objects: [objectForInsert] }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
          if(!objectForInsert.id) throw new Error(\`if autoOptimisticResponse = true, id must be set in object '${entityShortCamelCaseName}'\`);
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Insert${fragmentNamePascalCase}Mutation>({ operationType: 'insert', entityName:'${entityShortCamelCaseName}', objects:[objectForInsert as ${entityPascalName}_Insert_Input & ObjectWithId] 
        }); }

        const fetchResult = await lazyMutation[0](mutationOptions);
        
        return { ...fetchResult, ${fragmentNameCamelCase}: pick${fragmentNamePascalCase}(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], ${fragmentNameCamelCase}: pick${fragmentNamePascalCase}(lazyMutation[1].data) }];
    }
  `);
    contentManager.addContent(`
    //
    //

    // Types
    type Insert${fragmentNamePascalCase}WithOnConflictLazyMutationFn = MutationTuple<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}WithOnConflictMutationVariables>;
    type Insert${fragmentNamePascalCase}WithOnConflictWrappedLazyMutationFn = ({ ${entityShortCamelCaseName}, onConflict, autoOptimisticResponse, options }: { ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input; onConflict: ${entityPascalName}_On_Conflict, autoOptimisticResponse?:boolean; options?: Omit<MutationFunctionOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}WithOnConflictMutationVariables>, "variables">; }) => Promise<Insert${fragmentNamePascalCase}MutationResultEx>;
    export type Insert${fragmentNamePascalCase}WithOnConflictLazyMutationReturn = [Insert${fragmentNamePascalCase}WithOnConflictWrappedLazyMutationFn, Insert${fragmentNamePascalCase}MutationResultEx];

    // Function
    function useInsert${fragmentNamePascalCase}WithOnConflict( options?: Omit<MutationHookOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>, "mutation" | "variables"> ): Insert${fragmentNamePascalCase}WithOnConflictLazyMutationReturn {
      const lazyMutation: Insert${fragmentNamePascalCase}WithOnConflictLazyMutationFn = useMutation<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}WithOnConflictMutationVariables>(Insert${fragmentNamePascalCase}WithOnConflictDocument, options);
      const pick${fragmentNamePascalCase}: PickInsert${fragmentNamePascalCase}Fn = (mutation: Insert${fragmentNamePascalCase}Mutation | null | undefined) => { return mutation?.insert_${entityName}?.returning && mutation.insert_${entityName}.returning[0]; };

      const wrappedLazyMutation:Insert${fragmentNamePascalCase}WithOnConflictWrappedLazyMutationFn = async ({ ${entityShortCamelCaseName}, onConflict, autoOptimisticResponse, options }) => {
        const objectForInsert = stripInsertInputClientFields({ input: ${entityShortCamelCaseName} });
        const mutationOptions:MutationFunctionOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}WithOnConflictMutationVariables> = { variables: { objects: [objectForInsert], onConflict }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
          if(!objectForInsert.id) throw new Error(\`if autoOptimisticResponse = true, id must be set in object '${entityShortCamelCaseName}'\`);
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Insert${fragmentNamePascalCase}Mutation>({ operationType: 'insert', entityName:'${entityShortCamelCaseName}', objects:[objectForInsert as ${entityPascalName}_Insert_Input & ObjectWithId] }); 
        }

        const fetchResult = await lazyMutation[0](mutationOptions);
        
        return { ...fetchResult, ${fragmentNameCamelCase}: pick${fragmentNamePascalCase}(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], ${fragmentNameCamelCase}: pick${fragmentNamePascalCase}(lazyMutation[1].data) }];
    }
  `);
    contentManager.addContent(`
    // Types
    type Insert${fragmentNamePascalCase}ObjectsMutationResult = FetchResult<Insert${fragmentNamePascalCase}Mutation, Record<string, any>, Record<string, any>>;
    export type Insert${fragmentNamePascalCase}ObjectsMutationResultEx = Insert${fragmentNamePascalCase}MutationResult & ${fragmentNamePascalCase}ObjectsHookResultEx;

    type PickInsert${fragmentNamePascalCase}ObjectsFn = (mutation: Insert${fragmentNamePascalCase}Mutation | null | undefined) => ${fragmentNamePascalCase}Fragment[];
    type Insert${fragmentNamePascalCase}ObjectsLazyMutationFn = MutationTuple<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>;
    type Insert${fragmentNamePascalCase}ObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>) => Promise<Insert${fragmentNamePascalCase}ObjectsMutationResultEx>;
    export type Insert${fragmentNamePascalCase}ObjectsLazyMutationReturn = [Insert${fragmentNamePascalCase}ObjectsWrappedLazyMutationFn, Insert${fragmentNamePascalCase}ObjectsMutationResultEx];

    // Function
    function useInsert${fragmentNamePascalCase}Objects(options?: Omit<MutationHookOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>, "mutation">): Insert${fragmentNamePascalCase}ObjectsLazyMutationReturn {
      const lazyMutation: Insert${fragmentNamePascalCase}ObjectsLazyMutationFn = useMutation<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>(Insert${fragmentNamePascalCase}Document, options);
      const pickObjects: PickInsert${fragmentNamePascalCase}ObjectsFn = (mutation: Insert${fragmentNamePascalCase}Mutation | null | undefined) => { return mutation?.insert_${entityName}?.returning || []; };

      const wrappedLazyMutation: Insert${fragmentNamePascalCase}ObjectsWrappedLazyMutationFn = async ( options ) => {
        if(options && options.variables && options.variables.objects) options.variables.objects = options.variables.objects.map(objectItem => stripInsertInputClientFields({input: objectItem}));
        const fetchResult: Insert${fragmentNamePascalCase}ObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
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
exports.injectInsertReact = injectInsertReact;
// ---------------------------------
//
function injectUpdateReact({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const entityPascalName = utils_1.makePascalCase(entityName);
    const entityShortName = _1.makeShortName(entityName, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    contentManager.addContent(`
    /**
     *  Update Hooks
     */
    
    type Update${fragmentNamePascalCase}ByIdMutationResult = FetchResult<Update${fragmentNamePascalCase}ByIdMutation, Record<string, any>, Record<string, any>>;
    export type Update${fragmentNamePascalCase}ByIdMutationResultEx = Update${fragmentNamePascalCase}ByIdMutationResult & ${fragmentNamePascalCase}ByIdHookResultEx;

    type PickUpdate${fragmentNamePascalCase}ByIdFn = (mutation: Update${fragmentNamePascalCase}ByIdMutation | null | undefined) => ${fragmentNamePascalCase}Fragment | null | undefined;
    type Update${fragmentNamePascalCase}ByIdLazyMutationFn = MutationTuple<Update${fragmentNamePascalCase}ByIdMutation, Update${fragmentNamePascalCase}ByIdMutationVariables>;
    type Update${fragmentNamePascalCase}ByIdWrappedLazyMutationFn = ({ ${entityShortCamelCaseName}Id, set, autoOptimisticResponse, options }: { ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}; set: ${entityPascalName}_Set_Input; autoOptimisticResponse?: boolean; options?: Omit<MutationFunctionOptions<Update${fragmentNamePascalCase}ByIdMutation, Update${fragmentNamePascalCase}ByIdMutationVariables>, "variables">; }) => Promise<Update${fragmentNamePascalCase}ByIdMutationResultEx>;
    export type Update${fragmentNamePascalCase}ByIdLazyMutationReturn = [Update${fragmentNamePascalCase}ByIdWrappedLazyMutationFn, Update${fragmentNamePascalCase}ByIdMutationResultEx];

    function useUpdate${fragmentNamePascalCase}ById(options?: Omit<MutationHookOptions<Update${fragmentNamePascalCase}ByIdMutation, Update${fragmentNamePascalCase}ByIdMutationVariables>, "mutation" | "variables">): Update${fragmentNamePascalCase}ByIdLazyMutationReturn {
      const lazyMutation: Update${fragmentNamePascalCase}ByIdLazyMutationFn = useMutation<Update${fragmentNamePascalCase}ByIdMutation, Update${fragmentNamePascalCase}ByIdMutationVariables>(Update${fragmentNamePascalCase}ByIdDocument, options);

      const pick${fragmentNamePascalCase}: PickUpdate${fragmentNamePascalCase}ByIdFn = (mutation) => { return mutation?.update_${entityName}?.returning && mutation.update_${entityName}!.returning[0]; };

      const wrappedLazyMutation: Update${fragmentNamePascalCase}ByIdWrappedLazyMutationFn = async ({ ${entityShortCamelCaseName}Id, set, autoOptimisticResponse, options }) => {
        const mutationOptions: MutationFunctionOptions<Update${fragmentNamePascalCase}ByIdMutation, Update${fragmentNamePascalCase}ByIdMutationVariables> = { variables: { id: ${entityShortCamelCaseName}Id, set }, ...options };
        if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Update${fragmentNamePascalCase}ByIdMutation>({ operationType: 'update', entityName:'${entityName}', objects:[{ id:${entityShortCamelCaseName}Id, ...set }] });
        }

        const fetchResult: Update${fragmentNamePascalCase}ByIdMutationResult = await lazyMutation[0]({ variables: { id: ${entityShortCamelCaseName}Id, set }, ...mutationOptions });
        return { ...fetchResult, ${fragmentNameCamelCase}: pick${fragmentNamePascalCase}(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], ${fragmentNameCamelCase}: pick${fragmentNamePascalCase}(lazyMutation[1].data) }];
    }
  `);
    contentManager.addContent(`
    //
    //

    // Types
    type Update${fragmentNamePascalCase}ObjectsMutationResult = FetchResult<Update${fragmentNamePascalCase}Mutation, Record<string, any>, Record<string, any>>;
    export type Update${fragmentNamePascalCase}ObjectsMutationResultEx = Update${fragmentNamePascalCase}ObjectsMutationResult & ${fragmentNamePascalCase}ObjectsHookResultEx;

    // Function
    type PickUpdate${fragmentNamePascalCase}ObjectsFn = (mutation: Update${fragmentNamePascalCase}Mutation | null | undefined) => ${fragmentNamePascalCase}Fragment[];
    type Update${fragmentNamePascalCase}ObjectsLazyMutationFn = MutationTuple<Update${fragmentNamePascalCase}Mutation, Update${fragmentNamePascalCase}MutationVariables>;
    type Update${fragmentNamePascalCase}ObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<Update${fragmentNamePascalCase}Mutation, Update${fragmentNamePascalCase}MutationVariables>) => Promise<Update${fragmentNamePascalCase}ObjectsMutationResultEx>;
    export type Update${fragmentNamePascalCase}ObjectsLazyMutationReturn = [Update${fragmentNamePascalCase}ObjectsWrappedLazyMutationFn, Update${fragmentNamePascalCase}ObjectsMutationResultEx];

    function useUpdate${fragmentNamePascalCase}Objects(options?: Omit<MutationHookOptions<Update${fragmentNamePascalCase}Mutation, Update${fragmentNamePascalCase}MutationVariables>, "mutation">): Update${fragmentNamePascalCase}ObjectsLazyMutationReturn {
      const lazyMutation: Update${fragmentNamePascalCase}ObjectsLazyMutationFn = useMutation<Update${fragmentNamePascalCase}Mutation, Update${fragmentNamePascalCase}MutationVariables>(Update${fragmentNamePascalCase}Document, options);

      const pickObjects: PickUpdate${fragmentNamePascalCase}ObjectsFn = (mutation: Update${fragmentNamePascalCase}Mutation | null | undefined) => {
        return mutation?.update_${entityName}?.returning || [];
      };

      const wrappedLazyMutation: Update${fragmentNamePascalCase}ObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: Update${fragmentNamePascalCase}ObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
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
exports.injectUpdateReact = injectUpdateReact;
// ---------------------------------
//
function injectDeleteReact({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const entityShortName = _1.makeShortName(entityName, trimString);
    const entityShortCamelCaseName = utils_1.makeCamelCase(entityShortName);
    const entityModelName = _1.makeModelName(entityName, trimString);
    const primaryKeyIdTypeScriptFieldType = _1.getIdTypeScriptFieldType(primaryKeyIdField);
    const fragmentNameCamelCase = utils_1.makeCamelCase(fragmentName);
    const entityPascalName = utils_1.makePascalCase(entityName);
    contentManager.addContent(`
    /**
     *  Delete Hooks
     */

    // Types
    type Remove${entityModelName}ByIdFetchResult = FetchResult<Remove${entityModelName}ByIdMutation, Record<string, any>, Record<string, any>>;
    export type Remove${entityModelName}ByIdMutationResultEx = Remove${entityModelName}ByIdFetchResult & RemoveEntitiesQueryHookResultEx;

    // Function
    type PickRemove${entityModelName}Fn = (mutation: Remove${entityModelName}ByIdMutation | null | undefined) => number;
    type Remove${entityModelName}LazyMutationFn = MutationTuple<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>;
    type Remove${entityModelName}WrappedLazyMutationFn = ({ ${entityShortCamelCaseName}Id, autoOptimisticResponse, options }: { ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}; autoOptimisticResponse?:boolean, options?: Omit<MutationFunctionOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, "variables">; }) => Promise<Remove${entityModelName}ByIdMutationResultEx>;
    export type Remove${entityModelName}LazyMutationReturn = [Remove${entityModelName}WrappedLazyMutationFn, Remove${entityModelName}ByIdMutationResultEx];

    function useRemove${entityModelName}ById(options?: Omit<MutationHookOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, "mutation" | "variables">) {
      const lazyMutation: Remove${entityModelName}LazyMutationFn = useMutation<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>(Remove${entityModelName}ByIdDocument, options);
      
      const pickAffectedRows: PickRemove${entityModelName}Fn = (mutation: Remove${entityModelName}ByIdMutation | null | undefined) => {
        return mutation?.delete_${entityName}?.affected_rows || 0;
      };

      const wrappedLazyMutation: Remove${entityModelName}WrappedLazyMutationFn = async ({ ${entityShortCamelCaseName}Id, autoOptimisticResponse, options }) => {
        const mutationOptions:MutationFunctionOptions<Remove${entityModelName}Mutation, Remove${entityModelName}ByIdMutationVariables> = { variables: { id: ${entityShortCamelCaseName}Id }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Remove${entityModelName}Mutation>({ operationType: 'delete', entityName:'${entityShortCamelCaseName}', objects:[{ id:${entityShortCamelCaseName}Id }] });        }
        if((!options || !options.update)){ mutationOptions.update = generateUpdateFunctionForMutation<Remove${entityModelName}ByIdMutation>({ operationType: 'delete', entityName:'${entityShortCamelCaseName}', entityId:${entityShortCamelCaseName}Id }); }
        
        const fetchResult: Remove${entityModelName}ByIdFetchResult = await lazyMutation[0](mutationOptions);
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }] as [
        typeof wrappedLazyMutation,
        typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }
      ];
    }
  `);
    contentManager.addContent(`
    //
    //

    // Types
    type Remove${entityModelName}ObjectsMutationResult = FetchResult<Remove${entityModelName}Mutation, Record<string, any>, Record<string, any>>;
    export type Remove${entityModelName}ObjectsMutationResultEx = Remove${entityModelName}ObjectsMutationResult & RemoveEntitiesQueryHookResultEx;

    // Function
    type PickRemove${entityModelName}ObjectsFn = (mutation: Remove${entityModelName}Mutation | null | undefined) => number;
    type Remove${entityModelName}ObjectsLazyMutationFn = MutationTuple<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>;
    type Remove${entityModelName}ObjectsWrappedLazyMutationFn = (options: MutationFunctionOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>) => Promise<Remove${entityModelName}ObjectsMutationResultEx>;
    export type Remove${entityModelName}ObjectsLazyMutationReturn = [Remove${entityModelName}ObjectsWrappedLazyMutationFn, Remove${entityModelName}ObjectsMutationResultEx];

    function useRemove${entityModelName}Objects(options?: Omit<MutationHookOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, "mutation">): Remove${entityModelName}ObjectsLazyMutationReturn {
      const lazyMutation = useMutation<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>(Remove${entityModelName}Document, options);

      const pickAffectedRows: PickRemove${entityModelName}ObjectsFn = (mutation: Remove${entityModelName}Mutation | null | undefined) => {
        return mutation?.delete_${entityName}?.affected_rows || 0;
      };

      const wrappedLazyMutation: Remove${entityModelName}ObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: Remove${entityModelName}ObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }];
    }
  `);
    contentManager.addImport(_1.makeImportStatement(`Remove${entityModelName}Mutation`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Remove${entityModelName}MutationVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Remove${entityModelName}Document`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Remove${entityModelName}ByIdMutation`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Remove${entityModelName}ByIdMutationVariables`, typescriptCodegenOutputPath));
    contentManager.addImport(_1.makeImportStatement(`Remove${entityModelName}ByIdDocument`, typescriptCodegenOutputPath));
}
exports.injectDeleteReact = injectDeleteReact;
// ---------------------------------
//
function injectSharedReactPost({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath, withQueries, withSubscriptions, withInserts, withUpdates, withDeletes }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const entityModelName = _1.makeModelName(entityName, trimString);
    const queryByIdName = `Query${fragmentNamePascalCase}ById`;
    const queryObjectsName = `Query${fragmentNamePascalCase}Objects`;
    const subscribeByIdName = `SubscribeTo${fragmentNamePascalCase}ById`;
    const subscribeByObjectsName = `SubscribeTo${fragmentNamePascalCase}Objects`;
    if (withQueries || withInserts || withUpdates || withSubscriptions) {
        let fragmentHooksObject = `
    // ${fragmentNamePascalCase} Fragment Helper Object
    //------------------------------------------------

    export const ${fragmentNamePascalCase}FragmentGQLHooks = {\n`;
        if (withQueries)
            fragmentHooksObject += `      useQueryById: use${queryByIdName},\n`;
        if (withQueries)
            fragmentHooksObject += `      useQueryByIdLazy: use${queryByIdName}Lazy,\n`;
        if (withQueries)
            fragmentHooksObject += `      useQueryObjects: use${queryObjectsName},\n`;
        if (withQueries)
            fragmentHooksObject += `      useQueryObjectsLazy: use${queryObjectsName}Lazy,\n`;
        if (withSubscriptions)
            fragmentHooksObject += `      useSubscribeToById: use${subscribeByIdName},\n`;
        if (withSubscriptions)
            fragmentHooksObject += `      useSubscribeToObjects: use${subscribeByObjectsName},\n`;
        if (withInserts)
            fragmentHooksObject += `      useInsert: useInsert${fragmentNamePascalCase},\n`;
        if (withInserts)
            fragmentHooksObject += `      useInsertWithOnConflict: useInsert${fragmentNamePascalCase}WithOnConflict,\n`;
        if (withInserts)
            fragmentHooksObject += `      useInsertObjects: useInsert${fragmentNamePascalCase}Objects,\n`;
        if (withUpdates)
            fragmentHooksObject += `      useUpdateById: useUpdate${fragmentNamePascalCase}ById,\n`;
        if (withUpdates)
            fragmentHooksObject += `      useUpdateObjects: useUpdate${fragmentNamePascalCase}Objects,\n`;
        fragmentHooksObject += `    }
    `;
        contentManager.addContent(fragmentHooksObject);
    }
    if (withDeletes) {
        let entityHooksObject = `
    // ${entityName} MODEL HOOKS OBJECT
    //------------------------------------------------

    export const ${entityModelName}GQLHooks = {
      useRemoveById: useRemove${entityModelName}ById,
      useRemoveObjects: useRemove${entityModelName}Objects
    }
  `;
        contentManager.addContent(entityHooksObject);
    }
}
exports.injectSharedReactPost = injectSharedReactPost;
// ---------------------------------
//
function injectGlobalReactCodePost({ contentManager, fragmentDefinitionNodes, schemaTypeMap, trimString, withQueries, withSubscriptions, withInserts, withUpdates, withDeletes }) {
    const uniqueModelNamesFromFragments = utils_1.getUniqueEntitiesFromFragmentDefinitions({ fragmentDefinitionNodes, schemaTypeMap, trimString }).map(entityName => `${_1.makeShortName(entityName, trimString)}`);
    contentManager.addContent(`
    /*
     * COMBINED HOOKS OBJECT
     */
    export const GQLHooks = {
      ${withQueries || withInserts || withUpdates
        ? `Fragments: {
        ${fragmentDefinitionNodes
            .map(fragmentDefinitionNode => `${_1.makeShortName(fragmentDefinitionNode.name.value, trimString)}: ${_1.makeShortName(fragmentDefinitionNode.name.value, trimString)}FragmentGQLHooks`)
            .join(",\n        ")}
      },`
        : ""}
      ${withDeletes
        ? `Models: {
        ${uniqueModelNamesFromFragments.map(modelName => `${modelName}: ${modelName}ModelGQLHooks`).join(",\n        ")}
      }`
        : ""}
    }
  `);
}
exports.injectGlobalReactCodePost = injectGlobalReactCodePost;
//# sourceMappingURL=reactInjectors.js.map