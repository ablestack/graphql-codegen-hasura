import {
  FieldDefinitionNode,
  FragmentDefinitionNode,
  GraphQLNamedType,
} from "graphql";
import {
  ContentManager,
  getIdTypeScriptFieldType,
  makeImportStatement,
  makeModelName,
  makeShortName,
} from ".";
import {
  makeCamelCase,
  makeFragmentTypeScriptTypeName,
  makePascalCase,
  makeFragmentDocName,
  getUniqueEntitiesFromFragmentDefinitions,
} from "./utils";
import { TypeMap } from "graphql/type/schema";

// ---------------------------------
//
export function injectGlobalHelperCodePre({
  contentManager,
  typescriptCodegenOutputPath,
  withUpdates,
}: {
  contentManager: ContentManager;
  typescriptCodegenOutputPath: string;
  withUpdates: boolean;
}) {
  contentManager.addImport(
    `import { defaultCacheIdFromObject, generateOptimisticResponseForMutation, generateUpdateFunctionForMutation, convertToGraph, ObjectWithId, FieldMap, getLogLevel, ensureTypenameOnFragment, ensureTypenameOnFragments, stripInsertInputClientFields } from 'graphql-codegen-hasura-core'`
  );
  contentManager.addImport(
    `import { ApolloClient, ApolloCache, ApolloQueryResult, DataProxy, FetchResult, MutationOptions, Observable, ObservableQuery, QueryOptions, Reference, SubscriptionOptions } from '@apollo/client'`
  );

  contentManager.addContent(`
    // GLOBAL TYPES
    //------------------------------------------------
    export type RemoveEntitiesQueryHelperResultEx = { affected_rows:number };

    //
    // GLOBAL VALUES
    const logLevel = getLogLevel();

  `);
}

// ---------------------------------
//
export function injectSharedHelpersPre({
  contentManager,
  entityNamedType,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath,
}: {
  contentManager: ContentManager;
  entityNamedType: GraphQLNamedType;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField?: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const fragmentNamePascalCase = makePascalCase(fragmentName);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(
    primaryKeyIdField
  );
  const fragmentNameCamelCase = makeCamelCase(fragmentName);
  const fragmentTypeScriptTypeName = makeFragmentTypeScriptTypeName(
    fragmentName
  );

  contentManager.addContent(`
    // ${entityNamedType.name} HELPERS
    //------------------------------------------------

    export type ${fragmentNamePascalCase}ByIdHelperResultEx = { ${fragmentNameCamelCase}:${fragmentTypeScriptTypeName} | null | undefined };
    export type ${fragmentNamePascalCase}ObjectsHelperResultEx = { objects:${fragmentTypeScriptTypeName}[] };
    
  `);

  if (
    primaryKeyIdTypeScriptFieldType &&
    !primaryKeyIdTypeScriptFieldType.isNative
  ) {
    const typeImport = makeImportStatement(
      `${primaryKeyIdTypeScriptFieldType.typeName}`,
      typescriptCodegenOutputPath
    );
    contentManager.addImport(typeImport);
  }

  contentManager.addImport(
    makeImportStatement(fragmentTypeScriptTypeName, typescriptCodegenOutputPath)
  );
}

// ---------------------------------
//
export function injectCacheHelpers({
  contentManager,
  entityNamedType,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath,
}: {
  contentManager: ContentManager;
  entityNamedType: GraphQLNamedType;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField?: FieldDefinitionNode | null;
  typescriptCodegenOutputPath: string;
}) {
  const entityShortName = makeShortName(entityNamedType.name, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const fragmentNamePascalCase = makePascalCase(fragmentName);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);
  const fragmentTypeScriptTypeName = makeFragmentTypeScriptTypeName(
    fragmentName
  );
  const fragmentDocName = makeFragmentDocName(fragmentName);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(
    primaryKeyIdField
  );
  const entityPascalName = makePascalCase(entityNamedType.name);
  const queryByIdName = `Query${fragmentNamePascalCase}ById`;
  const queryObjectsName = `Query${fragmentNamePascalCase}Objects`;

  if (primaryKeyIdField) {
    contentManager.addContent(`
    // Direct Client & Cache Fragment Helpers
    //
    function cacheGetDataIdFor${fragmentNamePascalCase}( ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}): string {
      return defaultCacheIdFromObject({ __typename: '${entityNamedType.name}', id:${entityShortCamelCaseName}Id });
    }

    function cacheReadFragment${fragmentNamePascalCase}ById({ apolloCache, ${entityShortCamelCaseName}Id}: { apolloCache: ApolloCache<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName} }): ${fragmentTypeScriptTypeName} | null {
      return apolloCache.readFragment<${fragmentTypeScriptTypeName} | null>({ fragment: ${fragmentDocName}, fragmentName:'${fragmentName}', id: defaultCacheIdFromObject({ __typename: '${entityNamedType.name}', id:${entityShortCamelCaseName}Id }) });
    }

    function cacheWriteFragment${fragmentNamePascalCase}ById({ apolloCache, ${entityShortCamelCaseName}Id, ${fragmentNameCamelCase}Partial, fieldMap, apolloBroadcast }: { apolloCache: ApolloCache<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}Partial: Partial<${fragmentTypeScriptTypeName}> | ${entityPascalName}_Insert_Input | null, fieldMap?: FieldMap, apolloBroadcast?:boolean }): Partial<${fragmentTypeScriptTypeName}> {
      const parsedFragment = convertToGraph({ input:${fragmentNameCamelCase}Partial, typename:'${entityNamedType.name}', fieldMap });
      if(logLevel >= 2) console.log(' --> cacheWriteFragment${fragmentNamePascalCase}ById - parsedFragment:', parsedFragment);
      apolloCache.writeFragment<Partial<${fragmentTypeScriptTypeName}> | null>({ fragment: ${fragmentDocName}, fragmentName:'${fragmentName}', id: defaultCacheIdFromObject({ ...parsedFragment, id:${entityShortCamelCaseName}Id }), data: parsedFragment, broadcast:apolloBroadcast });
      return parsedFragment;
    }

    function cacheReadQuery${fragmentNamePascalCase}ById({ apolloCache, ${entityShortCamelCaseName}Id}: { apolloCache: ApolloCache<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName} }): ${fragmentNamePascalCase}Fragment | null {
      return apolloCache.readQuery<${fragmentNamePascalCase}Fragment | null >({ query: ${queryByIdName}Document, variables: { ${entityShortCamelCaseName}Id }  });
    }

    function cacheWriteQuery${fragmentNamePascalCase}ById({ apolloCache, ${entityShortCamelCaseName}Id, ${fragmentNameCamelCase}, fieldMap, apolloBroadcast }: { apolloCache: ApolloCache<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}: ${fragmentNamePascalCase}Fragment | ${entityPascalName}_Insert_Input | null, fieldMap?: FieldMap, apolloBroadcast?:boolean }): Reference | undefined {
        const ${fragmentNameCamelCase}Partial = convertToGraph({ input:${fragmentNameCamelCase}, typename:'${entityNamedType.name}', fieldMap });
        return apolloCache.writeQuery<${fragmentNamePascalCase}Fragment | null>({ query: ${queryByIdName}Document, variables: { ${entityShortCamelCaseName}Id }, data: (${fragmentNameCamelCase} ? ${fragmentNameCamelCase}Partial : null), broadcast:apolloBroadcast });
    }
    
    function cacheReadQuery${fragmentNamePascalCase}Objects({ apolloCache, variables }: { apolloCache: ApolloCache<object>, variables: Query${fragmentNamePascalCase}ObjectsQueryVariables }): ${entityPascalName}[] | null {
      return apolloCache.readQuery<{${entityPascalName}:${entityPascalName}[] | null}>({ query: ${queryObjectsName}Document, variables })?.${entityPascalName} || [];
    }

    function cacheWriteQuery${fragmentNamePascalCase}Objects({ apolloCache, variables, data, fieldMap, apolloBroadcast }: { apolloCache: ApolloCache<object>, variables: Query${fragmentNamePascalCase}ObjectsQueryVariables, data:(${entityPascalName} | ${entityPascalName}_Insert_Input)[], fieldMap?: FieldMap, apolloBroadcast?:boolean }): Reference | undefined {  
        const objects = convertToGraph({ input:data, typename:'${entityNamedType.name}', fieldMap });
        return apolloCache.writeQuery<{${entityPascalName}:${entityPascalName}[]}>({ query: ${queryObjectsName}Document, variables, data: { ${entityPascalName}:objects }, broadcast:apolloBroadcast });
    }

    function cacheWriteQuery${fragmentNamePascalCase}Insert({ apolloCache, variables, ${entityShortCamelCaseName}, fieldMap, apolloBroadcast }: { apolloCache: ApolloCache<object>, variables: Query${fragmentNamePascalCase}ObjectsQueryVariables, ${entityShortCamelCaseName}:${entityPascalName}_Insert_Input, fieldMap?: FieldMap, apolloBroadcast?:boolean }): Reference | undefined {
      const currentObjects = cacheReadQuery${fragmentNamePascalCase}Objects({ apolloCache, variables }) || [];
      const objectsWithInserted = [ ...currentObjects, convertToGraph({ input: ${entityShortCamelCaseName}, typename:'${entityNamedType.name}', fieldMap })];
      if(logLevel >= 2) console.log(' --> cacheWriteQuery${fragmentNamePascalCase}Insert - objectsWithInserted:', objectsWithInserted);
      return cacheWriteQuery${fragmentNamePascalCase}Objects({ apolloCache, variables, data: objectsWithInserted, apolloBroadcast });
    }

    function cacheWriteQuery${fragmentNamePascalCase}Remove({ apolloCache, variables, ${entityShortCamelCaseName}Id, apolloBroadcast }: { apolloCache: ApolloCache<object>, variables: Query${fragmentNamePascalCase}ObjectsQueryVariables, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, apolloBroadcast?:boolean }): Reference | undefined {
      const currentObjects = cacheReadQuery${fragmentNamePascalCase}Objects({ apolloCache, variables }) || [];
      const objectsWithRemoved = currentObjects.filter(objectItem => objectItem.id !== ${entityShortCamelCaseName}Id) || [];
      if(logLevel >= 2) console.log(' --> cacheWriteQuery${fragmentNamePascalCase}Remove - objectsWithRemoved:', objectsWithRemoved);
      return cacheWriteQuery${fragmentNamePascalCase}Objects({ apolloCache, variables, data: objectsWithRemoved, apolloBroadcast });
    };
    `);

    //
    // In Progress

    // function cacheWriteFragment${fragmentNamePascalCase}Objects({ apolloCache, ${entityShortCamelCaseName}Id, ${fragmentNameCamelCase}Partial }: { apolloCache: ApolloCache<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, ${fragmentNameCamelCase}Partial: Partial<${fragmentTypeScriptTypeName}> | null }): Reference | undefined {
    //   return apolloCache.writeFragment<Partial<${fragmentTypeScriptTypeName}> | null>({ fragment: ${fragmentDocName}, fragmentName:'${fragmentName}', data: { ...${fragmentNameCamelCase}Partial, __typename: '${entityNamedType.name}' } });
    // }

    contentManager.addImport(
      makeImportStatement(entityPascalName, typescriptCodegenOutputPath)
    );
    contentManager.addImport(
      makeImportStatement(fragmentDocName, typescriptCodegenOutputPath)
    );
    contentManager.addImport(
      makeImportStatement(
        `${queryObjectsName}QueryVariables`,
        typescriptCodegenOutputPath
      )
    );
    if (primaryKeyIdField)
      contentManager.addImport(
        makeImportStatement(
          `${queryByIdName}Query`,
          typescriptCodegenOutputPath
        )
      );
    if (primaryKeyIdField)
      contentManager.addImport(
        makeImportStatement(
          `${queryByIdName}Document`,
          typescriptCodegenOutputPath
        )
      );
    if (primaryKeyIdField)
      contentManager.addImport(
        makeImportStatement(
          `${queryByIdName}QueryVariables`,
          typescriptCodegenOutputPath
        )
      );
  }
}

// ---------------------------------
//
export function injectQueryHelpers({
  contentManager,
  entityNamedType,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath,
}: {
  contentManager: ContentManager;
  entityNamedType: GraphQLNamedType;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField?: FieldDefinitionNode | null;
  typescriptCodegenOutputPath: string;
}) {
  const fragmentNamePascalCase = makePascalCase(fragmentName);
  const queryByIdName = `Query${fragmentNamePascalCase}ById`;
  const queryObjectsName = `Query${fragmentNamePascalCase}Objects`;

  const entityShortName = makeShortName(entityNamedType.name, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);
  const fragmentTypeScriptTypeName = makeFragmentTypeScriptTypeName(
    fragmentName
  );
  const queryByIdNameCamelCase = makeCamelCase(queryByIdName);
  const queryObjectsNameCamelCase = makeCamelCase(queryObjectsName);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(
    primaryKeyIdField
  );

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
    contentManager.addImport(
      makeImportStatement(`${queryByIdName}Query`, typescriptCodegenOutputPath)
    );
  if (primaryKeyIdField)
    contentManager.addImport(
      makeImportStatement(
        `${queryByIdName}Document`,
        typescriptCodegenOutputPath
      )
    );
  if (primaryKeyIdField)
    contentManager.addImport(
      makeImportStatement(
        `${queryByIdName}QueryVariables`,
        typescriptCodegenOutputPath
      )
    );
  contentManager.addImport(
    makeImportStatement(`${queryObjectsName}Query`, typescriptCodegenOutputPath)
  );
  contentManager.addImport(
    makeImportStatement(
      `${queryObjectsName}Document`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `${queryObjectsName}QueryVariables`,
      typescriptCodegenOutputPath
    )
  );
}

// ---------------------------------
//
export function injectSubscriptionHelpers({
  contentManager,
  entityNamedType,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath,
}: {
  contentManager: ContentManager;
  entityNamedType: GraphQLNamedType;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField?: FieldDefinitionNode | null;
  typescriptCodegenOutputPath: string;
}) {
  const fragmentNamePascalCase = makePascalCase(fragmentName);
  const subscribeByIdName = `SubscribeTo${fragmentNamePascalCase}ById`;
  const subscribeObjectsName = `SubscribeTo${fragmentNamePascalCase}Objects`;

  const entityShortName = makeShortName(entityNamedType.name, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);
  const fragmentTypeScriptTypeName = makeFragmentTypeScriptTypeName(
    fragmentName
  );
  const subscribeByIdNameCamelCase = makeCamelCase(subscribeByIdName);
  const subscribeObjectsNameCamelCase = makeCamelCase(subscribeObjectsName);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(
    primaryKeyIdField
  );

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
    contentManager.addImport(
      makeImportStatement(
        `${subscribeByIdName}Subscription`,
        typescriptCodegenOutputPath
      )
    );
  if (primaryKeyIdField)
    contentManager.addImport(
      makeImportStatement(
        `${subscribeByIdName}Document`,
        typescriptCodegenOutputPath
      )
    );
  if (primaryKeyIdField)
    contentManager.addImport(
      makeImportStatement(
        `${subscribeByIdName}SubscriptionVariables`,
        typescriptCodegenOutputPath
      )
    );
  contentManager.addImport(
    makeImportStatement(
      `${subscribeObjectsName}Subscription`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `${subscribeObjectsName}Document`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `${subscribeObjectsName}SubscriptionVariables`,
      typescriptCodegenOutputPath
    )
  );
}

// ---------------------------------
//
export function injectInsertHelpers({
  contentManager,
  entityNamedType,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath,
}: {
  contentManager: ContentManager;
  entityNamedType: GraphQLNamedType;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const fragmentNamePascalCase = makePascalCase(fragmentName);
  const entityPascalName = makePascalCase(entityNamedType.name);
  const entityShortName = makeShortName(entityNamedType.name, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(
    primaryKeyIdField
  );

  contentManager.addContent(`
    // Insert Helper
    //
    type Insert${fragmentNamePascalCase}FetchResult = FetchResult<Insert${fragmentNamePascalCase}Mutation, Record<string, any>, Record<string, any>>;
    export type Insert${fragmentNamePascalCase}FetchHelperResultEx = Insert${fragmentNamePascalCase}FetchResult & ${fragmentNamePascalCase}ByIdHelperResultEx;

    async function insert${fragmentNamePascalCase}({ apolloClient, ${entityShortCamelCaseName}, autoOptimisticResponse, fieldMap, options } :{ apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input, autoOptimisticResponse?:boolean, fieldMap?: FieldMap, options?: Omit<MutationOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>, 'mutation' | 'variables'> }): Promise<Insert${fragmentNamePascalCase}FetchHelperResultEx> {
      const objectForInsert = stripInsertInputClientFields({ input: ${entityShortCamelCaseName} });
      const mutationOptions:MutationOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables> = { mutation: Insert${fragmentNamePascalCase}Document, variables: { objects: [objectForInsert] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!objectForInsert.id) throw new Error(\`if autoOptimisticResponse = true, id must be set in object '${entityShortCamelCaseName}'\`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Insert${fragmentNamePascalCase}Mutation>({ operationType: 'insert', entityName:'${entityNamedType.name}', objects:[objectForInsert as ${entityPascalName}_Insert_Input & ObjectWithId], fieldMap }); 
        if(logLevel >= 2) console.log(' --> insert${fragmentNamePascalCase} - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation:Insert${fragmentNamePascalCase}FetchResult = await apolloClient.mutate<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>(mutationOptions);
        
      return { ...mutation, ${fragmentNameCamelCase}: mutation?.data?.insert_${entityNamedType.name}?.returning && mutation.data.insert_${entityNamedType.name}.returning[0] };
    }

    async function insert${fragmentNamePascalCase}WithOnConflict({ apolloClient, ${entityShortCamelCaseName}, onConflict, autoOptimisticResponse, fieldMap, options } :{ apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input, onConflict: ${entityPascalName}_On_Conflict, autoOptimisticResponse?:boolean, fieldMap?: FieldMap, options?: Omit<MutationOptions<Insert${fragmentNamePascalCase}WithOnConflictMutation, Insert${fragmentNamePascalCase}WithOnConflictMutationVariables>, 'mutation' | 'variables'> }): Promise<Insert${fragmentNamePascalCase}FetchHelperResultEx> {
      const objectForInsert = stripInsertInputClientFields({ input: ${entityShortCamelCaseName} });
      const mutationOptions:MutationOptions<Insert${fragmentNamePascalCase}WithOnConflictMutation, Insert${fragmentNamePascalCase}WithOnConflictMutationVariables> = { mutation: Insert${fragmentNamePascalCase}WithOnConflictDocument, variables: { objects: [objectForInsert], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!objectForInsert.id) throw new Error(\`if autoOptimisticResponse = true, id must be set in object '${entityShortCamelCaseName}'\`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Insert${fragmentNamePascalCase}WithOnConflictMutation>({ operationType: 'insert', entityName:'${entityNamedType.name}', objects:[objectForInsert as ${entityPascalName}_Insert_Input & ObjectWithId], fieldMap }); 
        if(logLevel >= 2) console.log(' --> insert${fragmentNamePascalCase}WithOnConflict - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation:Insert${fragmentNamePascalCase}FetchResult = await apolloClient.mutate<Insert${fragmentNamePascalCase}WithOnConflictMutation, Insert${fragmentNamePascalCase}WithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, ${fragmentNameCamelCase}: mutation?.data?.insert_${entityNamedType.name}?.returning && mutation.data.insert_${entityNamedType.name}.returning[0] };
    }



  `);

  contentManager.addContent(`
    // Insert Objects Helper
    //
    type Insert${fragmentNamePascalCase}ObjectsFetchResult = FetchResult<Insert${fragmentNamePascalCase}Mutation, Record<string, any>, Record<string, any>>;
    export type Insert${fragmentNamePascalCase}ObjectsHelperResultEx = Insert${fragmentNamePascalCase}ObjectsFetchResult & ${fragmentNamePascalCase}ObjectsHelperResultEx;

    async function insert${fragmentNamePascalCase}Objects({ apolloClient, objects, autoOptimisticResponse, fieldMap, options } :{ apolloClient: ApolloClient<object>, objects: ${entityPascalName}_Insert_Input[], autoOptimisticResponse?:boolean, fieldMap?: FieldMap, options?: Omit<MutationOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>, 'mutation' | 'variables'> }): Promise<Insert${fragmentNamePascalCase}ObjectsHelperResultEx> {
      const objectsForInsert = objects.map(objectItem => stripInsertInputClientFields({ input: objectItem }));
      const mutationOptions:MutationOptions<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables> = { mutation: Insert${fragmentNamePascalCase}Document, variables: { objects: objectsForInsert }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(objectsForInsert.find(objectItem => !objectItem.id)) throw new Error(\`if autoOptimisticResponse = true, ids must be set in objects\`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Insert${fragmentNamePascalCase}Mutation>({ operationType: 'insert', entityName:'${entityNamedType.name}', objects:objectsForInsert as (${entityPascalName}_Insert_Input & ObjectWithId)[], fieldMap }); 
        if(logLevel >= 2) console.log(' --> insert${fragmentNamePascalCase} - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation: Insert${fragmentNamePascalCase}ObjectsFetchResult = await apolloClient.mutate<Insert${fragmentNamePascalCase}Mutation, Insert${fragmentNamePascalCase}MutationVariables>(mutationOptions);
        
      return { ...mutation, objects: mutation?.data?.insert_${entityNamedType.name}?.returning || [] };
    }
  `);

  contentManager.addImport(
    makeImportStatement(
      `${entityPascalName}_Insert_Input`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `${entityPascalName}_On_Conflict`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Insert${fragmentNamePascalCase}Mutation`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Insert${fragmentNamePascalCase}WithOnConflictMutation`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Insert${fragmentNamePascalCase}MutationVariables`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Insert${fragmentNamePascalCase}WithOnConflictMutationVariables`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Insert${fragmentNamePascalCase}Document`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Insert${fragmentNamePascalCase}WithOnConflictDocument`,
      typescriptCodegenOutputPath
    )
  );
}

// ---------------------------------
//
export function injectUpdateHelpers({
  contentManager,
  entityNamedType,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath,
}: {
  contentManager: ContentManager;
  entityNamedType: GraphQLNamedType;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const fragmentNamePascalCase = makePascalCase(fragmentName);
  const entityPascalName = makePascalCase(entityNamedType.name);
  const entityShortName = makeShortName(entityNamedType.name, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(
    primaryKeyIdField
  );
  const fragmentNameCamelCase = makeCamelCase(fragmentName);

  contentManager.addContent(`
    // Update Helper
    //
    type Update${fragmentNamePascalCase}ByIdQueryResult = FetchResult<Update${fragmentNamePascalCase}ByIdMutation, Record<string, any>, Record<string, any>>;
    export type Update${fragmentNamePascalCase}ByIdHelperResultEx = Update${fragmentNamePascalCase}ByIdQueryResult & ${fragmentNamePascalCase}ByIdHelperResultEx;

    async function update${fragmentNamePascalCase}ById({ apolloClient, ${entityShortCamelCaseName}Id, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, set: ${entityPascalName}_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Update${fragmentNamePascalCase}ByIdMutation, Update${fragmentNamePascalCase}ByIdMutationVariables>, 'mutation'> }): Promise<Update${fragmentNamePascalCase}ByIdHelperResultEx> {
      const mutationOptions:MutationOptions<Update${fragmentNamePascalCase}ByIdMutation, Update${fragmentNamePascalCase}ByIdMutationVariables> = { mutation: Update${fragmentNamePascalCase}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Update${fragmentNamePascalCase}ByIdMutation>({ operationType: 'update', entityName:'${entityNamedType.name}', objects:[{ id:${entityShortCamelCaseName}Id, ...set }] }); 
        if(logLevel >= 2) console.log(' --> update${fragmentNamePascalCase}ById - optimisticResponse:', mutationOptions.optimisticResponse);
      }

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

  contentManager.addImport(
    makeImportStatement(
      `${entityPascalName}_Set_Input`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Update${fragmentNamePascalCase}ByIdMutation`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Update${fragmentNamePascalCase}ByIdMutationVariables`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Update${fragmentNamePascalCase}ByIdDocument`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Update${fragmentNamePascalCase}Mutation`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Update${fragmentNamePascalCase}MutationVariables`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Update${fragmentNamePascalCase}Document`,
      typescriptCodegenOutputPath
    )
  );
}

// ---------------------------------
//
export function injectDeleteHelpers({
  contentManager,
  entityNamedType,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath,
}: {
  contentManager: ContentManager;
  entityNamedType: GraphQLNamedType;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField?: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const entityShortName = makeShortName(entityNamedType.name, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const entityModelName = makeModelName(entityNamedType.name, trimString);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(
    primaryKeyIdField
  );
  const fragmentNameCamelCase = makeCamelCase(fragmentName);

  if (primaryKeyIdField) {
    contentManager.addContent(`  

    // Delete Helper
    //

    type Remove${entityModelName}ByIdQueryResult = FetchResult<Remove${entityModelName}ByIdMutation, Record<string, any>, Record<string, any>>;
    export type Remove${entityModelName}ByIdQueryHelperResultEx = Remove${entityModelName}ByIdQueryResult & RemoveEntitiesQueryHelperResultEx;
  
    async function remove${entityModelName}ById({ apolloClient, ${entityShortCamelCaseName}Id, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, 'mutation'> }): Promise<Remove${entityModelName}ByIdQueryHelperResultEx> {
      const mutationOptions:MutationOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables> = { mutation: Remove${entityModelName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id, }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Remove${entityModelName}ByIdMutation>({ operationType: 'delete', entityName:'${entityShortCamelCaseName}', objects:[{ id:${entityShortCamelCaseName}Id }] }); 
        if(logLevel >= 2) console.log(' --> remove${entityModelName}ById - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      if((!options || !options.update)){ mutationOptions.update = generateUpdateFunctionForMutation<Remove${entityModelName}ByIdMutation>({ operationType: 'delete', entityName:'${entityShortCamelCaseName}', entityId:${entityShortCamelCaseName}Id }); }
      
      const mutation:Remove${entityModelName}ByIdQueryResult = await apolloClient.mutate<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>(mutationOptions);
    
      return { ...mutation, affected_rows: mutation?.data?.delete_${entityNamedType.name}?.affected_rows || 0 };
    }
  `);
  }

  contentManager.addContent(`
    type Remove${entityModelName}ObjectsQueryResult = FetchResult<Remove${entityModelName}Mutation, Record<string, any>, Record<string, any>>;
    export type Remove${entityModelName}ObjectsQueryHelperResultEx = Remove${entityModelName}ObjectsQueryResult & RemoveEntitiesQueryHelperResultEx;  
  
    async function remove${entityModelName}Objects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, 'mutation'> }): Promise<Remove${entityModelName}ObjectsQueryHelperResultEx> {  
        const mutation:Remove${entityModelName}ObjectsQueryResult = await apolloClient.mutate<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>({ mutation: Remove${entityModelName}Document, ...options } );
          
        return { ...mutation, affected_rows: mutation?.data?.delete_${entityNamedType.name}?.affected_rows || 0 };
      }
  `);

  contentManager.addImport(
    makeImportStatement(
      `Remove${entityModelName}Mutation`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Remove${entityModelName}MutationVariables`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Remove${entityModelName}Document`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Remove${entityModelName}ByIdMutation`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Remove${entityModelName}ByIdMutationVariables`,
      typescriptCodegenOutputPath
    )
  );
  contentManager.addImport(
    makeImportStatement(
      `Remove${entityModelName}ByIdDocument`,
      typescriptCodegenOutputPath
    )
  );
}

// ---------------------------------
//
export function injectSharedHelpersPost({
  contentManager,
  entityNamedType,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath,
  withClientAndCacheHelpers,
  withQueries,
  withSubscriptions,
  withInserts,
  withUpdates,
  withDeletes,
}: {
  contentManager: ContentManager;
  entityNamedType: GraphQLNamedType;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField?: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
  withClientAndCacheHelpers?: boolean;
  withQueries?: boolean;
  withSubscriptions?: boolean;
  withInserts?: boolean;
  withUpdates?: boolean;
  withDeletes?: boolean;
}) {
  const fragmentNamePascalCase = makePascalCase(fragmentName);
  const entityModelName = makeModelName(entityNamedType.name, trimString);

  if (
    withClientAndCacheHelpers ||
    withQueries ||
    withInserts ||
    withUpdates ||
    withSubscriptions
  ) {
    let fragmentHelperObject = `
    // ${fragmentNamePascalCase} Fragment Helper Object
    //------------------------------------------------

    export const ${fragmentNamePascalCase}FragmentGQLHelper = {\n`;
    if (withClientAndCacheHelpers && primaryKeyIdField)
      fragmentHelperObject += `      cacheGetDataId: cacheGetDataIdFor${fragmentNamePascalCase},\n`;
    if (withClientAndCacheHelpers && primaryKeyIdField)
      fragmentHelperObject += `      cacheReadFragmentById: cacheReadFragment${fragmentNamePascalCase}ById,\n`;
    if (withClientAndCacheHelpers && primaryKeyIdField)
      fragmentHelperObject += `      cacheWriteFragmentById: cacheWriteFragment${fragmentNamePascalCase}ById,\n`;
    if (withClientAndCacheHelpers && primaryKeyIdField)
      fragmentHelperObject += `      cacheReadQueryById: cacheReadQuery${fragmentNamePascalCase}ById,\n`;
    if (withClientAndCacheHelpers && primaryKeyIdField)
      fragmentHelperObject += `      cacheWriteQueryById: cacheWriteQuery${fragmentNamePascalCase}ById,\n`;
    if (withClientAndCacheHelpers && primaryKeyIdField)
      fragmentHelperObject += `      cacheReadQueryObjects: cacheReadQuery${fragmentNamePascalCase}Objects,\n`;
    if (withClientAndCacheHelpers && primaryKeyIdField)
      fragmentHelperObject += `      cacheWriteQueryObjects: cacheWriteQuery${fragmentNamePascalCase}Objects,\n`;
    if (withClientAndCacheHelpers && primaryKeyIdField)
      fragmentHelperObject += `      cacheWriteQueryInsert: cacheWriteQuery${fragmentNamePascalCase}Insert,\n`;
    if (withClientAndCacheHelpers && primaryKeyIdField)
      fragmentHelperObject += `      cacheWriteQueryRemove: cacheWriteQuery${fragmentNamePascalCase}Remove,\n`;
    if (withQueries && primaryKeyIdField)
      fragmentHelperObject += `      queryById: query${fragmentNamePascalCase}ById,\n`;
    if (withQueries)
      fragmentHelperObject += `      queryObjects: query${fragmentNamePascalCase}Objects,\n`;
    if (withQueries && primaryKeyIdField)
      fragmentHelperObject += `      watchQueryById: watchQuery${fragmentNamePascalCase}ById,\n`;
    if (withQueries)
      fragmentHelperObject += `      watchQueryObjects: watchQuery${fragmentNamePascalCase}Objects,\n`;
    if (withSubscriptions && primaryKeyIdField)
      fragmentHelperObject += `      subscribeToById: subscribeTo${fragmentNamePascalCase}ById,\n`;
    if (withSubscriptions)
      fragmentHelperObject += `      subscribeToObjects: subscribeTo${fragmentNamePascalCase}Objects,\n`;
    if (withInserts && primaryKeyIdField)
      fragmentHelperObject += `      insert: insert${fragmentNamePascalCase},\n`;
    if (withInserts && primaryKeyIdField)
      fragmentHelperObject += `      insertWithOnConflict: insert${fragmentNamePascalCase}WithOnConflict,\n`;
    if (withInserts && primaryKeyIdField)
      fragmentHelperObject += `      insertObjects: insert${fragmentNamePascalCase}Objects,\n`;
    if (withUpdates && primaryKeyIdField)
      fragmentHelperObject += `      updateById: update${fragmentNamePascalCase}ById,\n`;
    if (withUpdates && primaryKeyIdField)
      fragmentHelperObject += `      updateObjects: update${fragmentNamePascalCase}Objects\n`;

    fragmentHelperObject += `    }
  `;
    contentManager.addContent(fragmentHelperObject);
  }

  if (withDeletes) {
    let entityHelperObject = `
    // ${entityNamedType.name} Entity Helper Object
    //------------------------------------------------

    export const ${entityModelName}GQLHelper = {\n`;

    if (primaryKeyIdField)
      entityHelperObject += `      removeById: remove${entityModelName}ById,\n`;
    entityHelperObject += `      removeObjects: remove${entityModelName}Objects\n`;

    entityHelperObject += `    }
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
  withDeletes,
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
  const uniqueModelNamesFromFragments = getUniqueEntitiesFromFragmentDefinitions(
    { fragmentDefinitionNodes, schemaTypeMap, trimString }
  ).map((entityName) => `${makeShortName(entityName, trimString)}`);

  contentManager.addContent(`
    // COMBINED HELPER OBJECT
    //------------------------------------------------
    export const GQLHelpers = {
      ${
        withClientAndCacheHelpers || withQueries || withInserts || withUpdates
          ? `Fragments: {
        ${fragmentDefinitionNodes
          .map(
            (fragmentDefinitionNode) =>
              `${makeShortName(
                fragmentDefinitionNode.name.value,
                trimString
              )}: ${makeShortName(
                fragmentDefinitionNode.name.value,
                trimString
              )}FragmentGQLHelper`
          )
          .join(",\n        ")}
      },`
          : ""
      }
      ${
        withDeletes
          ? `Models: {
        ${uniqueModelNamesFromFragments
          .map((modelName) => `${modelName}: ${modelName}ModelGQLHelper`)
          .join(",\n        ")}
      }`
          : ""
      }
    }
  `);
}
