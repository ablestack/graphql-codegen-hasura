import { FieldDefinitionNode } from "graphql";
import { getIdTypeScriptFieldType, makeImportStatement, makeModelName, makeShortName, ContentManager } from ".";
import { makeCamelCase, makePascalCase, makeFragmentTypeScriptTypeName } from "./utils";

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
        type FetchVehicleGraphByIdQueryResult = QueryResult<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>;
        export type FetchVehicleGraphByIdQueryResultEx = FetchVehicleGraphByIdQueryResult & VehicleGraphByIdHookResultEx;

        // Function
        export function useFetchVehicleGraphByIdQuery({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryHookOptions<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>, "query" | "variables">; }): FetchVehicleGraphByIdQueryResultEx {
          const query: FetchVehicleGraphByIdQueryResult = useQuery<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>(FetchVehicleGraphByIdDocument, { variables: { vehicleId }, ...options });
          return { ...query, vehicleGraph: query && query.data && query.data.vehicle_by_pk };
        }

        // // Types
        // export type Fetch${fragmentName}ByIdQueryResult = QueryResult<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>;
        // export type Fetch${fragmentName}ByIdQueryResultEx = Fetch${fragmentName}ByIdQueryResult & ${fragmentName}ByIdHookResultEx;

        // // Function
        // export function useFetch${fragmentName}ByIdQuery({ ${entityShortCamelCaseName}Id, options, }: { ${entityShortCamelCaseName}Id:string, options?: Omit<QueryHookOptions<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>, 'query' | 'variables'> }): Fetch${fragmentName}ByIdQueryResultEx {
        //     const query:Fetch${fragmentName}ByIdQueryResult = useQuery<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>(Fetch${fragmentName}ByIdDocument, { variables: { ${entityShortCamelCaseName}Id }, ...options });
        //     return { ...query, ${fragmentNameCamelCase}: query && query.data && query.data.${entityName}_by_pk } 
        // }
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
      type PickFetchVehicleGraphByIdFn = (query: FetchVehicleGraphByIdQuery | null | undefined) => VehicleGraphFragment | null | undefined;
      type FetchVehicleGraphByIdLazyQueryFn = [(options?: QueryLazyOptions<FetchVehicleGraphByIdQueryVariables> | undefined) => void, FetchVehicleGraphByIdQueryResult]
      type FetchVehicleGraphByIdWrappedLazyQueryFn = ({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryLazyOptions<FetchVehicleGraphByIdQueryVariables>, "variables">; }) => void;
      export type FetchVehicleGraphByIdLazyQueryReturn = [FetchVehicleGraphByIdWrappedLazyQueryFn, FetchVehicleGraphByIdQueryResultEx];

      // Function
      export function useFetchVehicleGraphByIdLazyQuery(options?: Omit<LazyQueryHookOptions<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>, "query" | "variables">): FetchVehicleGraphByIdLazyQueryReturn {
        const lazyQuery: FetchVehicleGraphByIdLazyQueryFn = useLazyQuery<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>(FetchVehicleGraphByIdDocument, options);
        const pickVehicleGraph: PickFetchVehicleGraphByIdFn = query => { return query && query.vehicle_by_pk; };
        const wrappedLazyQuery: FetchVehicleGraphByIdWrappedLazyQueryFn = ({ vehicleId, options }) => { return lazyQuery[0]({ variables: { vehicleId }, ...options }); };
        const returnVal: FetchVehicleGraphByIdLazyQueryReturn = [wrappedLazyQuery, { ...lazyQuery[1], vehicleGraph: pickVehicleGraph(lazyQuery[1].data) }];
        return returnVal;
      }

      // // Types
      // type PickFetch${fragmentName}ByIdFn = (query: Fetch{fragmentName}ByIdQuery | null | undefined) => ${fragmentTypeScriptTypeName} | null | undefined;
      // type Fetch${fragmentName}ByIdLazyQueryFn = [(options?: QueryLazyOptions<Fetch${fragmentName}ByIdQueryVariables> | undefined) => void, Fetch${fragmentName}ByIdQueryResult]
      // type Fetch${fragmentName}ByIdWrappedLazyQueryFn = ({ ${entityShortCamelCaseName}Id, options }: { ${entityShortCamelCaseName}Id: string; options?: Omit<QueryLazyOptions<Fetch${fragmentName}ByIdQueryVariables>, "variables">; }) => void;
      // export type Fetch${fragmentName}ByIdLazyQueryReturn = [Fetch${fragmentName}ByIdWrappedLazyQueryFn, Fetch${fragmentName}ByIdQueryResultEx];

      // // Function
      // export function useFetch${fragmentName}ByIdLazyQuery(options?: Omit<LazyQueryHookOptions<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>, 'query' | 'variables'>): Fetch${fragmentName}ByIdLazyQueryReturn {
      //   const lazyQuery: Fetch${fragmentName}ByIdLazyQueryFn = useLazyQuery<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>(Fetch${fragmentName}ByIdDocument, options );
      //   const pick${fragmentName}: PickFetch${fragmentName}ByIdFn = (query: Fetch${fragmentName}ByIdQuery | null | undefined) => { return ( query && query.${entityName}_by_pk ); };
      //   const wrappedLazyQuery: Fetch${fragmentName}ByIdWrappedLazyQueryFn = ({ ${entityShortCamelCaseName}Id, options }: { ${entityShortCamelCaseName}Id:string, options?: Omit<QueryLazyOptions<Fetch${fragmentName}ByIdQueryVariables>, 'variables'> }) => { return lazyQuery[0]({ variables: { ${entityShortCamelCaseName}Id }, ...options }); };   
      //   const returnObj: Fetch${fragmentName}ByIdLazyQueryReturn = [wrappedLazyQuery, { ...lazyQuery[1], ${fragmentNameCamelCase}: pick${fragmentName}(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { ${fragmentNameCamelCase}: ReturnType<typeof pick${fragmentName}> }];
      //   return returnObj;
      // }
    `);
  }

  contentManager.addContent(`
      // Fetch Collection Hook
      //

      // Types
      export type FetchVehicleGraphObjectsQueryResult = QueryResult<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>;
      export type FetchVehicleGraphObjectsQueryResultEx = FetchVehicleGraphObjectsQueryResult & VehicleGraphObjectsHookResultEx;

      // Function
      export function useFetchVehicleGraphObjectsQuery(options: Omit<QueryHookOptions<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>, "query">): FetchVehicleGraphObjectsQueryResultEx {
        const query:FetchVehicleGraphObjectsQueryResult = useQuery<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>(FetchVehicleGraphDocument, options);
        return { ...query, objects: (query && query.data && query.data.vehicle) || [] };
      }

      // // Types
      // export type Fetch${fragmentName}ObjectsQueryResult = QueryResult<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>;
      // export type Fetch${fragmentName}ObjectsQueryResultEx = Fetch${fragmentName}ObjectsQueryResult & ${fragmentName}ObjectsHookResultEx;
      
      // // Function
      // export function useFetch${fragmentName}ObjectsQuery( options: Omit<QueryHookOptions<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>, 'query'> ): Fetch${fragmentName}ObjectsQueryResultEx {
      //     const query: Fetch${fragmentName}ObjectsQueryResult = useQuery<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>(Fetch${fragmentName}Document, options );
      //     return { ...query, objects: (query && query.data && query.data.${entityName}) || [] }
      // }`);

  contentManager.addContent(`  
      // Lazy Fetch Collection Hook
      //

      // Types
      type PickFetchVehicleGraphObjectsFn = (query: FetchVehicleGraphQuery | null | undefined) => VehicleGraphFragment[];
      type FetchVehicleGraphObjectsLazyQueryFn = [(options?: QueryLazyOptions<FetchVehicleGraphQueryVariables> | undefined) => void, FetchVehicleGraphObjectsQueryResult]
      type FetchVehicleGraphObjectsWrappedLazyQueryFn = (options?: QueryLazyOptions<FetchVehicleGraphQueryVariables>) => void;
      export type FetchVehicleGraphObjectsLazyQueryReturn = [FetchVehicleGraphObjectsWrappedLazyQueryFn, FetchVehicleGraphObjectsQueryResultEx];

      // Function
      export function useFetchVehicleGraphObjectsLazyQuery(options?: Omit<LazyQueryHookOptions<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>, "query">): FetchVehicleGraphObjectsLazyQueryReturn {
        const lazyQuery: FetchVehicleGraphObjectsLazyQueryFn = useLazyQuery<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>(FetchVehicleGraphDocument, options);
        const pickObjects: PickFetchVehicleGraphObjectsFn = (query: FetchVehicleGraphQuery | null | undefined) => { return (query && query.vehicle) || []; };
        const wrappedLazyQuery: FetchVehicleGraphObjectsWrappedLazyQueryFn = (options) => { return lazyQuery[0]( options ); };
        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }

      // // Types
      // type PickFetch${fragmentName}ObjectsFn = (query: Fetch${fragmentName}Query | null | undefined) => ${fragmentName}Fragment | null | undefined;
      // type Fetch${fragmentName}ObjectsLazyQueryFn = [(options?: QueryLazyOptions<Fetch${fragmentName}QueryVariables> | undefined) => void, Fetch${fragmentName}ObjectsQueryResult]
      // type Fetch${fragmentName}ObjectsWrappedLazyQueryFn = ({ ${entityShortCamelCaseName}Id, options }: { ${entityShortCamelCaseName}Id: string; options?: Omit<QueryLazyOptions<Fetch${fragmentName}QueryVariables>, "variables">; }) => void;
      // export type Fetch${fragmentName}ObjectsLazyQueryReturn = [Fetch${fragmentName}ObjectsWrappedLazyQueryFn, Fetch${fragmentName}ObjectsQueryResultEx];

      // // Function
      // export function useFetch${fragmentName}ObjectsLazyQuery(options?: Omit<LazyQueryHookOptions<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>, "query">): Fetch${fragmentName}ObjectsLazyQueryReturn {
      //   const lazyQuery: Fetch${fragmentName}ObjectsLazyQueryFn = useLazyQuery<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>(Fetch${fragmentName}Document, options);
      //   const pickObjects: PickFetch${fragmentName}ObjectsFn = (query: Fetch${fragmentName}Query | null | undefined) => { return (query && query.${entityName}) || []; };
      //   const wrappedLazyQuery: Fetch${fragmentName}ObjectsWrappedLazyQueryFn = (options) => { return lazyQuery[0](); };
      //   return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      // }
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
  type InsertVehicleGraphMutationResult = FetchResult<InsertVehicleGraphMutation, Record<string, any>, Record<string, any>>;
  export type InsertVehicleGraphMutationResultEx = InsertVehicleGraphMutationResult & VehicleGraphByIdHookResultEx;

  type PickInsertVehicleGraphFn = (mutation: InsertVehicleGraphMutation | null | undefined) => VehicleGraphFragment | null | undefined;
  type InsertVehicleGraphLazyMutationFn = MutationTuple<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>;
  type InsertVehicleGraphWrappedLazyMutationFn = ({ vehicle, options }: { vehicle: Vehicle_Insert_Input; options?: Omit<MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, "variables">; }) => Promise<InsertVehicleGraphMutationResultEx>;
  export type InsertVehicleGraphLazyMutationReturn = [InsertVehicleGraphWrappedLazyMutationFn, InsertVehicleGraphMutationResultEx];

  // Function
  export function useInsertVehicleGraph(options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, "mutation" | "variables">): InsertVehicleGraphLazyMutationReturn {
    const lazyMutation: InsertVehicleGraphLazyMutationFn = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>(InsertVehicleGraphDocument, options);
    const pickVehicleGraph: PickInsertVehicleGraphFn = (mutation) => { return mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning && mutation.insert_vehicle!.returning[0]; };

    const wrappedLazyMutation: InsertVehicleGraphWrappedLazyMutationFn = async ({ vehicle, options }: { vehicle: Vehicle_Insert_Input; options?: Omit<MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, "variables">; }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [vehicle] }, ...options });
      return { ...fetchResult, vehicleGraph: pickVehicleGraph(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], vehicleGraph: pickVehicleGraph(lazyMutation[1].data) }];
  }
  
  // // Types
  // type Insert${fragmentName}QueryResult = FetchResult<Insert${fragmentName}Mutation, Record<string, any>, Record<string, any>>;
  // export type Insert${fragmentName}QueryResultEx = Insert${fragmentName}QueryResult & ${fragmentName}ByIdHookResultEx;

  // type PickInsert${fragmentName}ObjectsFn = (mutation: Insert${fragmentName}Mutation | null | undefined) => ${fragmentName}Fragment | null | undefined;
  // type Insert${fragmentName}LazyQueryFn = MutationTuple<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>;
  // type Insert${fragmentName}WrappedLazyQueryFn = ({ ${entityShortCamelCaseName}, options }: { ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input; options?: Omit<MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, "variables">; }) => Promise<Insert${fragmentName}QueryResultEx>;
  // export type Insert${fragmentName}ObjectsLazyQueryReturn = [Insert${fragmentName}WrappedLazyQueryFn, Insert${fragmentName}QueryResultEx];

  // // Function
  // export function useInsert${fragmentName}(options?: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, "mutation" | "variables">): Insert${fragmentName}ObjectsLazyQueryReturn {
  //   const lazyMutation: Insert${fragmentName}LazyQueryFn = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>(Insert${fragmentName}Document, options);
  //   const pick${fragmentName}: PickInsert${fragmentName}ObjectsFn = (mutation) => { return mutation && mutation.insert_${entityName} && mutation.insert_${entityName}!.returning && mutation.insert_${entityName}!.returning[0]; };

  //   const wrappedLazyMutation: Insert${fragmentName}WrappedLazyQueryFn = async ({ ${entityShortCamelCaseName}, options }: { ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input; options?: Omit<MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, "variables">; }) => {
  //     const fetchResult = await lazyMutation[0]({ variables: { objects: [${entityShortCamelCaseName}] }, ...options });
  //     return { ...fetchResult, ${fragmentNameCamelCase}: pick${fragmentName}(fetchResult.data) };
  //   };

  //   return [wrappedLazyMutation, { ...lazyMutation[1], ${fragmentNameCamelCase}: pick${fragmentName}(lazyMutation[1].data) }];
  // }
  `);

  contentManager.addContent(`
  //
  //

  // Types
  type InsertVehicleGraphWithOnConflictLazyMutationFn = MutationTuple<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables>;
  type InsertVehicleGraphWithOnConflictWrappedLazyMutationFn = ({ vehicle, options }: { vehicle: Vehicle_Insert_Input; options?: Omit<MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables>, "variables">; }) => Promise<InsertVehicleGraphMutationResultEx>;
  export type InsertVehicleGraphWithOnConflictLazyMutationReturn = [InsertVehicleGraphWithOnConflictWrappedLazyMutationFn, InsertVehicleGraphMutationResultEx];

  // Function
  export function useInsertVehicleGraphWithOnConflict( options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, "mutation" | "variables"> ): InsertVehicleGraphWithOnConflictLazyMutationReturn {
    const lazyMutation: InsertVehicleGraphWithOnConflictLazyMutationFn = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables>(InsertVehicleGraphWithOnConflictDocument, options);
    const pickVehicleGraph: PickInsertVehicleGraphFn = (mutation: InsertVehicleGraphMutation | null | undefined) => { return mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning && mutation.insert_vehicle!.returning[0]; };

    const wrappedLazyMutation:InsertVehicleGraphWithOnConflictWrappedLazyMutationFn = async ({ vehicle, onConflict, options }: { vehicle: Vehicle_Insert_Input; onConflict?: Vehicle_On_Conflict; options?: Omit<MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, "variables">;
    }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [vehicle], onConflict }, ...options });
      return { ...fetchResult, vehicleGraph: pickVehicleGraph(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], vehicleGraph: pickVehicleGraph(lazyMutation[1].data) }];
  }

  // // Types
  // type Insert${fragmentName}WithOnConflictLazyMutationFn = MutationTuple<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables>;
  // type Insert${fragmentName}WithOnConflictWrappedLazyMutationFn = ({ ${entityShortCamelCaseName}, options }: { ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input; options?: Omit<MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables>, "variables">; }) => Promise<Insert${fragmentName}MutationResultEx>;
  // export type Insert${fragmentName}WithOnConflictLazyMutationReturn = [Insert${fragmentName}WithOnConflictWrappedLazyMutationFn, Insert${fragmentName}MutationResultEx];

  // // Function
  // export function useInsert${fragmentName}WithOnConflict( options?: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, "mutation" | "variables"> ): Insert${fragmentName}WithOnConflictLazyMutationReturn {
  //   const lazyMutation: Insert${fragmentName}WithOnConflictLazyMutationFn = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables>(Insert${fragmentName}WithOnConflictDocument, options);
  //   const pick${fragmentName}: PickInsert${fragmentName}Fn = (mutation: Insert${fragmentName}Mutation | null | undefined) => { return mutation && mutation.insert_${entityName} && mutation.insert_${entityName}!.returning && mutation.insert_${entityName}!.returning[0]; };

  //   const wrappedLazyMutation:Insert${fragmentName}WithOnConflictWrappedLazyMutationFn = async ({ ${entityShortCamelCaseName}, onConflict, options }: { ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input; onConflict?: ${entityPascalName}_On_Conflict; options?: Omit<MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, "variables">;
  //   }) => {
  //     const fetchResult = await lazyMutation[0]({ variables: { objects: [${entityShortCamelCaseName}], onConflict }, ...options });
  //     return { ...fetchResult, ${fragmentNameCamelCase}: pick${fragmentName}(fetchResult.data) };
  //   };

  //   return [wrappedLazyMutation, { ...lazyMutation[1], ${fragmentNameCamelCase}: pick${fragmentName}(lazyMutation[1].data) }];
  // }
  `);

  contentManager.addContent(`
  // Types
  type InsertVehicleGraphObjectsMutationResult = FetchResult<InsertVehicleGraphMutation, Record<string, any>, Record<string, any>>;
  export type InsertVehicleGraphObjectsMutationResultEx = InsertVehicleGraphMutationResult & VehicleGraphObjectsHookResultEx;

  type PickInsertVehicleGraphObjectsFn = (mutation: InsertVehicleGraphMutation | null | undefined) => VehicleGraphFragment[];
  type InsertVehicleGraphObjectsLazyMutationFn = MutationTuple<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>;
  type InsertVehicleGraphObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>) => Promise<InsertVehicleGraphObjectsMutationResultEx>;
  export type InsertVehicleGraphObjectsLazyMutationReturn = [InsertVehicleGraphObjectsWrappedLazyMutationFn, InsertVehicleGraphObjectsMutationResultEx];

  // Function
  export function useInsertVehicleGraphObjects(options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, "mutation">): InsertVehicleGraphObjectsLazyMutationReturn {
    const lazyMutation: InsertVehicleGraphObjectsLazyMutationFn = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>(InsertVehicleGraphDocument, options);
    const pickObjects: PickInsertVehicleGraphObjectsFn = (mutation: InsertVehicleGraphMutation | null | undefined) => { return (mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning) || []; };

    const wrappedLazyMutation: InsertVehicleGraphObjectsWrappedLazyMutationFn = async ( options ) => {
      const fetchResult: InsertVehicleGraphObjectsMutationResult = await lazyMutation[0](options);
      return { ...fetchResult, objects: pickObjects(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
  }

  // // Types
  // type Insert${fragmentName}ObjectsMutationResult = FetchResult<Insert${fragmentName}Mutation, Record<string, any>, Record<string, any>>;
  // export type Insert${fragmentName}ObjectsMutationResultEx = Insert${fragmentName}MutationResult & ${fragmentName}ObjectsHookResultEx;

  // type PickInsert${fragmentName}ObjectsFn = (mutation: Insert${fragmentName}Mutation | null | undefined) => ${fragmentName}Fragment[];
  // type Insert${fragmentName}ObjectsLazyMutationFn = MutationTuple<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>;
  // type Insert${fragmentName}ObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>) => Promise<Insert${fragmentName}ObjectsMutationResultEx>;
  // export type Insert${fragmentName}ObjectsLazyMutationReturn = [Insert${fragmentName}ObjectsWrappedLazyMutationFn, Insert${fragmentName}ObjectsMutationResultEx];

  // // Function
  // export function useInsert${fragmentName}Objects(options?: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, "mutation">): Insert${fragmentName}ObjectsLazyMutationReturn {
  //   const lazyMutation: Insert${fragmentName}ObjectsLazyMutationFn = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>(Insert${fragmentName}Document, options);
  //   const pickObjects: PickInsert${fragmentName}ObjectsFn = (mutation: Insert${fragmentName}Mutation | null | undefined) => { return (mutation && mutation.insert_${entityName} && mutation.insert_${entityName}!.returning) || []; };

  //   const wrappedLazyMutation: Insert${fragmentName}ObjectsWrappedLazyMutationFn = async ( options ) => {
  //     const fetchResult = await lazyMutation[0](options);
  //     return { ...fetchResult, objects: pickObjects(fetchResult.data) };
  //   };

  //   return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
  // }
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
    
    type UpdateVehicleGraphByIdMutationResult = FetchResult<UpdateVehicleGraphByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleGraphByIdMutationResultEx = UpdateVehicleGraphByIdMutationResult & VehicleGraphByIdHookResultEx;

    type PickUpdateVehicleGraphByIdFn = (mutation: UpdateVehicleGraphByIdMutation | null | undefined) => VehicleGraphFragment | null | undefined;
    type UpdateVehicleGraphByIdLazyMutationFn = MutationTuple<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>;
    type UpdateVehicleGraphByIdWrappedLazyMutationFn = ({ vehicleId, set, autoOptimisticResponse, options }: { vehicleId: string; set: Vehicle_Set_Input; autoOptimisticResponse?: boolean; options?: Omit<MutationFunctionOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, "variables">; }) => Promise<UpdateVehicleGraphByIdMutationResultEx>;
    export type UpdateVehicleGraphByIdLazyMutationReturn = [UpdateVehicleGraphByIdWrappedLazyMutationFn, UpdateVehicleGraphByIdMutationResultEx];

    export function useUpdateVehicleGraphById(options?: Omit<MutationHookOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, "mutation" | "variables">): UpdateVehicleGraphByIdLazyMutationReturn {
      const lazyMutation: UpdateVehicleGraphByIdLazyMutationFn = useMutation<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>(UpdateVehicleGraphByIdDocument, options);

      const pickVehicleGraph: PickUpdateVehicleGraphByIdFn = (mutation) => { return mutation && mutation.update_vehicle && mutation.update_vehicle!.returning && mutation.update_vehicle!.returning[0]; };

      const wrappedLazyMutation: UpdateVehicleGraphByIdWrappedLazyMutationFn = async ({ vehicleId, set, autoOptimisticResponse, options }) => {
        const mutationOptions: MutationFunctionOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables> = { variables: { id: vehicleId, set }, ...options };
        if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateVehicleGraphByIdMutation>("update", "vehicle", vehicleId, set);
        }

        const fetchResult: UpdateVehicleGraphByIdMutationResult = await lazyMutation[0]({ variables: { id: vehicleId, set }, ...mutationOptions });
        return { ...fetchResult, vehicleGraph: pickVehicleGraph(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], vehicleGraph: pickVehicleGraph(lazyMutation[1].data) }];
    }
    
    // export function useUpdate${fragmentName}ById( options?: Omit<MutationHookOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, 'mutation' | 'variables'> ) {
    //   const lazyMutation = useMutation<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>(Update${fragmentName}ByIdDocument, options );
      
    //   const pick${fragmentName} = (mutation:Update${fragmentName}Mutation | null | undefined) => { return ( mutation && mutation.update_${entityName} && mutation.update_${entityName}!.returning && mutation.update_${entityName}!.returning[0] ); };
      
    //   const wrappedLazyMutation = async ({ ${entityShortCamelCaseName}Id, set, autoOptimisticResponse, options }: { ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}; set: ${entityPascalName}_Set_Input; autoOptimisticResponse?:boolean; options?: Omit<MutationFunctionOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, 'variables'>; }) => {
    //     const mutationOptions:MutationFunctionOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables> = { variables: { id:${entityShortCamelCaseName}Id, set }, ...options };
    //     if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<Update${fragmentName}ByIdMutation>('update', '${entityName}', ${entityShortCamelCaseName}Id, set); }

    //     const fetchResult = await lazyMutation[0]({ variables: { id: ${entityShortCamelCaseName}Id, set }, ...mutationOptions });
    //     return { ...fetchResult, ${fragmentNameCamelCase}: pick${fragmentName}(fetchResult.data) };
    //   };

    //   return [ wrappedLazyMutation, { ...lazyMutation[1], ${fragmentNameCamelCase}: pick${fragmentName}(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { ${fragmentNameCamelCase}: ReturnType<typeof pick${fragmentName}> }];
    // }
  `);

  contentManager.addContent(`
    //
    //

    // Types
    type UpdateVehicleGraphObjectsMutationResult = FetchResult<UpdateVehicleGraphMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleGraphObjectsMutationResultEx = UpdateVehicleGraphObjectsMutationResult & VehicleGraphObjectsHookResultEx;

    // Function
    type PickUpdateVehicleGraphObjectsFn = (mutation: UpdateVehicleGraphMutation | null | undefined) => VehicleGraphFragment[];
    type UpdateVehicleGraphObjectsLazyMutationFn = MutationTuple<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>;
    type UpdateVehicleGraphObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>) => Promise<UpdateVehicleGraphObjectsMutationResultEx>;
    export type UpdateVehicleGraphObjectsLazyMutationReturn = [UpdateVehicleGraphObjectsWrappedLazyMutationFn, UpdateVehicleGraphObjectsMutationResultEx];

    export function useUpdateVehicleGraph(options?: Omit<MutationHookOptions<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>, "mutation">): UpdateVehicleGraphObjectsLazyMutationReturn {
      const lazyMutation: UpdateVehicleGraphObjectsLazyMutationFn = useMutation<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>(UpdateVehicleGraphDocument, options);

      const pickObjects: PickUpdateVehicleGraphObjectsFn = (mutation: UpdateVehicleGraphMutation | null | undefined) => {
        return (mutation && mutation.update_vehicle && mutation.update_vehicle!.returning) || [];
      };

      const wrappedLazyMutation: UpdateVehicleGraphObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: UpdateVehicleGraphObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }

    // export function useUpdate${fragmentName}( options?: Omit<MutationHookOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>, 'mutation'> ) {
    //   const lazyMutation = useMutation<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>(Update${fragmentName}Document, options );
      
    //   const pickObjects = (mutation:Update${fragmentName}Mutation | null | undefined) => { return ( mutation && mutation.update_${entityName} && mutation.update_${entityName}!.returning ); };
      
    //   const wrappedLazyMutation = async ( options: MutationFunctionOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables> ) => {
    //     const fetchResult = await lazyMutation[0]( options );
    //     return { ...fetchResult, objects: pickObjects(fetchResult.data) }
    //   };

    //   return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) } ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
    // }
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
    type RemoveVehicleModelByIdFetchResult = FetchResult<RemoveVehicleModelByIdMutation, Record<string, any>, Record<string, any>>;
    export type RemoveVehicleModelByIdMutationResultEx = RemoveVehicleModelByIdFetchResult & { affected_rows: number };

    // Function
    type PickRemoveVehicleModelFn = (mutation: RemoveVehicleModelByIdMutation | null | undefined) => number;
    type RemoveVehicleModelLazyMutationFn = MutationTuple<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>;
    type RemoveVehicleModelWrappedLazyMutationFn = ({ vehicleId, options }: { vehicleId: string; options?: Omit<MutationFunctionOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, "variables">; }) => Promise<RemoveVehicleModelByIdMutationResultEx>;
    export type RemoveVehicleModelLazyMutationReturn = [RemoveVehicleModelWrappedLazyMutationFn, RemoveVehicleModelByIdMutationResultEx];

    export function useRemoveVehicleModelById(options?: Omit<MutationHookOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, "mutation" | "variables">) {
      const lazyMutation: RemoveVehicleModelLazyMutationFn = useMutation<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>(RemoveVehicleModelByIdDocument, options);

      const pickAffectedRows: PickRemoveVehicleModelFn = (mutation: RemoveVehicleModelByIdMutation | null | undefined) => {
        return (mutation && mutation.delete_vehicle && mutation.delete_vehicle!.affected_rows) || 0;
      };

      const wrappedLazyMutation: RemoveVehicleModelWrappedLazyMutationFn = async ({ vehicleId, options }: { vehicleId: string; options?: Omit<MutationFunctionOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, "variables">; }) => {
        const fetchResult: RemoveVehicleModelByIdFetchResult = await lazyMutation[0]({ variables: { id: vehicleId }, ...options });
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }] as [
        typeof wrappedLazyMutation,
        typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }
      ];
    }

    // export function useRemove${entityModelName}ById( options?: Omit<MutationHookOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, 'mutation' | 'variables'> ) {
    //   const lazyMutation = useMutation<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>(Remove${entityModelName}ByIdDocument, options );
      
    //   const pickAffectedRows = (mutation:Remove${entityModelName}ByIdMutation | null | undefined) => { return ( mutation && mutation.delete_${entityName} && mutation.delete_${entityName}!.affected_rows ); };
      
    //   const wrappedLazyMutation = async ({ ${entityShortCamelCaseName}Id, options }:{ ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, options?: Omit<MutationFunctionOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, 'variables'> }) => {
    //     const fetchResult = await lazyMutation[0]({ variables: { id:${entityShortCamelCaseName}Id }, ...options });
    //     return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) }
    //   }; 
      
    //   return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }];
    // }
  `);

  contentManager.addContent(`
    //
    //

    // Types
    type RemoveVehicleModelObjectsMutationResult = FetchResult<RemoveVehicleModelMutation, Record<string, any>, Record<string, any>>;
    export type RemoveVehicleModelObjectsMutationResultEx = RemoveVehicleModelObjectsMutationResult & { affected_rows: number };

    // Function
    type PickRemoveVehicleModelObjectsFn = (mutation: RemoveVehicleModelMutation | null | undefined) => number;
    type RemoveVehicleModelObjectsLazyMutationFn = MutationTuple<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>;
    type RemoveVehicleModelObjectsWrappedLazyMutationFn = (options: MutationFunctionOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>) => Promise<RemoveVehicleModelObjectsMutationResultEx>;
    export type RemoveVehicleModelObjectsLazyMutationReturn = [RemoveVehicleModelObjectsWrappedLazyMutationFn, RemoveVehicleModelObjectsMutationResultEx];

    export function useRemoveVehicleModelObjects(options?: Omit<MutationHookOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, "mutation">): RemoveVehicleModelObjectsLazyMutationReturn {
      const lazyMutation = useMutation<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>(RemoveVehicleModelDocument, options);

      const pickAffectedRows: PickRemoveVehicleModelObjectsFn = (mutation: RemoveVehicleModelMutation | null | undefined) => {
        return (mutation && mutation.delete_vehicle && mutation.delete_vehicle!.affected_rows) || 0;
      };

      const wrappedLazyMutation: RemoveVehicleModelObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: RemoveVehicleModelObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }];
    }
  
    //
    // export function useRemove${entityModelName}Objects( options?: Omit<MutationHookOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, 'mutation'> ) {
    //   const lazyMutation = useMutation<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>(Remove${entityModelName}Document, options );
      
    //   const pickAffectedRows = (mutation: Remove${entityModelName}Mutation | null | undefined) => { return ( mutation && mutation.delete_${entityName} && mutation.delete_${entityName}!.affected_rows ); };
      
    //   const wrappedLazyMutation = async ( options: MutationFunctionOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables> ) => {
    //     const fetchResult = await lazyMutation[0]( options );
    //     return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) }
    //   };

    //   return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }];
    // }
  `);

  contentManager.addImport(makeImportStatement(`Remove${entityModelName}Mutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}MutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdMutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdMutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdDocument`, typescriptCodegenOutputPath));
}
