import { FieldDefinitionNode } from "graphql";
import { ContentManager, getIdTypeScriptFieldType, makeImportStatement, makeModelName, makeShortName } from ".";
import { injectUtilityMethodGenerateOptimisticResponseForMutation } from "./sharedInjectors";
import { makeCamelCase, makeFragmentTypeScriptTypeName, makePascalCase, makeFragmentDocName } from "./utils";

// ---------------------------------
//
export function injectGlobalHelperCode({
  contentManager,
  typescriptCodegenOutputPath,
  withUpdates
}: {
  contentManager: ContentManager;
  typescriptCodegenOutputPath: string;
  withUpdates: boolean;
}) {
  contentManager.addImport(`import { ApolloClient, QueryOptions, MutationOptions, ApolloQueryResult, FetchResult, defaultDataIdFromObject } from '@apollo/client'`);

  contentManager.addContent(`
    // GLOBAL TYPES
    //------------------------------------------------
    export type RemoveEntitiesQueryHelperResultEx = { affected_rows:number };
    export type ObjectWithId<T = any> = { id:T };
  `);

  // Inject utility methods as needed
  withUpdates &&
    contentManager.addContent(`
    // UTILITY METHODS
    //------------------------------------------------
  `);
  withUpdates && injectUtilityMethodGenerateOptimisticResponseForMutation({ contentManager });
}

// ---------------------------------
//
export function injectSharedHelpers({
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
    `);

    contentManager.addImport(makeImportStatement(fragmentDocName, typescriptCodegenOutputPath));
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

  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`Fetch${fragmentName}ByIdQuery`, typescriptCodegenOutputPath));
  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`Fetch${fragmentName}ByIdDocument`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Fetch${fragmentName}Query`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Fetch${fragmentName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Fetch${fragmentName}QueryVariables`, typescriptCodegenOutputPath));
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

    export async function update${fragmentName}ById({ apolloClient, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, set: ${entityPascalName}_Set_Input & ObjectWithId<${primaryKeyIdTypeScriptFieldType.typeName}>, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, 'mutation'> }): Promise<Update${fragmentName}ByIdHelperResultEx> {
      const mutationOptions:MutationOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables> = { mutation: Update${fragmentName}ByIdDocument, variables: { id:set.id, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Update${fragmentName}ByIdMutation>({ operationType: 'update', entityName:'${entityName}', objects:[set] }); }

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

  contentManager.addImport(makeImportStatement(`Remove${entityModelName}Mutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}MutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdMutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdMutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdDocument`, typescriptCodegenOutputPath));
}
