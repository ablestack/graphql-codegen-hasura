import { ApolloClient } from '@apollo/client'
import { FetchResult } from '@apollo/client'
import { QueryOptions, MutationOptions } from '@apollo/client'
import { VehicleGraphFieldsFragment } from '../';
import { FetchVehicleGraphFieldsByIdQuery } from '../';
import { FetchVehicleGraphFieldsByIdDocument } from '../';
import { FetchVehicleGraphFieldsQuery } from '../';
import { FetchVehicleGraphFieldsDocument } from '../';
import { FetchVehicleGraphFieldsQueryVariables } from '../';
import { Vehicle_Insert_Input } from '../';
import { Vehicle_On_Conflict } from '../';
import { InsertVehicleGraphFieldsMutation } from '../';
import { InsertVehicleGraphFieldsMutationVariables } from '../';
import { InsertVehicleGraphFieldsDocument } from '../';
import { Vehicle_Set_Input } from '../';
import { UpdateVehicleGraphFieldsByIdMutation } from '../';
import { UpdateVehicleGraphFieldsByIdMutationVariables } from '../';
import { UpdateVehicleGraphFieldsByIdDocument } from '../';
import { UpdateVehicleGraphFieldsMutation } from '../';
import { UpdateVehicleGraphFieldsMutationVariables } from '../';
import { UpdateVehicleGraphFieldsDocument } from '../';
import { RemoveVehicleModelMutation } from '../';
import { RemoveVehicleModelMutationVariables } from '../';
import { RemoveVehicleModelDocument } from '../';
import { RemoveVehicleModelByIdMutation } from '../';
import { RemoveVehicleModelByIdMutationVariables } from '../';
import { RemoveVehicleModelByIdDocument } from '../';

    // vehicle Helpers
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchVehicleGraphFieldsById({
        apolloClient,
        vehicleId,
        options,
      }: {
        apolloClient: ApolloClient<object>, 
        vehicleId: string,
        options?: Omit<QueryOptions<FetchVehicleGraphFieldsQueryVariables>, 'query' | 'variables'>,
      }) {
        const query = await apolloClient.query<FetchVehicleGraphFieldsByIdQuery>({ query: FetchVehicleGraphFieldsByIdDocument, variables: { vehicleId }, ...options });
        return { ...query, vehicleGraphFields: query && query.data && query.data.vehicle_by_pk }
      }
    

      export async function fetchVehicleGraphFieldsObjects({
        apolloClient,
        options,
      }:{
        apolloClient: ApolloClient<object>,
        options: Omit<QueryOptions<FetchVehicleGraphFieldsQueryVariables>, 'query'>,
      }) {
        const query = await apolloClient.query<FetchVehicleGraphFieldsQuery>({ query: FetchVehicleGraphFieldsDocument, ...options });
        return { ...query, objects: query && query.data && query.data.vehicle }
      }
    

    // Insert Helper
    //

    export async function insertVehicleGraphFieldsObject({
      apolloClient,
      vehicle,
      onConflict,
      options,
    } :{
      apolloClient: ApolloClient<object>,
      vehicle: Vehicle_Insert_Input,
      onConflict?: Vehicle_On_Conflict,
      options?: Omit<MutationOptions<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>, 'mutation' | 'variables'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>({ 
        mutation: InsertVehicleGraphFieldsDocument, 
        variables: { objects: [vehicle], onConflict },
        ...options,
      });
        
      return { ...mutation, vehicleGraphFields:mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning && mutation.data.insert_vehicle!.returning[0] };
    }
  

    export async function insertVehicleGraphFieldsObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>, 'mutation'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>({ mutation: InsertVehicleGraphFieldsDocument, ...options,});
       
      return { ...mutation, objects: mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning };
    }
  

    // Update Helper
    //

    export async function updateVehicleGraphFieldsById({
      apolloClient,
      vehicleId,
      set,
      options,
    }: { 
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      set: Vehicle_Set_Input,
      options?: Omit<MutationOptions<UpdateVehicleGraphFieldsByIdMutation, UpdateVehicleGraphFieldsByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<UpdateVehicleGraphFieldsByIdMutation, UpdateVehicleGraphFieldsByIdMutationVariables>({ mutation: UpdateVehicleGraphFieldsByIdDocument, variables: { id:vehicleId, set }, ...options,});
        
      return { ...mutation, vehicleGraphFields:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning && mutation.data.update_vehicle!.returning[0] };
    }
  

    export async function updateVehicleGraphFieldsObjects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<UpdateVehicleGraphFieldsMutation, UpdateVehicleGraphFieldsMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<UpdateVehicleGraphFieldsMutation, UpdateVehicleGraphFieldsMutationVariables>({ mutation: UpdateVehicleGraphFieldsDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning };
    }
  

    // Delete Helper
    //

    export async function removeVehicleModelById({
      apolloClient,
      vehicleId,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      options?: Omit<MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>({ mutation: RemoveVehicleModelByIdDocument, variables: { id:vehicleId, }, ...options,});
    
      return { ...mutation, vehicleGraphFields:mutation && mutation.data && mutation.data.delete_vehicle && mutation.data.delete_vehicle!.affected_rows };
    }
  

    export async function removeVehicleModelObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>({ mutation: RemoveVehicleModelDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.delete_vehicle && mutation.data.delete_vehicle!.affected_rows };
    }
  