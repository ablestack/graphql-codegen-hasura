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

    // vehicle Helpers
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

    export async function updateVehicleGraphById({ apolloClient, vehicleId, set, options }: { apolloClient: ApolloClient<object>, vehicleId: string, set: Vehicle_Set_Input, options?: Omit<MutationOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, 'mutation'> }) {
      const mutation = await apolloClient.mutate<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>({ mutation: UpdateVehicleGraphByIdDocument, variables: { id:vehicleId, set }, ...options,});
        
      return { ...mutation, vehicleGraph:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning && mutation.data.update_vehicle!.returning[0] };
    }
  

    export async function updateVehicleGraphObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>, 'mutation'> }) {  
      const mutation = await apolloClient.mutate<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>({ mutation: UpdateVehicleGraphDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning };
    }
  

    // Delete Helper
    //

    export async function removeVehicleModelById({ apolloClient, vehicleId, options } :{ apolloClient: ApolloClient<object>, vehicleId: string, options?: Omit<MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation'> }) {
      const mutation = await apolloClient.mutate<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>({ mutation: RemoveVehicleModelByIdDocument, variables: { id:vehicleId, }, ...options,});
    
      return { ...mutation, affected_rows:mutation && mutation.data && mutation.data.delete_vehicle && mutation.data.delete_vehicle!.affected_rows };
    }
  

    export async function removeVehicleModelObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'> }) {  
      const mutation = await apolloClient.mutate<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>({ mutation: RemoveVehicleModelDocument, ...options,});
        
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

    export async function updateVehicleGraphLocationOnlyById({ apolloClient, vehicleId, set, options }: { apolloClient: ApolloClient<object>, vehicleId: string, set: Vehicle_Set_Input, options?: Omit<MutationOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, 'mutation'> }) {
      const mutation = await apolloClient.mutate<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>({ mutation: UpdateVehicleGraphLocationOnlyByIdDocument, variables: { id:vehicleId, set }, ...options,});
        
      return { ...mutation, vehicleGraphLocationOnly:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning && mutation.data.update_vehicle!.returning[0] };
    }
  

    export async function updateVehicleGraphLocationOnlyObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>, 'mutation'> }) {  
      const mutation = await apolloClient.mutate<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>({ mutation: UpdateVehicleGraphLocationOnlyDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning };
    }
  