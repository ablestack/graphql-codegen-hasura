import { ApolloClient } from '@apollo/client'
import { FetchResult } from '@apollo/client'
import { QueryOptions, MutationOptions } from '@apollo/client'
import { VehicleGraphFragment } from '../';
import { FetchVehicleGraphByIdQuery } from '../';
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

    // UTILITY METHODS
    //------------------------------------------------
  

    
    // Optimistic response generation utility method
    //
    function generateOptimisticResponseForMutationById<T>(operationType: "update", entityName: string, entityId: any, setObject: object) {
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
  

    // vehicle HELPERS
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchVehicleGraphById({
        apolloClient,
        vehicleId,
        options,
      }: {
        apolloClient: ApolloClient<object>, 
        vehicleId: string,
        options?: Omit<QueryOptions<FetchVehicleGraphQueryVariables>, 'query' | 'variables'>,
      }) {
        const query = await apolloClient.query<FetchVehicleGraphByIdQuery>({ query: FetchVehicleGraphByIdDocument, variables: { vehicleId }, ...options });
        return { ...query, vehicleGraph: query && query.data && query.data.vehicle_by_pk }
      }
    

      export async function fetchVehicleGraphObjects({
        apolloClient,
        options,
      }:{
        apolloClient: ApolloClient<object>,
        options: Omit<QueryOptions<FetchVehicleGraphQueryVariables>, 'query'>,
      }) {
        const query = await apolloClient.query<FetchVehicleGraphQuery>({ query: FetchVehicleGraphDocument, ...options });
        return { ...query, objects: query && query.data && query.data.vehicle }
      }
    

    // Insert Helper
    //

    export async function insertVehicleGraph({ apolloClient, vehicle, onConflict, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, onConflict?: Vehicle_On_Conflict, options?: Omit<MutationOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation' | 'variables'> }) {
      
      const mutation = onConflict
        ? await apolloClient.mutate<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables>({ mutation: InsertVehicleGraphWithOnConflictDocument, variables: { objects: [vehicle], onConflict }, ...options })
        : await apolloClient.mutate<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>({ mutation: InsertVehicleGraphDocument, variables: { objects: [vehicle] }, ...options });
        
      return { ...mutation, vehicleGraph:mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning && mutation.data.insert_vehicle!.returning[0] };
    }
  

    export async function insertVehicleGraphObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation'> }) {
      
      const mutation = await apolloClient.mutate<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>({ mutation: InsertVehicleGraphDocument, ...options });
       
      return { ...mutation, objects: mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning };
    }
  

    // Update Helper
    //

    export async function updateVehicleGraphById({ apolloClient, vehicleId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, vehicleId: string, set: Vehicle_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, 'mutation'> }) {
      const mutationOptions:MutationOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables> = { mutation: UpdateVehicleGraphByIdDocument, variables: { id:vehicleId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateVehicleGraphByIdMutation>('update', 'vehicle', vehicleId, set); }

      const mutation = await apolloClient.mutate<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleGraph:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning && mutation.data.update_vehicle!.returning[0] };
    }
  

    export async function updateVehicleGraphObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>, 'mutation'> }) {  
      const mutation = await apolloClient.mutate<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>({ mutation: UpdateVehicleGraphDocument, ...options } );
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning };
    }
  

    // Delete Helper
    //

    export async function removeVehicleModelById({ apolloClient, vehicleId, options } :{ apolloClient: ApolloClient<object>, vehicleId: string, options?: Omit<MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation'> }) {
      const mutation = await apolloClient.mutate<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>({ mutation: RemoveVehicleModelByIdDocument, variables: { id:vehicleId, }, ...options } );
    
      return { ...mutation, affected_rows:mutation && mutation.data && mutation.data.delete_vehicle && mutation.data.delete_vehicle!.affected_rows };
    }
  

    export async function removeVehicleModelObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'> }) {  
      const mutation = await apolloClient.mutate<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>({ mutation: RemoveVehicleModelDocument, ...options } );
        
      return { ...mutation, affected_rows:mutation && mutation.data && mutation.data.delete_vehicle && mutation.data.delete_vehicle!.affected_rows };
    }
  

      // Fetch Helper
      //
  
      export async function fetchVehicleGraphLocationOnlyById({
        apolloClient,
        vehicleId,
        options,
      }: {
        apolloClient: ApolloClient<object>, 
        vehicleId: string,
        options?: Omit<QueryOptions<FetchVehicleGraphLocationOnlyQueryVariables>, 'query' | 'variables'>,
      }) {
        const query = await apolloClient.query<FetchVehicleGraphLocationOnlyByIdQuery>({ query: FetchVehicleGraphLocationOnlyByIdDocument, variables: { vehicleId }, ...options });
        return { ...query, vehicleGraphLocationOnly: query && query.data && query.data.vehicle_by_pk }
      }
    

      export async function fetchVehicleGraphLocationOnlyObjects({
        apolloClient,
        options,
      }:{
        apolloClient: ApolloClient<object>,
        options: Omit<QueryOptions<FetchVehicleGraphLocationOnlyQueryVariables>, 'query'>,
      }) {
        const query = await apolloClient.query<FetchVehicleGraphLocationOnlyQuery>({ query: FetchVehicleGraphLocationOnlyDocument, ...options });
        return { ...query, objects: query && query.data && query.data.vehicle }
      }
    

    // Insert Helper
    //

    export async function insertVehicleGraphLocationOnly({ apolloClient, vehicle, onConflict, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, onConflict?: Vehicle_On_Conflict, options?: Omit<MutationOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation' | 'variables'> }) {
      
      const mutation = onConflict
        ? await apolloClient.mutate<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables>({ mutation: InsertVehicleGraphLocationOnlyWithOnConflictDocument, variables: { objects: [vehicle], onConflict }, ...options })
        : await apolloClient.mutate<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>({ mutation: InsertVehicleGraphLocationOnlyDocument, variables: { objects: [vehicle] }, ...options });
        
      return { ...mutation, vehicleGraphLocationOnly:mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning && mutation.data.insert_vehicle!.returning[0] };
    }
  

    export async function insertVehicleGraphLocationOnlyObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation'> }) {
      
      const mutation = await apolloClient.mutate<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>({ mutation: InsertVehicleGraphLocationOnlyDocument, ...options });
       
      return { ...mutation, objects: mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning };
    }
  

    // Update Helper
    //

    export async function updateVehicleGraphLocationOnlyById({ apolloClient, vehicleId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, vehicleId: string, set: Vehicle_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, 'mutation'> }) {
      const mutationOptions:MutationOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables> = { mutation: UpdateVehicleGraphLocationOnlyByIdDocument, variables: { id:vehicleId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateVehicleGraphLocationOnlyByIdMutation>('update', 'vehicle', vehicleId, set); }

      const mutation = await apolloClient.mutate<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleGraphLocationOnly:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning && mutation.data.update_vehicle!.returning[0] };
    }
  

    export async function updateVehicleGraphLocationOnlyObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>, 'mutation'> }) {  
      const mutation = await apolloClient.mutate<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>({ mutation: UpdateVehicleGraphLocationOnlyDocument, ...options } );
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning };
    }
  

    // dogs HELPERS
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchDogModelById({
        apolloClient,
        dogsId,
        options,
      }: {
        apolloClient: ApolloClient<object>, 
        dogsId: string,
        options?: Omit<QueryOptions<FetchDogModelQueryVariables>, 'query' | 'variables'>,
      }) {
        const query = await apolloClient.query<FetchDogModelByIdQuery>({ query: FetchDogModelByIdDocument, variables: { dogsId }, ...options });
        return { ...query, dogModel: query && query.data && query.data.dogs_by_pk }
      }
    

      export async function fetchDogModelObjects({
        apolloClient,
        options,
      }:{
        apolloClient: ApolloClient<object>,
        options: Omit<QueryOptions<FetchDogModelQueryVariables>, 'query'>,
      }) {
        const query = await apolloClient.query<FetchDogModelQuery>({ query: FetchDogModelDocument, ...options });
        return { ...query, objects: query && query.data && query.data.dogs }
      }
    

    // Insert Helper
    //

    export async function insertDogModel({ apolloClient, dogs, onConflict, options } :{ apolloClient: ApolloClient<object>, dogs: Dogs_Insert_Input, onConflict?: Dogs_On_Conflict, options?: Omit<MutationOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, 'mutation' | 'variables'> }) {
      
      const mutation = onConflict
        ? await apolloClient.mutate<InsertDogModelMutation, InsertDogModelWithOnConflictMutationVariables>({ mutation: InsertDogModelWithOnConflictDocument, variables: { objects: [dogs], onConflict }, ...options })
        : await apolloClient.mutate<InsertDogModelMutation, InsertDogModelMutationVariables>({ mutation: InsertDogModelDocument, variables: { objects: [dogs] }, ...options });
        
      return { ...mutation, dogModel:mutation && mutation.data && mutation.data.insert_dogs && mutation.data.insert_dogs!.returning && mutation.data.insert_dogs!.returning[0] };
    }
  

    export async function insertDogModelObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, 'mutation'> }) {
      
      const mutation = await apolloClient.mutate<InsertDogModelMutation, InsertDogModelMutationVariables>({ mutation: InsertDogModelDocument, ...options });
       
      return { ...mutation, objects: mutation && mutation.data && mutation.data.insert_dogs && mutation.data.insert_dogs!.returning };
    }
  

    // Update Helper
    //

    export async function updateDogModelById({ apolloClient, dogsId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, dogsId: string, set: Dogs_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>, 'mutation'> }) {
      const mutationOptions:MutationOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables> = { mutation: UpdateDogModelByIdDocument, variables: { id:dogsId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateDogModelByIdMutation>('update', 'dogs', dogsId, set); }

      const mutation = await apolloClient.mutate<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, dogModel:mutation && mutation.data && mutation.data.update_dogs && mutation.data.update_dogs!.returning && mutation.data.update_dogs!.returning[0] };
    }
  

    export async function updateDogModelObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateDogModelMutation, UpdateDogModelMutationVariables>, 'mutation'> }) {  
      const mutation = await apolloClient.mutate<UpdateDogModelMutation, UpdateDogModelMutationVariables>({ mutation: UpdateDogModelDocument, ...options } );
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_dogs && mutation.data.update_dogs!.returning };
    }
  

    // Delete Helper
    //

    export async function removeDogsModelById({ apolloClient, dogsId, options } :{ apolloClient: ApolloClient<object>, dogsId: string, options?: Omit<MutationOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>, 'mutation'> }) {
      const mutation = await apolloClient.mutate<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>({ mutation: RemoveDogsModelByIdDocument, variables: { id:dogsId, }, ...options } );
    
      return { ...mutation, affected_rows:mutation && mutation.data && mutation.data.delete_dogs && mutation.data.delete_dogs!.affected_rows };
    }
  

    export async function removeDogsModelObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>, 'mutation'> }) {  
      const mutation = await apolloClient.mutate<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>({ mutation: RemoveDogsModelDocument, ...options } );
        
      return { ...mutation, affected_rows:mutation && mutation.data && mutation.data.delete_dogs && mutation.data.delete_dogs!.affected_rows };
    }
  