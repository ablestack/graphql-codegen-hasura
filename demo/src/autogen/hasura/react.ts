import { ObjectWithId, generateOptimisticResponseForMutation, generateUpdateFunctionForMutation } from 'graphql-codegen-hasura-core'
import { QueryHookOptions, useQuery, LazyQueryHookOptions, useLazyQuery, MutationHookOptions, useMutation, QueryLazyOptions, MutationFunctionOptions, QueryResult, MutationTuple, FetchResult } from '@apollo/client';
import { VehicleGraphFragment } from '../';
import { FetchVehicleGraphByIdAsQueryQuery } from '../';
import { FetchVehicleGraphByIdAsQueryQueryVariables } from '../';
import { FetchVehicleGraphByIdAsQueryDocument } from '../';
import { FetchVehicleGraphAsQueryQuery } from '../';
import { FetchVehicleGraphAsQueryDocument } from '../';
import { FetchVehicleGraphAsQueryQueryVariables } from '../';
import { Vehicle_Insert_Input } from '../';
import { Vehicle_On_Conflict } from '../';
import { InsertVehicleGraphMutation } from '../';
import { InsertVehicleGraphMutationVariables } from '../';
import { InsertVehicleGraphWithOnConflictMutationVariables } from '../';
import { InsertVehicleGraphDocument } from '../';
import { InsertVehicleGraphWithOnConflictDocument } from '../';
import { Vehicle_Set_Input } from '../';
import { UpdateVehicleGraphByIdMutation } from '../';
import { UpdateVehicleGraphByIdMutationVariables } from '../';
import { UpdateVehicleGraphByIdDocument } from '../';
import { UpdateVehicleGraphMutation } from '../';
import { UpdateVehicleGraphMutationVariables } from '../';
import { UpdateVehicleGraphDocument } from '../';
import { RemoveVehicleModelMutation } from '../';
import { RemoveVehicleModelMutationVariables } from '../';
import { RemoveVehicleModelDocument } from '../';
import { RemoveVehicleModelByIdMutation } from '../';
import { RemoveVehicleModelByIdMutationVariables } from '../';
import { RemoveVehicleModelByIdDocument } from '../';
import { VehicleGraphLocationOnlyFragment } from '../';
import { FetchVehicleGraphLocationOnlyByIdAsQueryQuery } from '../';
import { FetchVehicleGraphLocationOnlyByIdAsQueryQueryVariables } from '../';
import { FetchVehicleGraphLocationOnlyByIdAsQueryDocument } from '../';
import { FetchVehicleGraphLocationOnlyAsQueryQuery } from '../';
import { FetchVehicleGraphLocationOnlyAsQueryDocument } from '../';
import { FetchVehicleGraphLocationOnlyAsQueryQueryVariables } from '../';
import { InsertVehicleGraphLocationOnlyMutation } from '../';
import { InsertVehicleGraphLocationOnlyMutationVariables } from '../';
import { InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables } from '../';
import { InsertVehicleGraphLocationOnlyDocument } from '../';
import { InsertVehicleGraphLocationOnlyWithOnConflictDocument } from '../';
import { UpdateVehicleGraphLocationOnlyByIdMutation } from '../';
import { UpdateVehicleGraphLocationOnlyByIdMutationVariables } from '../';
import { UpdateVehicleGraphLocationOnlyByIdDocument } from '../';
import { UpdateVehicleGraphLocationOnlyMutation } from '../';
import { UpdateVehicleGraphLocationOnlyMutationVariables } from '../';
import { UpdateVehicleGraphLocationOnlyDocument } from '../';
import { DogModelFragment } from '../';
import { FetchDogModelByIdAsQueryQuery } from '../';
import { FetchDogModelByIdAsQueryQueryVariables } from '../';
import { FetchDogModelByIdAsQueryDocument } from '../';
import { FetchDogModelAsQueryQuery } from '../';
import { FetchDogModelAsQueryDocument } from '../';
import { FetchDogModelAsQueryQueryVariables } from '../';
import { Dogs_Insert_Input } from '../';
import { Dogs_On_Conflict } from '../';
import { InsertDogModelMutation } from '../';
import { InsertDogModelMutationVariables } from '../';
import { InsertDogModelWithOnConflictMutationVariables } from '../';
import { InsertDogModelDocument } from '../';
import { InsertDogModelWithOnConflictDocument } from '../';
import { Dogs_Set_Input } from '../';
import { UpdateDogModelByIdMutation } from '../';
import { UpdateDogModelByIdMutationVariables } from '../';
import { UpdateDogModelByIdDocument } from '../';
import { UpdateDogModelMutation } from '../';
import { UpdateDogModelMutationVariables } from '../';
import { UpdateDogModelDocument } from '../';
import { RemoveDogsModelMutation } from '../';
import { RemoveDogsModelMutationVariables } from '../';
import { RemoveDogsModelDocument } from '../';
import { RemoveDogsModelByIdMutation } from '../';
import { RemoveDogsModelByIdMutationVariables } from '../';
import { RemoveDogsModelByIdDocument } from '../';

    // GLOBAL TYPES
    //------------------------------------------------
    export type RemoveEntitiesQueryHookResultEx = { affected_rows:number };
  

    // vehicle REACT
    //------------------------------------------------

    export type VehicleGraphByIdHookResultEx = { vehicleGraph:VehicleGraphFragment | null | undefined };
    export type VehicleGraphObjectsHookResultEx = { objects:VehicleGraphFragment[] };

  

      // Fetch Hooks
      //
  
      /**
       * __useFetchVehicleGraphByIdAsQueryQuery__
       *
       * To run a query within a React component, call `useVehicleGraphByIdQuery`
       * When your component renders, `useVehicleGraphByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, vehicleGraph } = useFetchVehicleGraphByIdAsQueryQuery({ vehicleId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#usequery for details
       * 
       */

        // Fetch Hook
        //

        // Types
        type FetchVehicleGraphByIdAsQueryQueryResult = QueryResult<FetchVehicleGraphByIdAsQueryQuery, FetchVehicleGraphByIdAsQueryQueryVariables>;
        export type FetchVehicleGraphByIdAsQueryQueryResultEx = FetchVehicleGraphByIdAsQueryQueryResult & VehicleGraphByIdHookResultEx;

        // Function
        function useFetchVehicleGraphByIdAsQueryQuery({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryHookOptions<FetchVehicleGraphByIdAsQueryQuery, FetchVehicleGraphByIdAsQueryQueryVariables>, "query" | "variables">; }): FetchVehicleGraphByIdAsQueryQueryResultEx {
          const query: FetchVehicleGraphByIdAsQueryQueryResult = useQuery<FetchVehicleGraphByIdAsQueryQuery, FetchVehicleGraphByIdAsQueryQueryVariables>(FetchVehicleGraphByIdAsQueryDocument, { variables: { vehicleId }, ...options });
          return { ...query, vehicleGraph: query && query.data && query.data.vehicle_by_pk };
        }
    

      /**
       * __useFetchVehicleGraphByIdAsQueryLazyQuery__
       * 
       * @example
       * const [fetchVehicleGraphById, { called, loading, error, vehicleGraph }] = useFetchVehicleGraphByIdAsQuery();
       * fetchVehicleGraphById({ vehicleId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery for details
       * 
       */

      // Lazy Fetch Hook
      //
      
      // Types
      type PickFetchVehicleGraphByIdAsQueryFn = (query: FetchVehicleGraphByIdAsQueryQuery | null | undefined) => VehicleGraphFragment | null | undefined;
      type FetchVehicleGraphByIdAsQueryLazyQueryFn = [(options?: QueryLazyOptions<FetchVehicleGraphByIdAsQueryQueryVariables> | undefined) => void, FetchVehicleGraphByIdAsQueryQueryResult]
      type FetchVehicleGraphByIdAsQueryWrappedLazyQueryFn = ({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryLazyOptions<FetchVehicleGraphByIdAsQueryQueryVariables>, "variables">; }) => void;
      export type FetchVehicleGraphByIdAsQueryLazyQueryReturn = [FetchVehicleGraphByIdAsQueryWrappedLazyQueryFn, FetchVehicleGraphByIdAsQueryQueryResultEx];

      // Function
      function useFetchVehicleGraphByIdAsQueryLazyQuery(options?: Omit<LazyQueryHookOptions<FetchVehicleGraphByIdAsQueryQuery, FetchVehicleGraphByIdAsQueryQueryVariables>, "query" | "variables">): FetchVehicleGraphByIdAsQueryLazyQueryReturn {
        const lazyQuery: FetchVehicleGraphByIdAsQueryLazyQueryFn = useLazyQuery<FetchVehicleGraphByIdAsQueryQuery, FetchVehicleGraphByIdAsQueryQueryVariables>(FetchVehicleGraphByIdAsQueryDocument, options);
        const pickVehicleGraph: PickFetchVehicleGraphByIdAsQueryFn = query => { return query && query.vehicle_by_pk; };
        const wrappedLazyQuery: FetchVehicleGraphByIdAsQueryWrappedLazyQueryFn = ({ vehicleId, options }) => { return lazyQuery[0]({ variables: { vehicleId }, ...options }); };
        const returnVal: FetchVehicleGraphByIdAsQueryLazyQueryReturn = [wrappedLazyQuery, { ...lazyQuery[1], vehicleGraph: pickVehicleGraph(lazyQuery[1].data) }];
        return returnVal;
      }
    

      // Fetch Collection Hook
      //

      // Types
      export type FetchVehicleGraphAsQueryQueryResult = QueryResult<FetchVehicleGraphAsQueryQuery, FetchVehicleGraphAsQueryQueryVariables>;
      export type FetchVehicleGraphAsQueryQueryResultEx = FetchVehicleGraphAsQueryQueryResult & VehicleGraphObjectsHookResultEx;

      // Function
      function useFetchVehicleGraphAsQueryQuery(options: Omit<QueryHookOptions<FetchVehicleGraphAsQueryQuery, FetchVehicleGraphAsQueryQueryVariables>, "query">): FetchVehicleGraphAsQueryQueryResultEx {
        const query:FetchVehicleGraphAsQueryQueryResult = useQuery<FetchVehicleGraphAsQueryQuery, FetchVehicleGraphAsQueryQueryVariables>(FetchVehicleGraphAsQueryDocument, options);
        return { ...query, objects: (query && query.data && query.data.vehicle) || [] };
      }
      
  
      // Lazy Fetch Collection Hook
      //

      // Types
      type PickFetchVehicleGraphAsQueryFn = (query: FetchVehicleGraphAsQueryQuery | null | undefined) => VehicleGraphFragment[];
      type FetchVehicleGraphAsQueryLazyQueryFn = [(options?: QueryLazyOptions<FetchVehicleGraphAsQueryQueryVariables> | undefined) => void, FetchVehicleGraphAsQueryQueryResult]
      type FetchVehicleGraphAsQueryWrappedLazyQueryFn = (options?: QueryLazyOptions<FetchVehicleGraphAsQueryQueryVariables>) => void;
      export type FetchVehicleGraphAsQueryLazyQueryReturn = [FetchVehicleGraphAsQueryWrappedLazyQueryFn, FetchVehicleGraphAsQueryQueryResultEx];

      // Function
      function useFetchVehicleGraphAsQueryLazyQuery(options?: Omit<LazyQueryHookOptions<FetchVehicleGraphAsQueryQuery, FetchVehicleGraphAsQueryQueryVariables>, "query">): FetchVehicleGraphAsQueryLazyQueryReturn {
        const lazyQuery: FetchVehicleGraphAsQueryLazyQueryFn = useLazyQuery<FetchVehicleGraphAsQueryQuery, FetchVehicleGraphAsQueryQueryVariables>(FetchVehicleGraphAsQueryDocument, options);
        const pickObjects: PickFetchVehicleGraphAsQueryFn = (query: FetchVehicleGraphAsQueryQuery | null | undefined) => { return (query && query.vehicle) || []; };
        const wrappedLazyQuery: FetchVehicleGraphAsQueryWrappedLazyQueryFn = (options) => { return lazyQuery[0]( options ); };
        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }
    

  // Insert Hooks
  //

  // Types
  type InsertVehicleGraphMutationResult = FetchResult<InsertVehicleGraphMutation, Record<string, any>, Record<string, any>>;
  export type InsertVehicleGraphMutationResultEx = InsertVehicleGraphMutationResult & VehicleGraphByIdHookResultEx;

  type PickInsertVehicleGraphFn = (mutation: InsertVehicleGraphMutation | null | undefined) => VehicleGraphFragment | null | undefined;
  type InsertVehicleGraphLazyMutationFn = MutationTuple<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>;
  type InsertVehicleGraphWrappedLazyMutationFn = ({ vehicle, autoOptimisticResponse, options }: { vehicle: Vehicle_Insert_Input; autoOptimisticResponse?:boolean, options?: Omit<MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, "variables">; }) => Promise<InsertVehicleGraphMutationResultEx>;
  export type InsertVehicleGraphLazyMutationReturn = [InsertVehicleGraphWrappedLazyMutationFn, InsertVehicleGraphMutationResultEx];

  // Function
  function useInsertVehicleGraph(options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, "mutation" | "variables">): InsertVehicleGraphLazyMutationReturn {
    const lazyMutation: InsertVehicleGraphLazyMutationFn = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>(InsertVehicleGraphDocument, options);
    const pickVehicleGraph: PickInsertVehicleGraphFn = (mutation) => { return mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning && mutation.insert_vehicle!.returning[0]; };

    const wrappedLazyMutation: InsertVehicleGraphWrappedLazyMutationFn = async ({ vehicle, autoOptimisticResponse, options }) => {
      const mutationOptions:MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables> = { variables: { objects: [vehicle] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!vehicle.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`);
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleGraphMutation>({ operationType: 'insert', entityName:'vehicle', objects:[vehicle as Vehicle_Insert_Input & ObjectWithId] 
      }); }

      const fetchResult = await lazyMutation[0](mutationOptions);
      
      return { ...fetchResult, vehicleGraph: pickVehicleGraph(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], vehicleGraph: pickVehicleGraph(lazyMutation[1].data) }];
  }
  

  //
  //

  // Types
  type InsertVehicleGraphWithOnConflictLazyMutationFn = MutationTuple<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables>;
  type InsertVehicleGraphWithOnConflictWrappedLazyMutationFn = ({ vehicle, onConflict, autoOptimisticResponse, options }: { vehicle: Vehicle_Insert_Input; onConflict: Vehicle_On_Conflict, autoOptimisticResponse?:boolean; options?: Omit<MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables>, "variables">; }) => Promise<InsertVehicleGraphMutationResultEx>;
  export type InsertVehicleGraphWithOnConflictLazyMutationReturn = [InsertVehicleGraphWithOnConflictWrappedLazyMutationFn, InsertVehicleGraphMutationResultEx];

  // Function
  function useInsertVehicleGraphWithOnConflict( options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, "mutation" | "variables"> ): InsertVehicleGraphWithOnConflictLazyMutationReturn {
    const lazyMutation: InsertVehicleGraphWithOnConflictLazyMutationFn = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables>(InsertVehicleGraphWithOnConflictDocument, options);
    const pickVehicleGraph: PickInsertVehicleGraphFn = (mutation: InsertVehicleGraphMutation | null | undefined) => { return mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning && mutation.insert_vehicle!.returning[0]; };

    const wrappedLazyMutation:InsertVehicleGraphWithOnConflictWrappedLazyMutationFn = async ({ vehicle, onConflict, autoOptimisticResponse, options }) => {
      const mutationOptions:MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables> = { variables: { objects: [vehicle], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!vehicle.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`);
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleGraphMutation>({ operationType: 'insert', entityName:'vehicle', objects:[vehicle as Vehicle_Insert_Input & ObjectWithId] }); 
      }

      const fetchResult = await lazyMutation[0](mutationOptions);
      
      return { ...fetchResult, vehicleGraph: pickVehicleGraph(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], vehicleGraph: pickVehicleGraph(lazyMutation[1].data) }];
  }
  

  // Types
  type InsertVehicleGraphObjectsMutationResult = FetchResult<InsertVehicleGraphMutation, Record<string, any>, Record<string, any>>;
  export type InsertVehicleGraphObjectsMutationResultEx = InsertVehicleGraphMutationResult & VehicleGraphObjectsHookResultEx;

  type PickInsertVehicleGraphObjectsFn = (mutation: InsertVehicleGraphMutation | null | undefined) => VehicleGraphFragment[];
  type InsertVehicleGraphObjectsLazyMutationFn = MutationTuple<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>;
  type InsertVehicleGraphObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>) => Promise<InsertVehicleGraphObjectsMutationResultEx>;
  export type InsertVehicleGraphObjectsLazyMutationReturn = [InsertVehicleGraphObjectsWrappedLazyMutationFn, InsertVehicleGraphObjectsMutationResultEx];

  // Function
  function useInsertVehicleGraphObjects(options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, "mutation">): InsertVehicleGraphObjectsLazyMutationReturn {
    const lazyMutation: InsertVehicleGraphObjectsLazyMutationFn = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>(InsertVehicleGraphDocument, options);
    const pickObjects: PickInsertVehicleGraphObjectsFn = (mutation: InsertVehicleGraphMutation | null | undefined) => { return (mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning) || []; };

    const wrappedLazyMutation: InsertVehicleGraphObjectsWrappedLazyMutationFn = async ( options ) => {
      const fetchResult: InsertVehicleGraphObjectsMutationResult = await lazyMutation[0](options);
      return { ...fetchResult, objects: pickObjects(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
  }
  

    // Update Hooks
    //
    
    type UpdateVehicleGraphByIdMutationResult = FetchResult<UpdateVehicleGraphByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleGraphByIdMutationResultEx = UpdateVehicleGraphByIdMutationResult & VehicleGraphByIdHookResultEx;

    type PickUpdateVehicleGraphByIdFn = (mutation: UpdateVehicleGraphByIdMutation | null | undefined) => VehicleGraphFragment | null | undefined;
    type UpdateVehicleGraphByIdLazyMutationFn = MutationTuple<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>;
    type UpdateVehicleGraphByIdWrappedLazyMutationFn = ({ vehicleId, set, autoOptimisticResponse, options }: { vehicleId: string; set: Vehicle_Set_Input; autoOptimisticResponse?: boolean; options?: Omit<MutationFunctionOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, "variables">; }) => Promise<UpdateVehicleGraphByIdMutationResultEx>;
    export type UpdateVehicleGraphByIdLazyMutationReturn = [UpdateVehicleGraphByIdWrappedLazyMutationFn, UpdateVehicleGraphByIdMutationResultEx];

    function useUpdateVehicleGraphById(options?: Omit<MutationHookOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, "mutation" | "variables">): UpdateVehicleGraphByIdLazyMutationReturn {
      const lazyMutation: UpdateVehicleGraphByIdLazyMutationFn = useMutation<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>(UpdateVehicleGraphByIdDocument, options);

      const pickVehicleGraph: PickUpdateVehicleGraphByIdFn = (mutation) => { return mutation && mutation.update_vehicle && mutation.update_vehicle!.returning && mutation.update_vehicle!.returning[0]; };

      const wrappedLazyMutation: UpdateVehicleGraphByIdWrappedLazyMutationFn = async ({ vehicleId, set, autoOptimisticResponse, options }) => {
        const mutationOptions: MutationFunctionOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables> = { variables: { id: vehicleId, set }, ...options };
        if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateVehicleGraphByIdMutation>({ operationType: 'update', entityName:'vehicle', objects:[{ id:vehicleId, ...set }] });
        }

        const fetchResult: UpdateVehicleGraphByIdMutationResult = await lazyMutation[0]({ variables: { id: vehicleId, set }, ...mutationOptions });
        return { ...fetchResult, vehicleGraph: pickVehicleGraph(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], vehicleGraph: pickVehicleGraph(lazyMutation[1].data) }];
    }
  

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

    function useUpdateVehicleGraphObjects(options?: Omit<MutationHookOptions<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>, "mutation">): UpdateVehicleGraphObjectsLazyMutationReturn {
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
  

    // Delete Hooks
    //

    // Types
    type RemoveVehicleModelByIdFetchResult = FetchResult<RemoveVehicleModelByIdMutation, Record<string, any>, Record<string, any>>;
    export type RemoveVehicleModelByIdMutationResultEx = RemoveVehicleModelByIdFetchResult & RemoveEntitiesQueryHookResultEx;

    // Function
    type PickRemoveVehicleModelFn = (mutation: RemoveVehicleModelByIdMutation | null | undefined) => number;
    type RemoveVehicleModelLazyMutationFn = MutationTuple<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>;
    type RemoveVehicleModelWrappedLazyMutationFn = ({ vehicleId, autoOptimisticResponse, options }: { vehicleId: string; autoOptimisticResponse?:boolean, options?: Omit<MutationFunctionOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, "variables">; }) => Promise<RemoveVehicleModelByIdMutationResultEx>;
    export type RemoveVehicleModelLazyMutationReturn = [RemoveVehicleModelWrappedLazyMutationFn, RemoveVehicleModelByIdMutationResultEx];

    function useRemoveVehicleModelById(options?: Omit<MutationHookOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, "mutation" | "variables">) {
      const lazyMutation: RemoveVehicleModelLazyMutationFn = useMutation<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>(RemoveVehicleModelByIdDocument, options);
      
      const pickAffectedRows: PickRemoveVehicleModelFn = (mutation: RemoveVehicleModelByIdMutation | null | undefined) => {
        return (mutation && mutation.delete_vehicle && mutation.delete_vehicle!.affected_rows) || 0;
      };

      const wrappedLazyMutation: RemoveVehicleModelWrappedLazyMutationFn = async ({ vehicleId, autoOptimisticResponse, options }) => {
        const mutationOptions:MutationFunctionOptions<RemoveVehicleModelMutation, RemoveVehicleModelByIdMutationVariables> = { variables: { id: vehicleId }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<RemoveVehicleModelMutation>({ operationType: 'delete', entityName:'vehicle', objects:[{ id:vehicleId }] });        }
        if((!options || !options.update)){ mutationOptions.update = generateUpdateFunctionForMutation<RemoveVehicleModelByIdMutation>({ operationType: 'delete', entityName:'vehicle', entityId:vehicleId }); }
        
        const fetchResult: RemoveVehicleModelByIdFetchResult = await lazyMutation[0](mutationOptions);
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }] as [
        typeof wrappedLazyMutation,
        typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }
      ];
    }
  

    //
    //

    // Types
    type RemoveVehicleModelObjectsMutationResult = FetchResult<RemoveVehicleModelMutation, Record<string, any>, Record<string, any>>;
    export type RemoveVehicleModelObjectsMutationResultEx = RemoveVehicleModelObjectsMutationResult & RemoveEntitiesQueryHookResultEx;

    // Function
    type PickRemoveVehicleModelObjectsFn = (mutation: RemoveVehicleModelMutation | null | undefined) => number;
    type RemoveVehicleModelObjectsLazyMutationFn = MutationTuple<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>;
    type RemoveVehicleModelObjectsWrappedLazyMutationFn = (options: MutationFunctionOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>) => Promise<RemoveVehicleModelObjectsMutationResultEx>;
    export type RemoveVehicleModelObjectsLazyMutationReturn = [RemoveVehicleModelObjectsWrappedLazyMutationFn, RemoveVehicleModelObjectsMutationResultEx];

    function useRemoveVehicleModelObjects(options?: Omit<MutationHookOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, "mutation">): RemoveVehicleModelObjectsLazyMutationReturn {
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
  

    // VehicleGraph Fragment Hooks Object
    //------------------------------------------------

    export const VehicleGraphFragmentGQLHooks = {
      useFetchByIdQuery: useFetchVehicleGraphByIdAsQueryQuery,
      useFetchByIdLazyQuery: useFetchVehicleGraphByIdAsQueryLazyQuery,
      useFetchObjectsQuery: useFetchVehicleGraphAsQueryQuery,
      useFetchObjectsLazyQuery: useFetchVehicleGraphAsQueryLazyQuery,
      useInsert: useInsertVehicleGraph,
      useInsertWithOnConflict: useInsertVehicleGraphWithOnConflict,
      useInsertObjects: useInsertVehicleGraphObjects,
      useUpdateById: useUpdateVehicleGraphById,
      useUpdateObjects: useUpdateVehicleGraphObjects,
    }
  

    // vehicle Model Hooks Object
    //------------------------------------------------

    export const VehicleModelGQLHooks = {
      useRemoveById: useRemoveVehicleModelById,
      useRemoveObjects: useRemoveVehicleModelObjects
    }
  

    // vehicle REACT
    //------------------------------------------------

    export type VehicleGraphLocationOnlyByIdHookResultEx = { vehicleGraphLocationOnly:VehicleGraphLocationOnlyFragment | null | undefined };
    export type VehicleGraphLocationOnlyObjectsHookResultEx = { objects:VehicleGraphLocationOnlyFragment[] };

  

      // Fetch Hooks
      //
  
      /**
       * __useFetchVehicleGraphLocationOnlyByIdAsQueryQuery__
       *
       * To run a query within a React component, call `useVehicleGraphLocationOnlyByIdQuery`
       * When your component renders, `useVehicleGraphLocationOnlyByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, vehicleGraphLocationOnly } = useFetchVehicleGraphLocationOnlyByIdAsQueryQuery({ vehicleId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#usequery for details
       * 
       */

        // Fetch Hook
        //

        // Types
        type FetchVehicleGraphLocationOnlyByIdAsQueryQueryResult = QueryResult<FetchVehicleGraphLocationOnlyByIdAsQueryQuery, FetchVehicleGraphLocationOnlyByIdAsQueryQueryVariables>;
        export type FetchVehicleGraphLocationOnlyByIdAsQueryQueryResultEx = FetchVehicleGraphLocationOnlyByIdAsQueryQueryResult & VehicleGraphLocationOnlyByIdHookResultEx;

        // Function
        function useFetchVehicleGraphLocationOnlyByIdAsQueryQuery({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryHookOptions<FetchVehicleGraphLocationOnlyByIdAsQueryQuery, FetchVehicleGraphLocationOnlyByIdAsQueryQueryVariables>, "query" | "variables">; }): FetchVehicleGraphLocationOnlyByIdAsQueryQueryResultEx {
          const query: FetchVehicleGraphLocationOnlyByIdAsQueryQueryResult = useQuery<FetchVehicleGraphLocationOnlyByIdAsQueryQuery, FetchVehicleGraphLocationOnlyByIdAsQueryQueryVariables>(FetchVehicleGraphLocationOnlyByIdAsQueryDocument, { variables: { vehicleId }, ...options });
          return { ...query, vehicleGraphLocationOnly: query && query.data && query.data.vehicle_by_pk };
        }
    

      /**
       * __useFetchVehicleGraphLocationOnlyByIdAsQueryLazyQuery__
       * 
       * @example
       * const [fetchVehicleGraphLocationOnlyById, { called, loading, error, vehicleGraphLocationOnly }] = useFetchVehicleGraphLocationOnlyByIdAsQuery();
       * fetchVehicleGraphLocationOnlyById({ vehicleId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery for details
       * 
       */

      // Lazy Fetch Hook
      //
      
      // Types
      type PickFetchVehicleGraphLocationOnlyByIdAsQueryFn = (query: FetchVehicleGraphLocationOnlyByIdAsQueryQuery | null | undefined) => VehicleGraphLocationOnlyFragment | null | undefined;
      type FetchVehicleGraphLocationOnlyByIdAsQueryLazyQueryFn = [(options?: QueryLazyOptions<FetchVehicleGraphLocationOnlyByIdAsQueryQueryVariables> | undefined) => void, FetchVehicleGraphLocationOnlyByIdAsQueryQueryResult]
      type FetchVehicleGraphLocationOnlyByIdAsQueryWrappedLazyQueryFn = ({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryLazyOptions<FetchVehicleGraphLocationOnlyByIdAsQueryQueryVariables>, "variables">; }) => void;
      export type FetchVehicleGraphLocationOnlyByIdAsQueryLazyQueryReturn = [FetchVehicleGraphLocationOnlyByIdAsQueryWrappedLazyQueryFn, FetchVehicleGraphLocationOnlyByIdAsQueryQueryResultEx];

      // Function
      function useFetchVehicleGraphLocationOnlyByIdAsQueryLazyQuery(options?: Omit<LazyQueryHookOptions<FetchVehicleGraphLocationOnlyByIdAsQueryQuery, FetchVehicleGraphLocationOnlyByIdAsQueryQueryVariables>, "query" | "variables">): FetchVehicleGraphLocationOnlyByIdAsQueryLazyQueryReturn {
        const lazyQuery: FetchVehicleGraphLocationOnlyByIdAsQueryLazyQueryFn = useLazyQuery<FetchVehicleGraphLocationOnlyByIdAsQueryQuery, FetchVehicleGraphLocationOnlyByIdAsQueryQueryVariables>(FetchVehicleGraphLocationOnlyByIdAsQueryDocument, options);
        const pickVehicleGraphLocationOnly: PickFetchVehicleGraphLocationOnlyByIdAsQueryFn = query => { return query && query.vehicle_by_pk; };
        const wrappedLazyQuery: FetchVehicleGraphLocationOnlyByIdAsQueryWrappedLazyQueryFn = ({ vehicleId, options }) => { return lazyQuery[0]({ variables: { vehicleId }, ...options }); };
        const returnVal: FetchVehicleGraphLocationOnlyByIdAsQueryLazyQueryReturn = [wrappedLazyQuery, { ...lazyQuery[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(lazyQuery[1].data) }];
        return returnVal;
      }
    

      // Fetch Collection Hook
      //

      // Types
      export type FetchVehicleGraphLocationOnlyAsQueryQueryResult = QueryResult<FetchVehicleGraphLocationOnlyAsQueryQuery, FetchVehicleGraphLocationOnlyAsQueryQueryVariables>;
      export type FetchVehicleGraphLocationOnlyAsQueryQueryResultEx = FetchVehicleGraphLocationOnlyAsQueryQueryResult & VehicleGraphLocationOnlyObjectsHookResultEx;

      // Function
      function useFetchVehicleGraphLocationOnlyAsQueryQuery(options: Omit<QueryHookOptions<FetchVehicleGraphLocationOnlyAsQueryQuery, FetchVehicleGraphLocationOnlyAsQueryQueryVariables>, "query">): FetchVehicleGraphLocationOnlyAsQueryQueryResultEx {
        const query:FetchVehicleGraphLocationOnlyAsQueryQueryResult = useQuery<FetchVehicleGraphLocationOnlyAsQueryQuery, FetchVehicleGraphLocationOnlyAsQueryQueryVariables>(FetchVehicleGraphLocationOnlyAsQueryDocument, options);
        return { ...query, objects: (query && query.data && query.data.vehicle) || [] };
      }
      
  
      // Lazy Fetch Collection Hook
      //

      // Types
      type PickFetchVehicleGraphLocationOnlyAsQueryFn = (query: FetchVehicleGraphLocationOnlyAsQueryQuery | null | undefined) => VehicleGraphLocationOnlyFragment[];
      type FetchVehicleGraphLocationOnlyAsQueryLazyQueryFn = [(options?: QueryLazyOptions<FetchVehicleGraphLocationOnlyAsQueryQueryVariables> | undefined) => void, FetchVehicleGraphLocationOnlyAsQueryQueryResult]
      type FetchVehicleGraphLocationOnlyAsQueryWrappedLazyQueryFn = (options?: QueryLazyOptions<FetchVehicleGraphLocationOnlyAsQueryQueryVariables>) => void;
      export type FetchVehicleGraphLocationOnlyAsQueryLazyQueryReturn = [FetchVehicleGraphLocationOnlyAsQueryWrappedLazyQueryFn, FetchVehicleGraphLocationOnlyAsQueryQueryResultEx];

      // Function
      function useFetchVehicleGraphLocationOnlyAsQueryLazyQuery(options?: Omit<LazyQueryHookOptions<FetchVehicleGraphLocationOnlyAsQueryQuery, FetchVehicleGraphLocationOnlyAsQueryQueryVariables>, "query">): FetchVehicleGraphLocationOnlyAsQueryLazyQueryReturn {
        const lazyQuery: FetchVehicleGraphLocationOnlyAsQueryLazyQueryFn = useLazyQuery<FetchVehicleGraphLocationOnlyAsQueryQuery, FetchVehicleGraphLocationOnlyAsQueryQueryVariables>(FetchVehicleGraphLocationOnlyAsQueryDocument, options);
        const pickObjects: PickFetchVehicleGraphLocationOnlyAsQueryFn = (query: FetchVehicleGraphLocationOnlyAsQueryQuery | null | undefined) => { return (query && query.vehicle) || []; };
        const wrappedLazyQuery: FetchVehicleGraphLocationOnlyAsQueryWrappedLazyQueryFn = (options) => { return lazyQuery[0]( options ); };
        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }
    

  // Insert Hooks
  //

  // Types
  type InsertVehicleGraphLocationOnlyMutationResult = FetchResult<InsertVehicleGraphLocationOnlyMutation, Record<string, any>, Record<string, any>>;
  export type InsertVehicleGraphLocationOnlyMutationResultEx = InsertVehicleGraphLocationOnlyMutationResult & VehicleGraphLocationOnlyByIdHookResultEx;

  type PickInsertVehicleGraphLocationOnlyFn = (mutation: InsertVehicleGraphLocationOnlyMutation | null | undefined) => VehicleGraphLocationOnlyFragment | null | undefined;
  type InsertVehicleGraphLocationOnlyLazyMutationFn = MutationTuple<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>;
  type InsertVehicleGraphLocationOnlyWrappedLazyMutationFn = ({ vehicle, autoOptimisticResponse, options }: { vehicle: Vehicle_Insert_Input; autoOptimisticResponse?:boolean, options?: Omit<MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, "variables">; }) => Promise<InsertVehicleGraphLocationOnlyMutationResultEx>;
  export type InsertVehicleGraphLocationOnlyLazyMutationReturn = [InsertVehicleGraphLocationOnlyWrappedLazyMutationFn, InsertVehicleGraphLocationOnlyMutationResultEx];

  // Function
  function useInsertVehicleGraphLocationOnly(options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, "mutation" | "variables">): InsertVehicleGraphLocationOnlyLazyMutationReturn {
    const lazyMutation: InsertVehicleGraphLocationOnlyLazyMutationFn = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>(InsertVehicleGraphLocationOnlyDocument, options);
    const pickVehicleGraphLocationOnly: PickInsertVehicleGraphLocationOnlyFn = (mutation) => { return mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning && mutation.insert_vehicle!.returning[0]; };

    const wrappedLazyMutation: InsertVehicleGraphLocationOnlyWrappedLazyMutationFn = async ({ vehicle, autoOptimisticResponse, options }) => {
      const mutationOptions:MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables> = { variables: { objects: [vehicle] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!vehicle.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`);
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleGraphLocationOnlyMutation>({ operationType: 'insert', entityName:'vehicle', objects:[vehicle as Vehicle_Insert_Input & ObjectWithId] 
      }); }

      const fetchResult = await lazyMutation[0](mutationOptions);
      
      return { ...fetchResult, vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(lazyMutation[1].data) }];
  }
  

  //
  //

  // Types
  type InsertVehicleGraphLocationOnlyWithOnConflictLazyMutationFn = MutationTuple<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables>;
  type InsertVehicleGraphLocationOnlyWithOnConflictWrappedLazyMutationFn = ({ vehicle, onConflict, autoOptimisticResponse, options }: { vehicle: Vehicle_Insert_Input; onConflict: Vehicle_On_Conflict, autoOptimisticResponse?:boolean; options?: Omit<MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables>, "variables">; }) => Promise<InsertVehicleGraphLocationOnlyMutationResultEx>;
  export type InsertVehicleGraphLocationOnlyWithOnConflictLazyMutationReturn = [InsertVehicleGraphLocationOnlyWithOnConflictWrappedLazyMutationFn, InsertVehicleGraphLocationOnlyMutationResultEx];

  // Function
  function useInsertVehicleGraphLocationOnlyWithOnConflict( options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, "mutation" | "variables"> ): InsertVehicleGraphLocationOnlyWithOnConflictLazyMutationReturn {
    const lazyMutation: InsertVehicleGraphLocationOnlyWithOnConflictLazyMutationFn = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables>(InsertVehicleGraphLocationOnlyWithOnConflictDocument, options);
    const pickVehicleGraphLocationOnly: PickInsertVehicleGraphLocationOnlyFn = (mutation: InsertVehicleGraphLocationOnlyMutation | null | undefined) => { return mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning && mutation.insert_vehicle!.returning[0]; };

    const wrappedLazyMutation:InsertVehicleGraphLocationOnlyWithOnConflictWrappedLazyMutationFn = async ({ vehicle, onConflict, autoOptimisticResponse, options }) => {
      const mutationOptions:MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables> = { variables: { objects: [vehicle], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!vehicle.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`);
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleGraphLocationOnlyMutation>({ operationType: 'insert', entityName:'vehicle', objects:[vehicle as Vehicle_Insert_Input & ObjectWithId] }); 
      }

      const fetchResult = await lazyMutation[0](mutationOptions);
      
      return { ...fetchResult, vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(lazyMutation[1].data) }];
  }
  

  // Types
  type InsertVehicleGraphLocationOnlyObjectsMutationResult = FetchResult<InsertVehicleGraphLocationOnlyMutation, Record<string, any>, Record<string, any>>;
  export type InsertVehicleGraphLocationOnlyObjectsMutationResultEx = InsertVehicleGraphLocationOnlyMutationResult & VehicleGraphLocationOnlyObjectsHookResultEx;

  type PickInsertVehicleGraphLocationOnlyObjectsFn = (mutation: InsertVehicleGraphLocationOnlyMutation | null | undefined) => VehicleGraphLocationOnlyFragment[];
  type InsertVehicleGraphLocationOnlyObjectsLazyMutationFn = MutationTuple<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>;
  type InsertVehicleGraphLocationOnlyObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>) => Promise<InsertVehicleGraphLocationOnlyObjectsMutationResultEx>;
  export type InsertVehicleGraphLocationOnlyObjectsLazyMutationReturn = [InsertVehicleGraphLocationOnlyObjectsWrappedLazyMutationFn, InsertVehicleGraphLocationOnlyObjectsMutationResultEx];

  // Function
  function useInsertVehicleGraphLocationOnlyObjects(options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, "mutation">): InsertVehicleGraphLocationOnlyObjectsLazyMutationReturn {
    const lazyMutation: InsertVehicleGraphLocationOnlyObjectsLazyMutationFn = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>(InsertVehicleGraphLocationOnlyDocument, options);
    const pickObjects: PickInsertVehicleGraphLocationOnlyObjectsFn = (mutation: InsertVehicleGraphLocationOnlyMutation | null | undefined) => { return (mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning) || []; };

    const wrappedLazyMutation: InsertVehicleGraphLocationOnlyObjectsWrappedLazyMutationFn = async ( options ) => {
      const fetchResult: InsertVehicleGraphLocationOnlyObjectsMutationResult = await lazyMutation[0](options);
      return { ...fetchResult, objects: pickObjects(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
  }
  

    // Update Hooks
    //
    
    type UpdateVehicleGraphLocationOnlyByIdMutationResult = FetchResult<UpdateVehicleGraphLocationOnlyByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleGraphLocationOnlyByIdMutationResultEx = UpdateVehicleGraphLocationOnlyByIdMutationResult & VehicleGraphLocationOnlyByIdHookResultEx;

    type PickUpdateVehicleGraphLocationOnlyByIdFn = (mutation: UpdateVehicleGraphLocationOnlyByIdMutation | null | undefined) => VehicleGraphLocationOnlyFragment | null | undefined;
    type UpdateVehicleGraphLocationOnlyByIdLazyMutationFn = MutationTuple<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>;
    type UpdateVehicleGraphLocationOnlyByIdWrappedLazyMutationFn = ({ vehicleId, set, autoOptimisticResponse, options }: { vehicleId: string; set: Vehicle_Set_Input; autoOptimisticResponse?: boolean; options?: Omit<MutationFunctionOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, "variables">; }) => Promise<UpdateVehicleGraphLocationOnlyByIdMutationResultEx>;
    export type UpdateVehicleGraphLocationOnlyByIdLazyMutationReturn = [UpdateVehicleGraphLocationOnlyByIdWrappedLazyMutationFn, UpdateVehicleGraphLocationOnlyByIdMutationResultEx];

    function useUpdateVehicleGraphLocationOnlyById(options?: Omit<MutationHookOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, "mutation" | "variables">): UpdateVehicleGraphLocationOnlyByIdLazyMutationReturn {
      const lazyMutation: UpdateVehicleGraphLocationOnlyByIdLazyMutationFn = useMutation<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>(UpdateVehicleGraphLocationOnlyByIdDocument, options);

      const pickVehicleGraphLocationOnly: PickUpdateVehicleGraphLocationOnlyByIdFn = (mutation) => { return mutation && mutation.update_vehicle && mutation.update_vehicle!.returning && mutation.update_vehicle!.returning[0]; };

      const wrappedLazyMutation: UpdateVehicleGraphLocationOnlyByIdWrappedLazyMutationFn = async ({ vehicleId, set, autoOptimisticResponse, options }) => {
        const mutationOptions: MutationFunctionOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables> = { variables: { id: vehicleId, set }, ...options };
        if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateVehicleGraphLocationOnlyByIdMutation>({ operationType: 'update', entityName:'vehicle', objects:[{ id:vehicleId, ...set }] });
        }

        const fetchResult: UpdateVehicleGraphLocationOnlyByIdMutationResult = await lazyMutation[0]({ variables: { id: vehicleId, set }, ...mutationOptions });
        return { ...fetchResult, vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(lazyMutation[1].data) }];
    }
  

    //
    //

    // Types
    type UpdateVehicleGraphLocationOnlyObjectsMutationResult = FetchResult<UpdateVehicleGraphLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleGraphLocationOnlyObjectsMutationResultEx = UpdateVehicleGraphLocationOnlyObjectsMutationResult & VehicleGraphLocationOnlyObjectsHookResultEx;

    // Function
    type PickUpdateVehicleGraphLocationOnlyObjectsFn = (mutation: UpdateVehicleGraphLocationOnlyMutation | null | undefined) => VehicleGraphLocationOnlyFragment[];
    type UpdateVehicleGraphLocationOnlyObjectsLazyMutationFn = MutationTuple<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>;
    type UpdateVehicleGraphLocationOnlyObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>) => Promise<UpdateVehicleGraphLocationOnlyObjectsMutationResultEx>;
    export type UpdateVehicleGraphLocationOnlyObjectsLazyMutationReturn = [UpdateVehicleGraphLocationOnlyObjectsWrappedLazyMutationFn, UpdateVehicleGraphLocationOnlyObjectsMutationResultEx];

    function useUpdateVehicleGraphLocationOnlyObjects(options?: Omit<MutationHookOptions<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>, "mutation">): UpdateVehicleGraphLocationOnlyObjectsLazyMutationReturn {
      const lazyMutation: UpdateVehicleGraphLocationOnlyObjectsLazyMutationFn = useMutation<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>(UpdateVehicleGraphLocationOnlyDocument, options);

      const pickObjects: PickUpdateVehicleGraphLocationOnlyObjectsFn = (mutation: UpdateVehicleGraphLocationOnlyMutation | null | undefined) => {
        return (mutation && mutation.update_vehicle && mutation.update_vehicle!.returning) || [];
      };

      const wrappedLazyMutation: UpdateVehicleGraphLocationOnlyObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: UpdateVehicleGraphLocationOnlyObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }
  

    // VehicleGraphLocationOnly Fragment Hooks Object
    //------------------------------------------------

    export const VehicleGraphLocationOnlyFragmentGQLHooks = {
      useFetchByIdQuery: useFetchVehicleGraphLocationOnlyByIdAsQueryQuery,
      useFetchByIdLazyQuery: useFetchVehicleGraphLocationOnlyByIdAsQueryLazyQuery,
      useFetchObjectsQuery: useFetchVehicleGraphLocationOnlyAsQueryQuery,
      useFetchObjectsLazyQuery: useFetchVehicleGraphLocationOnlyAsQueryLazyQuery,
      useInsert: useInsertVehicleGraphLocationOnly,
      useInsertWithOnConflict: useInsertVehicleGraphLocationOnlyWithOnConflict,
      useInsertObjects: useInsertVehicleGraphLocationOnlyObjects,
      useUpdateById: useUpdateVehicleGraphLocationOnlyById,
      useUpdateObjects: useUpdateVehicleGraphLocationOnlyObjects,
    }
  

    // dogs REACT
    //------------------------------------------------

    export type DogModelByIdHookResultEx = { dogModel:DogModelFragment | null | undefined };
    export type DogModelObjectsHookResultEx = { objects:DogModelFragment[] };

  

      // Fetch Hooks
      //
  
      /**
       * __useFetchDogModelByIdAsQueryQuery__
       *
       * To run a query within a React component, call `useDogModelByIdQuery`
       * When your component renders, `useDogModelByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, dogModel } = useFetchDogModelByIdAsQueryQuery({ dogsId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#usequery for details
       * 
       */

        // Fetch Hook
        //

        // Types
        type FetchDogModelByIdAsQueryQueryResult = QueryResult<FetchDogModelByIdAsQueryQuery, FetchDogModelByIdAsQueryQueryVariables>;
        export type FetchDogModelByIdAsQueryQueryResultEx = FetchDogModelByIdAsQueryQueryResult & DogModelByIdHookResultEx;

        // Function
        function useFetchDogModelByIdAsQueryQuery({ dogsId, options }: { dogsId: string; options?: Omit<QueryHookOptions<FetchDogModelByIdAsQueryQuery, FetchDogModelByIdAsQueryQueryVariables>, "query" | "variables">; }): FetchDogModelByIdAsQueryQueryResultEx {
          const query: FetchDogModelByIdAsQueryQueryResult = useQuery<FetchDogModelByIdAsQueryQuery, FetchDogModelByIdAsQueryQueryVariables>(FetchDogModelByIdAsQueryDocument, { variables: { dogsId }, ...options });
          return { ...query, dogModel: query && query.data && query.data.dogs_by_pk };
        }
    

      /**
       * __useFetchDogModelByIdAsQueryLazyQuery__
       * 
       * @example
       * const [fetchDogModelById, { called, loading, error, dogModel }] = useFetchDogModelByIdAsQuery();
       * fetchDogModelById({ dogsId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery for details
       * 
       */

      // Lazy Fetch Hook
      //
      
      // Types
      type PickFetchDogModelByIdAsQueryFn = (query: FetchDogModelByIdAsQueryQuery | null | undefined) => DogModelFragment | null | undefined;
      type FetchDogModelByIdAsQueryLazyQueryFn = [(options?: QueryLazyOptions<FetchDogModelByIdAsQueryQueryVariables> | undefined) => void, FetchDogModelByIdAsQueryQueryResult]
      type FetchDogModelByIdAsQueryWrappedLazyQueryFn = ({ dogsId, options }: { dogsId: string; options?: Omit<QueryLazyOptions<FetchDogModelByIdAsQueryQueryVariables>, "variables">; }) => void;
      export type FetchDogModelByIdAsQueryLazyQueryReturn = [FetchDogModelByIdAsQueryWrappedLazyQueryFn, FetchDogModelByIdAsQueryQueryResultEx];

      // Function
      function useFetchDogModelByIdAsQueryLazyQuery(options?: Omit<LazyQueryHookOptions<FetchDogModelByIdAsQueryQuery, FetchDogModelByIdAsQueryQueryVariables>, "query" | "variables">): FetchDogModelByIdAsQueryLazyQueryReturn {
        const lazyQuery: FetchDogModelByIdAsQueryLazyQueryFn = useLazyQuery<FetchDogModelByIdAsQueryQuery, FetchDogModelByIdAsQueryQueryVariables>(FetchDogModelByIdAsQueryDocument, options);
        const pickDogModel: PickFetchDogModelByIdAsQueryFn = query => { return query && query.dogs_by_pk; };
        const wrappedLazyQuery: FetchDogModelByIdAsQueryWrappedLazyQueryFn = ({ dogsId, options }) => { return lazyQuery[0]({ variables: { dogsId }, ...options }); };
        const returnVal: FetchDogModelByIdAsQueryLazyQueryReturn = [wrappedLazyQuery, { ...lazyQuery[1], dogModel: pickDogModel(lazyQuery[1].data) }];
        return returnVal;
      }
    

      // Fetch Collection Hook
      //

      // Types
      export type FetchDogModelAsQueryQueryResult = QueryResult<FetchDogModelAsQueryQuery, FetchDogModelAsQueryQueryVariables>;
      export type FetchDogModelAsQueryQueryResultEx = FetchDogModelAsQueryQueryResult & DogModelObjectsHookResultEx;

      // Function
      function useFetchDogModelAsQueryQuery(options: Omit<QueryHookOptions<FetchDogModelAsQueryQuery, FetchDogModelAsQueryQueryVariables>, "query">): FetchDogModelAsQueryQueryResultEx {
        const query:FetchDogModelAsQueryQueryResult = useQuery<FetchDogModelAsQueryQuery, FetchDogModelAsQueryQueryVariables>(FetchDogModelAsQueryDocument, options);
        return { ...query, objects: (query && query.data && query.data.dogs) || [] };
      }
      
  
      // Lazy Fetch Collection Hook
      //

      // Types
      type PickFetchDogModelAsQueryFn = (query: FetchDogModelAsQueryQuery | null | undefined) => DogModelFragment[];
      type FetchDogModelAsQueryLazyQueryFn = [(options?: QueryLazyOptions<FetchDogModelAsQueryQueryVariables> | undefined) => void, FetchDogModelAsQueryQueryResult]
      type FetchDogModelAsQueryWrappedLazyQueryFn = (options?: QueryLazyOptions<FetchDogModelAsQueryQueryVariables>) => void;
      export type FetchDogModelAsQueryLazyQueryReturn = [FetchDogModelAsQueryWrappedLazyQueryFn, FetchDogModelAsQueryQueryResultEx];

      // Function
      function useFetchDogModelAsQueryLazyQuery(options?: Omit<LazyQueryHookOptions<FetchDogModelAsQueryQuery, FetchDogModelAsQueryQueryVariables>, "query">): FetchDogModelAsQueryLazyQueryReturn {
        const lazyQuery: FetchDogModelAsQueryLazyQueryFn = useLazyQuery<FetchDogModelAsQueryQuery, FetchDogModelAsQueryQueryVariables>(FetchDogModelAsQueryDocument, options);
        const pickObjects: PickFetchDogModelAsQueryFn = (query: FetchDogModelAsQueryQuery | null | undefined) => { return (query && query.dogs) || []; };
        const wrappedLazyQuery: FetchDogModelAsQueryWrappedLazyQueryFn = (options) => { return lazyQuery[0]( options ); };
        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }
    

  // Insert Hooks
  //

  // Types
  type InsertDogModelMutationResult = FetchResult<InsertDogModelMutation, Record<string, any>, Record<string, any>>;
  export type InsertDogModelMutationResultEx = InsertDogModelMutationResult & DogModelByIdHookResultEx;

  type PickInsertDogModelFn = (mutation: InsertDogModelMutation | null | undefined) => DogModelFragment | null | undefined;
  type InsertDogModelLazyMutationFn = MutationTuple<InsertDogModelMutation, InsertDogModelMutationVariables>;
  type InsertDogModelWrappedLazyMutationFn = ({ dogs, autoOptimisticResponse, options }: { dogs: Dogs_Insert_Input; autoOptimisticResponse?:boolean, options?: Omit<MutationFunctionOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, "variables">; }) => Promise<InsertDogModelMutationResultEx>;
  export type InsertDogModelLazyMutationReturn = [InsertDogModelWrappedLazyMutationFn, InsertDogModelMutationResultEx];

  // Function
  function useInsertDogModel(options?: Omit<MutationHookOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, "mutation" | "variables">): InsertDogModelLazyMutationReturn {
    const lazyMutation: InsertDogModelLazyMutationFn = useMutation<InsertDogModelMutation, InsertDogModelMutationVariables>(InsertDogModelDocument, options);
    const pickDogModel: PickInsertDogModelFn = (mutation) => { return mutation && mutation.insert_dogs && mutation.insert_dogs!.returning && mutation.insert_dogs!.returning[0]; };

    const wrappedLazyMutation: InsertDogModelWrappedLazyMutationFn = async ({ dogs, autoOptimisticResponse, options }) => {
      const mutationOptions:MutationFunctionOptions<InsertDogModelMutation, InsertDogModelMutationVariables> = { variables: { objects: [dogs] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!dogs.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'dogs'`);
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertDogModelMutation>({ operationType: 'insert', entityName:'dogs', objects:[dogs as Dogs_Insert_Input & ObjectWithId] 
      }); }

      const fetchResult = await lazyMutation[0](mutationOptions);
      
      return { ...fetchResult, dogModel: pickDogModel(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], dogModel: pickDogModel(lazyMutation[1].data) }];
  }
  

  //
  //

  // Types
  type InsertDogModelWithOnConflictLazyMutationFn = MutationTuple<InsertDogModelMutation, InsertDogModelWithOnConflictMutationVariables>;
  type InsertDogModelWithOnConflictWrappedLazyMutationFn = ({ dogs, onConflict, autoOptimisticResponse, options }: { dogs: Dogs_Insert_Input; onConflict: Dogs_On_Conflict, autoOptimisticResponse?:boolean; options?: Omit<MutationFunctionOptions<InsertDogModelMutation, InsertDogModelWithOnConflictMutationVariables>, "variables">; }) => Promise<InsertDogModelMutationResultEx>;
  export type InsertDogModelWithOnConflictLazyMutationReturn = [InsertDogModelWithOnConflictWrappedLazyMutationFn, InsertDogModelMutationResultEx];

  // Function
  function useInsertDogModelWithOnConflict( options?: Omit<MutationHookOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, "mutation" | "variables"> ): InsertDogModelWithOnConflictLazyMutationReturn {
    const lazyMutation: InsertDogModelWithOnConflictLazyMutationFn = useMutation<InsertDogModelMutation, InsertDogModelWithOnConflictMutationVariables>(InsertDogModelWithOnConflictDocument, options);
    const pickDogModel: PickInsertDogModelFn = (mutation: InsertDogModelMutation | null | undefined) => { return mutation && mutation.insert_dogs && mutation.insert_dogs!.returning && mutation.insert_dogs!.returning[0]; };

    const wrappedLazyMutation:InsertDogModelWithOnConflictWrappedLazyMutationFn = async ({ dogs, onConflict, autoOptimisticResponse, options }) => {
      const mutationOptions:MutationFunctionOptions<InsertDogModelMutation, InsertDogModelWithOnConflictMutationVariables> = { variables: { objects: [dogs], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!dogs.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'dogs'`);
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertDogModelMutation>({ operationType: 'insert', entityName:'dogs', objects:[dogs as Dogs_Insert_Input & ObjectWithId] }); 
      }

      const fetchResult = await lazyMutation[0](mutationOptions);
      
      return { ...fetchResult, dogModel: pickDogModel(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], dogModel: pickDogModel(lazyMutation[1].data) }];
  }
  

  // Types
  type InsertDogModelObjectsMutationResult = FetchResult<InsertDogModelMutation, Record<string, any>, Record<string, any>>;
  export type InsertDogModelObjectsMutationResultEx = InsertDogModelMutationResult & DogModelObjectsHookResultEx;

  type PickInsertDogModelObjectsFn = (mutation: InsertDogModelMutation | null | undefined) => DogModelFragment[];
  type InsertDogModelObjectsLazyMutationFn = MutationTuple<InsertDogModelMutation, InsertDogModelMutationVariables>;
  type InsertDogModelObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<InsertDogModelMutation, InsertDogModelMutationVariables>) => Promise<InsertDogModelObjectsMutationResultEx>;
  export type InsertDogModelObjectsLazyMutationReturn = [InsertDogModelObjectsWrappedLazyMutationFn, InsertDogModelObjectsMutationResultEx];

  // Function
  function useInsertDogModelObjects(options?: Omit<MutationHookOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, "mutation">): InsertDogModelObjectsLazyMutationReturn {
    const lazyMutation: InsertDogModelObjectsLazyMutationFn = useMutation<InsertDogModelMutation, InsertDogModelMutationVariables>(InsertDogModelDocument, options);
    const pickObjects: PickInsertDogModelObjectsFn = (mutation: InsertDogModelMutation | null | undefined) => { return (mutation && mutation.insert_dogs && mutation.insert_dogs!.returning) || []; };

    const wrappedLazyMutation: InsertDogModelObjectsWrappedLazyMutationFn = async ( options ) => {
      const fetchResult: InsertDogModelObjectsMutationResult = await lazyMutation[0](options);
      return { ...fetchResult, objects: pickObjects(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
  }
  

    // Update Hooks
    //
    
    type UpdateDogModelByIdMutationResult = FetchResult<UpdateDogModelByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateDogModelByIdMutationResultEx = UpdateDogModelByIdMutationResult & DogModelByIdHookResultEx;

    type PickUpdateDogModelByIdFn = (mutation: UpdateDogModelByIdMutation | null | undefined) => DogModelFragment | null | undefined;
    type UpdateDogModelByIdLazyMutationFn = MutationTuple<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>;
    type UpdateDogModelByIdWrappedLazyMutationFn = ({ dogsId, set, autoOptimisticResponse, options }: { dogsId: string; set: Dogs_Set_Input; autoOptimisticResponse?: boolean; options?: Omit<MutationFunctionOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>, "variables">; }) => Promise<UpdateDogModelByIdMutationResultEx>;
    export type UpdateDogModelByIdLazyMutationReturn = [UpdateDogModelByIdWrappedLazyMutationFn, UpdateDogModelByIdMutationResultEx];

    function useUpdateDogModelById(options?: Omit<MutationHookOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>, "mutation" | "variables">): UpdateDogModelByIdLazyMutationReturn {
      const lazyMutation: UpdateDogModelByIdLazyMutationFn = useMutation<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>(UpdateDogModelByIdDocument, options);

      const pickDogModel: PickUpdateDogModelByIdFn = (mutation) => { return mutation && mutation.update_dogs && mutation.update_dogs!.returning && mutation.update_dogs!.returning[0]; };

      const wrappedLazyMutation: UpdateDogModelByIdWrappedLazyMutationFn = async ({ dogsId, set, autoOptimisticResponse, options }) => {
        const mutationOptions: MutationFunctionOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables> = { variables: { id: dogsId, set }, ...options };
        if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateDogModelByIdMutation>({ operationType: 'update', entityName:'dogs', objects:[{ id:dogsId, ...set }] });
        }

        const fetchResult: UpdateDogModelByIdMutationResult = await lazyMutation[0]({ variables: { id: dogsId, set }, ...mutationOptions });
        return { ...fetchResult, dogModel: pickDogModel(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], dogModel: pickDogModel(lazyMutation[1].data) }];
    }
  

    //
    //

    // Types
    type UpdateDogModelObjectsMutationResult = FetchResult<UpdateDogModelMutation, Record<string, any>, Record<string, any>>;
    export type UpdateDogModelObjectsMutationResultEx = UpdateDogModelObjectsMutationResult & DogModelObjectsHookResultEx;

    // Function
    type PickUpdateDogModelObjectsFn = (mutation: UpdateDogModelMutation | null | undefined) => DogModelFragment[];
    type UpdateDogModelObjectsLazyMutationFn = MutationTuple<UpdateDogModelMutation, UpdateDogModelMutationVariables>;
    type UpdateDogModelObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<UpdateDogModelMutation, UpdateDogModelMutationVariables>) => Promise<UpdateDogModelObjectsMutationResultEx>;
    export type UpdateDogModelObjectsLazyMutationReturn = [UpdateDogModelObjectsWrappedLazyMutationFn, UpdateDogModelObjectsMutationResultEx];

    function useUpdateDogModelObjects(options?: Omit<MutationHookOptions<UpdateDogModelMutation, UpdateDogModelMutationVariables>, "mutation">): UpdateDogModelObjectsLazyMutationReturn {
      const lazyMutation: UpdateDogModelObjectsLazyMutationFn = useMutation<UpdateDogModelMutation, UpdateDogModelMutationVariables>(UpdateDogModelDocument, options);

      const pickObjects: PickUpdateDogModelObjectsFn = (mutation: UpdateDogModelMutation | null | undefined) => {
        return (mutation && mutation.update_dogs && mutation.update_dogs!.returning) || [];
      };

      const wrappedLazyMutation: UpdateDogModelObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: UpdateDogModelObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }
  

    // Delete Hooks
    //

    // Types
    type RemoveDogsModelByIdFetchResult = FetchResult<RemoveDogsModelByIdMutation, Record<string, any>, Record<string, any>>;
    export type RemoveDogsModelByIdMutationResultEx = RemoveDogsModelByIdFetchResult & RemoveEntitiesQueryHookResultEx;

    // Function
    type PickRemoveDogsModelFn = (mutation: RemoveDogsModelByIdMutation | null | undefined) => number;
    type RemoveDogsModelLazyMutationFn = MutationTuple<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>;
    type RemoveDogsModelWrappedLazyMutationFn = ({ dogsId, autoOptimisticResponse, options }: { dogsId: string; autoOptimisticResponse?:boolean, options?: Omit<MutationFunctionOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>, "variables">; }) => Promise<RemoveDogsModelByIdMutationResultEx>;
    export type RemoveDogsModelLazyMutationReturn = [RemoveDogsModelWrappedLazyMutationFn, RemoveDogsModelByIdMutationResultEx];

    function useRemoveDogsModelById(options?: Omit<MutationHookOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>, "mutation" | "variables">) {
      const lazyMutation: RemoveDogsModelLazyMutationFn = useMutation<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>(RemoveDogsModelByIdDocument, options);
      
      const pickAffectedRows: PickRemoveDogsModelFn = (mutation: RemoveDogsModelByIdMutation | null | undefined) => {
        return (mutation && mutation.delete_dogs && mutation.delete_dogs!.affected_rows) || 0;
      };

      const wrappedLazyMutation: RemoveDogsModelWrappedLazyMutationFn = async ({ dogsId, autoOptimisticResponse, options }) => {
        const mutationOptions:MutationFunctionOptions<RemoveDogsModelMutation, RemoveDogsModelByIdMutationVariables> = { variables: { id: dogsId }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<RemoveDogsModelMutation>({ operationType: 'delete', entityName:'dogs', objects:[{ id:dogsId }] });        }
        if((!options || !options.update)){ mutationOptions.update = generateUpdateFunctionForMutation<RemoveDogsModelByIdMutation>({ operationType: 'delete', entityName:'dogs', entityId:dogsId }); }
        
        const fetchResult: RemoveDogsModelByIdFetchResult = await lazyMutation[0](mutationOptions);
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }] as [
        typeof wrappedLazyMutation,
        typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }
      ];
    }
  

    //
    //

    // Types
    type RemoveDogsModelObjectsMutationResult = FetchResult<RemoveDogsModelMutation, Record<string, any>, Record<string, any>>;
    export type RemoveDogsModelObjectsMutationResultEx = RemoveDogsModelObjectsMutationResult & RemoveEntitiesQueryHookResultEx;

    // Function
    type PickRemoveDogsModelObjectsFn = (mutation: RemoveDogsModelMutation | null | undefined) => number;
    type RemoveDogsModelObjectsLazyMutationFn = MutationTuple<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>;
    type RemoveDogsModelObjectsWrappedLazyMutationFn = (options: MutationFunctionOptions<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>) => Promise<RemoveDogsModelObjectsMutationResultEx>;
    export type RemoveDogsModelObjectsLazyMutationReturn = [RemoveDogsModelObjectsWrappedLazyMutationFn, RemoveDogsModelObjectsMutationResultEx];

    function useRemoveDogsModelObjects(options?: Omit<MutationHookOptions<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>, "mutation">): RemoveDogsModelObjectsLazyMutationReturn {
      const lazyMutation = useMutation<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>(RemoveDogsModelDocument, options);

      const pickAffectedRows: PickRemoveDogsModelObjectsFn = (mutation: RemoveDogsModelMutation | null | undefined) => {
        return (mutation && mutation.delete_dogs && mutation.delete_dogs!.affected_rows) || 0;
      };

      const wrappedLazyMutation: RemoveDogsModelObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: RemoveDogsModelObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }];
    }
  

    // DogModel Fragment Hooks Object
    //------------------------------------------------

    export const DogModelFragmentGQLHooks = {
      useFetchByIdQuery: useFetchDogModelByIdAsQueryQuery,
      useFetchByIdLazyQuery: useFetchDogModelByIdAsQueryLazyQuery,
      useFetchObjectsQuery: useFetchDogModelAsQueryQuery,
      useFetchObjectsLazyQuery: useFetchDogModelAsQueryLazyQuery,
      useInsert: useInsertDogModel,
      useInsertWithOnConflict: useInsertDogModelWithOnConflict,
      useInsertObjects: useInsertDogModelObjects,
      useUpdateById: useUpdateDogModelById,
      useUpdateObjects: useUpdateDogModelObjects,
    }
  

    // dogs Model Hooks Object
    //------------------------------------------------

    export const DogsModelGQLHooks = {
      useRemoveById: useRemoveDogsModelById,
      useRemoveObjects: useRemoveDogsModelObjects
    }
  

    // COMBINED HOOKS OBJECT
    //------------------------------------------------
    export const GQLHooks = {
      Fragments: {
        VehicleGraph: VehicleGraphFragmentGQLHooks,
        VehicleGraphLocationOnly: VehicleGraphLocationOnlyFragmentGQLHooks,
        DogModel: DogModelFragmentGQLHooks
      },
      Models: {
        VehicleModel: VehicleModelGQLHooks,
        DogsModel: DogsModelGQLHooks
      }
    }
  