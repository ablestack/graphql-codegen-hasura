import { ObjectWithId, generateOptimisticResponseForMutation, generateUpdateFunctionForMutation } from 'graphql-codegen-hasura-core'
import { QueryHookOptions, useQuery, LazyQueryHookOptions, useLazyQuery, MutationHookOptions, useMutation, QueryLazyOptions, MutationFunctionOptions, QueryResult, MutationTuple, FetchResult, SubscriptionResult, SubscriptionHookOptions, useSubscription, ApolloError, SubscribeToMoreOptions } from '@apollo/client';
import { VehicleGraphFragment } from '../';
import { QueryVehicleGraphByIdQuery } from '../';
import { QueryVehicleGraphByIdQueryVariables } from '../';
import { QueryVehicleGraphByIdDocument } from '../';
import { QueryVehicleGraphObjectsQuery } from '../';
import { QueryVehicleGraphObjectsDocument } from '../';
import { QueryVehicleGraphObjectsQueryVariables } from '../';
import { SubscribeToVehicleGraphByIdSubscription } from '../';
import { SubscribeToVehicleGraphByIdSubscriptionVariables } from '../';
import { SubscribeToVehicleGraphByIdDocument } from '../';
import { SubscribeToVehicleGraphObjectsSubscription } from '../';
import { SubscribeToVehicleGraphObjectsDocument } from '../';
import { SubscribeToVehicleGraphObjectsSubscriptionVariables } from '../';
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
import { QueryVehicleGraphLocationOnlyByIdQuery } from '../';
import { QueryVehicleGraphLocationOnlyByIdQueryVariables } from '../';
import { QueryVehicleGraphLocationOnlyByIdDocument } from '../';
import { QueryVehicleGraphLocationOnlyObjectsQuery } from '../';
import { QueryVehicleGraphLocationOnlyObjectsDocument } from '../';
import { QueryVehicleGraphLocationOnlyObjectsQueryVariables } from '../';
import { SubscribeToVehicleGraphLocationOnlyByIdSubscription } from '../';
import { SubscribeToVehicleGraphLocationOnlyByIdSubscriptionVariables } from '../';
import { SubscribeToVehicleGraphLocationOnlyByIdDocument } from '../';
import { SubscribeToVehicleGraphLocationOnlyObjectsSubscription } from '../';
import { SubscribeToVehicleGraphLocationOnlyObjectsDocument } from '../';
import { SubscribeToVehicleGraphLocationOnlyObjectsSubscriptionVariables } from '../';
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
import { QueryDogModelByIdQuery } from '../';
import { QueryDogModelByIdQueryVariables } from '../';
import { QueryDogModelByIdDocument } from '../';
import { QueryDogModelObjectsQuery } from '../';
import { QueryDogModelObjectsDocument } from '../';
import { QueryDogModelObjectsQueryVariables } from '../';
import { SubscribeToDogModelByIdSubscription } from '../';
import { SubscribeToDogModelByIdSubscriptionVariables } from '../';
import { SubscribeToDogModelByIdDocument } from '../';
import { SubscribeToDogModelObjectsSubscription } from '../';
import { SubscribeToDogModelObjectsDocument } from '../';
import { SubscribeToDogModelObjectsSubscriptionVariables } from '../';
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

  

    /**
     *  Query Hook
     */

    // Types
    type QueryVehicleGraphByIdResult = QueryResult<QueryVehicleGraphByIdQuery, QueryVehicleGraphByIdQueryVariables>;
    type QueryVehicleGraphByIdSubScribeToMore = (options?: Omit<SubscribeToMoreOptions<QueryVehicleGraphByIdQuery, QueryVehicleGraphByIdQueryVariables, QueryVehicleGraphByIdQuery>, 'document' | 'variables'> | undefined) => void
    export type QueryVehicleGraphByIdResultEx = Omit<QueryVehicleGraphByIdResult & VehicleGraphByIdHookResultEx, 'subscribeToMore'> & { subscribeToMore:QueryVehicleGraphByIdSubScribeToMore };

    // Function
    function useQueryVehicleGraphById({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryHookOptions<QueryVehicleGraphByIdQuery, QueryVehicleGraphByIdQueryVariables>, "query" | "variables">; }): QueryVehicleGraphByIdResultEx {
      const _query: QueryVehicleGraphByIdResult = useQuery<QueryVehicleGraphByIdQuery, QueryVehicleGraphByIdQueryVariables>(QueryVehicleGraphByIdDocument, { variables: { vehicleId }, ...options });
      
      const subScribeToMoreOverride:QueryVehicleGraphByIdSubScribeToMore = (options) => { _query.subscribeToMore({document: QueryVehicleGraphByIdDocument, variables: { vehicleId } as QueryVehicleGraphByIdQueryVariables, ...options });}
      const { subscribeToMore, ...query } = _query;      
      return { ...query, subscribeToMore:subScribeToMoreOverride, vehicleGraph: query?.data?.vehicle_by_pk };
    }
    

    /**
     *  Lazy Query Hook
     */
    
    // Types
    type PickQueryVehicleGraphByIdFn = (query: QueryVehicleGraphByIdQuery | null | undefined) =>VehicleGraphFragment | null | undefined;
    type QueryVehicleGraphByIdLazyFn = [(options?: QueryLazyOptions<QueryVehicleGraphByIdQueryVariables> | undefined) => void, QueryVehicleGraphByIdResult]
    type QueryVehicleGraphByIdWrappedLazyFn = (options: Omit<QueryLazyOptions<QueryVehicleGraphByIdQueryVariables>, "variables">) => void;
    export type QueryVehicleGraphByIdLazyReturn = [QueryVehicleGraphByIdWrappedLazyFn, QueryVehicleGraphByIdResultEx];

    // Function
    function useQueryVehicleGraphByIdLazy({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryHookOptions<QueryVehicleGraphByIdQuery, QueryVehicleGraphByIdQueryVariables>, "query" | "variables">; }): QueryVehicleGraphByIdLazyReturn {
      const lazyQuery: QueryVehicleGraphByIdLazyFn = useLazyQuery<QueryVehicleGraphByIdQuery, QueryVehicleGraphByIdQueryVariables>(QueryVehicleGraphByIdDocument, options);
      
      // Setting up typed version of lazyQuery
      const pickQueryVehicleGraphById: PickQueryVehicleGraphByIdFn = query => { return query && query.vehicle_by_pk; };
      const wrappedLazyQuery: QueryVehicleGraphByIdWrappedLazyFn = (options) => { return lazyQuery[0](options); };
      
      // Switching out SubcribeToMore with typed version
      const typedSubcribeToMore:QueryVehicleGraphByIdSubScribeToMore = (options) => { lazyQuery[1].subscribeToMore({document: QueryVehicleGraphByIdDocument, variables: { vehicleId } as QueryVehicleGraphByIdQueryVariables, ...options });}
      const { subscribeToMore, ...lazyQueryResult } = lazyQuery[1];  

      return [wrappedLazyQuery, { ...lazyQueryResult, subscribeToMore:typedSubcribeToMore, vehicleGraph: pickQueryVehicleGraphById(lazyQuery[1].data) }];
    }
    

    /**
     *  Query Collection Hook
     */

    // Types
    export type QueryVehicleGraphObjectsResult = QueryResult<QueryVehicleGraphObjectsQuery, QueryVehicleGraphObjectsQueryVariables>;
    export type QueryVehicleGraphObjectsResultEx = QueryVehicleGraphObjectsResult & VehicleGraphObjectsHookResultEx;

    // Function
    function useQueryVehicleGraphObjects(options: Omit<QueryHookOptions<QueryVehicleGraphObjectsQuery, QueryVehicleGraphObjectsQueryVariables>, "query">): QueryVehicleGraphObjectsResultEx {
      const query:QueryVehicleGraphObjectsResult = useQuery<QueryVehicleGraphObjectsQuery, QueryVehicleGraphObjectsQueryVariables>(QueryVehicleGraphObjectsDocument, options);
      return { ...query, objects: query?.data?.vehicle || [] };
    }
    
  
    /**
     *  Lazy Query Collection Hook
     */

    // Types
    type PickQueryVehicleGraphObjectsFn = (query: QueryVehicleGraphObjectsQuery | null | undefined) => VehicleGraphFragment[];
    type QueryVehicleGraphObjectsLazyFn = [(options?: QueryLazyOptions<QueryVehicleGraphObjectsQueryVariables> | undefined) => void, QueryVehicleGraphObjectsResult]
    type QueryVehicleGraphObjectsWrappedLazyFn = (options?: QueryLazyOptions<QueryVehicleGraphObjectsQueryVariables>) => void;
    export type QueryVehicleGraphObjectsLazyReturn = [QueryVehicleGraphObjectsWrappedLazyFn, QueryVehicleGraphObjectsResultEx];

    // Function
    function useQueryVehicleGraphObjectsLazy(options?: Omit<LazyQueryHookOptions<QueryVehicleGraphObjectsQuery, QueryVehicleGraphObjectsQueryVariables>, "query">): QueryVehicleGraphObjectsLazyReturn {
      const lazyQuery: QueryVehicleGraphObjectsLazyFn = useLazyQuery<QueryVehicleGraphObjectsQuery, QueryVehicleGraphObjectsQueryVariables>(QueryVehicleGraphObjectsDocument, options);
      const pickObjects: PickQueryVehicleGraphObjectsFn = (query: QueryVehicleGraphObjectsQuery | null | undefined) => { return query?.vehicle || []; };
      const wrappedLazyQuery: QueryVehicleGraphObjectsWrappedLazyFn = (options) => { return lazyQuery[0]( options ); };
      return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
    }
  
     
    /**
     *  Subscription Hook
     */

    // Types
    type SubscribeToVehicleGraphByIdResult = { variables: SubscribeToVehicleGraphByIdSubscriptionVariables; loading: boolean; data?: SubscribeToVehicleGraphByIdSubscription; error?: ApolloError | undefined; };
    export type SubscribeToVehicleGraphByIdResultEx = SubscribeToVehicleGraphByIdResult & VehicleGraphByIdHookResultEx;

    // Function
    function useSubscribeToVehicleGraphById({ vehicleId, options }: { vehicleId: string; options?: Omit<SubscriptionHookOptions<SubscribeToVehicleGraphByIdSubscription, SubscribeToVehicleGraphByIdSubscriptionVariables>, "query" | "variables">; }): SubscribeToVehicleGraphByIdResultEx {
      const subscription: SubscribeToVehicleGraphByIdResult = useSubscription<SubscribeToVehicleGraphByIdSubscription, SubscribeToVehicleGraphByIdSubscriptionVariables>(SubscribeToVehicleGraphByIdDocument, { variables: { vehicleId }, ...options });
      return { ...subscription, vehicleGraph: subscription?.data?.vehicle_by_pk };
    }
    

    /**
     *  Subscription Collection Hook
     */

    // Types
    export type SubscribeToVehicleGraphObjectsResult = { variables: SubscribeToVehicleGraphObjectsSubscriptionVariables; loading: boolean; data?: SubscribeToVehicleGraphObjectsSubscription; error?: ApolloError | undefined; };
    export type SubscribeToVehicleGraphObjectsResultEx = SubscribeToVehicleGraphObjectsResult & VehicleGraphObjectsHookResultEx;

    // Function
    function useSubscribeToVehicleGraphObjects(options: Omit<SubscriptionHookOptions<SubscribeToVehicleGraphObjectsSubscription, SubscribeToVehicleGraphObjectsSubscriptionVariables>, "query">): SubscribeToVehicleGraphObjectsResultEx {
      const subscription:SubscribeToVehicleGraphObjectsResult = useSubscription<SubscribeToVehicleGraphObjectsSubscription, SubscribeToVehicleGraphObjectsSubscriptionVariables>(SubscribeToVehicleGraphObjectsDocument, options);
      return { ...subscription, objects: subscription?.data?.vehicle || [] };
    }
    

    /**
     *  Insert Hooks
     */

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
      const pickVehicleGraph: PickInsertVehicleGraphFn = (mutation) => { return mutation?.insert_vehicle?.returning && mutation?.insert_vehicle?.returning[0]; };

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
      const pickVehicleGraph: PickInsertVehicleGraphFn = (mutation: InsertVehicleGraphMutation | null | undefined) => { return mutation?.insert_vehicle?.returning && mutation.insert_vehicle.returning[0]; };

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
      const pickObjects: PickInsertVehicleGraphObjectsFn = (mutation: InsertVehicleGraphMutation | null | undefined) => { return mutation?.insert_vehicle?.returning || []; };

      const wrappedLazyMutation: InsertVehicleGraphObjectsWrappedLazyMutationFn = async ( options ) => {
        const fetchResult: InsertVehicleGraphObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }
  

    /**
     *  Update Hooks
     */
    
    type UpdateVehicleGraphByIdMutationResult = FetchResult<UpdateVehicleGraphByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleGraphByIdMutationResultEx = UpdateVehicleGraphByIdMutationResult & VehicleGraphByIdHookResultEx;

    type PickUpdateVehicleGraphByIdFn = (mutation: UpdateVehicleGraphByIdMutation | null | undefined) => VehicleGraphFragment | null | undefined;
    type UpdateVehicleGraphByIdLazyMutationFn = MutationTuple<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>;
    type UpdateVehicleGraphByIdWrappedLazyMutationFn = ({ vehicleId, set, autoOptimisticResponse, options }: { vehicleId: string; set: Vehicle_Set_Input; autoOptimisticResponse?: boolean; options?: Omit<MutationFunctionOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, "variables">; }) => Promise<UpdateVehicleGraphByIdMutationResultEx>;
    export type UpdateVehicleGraphByIdLazyMutationReturn = [UpdateVehicleGraphByIdWrappedLazyMutationFn, UpdateVehicleGraphByIdMutationResultEx];

    function useUpdateVehicleGraphById(options?: Omit<MutationHookOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, "mutation" | "variables">): UpdateVehicleGraphByIdLazyMutationReturn {
      const lazyMutation: UpdateVehicleGraphByIdLazyMutationFn = useMutation<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>(UpdateVehicleGraphByIdDocument, options);

      const pickVehicleGraph: PickUpdateVehicleGraphByIdFn = (mutation) => { return mutation?.update_vehicle?.returning && mutation.update_vehicle!.returning[0]; };

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
        return mutation?.update_vehicle?.returning || [];
      };

      const wrappedLazyMutation: UpdateVehicleGraphObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: UpdateVehicleGraphObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }
  

    /**
     *  Delete Hooks
     */

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
        return mutation?.delete_vehicle?.affected_rows || 0;
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
        return mutation?.delete_vehicle?.affected_rows || 0;
      };

      const wrappedLazyMutation: RemoveVehicleModelObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: RemoveVehicleModelObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }];
    }
  

    /*
     * VehicleGraph FRAGMENT HOOKS OBJECT
     */

    export const VehicleGraphFragmentGQLHooks = {
      useQueryById: useQueryVehicleGraphById,
      useQueryByIdLazy: useQueryVehicleGraphByIdLazy,
      useQueryObjects: useQueryVehicleGraphObjects,
      useQueryObjectsLazy: useQueryVehicleGraphObjectsLazy,
      useInsert: useInsertVehicleGraph,
      useInsertWithOnConflict: useInsertVehicleGraphWithOnConflict,
      useInsertObjects: useInsertVehicleGraphObjects,
      useUpdateById: useUpdateVehicleGraphById,
      useUpdateObjects: useUpdateVehicleGraphObjects,
    }
  

    /*
    * vehicle MODEL HOOKS OBJECT
    */

    export const VehicleModelGQLHooks = {
      useRemoveById: useRemoveVehicleModelById,
      useRemoveObjects: useRemoveVehicleModelObjects
    }
  

    // vehicle REACT
    //------------------------------------------------

    export type VehicleGraphLocationOnlyByIdHookResultEx = { vehicleGraphLocationOnly:VehicleGraphLocationOnlyFragment | null | undefined };
    export type VehicleGraphLocationOnlyObjectsHookResultEx = { objects:VehicleGraphLocationOnlyFragment[] };

  

    /**
     *  Query Hook
     */

    // Types
    type QueryVehicleGraphLocationOnlyByIdResult = QueryResult<QueryVehicleGraphLocationOnlyByIdQuery, QueryVehicleGraphLocationOnlyByIdQueryVariables>;
    type QueryVehicleGraphLocationOnlyByIdSubScribeToMore = (options?: Omit<SubscribeToMoreOptions<QueryVehicleGraphLocationOnlyByIdQuery, QueryVehicleGraphLocationOnlyByIdQueryVariables, QueryVehicleGraphLocationOnlyByIdQuery>, 'document' | 'variables'> | undefined) => void
    export type QueryVehicleGraphLocationOnlyByIdResultEx = Omit<QueryVehicleGraphLocationOnlyByIdResult & VehicleGraphLocationOnlyByIdHookResultEx, 'subscribeToMore'> & { subscribeToMore:QueryVehicleGraphLocationOnlyByIdSubScribeToMore };

    // Function
    function useQueryVehicleGraphLocationOnlyById({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryHookOptions<QueryVehicleGraphLocationOnlyByIdQuery, QueryVehicleGraphLocationOnlyByIdQueryVariables>, "query" | "variables">; }): QueryVehicleGraphLocationOnlyByIdResultEx {
      const _query: QueryVehicleGraphLocationOnlyByIdResult = useQuery<QueryVehicleGraphLocationOnlyByIdQuery, QueryVehicleGraphLocationOnlyByIdQueryVariables>(QueryVehicleGraphLocationOnlyByIdDocument, { variables: { vehicleId }, ...options });
      
      const subScribeToMoreOverride:QueryVehicleGraphLocationOnlyByIdSubScribeToMore = (options) => { _query.subscribeToMore({document: QueryVehicleGraphLocationOnlyByIdDocument, variables: { vehicleId } as QueryVehicleGraphLocationOnlyByIdQueryVariables, ...options });}
      const { subscribeToMore, ...query } = _query;      
      return { ...query, subscribeToMore:subScribeToMoreOverride, vehicleGraphLocationOnly: query?.data?.vehicle_by_pk };
    }
    

    /**
     *  Lazy Query Hook
     */
    
    // Types
    type PickQueryVehicleGraphLocationOnlyByIdFn = (query: QueryVehicleGraphLocationOnlyByIdQuery | null | undefined) =>VehicleGraphLocationOnlyFragment | null | undefined;
    type QueryVehicleGraphLocationOnlyByIdLazyFn = [(options?: QueryLazyOptions<QueryVehicleGraphLocationOnlyByIdQueryVariables> | undefined) => void, QueryVehicleGraphLocationOnlyByIdResult]
    type QueryVehicleGraphLocationOnlyByIdWrappedLazyFn = (options: Omit<QueryLazyOptions<QueryVehicleGraphLocationOnlyByIdQueryVariables>, "variables">) => void;
    export type QueryVehicleGraphLocationOnlyByIdLazyReturn = [QueryVehicleGraphLocationOnlyByIdWrappedLazyFn, QueryVehicleGraphLocationOnlyByIdResultEx];

    // Function
    function useQueryVehicleGraphLocationOnlyByIdLazy({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryHookOptions<QueryVehicleGraphLocationOnlyByIdQuery, QueryVehicleGraphLocationOnlyByIdQueryVariables>, "query" | "variables">; }): QueryVehicleGraphLocationOnlyByIdLazyReturn {
      const lazyQuery: QueryVehicleGraphLocationOnlyByIdLazyFn = useLazyQuery<QueryVehicleGraphLocationOnlyByIdQuery, QueryVehicleGraphLocationOnlyByIdQueryVariables>(QueryVehicleGraphLocationOnlyByIdDocument, options);
      
      // Setting up typed version of lazyQuery
      const pickQueryVehicleGraphLocationOnlyById: PickQueryVehicleGraphLocationOnlyByIdFn = query => { return query && query.vehicle_by_pk; };
      const wrappedLazyQuery: QueryVehicleGraphLocationOnlyByIdWrappedLazyFn = (options) => { return lazyQuery[0](options); };
      
      // Switching out SubcribeToMore with typed version
      const typedSubcribeToMore:QueryVehicleGraphLocationOnlyByIdSubScribeToMore = (options) => { lazyQuery[1].subscribeToMore({document: QueryVehicleGraphLocationOnlyByIdDocument, variables: { vehicleId } as QueryVehicleGraphLocationOnlyByIdQueryVariables, ...options });}
      const { subscribeToMore, ...lazyQueryResult } = lazyQuery[1];  

      return [wrappedLazyQuery, { ...lazyQueryResult, subscribeToMore:typedSubcribeToMore, vehicleGraphLocationOnly: pickQueryVehicleGraphLocationOnlyById(lazyQuery[1].data) }];
    }
    

    /**
     *  Query Collection Hook
     */

    // Types
    export type QueryVehicleGraphLocationOnlyObjectsResult = QueryResult<QueryVehicleGraphLocationOnlyObjectsQuery, QueryVehicleGraphLocationOnlyObjectsQueryVariables>;
    export type QueryVehicleGraphLocationOnlyObjectsResultEx = QueryVehicleGraphLocationOnlyObjectsResult & VehicleGraphLocationOnlyObjectsHookResultEx;

    // Function
    function useQueryVehicleGraphLocationOnlyObjects(options: Omit<QueryHookOptions<QueryVehicleGraphLocationOnlyObjectsQuery, QueryVehicleGraphLocationOnlyObjectsQueryVariables>, "query">): QueryVehicleGraphLocationOnlyObjectsResultEx {
      const query:QueryVehicleGraphLocationOnlyObjectsResult = useQuery<QueryVehicleGraphLocationOnlyObjectsQuery, QueryVehicleGraphLocationOnlyObjectsQueryVariables>(QueryVehicleGraphLocationOnlyObjectsDocument, options);
      return { ...query, objects: query?.data?.vehicle || [] };
    }
    
  
    /**
     *  Lazy Query Collection Hook
     */

    // Types
    type PickQueryVehicleGraphLocationOnlyObjectsFn = (query: QueryVehicleGraphLocationOnlyObjectsQuery | null | undefined) => VehicleGraphLocationOnlyFragment[];
    type QueryVehicleGraphLocationOnlyObjectsLazyFn = [(options?: QueryLazyOptions<QueryVehicleGraphLocationOnlyObjectsQueryVariables> | undefined) => void, QueryVehicleGraphLocationOnlyObjectsResult]
    type QueryVehicleGraphLocationOnlyObjectsWrappedLazyFn = (options?: QueryLazyOptions<QueryVehicleGraphLocationOnlyObjectsQueryVariables>) => void;
    export type QueryVehicleGraphLocationOnlyObjectsLazyReturn = [QueryVehicleGraphLocationOnlyObjectsWrappedLazyFn, QueryVehicleGraphLocationOnlyObjectsResultEx];

    // Function
    function useQueryVehicleGraphLocationOnlyObjectsLazy(options?: Omit<LazyQueryHookOptions<QueryVehicleGraphLocationOnlyObjectsQuery, QueryVehicleGraphLocationOnlyObjectsQueryVariables>, "query">): QueryVehicleGraphLocationOnlyObjectsLazyReturn {
      const lazyQuery: QueryVehicleGraphLocationOnlyObjectsLazyFn = useLazyQuery<QueryVehicleGraphLocationOnlyObjectsQuery, QueryVehicleGraphLocationOnlyObjectsQueryVariables>(QueryVehicleGraphLocationOnlyObjectsDocument, options);
      const pickObjects: PickQueryVehicleGraphLocationOnlyObjectsFn = (query: QueryVehicleGraphLocationOnlyObjectsQuery | null | undefined) => { return query?.vehicle || []; };
      const wrappedLazyQuery: QueryVehicleGraphLocationOnlyObjectsWrappedLazyFn = (options) => { return lazyQuery[0]( options ); };
      return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
    }
  
     
    /**
     *  Subscription Hook
     */

    // Types
    type SubscribeToVehicleGraphLocationOnlyByIdResult = { variables: SubscribeToVehicleGraphLocationOnlyByIdSubscriptionVariables; loading: boolean; data?: SubscribeToVehicleGraphLocationOnlyByIdSubscription; error?: ApolloError | undefined; };
    export type SubscribeToVehicleGraphLocationOnlyByIdResultEx = SubscribeToVehicleGraphLocationOnlyByIdResult & VehicleGraphLocationOnlyByIdHookResultEx;

    // Function
    function useSubscribeToVehicleGraphLocationOnlyById({ vehicleId, options }: { vehicleId: string; options?: Omit<SubscriptionHookOptions<SubscribeToVehicleGraphLocationOnlyByIdSubscription, SubscribeToVehicleGraphLocationOnlyByIdSubscriptionVariables>, "query" | "variables">; }): SubscribeToVehicleGraphLocationOnlyByIdResultEx {
      const subscription: SubscribeToVehicleGraphLocationOnlyByIdResult = useSubscription<SubscribeToVehicleGraphLocationOnlyByIdSubscription, SubscribeToVehicleGraphLocationOnlyByIdSubscriptionVariables>(SubscribeToVehicleGraphLocationOnlyByIdDocument, { variables: { vehicleId }, ...options });
      return { ...subscription, vehicleGraphLocationOnly: subscription?.data?.vehicle_by_pk };
    }
    

    /**
     *  Subscription Collection Hook
     */

    // Types
    export type SubscribeToVehicleGraphLocationOnlyObjectsResult = { variables: SubscribeToVehicleGraphLocationOnlyObjectsSubscriptionVariables; loading: boolean; data?: SubscribeToVehicleGraphLocationOnlyObjectsSubscription; error?: ApolloError | undefined; };
    export type SubscribeToVehicleGraphLocationOnlyObjectsResultEx = SubscribeToVehicleGraphLocationOnlyObjectsResult & VehicleGraphLocationOnlyObjectsHookResultEx;

    // Function
    function useSubscribeToVehicleGraphLocationOnlyObjects(options: Omit<SubscriptionHookOptions<SubscribeToVehicleGraphLocationOnlyObjectsSubscription, SubscribeToVehicleGraphLocationOnlyObjectsSubscriptionVariables>, "query">): SubscribeToVehicleGraphLocationOnlyObjectsResultEx {
      const subscription:SubscribeToVehicleGraphLocationOnlyObjectsResult = useSubscription<SubscribeToVehicleGraphLocationOnlyObjectsSubscription, SubscribeToVehicleGraphLocationOnlyObjectsSubscriptionVariables>(SubscribeToVehicleGraphLocationOnlyObjectsDocument, options);
      return { ...subscription, objects: subscription?.data?.vehicle || [] };
    }
    

    /**
     *  Insert Hooks
     */

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
      const pickVehicleGraphLocationOnly: PickInsertVehicleGraphLocationOnlyFn = (mutation) => { return mutation?.insert_vehicle?.returning && mutation?.insert_vehicle?.returning[0]; };

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
      const pickVehicleGraphLocationOnly: PickInsertVehicleGraphLocationOnlyFn = (mutation: InsertVehicleGraphLocationOnlyMutation | null | undefined) => { return mutation?.insert_vehicle?.returning && mutation.insert_vehicle.returning[0]; };

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
      const pickObjects: PickInsertVehicleGraphLocationOnlyObjectsFn = (mutation: InsertVehicleGraphLocationOnlyMutation | null | undefined) => { return mutation?.insert_vehicle?.returning || []; };

      const wrappedLazyMutation: InsertVehicleGraphLocationOnlyObjectsWrappedLazyMutationFn = async ( options ) => {
        const fetchResult: InsertVehicleGraphLocationOnlyObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }
  

    /**
     *  Update Hooks
     */
    
    type UpdateVehicleGraphLocationOnlyByIdMutationResult = FetchResult<UpdateVehicleGraphLocationOnlyByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleGraphLocationOnlyByIdMutationResultEx = UpdateVehicleGraphLocationOnlyByIdMutationResult & VehicleGraphLocationOnlyByIdHookResultEx;

    type PickUpdateVehicleGraphLocationOnlyByIdFn = (mutation: UpdateVehicleGraphLocationOnlyByIdMutation | null | undefined) => VehicleGraphLocationOnlyFragment | null | undefined;
    type UpdateVehicleGraphLocationOnlyByIdLazyMutationFn = MutationTuple<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>;
    type UpdateVehicleGraphLocationOnlyByIdWrappedLazyMutationFn = ({ vehicleId, set, autoOptimisticResponse, options }: { vehicleId: string; set: Vehicle_Set_Input; autoOptimisticResponse?: boolean; options?: Omit<MutationFunctionOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, "variables">; }) => Promise<UpdateVehicleGraphLocationOnlyByIdMutationResultEx>;
    export type UpdateVehicleGraphLocationOnlyByIdLazyMutationReturn = [UpdateVehicleGraphLocationOnlyByIdWrappedLazyMutationFn, UpdateVehicleGraphLocationOnlyByIdMutationResultEx];

    function useUpdateVehicleGraphLocationOnlyById(options?: Omit<MutationHookOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, "mutation" | "variables">): UpdateVehicleGraphLocationOnlyByIdLazyMutationReturn {
      const lazyMutation: UpdateVehicleGraphLocationOnlyByIdLazyMutationFn = useMutation<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>(UpdateVehicleGraphLocationOnlyByIdDocument, options);

      const pickVehicleGraphLocationOnly: PickUpdateVehicleGraphLocationOnlyByIdFn = (mutation) => { return mutation?.update_vehicle?.returning && mutation.update_vehicle!.returning[0]; };

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
        return mutation?.update_vehicle?.returning || [];
      };

      const wrappedLazyMutation: UpdateVehicleGraphLocationOnlyObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: UpdateVehicleGraphLocationOnlyObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }
  

    /*
     * VehicleGraphLocationOnly FRAGMENT HOOKS OBJECT
     */

    export const VehicleGraphLocationOnlyFragmentGQLHooks = {
      useQueryById: useQueryVehicleGraphLocationOnlyById,
      useQueryByIdLazy: useQueryVehicleGraphLocationOnlyByIdLazy,
      useQueryObjects: useQueryVehicleGraphLocationOnlyObjects,
      useQueryObjectsLazy: useQueryVehicleGraphLocationOnlyObjectsLazy,
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

  

    /**
     *  Query Hook
     */

    // Types
    type QueryDogModelByIdResult = QueryResult<QueryDogModelByIdQuery, QueryDogModelByIdQueryVariables>;
    type QueryDogModelByIdSubScribeToMore = (options?: Omit<SubscribeToMoreOptions<QueryDogModelByIdQuery, QueryDogModelByIdQueryVariables, QueryDogModelByIdQuery>, 'document' | 'variables'> | undefined) => void
    export type QueryDogModelByIdResultEx = Omit<QueryDogModelByIdResult & DogModelByIdHookResultEx, 'subscribeToMore'> & { subscribeToMore:QueryDogModelByIdSubScribeToMore };

    // Function
    function useQueryDogModelById({ dogsId, options }: { dogsId: string; options?: Omit<QueryHookOptions<QueryDogModelByIdQuery, QueryDogModelByIdQueryVariables>, "query" | "variables">; }): QueryDogModelByIdResultEx {
      const _query: QueryDogModelByIdResult = useQuery<QueryDogModelByIdQuery, QueryDogModelByIdQueryVariables>(QueryDogModelByIdDocument, { variables: { dogsId }, ...options });
      
      const subScribeToMoreOverride:QueryDogModelByIdSubScribeToMore = (options) => { _query.subscribeToMore({document: QueryDogModelByIdDocument, variables: { dogsId } as QueryDogModelByIdQueryVariables, ...options });}
      const { subscribeToMore, ...query } = _query;      
      return { ...query, subscribeToMore:subScribeToMoreOverride, dogModel: query?.data?.dogs_by_pk };
    }
    

    /**
     *  Lazy Query Hook
     */
    
    // Types
    type PickQueryDogModelByIdFn = (query: QueryDogModelByIdQuery | null | undefined) =>DogModelFragment | null | undefined;
    type QueryDogModelByIdLazyFn = [(options?: QueryLazyOptions<QueryDogModelByIdQueryVariables> | undefined) => void, QueryDogModelByIdResult]
    type QueryDogModelByIdWrappedLazyFn = (options: Omit<QueryLazyOptions<QueryDogModelByIdQueryVariables>, "variables">) => void;
    export type QueryDogModelByIdLazyReturn = [QueryDogModelByIdWrappedLazyFn, QueryDogModelByIdResultEx];

    // Function
    function useQueryDogModelByIdLazy({ dogsId, options }: { dogsId: string; options?: Omit<QueryHookOptions<QueryDogModelByIdQuery, QueryDogModelByIdQueryVariables>, "query" | "variables">; }): QueryDogModelByIdLazyReturn {
      const lazyQuery: QueryDogModelByIdLazyFn = useLazyQuery<QueryDogModelByIdQuery, QueryDogModelByIdQueryVariables>(QueryDogModelByIdDocument, options);
      
      // Setting up typed version of lazyQuery
      const pickQueryDogModelById: PickQueryDogModelByIdFn = query => { return query && query.dogs_by_pk; };
      const wrappedLazyQuery: QueryDogModelByIdWrappedLazyFn = (options) => { return lazyQuery[0](options); };
      
      // Switching out SubcribeToMore with typed version
      const typedSubcribeToMore:QueryDogModelByIdSubScribeToMore = (options) => { lazyQuery[1].subscribeToMore({document: QueryDogModelByIdDocument, variables: { dogsId } as QueryDogModelByIdQueryVariables, ...options });}
      const { subscribeToMore, ...lazyQueryResult } = lazyQuery[1];  

      return [wrappedLazyQuery, { ...lazyQueryResult, subscribeToMore:typedSubcribeToMore, dogModel: pickQueryDogModelById(lazyQuery[1].data) }];
    }
    

    /**
     *  Query Collection Hook
     */

    // Types
    export type QueryDogModelObjectsResult = QueryResult<QueryDogModelObjectsQuery, QueryDogModelObjectsQueryVariables>;
    export type QueryDogModelObjectsResultEx = QueryDogModelObjectsResult & DogModelObjectsHookResultEx;

    // Function
    function useQueryDogModelObjects(options: Omit<QueryHookOptions<QueryDogModelObjectsQuery, QueryDogModelObjectsQueryVariables>, "query">): QueryDogModelObjectsResultEx {
      const query:QueryDogModelObjectsResult = useQuery<QueryDogModelObjectsQuery, QueryDogModelObjectsQueryVariables>(QueryDogModelObjectsDocument, options);
      return { ...query, objects: query?.data?.dogs || [] };
    }
    
  
    /**
     *  Lazy Query Collection Hook
     */

    // Types
    type PickQueryDogModelObjectsFn = (query: QueryDogModelObjectsQuery | null | undefined) => DogModelFragment[];
    type QueryDogModelObjectsLazyFn = [(options?: QueryLazyOptions<QueryDogModelObjectsQueryVariables> | undefined) => void, QueryDogModelObjectsResult]
    type QueryDogModelObjectsWrappedLazyFn = (options?: QueryLazyOptions<QueryDogModelObjectsQueryVariables>) => void;
    export type QueryDogModelObjectsLazyReturn = [QueryDogModelObjectsWrappedLazyFn, QueryDogModelObjectsResultEx];

    // Function
    function useQueryDogModelObjectsLazy(options?: Omit<LazyQueryHookOptions<QueryDogModelObjectsQuery, QueryDogModelObjectsQueryVariables>, "query">): QueryDogModelObjectsLazyReturn {
      const lazyQuery: QueryDogModelObjectsLazyFn = useLazyQuery<QueryDogModelObjectsQuery, QueryDogModelObjectsQueryVariables>(QueryDogModelObjectsDocument, options);
      const pickObjects: PickQueryDogModelObjectsFn = (query: QueryDogModelObjectsQuery | null | undefined) => { return query?.dogs || []; };
      const wrappedLazyQuery: QueryDogModelObjectsWrappedLazyFn = (options) => { return lazyQuery[0]( options ); };
      return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects(lazyQuery[1].data) }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
    }
  
     
    /**
     *  Subscription Hook
     */

    // Types
    type SubscribeToDogModelByIdResult = { variables: SubscribeToDogModelByIdSubscriptionVariables; loading: boolean; data?: SubscribeToDogModelByIdSubscription; error?: ApolloError | undefined; };
    export type SubscribeToDogModelByIdResultEx = SubscribeToDogModelByIdResult & DogModelByIdHookResultEx;

    // Function
    function useSubscribeToDogModelById({ dogsId, options }: { dogsId: string; options?: Omit<SubscriptionHookOptions<SubscribeToDogModelByIdSubscription, SubscribeToDogModelByIdSubscriptionVariables>, "query" | "variables">; }): SubscribeToDogModelByIdResultEx {
      const subscription: SubscribeToDogModelByIdResult = useSubscription<SubscribeToDogModelByIdSubscription, SubscribeToDogModelByIdSubscriptionVariables>(SubscribeToDogModelByIdDocument, { variables: { dogsId }, ...options });
      return { ...subscription, dogModel: subscription?.data?.dogs_by_pk };
    }
    

    /**
     *  Subscription Collection Hook
     */

    // Types
    export type SubscribeToDogModelObjectsResult = { variables: SubscribeToDogModelObjectsSubscriptionVariables; loading: boolean; data?: SubscribeToDogModelObjectsSubscription; error?: ApolloError | undefined; };
    export type SubscribeToDogModelObjectsResultEx = SubscribeToDogModelObjectsResult & DogModelObjectsHookResultEx;

    // Function
    function useSubscribeToDogModelObjects(options: Omit<SubscriptionHookOptions<SubscribeToDogModelObjectsSubscription, SubscribeToDogModelObjectsSubscriptionVariables>, "query">): SubscribeToDogModelObjectsResultEx {
      const subscription:SubscribeToDogModelObjectsResult = useSubscription<SubscribeToDogModelObjectsSubscription, SubscribeToDogModelObjectsSubscriptionVariables>(SubscribeToDogModelObjectsDocument, options);
      return { ...subscription, objects: subscription?.data?.dogs || [] };
    }
    

    /**
     *  Insert Hooks
     */

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
      const pickDogModel: PickInsertDogModelFn = (mutation) => { return mutation?.insert_dogs?.returning && mutation?.insert_dogs?.returning[0]; };

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
      const pickDogModel: PickInsertDogModelFn = (mutation: InsertDogModelMutation | null | undefined) => { return mutation?.insert_dogs?.returning && mutation.insert_dogs.returning[0]; };

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
      const pickObjects: PickInsertDogModelObjectsFn = (mutation: InsertDogModelMutation | null | undefined) => { return mutation?.insert_dogs?.returning || []; };

      const wrappedLazyMutation: InsertDogModelObjectsWrappedLazyMutationFn = async ( options ) => {
        const fetchResult: InsertDogModelObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }
  

    /**
     *  Update Hooks
     */
    
    type UpdateDogModelByIdMutationResult = FetchResult<UpdateDogModelByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateDogModelByIdMutationResultEx = UpdateDogModelByIdMutationResult & DogModelByIdHookResultEx;

    type PickUpdateDogModelByIdFn = (mutation: UpdateDogModelByIdMutation | null | undefined) => DogModelFragment | null | undefined;
    type UpdateDogModelByIdLazyMutationFn = MutationTuple<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>;
    type UpdateDogModelByIdWrappedLazyMutationFn = ({ dogsId, set, autoOptimisticResponse, options }: { dogsId: string; set: Dogs_Set_Input; autoOptimisticResponse?: boolean; options?: Omit<MutationFunctionOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>, "variables">; }) => Promise<UpdateDogModelByIdMutationResultEx>;
    export type UpdateDogModelByIdLazyMutationReturn = [UpdateDogModelByIdWrappedLazyMutationFn, UpdateDogModelByIdMutationResultEx];

    function useUpdateDogModelById(options?: Omit<MutationHookOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>, "mutation" | "variables">): UpdateDogModelByIdLazyMutationReturn {
      const lazyMutation: UpdateDogModelByIdLazyMutationFn = useMutation<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>(UpdateDogModelByIdDocument, options);

      const pickDogModel: PickUpdateDogModelByIdFn = (mutation) => { return mutation?.update_dogs?.returning && mutation.update_dogs!.returning[0]; };

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
        return mutation?.update_dogs?.returning || [];
      };

      const wrappedLazyMutation: UpdateDogModelObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: UpdateDogModelObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }
  

    /**
     *  Delete Hooks
     */

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
        return mutation?.delete_dogs?.affected_rows || 0;
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
        return mutation?.delete_dogs?.affected_rows || 0;
      };

      const wrappedLazyMutation: RemoveDogsModelObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: RemoveDogsModelObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, affected_rows: pickAffectedRows(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows(lazyMutation[1].data) }];
    }
  

    /*
     * DogModel FRAGMENT HOOKS OBJECT
     */

    export const DogModelFragmentGQLHooks = {
      useQueryById: useQueryDogModelById,
      useQueryByIdLazy: useQueryDogModelByIdLazy,
      useQueryObjects: useQueryDogModelObjects,
      useQueryObjectsLazy: useQueryDogModelObjectsLazy,
      useInsert: useInsertDogModel,
      useInsertWithOnConflict: useInsertDogModelWithOnConflict,
      useInsertObjects: useInsertDogModelObjects,
      useUpdateById: useUpdateDogModelById,
      useUpdateObjects: useUpdateDogModelObjects,
    }
  

    /*
    * dogs MODEL HOOKS OBJECT
    */

    export const DogsModelGQLHooks = {
      useRemoveById: useRemoveDogsModelById,
      useRemoveObjects: useRemoveDogsModelObjects
    }
  

    /*
     * COMBINED HOOKS OBJECT
     */
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
  