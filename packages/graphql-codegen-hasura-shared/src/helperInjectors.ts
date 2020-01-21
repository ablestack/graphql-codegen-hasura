import { FieldDefinitionNode, FragmentDefinitionNode } from "graphql";
import { ContentManager, getIdTypeScriptFieldType, makeImportStatement, makeModelName, makeShortName } from ".";
import { makeCamelCase, makeFragmentTypeScriptTypeName, makePascalCase, makeFragmentDocName, getUniqueEntitiesFromFragmentDefinitions } from "./utils";
import { TypeMap } from "graphql/type/schema";

// ---------------------------------
//
export function injectGlobalHelperCodePre({
  contentManager,
  typescriptCodegenOutputPath,
  withUpdates
}: {
  contentManager: ContentManager;
  typescriptCodegenOutputPath: string;
  withUpdates: boolean;
}) {
  contentManager.addImport(`import { generateOptimisticResponseForMutation, generateUpdateFunctionForMutation, ObjectWithId } from 'graphql-codegen-hasura-core'`);
  contentManager.addImport(
    `import { ApolloClient, ApolloQueryResult, defaultDataIdFromObject, FetchResult, MutationOptions, ObservableQuery, QueryOptions } from '@apollo/client'`
  );

  contentManager.addContent(`
    // GLOBAL TYPES
    //------------------------------------------------
    export type RemoveEntitiesQueryHelperResultEx = { affected_rows:number };
  `);
}

// ---------------------------------
//
export function injectSharedHelpersPre({
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
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);
  const fragmentTypeScriptTypeName = makeFragmentTypeScriptTypeName(fragmentName);

  contentManager.addContent(`
    // ${entityName} HELPERS
    //------------------------------------------------

    export type ${fragmentName}ByIdHelperResultEx = { ${fragmentNameCamelCase}:${fragmentTypeScriptTypeName} | null | undefined };
    export type ${fragmentName}ObjectsHelperResultEx = { objects:${fragmentTypeScriptTypeName}[] };
  
  `);

  if (!primaryKeyIdTypeScriptFieldType.isNative) {
    const typeImport = makeImportStatement(`${primaryKeyIdTypeScriptFieldType.typeName}`, typescriptCodegenOutputPath);
    contentManager.addImport(typeImport);
  }

  contentManager.addImport(makeImportStatement(fragmentTypeScriptTypeName, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectClientAndCacheHelpers({
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
  const entityShortName = makeShortName(entityName, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);
  const fragmentTypeScriptTypeName = makeFragmentTypeScriptTypeName(fragmentName);
  const fragmentDocName = makeFragmentDocName(fragmentName);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);
  const fetchByIdName = `Fetch${fragmentName}ByIdAsQuery`;

  if (primaryKeyIdField) {
    contentManager.addContent(`
      // Direct Client & Cache Helpers
      //
      function clientReadFragment${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id}: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: string }): ${fragmentTypeScriptTypeName} | null | undefined {
        return apolloClient.readFragment<${fragmentTypeScriptTypeName} | null | undefined>({ fragment: ${fragmentName}FragmentDoc, fragmentName:'${fragmentName}', id: defaultDataIdFromObject({ __typename: '${entityName}', id:${fragmentNameCamelCase}Id }) });
      }
  
      function clientWriteFragment${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id, ${fragmentNameCamelCase}Partial }: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}Partial: Partial<${fragmentTypeScriptTypeName}> | null }): void {
        return apolloClient.writeFragment<Partial<${fragmentTypeScriptTypeName}> | null>({ fragment: ${fragmentName}FragmentDoc, fragmentName:'${fragmentName}', id: defaultDataIdFromObject({ ...${fragmentNameCamelCase}Partial, id:${fragmentNameCamelCase}Id, __typename: '${entityName}' }), data: { ...${fragmentNameCamelCase}Partial, __typename: '${entityName}' } });
      }
  
      function cacheWriteFragment${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id, ${fragmentNameCamelCase}Partial }: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}Partial: Partial<${fragmentTypeScriptTypeName}> | null }): void {
        return apolloClient.cache.writeFragment<Partial<${fragmentTypeScriptTypeName}> | null>({ fragment: ${fragmentName}FragmentDoc, fragmentName:'${fragmentName}', id: defaultDataIdFromObject({ ...${fragmentNameCamelCase}Partial, id:${fragmentNameCamelCase}Id, __typename: '${entityName}' }), data: { ...${fragmentNameCamelCase}Partial, __typename: '${entityName}' } });
      }

      function clientReadQuery${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id}: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: string }): ${fragmentName}Fragment | null | undefined {
        return apolloClient.readQuery<${fragmentName}Fragment | null >({ query: ${fetchByIdName}Document, variables: { ${fragmentNameCamelCase}Id }  });
      }

      function clientWriteQuery${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id, ${fragmentNameCamelCase} }: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}: ${fragmentName}Fragment | null }): void {
        return apolloClient.writeQuery<${fragmentName}Fragment | null>({ query: ${fetchByIdName}Document, variables: { ${fragmentNameCamelCase}Id }, data: (${fragmentNameCamelCase} ? { ...${fragmentNameCamelCase}, __typename: '${entityName}' } : null) });
      }

      function cacheWriteQuery${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id, ${fragmentNameCamelCase} }: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}: ${fragmentName}Fragment | null }): void {
        return apolloClient.cache.writeQuery<${fragmentName}Fragment | null>({ query: ${fetchByIdName}Document, variables: { ${fragmentNameCamelCase}Id }, data: (${fragmentNameCamelCase} ? { ...${fragmentNameCamelCase}, __typename: '${entityName}' } : null) });
      }
    `);

    contentManager.addImport(makeImportStatement(fragmentDocName, typescriptCodegenOutputPath));
    if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${fetchByIdName}Query`, typescriptCodegenOutputPath));
    if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${fetchByIdName}Document`, typescriptCodegenOutputPath));
    if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${fetchByIdName}QueryVariables`, typescriptCodegenOutputPath));
  }
}

// ---------------------------------
//
export function injectFetchHelpers({
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
  const entityShortName = makeShortName(entityName, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);
  const fragmentTypeScriptTypeName = makeFragmentTypeScriptTypeName(fragmentName);
  const queryByIdName = `Query${fragmentName}ById`;
  const queryObjectsName = `Query${fragmentName}Objects`;
  const subscribeByIdName = `SubscribeTo${fragmentName}ById`;
  const subscribeObjectsName = `SubscribeTo${fragmentName}Objects`;

  if (primaryKeyIdField) {
    contentManager.addContent(`
      // Query Fetch Helper
      //
      export type ${queryByIdName}ApolloQueryResult = ApolloQueryResult<${queryByIdName}Query>;
      export type ${queryByIdName}ApolloQueryHelperResultEx = ${queryByIdName}ApolloQueryResult & ${fragmentName}ByIdHelperResultEx;

      async function fetch${fragmentName}ById({ apolloClient, ${entityShortCamelCaseName}Id, options }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: string, options?: Omit<QueryOptions<${queryByIdName}QueryVariables>, 'query' | 'variables'> }): Promise<${queryByIdName}ApolloQueryHelperResultEx> {
        const query: ${queryByIdName}ApolloQueryResult = await apolloClient.query<${queryByIdName}Query>({ query: ${queryByIdName}Document, variables: { ${entityShortCamelCaseName}Id }, ...options });
        
        return { ...query, ${fragmentNameCamelCase}: query && query.data && query.data.${entityName}_by_pk }
      }

      // Query Watch ById Helper
      //
      export type Watch${queryByIdName}ModelByIdApolloObservableQuery = ObservableQuery<${queryByIdName}Query>;
      async function watchQuery${fragmentName}ModelById({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<${queryByIdName}QueryVariables>, 'query'> }) : Promise<Watch${queryByIdName}ModelByIdApolloObservableQuery> {
        return apolloClient.watchQuery<${queryByIdName}Query>({ query: ${queryByIdName}Document, ...options });
      }
    `);
  }

  contentManager.addContent(`
      // Query Fetch Objects Helper
      //
      export type ${queryObjectsName}ObjectsApolloQueryResult = ApolloQueryResult<${queryObjectsName}Query>;
      export type ${queryObjectsName}ObjectsApolloQueryResultEx = ${queryObjectsName}ObjectsApolloQueryResult & ${fragmentName}ObjectsHelperResultEx;

      async function fetch${fragmentName}Objects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<${queryObjectsName}QueryVariables>, 'query'> }): Promise<${queryObjectsName}ObjectsApolloQueryResultEx> {
        const query: ${queryObjectsName}ObjectsApolloQueryResult = await apolloClient.query<${queryObjectsName}Query>({ query: ${queryObjectsName}Document, ...options });
        
        return { ...query, objects: (query && query.data && query.data.${entityName}) || [] }
      }

      // Query Watch Objects Helper
      //
      export type Watch${fragmentName}ModelObjectsApolloObservableQuery = ObservableQuery<${queryObjectsName}Query>;
      async function watchQuery${fragmentName}ModelObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<${queryObjectsName}QueryVariables>, 'query'> }) : Promise<Watch${fragmentName}ModelObjectsApolloObservableQuery> {
        return apolloClient.watchQuery<${queryObjectsName}Query>({ query: ${queryObjectsName}Document, ...options });
      }
    `);

  contentManager.addContent(`
    // Subscription Fetch ById Helper
    //
    export type ${subscribeByIdName}SubscriptionResult = FetchResult<${subscribeByIdName}Subscription, Record<string, any>, Record<string, any>>;
    export type ${subscribeByIdName}SubscriptionResultEx = FetchResult<${subscribeByIdName}Subscription & ${fragmentName}ByIdHelperResultEx, Record<string, any>, Record<string, any>>;

    async function fetch${fragmentName}ByIdAsSubscription({ apolloClient, ${entityShortCamelCaseName}Id, options }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id:string, options: Omit<SubscriptionOptions<${subscribeByIdName}SubscriptionVariables>, 'query' | 'variables'> }): Promise<Observable<${subscribeByIdName}SubscriptionResultEx>> {
      const subscription:Observable<${subscribeByIdName}SubscriptionResult> = apolloClient.subscribe<${subscribeByIdName}Subscription>({ query: ${subscribeByIdName}Document, variables: { ${entityShortCamelCaseName}Id }, ...options });
      
      return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, ${fragmentNameCamelCase}:(value && value.data && value.data.${entityName}_by_pk) || [] }  as ${subscribeByIdName}SubscriptionResultEx }) ;
    }
  `);

  contentManager.addContent(`
      // Subscription Fetch Objects Helper
      //
      export type ${subscribeObjectsName}SubscriptionResult = FetchResult<${subscribeObjectsName}Subscription, Record<string, any>, Record<string, any>>;
      export type ${subscribeObjectsName}SubscriptionResultEx = FetchResult<${subscribeObjectsName}Subscription & ${fragmentName}ObjectsHelperResultEx, Record<string, any>, Record<string, any>>;

      async function fetch${fragmentName}Objects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<SubscriptionOptions<${subscribeObjectsName}SubscriptionVariables>, 'subscription'> }): Promise<Observable<${subscribeObjectsName}SubscriptionResultEx>> {
        const subscription:Observable<${subscribeObjectsName}SubscriptionResult> = apolloClient.subscribe<${subscribeObjectsName}Subscription>({ query: ${subscribeObjectsName}Document, ...options });
        
        return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, objects:(value && value.data && value.data.${entityName}) || [] }  as ${subscribeObjectsName}SubscriptionResultEx }) ;
      }
    `);

  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${queryObjectsName}Query`, typescriptCodegenOutputPath));
  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${queryObjectsName}Document`, typescriptCodegenOutputPath));
  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${queryByIdName}QueryVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`${queryObjectsName}Query`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`${queryObjectsName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`${queryObjectsName}QueryVariables`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectInsertHelpers({
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
  const fragmentNameCamelCase = makeCamelCase(fragmentName);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);

  contentManager.addContent(`
    // Insert Helper
    //
    type Insert${fragmentName}FetchResult = FetchResult<Insert${fragmentName}Mutation, Record<string, any>, Record<string, any>>;
    export type Insert${fragmentName}FetchHelperResultEx = Insert${fragmentName}FetchResult & ${fragmentName}ByIdHelperResultEx;

    async function insert${fragmentName}({ apolloClient, ${entityShortCamelCaseName}, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation' | 'variables'> }): Promise<Insert${fragmentName}FetchHelperResultEx> {
      const mutationOptions:MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables> = { mutation: Insert${fragmentName}Document, variables: { objects: [${entityShortCamelCaseName}] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!${entityShortCamelCaseName}.id) throw new Error(\`if autoOptimisticResponse = true, id must be set in object '${entityShortCamelCaseName}'\`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Insert${fragmentName}Mutation>({ operationType: 'insert', entityName:'${entityName}', objects:[${entityShortCamelCaseName} as ${entityPascalName}_Insert_Input & ObjectWithId] }); 
      }
      
      const mutation:Insert${fragmentName}FetchResult = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>(mutationOptions);
        
      return { ...mutation, ${fragmentNameCamelCase}:mutation && mutation.data && mutation.data.insert_${entityName} && mutation.data.insert_${entityName}!.returning && mutation.data.insert_${entityName}!.returning[0] };
    }

    async function insert${fragmentName}WithOnConflict({ apolloClient, ${entityShortCamelCaseName}, onConflict, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input, onConflict: ${entityPascalName}_On_Conflict, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation' | 'variables'> }): Promise<Insert${fragmentName}FetchHelperResultEx> {
      const mutationOptions:MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables> = { mutation: Insert${fragmentName}Document, variables: { objects: [${entityShortCamelCaseName}], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!${entityShortCamelCaseName}.id) throw new Error(\`if autoOptimisticResponse = true, id must be set in object '${entityShortCamelCaseName}'\`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Insert${fragmentName}Mutation>({ operationType: 'insert', entityName:'${entityName}', objects:[${entityShortCamelCaseName} as ${entityPascalName}_Insert_Input & ObjectWithId] }); 
      }
      
      const mutation:Insert${fragmentName}FetchResult = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, ${fragmentNameCamelCase}:mutation && mutation.data && mutation.data.insert_${entityName} && mutation.data.insert_${entityName}!.returning && mutation.data.insert_${entityName}!.returning[0] };
    }



  `);

  contentManager.addContent(`
    // Insert Objects Helper
    //
    type Insert${fragmentName}ObjectsFetchResult = FetchResult<Insert${fragmentName}Mutation, Record<string, any>, Record<string, any>>;
    export type Insert${fragmentName}ObjectsHelperResultEx = Insert${fragmentName}ObjectsFetchResult & ${fragmentName}ObjectsHelperResultEx;

    async function insert${fragmentName}Objects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation'> }): Promise<Insert${fragmentName}ObjectsHelperResultEx> {
      const mutation: Insert${fragmentName}ObjectsFetchResult = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>({ mutation: Insert${fragmentName}Document, ...options });
       
      return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_${entityName} && mutation.data.insert_${entityName}!.returning) || [] };
    }
  `);

  contentManager.addImport(makeImportStatement(`${entityPascalName}_Insert_Input`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`${entityPascalName}_On_Conflict`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}Mutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}MutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}WithOnConflictMutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}WithOnConflictDocument`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectUpdateHelpers({
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
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);

  contentManager.addContent(`
    // Update Helper
    //
    type Update${fragmentName}ByIdQueryResult = FetchResult<Update${fragmentName}ByIdMutation, Record<string, any>, Record<string, any>>;
    export type Update${fragmentName}ByIdHelperResultEx = Update${fragmentName}ByIdQueryResult & ${fragmentName}ByIdHelperResultEx;

    async function update${fragmentName}ById({ apolloClient, ${entityShortCamelCaseName}Id, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, set: ${entityPascalName}_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, 'mutation'> }): Promise<Update${fragmentName}ByIdHelperResultEx> {
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

    async function update${fragmentName}Objects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>, 'mutation'> }): Promise<Update${fragmentName}ObjectsHelperResultEx> {  
      const mutation:Update${fragmentName}ObjectsFetchResult = await apolloClient.mutate<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>({ mutation: Update${fragmentName}Document, ...options } );
        
      return { ...mutation, objects:(mutation && mutation.data && mutation.data.update_${entityName} && mutation.data.update_${entityName}!.returning) || [] };
    }
  `);

  contentManager.addImport(makeImportStatement(`${entityPascalName}_Set_Input`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Update${fragmentName}ByIdMutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Update${fragmentName}ByIdMutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Update${fragmentName}ByIdDocument`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Update${fragmentName}Mutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Update${fragmentName}MutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Update${fragmentName}Document`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectDeleteHelpers({
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
  const entityShortName = makeShortName(entityName, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const entityModelName = makeModelName(entityName, trimString);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);

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
    
      return { ...mutation, affected_rows:(mutation && mutation.data && mutation.data.delete_${entityName} && mutation.data.delete_${entityName}!.affected_rows) || 0 };
    }
  `);

  contentManager.addContent(`
    type Remove${entityModelName}ObjectsQueryResult = FetchResult<Remove${entityModelName}Mutation, Record<string, any>, Record<string, any>>;
    export type Remove${entityModelName}ObjectsQueryHelperResultEx = Remove${entityModelName}ObjectsQueryResult & RemoveEntitiesQueryHelperResultEx;  
  
    async function remove${entityModelName}Objects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, 'mutation'> }): Promise<Remove${entityModelName}ObjectsQueryHelperResultEx> {  
        const mutation:Remove${entityModelName}ByIdQueryResult = await apolloClient.mutate<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>({ mutation: Remove${entityModelName}Document, ...options } );
          
        return { ...mutation, affected_rows:(mutation && mutation.data && mutation.data.delete_${entityName} && mutation.data.delete_${entityName}!.affected_rows) || 0 };
      }
  `);

  contentManager.addImport(makeImportStatement(`Remove${entityModelName}Mutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}MutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdMutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdMutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdDocument`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectSharedHelpersPost({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath,
  withClientAndCacheHelpers,
  withQueries,
  withInserts,
  withUpdates,
  withDeletes
}: {
  contentManager: ContentManager;
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
  withClientAndCacheHelpers?: boolean;
  withQueries?: boolean;
  withInserts?: boolean;
  withUpdates?: boolean;
  withDeletes?: boolean;
}) {
  const entityModelName = makeModelName(entityName, trimString);

  (withClientAndCacheHelpers || withQueries || withInserts || withUpdates) &&
    contentManager.addContent(`
    // ${fragmentName} Fragment Helper Object
    //------------------------------------------------

    export const ${fragmentName}FragmentGQLHelper = {
      ${withClientAndCacheHelpers && `clientReadFragmentById: clientReadFragment${fragmentName}ById`},
      ${withClientAndCacheHelpers && `clientWriteFragmentById: clientWriteFragment${fragmentName}ById`},
      ${withClientAndCacheHelpers && `cacheWriteFragmentById: cacheWriteFragment${fragmentName}ById`},
      ${withClientAndCacheHelpers && `clientReadQueryById: clientReadQuery${fragmentName}ById`},
      ${withClientAndCacheHelpers && `clientWriteQueryById: clientWriteQuery${fragmentName}ById`},
      ${withClientAndCacheHelpers && `cacheWriteQueryById: cacheWriteQuery${fragmentName}ById`},
      ${withQueries && `fetchById: fetch${fragmentName}ById`},
      ${withQueries && `watchQueryById: watchQuery${fragmentName}ModelById`},
      ${withQueries && `fetchObjects: fetch${fragmentName}Objects`},
      ${withQueries && `watchQueryObjects: watchQuery${fragmentName}ModelObjects`},
      ${withInserts && `insert: insert${fragmentName}`},
      ${withInserts && `insertWithOnConflict: insert${fragmentName}WithOnConflict`},
      ${withInserts && `insertObjects: insert${fragmentName}Objects`},
      ${withUpdates && `updateById: update${fragmentName}ById`},
      ${withUpdates && `updateObjects: update${fragmentName}Objects`},
    }
  `);

  if (withDeletes) {
    contentManager.addContent(`
    // ${entityName} Entity Helper Object
    //------------------------------------------------

    export const ${entityModelName}GQLHelper = {
      ${withDeletes && `removeById: remove${entityModelName}ById`},
      ${withDeletes && `removeObjects: remove${entityModelName}Objects`}
    }
  `);
  }
}

// ---------------------------------
//
export function injectGlobalHelperCodePost({
  contentManager,
  fragmentDefinitionNodes,
  schemaTypeMap,
  trimString,
  withClientAndCacheHelpers,
  withQueries,
  withInserts,
  withUpdates,
  withDeletes
}: {
  contentManager: ContentManager;
  fragmentDefinitionNodes: FragmentDefinitionNode[];
  schemaTypeMap: TypeMap;
  trimString?: string;
  withClientAndCacheHelpers?: boolean;
  withQueries?: boolean;
  withInserts?: boolean;
  withUpdates?: boolean;
  withDeletes?: boolean;
}) {
  const uniqueModelNamesFromFragments = getUniqueEntitiesFromFragmentDefinitions({ fragmentDefinitionNodes, schemaTypeMap, trimString }).map(
    entityName => `${makeModelName(entityName, trimString)}`
  );

  contentManager.addContent(`
    // COMBINED HELPER OBJECT
    //------------------------------------------------
    export const GQLHelpers = {
      ${
        withClientAndCacheHelpers || withQueries || withInserts || withUpdates
          ? `Fragments: {
        ${fragmentDefinitionNodes
          .map(
            fragmentDefinitionNode =>
              `${makeShortName(fragmentDefinitionNode.name.value, trimString)}: ${makeShortName(fragmentDefinitionNode.name.value, trimString)}FragmentGQLHelper`
          )
          .join(",\n        ")}
      },`
          : ""
      }
      ${
        withDeletes
          ? `Models: {
        ${uniqueModelNamesFromFragments.map(modelName => `${modelName}: ${modelName}GQLHelper`).join(",\n        ")}
      }`
          : ""
      }
    }
  `);
}
