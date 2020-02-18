import { ObjectWithId, generateOptimisticResponseForMutation, generateUpdateFunctionForMutation } from 'graphql-codegen-hasura-core'
import { QueryHookOptions, useQuery, LazyQueryHookOptions, useLazyQuery, MutationHookOptions, useMutation, QueryLazyOptions, MutationFunctionOptions, LazyQueryResult, MutationTuple, FetchResult, SubscriptionResult, SubscriptionHookOptions, useSubscription, ApolloError, SubscribeToMoreOptions } from '@apollo/client';
import { VehicleFragment } from '../';
import { QueryVehicleByIdQuery } from '../';
import { QueryVehicleByIdQueryVariables } from '../';
import { QueryVehicleByIdDocument } from '../';
import { QueryVehicleObjectsQuery } from '../';
import { QueryVehicleObjectsDocument } from '../';
import { QueryVehicleObjectsQueryVariables } from '../';
import { SubscribeToVehicleByIdSubscription } from '../';
import { SubscribeToVehicleByIdSubscriptionVariables } from '../';
import { SubscribeToVehicleByIdDocument } from '../';
import { SubscribeToVehicleObjectsSubscription } from '../';
import { SubscribeToVehicleObjectsDocument } from '../';
import { SubscribeToVehicleObjectsSubscriptionVariables } from '../';
import { Vehicle_Insert_Input } from '../';
import { Vehicle_On_Conflict } from '../';
import { InsertVehicleMutation } from '../';
import { InsertVehicleMutationVariables } from '../';
import { InsertVehicleWithOnConflictMutationVariables } from '../';
import { InsertVehicleDocument } from '../';
import { InsertVehicleWithOnConflictDocument } from '../';
import { Vehicle_Set_Input } from '../';
import { UpdateVehicleByIdMutation } from '../';
import { UpdateVehicleByIdMutationVariables } from '../';
import { UpdateVehicleByIdDocument } from '../';
import { UpdateVehicleMutation } from '../';
import { UpdateVehicleMutationVariables } from '../';
import { UpdateVehicleDocument } from '../';
import { RemoveVehicleModelMutation } from '../';
import { RemoveVehicleModelMutationVariables } from '../';
import { RemoveVehicleModelDocument } from '../';
import { RemoveVehicleModelByIdMutation } from '../';
import { RemoveVehicleModelByIdMutationVariables } from '../';
import { RemoveVehicleModelByIdDocument } from '../';
import { VehicleLocationOnlyFragment } from '../';
import { QueryVehicleLocationOnlyByIdQuery } from '../';
import { QueryVehicleLocationOnlyByIdQueryVariables } from '../';
import { QueryVehicleLocationOnlyByIdDocument } from '../';
import { QueryVehicleLocationOnlyObjectsQuery } from '../';
import { QueryVehicleLocationOnlyObjectsDocument } from '../';
import { QueryVehicleLocationOnlyObjectsQueryVariables } from '../';
import { SubscribeToVehicleLocationOnlyByIdSubscription } from '../';
import { SubscribeToVehicleLocationOnlyByIdSubscriptionVariables } from '../';
import { SubscribeToVehicleLocationOnlyByIdDocument } from '../';
import { SubscribeToVehicleLocationOnlyObjectsSubscription } from '../';
import { SubscribeToVehicleLocationOnlyObjectsDocument } from '../';
import { SubscribeToVehicleLocationOnlyObjectsSubscriptionVariables } from '../';
import { InsertVehicleLocationOnlyMutation } from '../';
import { InsertVehicleLocationOnlyMutationVariables } from '../';
import { InsertVehicleLocationOnlyWithOnConflictMutationVariables } from '../';
import { InsertVehicleLocationOnlyDocument } from '../';
import { InsertVehicleLocationOnlyWithOnConflictDocument } from '../';
import { UpdateVehicleLocationOnlyByIdMutation } from '../';
import { UpdateVehicleLocationOnlyByIdMutationVariables } from '../';
import { UpdateVehicleLocationOnlyByIdDocument } from '../';
import { UpdateVehicleLocationOnlyMutation } from '../';
import { UpdateVehicleLocationOnlyMutationVariables } from '../';
import { UpdateVehicleLocationOnlyDocument } from '../';
import { DogFragment } from '../';
import { QueryDogByIdQuery } from '../';
import { QueryDogByIdQueryVariables } from '../';
import { QueryDogByIdDocument } from '../';
import { QueryDogObjectsQuery } from '../';
import { QueryDogObjectsDocument } from '../';
import { QueryDogObjectsQueryVariables } from '../';
import { SubscribeToDogByIdSubscription } from '../';
import { SubscribeToDogByIdSubscriptionVariables } from '../';
import { SubscribeToDogByIdDocument } from '../';
import { SubscribeToDogObjectsSubscription } from '../';
import { SubscribeToDogObjectsDocument } from '../';
import { SubscribeToDogObjectsSubscriptionVariables } from '../';
import { Dogs_Insert_Input } from '../';
import { Dogs_On_Conflict } from '../';
import { InsertDogMutation } from '../';
import { InsertDogMutationVariables } from '../';
import { InsertDogWithOnConflictMutationVariables } from '../';
import { InsertDogDocument } from '../';
import { InsertDogWithOnConflictDocument } from '../';
import { Dogs_Set_Input } from '../';
import { UpdateDogByIdMutation } from '../';
import { UpdateDogByIdMutationVariables } from '../';
import { UpdateDogByIdDocument } from '../';
import { UpdateDogMutation } from '../';
import { UpdateDogMutationVariables } from '../';
import { UpdateDogDocument } from '../';
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

    export type VehicleByIdHookResultEx = { vehicle:VehicleFragment | null | undefined };
    export type VehicleObjectsHookResultEx = { objects:VehicleFragment[] };

  

    /**
     *  Query Hook
     */

    // Types
    type QueryVehicleByIdResult = LazyQueryResult<QueryVehicleByIdQuery, QueryVehicleByIdQueryVariables>;
    type QueryVehicleByIdSubScribeToMore = (options?: Omit<SubscribeToMoreOptions<QueryVehicleByIdQuery, QueryVehicleByIdQueryVariables, QueryVehicleByIdQuery>, 'document' | 'variables'> | undefined) => void
    export type QueryVehicleByIdResultEx = Omit<QueryVehicleByIdResult, 'subscribeToMore'> & { subscribeToMore:QueryVehicleByIdSubScribeToMore } & VehicleByIdHookResultEx;

    // Function
    function useQueryVehicleById({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryHookOptions<QueryVehicleByIdQuery, QueryVehicleByIdQueryVariables>, "query" | "variables">; }): QueryVehicleByIdResultEx {
      const _query: QueryVehicleByIdResult = useQuery<QueryVehicleByIdQuery, QueryVehicleByIdQueryVariables>(QueryVehicleByIdDocument, { variables: { vehicleId }, ...options });
      
      const typedSubscribeToMore:QueryVehicleByIdSubScribeToMore = (options) => { _query.subscribeToMore({document: QueryVehicleByIdDocument, variables: { vehicleId } as QueryVehicleByIdQueryVariables, ...options });}
      const { subscribeToMore, ...query } = _query;      
      return { ...query, subscribeToMore:typedSubscribeToMore, vehicle: query?.data?.vehicle_by_pk };
    }
    

    /**
     *  Lazy Query Hook
     */
    
    // Types
    type PickQueryVehicleByIdFn = (query: QueryVehicleByIdQuery | null | undefined) =>VehicleFragment | null | undefined;
    type QueryVehicleByIdLazyFn = [(options?: QueryLazyOptions<QueryVehicleByIdQueryVariables> | undefined) => void, QueryVehicleByIdResult]
    type QueryVehicleByIdWrappedLazyFn = (options: Omit<QueryLazyOptions<QueryVehicleByIdQueryVariables>, "variables">) => void;
    export type QueryVehicleByIdLazyReturn = [QueryVehicleByIdWrappedLazyFn, QueryVehicleByIdResultEx];

    // Function
    function useQueryVehicleByIdLazy({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryHookOptions<QueryVehicleByIdQuery, QueryVehicleByIdQueryVariables>, "query" | "variables">; }): QueryVehicleByIdLazyReturn {
      const lazyQuery: QueryVehicleByIdLazyFn = useLazyQuery<QueryVehicleByIdQuery, QueryVehicleByIdQueryVariables>(QueryVehicleByIdDocument, options);
      
      // Setting up typed version of lazyQuery
      const pickQueryVehicleById: PickQueryVehicleByIdFn = query => { return query && query.vehicle_by_pk; };
      const wrappedLazyQuery: QueryVehicleByIdWrappedLazyFn = (options) => { return lazyQuery[0](options); };
      
      // Switching out SubcribeToMore with typed version
      const typedSubcribeToMore:QueryVehicleByIdSubScribeToMore = (options) => { lazyQuery[1].subscribeToMore && lazyQuery[1].subscribeToMore({document: QueryVehicleByIdDocument, variables: { vehicleId } as QueryVehicleByIdQueryVariables, ...options });}
      const { subscribeToMore, ...lazyQueryResult } = lazyQuery[1];  

      return [wrappedLazyQuery, { ...lazyQueryResult, subscribeToMore:typedSubcribeToMore, vehicle: pickQueryVehicleById(lazyQuery[1].data) }];
    }
    

    /**
     *  Query Collection Hook
     */

    // Types
    export type QueryVehicleObjectsResult = LazyQueryResult<QueryVehicleObjectsQuery, QueryVehicleObjectsQueryVariables>;
    type QueryVehicleObjectsSubScribeToMore = (options?: Omit<SubscribeToMoreOptions<QueryVehicleObjectsQuery, QueryVehicleObjectsQueryVariables, QueryVehicleObjectsQuery>, 'document' | 'variables'> | undefined) => void
    export type QueryVehicleObjectsResultEx = Omit<QueryVehicleObjectsResult, 'subscribeToMore'> & { subscribeToMore:QueryVehicleObjectsSubScribeToMore } & VehicleObjectsHookResultEx;

    // Function
    function useQueryVehicleObjects(options: Omit<QueryHookOptions<QueryVehicleObjectsQuery, QueryVehicleObjectsQueryVariables>, "query">): QueryVehicleObjectsResultEx {
      const _query:QueryVehicleObjectsResult = useQuery<QueryVehicleObjectsQuery, QueryVehicleObjectsQueryVariables>(QueryVehicleObjectsDocument, options);

      const typedSubscribeToMore:QueryVehicleObjectsSubScribeToMore = (options) => { _query.subscribeToMore({document: QueryVehicleObjectsDocument, ...options });}
      const { subscribeToMore, ...query } = _query;  

      return { ...query, subscribeToMore:typedSubscribeToMore, objects: query?.data?.vehicle || [] };
    }
    
  
    /**
     *  Lazy Query Collection Hook
     */

    // Types
    type PickQueryVehicleObjectsFn = (query: QueryVehicleObjectsQuery | null | undefined) => VehicleFragment[];
    type QueryVehicleObjectsLazyFn = [(options?: QueryLazyOptions<QueryVehicleObjectsQueryVariables> | undefined) => void, QueryVehicleObjectsResult]
    type QueryVehicleObjectsWrappedLazyFn = (options?: QueryLazyOptions<QueryVehicleObjectsQueryVariables>) => void;
    export type QueryVehicleObjectsLazyReturn = [QueryVehicleObjectsWrappedLazyFn, QueryVehicleObjectsResultEx];

    // Function
    function useQueryVehicleObjectsLazy(options?: Omit<LazyQueryHookOptions<QueryVehicleObjectsQuery, QueryVehicleObjectsQueryVariables>, "query">): QueryVehicleObjectsLazyReturn {
      const lazyQuery: QueryVehicleObjectsLazyFn = useLazyQuery<QueryVehicleObjectsQuery, QueryVehicleObjectsQueryVariables>(QueryVehicleObjectsDocument, options);
      
      // Setting up typed version of lazyQuery
      const pickObjects: PickQueryVehicleObjectsFn = (query: QueryVehicleObjectsQuery | null | undefined) => { return query?.vehicle || []; };
      const wrappedLazyQuery: QueryVehicleObjectsWrappedLazyFn = (options) => { return lazyQuery[0]( options ); };
      
      // Switching out SubcribeToMore with typed version
      const typedSubcribeToMore:QueryVehicleObjectsSubScribeToMore = (options) => { lazyQuery[1].subscribeToMore && lazyQuery[1].subscribeToMore({document: QueryVehicleObjectsDocument, ...options });}
      const { subscribeToMore, ...lazyQueryResult } = lazyQuery[1];  
      
      return [wrappedLazyQuery, { ...lazyQueryResult, subscribeToMore:typedSubcribeToMore, objects: pickObjects(lazyQuery[1].data) }];
    }
  
     
    /**
     *  Subscription Hook
     */

    // Types
    type SubscribeToVehicleByIdResult = { variables: SubscribeToVehicleByIdSubscriptionVariables; loading: boolean; data?: SubscribeToVehicleByIdSubscription; error?: ApolloError | undefined; };
    export type SubscribeToVehicleByIdResultEx = SubscribeToVehicleByIdResult & VehicleByIdHookResultEx;

    // Function
    function useSubscribeToVehicleById({ vehicleId, options }: { vehicleId: string; options?: Omit<SubscriptionHookOptions<SubscribeToVehicleByIdSubscription, SubscribeToVehicleByIdSubscriptionVariables>, "query" | "variables">; }): SubscribeToVehicleByIdResultEx {
      const subscription: SubscribeToVehicleByIdResult = useSubscription<SubscribeToVehicleByIdSubscription, SubscribeToVehicleByIdSubscriptionVariables>(SubscribeToVehicleByIdDocument, { variables: { vehicleId }, ...options });
      return { ...subscription, vehicle: subscription?.data?.vehicle_by_pk };
    }
    

    /**
     *  Subscription Collection Hook
     */

    // Types
    export type SubscribeToVehicleObjectsResult = { variables: SubscribeToVehicleObjectsSubscriptionVariables; loading: boolean; data?: SubscribeToVehicleObjectsSubscription; error?: ApolloError | undefined; };
    export type SubscribeToVehicleObjectsResultEx = SubscribeToVehicleObjectsResult & VehicleObjectsHookResultEx;

    // Function
    function useSubscribeToVehicleObjects(options: Omit<SubscriptionHookOptions<SubscribeToVehicleObjectsSubscription, SubscribeToVehicleObjectsSubscriptionVariables>, "query">): SubscribeToVehicleObjectsResultEx {
      const subscription:SubscribeToVehicleObjectsResult = useSubscription<SubscribeToVehicleObjectsSubscription, SubscribeToVehicleObjectsSubscriptionVariables>(SubscribeToVehicleObjectsDocument, options);
      return { ...subscription, objects: subscription?.data?.vehicle || [] };
    }
    

    /**
     *  Insert Hooks
     */

    // Types
    type InsertVehicleMutationResult = FetchResult<InsertVehicleMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleMutationResultEx = InsertVehicleMutationResult & VehicleByIdHookResultEx;

    type PickInsertVehicleFn = (mutation: InsertVehicleMutation | null | undefined) => VehicleFragment | null | undefined;
    type InsertVehicleLazyMutationFn = MutationTuple<InsertVehicleMutation, InsertVehicleMutationVariables>;
    type InsertVehicleWrappedLazyMutationFn = ({ vehicle, autoOptimisticResponse, options }: { vehicle: Vehicle_Insert_Input; autoOptimisticResponse?:boolean, options?: Omit<MutationFunctionOptions<InsertVehicleMutation, InsertVehicleMutationVariables>, "variables">; }) => Promise<InsertVehicleMutationResultEx>;
    export type InsertVehicleLazyMutationReturn = [InsertVehicleWrappedLazyMutationFn, InsertVehicleMutationResultEx];

    // Function
    function useInsertVehicle(options?: Omit<MutationHookOptions<InsertVehicleMutation, InsertVehicleMutationVariables>, "mutation" | "variables">): InsertVehicleLazyMutationReturn {
      const lazyMutation: InsertVehicleLazyMutationFn = useMutation<InsertVehicleMutation, InsertVehicleMutationVariables>(InsertVehicleDocument, options);
      const pickVehicle: PickInsertVehicleFn = (mutation) => { return mutation?.insert_vehicle?.returning && mutation?.insert_vehicle?.returning[0]; };

      const wrappedLazyMutation: InsertVehicleWrappedLazyMutationFn = async ({ vehicle, autoOptimisticResponse, options }) => {
        const mutationOptions:MutationFunctionOptions<InsertVehicleMutation, InsertVehicleMutationVariables> = { variables: { objects: [vehicle] }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
          if(!vehicle.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`);
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleMutation>({ operationType: 'insert', entityName:'vehicle', objects:[vehicle as Vehicle_Insert_Input & ObjectWithId] 
        }); }

        const fetchResult = await lazyMutation[0](mutationOptions);
        
        return { ...fetchResult, vehicle: pickVehicle(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], vehicle: pickVehicle(lazyMutation[1].data) }];
    }
  

    //
    //

    // Types
    type InsertVehicleWithOnConflictLazyMutationFn = MutationTuple<InsertVehicleMutation, InsertVehicleWithOnConflictMutationVariables>;
    type InsertVehicleWithOnConflictWrappedLazyMutationFn = ({ vehicle, onConflict, autoOptimisticResponse, options }: { vehicle: Vehicle_Insert_Input; onConflict: Vehicle_On_Conflict, autoOptimisticResponse?:boolean; options?: Omit<MutationFunctionOptions<InsertVehicleMutation, InsertVehicleWithOnConflictMutationVariables>, "variables">; }) => Promise<InsertVehicleMutationResultEx>;
    export type InsertVehicleWithOnConflictLazyMutationReturn = [InsertVehicleWithOnConflictWrappedLazyMutationFn, InsertVehicleMutationResultEx];

    // Function
    function useInsertVehicleWithOnConflict( options?: Omit<MutationHookOptions<InsertVehicleMutation, InsertVehicleMutationVariables>, "mutation" | "variables"> ): InsertVehicleWithOnConflictLazyMutationReturn {
      const lazyMutation: InsertVehicleWithOnConflictLazyMutationFn = useMutation<InsertVehicleMutation, InsertVehicleWithOnConflictMutationVariables>(InsertVehicleWithOnConflictDocument, options);
      const pickVehicle: PickInsertVehicleFn = (mutation: InsertVehicleMutation | null | undefined) => { return mutation?.insert_vehicle?.returning && mutation.insert_vehicle.returning[0]; };

      const wrappedLazyMutation:InsertVehicleWithOnConflictWrappedLazyMutationFn = async ({ vehicle, onConflict, autoOptimisticResponse, options }) => {
        const mutationOptions:MutationFunctionOptions<InsertVehicleMutation, InsertVehicleWithOnConflictMutationVariables> = { variables: { objects: [vehicle], onConflict }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
          if(!vehicle.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`);
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleMutation>({ operationType: 'insert', entityName:'vehicle', objects:[vehicle as Vehicle_Insert_Input & ObjectWithId] }); 
        }

        const fetchResult = await lazyMutation[0](mutationOptions);
        
        return { ...fetchResult, vehicle: pickVehicle(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], vehicle: pickVehicle(lazyMutation[1].data) }];
    }
  

    // Types
    type InsertVehicleObjectsMutationResult = FetchResult<InsertVehicleMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleObjectsMutationResultEx = InsertVehicleMutationResult & VehicleObjectsHookResultEx;

    type PickInsertVehicleObjectsFn = (mutation: InsertVehicleMutation | null | undefined) => VehicleFragment[];
    type InsertVehicleObjectsLazyMutationFn = MutationTuple<InsertVehicleMutation, InsertVehicleMutationVariables>;
    type InsertVehicleObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<InsertVehicleMutation, InsertVehicleMutationVariables>) => Promise<InsertVehicleObjectsMutationResultEx>;
    export type InsertVehicleObjectsLazyMutationReturn = [InsertVehicleObjectsWrappedLazyMutationFn, InsertVehicleObjectsMutationResultEx];

    // Function
    function useInsertVehicleObjects(options?: Omit<MutationHookOptions<InsertVehicleMutation, InsertVehicleMutationVariables>, "mutation">): InsertVehicleObjectsLazyMutationReturn {
      const lazyMutation: InsertVehicleObjectsLazyMutationFn = useMutation<InsertVehicleMutation, InsertVehicleMutationVariables>(InsertVehicleDocument, options);
      const pickObjects: PickInsertVehicleObjectsFn = (mutation: InsertVehicleMutation | null | undefined) => { return mutation?.insert_vehicle?.returning || []; };

      const wrappedLazyMutation: InsertVehicleObjectsWrappedLazyMutationFn = async ( options ) => {
        const fetchResult: InsertVehicleObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }
  

    /**
     *  Update Hooks
     */
    
    type UpdateVehicleByIdMutationResult = FetchResult<UpdateVehicleByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleByIdMutationResultEx = UpdateVehicleByIdMutationResult & VehicleByIdHookResultEx;

    type PickUpdateVehicleByIdFn = (mutation: UpdateVehicleByIdMutation | null | undefined) => VehicleFragment | null | undefined;
    type UpdateVehicleByIdLazyMutationFn = MutationTuple<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables>;
    type UpdateVehicleByIdWrappedLazyMutationFn = ({ vehicleId, set, autoOptimisticResponse, options }: { vehicleId: string; set: Vehicle_Set_Input; autoOptimisticResponse?: boolean; options?: Omit<MutationFunctionOptions<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables>, "variables">; }) => Promise<UpdateVehicleByIdMutationResultEx>;
    export type UpdateVehicleByIdLazyMutationReturn = [UpdateVehicleByIdWrappedLazyMutationFn, UpdateVehicleByIdMutationResultEx];

    function useUpdateVehicleById(options?: Omit<MutationHookOptions<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables>, "mutation" | "variables">): UpdateVehicleByIdLazyMutationReturn {
      const lazyMutation: UpdateVehicleByIdLazyMutationFn = useMutation<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables>(UpdateVehicleByIdDocument, options);

      const pickVehicle: PickUpdateVehicleByIdFn = (mutation) => { return mutation?.update_vehicle?.returning && mutation.update_vehicle!.returning[0]; };

      const wrappedLazyMutation: UpdateVehicleByIdWrappedLazyMutationFn = async ({ vehicleId, set, autoOptimisticResponse, options }) => {
        const mutationOptions: MutationFunctionOptions<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables> = { variables: { id: vehicleId, set }, ...options };
        if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateVehicleByIdMutation>({ operationType: 'update', entityName:'vehicle', objects:[{ id:vehicleId, ...set }] });
        }

        const fetchResult: UpdateVehicleByIdMutationResult = await lazyMutation[0]({ variables: { id: vehicleId, set }, ...mutationOptions });
        return { ...fetchResult, vehicle: pickVehicle(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], vehicle: pickVehicle(lazyMutation[1].data) }];
    }
  

    //
    //

    // Types
    type UpdateVehicleObjectsMutationResult = FetchResult<UpdateVehicleMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleObjectsMutationResultEx = UpdateVehicleObjectsMutationResult & VehicleObjectsHookResultEx;

    // Function
    type PickUpdateVehicleObjectsFn = (mutation: UpdateVehicleMutation | null | undefined) => VehicleFragment[];
    type UpdateVehicleObjectsLazyMutationFn = MutationTuple<UpdateVehicleMutation, UpdateVehicleMutationVariables>;
    type UpdateVehicleObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>) => Promise<UpdateVehicleObjectsMutationResultEx>;
    export type UpdateVehicleObjectsLazyMutationReturn = [UpdateVehicleObjectsWrappedLazyMutationFn, UpdateVehicleObjectsMutationResultEx];

    function useUpdateVehicleObjects(options?: Omit<MutationHookOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>, "mutation">): UpdateVehicleObjectsLazyMutationReturn {
      const lazyMutation: UpdateVehicleObjectsLazyMutationFn = useMutation<UpdateVehicleMutation, UpdateVehicleMutationVariables>(UpdateVehicleDocument, options);

      const pickObjects: PickUpdateVehicleObjectsFn = (mutation: UpdateVehicleMutation | null | undefined) => {
        return mutation?.update_vehicle?.returning || [];
      };

      const wrappedLazyMutation: UpdateVehicleObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: UpdateVehicleObjectsMutationResult = await lazyMutation[0](options);
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
  

    // Vehicle Fragment Helper Object
    //------------------------------------------------

    export const VehicleFragmentGQLHooks = {
      useQueryById: useQueryVehicleById,
      useQueryByIdLazy: useQueryVehicleByIdLazy,
      useQueryObjects: useQueryVehicleObjects,
      useQueryObjectsLazy: useQueryVehicleObjectsLazy,
      useSubscribeToById: useSubscribeToVehicleById,
      useSubscribeToObjects: useSubscribeToVehicleObjects,
      useInsert: useInsertVehicle,
      useInsertWithOnConflict: useInsertVehicleWithOnConflict,
      useInsertObjects: useInsertVehicleObjects,
      useUpdateById: useUpdateVehicleById,
      useUpdateObjects: useUpdateVehicleObjects,
    }
    

    // vehicle MODEL HOOKS OBJECT
    //------------------------------------------------

    export const VehicleModelGQLHooks = {
      useRemoveById: useRemoveVehicleModelById,
      useRemoveObjects: useRemoveVehicleModelObjects
    }
  

    // vehicle REACT
    //------------------------------------------------

    export type VehicleLocationOnlyByIdHookResultEx = { vehicleLocationOnly:VehicleLocationOnlyFragment | null | undefined };
    export type VehicleLocationOnlyObjectsHookResultEx = { objects:VehicleLocationOnlyFragment[] };

  

    /**
     *  Query Hook
     */

    // Types
    type QueryVehicleLocationOnlyByIdResult = LazyQueryResult<QueryVehicleLocationOnlyByIdQuery, QueryVehicleLocationOnlyByIdQueryVariables>;
    type QueryVehicleLocationOnlyByIdSubScribeToMore = (options?: Omit<SubscribeToMoreOptions<QueryVehicleLocationOnlyByIdQuery, QueryVehicleLocationOnlyByIdQueryVariables, QueryVehicleLocationOnlyByIdQuery>, 'document' | 'variables'> | undefined) => void
    export type QueryVehicleLocationOnlyByIdResultEx = Omit<QueryVehicleLocationOnlyByIdResult, 'subscribeToMore'> & { subscribeToMore:QueryVehicleLocationOnlyByIdSubScribeToMore } & VehicleLocationOnlyByIdHookResultEx;

    // Function
    function useQueryVehicleLocationOnlyById({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryHookOptions<QueryVehicleLocationOnlyByIdQuery, QueryVehicleLocationOnlyByIdQueryVariables>, "query" | "variables">; }): QueryVehicleLocationOnlyByIdResultEx {
      const _query: QueryVehicleLocationOnlyByIdResult = useQuery<QueryVehicleLocationOnlyByIdQuery, QueryVehicleLocationOnlyByIdQueryVariables>(QueryVehicleLocationOnlyByIdDocument, { variables: { vehicleId }, ...options });
      
      const typedSubscribeToMore:QueryVehicleLocationOnlyByIdSubScribeToMore = (options) => { _query.subscribeToMore({document: QueryVehicleLocationOnlyByIdDocument, variables: { vehicleId } as QueryVehicleLocationOnlyByIdQueryVariables, ...options });}
      const { subscribeToMore, ...query } = _query;      
      return { ...query, subscribeToMore:typedSubscribeToMore, vehicleLocationOnly: query?.data?.vehicle_by_pk };
    }
    

    /**
     *  Lazy Query Hook
     */
    
    // Types
    type PickQueryVehicleLocationOnlyByIdFn = (query: QueryVehicleLocationOnlyByIdQuery | null | undefined) =>VehicleLocationOnlyFragment | null | undefined;
    type QueryVehicleLocationOnlyByIdLazyFn = [(options?: QueryLazyOptions<QueryVehicleLocationOnlyByIdQueryVariables> | undefined) => void, QueryVehicleLocationOnlyByIdResult]
    type QueryVehicleLocationOnlyByIdWrappedLazyFn = (options: Omit<QueryLazyOptions<QueryVehicleLocationOnlyByIdQueryVariables>, "variables">) => void;
    export type QueryVehicleLocationOnlyByIdLazyReturn = [QueryVehicleLocationOnlyByIdWrappedLazyFn, QueryVehicleLocationOnlyByIdResultEx];

    // Function
    function useQueryVehicleLocationOnlyByIdLazy({ vehicleId, options }: { vehicleId: string; options?: Omit<QueryHookOptions<QueryVehicleLocationOnlyByIdQuery, QueryVehicleLocationOnlyByIdQueryVariables>, "query" | "variables">; }): QueryVehicleLocationOnlyByIdLazyReturn {
      const lazyQuery: QueryVehicleLocationOnlyByIdLazyFn = useLazyQuery<QueryVehicleLocationOnlyByIdQuery, QueryVehicleLocationOnlyByIdQueryVariables>(QueryVehicleLocationOnlyByIdDocument, options);
      
      // Setting up typed version of lazyQuery
      const pickQueryVehicleLocationOnlyById: PickQueryVehicleLocationOnlyByIdFn = query => { return query && query.vehicle_by_pk; };
      const wrappedLazyQuery: QueryVehicleLocationOnlyByIdWrappedLazyFn = (options) => { return lazyQuery[0](options); };
      
      // Switching out SubcribeToMore with typed version
      const typedSubcribeToMore:QueryVehicleLocationOnlyByIdSubScribeToMore = (options) => { lazyQuery[1].subscribeToMore && lazyQuery[1].subscribeToMore({document: QueryVehicleLocationOnlyByIdDocument, variables: { vehicleId } as QueryVehicleLocationOnlyByIdQueryVariables, ...options });}
      const { subscribeToMore, ...lazyQueryResult } = lazyQuery[1];  

      return [wrappedLazyQuery, { ...lazyQueryResult, subscribeToMore:typedSubcribeToMore, vehicleLocationOnly: pickQueryVehicleLocationOnlyById(lazyQuery[1].data) }];
    }
    

    /**
     *  Query Collection Hook
     */

    // Types
    export type QueryVehicleLocationOnlyObjectsResult = LazyQueryResult<QueryVehicleLocationOnlyObjectsQuery, QueryVehicleLocationOnlyObjectsQueryVariables>;
    type QueryVehicleLocationOnlyObjectsSubScribeToMore = (options?: Omit<SubscribeToMoreOptions<QueryVehicleLocationOnlyObjectsQuery, QueryVehicleLocationOnlyObjectsQueryVariables, QueryVehicleLocationOnlyObjectsQuery>, 'document' | 'variables'> | undefined) => void
    export type QueryVehicleLocationOnlyObjectsResultEx = Omit<QueryVehicleLocationOnlyObjectsResult, 'subscribeToMore'> & { subscribeToMore:QueryVehicleLocationOnlyObjectsSubScribeToMore } & VehicleLocationOnlyObjectsHookResultEx;

    // Function
    function useQueryVehicleLocationOnlyObjects(options: Omit<QueryHookOptions<QueryVehicleLocationOnlyObjectsQuery, QueryVehicleLocationOnlyObjectsQueryVariables>, "query">): QueryVehicleLocationOnlyObjectsResultEx {
      const _query:QueryVehicleLocationOnlyObjectsResult = useQuery<QueryVehicleLocationOnlyObjectsQuery, QueryVehicleLocationOnlyObjectsQueryVariables>(QueryVehicleLocationOnlyObjectsDocument, options);

      const typedSubscribeToMore:QueryVehicleLocationOnlyObjectsSubScribeToMore = (options) => { _query.subscribeToMore({document: QueryVehicleLocationOnlyObjectsDocument, ...options });}
      const { subscribeToMore, ...query } = _query;  

      return { ...query, subscribeToMore:typedSubscribeToMore, objects: query?.data?.vehicle || [] };
    }
    
  
    /**
     *  Lazy Query Collection Hook
     */

    // Types
    type PickQueryVehicleLocationOnlyObjectsFn = (query: QueryVehicleLocationOnlyObjectsQuery | null | undefined) => VehicleLocationOnlyFragment[];
    type QueryVehicleLocationOnlyObjectsLazyFn = [(options?: QueryLazyOptions<QueryVehicleLocationOnlyObjectsQueryVariables> | undefined) => void, QueryVehicleLocationOnlyObjectsResult]
    type QueryVehicleLocationOnlyObjectsWrappedLazyFn = (options?: QueryLazyOptions<QueryVehicleLocationOnlyObjectsQueryVariables>) => void;
    export type QueryVehicleLocationOnlyObjectsLazyReturn = [QueryVehicleLocationOnlyObjectsWrappedLazyFn, QueryVehicleLocationOnlyObjectsResultEx];

    // Function
    function useQueryVehicleLocationOnlyObjectsLazy(options?: Omit<LazyQueryHookOptions<QueryVehicleLocationOnlyObjectsQuery, QueryVehicleLocationOnlyObjectsQueryVariables>, "query">): QueryVehicleLocationOnlyObjectsLazyReturn {
      const lazyQuery: QueryVehicleLocationOnlyObjectsLazyFn = useLazyQuery<QueryVehicleLocationOnlyObjectsQuery, QueryVehicleLocationOnlyObjectsQueryVariables>(QueryVehicleLocationOnlyObjectsDocument, options);
      
      // Setting up typed version of lazyQuery
      const pickObjects: PickQueryVehicleLocationOnlyObjectsFn = (query: QueryVehicleLocationOnlyObjectsQuery | null | undefined) => { return query?.vehicle || []; };
      const wrappedLazyQuery: QueryVehicleLocationOnlyObjectsWrappedLazyFn = (options) => { return lazyQuery[0]( options ); };
      
      // Switching out SubcribeToMore with typed version
      const typedSubcribeToMore:QueryVehicleLocationOnlyObjectsSubScribeToMore = (options) => { lazyQuery[1].subscribeToMore && lazyQuery[1].subscribeToMore({document: QueryVehicleLocationOnlyObjectsDocument, ...options });}
      const { subscribeToMore, ...lazyQueryResult } = lazyQuery[1];  
      
      return [wrappedLazyQuery, { ...lazyQueryResult, subscribeToMore:typedSubcribeToMore, objects: pickObjects(lazyQuery[1].data) }];
    }
  
     
    /**
     *  Subscription Hook
     */

    // Types
    type SubscribeToVehicleLocationOnlyByIdResult = { variables: SubscribeToVehicleLocationOnlyByIdSubscriptionVariables; loading: boolean; data?: SubscribeToVehicleLocationOnlyByIdSubscription; error?: ApolloError | undefined; };
    export type SubscribeToVehicleLocationOnlyByIdResultEx = SubscribeToVehicleLocationOnlyByIdResult & VehicleLocationOnlyByIdHookResultEx;

    // Function
    function useSubscribeToVehicleLocationOnlyById({ vehicleId, options }: { vehicleId: string; options?: Omit<SubscriptionHookOptions<SubscribeToVehicleLocationOnlyByIdSubscription, SubscribeToVehicleLocationOnlyByIdSubscriptionVariables>, "query" | "variables">; }): SubscribeToVehicleLocationOnlyByIdResultEx {
      const subscription: SubscribeToVehicleLocationOnlyByIdResult = useSubscription<SubscribeToVehicleLocationOnlyByIdSubscription, SubscribeToVehicleLocationOnlyByIdSubscriptionVariables>(SubscribeToVehicleLocationOnlyByIdDocument, { variables: { vehicleId }, ...options });
      return { ...subscription, vehicleLocationOnly: subscription?.data?.vehicle_by_pk };
    }
    

    /**
     *  Subscription Collection Hook
     */

    // Types
    export type SubscribeToVehicleLocationOnlyObjectsResult = { variables: SubscribeToVehicleLocationOnlyObjectsSubscriptionVariables; loading: boolean; data?: SubscribeToVehicleLocationOnlyObjectsSubscription; error?: ApolloError | undefined; };
    export type SubscribeToVehicleLocationOnlyObjectsResultEx = SubscribeToVehicleLocationOnlyObjectsResult & VehicleLocationOnlyObjectsHookResultEx;

    // Function
    function useSubscribeToVehicleLocationOnlyObjects(options: Omit<SubscriptionHookOptions<SubscribeToVehicleLocationOnlyObjectsSubscription, SubscribeToVehicleLocationOnlyObjectsSubscriptionVariables>, "query">): SubscribeToVehicleLocationOnlyObjectsResultEx {
      const subscription:SubscribeToVehicleLocationOnlyObjectsResult = useSubscription<SubscribeToVehicleLocationOnlyObjectsSubscription, SubscribeToVehicleLocationOnlyObjectsSubscriptionVariables>(SubscribeToVehicleLocationOnlyObjectsDocument, options);
      return { ...subscription, objects: subscription?.data?.vehicle || [] };
    }
    

    /**
     *  Insert Hooks
     */

    // Types
    type InsertVehicleLocationOnlyMutationResult = FetchResult<InsertVehicleLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleLocationOnlyMutationResultEx = InsertVehicleLocationOnlyMutationResult & VehicleLocationOnlyByIdHookResultEx;

    type PickInsertVehicleLocationOnlyFn = (mutation: InsertVehicleLocationOnlyMutation | null | undefined) => VehicleLocationOnlyFragment | null | undefined;
    type InsertVehicleLocationOnlyLazyMutationFn = MutationTuple<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>;
    type InsertVehicleLocationOnlyWrappedLazyMutationFn = ({ vehicle, autoOptimisticResponse, options }: { vehicle: Vehicle_Insert_Input; autoOptimisticResponse?:boolean, options?: Omit<MutationFunctionOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>, "variables">; }) => Promise<InsertVehicleLocationOnlyMutationResultEx>;
    export type InsertVehicleLocationOnlyLazyMutationReturn = [InsertVehicleLocationOnlyWrappedLazyMutationFn, InsertVehicleLocationOnlyMutationResultEx];

    // Function
    function useInsertVehicleLocationOnly(options?: Omit<MutationHookOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>, "mutation" | "variables">): InsertVehicleLocationOnlyLazyMutationReturn {
      const lazyMutation: InsertVehicleLocationOnlyLazyMutationFn = useMutation<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>(InsertVehicleLocationOnlyDocument, options);
      const pickVehicleLocationOnly: PickInsertVehicleLocationOnlyFn = (mutation) => { return mutation?.insert_vehicle?.returning && mutation?.insert_vehicle?.returning[0]; };

      const wrappedLazyMutation: InsertVehicleLocationOnlyWrappedLazyMutationFn = async ({ vehicle, autoOptimisticResponse, options }) => {
        const mutationOptions:MutationFunctionOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables> = { variables: { objects: [vehicle] }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
          if(!vehicle.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`);
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleLocationOnlyMutation>({ operationType: 'insert', entityName:'vehicle', objects:[vehicle as Vehicle_Insert_Input & ObjectWithId] 
        }); }

        const fetchResult = await lazyMutation[0](mutationOptions);
        
        return { ...fetchResult, vehicleLocationOnly: pickVehicleLocationOnly(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], vehicleLocationOnly: pickVehicleLocationOnly(lazyMutation[1].data) }];
    }
  

    //
    //

    // Types
    type InsertVehicleLocationOnlyWithOnConflictLazyMutationFn = MutationTuple<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables>;
    type InsertVehicleLocationOnlyWithOnConflictWrappedLazyMutationFn = ({ vehicle, onConflict, autoOptimisticResponse, options }: { vehicle: Vehicle_Insert_Input; onConflict: Vehicle_On_Conflict, autoOptimisticResponse?:boolean; options?: Omit<MutationFunctionOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables>, "variables">; }) => Promise<InsertVehicleLocationOnlyMutationResultEx>;
    export type InsertVehicleLocationOnlyWithOnConflictLazyMutationReturn = [InsertVehicleLocationOnlyWithOnConflictWrappedLazyMutationFn, InsertVehicleLocationOnlyMutationResultEx];

    // Function
    function useInsertVehicleLocationOnlyWithOnConflict( options?: Omit<MutationHookOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>, "mutation" | "variables"> ): InsertVehicleLocationOnlyWithOnConflictLazyMutationReturn {
      const lazyMutation: InsertVehicleLocationOnlyWithOnConflictLazyMutationFn = useMutation<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables>(InsertVehicleLocationOnlyWithOnConflictDocument, options);
      const pickVehicleLocationOnly: PickInsertVehicleLocationOnlyFn = (mutation: InsertVehicleLocationOnlyMutation | null | undefined) => { return mutation?.insert_vehicle?.returning && mutation.insert_vehicle.returning[0]; };

      const wrappedLazyMutation:InsertVehicleLocationOnlyWithOnConflictWrappedLazyMutationFn = async ({ vehicle, onConflict, autoOptimisticResponse, options }) => {
        const mutationOptions:MutationFunctionOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables> = { variables: { objects: [vehicle], onConflict }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
          if(!vehicle.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`);
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleLocationOnlyMutation>({ operationType: 'insert', entityName:'vehicle', objects:[vehicle as Vehicle_Insert_Input & ObjectWithId] }); 
        }

        const fetchResult = await lazyMutation[0](mutationOptions);
        
        return { ...fetchResult, vehicleLocationOnly: pickVehicleLocationOnly(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], vehicleLocationOnly: pickVehicleLocationOnly(lazyMutation[1].data) }];
    }
  

    // Types
    type InsertVehicleLocationOnlyObjectsMutationResult = FetchResult<InsertVehicleLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleLocationOnlyObjectsMutationResultEx = InsertVehicleLocationOnlyMutationResult & VehicleLocationOnlyObjectsHookResultEx;

    type PickInsertVehicleLocationOnlyObjectsFn = (mutation: InsertVehicleLocationOnlyMutation | null | undefined) => VehicleLocationOnlyFragment[];
    type InsertVehicleLocationOnlyObjectsLazyMutationFn = MutationTuple<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>;
    type InsertVehicleLocationOnlyObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>) => Promise<InsertVehicleLocationOnlyObjectsMutationResultEx>;
    export type InsertVehicleLocationOnlyObjectsLazyMutationReturn = [InsertVehicleLocationOnlyObjectsWrappedLazyMutationFn, InsertVehicleLocationOnlyObjectsMutationResultEx];

    // Function
    function useInsertVehicleLocationOnlyObjects(options?: Omit<MutationHookOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>, "mutation">): InsertVehicleLocationOnlyObjectsLazyMutationReturn {
      const lazyMutation: InsertVehicleLocationOnlyObjectsLazyMutationFn = useMutation<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>(InsertVehicleLocationOnlyDocument, options);
      const pickObjects: PickInsertVehicleLocationOnlyObjectsFn = (mutation: InsertVehicleLocationOnlyMutation | null | undefined) => { return mutation?.insert_vehicle?.returning || []; };

      const wrappedLazyMutation: InsertVehicleLocationOnlyObjectsWrappedLazyMutationFn = async ( options ) => {
        const fetchResult: InsertVehicleLocationOnlyObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }
  

    /**
     *  Update Hooks
     */
    
    type UpdateVehicleLocationOnlyByIdMutationResult = FetchResult<UpdateVehicleLocationOnlyByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleLocationOnlyByIdMutationResultEx = UpdateVehicleLocationOnlyByIdMutationResult & VehicleLocationOnlyByIdHookResultEx;

    type PickUpdateVehicleLocationOnlyByIdFn = (mutation: UpdateVehicleLocationOnlyByIdMutation | null | undefined) => VehicleLocationOnlyFragment | null | undefined;
    type UpdateVehicleLocationOnlyByIdLazyMutationFn = MutationTuple<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables>;
    type UpdateVehicleLocationOnlyByIdWrappedLazyMutationFn = ({ vehicleId, set, autoOptimisticResponse, options }: { vehicleId: string; set: Vehicle_Set_Input; autoOptimisticResponse?: boolean; options?: Omit<MutationFunctionOptions<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables>, "variables">; }) => Promise<UpdateVehicleLocationOnlyByIdMutationResultEx>;
    export type UpdateVehicleLocationOnlyByIdLazyMutationReturn = [UpdateVehicleLocationOnlyByIdWrappedLazyMutationFn, UpdateVehicleLocationOnlyByIdMutationResultEx];

    function useUpdateVehicleLocationOnlyById(options?: Omit<MutationHookOptions<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables>, "mutation" | "variables">): UpdateVehicleLocationOnlyByIdLazyMutationReturn {
      const lazyMutation: UpdateVehicleLocationOnlyByIdLazyMutationFn = useMutation<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables>(UpdateVehicleLocationOnlyByIdDocument, options);

      const pickVehicleLocationOnly: PickUpdateVehicleLocationOnlyByIdFn = (mutation) => { return mutation?.update_vehicle?.returning && mutation.update_vehicle!.returning[0]; };

      const wrappedLazyMutation: UpdateVehicleLocationOnlyByIdWrappedLazyMutationFn = async ({ vehicleId, set, autoOptimisticResponse, options }) => {
        const mutationOptions: MutationFunctionOptions<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables> = { variables: { id: vehicleId, set }, ...options };
        if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateVehicleLocationOnlyByIdMutation>({ operationType: 'update', entityName:'vehicle', objects:[{ id:vehicleId, ...set }] });
        }

        const fetchResult: UpdateVehicleLocationOnlyByIdMutationResult = await lazyMutation[0]({ variables: { id: vehicleId, set }, ...mutationOptions });
        return { ...fetchResult, vehicleLocationOnly: pickVehicleLocationOnly(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], vehicleLocationOnly: pickVehicleLocationOnly(lazyMutation[1].data) }];
    }
  

    //
    //

    // Types
    type UpdateVehicleLocationOnlyObjectsMutationResult = FetchResult<UpdateVehicleLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleLocationOnlyObjectsMutationResultEx = UpdateVehicleLocationOnlyObjectsMutationResult & VehicleLocationOnlyObjectsHookResultEx;

    // Function
    type PickUpdateVehicleLocationOnlyObjectsFn = (mutation: UpdateVehicleLocationOnlyMutation | null | undefined) => VehicleLocationOnlyFragment[];
    type UpdateVehicleLocationOnlyObjectsLazyMutationFn = MutationTuple<UpdateVehicleLocationOnlyMutation, UpdateVehicleLocationOnlyMutationVariables>;
    type UpdateVehicleLocationOnlyObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<UpdateVehicleLocationOnlyMutation, UpdateVehicleLocationOnlyMutationVariables>) => Promise<UpdateVehicleLocationOnlyObjectsMutationResultEx>;
    export type UpdateVehicleLocationOnlyObjectsLazyMutationReturn = [UpdateVehicleLocationOnlyObjectsWrappedLazyMutationFn, UpdateVehicleLocationOnlyObjectsMutationResultEx];

    function useUpdateVehicleLocationOnlyObjects(options?: Omit<MutationHookOptions<UpdateVehicleLocationOnlyMutation, UpdateVehicleLocationOnlyMutationVariables>, "mutation">): UpdateVehicleLocationOnlyObjectsLazyMutationReturn {
      const lazyMutation: UpdateVehicleLocationOnlyObjectsLazyMutationFn = useMutation<UpdateVehicleLocationOnlyMutation, UpdateVehicleLocationOnlyMutationVariables>(UpdateVehicleLocationOnlyDocument, options);

      const pickObjects: PickUpdateVehicleLocationOnlyObjectsFn = (mutation: UpdateVehicleLocationOnlyMutation | null | undefined) => {
        return mutation?.update_vehicle?.returning || [];
      };

      const wrappedLazyMutation: UpdateVehicleLocationOnlyObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: UpdateVehicleLocationOnlyObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }
  

    // VehicleLocationOnly Fragment Helper Object
    //------------------------------------------------

    export const VehicleLocationOnlyFragmentGQLHooks = {
      useQueryById: useQueryVehicleLocationOnlyById,
      useQueryByIdLazy: useQueryVehicleLocationOnlyByIdLazy,
      useQueryObjects: useQueryVehicleLocationOnlyObjects,
      useQueryObjectsLazy: useQueryVehicleLocationOnlyObjectsLazy,
      useSubscribeToById: useSubscribeToVehicleLocationOnlyById,
      useSubscribeToObjects: useSubscribeToVehicleLocationOnlyObjects,
      useInsert: useInsertVehicleLocationOnly,
      useInsertWithOnConflict: useInsertVehicleLocationOnlyWithOnConflict,
      useInsertObjects: useInsertVehicleLocationOnlyObjects,
      useUpdateById: useUpdateVehicleLocationOnlyById,
      useUpdateObjects: useUpdateVehicleLocationOnlyObjects,
    }
    

    // dogs REACT
    //------------------------------------------------

    export type DogByIdHookResultEx = { dog:DogFragment | null | undefined };
    export type DogObjectsHookResultEx = { objects:DogFragment[] };

  

    /**
     *  Query Hook
     */

    // Types
    type QueryDogByIdResult = LazyQueryResult<QueryDogByIdQuery, QueryDogByIdQueryVariables>;
    type QueryDogByIdSubScribeToMore = (options?: Omit<SubscribeToMoreOptions<QueryDogByIdQuery, QueryDogByIdQueryVariables, QueryDogByIdQuery>, 'document' | 'variables'> | undefined) => void
    export type QueryDogByIdResultEx = Omit<QueryDogByIdResult, 'subscribeToMore'> & { subscribeToMore:QueryDogByIdSubScribeToMore } & DogByIdHookResultEx;

    // Function
    function useQueryDogById({ dogsId, options }: { dogsId: string; options?: Omit<QueryHookOptions<QueryDogByIdQuery, QueryDogByIdQueryVariables>, "query" | "variables">; }): QueryDogByIdResultEx {
      const _query: QueryDogByIdResult = useQuery<QueryDogByIdQuery, QueryDogByIdQueryVariables>(QueryDogByIdDocument, { variables: { dogsId }, ...options });
      
      const typedSubscribeToMore:QueryDogByIdSubScribeToMore = (options) => { _query.subscribeToMore({document: QueryDogByIdDocument, variables: { dogsId } as QueryDogByIdQueryVariables, ...options });}
      const { subscribeToMore, ...query } = _query;      
      return { ...query, subscribeToMore:typedSubscribeToMore, dog: query?.data?.dogs_by_pk };
    }
    

    /**
     *  Lazy Query Hook
     */
    
    // Types
    type PickQueryDogByIdFn = (query: QueryDogByIdQuery | null | undefined) =>DogFragment | null | undefined;
    type QueryDogByIdLazyFn = [(options?: QueryLazyOptions<QueryDogByIdQueryVariables> | undefined) => void, QueryDogByIdResult]
    type QueryDogByIdWrappedLazyFn = (options: Omit<QueryLazyOptions<QueryDogByIdQueryVariables>, "variables">) => void;
    export type QueryDogByIdLazyReturn = [QueryDogByIdWrappedLazyFn, QueryDogByIdResultEx];

    // Function
    function useQueryDogByIdLazy({ dogsId, options }: { dogsId: string; options?: Omit<QueryHookOptions<QueryDogByIdQuery, QueryDogByIdQueryVariables>, "query" | "variables">; }): QueryDogByIdLazyReturn {
      const lazyQuery: QueryDogByIdLazyFn = useLazyQuery<QueryDogByIdQuery, QueryDogByIdQueryVariables>(QueryDogByIdDocument, options);
      
      // Setting up typed version of lazyQuery
      const pickQueryDogById: PickQueryDogByIdFn = query => { return query && query.dogs_by_pk; };
      const wrappedLazyQuery: QueryDogByIdWrappedLazyFn = (options) => { return lazyQuery[0](options); };
      
      // Switching out SubcribeToMore with typed version
      const typedSubcribeToMore:QueryDogByIdSubScribeToMore = (options) => { lazyQuery[1].subscribeToMore && lazyQuery[1].subscribeToMore({document: QueryDogByIdDocument, variables: { dogsId } as QueryDogByIdQueryVariables, ...options });}
      const { subscribeToMore, ...lazyQueryResult } = lazyQuery[1];  

      return [wrappedLazyQuery, { ...lazyQueryResult, subscribeToMore:typedSubcribeToMore, dog: pickQueryDogById(lazyQuery[1].data) }];
    }
    

    /**
     *  Query Collection Hook
     */

    // Types
    export type QueryDogObjectsResult = LazyQueryResult<QueryDogObjectsQuery, QueryDogObjectsQueryVariables>;
    type QueryDogObjectsSubScribeToMore = (options?: Omit<SubscribeToMoreOptions<QueryDogObjectsQuery, QueryDogObjectsQueryVariables, QueryDogObjectsQuery>, 'document' | 'variables'> | undefined) => void
    export type QueryDogObjectsResultEx = Omit<QueryDogObjectsResult, 'subscribeToMore'> & { subscribeToMore:QueryDogObjectsSubScribeToMore } & DogObjectsHookResultEx;

    // Function
    function useQueryDogObjects(options: Omit<QueryHookOptions<QueryDogObjectsQuery, QueryDogObjectsQueryVariables>, "query">): QueryDogObjectsResultEx {
      const _query:QueryDogObjectsResult = useQuery<QueryDogObjectsQuery, QueryDogObjectsQueryVariables>(QueryDogObjectsDocument, options);

      const typedSubscribeToMore:QueryDogObjectsSubScribeToMore = (options) => { _query.subscribeToMore({document: QueryDogObjectsDocument, ...options });}
      const { subscribeToMore, ...query } = _query;  

      return { ...query, subscribeToMore:typedSubscribeToMore, objects: query?.data?.dogs || [] };
    }
    
  
    /**
     *  Lazy Query Collection Hook
     */

    // Types
    type PickQueryDogObjectsFn = (query: QueryDogObjectsQuery | null | undefined) => DogFragment[];
    type QueryDogObjectsLazyFn = [(options?: QueryLazyOptions<QueryDogObjectsQueryVariables> | undefined) => void, QueryDogObjectsResult]
    type QueryDogObjectsWrappedLazyFn = (options?: QueryLazyOptions<QueryDogObjectsQueryVariables>) => void;
    export type QueryDogObjectsLazyReturn = [QueryDogObjectsWrappedLazyFn, QueryDogObjectsResultEx];

    // Function
    function useQueryDogObjectsLazy(options?: Omit<LazyQueryHookOptions<QueryDogObjectsQuery, QueryDogObjectsQueryVariables>, "query">): QueryDogObjectsLazyReturn {
      const lazyQuery: QueryDogObjectsLazyFn = useLazyQuery<QueryDogObjectsQuery, QueryDogObjectsQueryVariables>(QueryDogObjectsDocument, options);
      
      // Setting up typed version of lazyQuery
      const pickObjects: PickQueryDogObjectsFn = (query: QueryDogObjectsQuery | null | undefined) => { return query?.dogs || []; };
      const wrappedLazyQuery: QueryDogObjectsWrappedLazyFn = (options) => { return lazyQuery[0]( options ); };
      
      // Switching out SubcribeToMore with typed version
      const typedSubcribeToMore:QueryDogObjectsSubScribeToMore = (options) => { lazyQuery[1].subscribeToMore && lazyQuery[1].subscribeToMore({document: QueryDogObjectsDocument, ...options });}
      const { subscribeToMore, ...lazyQueryResult } = lazyQuery[1];  
      
      return [wrappedLazyQuery, { ...lazyQueryResult, subscribeToMore:typedSubcribeToMore, objects: pickObjects(lazyQuery[1].data) }];
    }
  
     
    /**
     *  Subscription Hook
     */

    // Types
    type SubscribeToDogByIdResult = { variables: SubscribeToDogByIdSubscriptionVariables; loading: boolean; data?: SubscribeToDogByIdSubscription; error?: ApolloError | undefined; };
    export type SubscribeToDogByIdResultEx = SubscribeToDogByIdResult & DogByIdHookResultEx;

    // Function
    function useSubscribeToDogById({ dogsId, options }: { dogsId: string; options?: Omit<SubscriptionHookOptions<SubscribeToDogByIdSubscription, SubscribeToDogByIdSubscriptionVariables>, "query" | "variables">; }): SubscribeToDogByIdResultEx {
      const subscription: SubscribeToDogByIdResult = useSubscription<SubscribeToDogByIdSubscription, SubscribeToDogByIdSubscriptionVariables>(SubscribeToDogByIdDocument, { variables: { dogsId }, ...options });
      return { ...subscription, dog: subscription?.data?.dogs_by_pk };
    }
    

    /**
     *  Subscription Collection Hook
     */

    // Types
    export type SubscribeToDogObjectsResult = { variables: SubscribeToDogObjectsSubscriptionVariables; loading: boolean; data?: SubscribeToDogObjectsSubscription; error?: ApolloError | undefined; };
    export type SubscribeToDogObjectsResultEx = SubscribeToDogObjectsResult & DogObjectsHookResultEx;

    // Function
    function useSubscribeToDogObjects(options: Omit<SubscriptionHookOptions<SubscribeToDogObjectsSubscription, SubscribeToDogObjectsSubscriptionVariables>, "query">): SubscribeToDogObjectsResultEx {
      const subscription:SubscribeToDogObjectsResult = useSubscription<SubscribeToDogObjectsSubscription, SubscribeToDogObjectsSubscriptionVariables>(SubscribeToDogObjectsDocument, options);
      return { ...subscription, objects: subscription?.data?.dogs || [] };
    }
    

    /**
     *  Insert Hooks
     */

    // Types
    type InsertDogMutationResult = FetchResult<InsertDogMutation, Record<string, any>, Record<string, any>>;
    export type InsertDogMutationResultEx = InsertDogMutationResult & DogByIdHookResultEx;

    type PickInsertDogFn = (mutation: InsertDogMutation | null | undefined) => DogFragment | null | undefined;
    type InsertDogLazyMutationFn = MutationTuple<InsertDogMutation, InsertDogMutationVariables>;
    type InsertDogWrappedLazyMutationFn = ({ dogs, autoOptimisticResponse, options }: { dogs: Dogs_Insert_Input; autoOptimisticResponse?:boolean, options?: Omit<MutationFunctionOptions<InsertDogMutation, InsertDogMutationVariables>, "variables">; }) => Promise<InsertDogMutationResultEx>;
    export type InsertDogLazyMutationReturn = [InsertDogWrappedLazyMutationFn, InsertDogMutationResultEx];

    // Function
    function useInsertDog(options?: Omit<MutationHookOptions<InsertDogMutation, InsertDogMutationVariables>, "mutation" | "variables">): InsertDogLazyMutationReturn {
      const lazyMutation: InsertDogLazyMutationFn = useMutation<InsertDogMutation, InsertDogMutationVariables>(InsertDogDocument, options);
      const pickDog: PickInsertDogFn = (mutation) => { return mutation?.insert_dogs?.returning && mutation?.insert_dogs?.returning[0]; };

      const wrappedLazyMutation: InsertDogWrappedLazyMutationFn = async ({ dogs, autoOptimisticResponse, options }) => {
        const mutationOptions:MutationFunctionOptions<InsertDogMutation, InsertDogMutationVariables> = { variables: { objects: [dogs] }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
          if(!dogs.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'dogs'`);
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertDogMutation>({ operationType: 'insert', entityName:'dogs', objects:[dogs as Dogs_Insert_Input & ObjectWithId] 
        }); }

        const fetchResult = await lazyMutation[0](mutationOptions);
        
        return { ...fetchResult, dog: pickDog(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], dog: pickDog(lazyMutation[1].data) }];
    }
  

    //
    //

    // Types
    type InsertDogWithOnConflictLazyMutationFn = MutationTuple<InsertDogMutation, InsertDogWithOnConflictMutationVariables>;
    type InsertDogWithOnConflictWrappedLazyMutationFn = ({ dogs, onConflict, autoOptimisticResponse, options }: { dogs: Dogs_Insert_Input; onConflict: Dogs_On_Conflict, autoOptimisticResponse?:boolean; options?: Omit<MutationFunctionOptions<InsertDogMutation, InsertDogWithOnConflictMutationVariables>, "variables">; }) => Promise<InsertDogMutationResultEx>;
    export type InsertDogWithOnConflictLazyMutationReturn = [InsertDogWithOnConflictWrappedLazyMutationFn, InsertDogMutationResultEx];

    // Function
    function useInsertDogWithOnConflict( options?: Omit<MutationHookOptions<InsertDogMutation, InsertDogMutationVariables>, "mutation" | "variables"> ): InsertDogWithOnConflictLazyMutationReturn {
      const lazyMutation: InsertDogWithOnConflictLazyMutationFn = useMutation<InsertDogMutation, InsertDogWithOnConflictMutationVariables>(InsertDogWithOnConflictDocument, options);
      const pickDog: PickInsertDogFn = (mutation: InsertDogMutation | null | undefined) => { return mutation?.insert_dogs?.returning && mutation.insert_dogs.returning[0]; };

      const wrappedLazyMutation:InsertDogWithOnConflictWrappedLazyMutationFn = async ({ dogs, onConflict, autoOptimisticResponse, options }) => {
        const mutationOptions:MutationFunctionOptions<InsertDogMutation, InsertDogWithOnConflictMutationVariables> = { variables: { objects: [dogs], onConflict }, ...options };
        if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
          if(!dogs.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'dogs'`);
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertDogMutation>({ operationType: 'insert', entityName:'dogs', objects:[dogs as Dogs_Insert_Input & ObjectWithId] }); 
        }

        const fetchResult = await lazyMutation[0](mutationOptions);
        
        return { ...fetchResult, dog: pickDog(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], dog: pickDog(lazyMutation[1].data) }];
    }
  

    // Types
    type InsertDogObjectsMutationResult = FetchResult<InsertDogMutation, Record<string, any>, Record<string, any>>;
    export type InsertDogObjectsMutationResultEx = InsertDogMutationResult & DogObjectsHookResultEx;

    type PickInsertDogObjectsFn = (mutation: InsertDogMutation | null | undefined) => DogFragment[];
    type InsertDogObjectsLazyMutationFn = MutationTuple<InsertDogMutation, InsertDogMutationVariables>;
    type InsertDogObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<InsertDogMutation, InsertDogMutationVariables>) => Promise<InsertDogObjectsMutationResultEx>;
    export type InsertDogObjectsLazyMutationReturn = [InsertDogObjectsWrappedLazyMutationFn, InsertDogObjectsMutationResultEx];

    // Function
    function useInsertDogObjects(options?: Omit<MutationHookOptions<InsertDogMutation, InsertDogMutationVariables>, "mutation">): InsertDogObjectsLazyMutationReturn {
      const lazyMutation: InsertDogObjectsLazyMutationFn = useMutation<InsertDogMutation, InsertDogMutationVariables>(InsertDogDocument, options);
      const pickObjects: PickInsertDogObjectsFn = (mutation: InsertDogMutation | null | undefined) => { return mutation?.insert_dogs?.returning || []; };

      const wrappedLazyMutation: InsertDogObjectsWrappedLazyMutationFn = async ( options ) => {
        const fetchResult: InsertDogObjectsMutationResult = await lazyMutation[0](options);
        return { ...fetchResult, objects: pickObjects(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(lazyMutation[1].data) }];
    }
  

    /**
     *  Update Hooks
     */
    
    type UpdateDogByIdMutationResult = FetchResult<UpdateDogByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateDogByIdMutationResultEx = UpdateDogByIdMutationResult & DogByIdHookResultEx;

    type PickUpdateDogByIdFn = (mutation: UpdateDogByIdMutation | null | undefined) => DogFragment | null | undefined;
    type UpdateDogByIdLazyMutationFn = MutationTuple<UpdateDogByIdMutation, UpdateDogByIdMutationVariables>;
    type UpdateDogByIdWrappedLazyMutationFn = ({ dogsId, set, autoOptimisticResponse, options }: { dogsId: string; set: Dogs_Set_Input; autoOptimisticResponse?: boolean; options?: Omit<MutationFunctionOptions<UpdateDogByIdMutation, UpdateDogByIdMutationVariables>, "variables">; }) => Promise<UpdateDogByIdMutationResultEx>;
    export type UpdateDogByIdLazyMutationReturn = [UpdateDogByIdWrappedLazyMutationFn, UpdateDogByIdMutationResultEx];

    function useUpdateDogById(options?: Omit<MutationHookOptions<UpdateDogByIdMutation, UpdateDogByIdMutationVariables>, "mutation" | "variables">): UpdateDogByIdLazyMutationReturn {
      const lazyMutation: UpdateDogByIdLazyMutationFn = useMutation<UpdateDogByIdMutation, UpdateDogByIdMutationVariables>(UpdateDogByIdDocument, options);

      const pickDog: PickUpdateDogByIdFn = (mutation) => { return mutation?.update_dogs?.returning && mutation.update_dogs!.returning[0]; };

      const wrappedLazyMutation: UpdateDogByIdWrappedLazyMutationFn = async ({ dogsId, set, autoOptimisticResponse, options }) => {
        const mutationOptions: MutationFunctionOptions<UpdateDogByIdMutation, UpdateDogByIdMutationVariables> = { variables: { id: dogsId, set }, ...options };
        if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
          mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateDogByIdMutation>({ operationType: 'update', entityName:'dogs', objects:[{ id:dogsId, ...set }] });
        }

        const fetchResult: UpdateDogByIdMutationResult = await lazyMutation[0]({ variables: { id: dogsId, set }, ...mutationOptions });
        return { ...fetchResult, dog: pickDog(fetchResult.data) };
      };

      return [wrappedLazyMutation, { ...lazyMutation[1], dog: pickDog(lazyMutation[1].data) }];
    }
  

    //
    //

    // Types
    type UpdateDogObjectsMutationResult = FetchResult<UpdateDogMutation, Record<string, any>, Record<string, any>>;
    export type UpdateDogObjectsMutationResultEx = UpdateDogObjectsMutationResult & DogObjectsHookResultEx;

    // Function
    type PickUpdateDogObjectsFn = (mutation: UpdateDogMutation | null | undefined) => DogFragment[];
    type UpdateDogObjectsLazyMutationFn = MutationTuple<UpdateDogMutation, UpdateDogMutationVariables>;
    type UpdateDogObjectsWrappedLazyMutationFn = (options?: MutationFunctionOptions<UpdateDogMutation, UpdateDogMutationVariables>) => Promise<UpdateDogObjectsMutationResultEx>;
    export type UpdateDogObjectsLazyMutationReturn = [UpdateDogObjectsWrappedLazyMutationFn, UpdateDogObjectsMutationResultEx];

    function useUpdateDogObjects(options?: Omit<MutationHookOptions<UpdateDogMutation, UpdateDogMutationVariables>, "mutation">): UpdateDogObjectsLazyMutationReturn {
      const lazyMutation: UpdateDogObjectsLazyMutationFn = useMutation<UpdateDogMutation, UpdateDogMutationVariables>(UpdateDogDocument, options);

      const pickObjects: PickUpdateDogObjectsFn = (mutation: UpdateDogMutation | null | undefined) => {
        return mutation?.update_dogs?.returning || [];
      };

      const wrappedLazyMutation: UpdateDogObjectsWrappedLazyMutationFn = async (options) => {
        const fetchResult: UpdateDogObjectsMutationResult = await lazyMutation[0](options);
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
  

    // Dog Fragment Helper Object
    //------------------------------------------------

    export const DogFragmentGQLHooks = {
      useQueryById: useQueryDogById,
      useQueryByIdLazy: useQueryDogByIdLazy,
      useQueryObjects: useQueryDogObjects,
      useQueryObjectsLazy: useQueryDogObjectsLazy,
      useSubscribeToById: useSubscribeToDogById,
      useSubscribeToObjects: useSubscribeToDogObjects,
      useInsert: useInsertDog,
      useInsertWithOnConflict: useInsertDogWithOnConflict,
      useInsertObjects: useInsertDogObjects,
      useUpdateById: useUpdateDogById,
      useUpdateObjects: useUpdateDogObjects,
    }
    

    // dogs MODEL HOOKS OBJECT
    //------------------------------------------------

    export const DogsModelGQLHooks = {
      useRemoveById: useRemoveDogsModelById,
      useRemoveObjects: useRemoveDogsModelObjects
    }
  

    /*
     * COMBINED HOOKS OBJECT
     */
    export const GQLHooks = {
      Fragments: {
        Vehicle: VehicleFragmentGQLHooks,
        VehicleLocationOnly: VehicleLocationOnlyFragmentGQLHooks,
        Dog: DogFragmentGQLHooks
      },
      Models: {
        Vehicle: VehicleModelGQLHooks,
        Dogs: DogsModelGQLHooks
      }
    }
  