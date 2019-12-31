import { VehicleGraphFragment } from '../';
import { FetchVehicleGraphByIdQuery } from '../';
import { FetchVehicleGraphByIdQueryVariables } from '../';
import { FetchVehicleGraphByIdDocument } from '../';
import { FetchVehicleGraphQuery } from '../';
import { FetchVehicleGraphDocument } from '../';
import { FetchVehicleGraphQueryVariables } from '../';
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
import { FetchVehicleGraphLocationOnlyByIdQuery } from '../';
import { FetchVehicleGraphLocationOnlyByIdQueryVariables } from '../';
import { FetchVehicleGraphLocationOnlyByIdDocument } from '../';
import { FetchVehicleGraphLocationOnlyQuery } from '../';
import { FetchVehicleGraphLocationOnlyDocument } from '../';
import { FetchVehicleGraphLocationOnlyQueryVariables } from '../';
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
import { FetchDogModelByIdQuery } from '../';
import { FetchDogModelByIdQueryVariables } from '../';
import { FetchDogModelByIdDocument } from '../';
import { FetchDogModelQuery } from '../';
import { FetchDogModelDocument } from '../';
import { FetchDogModelQueryVariables } from '../';
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
  import { QueryHookOptions, useQuery, LazyQueryHookOptions, useLazyQuery, MutationHookOptions, useMutation, QueryLazyOptions, MutationFunctionOptions, QueryResult, MutationTuple, FetchResult } from '@apollo/client'"}'

    // GLOBAL TYPES
    //------------------------------------------------
    export type RemoveEntitiesQueryHookResultEx = { affected_rows:number };
  

    // UTILITY METHODS
    //------------------------------------------------
  

    
    // Optimistic response generation utility method
    //
    function generateOptimisticResponseForMutationById<T>(operationType: "update", entityName: string, entityId: any, setObject: object): T {
      return ({
        __typename: "mutation_root",
        [`${operationType}_${entityName}`]: {
          affected_rows: 1,
          returning: [
            {
              id: entityId,
              __typename: entityName,
              ...setObject
            }
          ],
          __typename: `${entityName}_mutation_response`
        }
      } as unknown) as T;
    }
  

    // vehicle REACT
    //------------------------------------------------

    export type VehicleGraphByIdHookResultEx = { vehicleGraph:VehicleGraphFragment | null | undefined };
    export type VehicleGraphObjectsHookResultEx = { objects:VehicleGraphFragment[] };

  

      // Fetch Hooks
      //
  
      /**
       * __useFetchVehicleGraphByIdQuery__
       *
       * To run a query within a React component, call `useVehicleGraphByIdQuery`
       * When your component renders, `useVehicleGraphByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, vehicleGraph } = useFetchVehicleGraphByIdQuery({ vehicleId:<value> });
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
    

      /**
       * __useFetchVehicleGraphByIdLazyQuery__
       * 
       * @example
       * const [fetchVehicleGraphById, { called, loading, error, vehicleGraph }] = useFetchVehicleGraphById();
       * fetchVehicleGraphById({ vehicleId:<value> });
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
  

    // Delete Hooks
    //

    // Types
    type RemoveVehicleModelByIdFetchResult = FetchResult<RemoveVehicleModelByIdMutation, Record<string, any>, Record<string, any>>;
    export type RemoveVehicleModelByIdMutationResultEx = RemoveVehicleModelByIdFetchResult & RemoveEntitiesQueryHookResultEx;

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
  

    // vehicle REACT
    //------------------------------------------------

    export type VehicleGraphLocationOnlyByIdHookResultEx = { vehicleGraphLocationOnly:VehicleGraphLocationOnlyFragment | null | undefined };
    export type VehicleGraphLocationOnlyObjectsHookResultEx = { objects:VehicleGraphLocationOnlyFragment[] };

  

      // Fetch Hooks
      //
  
      /**
       * __useFetchVehicleGraphLocationOnlyByIdQuery__
       *
       * To run a query within a React component, call `useVehicleGraphLocationOnlyByIdQuery`
       * When your component renders, `useVehicleGraphLocationOnlyByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, vehicleGraphLocationOnly } = useFetchVehicleGraphLocationOnlyByIdQuery({ vehicleId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#usequery for details
       * 
       */

        // Fetch Hook
        //

        // Types
        type FetchVehicleGraphLocationOnlyByIdQueryResult = QueryResult<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>;
        export type FetchVehicleGraphLocationOnlyByIdQueryResultEx = FetchVehicleGraphLocationOnlyByIdQueryResult & VehicleGraphLocationOnlyByIdHookResultEx;

        // Function
        export function useFetchVehicleGraphLocationOnlyByIdQuery({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryHookOptions<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>, "query" | "variables">; }): FetchVehicleGraphLocationOnlyByIdQueryResultEx {
          const query: FetchVehicleGraphLocationOnlyByIdQueryResult = useQuery<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>(FetchVehicleGraphLocationOnlyByIdDocument, { variables: { vehicleId }, ...options });
          return { ...query, vehicleGraphLocationOnly: query && query.data && query.data.vehicle_by_pk };
        }
    

      /**
       * __useFetchVehicleGraphLocationOnlyByIdLazyQuery__
       * 
       * @example
       * const [fetchVehicleGraphLocationOnlyById, { called, loading, error, vehicleGraphLocationOnly }] = useFetchVehicleGraphLocationOnlyById();
       * fetchVehicleGraphLocationOnlyById({ vehicleId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery for details
       * 
       */

      // Lazy Fetch Hook
      //
      
      // Types
      type PickFetchVehicleGraphLocationOnlyByIdFn = (query: FetchVehicleGraphLocationOnlyByIdQuery | null | undefined) => VehicleGraphLocationOnlyFragment | null | undefined;
      type FetchVehicleGraphLocationOnlyByIdLazyQueryFn = [(options?: QueryLazyOptions<FetchVehicleGraphLocationOnlyByIdQueryVariables> | undefined) => void, FetchVehicleGraphLocationOnlyByIdQueryResult]
      type FetchVehicleGraphLocationOnlyByIdWrappedLazyQueryFn = ({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryLazyOptions<FetchVehicleGraphLocationOnlyByIdQueryVariables>, "variables">; }) => void;
      export type FetchVehicleGraphLocationOnlyByIdLazyQueryReturn = [FetchVehicleGraphLocationOnlyByIdWrappedLazyQueryFn, FetchVehicleGraphLocationOnlyByIdQueryResultEx];

      // Function
      export function useFetchVehicleGraphLocationOnlyByIdLazyQuery(options?: Omit<LazyQueryHookOptions<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>, "query" | "variables">): FetchVehicleGraphLocationOnlyByIdLazyQueryReturn {
        const lazyQuery: FetchVehicleGraphLocationOnlyByIdLazyQueryFn = useLazyQuery<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>(FetchVehicleGraphLocationOnlyByIdDocument, options);
        const pickVehicleGraphLocationOnly: PickFetchVehicleGraphLocationOnlyByIdFn = query => { return query && query.vehicle_by_pk; };
        const wrappedLazyQuery: FetchVehicleGraphLocationOnlyByIdWrappedLazyQueryFn = ({ vehicleId, options }) => { return lazyQuery[0]({ variables: { vehicleId }, ...options }); };
        const returnVal: FetchVehicleGraphLocationOnlyByIdLazyQueryReturn = [wrappedLazyQuery, { ...lazyQuery[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(lazyQuery[1].data) }];
        return returnVal;
      }
    

      // Fetch Collection Hook
      //

      // Types
      export type FetchVehicleGraphLocationOnlyObjectsQueryResult = QueryResult<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>;
      export type FetchVehicleGraphLocationOnlyObjectsQueryResultEx = FetchVehicleGraphLocationOnlyObjectsQueryResult & VehicleGraphLocationOnlyObjectsHookResultEx;

      // Function
      export function useFetchVehicleGraphLocationOnlyObjectsQuery(options: Omit<QueryHookOptions<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>, "query">): FetchVehicleGraphLocationOnlyObjectsQueryResultEx {
        const query:FetchVehicleGraphLocationOnlyObjectsQueryResult = useQuery<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>(FetchVehicleGraphLocationOnlyDocument, options);
        return { ...query, objects: (query && query.data && query.data.vehicle) || [] };
      }
      
  
      // Lazy Fetch Collection Hook
      //

      // Types
      type PickFetchVehicleGraphLocationOnlyObjectsFn = (query: FetchVehicleGraphLocationOnlyQuery | null | undefined) => VehicleGraphLocationOnlyFragment[];
      type FetchVehicleGraphLocationOnlyObjectsLazyQueryFn = [(options?: QueryLazyOptions<FetchVehicleGraphLocationOnlyQueryVariables> | undefined) => void, FetchVehicleGraphLocationOnlyObjectsQueryResult]
      type FetchVehicleGraphLocationOnlyObjectsWrappedLazyQueryFn = (options?: QueryLazyOptions<FetchVehicleGraphLocationOnlyQueryVariables>) => void;
      export type FetchVehicleGraphLocationOnlyObjectsLazyQueryReturn = [FetchVehicleGraphLocationOnlyObjectsWrappedLazyQueryFn, FetchVehicleGraphLocationOnlyObjectsQueryResultEx];

      // Function
      export function useFetchVehicleGraphLocationOnlyObjectsLazyQuery(options?: Omit<LazyQueryHookOptions<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>, "query">): FetchVehicleGraphLocationOnlyObjectsLazyQueryReturn {
        const lazyQuery: FetchVehicleGraphLocationOnlyObjectsLazyQueryFn = useLazyQuery<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>(FetchVehicleGraphLocationOnlyDocument, options);
        const pickObjects: PickFetchVehicleGraphLocationOnlyObjectsFn = (query: FetchVehicleGraphLocationOnlyQuery | null | undefined) => { return (query && query.vehicle) || []; };
        const wrappedLazyQuery: FetchVehicleGraphLocationOnlyObjectsWrappedLazyQueryFn = (options) => { return lazyQuery[0]( options ); };
        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }
    

  // Insert Hooks
  //

  // Types
  type InsertVehicleGraphLocationOnlyMutationResult = FetchResult<InsertVehicleGraphLocationOnlyMutation, Record<string, any>, Record<string, any>>;
  export type InsertVehicleGraphLocationOnlyMutationResultEx = InsertVehicleGraphLocationOnlyMutationResult & VehicleGraphLocationOnlyByIdHookResultEx;

  type PickInsertVehicleGraphLocationOnlyFn = (mutation: InsertVehicleGraphLocationOnlyMutation | null | undefined) => VehicleGraphLocationOnlyFragment | null | undefined;
  type InsertVehicleGraphLocationOnlyLazyMutationFn = MutationTuple<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>;
  type InsertVehicleGraphLocationOnlyWrappedLazyMutationFn = ({ vehicle, options }: { vehicle: Vehicle_Insert_Input; options?: Omit<MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, "variables">; }) => Promise<InsertVehicleGraphLocationOnlyMutationResultEx>;
  export type InsertVehicleGraphLocationOnlyLazyMutationReturn = [InsertVehicleGraphLocationOnlyWrappedLazyMutationFn, InsertVehicleGraphLocationOnlyMutationResultEx];

  // Function
  export function useInsertVehicleGraphLocationOnly(options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, "mutation" | "variables">): InsertVehicleGraphLocationOnlyLazyMutationReturn {
    const lazyMutation: InsertVehicleGraphLocationOnlyLazyMutationFn = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>(InsertVehicleGraphLocationOnlyDocument, options);
    const pickVehicleGraphLocationOnly: PickInsertVehicleGraphLocationOnlyFn = (mutation) => { return mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning && mutation.insert_vehicle!.returning[0]; };

    const wrappedLazyMutation: InsertVehicleGraphLocationOnlyWrappedLazyMutationFn = async ({ vehicle, options }: { vehicle: Vehicle_Insert_Input; options?: Omit<MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, "variables">; }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [vehicle] }, ...options });
      return { ...fetchResult, vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(lazyMutation[1].data) }];
  }
  

  //
  //

  // Types
  type InsertVehicleGraphLocationOnlyWithOnConflictLazyMutationFn = MutationTuple<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables>;
  type InsertVehicleGraphLocationOnlyWithOnConflictWrappedLazyMutationFn = ({ vehicle, options }: { vehicle: Vehicle_Insert_Input; options?: Omit<MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables>, "variables">; }) => Promise<InsertVehicleGraphLocationOnlyMutationResultEx>;
  export type InsertVehicleGraphLocationOnlyWithOnConflictLazyMutationReturn = [InsertVehicleGraphLocationOnlyWithOnConflictWrappedLazyMutationFn, InsertVehicleGraphLocationOnlyMutationResultEx];

  // Function
  export function useInsertVehicleGraphLocationOnlyWithOnConflict( options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, "mutation" | "variables"> ): InsertVehicleGraphLocationOnlyWithOnConflictLazyMutationReturn {
    const lazyMutation: InsertVehicleGraphLocationOnlyWithOnConflictLazyMutationFn = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables>(InsertVehicleGraphLocationOnlyWithOnConflictDocument, options);
    const pickVehicleGraphLocationOnly: PickInsertVehicleGraphLocationOnlyFn = (mutation: InsertVehicleGraphLocationOnlyMutation | null | undefined) => { return mutation && mutation.insert_vehicle && mutation.insert_vehicle!.returning && mutation.insert_vehicle!.returning[0]; };

    const wrappedLazyMutation:InsertVehicleGraphLocationOnlyWithOnConflictWrappedLazyMutationFn = async ({ vehicle, onConflict, options }: { vehicle: Vehicle_Insert_Input; onConflict?: Vehicle_On_Conflict; options?: Omit<MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, "variables">;
    }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [vehicle], onConflict }, ...options });
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
  export function useInsertVehicleGraphLocationOnlyObjects(options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, "mutation">): InsertVehicleGraphLocationOnlyObjectsLazyMutationReturn {
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

    export function useUpdateVehicleGraphLocationOnlyById(options?: Omit<MutationHookOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, "mutation" | "variables">): UpdateVehicleGraphLocationOnlyByIdLazyMutationReturn {
      const lazyMutation: UpdateVehicleGraphLocationOnlyByIdLazyMutationFn = useMutation<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>(UpdateVehicleGraphLocationOnlyByIdDocument, options);

      const pickVehicleGraphLocationOnly: PickUpdateVehicleGraphLocationOnlyByIdFn = (mutation) => { return mutation && mutation.update_vehicle && mutation.update_vehicle!.returning && mutation.update_vehicle!.returning[0]; };

      const wrappedLazyMutation: UpdateVehicleGraphLocationOnlyByIdWrappedLazyMutationFn = async ({ vehicleId, set, autoOptimisticResponse, options }) => {
        const mutationOptions: MutationFunctionOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables> = { variables: { id: vehicleId, set }, ...options };
        if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateVehicleGraphLocationOnlyByIdMutation>("update", "vehicle", vehicleId, set);
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

    export function useUpdateVehicleGraphLocationOnly(options?: Omit<MutationHookOptions<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>, "mutation">): UpdateVehicleGraphLocationOnlyObjectsLazyMutationReturn {
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
  

    // dogs REACT
    //------------------------------------------------

    export type DogModelByIdHookResultEx = { dogModel:DogModelFragment | null | undefined };
    export type DogModelObjectsHookResultEx = { objects:DogModelFragment[] };

  

      // Fetch Hooks
      //
  
      /**
       * __useFetchDogModelByIdQuery__
       *
       * To run a query within a React component, call `useDogModelByIdQuery`
       * When your component renders, `useDogModelByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, dogModel } = useFetchDogModelByIdQuery({ dogsId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#usequery for details
       * 
       */

        // Fetch Hook
        //

        // Types
        type FetchDogModelByIdQueryResult = QueryResult<FetchDogModelByIdQuery, FetchDogModelByIdQueryVariables>;
        export type FetchDogModelByIdQueryResultEx = FetchDogModelByIdQueryResult & DogModelByIdHookResultEx;

        // Function
        export function useFetchDogModelByIdQuery({ dogsId, options }: { dogsId: string; options?: Omit<QueryHookOptions<FetchDogModelByIdQuery, FetchDogModelByIdQueryVariables>, "query" | "variables">; }): FetchDogModelByIdQueryResultEx {
          const query: FetchDogModelByIdQueryResult = useQuery<FetchDogModelByIdQuery, FetchDogModelByIdQueryVariables>(FetchDogModelByIdDocument, { variables: { dogsId }, ...options });
          return { ...query, dogModel: query && query.data && query.data.dogs_by_pk };
        }
    

      /**
       * __useFetchDogModelByIdLazyQuery__
       * 
       * @example
       * const [fetchDogModelById, { called, loading, error, dogModel }] = useFetchDogModelById();
       * fetchDogModelById({ dogsId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery for details
       * 
       */

      // Lazy Fetch Hook
      //
      
      // Types
      type PickFetchDogModelByIdFn = (query: FetchDogModelByIdQuery | null | undefined) => DogModelFragment | null | undefined;
      type FetchDogModelByIdLazyQueryFn = [(options?: QueryLazyOptions<FetchDogModelByIdQueryVariables> | undefined) => void, FetchDogModelByIdQueryResult]
      type FetchDogModelByIdWrappedLazyQueryFn = ({ dogsId, options }: { dogsId: string; options?: Omit<QueryLazyOptions<FetchDogModelByIdQueryVariables>, "variables">; }) => void;
      export type FetchDogModelByIdLazyQueryReturn = [FetchDogModelByIdWrappedLazyQueryFn, FetchDogModelByIdQueryResultEx];

      // Function
      export function useFetchDogModelByIdLazyQuery(options?: Omit<LazyQueryHookOptions<FetchDogModelByIdQuery, FetchDogModelByIdQueryVariables>, "query" | "variables">): FetchDogModelByIdLazyQueryReturn {
        const lazyQuery: FetchDogModelByIdLazyQueryFn = useLazyQuery<FetchDogModelByIdQuery, FetchDogModelByIdQueryVariables>(FetchDogModelByIdDocument, options);
        const pickDogModel: PickFetchDogModelByIdFn = query => { return query && query.dogs_by_pk; };
        const wrappedLazyQuery: FetchDogModelByIdWrappedLazyQueryFn = ({ dogsId, options }) => { return lazyQuery[0]({ variables: { dogsId }, ...options }); };
        const returnVal: FetchDogModelByIdLazyQueryReturn = [wrappedLazyQuery, { ...lazyQuery[1], dogModel: pickDogModel(lazyQuery[1].data) }];
        return returnVal;
      }
    

      // Fetch Collection Hook
      //

      // Types
      export type FetchDogModelObjectsQueryResult = QueryResult<FetchDogModelQuery, FetchDogModelQueryVariables>;
      export type FetchDogModelObjectsQueryResultEx = FetchDogModelObjectsQueryResult & DogModelObjectsHookResultEx;

      // Function
      export function useFetchDogModelObjectsQuery(options: Omit<QueryHookOptions<FetchDogModelQuery, FetchDogModelQueryVariables>, "query">): FetchDogModelObjectsQueryResultEx {
        const query:FetchDogModelObjectsQueryResult = useQuery<FetchDogModelQuery, FetchDogModelQueryVariables>(FetchDogModelDocument, options);
        return { ...query, objects: (query && query.data && query.data.dogs) || [] };
      }
      
  
      // Lazy Fetch Collection Hook
      //

      // Types
      type PickFetchDogModelObjectsFn = (query: FetchDogModelQuery | null | undefined) => DogModelFragment[];
      type FetchDogModelObjectsLazyQueryFn = [(options?: QueryLazyOptions<FetchDogModelQueryVariables> | undefined) => void, FetchDogModelObjectsQueryResult]
      type FetchDogModelObjectsWrappedLazyQueryFn = (options?: QueryLazyOptions<FetchDogModelQueryVariables>) => void;
      export type FetchDogModelObjectsLazyQueryReturn = [FetchDogModelObjectsWrappedLazyQueryFn, FetchDogModelObjectsQueryResultEx];

      // Function
      export function useFetchDogModelObjectsLazyQuery(options?: Omit<LazyQueryHookOptions<FetchDogModelQuery, FetchDogModelQueryVariables>, "query">): FetchDogModelObjectsLazyQueryReturn {
        const lazyQuery: FetchDogModelObjectsLazyQueryFn = useLazyQuery<FetchDogModelQuery, FetchDogModelQueryVariables>(FetchDogModelDocument, options);
        const pickObjects: PickFetchDogModelObjectsFn = (query: FetchDogModelQuery | null | undefined) => { return (query && query.dogs) || []; };
        const wrappedLazyQuery: FetchDogModelObjectsWrappedLazyQueryFn = (options) => { return lazyQuery[0]( options ); };
        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }
    

  // Insert Hooks
  //

  // Types
  type InsertDogModelMutationResult = FetchResult<InsertDogModelMutation, Record<string, any>, Record<string, any>>;
  export type InsertDogModelMutationResultEx = InsertDogModelMutationResult & DogModelByIdHookResultEx;

  type PickInsertDogModelFn = (mutation: InsertDogModelMutation | null | undefined) => DogModelFragment | null | undefined;
  type InsertDogModelLazyMutationFn = MutationTuple<InsertDogModelMutation, InsertDogModelMutationVariables>;
  type InsertDogModelWrappedLazyMutationFn = ({ dogs, options }: { dogs: Dogs_Insert_Input; options?: Omit<MutationFunctionOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, "variables">; }) => Promise<InsertDogModelMutationResultEx>;
  export type InsertDogModelLazyMutationReturn = [InsertDogModelWrappedLazyMutationFn, InsertDogModelMutationResultEx];

  // Function
  export function useInsertDogModel(options?: Omit<MutationHookOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, "mutation" | "variables">): InsertDogModelLazyMutationReturn {
    const lazyMutation: InsertDogModelLazyMutationFn = useMutation<InsertDogModelMutation, InsertDogModelMutationVariables>(InsertDogModelDocument, options);
    const pickDogModel: PickInsertDogModelFn = (mutation) => { return mutation && mutation.insert_dogs && mutation.insert_dogs!.returning && mutation.insert_dogs!.returning[0]; };

    const wrappedLazyMutation: InsertDogModelWrappedLazyMutationFn = async ({ dogs, options }: { dogs: Dogs_Insert_Input; options?: Omit<MutationFunctionOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, "variables">; }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [dogs] }, ...options });
      return { ...fetchResult, dogModel: pickDogModel(fetchResult.data) };
    };

    return [wrappedLazyMutation, { ...lazyMutation[1], dogModel: pickDogModel(lazyMutation[1].data) }];
  }
  

  //
  //

  // Types
  type InsertDogModelWithOnConflictLazyMutationFn = MutationTuple<InsertDogModelMutation, InsertDogModelWithOnConflictMutationVariables>;
  type InsertDogModelWithOnConflictWrappedLazyMutationFn = ({ dogs, options }: { dogs: Dogs_Insert_Input; options?: Omit<MutationFunctionOptions<InsertDogModelMutation, InsertDogModelWithOnConflictMutationVariables>, "variables">; }) => Promise<InsertDogModelMutationResultEx>;
  export type InsertDogModelWithOnConflictLazyMutationReturn = [InsertDogModelWithOnConflictWrappedLazyMutationFn, InsertDogModelMutationResultEx];

  // Function
  export function useInsertDogModelWithOnConflict( options?: Omit<MutationHookOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, "mutation" | "variables"> ): InsertDogModelWithOnConflictLazyMutationReturn {
    const lazyMutation: InsertDogModelWithOnConflictLazyMutationFn = useMutation<InsertDogModelMutation, InsertDogModelWithOnConflictMutationVariables>(InsertDogModelWithOnConflictDocument, options);
    const pickDogModel: PickInsertDogModelFn = (mutation: InsertDogModelMutation | null | undefined) => { return mutation && mutation.insert_dogs && mutation.insert_dogs!.returning && mutation.insert_dogs!.returning[0]; };

    const wrappedLazyMutation:InsertDogModelWithOnConflictWrappedLazyMutationFn = async ({ dogs, onConflict, options }: { dogs: Dogs_Insert_Input; onConflict?: Dogs_On_Conflict; options?: Omit<MutationFunctionOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, "variables">;
    }) => {
      const fetchResult = await lazyMutation[0]({ variables: { objects: [dogs], onConflict }, ...options });
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
  export function useInsertDogModelObjects(options?: Omit<MutationHookOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, "mutation">): InsertDogModelObjectsLazyMutationReturn {
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

    export function useUpdateDogModelById(options?: Omit<MutationHookOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>, "mutation" | "variables">): UpdateDogModelByIdLazyMutationReturn {
      const lazyMutation: UpdateDogModelByIdLazyMutationFn = useMutation<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>(UpdateDogModelByIdDocument, options);

      const pickDogModel: PickUpdateDogModelByIdFn = (mutation) => { return mutation && mutation.update_dogs && mutation.update_dogs!.returning && mutation.update_dogs!.returning[0]; };

      const wrappedLazyMutation: UpdateDogModelByIdWrappedLazyMutationFn = async ({ dogsId, set, autoOptimisticResponse, options }) => {
        const mutationOptions: MutationFunctionOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables> = { variables: { id: dogsId, set }, ...options };
        if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateDogModelByIdMutation>("update", "dogs", dogsId, set);
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

    export function useUpdateDogModel(options?: Omit<MutationHookOptions<UpdateDogModelMutation, UpdateDogModelMutationVariables>, "mutation">): UpdateDogModelObjectsLazyMutationReturn {
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
    type RemoveDogsModelWrappedLazyMutationFn = ({ dogsId, options }: { dogsId: string; options?: Omit<MutationFunctionOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>, "variables">; }) => Promise<RemoveDogsModelByIdMutationResultEx>;
    export type RemoveDogsModelLazyMutationReturn = [RemoveDogsModelWrappedLazyMutationFn, RemoveDogsModelByIdMutationResultEx];

    export function useRemoveDogsModelById(options?: Omit<MutationHookOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>, "mutation" | "variables">) {
      const lazyMutation: RemoveDogsModelLazyMutationFn = useMutation<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>(RemoveDogsModelByIdDocument, options);

      const pickAffectedRows: PickRemoveDogsModelFn = (mutation: RemoveDogsModelByIdMutation | null | undefined) => {
        return (mutation && mutation.delete_dogs && mutation.delete_dogs!.affected_rows) || 0;
      };

      const wrappedLazyMutation: RemoveDogsModelWrappedLazyMutationFn = async ({ dogsId, options }: { dogsId: string; options?: Omit<MutationFunctionOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>, "variables">; }) => {
        const fetchResult: RemoveDogsModelByIdFetchResult = await lazyMutation[0]({ variables: { id: dogsId }, ...options });
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

    export function useRemoveDogsModelObjects(options?: Omit<MutationHookOptions<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>, "mutation">): RemoveDogsModelObjectsLazyMutationReturn {
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
  