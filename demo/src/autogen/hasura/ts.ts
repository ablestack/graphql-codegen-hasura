import { generateOptimisticResponseForMutation, generateUpdateFunctionForMutation, ObjectWithId } from 'graphql-codegen-hasura-core'
import { ApolloClient, ApolloQueryResult, defaultDataIdFromObject, FetchResult, MutationOptions, ObservableQuery, QueryOptions, SubscriptionOptions, Observable } from '@apollo/client'
import { VehicleGraphFragment, FetchVehicleGraphAsSubscriptionSubscription, FetchVehicleGraphAsSubscriptionSubscriptionVariables, FetchVehicleGraphAsSubscriptionDocument, FetchVehicleGraphByIdAsSubscriptionSubscription, FetchVehicleGraphByIdAsSubscriptionSubscriptionVariables, FetchVehicleGraphByIdAsSubscriptionDocument } from '../';
import { VehicleGraphFragmentDoc } from '../';
import { FetchVehicleGraphByIdAsQueryQuery } from '../';
import { FetchVehicleGraphByIdAsQueryDocument } from '../';
import { FetchVehicleGraphByIdAsQueryQueryVariables } from '../';
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
import { VehicleGraphLocationOnlyFragmentDoc } from '../';
import { FetchVehicleGraphLocationOnlyByIdAsQueryQuery } from '../';
import { FetchVehicleGraphLocationOnlyByIdAsQueryDocument } from '../';
import { FetchVehicleGraphLocationOnlyByIdAsQueryQueryVariables } from '../';
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
import { DogModelFragmentDoc } from '../';
import { FetchDogModelByIdAsQueryQuery } from '../';
import { FetchDogModelByIdAsQueryDocument } from '../';
import { FetchDogModelByIdAsQueryQueryVariables } from '../';
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
import { valueFromAST } from 'graphql';

    // GLOBAL TYPES
    //------------------------------------------------
    export type RemoveEntitiesQueryHelperResultEx = { affected_rows:number };
  

    // vehicle HELPERS
    //------------------------------------------------

    export type VehicleGraphByIdHelperResultEx = { vehicleGraph:VehicleGraphFragment | null | undefined };
    export type VehicleGraphObjectsHelperResultEx = { objects:VehicleGraphFragment[] };
  
  

      // Direct Client & Cache Helpers
      //
      function clientReadFragmentVehicleGraphById({ apolloClient, vehicleGraphId}: { apolloClient: ApolloClient<object>, vehicleGraphId: string }): VehicleGraphFragment | null | undefined {
        return apolloClient.readFragment<VehicleGraphFragment | null | undefined>({ fragment: VehicleGraphFragmentDoc, fragmentName:'VehicleGraph', id: defaultDataIdFromObject({ __typename: 'vehicle', id:vehicleGraphId }) });
      }
  
      function clientWriteFragmentVehicleGraphById({ apolloClient, vehicleGraphId, vehicleGraphPartial }: { apolloClient: ApolloClient<object>, vehicleGraphId: string, vehicleGraphPartial: Partial<VehicleGraphFragment> | null }): void {
        return apolloClient.writeFragment<Partial<VehicleGraphFragment> | null>({ fragment: VehicleGraphFragmentDoc, fragmentName:'VehicleGraph', id: defaultDataIdFromObject({ ...vehicleGraphPartial, id:vehicleGraphId, __typename: 'vehicle' }), data: { ...vehicleGraphPartial, __typename: 'vehicle' } });
      }
  
      function cacheWriteFragmentVehicleGraphById({ apolloClient, vehicleGraphId, vehicleGraphPartial }: { apolloClient: ApolloClient<object>, vehicleGraphId: string, vehicleGraphPartial: Partial<VehicleGraphFragment> | null }): void {
        return apolloClient.cache.writeFragment<Partial<VehicleGraphFragment> | null>({ fragment: VehicleGraphFragmentDoc, fragmentName:'VehicleGraph', id: defaultDataIdFromObject({ ...vehicleGraphPartial, id:vehicleGraphId, __typename: 'vehicle' }), data: { ...vehicleGraphPartial, __typename: 'vehicle' } });
      }

      function clientReadQueryVehicleGraphById({ apolloClient, vehicleGraphId}: { apolloClient: ApolloClient<object>, vehicleGraphId: string }): VehicleGraphFragment | null | undefined {
        return apolloClient.readQuery<VehicleGraphFragment | null >({ query: FetchVehicleGraphByIdAsQueryDocument, variables: { vehicleGraphId }  });
      }

      function clientWriteQueryVehicleGraphById({ apolloClient, vehicleGraphId, vehicleGraph }: { apolloClient: ApolloClient<object>, vehicleGraphId: string, vehicleGraph: VehicleGraphFragment | null }): void {
        return apolloClient.writeQuery<VehicleGraphFragment | null>({ query: FetchVehicleGraphByIdAsQueryDocument, variables: { vehicleGraphId }, data: (vehicleGraph ? { ...vehicleGraph, __typename: 'vehicle' } : null) });
      }

      function cacheWriteQueryVehicleGraphById({ apolloClient, vehicleGraphId, vehicleGraph }: { apolloClient: ApolloClient<object>, vehicleGraphId: string, vehicleGraph: VehicleGraphFragment | null }): void {
        return apolloClient.cache.writeQuery<VehicleGraphFragment | null>({ query: FetchVehicleGraphByIdAsQueryDocument, variables: { vehicleGraphId }, data: (vehicleGraph ? { ...vehicleGraph, __typename: 'vehicle' } : null) });
      }
    

      // Query Fetch Helper
      //
      export type FetchVehicleGraphByIdAsQueryApolloQueryResult = ApolloQueryResult<FetchVehicleGraphByIdAsQueryQuery>;
      export type FetchVehicleGraphByIdAsQueryApolloQueryHelperResultEx = FetchVehicleGraphByIdAsQueryApolloQueryResult & VehicleGraphByIdHelperResultEx;

      async function fetchVehicleGraphById({ apolloClient, vehicleId, options }: { apolloClient: ApolloClient<object>, vehicleId: string, options?: Omit<QueryOptions<FetchVehicleGraphByIdAsQueryQueryVariables>, 'query' | 'variables'> }): Promise<FetchVehicleGraphByIdAsQueryApolloQueryHelperResultEx> {
        const query: FetchVehicleGraphByIdAsQueryApolloQueryResult = await apolloClient.query<FetchVehicleGraphByIdAsQueryQuery>({ query: FetchVehicleGraphByIdAsQueryDocument, variables: { vehicleId }, ...options });
        
        return { ...query, vehicleGraph: query && query.data && query.data.vehicle_by_pk }
      }

      export type WatchFetchVehicleGraphByIdAsQueryModelByIdApolloObservableQuery = ObservableQuery<FetchVehicleGraphByIdAsQueryQuery>;
      async function watchQueryVehicleGraphModelById({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchVehicleGraphByIdAsQueryQueryVariables>, 'query'> }) : Promise<WatchFetchVehicleGraphByIdAsQueryModelByIdApolloObservableQuery> {
        return apolloClient.watchQuery<FetchVehicleGraphByIdAsQueryQuery>({ query: FetchVehicleGraphByIdAsQueryDocument, ...options });
      }

      // Subscription Fetch ById Helper
      //
      export type FetchVehicleGraphByIdAsSubscriptionSubscriptionResult = FetchResult<FetchVehicleGraphByIdAsSubscriptionSubscription, Record<string, any>, Record<string, any>>;
      export type FetchVehicleGraphByIdAsSubscriptionSubscriptionResultEx = FetchResult<FetchVehicleGraphByIdAsSubscriptionSubscription & VehicleGraphByIdHelperResultEx, Record<string, any>, Record<string, any>>;

      async function fetchVehicleGraphByIdAsSubscription({ apolloClient, vehicleId, options }: { apolloClient: ApolloClient<object>, vehicleId:string, options: Omit<SubscriptionOptions<FetchVehicleGraphByIdAsSubscriptionSubscriptionVariables>, 'query' | 'variables'> }): Promise<Observable<FetchVehicleGraphByIdAsSubscriptionSubscriptionResultEx>> {
        const subscription:Observable<FetchVehicleGraphByIdAsSubscriptionSubscriptionResult> = apolloClient.subscribe<FetchVehicleGraphByIdAsSubscriptionSubscription>({ query: FetchVehicleGraphByIdAsSubscriptionDocument, variables: { vehicleId }, ...options });
        
        return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, vehicleGraph:(value && value.data && value.data.vehicle_by_pk) || [] }  as FetchVehicleGraphByIdAsSubscriptionSubscriptionResultEx }) ;
      }
    

      // Subscription Fetch Objects Helper
      //
      export type FetchVehicleGraphAsSubscriptionSubscriptionResult = FetchResult<FetchVehicleGraphAsSubscriptionSubscription, Record<string, any>, Record<string, any>>;
      export type FetchVehicleGraphAsSubscriptionSubscriptionResultEx = FetchResult<FetchVehicleGraphAsSubscriptionSubscription & VehicleGraphObjectsHelperResultEx, Record<string, any>, Record<string, any>>;

      async function fetchVehicleGraphObjectsAsSubscription({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<SubscriptionOptions<FetchVehicleGraphAsSubscriptionSubscriptionVariables>, 'query'> }): Promise<Observable<FetchVehicleGraphAsSubscriptionSubscriptionResultEx>> {
        const subscription:Observable<FetchVehicleGraphAsSubscriptionSubscriptionResult> = apolloClient.subscribe<FetchVehicleGraphAsSubscriptionSubscription>({ query: FetchVehicleGraphAsSubscriptionDocument, ...options });
        
        return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, objects:(value && value.data && value.data.vehicle) || [] }  as FetchVehicleGraphAsSubscriptionSubscriptionResultEx }) ;
      }
    

    // Insert Helper
    //
    type InsertVehicleGraphFetchResult = FetchResult<InsertVehicleGraphMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleGraphFetchHelperResultEx = InsertVehicleGraphFetchResult & VehicleGraphByIdHelperResultEx;

    async function insertVehicleGraph({ apolloClient, vehicle, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleGraphFetchHelperResultEx> {
      const mutationOptions:MutationOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables> = { mutation: InsertVehicleGraphDocument, variables: { objects: [vehicle] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!vehicle.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleGraphMutation>({ operationType: 'insert', entityName:'vehicle', objects:[vehicle as Vehicle_Insert_Input & ObjectWithId] }); 
      }
      
      const mutation:InsertVehicleGraphFetchResult = await apolloClient.mutate<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleGraph:mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning && mutation.data.insert_vehicle!.returning[0] };
    }

    async function insertVehicleGraphWithOnConflict({ apolloClient, vehicle, onConflict, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, onConflict: Vehicle_On_Conflict, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleGraphFetchHelperResultEx> {
      const mutationOptions:MutationOptions<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables> = { mutation: InsertVehicleGraphDocument, variables: { objects: [vehicle], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!vehicle.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleGraphMutation>({ operationType: 'insert', entityName:'vehicle', objects:[vehicle as Vehicle_Insert_Input & ObjectWithId] }); 
      }
      
      const mutation:InsertVehicleGraphFetchResult = await apolloClient.mutate<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleGraph:mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning && mutation.data.insert_vehicle!.returning[0] };
    }



  

    // Insert Objects Helper
    //
    type InsertVehicleGraphObjectsFetchResult = FetchResult<InsertVehicleGraphMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleGraphObjectsHelperResultEx = InsertVehicleGraphObjectsFetchResult & VehicleGraphObjectsHelperResultEx;

    async function insertVehicleGraphObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation'> }): Promise<InsertVehicleGraphObjectsHelperResultEx> {
      const mutation: InsertVehicleGraphObjectsFetchResult = await apolloClient.mutate<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>({ mutation: InsertVehicleGraphDocument, ...options });
       
      return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning) || [] };
    }
  

    // Update Helper
    //
    type UpdateVehicleGraphByIdQueryResult = FetchResult<UpdateVehicleGraphByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleGraphByIdHelperResultEx = UpdateVehicleGraphByIdQueryResult & VehicleGraphByIdHelperResultEx;

    async function updateVehicleGraphById({ apolloClient, vehicleId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, vehicleId: string, set: Vehicle_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, 'mutation'> }): Promise<UpdateVehicleGraphByIdHelperResultEx> {
      const mutationOptions:MutationOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables> = { mutation: UpdateVehicleGraphByIdDocument, variables: { id:vehicleId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateVehicleGraphByIdMutation>({ operationType: 'update', entityName:'vehicle', objects:[{ id:vehicleId, ...set }] }); }

      const mutation:UpdateVehicleGraphByIdQueryResult = await apolloClient.mutate<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleGraph:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning && mutation.data.update_vehicle!.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateVehicleGraphObjectsFetchResult = FetchResult<UpdateVehicleGraphMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleGraphObjectsHelperResultEx = UpdateVehicleGraphObjectsFetchResult & VehicleGraphObjectsHelperResultEx;

    async function updateVehicleGraphObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>, 'mutation'> }): Promise<UpdateVehicleGraphObjectsHelperResultEx> {  
      const mutation:UpdateVehicleGraphObjectsFetchResult = await apolloClient.mutate<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>({ mutation: UpdateVehicleGraphDocument, ...options } );
        
      return { ...mutation, objects:(mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning) || [] };
    }
  
  

    // Delete Helper
    //

    type RemoveVehicleModelByIdQueryResult = FetchResult<RemoveVehicleModelByIdMutation, Record<string, any>, Record<string, any>>;
    export type RemoveVehicleModelByIdQueryHelperResultEx = RemoveVehicleModelByIdQueryResult & RemoveEntitiesQueryHelperResultEx;
  
    async function removeVehicleModelById({ apolloClient, vehicleId, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, vehicleId: string, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation'> }): Promise<RemoveVehicleModelByIdQueryHelperResultEx> {
      const mutationOptions:MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables> = { mutation: RemoveVehicleModelByIdDocument, variables: { id:vehicleId, }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<RemoveVehicleModelByIdMutation>({ operationType: 'delete', entityName:'vehicle', objects:[{ id:vehicleId }] }); }
      if((!options || !options.update)){ mutationOptions.update = generateUpdateFunctionForMutation<RemoveVehicleModelByIdMutation>({ operationType: 'delete', entityName:'vehicle', entityId:vehicleId }); }
      
      const mutation:RemoveVehicleModelByIdQueryResult = await apolloClient.mutate<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>(mutationOptions);
    
      return { ...mutation, affected_rows:(mutation && mutation.data && mutation.data.delete_vehicle && mutation.data.delete_vehicle!.affected_rows) || 0 };
    }
  

    type RemoveVehicleModelObjectsQueryResult = FetchResult<RemoveVehicleModelMutation, Record<string, any>, Record<string, any>>;
    export type RemoveVehicleModelObjectsQueryHelperResultEx = RemoveVehicleModelObjectsQueryResult & RemoveEntitiesQueryHelperResultEx;  
  
    async function removeVehicleModelObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'> }): Promise<RemoveVehicleModelObjectsQueryHelperResultEx> {  
        const mutation:RemoveVehicleModelByIdQueryResult = await apolloClient.mutate<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>({ mutation: RemoveVehicleModelDocument, ...options } );
          
        return { ...mutation, affected_rows:(mutation && mutation.data && mutation.data.delete_vehicle && mutation.data.delete_vehicle!.affected_rows) || 0 };
      }
  

    // VehicleGraph Fragment Helper Object
    //------------------------------------------------

    export const VehicleGraphFragmentGQLHelper = {
      clientReadFragmentById: clientReadFragmentVehicleGraphById,
      clientWriteFragmentById: clientWriteFragmentVehicleGraphById,
      cacheWriteFragmentById: cacheWriteFragmentVehicleGraphById,
      clientReadQueryById: clientReadQueryVehicleGraphById,
      clientWriteQueryById: clientWriteQueryVehicleGraphById,
      cacheWriteQueryById: cacheWriteQueryVehicleGraphById,
      fetchById: fetchVehicleGraphById,
      watchQueryById: fetchVehicleGraphById,
      fetchObjects: fetchVehicleGraphObjects,
      watchQueryObjects: fetchVehicleGraphObjects,
      insert: insertVehicleGraph,
      insertWithOnConflict: insertVehicleGraphWithOnConflict,
      insertObjects: insertVehicleGraphObjects,
      updateById: updateVehicleGraphById,
      updateObjects: updateVehicleGraphObjects,
    }
  

    // vehicle Entity Helper Object
    //------------------------------------------------

    export const VehicleModelGQLHelper = {
      removeById: removeVehicleModelById,
      removeObjects: removeVehicleModelObjects
    }
  

    // vehicle HELPERS
    //------------------------------------------------

    export type VehicleGraphLocationOnlyByIdHelperResultEx = { vehicleGraphLocationOnly:VehicleGraphLocationOnlyFragment | null | undefined };
    export type VehicleGraphLocationOnlyObjectsHelperResultEx = { objects:VehicleGraphLocationOnlyFragment[] };
  
  

      // Direct Client & Cache Helpers
      //
      function clientReadFragmentVehicleGraphLocationOnlyById({ apolloClient, vehicleGraphLocationOnlyId}: { apolloClient: ApolloClient<object>, vehicleGraphLocationOnlyId: string }): VehicleGraphLocationOnlyFragment | null | undefined {
        return apolloClient.readFragment<VehicleGraphLocationOnlyFragment | null | undefined>({ fragment: VehicleGraphLocationOnlyFragmentDoc, fragmentName:'VehicleGraphLocationOnly', id: defaultDataIdFromObject({ __typename: 'vehicle', id:vehicleGraphLocationOnlyId }) });
      }
  
      function clientWriteFragmentVehicleGraphLocationOnlyById({ apolloClient, vehicleGraphLocationOnlyId, vehicleGraphLocationOnlyPartial }: { apolloClient: ApolloClient<object>, vehicleGraphLocationOnlyId: string, vehicleGraphLocationOnlyPartial: Partial<VehicleGraphLocationOnlyFragment> | null }): void {
        return apolloClient.writeFragment<Partial<VehicleGraphLocationOnlyFragment> | null>({ fragment: VehicleGraphLocationOnlyFragmentDoc, fragmentName:'VehicleGraphLocationOnly', id: defaultDataIdFromObject({ ...vehicleGraphLocationOnlyPartial, id:vehicleGraphLocationOnlyId, __typename: 'vehicle' }), data: { ...vehicleGraphLocationOnlyPartial, __typename: 'vehicle' } });
      }
  
      function cacheWriteFragmentVehicleGraphLocationOnlyById({ apolloClient, vehicleGraphLocationOnlyId, vehicleGraphLocationOnlyPartial }: { apolloClient: ApolloClient<object>, vehicleGraphLocationOnlyId: string, vehicleGraphLocationOnlyPartial: Partial<VehicleGraphLocationOnlyFragment> | null }): void {
        return apolloClient.cache.writeFragment<Partial<VehicleGraphLocationOnlyFragment> | null>({ fragment: VehicleGraphLocationOnlyFragmentDoc, fragmentName:'VehicleGraphLocationOnly', id: defaultDataIdFromObject({ ...vehicleGraphLocationOnlyPartial, id:vehicleGraphLocationOnlyId, __typename: 'vehicle' }), data: { ...vehicleGraphLocationOnlyPartial, __typename: 'vehicle' } });
      }

      function clientReadQueryVehicleGraphLocationOnlyById({ apolloClient, vehicleGraphLocationOnlyId}: { apolloClient: ApolloClient<object>, vehicleGraphLocationOnlyId: string }): VehicleGraphLocationOnlyFragment | null | undefined {
        return apolloClient.readQuery<VehicleGraphLocationOnlyFragment | null >({ query: FetchVehicleGraphLocationOnlyByIdAsQueryDocument, variables: { vehicleGraphLocationOnlyId }  });
      }

      function clientWriteQueryVehicleGraphLocationOnlyById({ apolloClient, vehicleGraphLocationOnlyId, vehicleGraphLocationOnly }: { apolloClient: ApolloClient<object>, vehicleGraphLocationOnlyId: string, vehicleGraphLocationOnly: VehicleGraphLocationOnlyFragment | null }): void {
        return apolloClient.writeQuery<VehicleGraphLocationOnlyFragment | null>({ query: FetchVehicleGraphLocationOnlyByIdAsQueryDocument, variables: { vehicleGraphLocationOnlyId }, data: (vehicleGraphLocationOnly ? { ...vehicleGraphLocationOnly, __typename: 'vehicle' } : null) });
      }

      function cacheWriteQueryVehicleGraphLocationOnlyById({ apolloClient, vehicleGraphLocationOnlyId, vehicleGraphLocationOnly }: { apolloClient: ApolloClient<object>, vehicleGraphLocationOnlyId: string, vehicleGraphLocationOnly: VehicleGraphLocationOnlyFragment | null }): void {
        return apolloClient.cache.writeQuery<VehicleGraphLocationOnlyFragment | null>({ query: FetchVehicleGraphLocationOnlyByIdAsQueryDocument, variables: { vehicleGraphLocationOnlyId }, data: (vehicleGraphLocationOnly ? { ...vehicleGraphLocationOnly, __typename: 'vehicle' } : null) });
      }
    

      // Fetch Helper
      //
      export type FetchVehicleGraphLocationOnlyByIdAsQueryApolloQueryResult = ApolloQueryResult<FetchVehicleGraphLocationOnlyByIdAsQueryQuery>;
      export type FetchVehicleGraphLocationOnlyByIdAsQueryApolloQueryHelperResultEx = FetchVehicleGraphLocationOnlyByIdAsQueryApolloQueryResult & VehicleGraphLocationOnlyByIdHelperResultEx;

      async function fetchVehicleGraphLocationOnlyById({ apolloClient, vehicleId, options }: { apolloClient: ApolloClient<object>, vehicleId: string, options?: Omit<QueryOptions<FetchVehicleGraphLocationOnlyByIdAsQueryQueryVariables>, 'query' | 'variables'> }): Promise<FetchVehicleGraphLocationOnlyByIdAsQueryApolloQueryHelperResultEx> {
        const query: FetchVehicleGraphLocationOnlyByIdAsQueryApolloQueryResult = await apolloClient.query<FetchVehicleGraphLocationOnlyByIdAsQueryQuery>({ query: FetchVehicleGraphLocationOnlyByIdAsQueryDocument, variables: { vehicleId }, ...options });
        
        return { ...query, vehicleGraphLocationOnly: query && query.data && query.data.vehicle_by_pk }
      }

      export type WatchFetchVehicleGraphLocationOnlyByIdAsQueryModelByIdApolloObservableQuery = ObservableQuery<FetchVehicleGraphLocationOnlyByIdAsQueryQuery>;
      async function watchQueryVehicleGraphLocationOnlyModelById({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchVehicleGraphLocationOnlyByIdAsQueryQueryVariables>, 'query'> }) : Promise<WatchFetchVehicleGraphLocationOnlyByIdAsQueryModelByIdApolloObservableQuery> {
        return apolloClient.watchQuery<FetchVehicleGraphLocationOnlyByIdAsQueryQuery>({ query: FetchVehicleGraphLocationOnlyByIdAsQueryDocument, ...options });
      }
    

      // Fetch Objects Helper
      //
      export type FetchVehicleGraphLocationOnlyAsQueryObjectsApolloQueryResult = ApolloQueryResult<FetchVehicleGraphLocationOnlyAsQueryQuery>;
      export type FetchVehicleGraphLocationOnlyAsQueryObjectsApolloQueryResultEx = FetchVehicleGraphLocationOnlyAsQueryObjectsApolloQueryResult & VehicleGraphLocationOnlyObjectsHelperResultEx;

      async function fetchVehicleGraphLocationOnlyObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchVehicleGraphLocationOnlyAsQueryQueryVariables>, 'query'> }): Promise<FetchVehicleGraphLocationOnlyAsQueryObjectsApolloQueryResultEx> {
        const query: FetchVehicleGraphLocationOnlyAsQueryObjectsApolloQueryResult = await apolloClient.query<FetchVehicleGraphLocationOnlyAsQueryQuery>({ query: FetchVehicleGraphLocationOnlyAsQueryDocument, ...options });
        
        return { ...query, objects: (query && query.data && query.data.vehicle) || [] }
      }

      export type WatchVehicleGraphLocationOnlyModelObjectsApolloObservableQuery = ObservableQuery<FetchVehicleGraphLocationOnlyAsQueryQuery>;
      async function watchQueryVehicleGraphLocationOnlyModelObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchVehicleGraphLocationOnlyAsQueryQueryVariables>, 'query'> }) : Promise<WatchVehicleGraphLocationOnlyModelObjectsApolloObservableQuery> {
        return apolloClient.watchQuery<FetchVehicleGraphLocationOnlyAsQueryQuery>({ query: FetchVehicleGraphLocationOnlyAsQueryDocument, ...options });
      }
    

    // Insert Helper
    //
    type InsertVehicleGraphLocationOnlyFetchResult = FetchResult<InsertVehicleGraphLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleGraphLocationOnlyFetchHelperResultEx = InsertVehicleGraphLocationOnlyFetchResult & VehicleGraphLocationOnlyByIdHelperResultEx;

    async function insertVehicleGraphLocationOnly({ apolloClient, vehicle, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleGraphLocationOnlyFetchHelperResultEx> {
      const mutationOptions:MutationOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables> = { mutation: InsertVehicleGraphLocationOnlyDocument, variables: { objects: [vehicle] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!vehicle.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleGraphLocationOnlyMutation>({ operationType: 'insert', entityName:'vehicle', objects:[vehicle as Vehicle_Insert_Input & ObjectWithId] }); 
      }
      
      const mutation:InsertVehicleGraphLocationOnlyFetchResult = await apolloClient.mutate<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleGraphLocationOnly:mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning && mutation.data.insert_vehicle!.returning[0] };
    }

    async function insertVehicleGraphLocationOnlyWithOnConflict({ apolloClient, vehicle, onConflict, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, onConflict: Vehicle_On_Conflict, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleGraphLocationOnlyFetchHelperResultEx> {
      const mutationOptions:MutationOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables> = { mutation: InsertVehicleGraphLocationOnlyDocument, variables: { objects: [vehicle], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!vehicle.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleGraphLocationOnlyMutation>({ operationType: 'insert', entityName:'vehicle', objects:[vehicle as Vehicle_Insert_Input & ObjectWithId] }); 
      }
      
      const mutation:InsertVehicleGraphLocationOnlyFetchResult = await apolloClient.mutate<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleGraphLocationOnly:mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning && mutation.data.insert_vehicle!.returning[0] };
    }



  

    // Insert Objects Helper
    //
    type InsertVehicleGraphLocationOnlyObjectsFetchResult = FetchResult<InsertVehicleGraphLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleGraphLocationOnlyObjectsHelperResultEx = InsertVehicleGraphLocationOnlyObjectsFetchResult & VehicleGraphLocationOnlyObjectsHelperResultEx;

    async function insertVehicleGraphLocationOnlyObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation'> }): Promise<InsertVehicleGraphLocationOnlyObjectsHelperResultEx> {
      const mutation: InsertVehicleGraphLocationOnlyObjectsFetchResult = await apolloClient.mutate<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>({ mutation: InsertVehicleGraphLocationOnlyDocument, ...options });
       
      return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning) || [] };
    }
  

    // Update Helper
    //
    type UpdateVehicleGraphLocationOnlyByIdQueryResult = FetchResult<UpdateVehicleGraphLocationOnlyByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleGraphLocationOnlyByIdHelperResultEx = UpdateVehicleGraphLocationOnlyByIdQueryResult & VehicleGraphLocationOnlyByIdHelperResultEx;

    async function updateVehicleGraphLocationOnlyById({ apolloClient, vehicleId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, vehicleId: string, set: Vehicle_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, 'mutation'> }): Promise<UpdateVehicleGraphLocationOnlyByIdHelperResultEx> {
      const mutationOptions:MutationOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables> = { mutation: UpdateVehicleGraphLocationOnlyByIdDocument, variables: { id:vehicleId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateVehicleGraphLocationOnlyByIdMutation>({ operationType: 'update', entityName:'vehicle', objects:[{ id:vehicleId, ...set }] }); }

      const mutation:UpdateVehicleGraphLocationOnlyByIdQueryResult = await apolloClient.mutate<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleGraphLocationOnly:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning && mutation.data.update_vehicle!.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateVehicleGraphLocationOnlyObjectsFetchResult = FetchResult<UpdateVehicleGraphLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleGraphLocationOnlyObjectsHelperResultEx = UpdateVehicleGraphLocationOnlyObjectsFetchResult & VehicleGraphLocationOnlyObjectsHelperResultEx;

    async function updateVehicleGraphLocationOnlyObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>, 'mutation'> }): Promise<UpdateVehicleGraphLocationOnlyObjectsHelperResultEx> {  
      const mutation:UpdateVehicleGraphLocationOnlyObjectsFetchResult = await apolloClient.mutate<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>({ mutation: UpdateVehicleGraphLocationOnlyDocument, ...options } );
        
      return { ...mutation, objects:(mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning) || [] };
    }
  

    // VehicleGraphLocationOnly Fragment Helper Object
    //------------------------------------------------

    export const VehicleGraphLocationOnlyFragmentGQLHelper = {
      clientReadFragmentById: clientReadFragmentVehicleGraphLocationOnlyById,
      clientWriteFragmentById: clientWriteFragmentVehicleGraphLocationOnlyById,
      cacheWriteFragmentById: cacheWriteFragmentVehicleGraphLocationOnlyById,
      clientReadQueryById: clientReadQueryVehicleGraphLocationOnlyById,
      clientWriteQueryById: clientWriteQueryVehicleGraphLocationOnlyById,
      cacheWriteQueryById: cacheWriteQueryVehicleGraphLocationOnlyById,
      fetchById: fetchVehicleGraphLocationOnlyById,
      watchQueryById: fetchVehicleGraphLocationOnlyById,
      fetchObjects: fetchVehicleGraphLocationOnlyObjects,
      watchQueryObjects: fetchVehicleGraphLocationOnlyObjects,
      insert: insertVehicleGraphLocationOnly,
      insertWithOnConflict: insertVehicleGraphLocationOnlyWithOnConflict,
      insertObjects: insertVehicleGraphLocationOnlyObjects,
      updateById: updateVehicleGraphLocationOnlyById,
      updateObjects: updateVehicleGraphLocationOnlyObjects,
    }
  

    // dogs HELPERS
    //------------------------------------------------

    export type DogModelByIdHelperResultEx = { dogModel:DogModelFragment | null | undefined };
    export type DogModelObjectsHelperResultEx = { objects:DogModelFragment[] };
  
  

      // Direct Client & Cache Helpers
      //
      function clientReadFragmentDogModelById({ apolloClient, dogModelId}: { apolloClient: ApolloClient<object>, dogModelId: string }): DogModelFragment | null | undefined {
        return apolloClient.readFragment<DogModelFragment | null | undefined>({ fragment: DogModelFragmentDoc, fragmentName:'DogModel', id: defaultDataIdFromObject({ __typename: 'dogs', id:dogModelId }) });
      }
  
      function clientWriteFragmentDogModelById({ apolloClient, dogModelId, dogModelPartial }: { apolloClient: ApolloClient<object>, dogModelId: string, dogModelPartial: Partial<DogModelFragment> | null }): void {
        return apolloClient.writeFragment<Partial<DogModelFragment> | null>({ fragment: DogModelFragmentDoc, fragmentName:'DogModel', id: defaultDataIdFromObject({ ...dogModelPartial, id:dogModelId, __typename: 'dogs' }), data: { ...dogModelPartial, __typename: 'dogs' } });
      }
  
      function cacheWriteFragmentDogModelById({ apolloClient, dogModelId, dogModelPartial }: { apolloClient: ApolloClient<object>, dogModelId: string, dogModelPartial: Partial<DogModelFragment> | null }): void {
        return apolloClient.cache.writeFragment<Partial<DogModelFragment> | null>({ fragment: DogModelFragmentDoc, fragmentName:'DogModel', id: defaultDataIdFromObject({ ...dogModelPartial, id:dogModelId, __typename: 'dogs' }), data: { ...dogModelPartial, __typename: 'dogs' } });
      }

      function clientReadQueryDogModelById({ apolloClient, dogModelId}: { apolloClient: ApolloClient<object>, dogModelId: string }): DogModelFragment | null | undefined {
        return apolloClient.readQuery<DogModelFragment | null >({ query: FetchDogModelByIdAsQueryDocument, variables: { dogModelId }  });
      }

      function clientWriteQueryDogModelById({ apolloClient, dogModelId, dogModel }: { apolloClient: ApolloClient<object>, dogModelId: string, dogModel: DogModelFragment | null }): void {
        return apolloClient.writeQuery<DogModelFragment | null>({ query: FetchDogModelByIdAsQueryDocument, variables: { dogModelId }, data: (dogModel ? { ...dogModel, __typename: 'dogs' } : null) });
      }

      function cacheWriteQueryDogModelById({ apolloClient, dogModelId, dogModel }: { apolloClient: ApolloClient<object>, dogModelId: string, dogModel: DogModelFragment | null }): void {
        return apolloClient.cache.writeQuery<DogModelFragment | null>({ query: FetchDogModelByIdAsQueryDocument, variables: { dogModelId }, data: (dogModel ? { ...dogModel, __typename: 'dogs' } : null) });
      }
    

      // Fetch Helper
      //
      export type FetchDogModelByIdAsQueryApolloQueryResult = ApolloQueryResult<FetchDogModelByIdAsQueryQuery>;
      export type FetchDogModelByIdAsQueryApolloQueryHelperResultEx = FetchDogModelByIdAsQueryApolloQueryResult & DogModelByIdHelperResultEx;

      async function fetchDogModelById({ apolloClient, dogsId, options }: { apolloClient: ApolloClient<object>, dogsId: string, options?: Omit<QueryOptions<FetchDogModelByIdAsQueryQueryVariables>, 'query' | 'variables'> }): Promise<FetchDogModelByIdAsQueryApolloQueryHelperResultEx> {
        const query: FetchDogModelByIdAsQueryApolloQueryResult = await apolloClient.query<FetchDogModelByIdAsQueryQuery>({ query: FetchDogModelByIdAsQueryDocument, variables: { dogsId }, ...options });
        
        return { ...query, dogModel: query && query.data && query.data.dogs_by_pk }
      }

      export type WatchFetchDogModelByIdAsQueryModelByIdApolloObservableQuery = ObservableQuery<FetchDogModelByIdAsQueryQuery>;
      async function watchQueryDogModelModelById({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchDogModelByIdAsQueryQueryVariables>, 'query'> }) : Promise<WatchFetchDogModelByIdAsQueryModelByIdApolloObservableQuery> {
        return apolloClient.watchQuery<FetchDogModelByIdAsQueryQuery>({ query: FetchDogModelByIdAsQueryDocument, ...options });
      }
    

      // Fetch Objects Helper
      //
      export type FetchDogModelAsQueryObjectsApolloQueryResult = ApolloQueryResult<FetchDogModelAsQueryQuery>;
      export type FetchDogModelAsQueryObjectsApolloQueryResultEx = FetchDogModelAsQueryObjectsApolloQueryResult & DogModelObjectsHelperResultEx;

      async function fetchDogModelObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchDogModelAsQueryQueryVariables>, 'query'> }): Promise<FetchDogModelAsQueryObjectsApolloQueryResultEx> {
        const query: FetchDogModelAsQueryObjectsApolloQueryResult = await apolloClient.query<FetchDogModelAsQueryQuery>({ query: FetchDogModelAsQueryDocument, ...options });
        
        return { ...query, objects: (query && query.data && query.data.dogs) || [] }
      }

      export type WatchDogModelModelObjectsApolloObservableQuery = ObservableQuery<FetchDogModelAsQueryQuery>;
      async function watchQueryDogModelModelObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchDogModelAsQueryQueryVariables>, 'query'> }) : Promise<WatchDogModelModelObjectsApolloObservableQuery> {
        return apolloClient.watchQuery<FetchDogModelAsQueryQuery>({ query: FetchDogModelAsQueryDocument, ...options });
      }
    

    // Insert Helper
    //
    type InsertDogModelFetchResult = FetchResult<InsertDogModelMutation, Record<string, any>, Record<string, any>>;
    export type InsertDogModelFetchHelperResultEx = InsertDogModelFetchResult & DogModelByIdHelperResultEx;

    async function insertDogModel({ apolloClient, dogs, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, dogs: Dogs_Insert_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertDogModelFetchHelperResultEx> {
      const mutationOptions:MutationOptions<InsertDogModelMutation, InsertDogModelMutationVariables> = { mutation: InsertDogModelDocument, variables: { objects: [dogs] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!dogs.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'dogs'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertDogModelMutation>({ operationType: 'insert', entityName:'dogs', objects:[dogs as Dogs_Insert_Input & ObjectWithId] }); 
      }
      
      const mutation:InsertDogModelFetchResult = await apolloClient.mutate<InsertDogModelMutation, InsertDogModelMutationVariables>(mutationOptions);
        
      return { ...mutation, dogModel:mutation && mutation.data && mutation.data.insert_dogs && mutation.data.insert_dogs!.returning && mutation.data.insert_dogs!.returning[0] };
    }

    async function insertDogModelWithOnConflict({ apolloClient, dogs, onConflict, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, dogs: Dogs_Insert_Input, onConflict: Dogs_On_Conflict, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertDogModelFetchHelperResultEx> {
      const mutationOptions:MutationOptions<InsertDogModelMutation, InsertDogModelWithOnConflictMutationVariables> = { mutation: InsertDogModelDocument, variables: { objects: [dogs], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!dogs.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'dogs'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertDogModelMutation>({ operationType: 'insert', entityName:'dogs', objects:[dogs as Dogs_Insert_Input & ObjectWithId] }); 
      }
      
      const mutation:InsertDogModelFetchResult = await apolloClient.mutate<InsertDogModelMutation, InsertDogModelWithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, dogModel:mutation && mutation.data && mutation.data.insert_dogs && mutation.data.insert_dogs!.returning && mutation.data.insert_dogs!.returning[0] };
    }



  

    // Insert Objects Helper
    //
    type InsertDogModelObjectsFetchResult = FetchResult<InsertDogModelMutation, Record<string, any>, Record<string, any>>;
    export type InsertDogModelObjectsHelperResultEx = InsertDogModelObjectsFetchResult & DogModelObjectsHelperResultEx;

    async function insertDogModelObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, 'mutation'> }): Promise<InsertDogModelObjectsHelperResultEx> {
      const mutation: InsertDogModelObjectsFetchResult = await apolloClient.mutate<InsertDogModelMutation, InsertDogModelMutationVariables>({ mutation: InsertDogModelDocument, ...options });
       
      return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_dogs && mutation.data.insert_dogs!.returning) || [] };
    }
  

    // Update Helper
    //
    type UpdateDogModelByIdQueryResult = FetchResult<UpdateDogModelByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateDogModelByIdHelperResultEx = UpdateDogModelByIdQueryResult & DogModelByIdHelperResultEx;

    async function updateDogModelById({ apolloClient, dogsId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, dogsId: string, set: Dogs_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>, 'mutation'> }): Promise<UpdateDogModelByIdHelperResultEx> {
      const mutationOptions:MutationOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables> = { mutation: UpdateDogModelByIdDocument, variables: { id:dogsId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateDogModelByIdMutation>({ operationType: 'update', entityName:'dogs', objects:[{ id:dogsId, ...set }] }); }

      const mutation:UpdateDogModelByIdQueryResult = await apolloClient.mutate<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, dogModel:mutation && mutation.data && mutation.data.update_dogs && mutation.data.update_dogs!.returning && mutation.data.update_dogs!.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateDogModelObjectsFetchResult = FetchResult<UpdateDogModelMutation, Record<string, any>, Record<string, any>>;
    export type UpdateDogModelObjectsHelperResultEx = UpdateDogModelObjectsFetchResult & DogModelObjectsHelperResultEx;

    async function updateDogModelObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateDogModelMutation, UpdateDogModelMutationVariables>, 'mutation'> }): Promise<UpdateDogModelObjectsHelperResultEx> {  
      const mutation:UpdateDogModelObjectsFetchResult = await apolloClient.mutate<UpdateDogModelMutation, UpdateDogModelMutationVariables>({ mutation: UpdateDogModelDocument, ...options } );
        
      return { ...mutation, objects:(mutation && mutation.data && mutation.data.update_dogs && mutation.data.update_dogs!.returning) || [] };
    }
  
  

    // Delete Helper
    //

    type RemoveDogsModelByIdQueryResult = FetchResult<RemoveDogsModelByIdMutation, Record<string, any>, Record<string, any>>;
    export type RemoveDogsModelByIdQueryHelperResultEx = RemoveDogsModelByIdQueryResult & RemoveEntitiesQueryHelperResultEx;
  
    async function removeDogsModelById({ apolloClient, dogsId, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, dogsId: string, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>, 'mutation'> }): Promise<RemoveDogsModelByIdQueryHelperResultEx> {
      const mutationOptions:MutationOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables> = { mutation: RemoveDogsModelByIdDocument, variables: { id:dogsId, }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<RemoveDogsModelByIdMutation>({ operationType: 'delete', entityName:'dogs', objects:[{ id:dogsId }] }); }
      if((!options || !options.update)){ mutationOptions.update = generateUpdateFunctionForMutation<RemoveDogsModelByIdMutation>({ operationType: 'delete', entityName:'dogs', entityId:dogsId }); }
      
      const mutation:RemoveDogsModelByIdQueryResult = await apolloClient.mutate<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>(mutationOptions);
    
      return { ...mutation, affected_rows:(mutation && mutation.data && mutation.data.delete_dogs && mutation.data.delete_dogs!.affected_rows) || 0 };
    }
  

    type RemoveDogsModelObjectsQueryResult = FetchResult<RemoveDogsModelMutation, Record<string, any>, Record<string, any>>;
    export type RemoveDogsModelObjectsQueryHelperResultEx = RemoveDogsModelObjectsQueryResult & RemoveEntitiesQueryHelperResultEx;  
  
    async function removeDogsModelObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>, 'mutation'> }): Promise<RemoveDogsModelObjectsQueryHelperResultEx> {  
        const mutation:RemoveDogsModelByIdQueryResult = await apolloClient.mutate<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>({ mutation: RemoveDogsModelDocument, ...options } );
          
        return { ...mutation, affected_rows:(mutation && mutation.data && mutation.data.delete_dogs && mutation.data.delete_dogs!.affected_rows) || 0 };
      }
  

    // DogModel Fragment Helper Object
    //------------------------------------------------

    export const DogModelFragmentGQLHelper = {
      clientReadFragmentById: clientReadFragmentDogModelById,
      clientWriteFragmentById: clientWriteFragmentDogModelById,
      cacheWriteFragmentById: cacheWriteFragmentDogModelById,
      clientReadQueryById: clientReadQueryDogModelById,
      clientWriteQueryById: clientWriteQueryDogModelById,
      cacheWriteQueryById: cacheWriteQueryDogModelById,
      fetchById: fetchDogModelById,
      watchQueryById: fetchDogModelById,
      fetchObjects: fetchDogModelObjects,
      watchQueryObjects: fetchDogModelObjects,
      insert: insertDogModel,
      insertWithOnConflict: insertDogModelWithOnConflict,
      insertObjects: insertDogModelObjects,
      updateById: updateDogModelById,
      updateObjects: updateDogModelObjects,
    }
  

    // dogs Entity Helper Object
    //------------------------------------------------

    export const DogsModelGQLHelper = {
      removeById: removeDogsModelById,
      removeObjects: removeDogsModelObjects
    }
  

    // COMBINED HELPER OBJECT
    //------------------------------------------------
    export const GQLHelpers = {
      Fragments: {
        VehicleGraph: VehicleGraphFragmentGQLHelper,
        VehicleGraphLocationOnly: VehicleGraphLocationOnlyFragmentGQLHelper,
        DogModel: DogModelFragmentGQLHelper
      },
      Models: {
        VehicleModel: VehicleModelGQLHelper,
        DogsModel: DogsModelGQLHelper
      }
    }
  