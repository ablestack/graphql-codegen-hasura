import { FieldDefinitionNode } from "graphql";
import { getIdTypeScriptFieldType, makeImportStatement, makeModelName, makeShortName, ContentManager } from ".";
import { makeCamelCase, makePascalCase, makeFragmentTypeScriptTypeName } from "./utils";
import { injectUtilityMethodGenerateOptimisticResponseForMutation } from "./sharedInjectors";

// ---------------------------------
//
export function injectGlobalReactCode({
  contentManager,
  typescriptCodegenOutputPath,
  withUpdates
}: {
  contentManager: ContentManager;
  typescriptCodegenOutputPath: string;
  withUpdates: boolean;
}) {
  contentManager.addImport(
    `import { QueryHookOptions, useQuery, LazyQueryHookOptions, useLazyQuery, MutationHookOptions, useMutation, QueryLazyOptions, MutationFunctionOptions, QueryResult, MutationTuple, FetchResult } from '@apollo/client';`
  );

  contentManager.addContent(`
    // GLOBAL TYPES
    //------------------------------------------------
    export type RemoveEntitiesQueryHookResultEx = { affected_rows:number };
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
export function injectSharedReact({
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
    // ${entityName} REACT
    //------------------------------------------------

    export type ${fragmentName}ByIdHookResultEx = { ${fragmentNameCamelCase}:${fragmentTypeScriptTypeName} | null | undefined };
    export type ${fragmentName}ObjectsHookResultEx = { objects:${fragmentTypeScriptTypeName}[] };

  `);

  if (!primaryKeyIdTypeScriptFieldType.isNative) {
    const typeImport = makeImportStatement(`${primaryKeyIdTypeScriptFieldType.typeName}`, typescriptCodegenOutputPath);
    contentManager.addImport(typeImport);
  }

  contentManager.addImport(makeImportStatement(fragmentTypeScriptTypeName, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectFetchReact({
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
      // Fetch Hooks
      //
  
      /**
       * __useFetch${fragmentName}ByIdQuery__
       *
       * To run a query within a React component, call \`use${fragmentName}ByIdQuery\`
       * When your component renders, \`use${fragmentName}ByIdQuery\` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, ${fragmentNameCamelCase} } = useFetch${fragmentName}ByIdQuery({ ${entityShortCamelCaseName}Id:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#usequery for details
       * 
       */

        // Fetch Hook
        //

        // Types
        type Fetch${fragmentName}ByIdQueryResult = QueryResult<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>;
        export type Fetch${fragmentName}ByIdQueryResultEx = Fetch${fragmentName}ByIdQueryResult & ${fragmentName}ByIdHookResultEx;

        // Function
        export function useFetch${fragmentName}ByIdQuery({ ${entityShortCamelCaseName}Id, options }: { ${entityShortCamelCaseName}Id: string; options?: Omit<QueryHookOptions<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>, "query" | "variables">; }): Fetch${fragmentName}ByIdQueryResultEx {
          const query: Fetch${fragmentName}ByIdQueryResult = useQuery<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>(Fetch${fragmentName}ByIdDocument, { variables: { ${entityShortCamelCaseName}Id }, ...options });
          return { ...query, ${fragmentNameCamelCase}: query && query.data && query.data.${entityName}_by_pk };
        }
    `);

    contentManager.addContent(`
      /**
       * __useFetch${fragmentName}ByIdLazyQuery__
       * 
       * @example
       * const [fetch${fragmentName}ById, { called, loading, error, ${fragmentNameCamelCase} }] = useFetch${fragmentName}ById();
       * fetch${fragmentName}ById({ ${entityShortCamelCaseName}Id:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery for details
       * 
       */

      // Lazy Fetch Hook
      //
      
      // Types
      type PickFetch${fragmentName}ByIdFn = (query: Fetch${fragmentName}ByIdQuery | null | undefined) => ${fragmentName}Fragment | null | undefined;
      type Fetch${fragmentName}ByIdLazyQueryFn = [(options?: QueryLazyOptions<Fetch${fragmentName}ByIdQueryVariables> | undefined) => void, Fetch${fragmentName}ByIdQueryResult]
      type Fetch${fragmentName}ByIdWrappedLazyQueryFn = ({ ${entityShortCamelCaseName}Id, options }: { ${entityShortCamelCaseName}Id: string; options?: Omit<QueryLazyOptions<Fetch${fragmentName}ByIdQueryVariables>, "variables">; }) => void;
      export type Fetch${fragmentName}ByIdLazyQueryReturn = [Fetch${fragmentName}ByIdWrappedLazyQueryFn, Fetch${fragmentName}ByIdQueryResultEx];

      // Function
      export function useFetch${fragmentName}ByIdLazyQuery(options?: Omit<LazyQueryHookOptions<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>, "query" | "variables">): Fetch${fragmentName}ByIdLazyQueryReturn {
        const lazyQuery: Fetch${fragmentName}ByIdLazyQueryFn = useLazyQuery<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>(Fetch${fragmentName}ByIdDocument, options);
        const pick${fragmentName}: PickFetch${fragmentName}ByIdFn = query => { return query && query.${entityName}_by_pk; };
        const wrappedLazyQuery: Fetch${fragmentName}ByIdWrappedLazyQueryFn = ({ ${entityShortCamelCaseName}Id, options }) => { return lazyQuery[0]({ variables: { ${entityShortCamelCaseName}Id }, ...options }); };
        const returnVal: Fetch${fragmentName}ByIdLazyQueryReturn = [wrappedLazyQuery, { ...lazyQuery[1], ${fragmentNameCamelCase}: pick${fragmentName}(lazyQuery[1].data) }];
        return returnVal;
      }
    `);
  }

  contentManager.addContent(`
      // Fetch Collection Hook
      //

      // Types
      export type Fetch${fragmentName}ObjectsQueryResult = QueryResult<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>;
      export type Fetch${fragmentName}ObjectsQueryResultEx = Fetch${fragmentName}ObjectsQueryResult & ${fragmentName}ObjectsHookResultEx;

      // Function
      export function useFetch${fragmentName}ObjectsQuery(options: Omit<QueryHookOptions<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>, "query">): Fetch${fragmentName}ObjectsQueryResultEx {
        const query:Fetch${fragmentName}ObjectsQueryResult = useQuery<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>(Fetch${fragmentName}Document, options);
        return { ...query, objects: (query && query.data && query.data.${entityName}) || [] };
      }
      `);

  contentManager.addContent(`  
      // Lazy Fetch Collection Hook
      //

      // Types
      type PickFetch${fragmentName}ObjectsFn = (query: Fetch${fragmentName}Query | null | undefined) => ${fragmentName}Fragment[];
      type Fetch${fragmentName}ObjectsLazyQueryFn = [(options?: QueryLazyOptions<Fetch${fragmentName}QueryVariables> | undefined) => void, Fetch${fragmentName}ObjectsQueryResult]
      type Fetch${fragmentName}ObjectsWrappedLazyQueryFn = (options?: QueryLazyOptions<Fetch${fragmentName}QueryVariables>) => void;
      export type Fetch${fragmentName}ObjectsLazyQueryReturn = [Fetch${fragmentName}ObjectsWrappedLazyQueryFn, Fetch${fragmentName}ObjectsQueryResultEx];

      // Function
      export function useFetch${fragmentName}ObjectsLazyQuery(options?: Omit<LazyQueryHookOptions<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>, "query">): Fetch${fragmentName}ObjectsLazyQueryReturn {
        const lazyQuery: Fetch${fragmentName}ObjectsLazyQueryFn = useLazyQuery<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>(Fetch${fragmentName}Document, options);
        const pickObjects: PickFetch${fragmentName}ObjectsFn = (query: Fetch${fragmentName}Query | null | undefined) => { return (query && query.${entityName}) || []; };
        const wrappedLazyQuery: Fetch${fragmentName}ObjectsWrappedLazyQueryFn = (options) => { return lazyQuery[0]( options ); };
        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }
    `);

  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`Fetch${fragmentName}ByIdQuery`, typescriptCodegenOutputPath));
  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`Fetch${fragmentName}ByIdQueryVariables`, typescriptCodegenOutputPath));
  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`Fetch${fragmentName}ByIdDocument`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Fetch${fragmentName}Query`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Fetch${fragmentName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Fetch${fragmentName}QueryVariables`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectInsertReact({
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

  contentManager.addContent(`
  // Insert Hooks
  //

  // Types
  type Insert${fragmentName}MutationResult = FetchResult<Insert${fragmentName}Mutation, Record<string, any>, Record<string, any>>;
  export type Insert${fragmentName}MutationResultEx = Insert${fragmentName}MutationResult & ${fragmentName}ByIdHookResultEx;

  type PickInsert${fragmentName}Fn = (mutation: Insert${fragmentName}Mutation | null | undefined) => ${fragmentName}Fragment | null | undefined;
  type Insert${fragmentName}LazyMutationFn = MutationTuple<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>;
  type Insert${fragmentName}WrappedLazyMutationFn = ({ ${entityShortCamelCaseName}, options }: { ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input; options?: Omit<MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, "variables">; }) => Promise<Insert${fragmentName}MutationResultEx>;
  export type Insert${fragmentName}LazyMutationReturn = [Insert${fragmentName}WrappedLazyMutationFn, Insert${fragmentName}MutationResultEx];

  // Function
  export function useInsert${fragmentName}(options?: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, "mutation" | "variables">): Insert${fragmentName}LazyMutationReturn {
    const lazyMutation: Insert${fragmentName}LazyMutationFn = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>(Insert${fragmentName}Document, options);
    const pick${fragmentName}: PickInsert${fragmentName}Fn = (mutation) => { return mutation && mutation.insert_${entityName} && mutation.insert_${entityName}!.returning && mutation.insert_${entityName}!.returning[0]; };

    const wrappedLazyMutation: Insert${fragmentName}WrappedLazyMutationFn = async ({ ${entityShortCamelCaseName}, options }: { ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input; options?: Omit<MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, "variables">; }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [${entityShortCamelCaseName}] }, ...options });
      return { ...fetchResult, ${fragmentNameCamelCase}: pick${fragmentName}(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], ${fragmentNameCamelCase}: pick${fragmentName}(lazyMutation[1].data) }];
  }
  `);

  contentManager.addContent(`
  //
  //

  // Types
  type Insert${fragmentName}WithOnConflictLazyMutationFn = MutationTuple<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables>;
  type Insert${fragmentName}WithOnConflictWrappedLazyMutationFn = ({ ${entityShortCamelCaseName}, options }: { ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input; options?: Omit<MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables>, "variables">; }) => Promise<Insert${fragmentName}MutationResultEx>;
  export type Insert${fragmentName}WithOnConflictLazyMutationReturn = [Insert${fragmentName}WithOnConflictWrappedLazyMutationFn, Insert${fragmentName}MutationResultEx];

  // Function
  export function useInsert${fragmentName}WithOnConflict( options?: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, "mutation" | "variables"> ): Insert${fragmentName}WithOnConflictLazyMutationReturn {
    const lazyMutation: Insert${fragmentName}WithOnConflictLazyMutationFn = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables>(Insert${fragmentName}WithOnConflictDocument, options);
    const pick${fragmentName}: PickInsert${fragmentName}Fn = (mutation: Insert${fragmentName}Mutation | null | undefined) => { return mutation && mutation.insert_${entityName} && mutation.insert_${entityName}!.returning && mutation.insert_${entityName}!.returning[0]; };

    const wrappedLazyMutation:Insert${fragmentName}WithOnConflictWrappedLazyMutationFn = async ({ ${entityShortCamelCaseName}, onConflict, options }: { ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input; onConflict?: ${entityPascalName}_On_Conflict; options?: Omit<MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, "variables">;
    }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [${entityShortCamelCaseName}], onConflict }, ...options });
      return { ...fetchResult, ${fragmentNameCamelCase}: pick${fragmentName}(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], ${fragmentNameCamelCase}: pick${fragmentName}(lazyMutation[1].data) }];
  }
  `);

  contentManager.addContent(`
  // Types
  type Insert${fragmentName}ObjectsMutationResult = FetchResult<Insert${fragmentName}Mutation, Record<string, any>, Record<string, any>>;
  export type Insert${fragmentName}ObjectsMutationResultEx = Insert${fragmentName}MutationResult & ${fragmentName}ObjectsHookResultEx;

  type PickInsert${fragmentName}ObjectsFn = (mutation: Insert${fragmentName}Mutation | null | undefined) => ${fragmentName}Fragment[];
  type Insert${fragmentName}ObjectsLazyMutationFn = MutationTuple<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>;
  type Insert${fragmentName}ObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>) => Promise<Insert${fragmentName}ObjectsMutationResultEx>;
  export type Insert${fragmentName}ObjectsLazyMutationReturn = [Insert${fragmentName}ObjectsWrappedLazyMutationFn, Insert${fragmentName}ObjectsMutationResultEx];

  // Function
  export function useInsert${fragmentName}Objects(options?: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, "mutation">): Insert${fragmentName}ObjectsLazyMutationReturn {
    const lazyMutation: Insert${fragmentName}ObjectsLazyMutationFn = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>(Insert${fragmentName}Document, options);
    const pickObjects: PickInsert${fragmentName}ObjectsFn = (mutation: Insert${fragmentName}Mutation | null | undefined) => { return (mutation && mutation.insert_${entityName} && mutation.insert_${entityName}!.returning) || []; };

    const wrappedLazyMutation: Insert${fragmentName}ObjectsWrappedLazyMutationFn = async ( options ) => {
      const fetchResult: Insert${fragmentName}ObjectsMutationResult = await lazyMutation[0](options);
      return { ...fetchResult, objects: pickObjects(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
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
export function injectUpdateReact({
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
    // Update Hooks
    //
    
    type Update${fragmentName}ByIdMutationResult = FetchResult<Update${fragmentName}ByIdMutation, Record<string, any>, Record<string, any>>;
    export type Update${fragmentName}ByIdMutationResultEx = Update${fragmentName}ByIdMutationResult & ${fragmentName}ByIdHookResultEx;

    type PickUpdate${fragmentName}ByIdFn = (mutation: Update${fragmentName}ByIdMutation | null | undefined) => ${fragmentName}Fragment | null | undefined;
    type Update${fragmentName}ByIdLazyMutationFn = MutationTuple<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>;
    type Update${fragmentName}ByIdWrappedLazyMutationFn = ({ ${entityShortCamelCaseName}Id, set, autoOptimisticResponse, options }: { ${entityShortCamelCaseName}Id: string; set: ${entityPascalName}_Set_Input & ObjectWithId<${primaryKeyIdTypeScriptFieldType.typeName}>; autoOptimisticResponse?: boolean; options?: Omit<MutationFunctionOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, "variables">; }) => Promise<Update${fragmentName}ByIdMutationResultEx>;
    export type Update${fragmentName}ByIdLazyMutationReturn = [Update${fragmentName}ByIdWrappedLazyMutationFn, Update${fragmentName}ByIdMutationResultEx];

    export function useUpdate${fragmentName}ById(options?: Omit<MutationHookOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, "mutation" | "variables">): Update${fragmentName}ByIdLazyMutationReturn {
      const lazyMutation: Update${fragmentName}ByIdLazyMutationFn = useMutation<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>(Update${fragmentName}ByIdDocument, options);

      const pick${fragmentName}: PickUpdate${fragmentName}ByIdFn = (mutation) => { return mutation && mutation.update_${entityName} && mutation.update_${entityName}!.returning && mutation.update_${entityName}!.returning[0]; };

      const wrappedLazyMutation: Update${fragmentName}ByIdWrappedLazyMutationFn = async ({ ${entityShortCamelCaseName}Id, set, autoOptimisticResponse, options }) => {
        const mutationOptions: MutationFunctionOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables> = { variables: { id: ${entityShortCamelCaseName}Id, set }, ...options };
        if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<Update${fragmentName}ByIdMutation>({ operationType:'update', entityName:"${entityName}", objects:[set] });
        }

        const fetchResult: Update${fragmentName}ByIdMutationResult = await lazyMutation[0]({ variables: { id: ${entityShortCamelCaseName}Id, set }, ...mutationOptions });
        return { ...fetchResult, ${fragmentNameCamelCase}: pick${fragmentName}(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], ${fragmentNameCamelCase}: pick${fragmentName}(lazyMutation[1].data) }];
    }
  `);

  contentManager.addContent(`
    //
    //

    // Types
    type Update${fragmentName}ObjectsMutationResult = FetchResult<Update${fragmentName}Mutation, Record<string, any>, Record<string, any>>;
    export type Update${fragmentName}ObjectsMutationResultEx = Update${fragmentName}ObjectsMutationResult & ${fragmentName}ObjectsHookResultEx;

    // Function
    type PickUpdate${fragmentName}ObjectsFn = (mutation: Update${fragmentName}Mutation | null | undefined) => ${fragmentName}Fragment[];
    type Update${fragmentName}ObjectsLazyMutationFn = MutationTuple<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>;
    type Update${fragmentName}ObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>) => Promise<Update${fragmentName}ObjectsMutationResultEx>;
    export type Update${fragmentName}ObjectsLazyMutationReturn = [Update${fragmentName}ObjectsWrappedLazyMutationFn, Update${fragmentName}ObjectsMutationResultEx];

    export function useUpdate${fragmentName}(options?: Omit<MutationHookOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>, "mutation">): Update${fragmentName}ObjectsLazyMutationReturn {
      const lazyMutation: Update${fragmentName}ObjectsLazyMutationFn = useMutation<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>(Update${fragmentName}Document, options);

      const pickObjects: PickUpdate${fragmentName}ObjectsFn = (mutation: Update${fragmentName}Mutation | null | undefined) => {
        return (mutation && mutation.update_${entityName} && mutation.update_${entityName}!.returning) || [];
      };

      const wrappedLazyMutation: Update${fragmentName}ObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: Update${fragmentName}ObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
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
export function injectDeleteReact({
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
    // Delete Hooks
    //

    // Types
    type Remove${entityModelName}ByIdFetchResult = FetchResult<Remove${entityModelName}ByIdMutation, Record<string, any>, Record<string, any>>;
    export type Remove${entityModelName}ByIdMutationResultEx = Remove${entityModelName}ByIdFetchResult & RemoveEntitiesQueryHookResultEx;

    // Function
    type PickRemove${entityModelName}Fn = (mutation: Remove${entityModelName}ByIdMutation | null | undefined) => number;
    type Remove${entityModelName}LazyMutationFn = MutationTuple<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>;
    type Remove${entityModelName}WrappedLazyMutationFn = ({ ${entityShortCamelCaseName}Id, options }: { ${entityShortCamelCaseName}Id: string; options?: Omit<MutationFunctionOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, "variables">; }) => Promise<Remove${entityModelName}ByIdMutationResultEx>;
    export type Remove${entityModelName}LazyMutationReturn = [Remove${entityModelName}WrappedLazyMutationFn, Remove${entityModelName}ByIdMutationResultEx];

    export function useRemove${entityModelName}ById(options?: Omit<MutationHookOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, "mutation" | "variables">) {
      const lazyMutation: Remove${entityModelName}LazyMutationFn = useMutation<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>(Remove${entityModelName}ByIdDocument, options);

      const pickAffectedRows: PickRemove${entityModelName}Fn = (mutation: Remove${entityModelName}ByIdMutation | null | undefined) => {
        return (mutation && mutation.delete_${entityName} && mutation.delete_${entityName}!.affected_rows) || 0;
      };

      const wrappedLazyMutation: Remove${entityModelName}WrappedLazyMutationFn = async ({ ${entityShortCamelCaseName}Id, options }: { ${entityShortCamelCaseName}Id: string; options?: Omit<MutationFunctionOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, "variables">; }) => {
        const fetchResult: Remove${entityModelName}ByIdFetchResult = await lazyMutation[0]({ variables: { id: ${entityShortCamelCaseName}Id }, ...options });
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

    export function useRemove${entityModelName}Objects(options?: Omit<MutationHookOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, "mutation">): Remove${entityModelName}ObjectsLazyMutationReturn {
      const lazyMutation = useMutation<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>(Remove${entityModelName}Document, options);

      const pickAffectedRows: PickRemove${entityModelName}ObjectsFn = (mutation: Remove${entityModelName}Mutation | null | undefined) => {
        return (mutation && mutation.delete_${entityName} && mutation.delete_${entityName}!.affected_rows) || 0;
      };

      const wrappedLazyMutation: Remove${entityModelName}ObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: Remove${entityModelName}ObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }];
    }
  `);

  contentManager.addImport(makeImportStatement(`Remove${entityModelName}Mutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}MutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdMutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdMutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdDocument`, typescriptCodegenOutputPath));
}
