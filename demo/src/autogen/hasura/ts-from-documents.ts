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
  
      export async function fetchVehicleGraphFieldsObjectById({
        apolloClient,
        vehicleId,
      }: {
        apolloClient: ApolloClient<object>, 
        vehicleId: string
      }): Promise<VehicleGraphFieldsFragment | null | undefined> {
        const vehicleResult = await apolloClient.query<FetchVehicleGraphFieldsByIdQuery>({ query: FetchVehicleGraphFieldsByIdDocument, variables: { id:vehicleId } });
        return vehicleResult.data.vehicle_by_pk;
      }
    

      export async function fetchVehicleGraphFieldsObjects({
        apolloClient,
        queryOptions,
      }:{
        apolloClient: ApolloClient<object>,
        queryOptions: Omit<QueryOptions<FetchVehicleGraphFieldsQueryVariables>, 'query'>,
      }): Promise<VehicleGraphFieldsFragment[] | null | undefined> {
        const vehicleResult = await apolloClient.query<FetchVehicleGraphFieldsQuery>({ query: FetchVehicleGraphFieldsDocument, ...queryOptions });
        return vehicleResult.data.vehicle;
      }
    

    // Insert Helper
    //

    export async function insertVehicleGraphFieldsObject({
      apolloClient,
      vehicle,
      onConflict,
      mutationOptions,
    } :{
      apolloClient: ApolloClient<object>,
      vehicle: Vehicle_Insert_Input,
      onConflict?: Vehicle_On_Conflict,
      mutationOptions?: Omit<MutationOptions<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>, 'mutation' | 'variables'>,
    }): Promise<{ result: FetchResult<InsertVehicleGraphFieldsMutation>; returning: VehicleGraphFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>({ 
        mutation: InsertVehicleGraphFieldsDocument, 
        variables: { objects: [vehicle], onConflict },
        ...mutationOptions,
      });
    
      const returning = result && result.data && result.data.insert_vehicle && result.data.insert_vehicle!.returning && result.data.insert_vehicle!.returning[0];
    
      return { result, returning };
    }
  

    export async function insertVehicleGraphFieldsObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<InsertVehicleGraphFieldsMutation>; returning: (VehicleGraphFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>({ mutation: InsertVehicleGraphFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle && result.data.insert_vehicle!.returning;
    
      return { result, returning };
    }
  

    // Update Helper
    //

    export async function updateVehicleGraphFieldsObjectById({
      apolloClient,
      vehicleId,
      set,
      mutationOptions,
    }: { 
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      set: Vehicle_Set_Input,
      mutationOptions?: Omit<MutationOptions<UpdateVehicleGraphFieldsByIdMutation, UpdateVehicleGraphFieldsByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdateVehicleGraphFieldsByIdMutation>; returning: VehicleGraphFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicleGraphFieldsByIdMutation, UpdateVehicleGraphFieldsByIdMutationVariables>({ mutation: UpdateVehicleGraphFieldsByIdDocument, variables: { id:vehicleId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle && result.data.update_vehicle!.returning && result.data.update_vehicle!.returning[0];
    
      return { result, returning };
    }
  

    export async function updateVehicleGraphFieldsObjects({
      apolloClient,
      mutationOptions,
    }: {
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateVehicleGraphFieldsMutation, UpdateVehicleGraphFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdateVehicleGraphFieldsMutation>; returning: (VehicleGraphFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicleGraphFieldsMutation, UpdateVehicleGraphFieldsMutationVariables>({ mutation: UpdateVehicleGraphFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle && result.data.update_vehicle!.returning;
    
      return { result, returning };
    }
  

    // Delete Helper
    //

    export async function removeVehicleModelObjectById({
      apolloClient,
      vehicleId,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      mutationOptions: Omit<MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<RemoveVehicleModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>({ mutation: RemoveVehicleModelByIdDocument, variables: { id:vehicleId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle && result.data.delete_vehicle!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removeVehicleModelObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<RemoveVehicleModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>({ mutation: RemoveVehicleModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle && result.data.delete_vehicle!.affected_rows;
    
      return { result, returning };
    }
  