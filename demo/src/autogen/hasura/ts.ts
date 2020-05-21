import { generateOptimisticResponseForMutation, generateUpdateFunctionForMutation, convertToGraph, ObjectWithId, FieldMap, getLogLevel, ensureTypenameOnFragment, ensureTypenameOnFragments, stripInsertInputClientFields } from 'graphql-codegen-hasura-core'
import { ApolloClient, ApolloQueryResult, defaultDataIdFromObject, FetchResult, MutationOptions, ObservableQuery, QueryOptions, SubscriptionOptions, Observable, DataProxy } from '@apollo/client'
import { VehicleFragment } from '../';
import { Vehicle } from '../';
import { VehicleFragmentDoc } from '../';
import { QueryVehicleObjectsQueryVariables } from '../';
import { QueryVehicleByIdQuery } from '../';
import { QueryVehicleByIdDocument } from '../';
import { QueryVehicleByIdQueryVariables } from '../';
import { QueryVehicleObjectsQuery } from '../';
import { QueryVehicleObjectsDocument } from '../';
import { SubscribeToVehicleByIdSubscription } from '../';
import { SubscribeToVehicleByIdDocument } from '../';
import { SubscribeToVehicleByIdSubscriptionVariables } from '../';
import { SubscribeToVehicleObjectsSubscription } from '../';
import { SubscribeToVehicleObjectsDocument } from '../';
import { SubscribeToVehicleObjectsSubscriptionVariables } from '../';
import { Vehicle_Insert_Input } from '../';
import { Vehicle_On_Conflict } from '../';
import { InsertVehicleMutation } from '../';
import { InsertVehicleWithOnConflictMutation } from '../';
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
import { VehicleLocationOnlyFragmentDoc } from '../';
import { QueryVehicleLocationOnlyObjectsQueryVariables } from '../';
import { QueryVehicleLocationOnlyByIdQuery } from '../';
import { QueryVehicleLocationOnlyByIdDocument } from '../';
import { QueryVehicleLocationOnlyByIdQueryVariables } from '../';
import { QueryVehicleLocationOnlyObjectsQuery } from '../';
import { QueryVehicleLocationOnlyObjectsDocument } from '../';
import { SubscribeToVehicleLocationOnlyByIdSubscription } from '../';
import { SubscribeToVehicleLocationOnlyByIdDocument } from '../';
import { SubscribeToVehicleLocationOnlyByIdSubscriptionVariables } from '../';
import { SubscribeToVehicleLocationOnlyObjectsSubscription } from '../';
import { SubscribeToVehicleLocationOnlyObjectsDocument } from '../';
import { SubscribeToVehicleLocationOnlyObjectsSubscriptionVariables } from '../';
import { InsertVehicleLocationOnlyMutation } from '../';
import { InsertVehicleLocationOnlyWithOnConflictMutation } from '../';
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

    // GLOBAL TYPES
    //------------------------------------------------
    export type RemoveEntitiesQueryHelperResultEx = { affected_rows:number };

    //
    // GLOBAL VALUES
    const logLevel = getLogLevel();

  

    // vehicle HELPERS
    //------------------------------------------------

    export type VehicleByIdHelperResultEx = { vehicle:VehicleFragment | null | undefined };
    export type VehicleObjectsHelperResultEx = { objects:VehicleFragment[] };
    
  

    // Direct Client & Cache Fragment Helpers
    //
    function cacheGetDataIdForVehicle( vehicleId: string): string {
      return defaultDataIdFromObject({ __typename: 'vehicle', id:vehicleId });
    }

    function clientReadFragmentVehicleById({ apolloClient, vehicleId}: { apolloClient: ApolloClient<object>, vehicleId: string }): VehicleFragment | null | undefined {
      return apolloClient.readFragment<VehicleFragment | null | undefined>({ fragment: VehicleFragmentDoc, fragmentName:'Vehicle', id: defaultDataIdFromObject({ __typename: 'vehicle', id:vehicleId }) });
    }

    function clientWriteFragmentVehicleById({ apolloClient, vehicleId, vehiclePartial, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehiclePartial: Partial<VehicleFragment> | Vehicle_Insert_Input | null, fieldMap?: FieldMap }): Partial<VehicleFragment> {
      const parsedFragment = convertToGraph({ input:vehiclePartial, typename:'vehicle', fieldMap });
      if(logLevel >= 2) console.log(' --> clientWriteFragmentVehicleById - parsedFragment:', parsedFragment);
      apolloClient.writeFragment<Partial<VehicleFragment> | null>({ fragment: VehicleFragmentDoc, fragmentName:'Vehicle', id: defaultDataIdFromObject({ ...parsedFragment, id:vehicleId }), data: parsedFragment });
      return parsedFragment;
    }

    function cacheWriteFragmentVehicleById({ apolloClient, vehicleId, vehiclePartial, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehiclePartial: Partial<VehicleFragment> | Vehicle_Insert_Input | null, fieldMap?: FieldMap }): Partial<VehicleFragment> {
      const parsedFragment = convertToGraph({ input:vehiclePartial, typename:'vehicle', fieldMap });
      if(logLevel >= 2) console.log(' --> cacheWriteFragmentVehicleById - parsedFragment:', parsedFragment);
      apolloClient.cache.writeFragment<Partial<VehicleFragment> | null>({ fragment: VehicleFragmentDoc, fragmentName:'Vehicle', id: defaultDataIdFromObject({ ...parsedFragment, id:vehicleId }), data: parsedFragment });
      return parsedFragment;
    }

    function clientReadQueryVehicleById({ apolloClient, vehicleId}: { apolloClient: ApolloClient<object>, vehicleId: string }): VehicleFragment | null | undefined {
      try {
        return apolloClient.readQuery<VehicleFragment | null >({ query: QueryVehicleByIdDocument, variables: { vehicleId }  });
      } catch (error) {
        //DEVNOTE: Remove after this apollographql issue has been addressed: https://github.com/apollographql/apollo-client/issues/6094
        console.warn('clientReadQueryVehicleById threw error. Could be related to this apolloGraphQl Issue. If so, can ignore: https://github.com/apollographql/apollo-client/issues/6094');
      }
      return undefined;
    }

    function clientWriteQueryVehicleById({ apolloClient, vehicleId, vehicle, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehicle: VehicleFragment | Vehicle_Insert_Input | null, fieldMap?: FieldMap }): void {
      try {
        const vehiclePartial = convertToGraph({ input:vehicle, typename:'vehicle', fieldMap });
        return apolloClient.writeQuery<VehicleFragment | null>({ query: QueryVehicleByIdDocument, variables: { vehicleId }, data: (vehicle ? vehiclePartial : null) });
      } catch (error) {
        //DEVNOTE: Remove after this apollographql issue has been addressed: https://github.com/apollographql/apollo-client/issues/6094
        console.warn('clientWriteQueryVehicleById threw error. Could be related to this apolloGraphQl Issue. If so, can ignore: https://github.com/apollographql/apollo-client/issues/6094');
      }
      return undefined;
    }

    function cacheWriteQueryVehicleById({ apolloClient, vehicleId, vehicle, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehicle: VehicleFragment | Vehicle_Insert_Input | null, fieldMap?: FieldMap }): void {
      try {
        const vehiclePartial = convertToGraph({ input:vehicle, typename:'vehicle', fieldMap });
        return apolloClient.cache.writeQuery<VehicleFragment | null>({ query: QueryVehicleByIdDocument, variables: { vehicleId }, data: (vehicle ? vehiclePartial : null) });
      } catch (error) {
        //DEVNOTE: Remove after this apollographql issue has been addressed: https://github.com/apollographql/apollo-client/issues/6094
        console.warn('cacheWriteQueryVehicleById threw error. Could be related to this apolloGraphQl Issue. If so, can ignore: https://github.com/apollographql/apollo-client/issues/6094');
      }
      return undefined;
    }
    
    function clientReadQueryVehicleObjects({ apolloClient, variables }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables }): Vehicle[] | null | undefined {
      try {
        return apolloClient.readQuery<{Vehicle:Vehicle[] | null}>({ query: QueryVehicleObjectsDocument, variables })?.Vehicle || [];
      } catch (error) {
        //DEVNOTE: Remove after this apollographql issue has been addressed: https://github.com/apollographql/apollo-client/issues/6094
        console.warn('clientReadQueryVehicleObjects threw error. Could be related to this apolloGraphQl Issue. If so, can ignore: https://github.com/apollographql/apollo-client/issues/6094');
      }
      return undefined;
    }

    function clientWriteQueryVehicleObjects({ apolloClient, variables, data, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables, data:(Vehicle | Vehicle_Insert_Input)[], fieldMap?: FieldMap }): void {
      try {
        const objects = convertToGraph({ input:data, typename:'vehicle', fieldMap });
        return apolloClient.writeQuery<{Vehicle:Vehicle[]}>({ query: QueryVehicleObjectsDocument, variables, data: { Vehicle:objects } });
      } catch (error) {
        //DEVNOTE: Remove after this apollographql issue has been addressed: https://github.com/apollographql/apollo-client/issues/6094
        console.warn('clientWriteQueryVehicleObjects threw error. Could be related to this apolloGraphQl Issue. If so, can ignore: https://github.com/apollographql/apollo-client/issues/6094');
      }
      return undefined;
    }

    function cacheWriteQueryVehicleObjects({ apolloClient, variables, data, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables, data:(Vehicle | Vehicle_Insert_Input)[], fieldMap?: FieldMap }): void {
      try {   
        const objects = convertToGraph({ input:data, typename:'vehicle', fieldMap });
        return apolloClient.cache.watch({}) .writeQuery<{Vehicle:Vehicle[]}>({ query: QueryVehicleObjectsDocument, variables, data: { Vehicle:objects } });
      } catch (error) {
        //DEVNOTE: Remove after this apollographql issue has been addressed: https://github.com/apollographql/apollo-client/issues/6094
        console.warn('cacheWriteQueryVehicleObjects threw error. Could be related to this apolloGraphQl Issue. If so, can ignore: https://github.com/apollographql/apollo-client/issues/6094');
      }
      return undefined;
    }

    function clientWriteQueryVehicleInsert({ apolloClient, variables, vehicle, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables, vehicle:Vehicle_Insert_Input, fieldMap?: FieldMap }): void {
      const currentObjects = clientReadQueryVehicleObjects({ apolloClient, variables }) || [];
      const objectsWithInserted = [ ...currentObjects, convertToGraph({ input: vehicle, typename:'vehicle', fieldMap })];
      if(logLevel >= 2) console.log(' --> clientWriteQueryVehicleInsert - objectsWithInserted:', objectsWithInserted);
      return clientWriteQueryVehicleObjects({ apolloClient, variables, data: objectsWithInserted });  
    }

    function cacheWriteQueryVehicleInsert({ apolloClient, variables, vehicle, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables, vehicle:Vehicle_Insert_Input, fieldMap?: FieldMap }): void {
      const currentObjects = clientReadQueryVehicleObjects({ apolloClient, variables }) || [];
      const objectsWithInserted = [ ...currentObjects, convertToGraph({ input: vehicle, typename:'vehicle', fieldMap })];
      if(logLevel >= 2) console.log(' --> cacheWriteQueryVehicleInsert - objectsWithInserted:', objectsWithInserted);
      return cacheWriteQueryVehicleObjects({ apolloClient, variables, data: objectsWithInserted });
    }

    function clientWriteQueryVehicleRemove({ apolloClient, variables, vehicleId }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables, vehicleId: string }): void {
      const currentObjects = clientReadQueryVehicleObjects({ apolloClient, variables }) || [];
      const objectsWithRemoved = currentObjects.filter(objectItem => objectItem.id !== vehicleId) || [];
      if(logLevel >= 2) console.log(' --> clientWriteQueryVehicleRemove - objectsWithRemoved:', objectsWithRemoved);
      return clientWriteQueryVehicleObjects({ apolloClient, variables, data: objectsWithRemoved });
    }

    function cacheWriteQueryVehicleRemove({ apolloClient, variables, vehicleId }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables, vehicleId: string }): void {
      const currentObjects = clientReadQueryVehicleObjects({ apolloClient, variables }) || [];
      const objectsWithRemoved = currentObjects.filter(objectItem => objectItem.id !== vehicleId) || [];
      if(logLevel >= 2) console.log(' --> cacheWriteQueryVehicleRemove - objectsWithRemoved:', objectsWithRemoved);
      return cacheWriteQueryVehicleObjects({ apolloClient, variables, data: objectsWithRemoved });
    };
    

      // Query Fetch Helper
      //
      export type QueryVehicleByIdApolloQueryResult = ApolloQueryResult<QueryVehicleByIdQuery>;
      export type QueryVehicleByIdApolloQueryHelperResultEx = QueryVehicleByIdApolloQueryResult & VehicleByIdHelperResultEx;

      async function queryVehicleById({ apolloClient, vehicleId, options }: { apolloClient: ApolloClient<object>, vehicleId: string, options?: Omit<QueryOptions<QueryVehicleByIdQueryVariables>, 'query' | 'variables'> }): Promise<QueryVehicleByIdApolloQueryHelperResultEx> {
        const query: QueryVehicleByIdApolloQueryResult = await apolloClient.query<QueryVehicleByIdQuery>({ query: QueryVehicleByIdDocument, variables: { vehicleId }, ...options });
        
        return { ...query, vehicle: query?.data?.vehicle_by_pk }
      }

      // Query Watch ById Helper
      //
      export type WatchQueryVehicleByIdApolloObservableQuery = ObservableQuery<QueryVehicleByIdQuery>;
      async function watchQueryVehicleById({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryVehicleByIdQueryVariables>, 'query'> }) : Promise<WatchQueryVehicleByIdApolloObservableQuery> {
        return apolloClient.watchQuery<QueryVehicleByIdQuery>({ query: QueryVehicleByIdDocument, ...options });
      }
    

      // Query Fetch Objects Helper
      //
      export type QueryVehicleObjectsObjectsApolloQueryResult = ApolloQueryResult<QueryVehicleObjectsQuery>;
      export type QueryVehicleObjectsObjectsApolloQueryResultEx = QueryVehicleObjectsObjectsApolloQueryResult & VehicleObjectsHelperResultEx;

      async function queryVehicleObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryVehicleObjectsQueryVariables>, 'query'> }): Promise<QueryVehicleObjectsObjectsApolloQueryResultEx> {
        const query: QueryVehicleObjectsObjectsApolloQueryResult = await apolloClient.query<QueryVehicleObjectsQuery>({ query: QueryVehicleObjectsDocument, ...options });
        
        return { ...query, objects: query?.data?.vehicle || [] }
      }

      // Query Watch Objects Helper
      //
      export type WatchQueryVehicleObjectsApolloObservableQuery = ObservableQuery<QueryVehicleObjectsQuery>;
      async function watchQueryVehicleObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryVehicleObjectsQueryVariables>, 'query'> }) : Promise<WatchQueryVehicleObjectsApolloObservableQuery> {
        return apolloClient.watchQuery<QueryVehicleObjectsQuery>({ query: QueryVehicleObjectsDocument, ...options });
      }
    

    // Subscription Fetch ById Helper
    //
    export type SubscribeToVehicleByIdSubscriptionFetchResult = FetchResult<SubscribeToVehicleByIdSubscription, Record<string, any>, Record<string, any>>;
    export type SubscribeToVehicleByIdSubscriptionFetchResultEx = FetchResult<SubscribeToVehicleByIdSubscription, Record<string, any>, Record<string, any>> & VehicleByIdHelperResultEx;
    
    async function subscribeToVehicleById({ apolloClient, vehicleId, options }: { apolloClient: ApolloClient<object>, vehicleId:string, options?: Omit<SubscriptionOptions<SubscribeToVehicleByIdSubscriptionVariables>, 'query' | 'variables'> }): Promise<Observable<SubscribeToVehicleByIdSubscriptionFetchResultEx>> {
      const subscription:Observable<SubscribeToVehicleByIdSubscriptionFetchResult> = apolloClient.subscribe<SubscribeToVehicleByIdSubscription>({ query: SubscribeToVehicleByIdDocument, variables: { vehicleId }, ...options });
      
      return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, vehicle:value?.data?.vehicle_by_pk || [] }  as SubscribeToVehicleByIdSubscriptionFetchResultEx }) ;
    }
    

      // Subscription Fetch Objects Helper
      //
      export type SubscribeToVehicleObjectsSubscriptionFetchResult = FetchResult<SubscribeToVehicleObjectsSubscription, Record<string, any>, Record<string, any>>;
      export type SubscribeToVehicleObjectsSubscriptionFetchResultEx = FetchResult<SubscribeToVehicleObjectsSubscription, Record<string, any>, Record<string, any>> & VehicleObjectsHelperResultEx;

      async function subscribeToVehicleObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options?: Omit<SubscriptionOptions<SubscribeToVehicleObjectsSubscriptionVariables>, 'query'> }): Promise<Observable<SubscribeToVehicleObjectsSubscriptionFetchResultEx>> {
        const subscription:Observable<SubscribeToVehicleObjectsSubscriptionFetchResult> = apolloClient.subscribe<SubscribeToVehicleObjectsSubscription>({ query: SubscribeToVehicleObjectsDocument, ...options });
        
        return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, objects: value?.data?.vehicle || [] }  as SubscribeToVehicleObjectsSubscriptionFetchResultEx }) ;
      }
    

    // Insert Helper
    //
    type InsertVehicleFetchResult = FetchResult<InsertVehicleMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleFetchHelperResultEx = InsertVehicleFetchResult & VehicleByIdHelperResultEx;

    async function insertVehicle({ apolloClient, vehicle, autoOptimisticResponse, fieldMap, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, autoOptimisticResponse?:boolean, fieldMap?: FieldMap, options?: Omit<MutationOptions<InsertVehicleMutation, InsertVehicleMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleFetchHelperResultEx> {
      const objectForInsert = stripInsertInputClientFields({ input: vehicle });
      const mutationOptions:MutationOptions<InsertVehicleMutation, InsertVehicleMutationVariables> = { mutation: InsertVehicleDocument, variables: { objects: [objectForInsert] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!objectForInsert.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleMutation>({ operationType: 'insert', entityName:'vehicle', objects:[objectForInsert as Vehicle_Insert_Input & ObjectWithId], fieldMap }); 
        if(logLevel >= 2) console.log(' --> insertVehicle - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation:InsertVehicleFetchResult = await apolloClient.mutate<InsertVehicleMutation, InsertVehicleMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicle: mutation?.data?.insert_vehicle?.returning && mutation.data.insert_vehicle.returning[0] };
    }

    async function insertVehicleWithOnConflict({ apolloClient, vehicle, onConflict, autoOptimisticResponse, fieldMap, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, onConflict: Vehicle_On_Conflict, autoOptimisticResponse?:boolean, fieldMap?: FieldMap, options?: Omit<MutationOptions<InsertVehicleWithOnConflictMutation, InsertVehicleWithOnConflictMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleFetchHelperResultEx> {
      const objectForInsert = stripInsertInputClientFields({ input: vehicle });
      const mutationOptions:MutationOptions<InsertVehicleWithOnConflictMutation, InsertVehicleWithOnConflictMutationVariables> = { mutation: InsertVehicleWithOnConflictDocument, variables: { objects: [objectForInsert], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!objectForInsert.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleWithOnConflictMutation>({ operationType: 'insert', entityName:'vehicle', objects:[objectForInsert as Vehicle_Insert_Input & ObjectWithId], fieldMap }); 
        if(logLevel >= 2) console.log(' --> insertVehicleWithOnConflict - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation:InsertVehicleFetchResult = await apolloClient.mutate<InsertVehicleWithOnConflictMutation, InsertVehicleWithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicle: mutation?.data?.insert_vehicle?.returning && mutation.data.insert_vehicle.returning[0] };
    }



  

    // Insert Objects Helper
    //
    type InsertVehicleObjectsFetchResult = FetchResult<InsertVehicleMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleObjectsHelperResultEx = InsertVehicleObjectsFetchResult & VehicleObjectsHelperResultEx;

    async function insertVehicleObjects({ apolloClient, objects, autoOptimisticResponse, fieldMap, options } :{ apolloClient: ApolloClient<object>, objects: Vehicle_Insert_Input[], autoOptimisticResponse?:boolean, fieldMap?: FieldMap, options?: Omit<MutationOptions<InsertVehicleMutation, InsertVehicleMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleObjectsHelperResultEx> {
      const objectsForInsert = objects.map(objectItem => stripInsertInputClientFields({ input: objectItem }));
      const mutationOptions:MutationOptions<InsertVehicleMutation, InsertVehicleMutationVariables> = { mutation: InsertVehicleDocument, variables: { objects: objectsForInsert }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(objectsForInsert.find(objectItem => !objectItem.id)) throw new Error(`if autoOptimisticResponse = true, ids must be set in objects`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleMutation>({ operationType: 'insert', entityName:'vehicle', objects:objectsForInsert as (Vehicle_Insert_Input & ObjectWithId)[], fieldMap }); 
        if(logLevel >= 2) console.log(' --> insertVehicle - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation: InsertVehicleObjectsFetchResult = await apolloClient.mutate<InsertVehicleMutation, InsertVehicleMutationVariables>(mutationOptions);
        
      return { ...mutation, objects: mutation?.data?.insert_vehicle?.returning || [] };
    }
  

    // Update Helper
    //
    type UpdateVehicleByIdQueryResult = FetchResult<UpdateVehicleByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleByIdHelperResultEx = UpdateVehicleByIdQueryResult & VehicleByIdHelperResultEx;

    async function updateVehicleById({ apolloClient, vehicleId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, vehicleId: string, set: Vehicle_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables>, 'mutation'> }): Promise<UpdateVehicleByIdHelperResultEx> {
      const mutationOptions:MutationOptions<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables> = { mutation: UpdateVehicleByIdDocument, variables: { id:vehicleId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateVehicleByIdMutation>({ operationType: 'update', entityName:'vehicle', objects:[{ id:vehicleId, ...set }] }); 
        if(logLevel >= 2) console.log(' --> updateVehicleById - optimisticResponse:', mutationOptions.optimisticResponse);
      }

      const mutation:UpdateVehicleByIdQueryResult = await apolloClient.mutate<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicle: mutation?.data?.update_vehicle?.returning && mutation.data.update_vehicle.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateVehicleObjectsFetchResult = FetchResult<UpdateVehicleMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleObjectsHelperResultEx = UpdateVehicleObjectsFetchResult & VehicleObjectsHelperResultEx;

    async function updateVehicleObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>, 'mutation'> }): Promise<UpdateVehicleObjectsHelperResultEx> {  
      const mutation:UpdateVehicleObjectsFetchResult = await apolloClient.mutate<UpdateVehicleMutation, UpdateVehicleMutationVariables>({ mutation: UpdateVehicleDocument, ...options } );
        
      return { ...mutation, objects:mutation?.data?.update_vehicle?.returning || [] };
    }
  
  

    // Delete Helper
    //

    type RemoveVehicleModelByIdQueryResult = FetchResult<RemoveVehicleModelByIdMutation, Record<string, any>, Record<string, any>>;
    export type RemoveVehicleModelByIdQueryHelperResultEx = RemoveVehicleModelByIdQueryResult & RemoveEntitiesQueryHelperResultEx;
  
    async function removeVehicleModelById({ apolloClient, vehicleId, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, vehicleId: string, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation'> }): Promise<RemoveVehicleModelByIdQueryHelperResultEx> {
      const mutationOptions:MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables> = { mutation: RemoveVehicleModelByIdDocument, variables: { id:vehicleId, }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<RemoveVehicleModelByIdMutation>({ operationType: 'delete', entityName:'vehicle', objects:[{ id:vehicleId }] }); 
        if(logLevel >= 2) console.log(' --> removeVehicleModelById - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      if((!options || !options.update)){ mutationOptions.update = generateUpdateFunctionForMutation<RemoveVehicleModelByIdMutation>({ operationType: 'delete', entityName:'vehicle', entityId:vehicleId }); }
      
      const mutation:RemoveVehicleModelByIdQueryResult = await apolloClient.mutate<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>(mutationOptions);
    
      return { ...mutation, affected_rows: mutation?.data?.delete_vehicle?.affected_rows || 0 };
    }
  

    type RemoveVehicleModelObjectsQueryResult = FetchResult<RemoveVehicleModelMutation, Record<string, any>, Record<string, any>>;
    export type RemoveVehicleModelObjectsQueryHelperResultEx = RemoveVehicleModelObjectsQueryResult & RemoveEntitiesQueryHelperResultEx;  
  
    async function removeVehicleModelObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'> }): Promise<RemoveVehicleModelObjectsQueryHelperResultEx> {  
        const mutation:RemoveVehicleModelByIdQueryResult = await apolloClient.mutate<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>({ mutation: RemoveVehicleModelDocument, ...options } );
          
        return { ...mutation, affected_rows: mutation?.data?.delete_vehicle?.affected_rows || 0 };
      }
  

    // Vehicle Fragment Helper Object
    //------------------------------------------------

    export const VehicleFragmentGQLHelper = {
      cacheGetDataId: cacheGetDataIdForVehicle,
      clientReadFragmentById: clientReadFragmentVehicleById,
      clientWriteFragmentById: clientWriteFragmentVehicleById,
      cacheWriteFragmentById: cacheWriteFragmentVehicleById,
      clientReadQueryById: clientReadQueryVehicleById,
      clientWriteQueryById: clientWriteQueryVehicleById,
      cacheWriteQueryById: cacheWriteQueryVehicleById,
      clientReadQueryObjects: clientReadQueryVehicleObjects,
      clientWriteQueryObjects: clientWriteQueryVehicleObjects,
      cacheWriteQueryObjects: cacheWriteQueryVehicleObjects,
      clientWriteQueryInsert: clientWriteQueryVehicleInsert,
      cacheWriteQueryInsert: cacheWriteQueryVehicleInsert,
      clientWriteQueryRemove: clientWriteQueryVehicleRemove,
      cacheWriteQueryRemove: cacheWriteQueryVehicleRemove,
      queryById: queryVehicleById,
      queryObjects: queryVehicleObjects,
      watchQueryById: watchQueryVehicleById,
      watchQueryObjects: watchQueryVehicleObjects,
      subscribeToById: subscribeToVehicleById,
      subscribeToObjects: subscribeToVehicleObjects,
      insert: insertVehicle,
      insertWithOnConflict: insertVehicleWithOnConflict,
      insertObjects: insertVehicleObjects,
      updateById: updateVehicleById,
      updateObjects: updateVehicleObjects
    }
  

    // vehicle Entity Helper Object
    //------------------------------------------------

    export const VehicleModelGQLHelper = {
      removeById: removeVehicleModelById,
      removeObjects: removeVehicleModelObjects,
    }
  

    // vehicle HELPERS
    //------------------------------------------------

    export type VehicleLocationOnlyByIdHelperResultEx = { vehicleLocationOnly:VehicleLocationOnlyFragment | null | undefined };
    export type VehicleLocationOnlyObjectsHelperResultEx = { objects:VehicleLocationOnlyFragment[] };
    
  

    // Direct Client & Cache Fragment Helpers
    //
    function cacheGetDataIdForVehicleLocationOnly( vehicleId: string): string {
      return defaultDataIdFromObject({ __typename: 'vehicle', id:vehicleId });
    }

    function clientReadFragmentVehicleLocationOnlyById({ apolloClient, vehicleId}: { apolloClient: ApolloClient<object>, vehicleId: string }): VehicleLocationOnlyFragment | null | undefined {
      return apolloClient.readFragment<VehicleLocationOnlyFragment | null | undefined>({ fragment: VehicleLocationOnlyFragmentDoc, fragmentName:'VehicleLocationOnly', id: defaultDataIdFromObject({ __typename: 'vehicle', id:vehicleId }) });
    }

    function clientWriteFragmentVehicleLocationOnlyById({ apolloClient, vehicleId, vehicleLocationOnlyPartial, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehicleLocationOnlyPartial: Partial<VehicleLocationOnlyFragment> | Vehicle_Insert_Input | null, fieldMap?: FieldMap }): Partial<VehicleLocationOnlyFragment> {
      const parsedFragment = convertToGraph({ input:vehicleLocationOnlyPartial, typename:'vehicle', fieldMap });
      if(logLevel >= 2) console.log(' --> clientWriteFragmentVehicleLocationOnlyById - parsedFragment:', parsedFragment);
      apolloClient.writeFragment<Partial<VehicleLocationOnlyFragment> | null>({ fragment: VehicleLocationOnlyFragmentDoc, fragmentName:'VehicleLocationOnly', id: defaultDataIdFromObject({ ...parsedFragment, id:vehicleId }), data: parsedFragment });
      return parsedFragment;
    }

    function cacheWriteFragmentVehicleLocationOnlyById({ apolloClient, vehicleId, vehicleLocationOnlyPartial, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehicleLocationOnlyPartial: Partial<VehicleLocationOnlyFragment> | Vehicle_Insert_Input | null, fieldMap?: FieldMap }): Partial<VehicleLocationOnlyFragment> {
      const parsedFragment = convertToGraph({ input:vehicleLocationOnlyPartial, typename:'vehicle', fieldMap });
      if(logLevel >= 2) console.log(' --> cacheWriteFragmentVehicleLocationOnlyById - parsedFragment:', parsedFragment);
      apolloClient.cache.writeFragment<Partial<VehicleLocationOnlyFragment> | null>({ fragment: VehicleLocationOnlyFragmentDoc, fragmentName:'VehicleLocationOnly', id: defaultDataIdFromObject({ ...parsedFragment, id:vehicleId }), data: parsedFragment });
      return parsedFragment;
    }

    function clientReadQueryVehicleLocationOnlyById({ apolloClient, vehicleId}: { apolloClient: ApolloClient<object>, vehicleId: string }): VehicleLocationOnlyFragment | null | undefined {
      try {
        return apolloClient.readQuery<VehicleLocationOnlyFragment | null >({ query: QueryVehicleLocationOnlyByIdDocument, variables: { vehicleId }  });
      } catch (error) {
        //DEVNOTE: Remove after this apollographql issue has been addressed: https://github.com/apollographql/apollo-client/issues/6094
        console.warn('clientReadQueryVehicleLocationOnlyById threw error. Could be related to this apolloGraphQl Issue. If so, can ignore: https://github.com/apollographql/apollo-client/issues/6094');
      }
      return undefined;
    }

    function clientWriteQueryVehicleLocationOnlyById({ apolloClient, vehicleId, vehicleLocationOnly, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehicleLocationOnly: VehicleLocationOnlyFragment | Vehicle_Insert_Input | null, fieldMap?: FieldMap }): void {
      try {
        const vehicleLocationOnlyPartial = convertToGraph({ input:vehicleLocationOnly, typename:'vehicle', fieldMap });
        return apolloClient.writeQuery<VehicleLocationOnlyFragment | null>({ query: QueryVehicleLocationOnlyByIdDocument, variables: { vehicleId }, data: (vehicleLocationOnly ? vehicleLocationOnlyPartial : null) });
      } catch (error) {
        //DEVNOTE: Remove after this apollographql issue has been addressed: https://github.com/apollographql/apollo-client/issues/6094
        console.warn('clientWriteQueryVehicleLocationOnlyById threw error. Could be related to this apolloGraphQl Issue. If so, can ignore: https://github.com/apollographql/apollo-client/issues/6094');
      }
      return undefined;
    }

    function cacheWriteQueryVehicleLocationOnlyById({ apolloClient, vehicleId, vehicleLocationOnly, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehicleLocationOnly: VehicleLocationOnlyFragment | Vehicle_Insert_Input | null, fieldMap?: FieldMap }): void {
      try {
        const vehicleLocationOnlyPartial = convertToGraph({ input:vehicleLocationOnly, typename:'vehicle', fieldMap });
        return apolloClient.cache.writeQuery<VehicleLocationOnlyFragment | null>({ query: QueryVehicleLocationOnlyByIdDocument, variables: { vehicleId }, data: (vehicleLocationOnly ? vehicleLocationOnlyPartial : null) });
      } catch (error) {
        //DEVNOTE: Remove after this apollographql issue has been addressed: https://github.com/apollographql/apollo-client/issues/6094
        console.warn('cacheWriteQueryVehicleLocationOnlyById threw error. Could be related to this apolloGraphQl Issue. If so, can ignore: https://github.com/apollographql/apollo-client/issues/6094');
      }
      return undefined;
    }
    
    function clientReadQueryVehicleLocationOnlyObjects({ apolloClient, variables }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables }): Vehicle[] | null | undefined {
      try {
        return apolloClient.readQuery<{Vehicle:Vehicle[] | null}>({ query: QueryVehicleLocationOnlyObjectsDocument, variables })?.Vehicle || [];
      } catch (error) {
        //DEVNOTE: Remove after this apollographql issue has been addressed: https://github.com/apollographql/apollo-client/issues/6094
        console.warn('clientReadQueryVehicleLocationOnlyObjects threw error. Could be related to this apolloGraphQl Issue. If so, can ignore: https://github.com/apollographql/apollo-client/issues/6094');
      }
      return undefined;
    }

    function clientWriteQueryVehicleLocationOnlyObjects({ apolloClient, variables, data, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables, data:(Vehicle | Vehicle_Insert_Input)[], fieldMap?: FieldMap }): void {
      try {
        const objects = convertToGraph({ input:data, typename:'vehicle', fieldMap });
        return apolloClient.writeQuery<{Vehicle:Vehicle[]}>({ query: QueryVehicleLocationOnlyObjectsDocument, variables, data: { Vehicle:objects } });
      } catch (error) {
        //DEVNOTE: Remove after this apollographql issue has been addressed: https://github.com/apollographql/apollo-client/issues/6094
        console.warn('clientWriteQueryVehicleLocationOnlyObjects threw error. Could be related to this apolloGraphQl Issue. If so, can ignore: https://github.com/apollographql/apollo-client/issues/6094');
      }
      return undefined;
    }

    function cacheWriteQueryVehicleLocationOnlyObjects({ apolloClient, variables, data, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables, data:(Vehicle | Vehicle_Insert_Input)[], fieldMap?: FieldMap }): void {
      try {   
        const objects = convertToGraph({ input:data, typename:'vehicle', fieldMap });
        return apolloClient.cache.writeQuery<{Vehicle:Vehicle[]}>({ query: QueryVehicleLocationOnlyObjectsDocument, variables, data: { Vehicle:objects } });
      } catch (error) {
        //DEVNOTE: Remove after this apollographql issue has been addressed: https://github.com/apollographql/apollo-client/issues/6094
        console.warn('cacheWriteQueryVehicleLocationOnlyObjects threw error. Could be related to this apolloGraphQl Issue. If so, can ignore: https://github.com/apollographql/apollo-client/issues/6094');
      }
      return undefined;
    }

    function clientWriteQueryVehicleLocationOnlyInsert({ apolloClient, variables, vehicle, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables, vehicle:Vehicle_Insert_Input, fieldMap?: FieldMap }): void {
      const currentObjects = clientReadQueryVehicleLocationOnlyObjects({ apolloClient, variables }) || [];
      const objectsWithInserted = [ ...currentObjects, convertToGraph({ input: vehicle, typename:'vehicle', fieldMap })];
      if(logLevel >= 2) console.log(' --> clientWriteQueryVehicleLocationOnlyInsert - objectsWithInserted:', objectsWithInserted);
      return clientWriteQueryVehicleLocationOnlyObjects({ apolloClient, variables, data: objectsWithInserted });  
    }

    function cacheWriteQueryVehicleLocationOnlyInsert({ apolloClient, variables, vehicle, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables, vehicle:Vehicle_Insert_Input, fieldMap?: FieldMap }): void {
      const currentObjects = clientReadQueryVehicleLocationOnlyObjects({ apolloClient, variables }) || [];
      const objectsWithInserted = [ ...currentObjects, convertToGraph({ input: vehicle, typename:'vehicle', fieldMap })];
      if(logLevel >= 2) console.log(' --> cacheWriteQueryVehicleLocationOnlyInsert - objectsWithInserted:', objectsWithInserted);
      return cacheWriteQueryVehicleLocationOnlyObjects({ apolloClient, variables, data: objectsWithInserted });
    }

    function clientWriteQueryVehicleLocationOnlyRemove({ apolloClient, variables, vehicleId }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables, vehicleId: string }): void {
      const currentObjects = clientReadQueryVehicleLocationOnlyObjects({ apolloClient, variables }) || [];
      const objectsWithRemoved = currentObjects.filter(objectItem => objectItem.id !== vehicleId) || [];
      if(logLevel >= 2) console.log(' --> clientWriteQueryVehicleLocationOnlyRemove - objectsWithRemoved:', objectsWithRemoved);
      return clientWriteQueryVehicleLocationOnlyObjects({ apolloClient, variables, data: objectsWithRemoved });
    }

    function cacheWriteQueryVehicleLocationOnlyRemove({ apolloClient, variables, vehicleId }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables, vehicleId: string }): void {
      const currentObjects = clientReadQueryVehicleLocationOnlyObjects({ apolloClient, variables }) || [];
      const objectsWithRemoved = currentObjects.filter(objectItem => objectItem.id !== vehicleId) || [];
      if(logLevel >= 2) console.log(' --> cacheWriteQueryVehicleLocationOnlyRemove - objectsWithRemoved:', objectsWithRemoved);
      return cacheWriteQueryVehicleLocationOnlyObjects({ apolloClient, variables, data: objectsWithRemoved });
    };
    

      // Query Fetch Helper
      //
      export type QueryVehicleLocationOnlyByIdApolloQueryResult = ApolloQueryResult<QueryVehicleLocationOnlyByIdQuery>;
      export type QueryVehicleLocationOnlyByIdApolloQueryHelperResultEx = QueryVehicleLocationOnlyByIdApolloQueryResult & VehicleLocationOnlyByIdHelperResultEx;

      async function queryVehicleLocationOnlyById({ apolloClient, vehicleId, options }: { apolloClient: ApolloClient<object>, vehicleId: string, options?: Omit<QueryOptions<QueryVehicleLocationOnlyByIdQueryVariables>, 'query' | 'variables'> }): Promise<QueryVehicleLocationOnlyByIdApolloQueryHelperResultEx> {
        const query: QueryVehicleLocationOnlyByIdApolloQueryResult = await apolloClient.query<QueryVehicleLocationOnlyByIdQuery>({ query: QueryVehicleLocationOnlyByIdDocument, variables: { vehicleId }, ...options });
        
        return { ...query, vehicleLocationOnly: query?.data?.vehicle_by_pk }
      }

      // Query Watch ById Helper
      //
      export type WatchQueryVehicleLocationOnlyByIdApolloObservableQuery = ObservableQuery<QueryVehicleLocationOnlyByIdQuery>;
      async function watchQueryVehicleLocationOnlyById({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryVehicleLocationOnlyByIdQueryVariables>, 'query'> }) : Promise<WatchQueryVehicleLocationOnlyByIdApolloObservableQuery> {
        return apolloClient.watchQuery<QueryVehicleLocationOnlyByIdQuery>({ query: QueryVehicleLocationOnlyByIdDocument, ...options });
      }
    

      // Query Fetch Objects Helper
      //
      export type QueryVehicleLocationOnlyObjectsObjectsApolloQueryResult = ApolloQueryResult<QueryVehicleLocationOnlyObjectsQuery>;
      export type QueryVehicleLocationOnlyObjectsObjectsApolloQueryResultEx = QueryVehicleLocationOnlyObjectsObjectsApolloQueryResult & VehicleLocationOnlyObjectsHelperResultEx;

      async function queryVehicleLocationOnlyObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryVehicleLocationOnlyObjectsQueryVariables>, 'query'> }): Promise<QueryVehicleLocationOnlyObjectsObjectsApolloQueryResultEx> {
        const query: QueryVehicleLocationOnlyObjectsObjectsApolloQueryResult = await apolloClient.query<QueryVehicleLocationOnlyObjectsQuery>({ query: QueryVehicleLocationOnlyObjectsDocument, ...options });
        
        return { ...query, objects: query?.data?.vehicle || [] }
      }

      // Query Watch Objects Helper
      //
      export type WatchQueryVehicleLocationOnlyObjectsApolloObservableQuery = ObservableQuery<QueryVehicleLocationOnlyObjectsQuery>;
      async function watchQueryVehicleLocationOnlyObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryVehicleLocationOnlyObjectsQueryVariables>, 'query'> }) : Promise<WatchQueryVehicleLocationOnlyObjectsApolloObservableQuery> {
        return apolloClient.watchQuery<QueryVehicleLocationOnlyObjectsQuery>({ query: QueryVehicleLocationOnlyObjectsDocument, ...options });
      }
    

    // Subscription Fetch ById Helper
    //
    export type SubscribeToVehicleLocationOnlyByIdSubscriptionFetchResult = FetchResult<SubscribeToVehicleLocationOnlyByIdSubscription, Record<string, any>, Record<string, any>>;
    export type SubscribeToVehicleLocationOnlyByIdSubscriptionFetchResultEx = FetchResult<SubscribeToVehicleLocationOnlyByIdSubscription, Record<string, any>, Record<string, any>> & VehicleLocationOnlyByIdHelperResultEx;
    
    async function subscribeToVehicleLocationOnlyById({ apolloClient, vehicleId, options }: { apolloClient: ApolloClient<object>, vehicleId:string, options?: Omit<SubscriptionOptions<SubscribeToVehicleLocationOnlyByIdSubscriptionVariables>, 'query' | 'variables'> }): Promise<Observable<SubscribeToVehicleLocationOnlyByIdSubscriptionFetchResultEx>> {
      const subscription:Observable<SubscribeToVehicleLocationOnlyByIdSubscriptionFetchResult> = apolloClient.subscribe<SubscribeToVehicleLocationOnlyByIdSubscription>({ query: SubscribeToVehicleLocationOnlyByIdDocument, variables: { vehicleId }, ...options });
      
      return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, vehicleLocationOnly:value?.data?.vehicle_by_pk || [] }  as SubscribeToVehicleLocationOnlyByIdSubscriptionFetchResultEx }) ;
    }
    

      // Subscription Fetch Objects Helper
      //
      export type SubscribeToVehicleLocationOnlyObjectsSubscriptionFetchResult = FetchResult<SubscribeToVehicleLocationOnlyObjectsSubscription, Record<string, any>, Record<string, any>>;
      export type SubscribeToVehicleLocationOnlyObjectsSubscriptionFetchResultEx = FetchResult<SubscribeToVehicleLocationOnlyObjectsSubscription, Record<string, any>, Record<string, any>> & VehicleLocationOnlyObjectsHelperResultEx;

      async function subscribeToVehicleLocationOnlyObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options?: Omit<SubscriptionOptions<SubscribeToVehicleLocationOnlyObjectsSubscriptionVariables>, 'query'> }): Promise<Observable<SubscribeToVehicleLocationOnlyObjectsSubscriptionFetchResultEx>> {
        const subscription:Observable<SubscribeToVehicleLocationOnlyObjectsSubscriptionFetchResult> = apolloClient.subscribe<SubscribeToVehicleLocationOnlyObjectsSubscription>({ query: SubscribeToVehicleLocationOnlyObjectsDocument, ...options });
        
        return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, objects: value?.data?.vehicle || [] }  as SubscribeToVehicleLocationOnlyObjectsSubscriptionFetchResultEx }) ;
      }
    

    // Insert Helper
    //
    type InsertVehicleLocationOnlyFetchResult = FetchResult<InsertVehicleLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleLocationOnlyFetchHelperResultEx = InsertVehicleLocationOnlyFetchResult & VehicleLocationOnlyByIdHelperResultEx;

    async function insertVehicleLocationOnly({ apolloClient, vehicle, autoOptimisticResponse, fieldMap, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, autoOptimisticResponse?:boolean, fieldMap?: FieldMap, options?: Omit<MutationOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleLocationOnlyFetchHelperResultEx> {
      const objectForInsert = stripInsertInputClientFields({ input: vehicle });
      const mutationOptions:MutationOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables> = { mutation: InsertVehicleLocationOnlyDocument, variables: { objects: [objectForInsert] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!objectForInsert.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleLocationOnlyMutation>({ operationType: 'insert', entityName:'vehicle', objects:[objectForInsert as Vehicle_Insert_Input & ObjectWithId], fieldMap }); 
        if(logLevel >= 2) console.log(' --> insertVehicleLocationOnly - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation:InsertVehicleLocationOnlyFetchResult = await apolloClient.mutate<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleLocationOnly: mutation?.data?.insert_vehicle?.returning && mutation.data.insert_vehicle.returning[0] };
    }

    async function insertVehicleLocationOnlyWithOnConflict({ apolloClient, vehicle, onConflict, autoOptimisticResponse, fieldMap, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, onConflict: Vehicle_On_Conflict, autoOptimisticResponse?:boolean, fieldMap?: FieldMap, options?: Omit<MutationOptions<InsertVehicleLocationOnlyWithOnConflictMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleLocationOnlyFetchHelperResultEx> {
      const objectForInsert = stripInsertInputClientFields({ input: vehicle });
      const mutationOptions:MutationOptions<InsertVehicleLocationOnlyWithOnConflictMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables> = { mutation: InsertVehicleLocationOnlyWithOnConflictDocument, variables: { objects: [objectForInsert], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!objectForInsert.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleLocationOnlyWithOnConflictMutation>({ operationType: 'insert', entityName:'vehicle', objects:[objectForInsert as Vehicle_Insert_Input & ObjectWithId], fieldMap }); 
        if(logLevel >= 2) console.log(' --> insertVehicleLocationOnlyWithOnConflict - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation:InsertVehicleLocationOnlyFetchResult = await apolloClient.mutate<InsertVehicleLocationOnlyWithOnConflictMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleLocationOnly: mutation?.data?.insert_vehicle?.returning && mutation.data.insert_vehicle.returning[0] };
    }



  

    // Insert Objects Helper
    //
    type InsertVehicleLocationOnlyObjectsFetchResult = FetchResult<InsertVehicleLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleLocationOnlyObjectsHelperResultEx = InsertVehicleLocationOnlyObjectsFetchResult & VehicleLocationOnlyObjectsHelperResultEx;

    async function insertVehicleLocationOnlyObjects({ apolloClient, objects, autoOptimisticResponse, fieldMap, options } :{ apolloClient: ApolloClient<object>, objects: Vehicle_Insert_Input[], autoOptimisticResponse?:boolean, fieldMap?: FieldMap, options?: Omit<MutationOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleLocationOnlyObjectsHelperResultEx> {
      const objectsForInsert = objects.map(objectItem => stripInsertInputClientFields({ input: objectItem }));
      const mutationOptions:MutationOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables> = { mutation: InsertVehicleLocationOnlyDocument, variables: { objects: objectsForInsert }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(objectsForInsert.find(objectItem => !objectItem.id)) throw new Error(`if autoOptimisticResponse = true, ids must be set in objects`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleLocationOnlyMutation>({ operationType: 'insert', entityName:'vehicle', objects:objectsForInsert as (Vehicle_Insert_Input & ObjectWithId)[], fieldMap }); 
        if(logLevel >= 2) console.log(' --> insertVehicleLocationOnly - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation: InsertVehicleLocationOnlyObjectsFetchResult = await apolloClient.mutate<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>(mutationOptions);
        
      return { ...mutation, objects: mutation?.data?.insert_vehicle?.returning || [] };
    }
  

    // Update Helper
    //
    type UpdateVehicleLocationOnlyByIdQueryResult = FetchResult<UpdateVehicleLocationOnlyByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleLocationOnlyByIdHelperResultEx = UpdateVehicleLocationOnlyByIdQueryResult & VehicleLocationOnlyByIdHelperResultEx;

    async function updateVehicleLocationOnlyById({ apolloClient, vehicleId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, vehicleId: string, set: Vehicle_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables>, 'mutation'> }): Promise<UpdateVehicleLocationOnlyByIdHelperResultEx> {
      const mutationOptions:MutationOptions<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables> = { mutation: UpdateVehicleLocationOnlyByIdDocument, variables: { id:vehicleId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateVehicleLocationOnlyByIdMutation>({ operationType: 'update', entityName:'vehicle', objects:[{ id:vehicleId, ...set }] }); 
        if(logLevel >= 2) console.log(' --> updateVehicleLocationOnlyById - optimisticResponse:', mutationOptions.optimisticResponse);
      }

      const mutation:UpdateVehicleLocationOnlyByIdQueryResult = await apolloClient.mutate<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleLocationOnly: mutation?.data?.update_vehicle?.returning && mutation.data.update_vehicle.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateVehicleLocationOnlyObjectsFetchResult = FetchResult<UpdateVehicleLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleLocationOnlyObjectsHelperResultEx = UpdateVehicleLocationOnlyObjectsFetchResult & VehicleLocationOnlyObjectsHelperResultEx;

    async function updateVehicleLocationOnlyObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateVehicleLocationOnlyMutation, UpdateVehicleLocationOnlyMutationVariables>, 'mutation'> }): Promise<UpdateVehicleLocationOnlyObjectsHelperResultEx> {  
      const mutation:UpdateVehicleLocationOnlyObjectsFetchResult = await apolloClient.mutate<UpdateVehicleLocationOnlyMutation, UpdateVehicleLocationOnlyMutationVariables>({ mutation: UpdateVehicleLocationOnlyDocument, ...options } );
        
      return { ...mutation, objects:mutation?.data?.update_vehicle?.returning || [] };
    }
  

    // VehicleLocationOnly Fragment Helper Object
    //------------------------------------------------

    export const VehicleLocationOnlyFragmentGQLHelper = {
      cacheGetDataId: cacheGetDataIdForVehicleLocationOnly,
      clientReadFragmentById: clientReadFragmentVehicleLocationOnlyById,
      clientWriteFragmentById: clientWriteFragmentVehicleLocationOnlyById,
      cacheWriteFragmentById: cacheWriteFragmentVehicleLocationOnlyById,
      clientReadQueryById: clientReadQueryVehicleLocationOnlyById,
      clientWriteQueryById: clientWriteQueryVehicleLocationOnlyById,
      cacheWriteQueryById: cacheWriteQueryVehicleLocationOnlyById,
      clientReadQueryObjects: clientReadQueryVehicleLocationOnlyObjects,
      clientWriteQueryObjects: clientWriteQueryVehicleLocationOnlyObjects,
      cacheWriteQueryObjects: cacheWriteQueryVehicleLocationOnlyObjects,
      clientWriteQueryInsert: clientWriteQueryVehicleLocationOnlyInsert,
      cacheWriteQueryInsert: cacheWriteQueryVehicleLocationOnlyInsert,
      clientWriteQueryRemove: clientWriteQueryVehicleLocationOnlyRemove,
      cacheWriteQueryRemove: cacheWriteQueryVehicleLocationOnlyRemove,
      queryById: queryVehicleLocationOnlyById,
      queryObjects: queryVehicleLocationOnlyObjects,
      watchQueryById: watchQueryVehicleLocationOnlyById,
      watchQueryObjects: watchQueryVehicleLocationOnlyObjects,
      subscribeToById: subscribeToVehicleLocationOnlyById,
      subscribeToObjects: subscribeToVehicleLocationOnlyObjects,
      insert: insertVehicleLocationOnly,
      insertWithOnConflict: insertVehicleLocationOnlyWithOnConflict,
      insertObjects: insertVehicleLocationOnlyObjects,
      updateById: updateVehicleLocationOnlyById,
      updateObjects: updateVehicleLocationOnlyObjects
    }
  

    // COMBINED HELPER OBJECT
    //------------------------------------------------
    export const GQLHelpers = {
      Fragments: {
        Vehicle: VehicleFragmentGQLHelper,
        VehicleLocationOnly: VehicleLocationOnlyFragmentGQLHelper
      },
      Models: {
        Vehicle: VehicleModelGQLHelper
      }
    }
  