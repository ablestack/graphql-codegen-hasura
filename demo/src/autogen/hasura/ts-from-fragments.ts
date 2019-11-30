import { ApolloClient } from '@apollo/client'
import { FetchResult } from '@apollo/client'
import { QueryOptions, MutationOptions } from '@apollo/client'
import { VehicleGraphFieldsFragment } from '../';
import { InsertVehicleModelMutation } from '../';
import { InsertVehicleModelMutationVariables } from '../';
import { InsertVehicleModelDocument } from '../';
import { FetchVehicleModelByIdQuery } from '../';
import { FetchVehicleModelByIdDocument } from '../';
import { FetchVehicleModelQuery } from '../';
import { FetchVehicleModelDocument } from '../';
import { FetchVehicleModelQueryVariables } from '../';
import { Vehicle_Set_Input } from '../';
import { UpdateVehicleModelByIdMutation } from '../';
import { UpdateVehicleModelByIdMutationVariables } from '../';
import { UpdateVehicleModelByIdDocument } from '../';
import { UpdateVehicleModelMutation } from '../';
import { UpdateVehicleModelMutationVariables } from '../';
import { UpdateVehicleModelDocument } from '../';
import { RemoveVehicleModelMutation } from '../';
import { RemoveVehicleModelMutationVariables } from '../';
import { RemoveVehicleModelDocument } from '../';
import { RemoveVehicleModelByIdMutation } from '../';
import { RemoveVehicleModelByIdMutationVariables } from '../';
import { RemoveVehicleModelByIdDocument } from '../';

    // vehicle Helpers
    //------------------------------------------------
  

    // Insert Helper
    //

    export async function insertVehicleModel(
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      mutationOptions: Omit<MutationOptions<InsertVehicleModelMutation, InsertVehicleModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertVehicleModelMutation>; returning: (VehicleGraphFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertVehicleModelMutation, InsertVehicleModelMutationVariables>({ mutation: InsertVehicleModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle && result.data.insert_vehicle!.returning;
    
      return { result, returning };
    }
  

      // Fetch Helper
      //
  
      export async function fetchVehicleModelById(
        apolloClient: ApolloClient<object>, 
        vehicleId: string
        ): Promise<VehicleGraphFieldsFragment | null | undefined> {
        const vehicleResult = await apolloClient.query<FetchVehicleModelByIdQuery>({ query: FetchVehicleModelByIdDocument, variables: { id:vehicleId } });
        return vehicleResult.data.vehicle_by_pk;
      }
    

      export async function fetchVehicleModel(
        apolloClient: ApolloClient<object>,
        vehicleId: string,
        queryOptions: Omit<QueryOptions<FetchVehicleModelQueryVariables>, 'query'>,
      ): Promise<VehicleGraphFieldsFragment[] | null | undefined> {
        const vehicleResult = await apolloClient.query<FetchVehicleModelQuery>({ query: FetchVehicleModelDocument, ...queryOptions });
        return vehicleResult.data.vehicle;
      }
    

    // Update Helper
    //

    export async function updateVehicleModelById(
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      set: Vehicle_Set_Input,
      mutationOptions: Omit<MutationOptions<UpdateVehicleModelByIdMutation, UpdateVehicleModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateVehicleModelByIdMutation>; returning: (VehicleGraphFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicleModelByIdMutation, UpdateVehicleModelByIdMutationVariables>({ mutation: UpdateVehicleModelByIdDocument, variables: { id:vehicleId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle && result.data.update_vehicle!.returning;
    
      return { result, returning };
    }
  

    export async function updateVehicleModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateVehicleModelMutation, UpdateVehicleModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateVehicleModelMutation>; returning: (VehicleGraphFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicleModelMutation, UpdateVehicleModelMutationVariables>({ mutation: UpdateVehicleModelDocument, ...mutationOptions,});
    
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
  