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
    `import { ApolloClient, ApolloQueryResult, defaultDataIdFromObject, FetchResult, MutationOptions, ObservableQuery, QueryOptions, SubscriptionOptions, Observable } from '@apollo/client'`
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
  const queryByIdName = `Query${fragmentName}ById`;

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
        return apolloClient.readQuery<${fragmentName}Fragment | null >({ query: ${queryByIdName}Document, variables: { ${fragmentNameCamelCase}Id }  });
      }

      function clientWriteQuery${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id, ${fragmentNameCamelCase} }: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}: ${fragmentName}Fragment | null }): void {
        return apolloClient.writeQuery<${fragmentName}Fragment | null>({ query: ${queryByIdName}Document, variables: { ${fragmentNameCamelCase}Id }, data: (${fragmentNameCamelCase} ? { ...${fragmentNameCamelCase}, __typename: '${entityName}' } : null) });
      }

      function cacheWriteQuery${fragmentName}ById({ apolloClient, ${fragmentNameCamelCase}Id, ${fragmentNameCamelCase} }: { apolloClient: ApolloClient<object>, ${fragmentNameCamelCase}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}: ${fragmentName}Fragment | null }): void {
        return apolloClient.cache.writeQuery<${fragmentName}Fragment | null>({ query: ${queryByIdName}Document, variables: { ${fragmentNameCamelCase}Id }, data: (${fragmentNameCamelCase} ? { ...${fragmentNameCamelCase}, __typename: '${entityName}' } : null) });
      }
    `);

    contentManager.addImport(makeImportStatement(fragmentDocName, typescriptCodegenOutputPath));
    if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${queryByIdName}Query`, typescriptCodegenOutputPath));
    if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${queryByIdName}Document`, typescriptCodegenOutputPath));
    if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${queryByIdName}QueryVariables`, typescriptCodegenOutputPath));
  }
}

// ---------------------------------
//
export function injectQueryHelpers({
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
  const queryByIdName = `Query${fragmentName}ById`;
  const queryObjectsName = `Query${fragmentName}Objects`;

  const entityShortName = makeShortName(entityName, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);
  const fragmentTypeScriptTypeName = makeFragmentTypeScriptTypeName(fragmentName);
  const queryByIdNameCamelCase = makeCamelCase(queryByIdName);
  const queryObjectsNameCamelCase = makeCamelCase(queryObjectsName);

  if (primaryKeyIdField) {
    contentManager.addContent(`
      // Query Fetch Helper
      //
      export type ${queryByIdName}ApolloQueryResult = ApolloQueryResult<${queryByIdName}Query>;
      export type ${queryByIdName}ApolloQueryHelperResultEx = ${queryByIdName}ApolloQueryResult & ${fragmentName}ByIdHelperResultEx;

      async function ${queryByIdNameCamelCase}({ apolloClient, ${entityShortCamelCaseName}Id, options }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: string, options?: Omit<QueryOptions<${queryByIdName}QueryVariables>, 'query' | 'variables'> }): Promise<${queryByIdName}ApolloQueryHelperResultEx> {
        const query: ${queryByIdName}ApolloQueryResult = await apolloClient.query<${queryByIdName}Query>({ query: ${queryByIdName}Document, variables: { ${entityShortCamelCaseName}Id }, ...options });
        
        return { ...query, ${fragmentNameCamelCase}: query?.data?.${entityName}_by_pk }
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
      export type ${queryObjectsName}ObjectsApolloQueryResultEx = ${queryObjectsName}ObjectsApolloQueryResult & ${fragmentName}ObjectsHelperResultEx;

      async function ${queryObjectsNameCamelCase}({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<${queryObjectsName}QueryVariables>, 'query'> }): Promise<${queryObjectsName}ObjectsApolloQueryResultEx> {
        const query: ${queryObjectsName}ObjectsApolloQueryResult = await apolloClient.query<${queryObjectsName}Query>({ query: ${queryObjectsName}Document, ...options });
        
        return { ...query, objects: query?.data?.${entityName} || [] }
      }

      // Query Watch Objects Helper
      //
      export type Watch${queryObjectsName}ApolloObservableQuery = ObservableQuery<${queryObjectsName}Query>;
      async function watch${queryObjectsName}({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<${queryObjectsName}QueryVariables>, 'query'> }) : Promise<Watch${queryObjectsName}ApolloObservableQuery> {
        return apolloClient.watchQuery<${queryObjectsName}Query>({ query: ${queryObjectsName}Document, ...options });
      }
    `);

  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${queryByIdName}Query`, typescriptCodegenOutputPath));
  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${queryByIdName}Document`, typescriptCodegenOutputPath));
  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${queryByIdName}QueryVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`${queryObjectsName}Query`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`${queryObjectsName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`${queryObjectsName}QueryVariables`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectSubscriptionHelpers({
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
  const subscribeByIdName = `SubscribeTo${fragmentName}ById`;
  const subscribeObjectsName = `SubscribeTo${fragmentName}Objects`;

  const entityShortName = makeShortName(entityName, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);
  const fragmentTypeScriptTypeName = makeFragmentTypeScriptTypeName(fragmentName);
  const subscribeByIdNameCamelCase = makeCamelCase(subscribeByIdName);
  const subscribeObjectsNameCamelCase = makeCamelCase(subscribeObjectsName);

  if (primaryKeyIdField) {
    contentManager.addContent(`
    // Subscription Fetch ById Helper
    //
    export type ${subscribeByIdName}SubscriptionFetchResult = FetchResult<${subscribeByIdName}Subscription, Record<string, any>, Record<string, any>>;
    export type ${subscribeByIdName}SubscriptionFetchResultEx = FetchResult<${subscribeByIdName}Subscription, Record<string, any>, Record<string, any>> & ${fragmentName}ByIdHelperResultEx;
    
    async function ${subscribeByIdNameCamelCase}({ apolloClient, ${entityShortCamelCaseName}Id, options }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id:string, options?: Omit<SubscriptionOptions<${subscribeByIdName}SubscriptionVariables>, 'query' | 'variables'> }): Promise<Observable<${subscribeByIdName}SubscriptionFetchResultEx>> {
      const subscription:Observable<${subscribeByIdName}SubscriptionFetchResult> = apolloClient.subscribe<${subscribeByIdName}Subscription>({ query: ${subscribeByIdName}Document, variables: { ${entityShortCamelCaseName}Id }, ...options });
      
      return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, ${fragmentNameCamelCase}:value?.data?.${entityName}_by_pk || [] }  as ${subscribeByIdName}SubscriptionFetchResultEx }) ;
    }
    `);
  }

  contentManager.addContent(`
      // Subscription Fetch Objects Helper
      //
      export type ${subscribeObjectsName}SubscriptionFetchResult = FetchResult<${subscribeObjectsName}Subscription, Record<string, any>, Record<string, any>>;
      export type ${subscribeObjectsName}SubscriptionFetchResultEx = FetchResult<${subscribeObjectsName}Subscription, Record<string, any>, Record<string, any>> & ${fragmentName}ObjectsHelperResultEx;

      async function ${subscribeObjectsNameCamelCase}({ apolloClient, options }: { apolloClient: ApolloClient<object>, options?: Omit<SubscriptionOptions<${subscribeObjectsName}SubscriptionVariables>, 'query'> }): Promise<Observable<${subscribeObjectsName}SubscriptionFetchResultEx>> {
        const subscription:Observable<${subscribeObjectsName}SubscriptionFetchResult> = apolloClient.subscribe<${subscribeObjectsName}Subscription>({ query: ${subscribeObjectsName}Document, ...options });
        
        return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, objects: value?.data?.${entityName} || [] }  as ${subscribeObjectsName}SubscriptionFetchResultEx }) ;
      }
    `);

  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${subscribeByIdName}Subscription`, typescriptCodegenOutputPath));
  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${subscribeByIdName}Document`, typescriptCodegenOutputPath));
  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`${subscribeByIdName}SubscriptionVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`${subscribeObjectsName}Subscription`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`${subscribeObjectsName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`${subscribeObjectsName}SubscriptionVariables`, typescriptCodegenOutputPath));
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
        
      return { ...mutation, ${fragmentNameCamelCase}: mutation?.data?.insert_${entityName}?.returning && mutation.data.insert_${entityName}.returning[0] };
    }

    async function insert${fragmentName}WithOnConflict({ apolloClient, ${entityShortCamelCaseName}, onConflict, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input, onConflict: ${entityPascalName}_On_Conflict, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation' | 'variables'> }): Promise<Insert${fragmentName}FetchHelperResultEx> {
      const mutationOptions:MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables> = { mutation: Insert${fragmentName}Document, variables: { objects: [${entityShortCamelCaseName}], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!${entityShortCamelCaseName}.id) throw new Error(\`if autoOptimisticResponse = true, id must be set in object '${entityShortCamelCaseName}'\`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Insert${fragmentName}Mutation>({ operationType: 'insert', entityName:'${entityName}', objects:[${entityShortCamelCaseName} as ${entityPascalName}_Insert_Input & ObjectWithId] }); 
      }
      
      const mutation:Insert${fragmentName}FetchResult = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, ${fragmentNameCamelCase}: mutation?.data?.insert_${entityName}?.returning && mutation.data.insert_${entityName}.returning[0] };
    }



  `);

  contentManager.addContent(`
    // Insert Objects Helper
    //
    type Insert${fragmentName}ObjectsFetchResult = FetchResult<Insert${fragmentName}Mutation, Record<string, any>, Record<string, any>>;
    export type Insert${fragmentName}ObjectsHelperResultEx = Insert${fragmentName}ObjectsFetchResult & ${fragmentName}ObjectsHelperResultEx;

    async function insert${fragmentName}Objects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation'> }): Promise<Insert${fragmentName}ObjectsHelperResultEx> {
      const mutation: Insert${fragmentName}ObjectsFetchResult = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>({ mutation: Insert${fragmentName}Document, ...options });
       
      return { ...mutation, objects: mutation?.data?.insert_${entityName}?.returning || [] };
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
        
      return { ...mutation, ${fragmentNameCamelCase}: mutation?.data?.update_${entityName}?.returning && mutation.data.update_${entityName}.returning[0] };
    }
  `);

  contentManager.addContent(`
    // Update Objects Helper
    //
    type Update${fragmentName}ObjectsFetchResult = FetchResult<Update${fragmentName}Mutation, Record<string, any>, Record<string, any>>;
    export type Update${fragmentName}ObjectsHelperResultEx = Update${fragmentName}ObjectsFetchResult & ${fragmentName}ObjectsHelperResultEx;

    async function update${fragmentName}Objects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>, 'mutation'> }): Promise<Update${fragmentName}ObjectsHelperResultEx> {  
      const mutation:Update${fragmentName}ObjectsFetchResult = await apolloClient.mutate<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>({ mutation: Update${fragmentName}Document, ...options } );
        
      return { ...mutation, objects:mutation?.data?.update_${entityName}?.returning || [] };
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
    
      return { ...mutation, affected_rows: mutation?.data?.delete_${entityName}?.affected_rows || 0 };
    }
  `);

  contentManager.addContent(`
    type Remove${entityModelName}ObjectsQueryResult = FetchResult<Remove${entityModelName}Mutation, Record<string, any>, Record<string, any>>;
    export type Remove${entityModelName}ObjectsQueryHelperResultEx = Remove${entityModelName}ObjectsQueryResult & RemoveEntitiesQueryHelperResultEx;  
  
    async function remove${entityModelName}Objects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, 'mutation'> }): Promise<Remove${entityModelName}ObjectsQueryHelperResultEx> {  
        const mutation:Remove${entityModelName}ByIdQueryResult = await apolloClient.mutate<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>({ mutation: Remove${entityModelName}Document, ...options } );
          
        return { ...mutation, affected_rows: mutation?.data?.delete_${entityName}?.affected_rows || 0 };
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
  withSubscriptions,
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
  withSubscriptions?: boolean;
  withInserts?: boolean;
  withUpdates?: boolean;
  withDeletes?: boolean;
}) {
  const entityModelName = makeModelName(entityName, trimString);

  if (withClientAndCacheHelpers || withQueries || withInserts || withUpdates || withSubscriptions) {
    let fragmentHelperObject = `
    // ${fragmentName} Fragment Helper Object
    //------------------------------------------------

    export const ${fragmentName}FragmentGQLHelper = {\n`;
    if (withClientAndCacheHelpers) fragmentHelperObject += `      clientReadFragmentById: clientReadFragment${fragmentName}ById,\n`;
    if (withClientAndCacheHelpers) fragmentHelperObject += `      clientWriteFragmentById: clientWriteFragment${fragmentName}ById,\n`;
    if (withClientAndCacheHelpers) fragmentHelperObject += `      cacheWriteFragmentById: cacheWriteFragment${fragmentName}ById,\n`;
    if (withClientAndCacheHelpers) fragmentHelperObject += `      clientReadQueryById: clientReadQuery${fragmentName}ById,\n`;
    if (withClientAndCacheHelpers) fragmentHelperObject += `      clientWriteQueryById: clientWriteQuery${fragmentName}ById,\n`;
    if (withClientAndCacheHelpers) fragmentHelperObject += `      cacheWriteQueryById: cacheWriteQuery${fragmentName}ById,\n`;
    if (withQueries) fragmentHelperObject += `      queryById: query${fragmentName}ById,\n`;
    if (withQueries) fragmentHelperObject += `      queryObjects: query${fragmentName}Objects,\n`;
    if (withQueries) fragmentHelperObject += `      watchQueryById: watchQuery${fragmentName}ById,\n`;
    if (withQueries) fragmentHelperObject += `      watchQueryObjects: watchQuery${fragmentName}Objects,\n`;
    if (withSubscriptions) fragmentHelperObject += `      subscribeToById: subscribeTo${fragmentName}ById,\n`;
    if (withSubscriptions) fragmentHelperObject += `      subscribeToObjects: subscribeTo${fragmentName}Objects,\n`;
    if (withInserts) fragmentHelperObject += `      insert: insert${fragmentName},\n`;
    if (withInserts) fragmentHelperObject += `      insertWithOnConflict: insert${fragmentName}WithOnConflict,\n`;
    if (withInserts) fragmentHelperObject += `      insertObjects: insert${fragmentName}Objects,\n`;
    if (withUpdates) fragmentHelperObject += `      updateById: update${fragmentName}ById,\n`;
    if (withUpdates) fragmentHelperObject += `      updateObjects: update${fragmentName}Objects\n`;

    fragmentHelperObject += `    }
  `;
    contentManager.addContent(fragmentHelperObject);
  }

  if (withDeletes) {
    let entityHelperObject = `
    // ${entityName} Entity Helper Object
    //------------------------------------------------

    export const ${entityModelName}GQLHelper = {
      removeById: remove${entityModelName}ById,
      removeObjects: remove${entityModelName}Objects
    }
  `;
    contentManager.addContent(entityHelperObject);
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
  withSubscriptions?: boolean;
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
