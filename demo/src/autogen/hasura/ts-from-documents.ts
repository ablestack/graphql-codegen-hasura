import { ApolloClient } from '@apollo/client'
import { FetchResult } from '@apollo/client'
import { QueryOptions, MutationOptions } from '@apollo/client'
import { VehicleGraphFieldsFragment } from '../';
import { FetchVehicleGraphFieldsByIdQuery } from '../';
import { FetchVehicleGraphFieldsByIdDocument } from '../';
import { FetchVehicleGraphFieldsQuery } from '../';
import { FetchVehicleGraphFieldsDocument } from '../';
import { FetchVehicleGraphFieldsQueryVariables } from '../';
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
  
      export async function fetchVehicleGraphFieldsById(
        apolloClient: ApolloClient<object>, 
        vehicleId: string
        ): Promise<VehicleGraphFieldsFragment | null | undefined> {
        const vehicleResult = await apolloClient.query<FetchVehicleGraphFieldsByIdQuery>({ query: FetchVehicleGraphFieldsByIdDocument, variables: { id:vehicleId } });
        return vehicleResult.data.vehicle_by_pk;
      }
    

      export async function fetchVehicleGraphFields(
        apolloClient: ApolloClient<object>,
        vehicleId: string,
        queryOptions: Omit<QueryOptions<FetchVehicleGraphFieldsQueryVariables>, 'query'>,
      ): Promise<VehicleGraphFieldsFragment[] | null | undefined> {
        const vehicleResult = await apolloClient.query<FetchVehicleGraphFieldsQuery>({ query: FetchVehicleGraphFieldsDocument, ...queryOptions });
        return vehicleResult.data.vehicle;
      }
    

    // Insert Helper
    //

    export async function insertVehicleGraphFields(
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      mutationOptions: Omit<MutationOptions<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertVehicleGraphFieldsMutation>; returning: (VehicleGraphFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>({ mutation: InsertVehicleGraphFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle && result.data.insert_vehicle!.returning;
    
      return { result, returning };
    }
  

    // Update Helper
    //

    export async function updateVehicleGraphFieldsById(
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      set: Vehicle_Set_Input,
      mutationOptions: Omit<MutationOptions<UpdateVehicleGraphFieldsByIdMutation, UpdateVehicleGraphFieldsByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateVehicleGraphFieldsByIdMutation>; returning: (VehicleGraphFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicleGraphFieldsByIdMutation, UpdateVehicleGraphFieldsByIdMutationVariables>({ mutation: UpdateVehicleGraphFieldsByIdDocument, variables: { id:vehicleId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle && result.data.update_vehicle!.returning;
    
      return { result, returning };
    }
  

    export async function updateVehicleGraphFields(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateVehicleGraphFieldsMutation, UpdateVehicleGraphFieldsMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateVehicleGraphFieldsMutation>; returning: (VehicleGraphFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicleGraphFieldsMutation, UpdateVehicleGraphFieldsMutationVariables>({ mutation: UpdateVehicleGraphFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle && result.data.update_vehicle!.returning;
    
      return { result, returning };
    }
  

    // Delete Helper
    //

    export async function removeVehicleModelById(
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      mutationOptions: Omit<MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveVehicleModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>({ mutation: RemoveVehicleModelByIdDocument, variables: { id:vehicleId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle && result.data.delete_vehicle!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removeVehicleModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveVehicleModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>({ mutation: RemoveVehicleModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle && result.data.delete_vehicle!.affected_rows;
    
      return { result, returning };
    }
  