import { ApolloClient, FetchResult, MutationOptions } from '@apollo/client'
import { observationModelFieldsFragment } from './src/autogen';
import { RemoveobservationModelByIdMutation } from './src/autogen';
import { RemoveobservationModelByIdMutationVariables } from './src/autogen';
import { RemoveobservationModelByIdDocument } from './src/autogen';
import { pModelFieldsFragment } from './src/autogen';
import { RemovepModelByIdMutation } from './src/autogen';
import { RemovepModelByIdMutationVariables } from './src/autogen';
import { RemovepModelByIdDocument } from './src/autogen';
import { patientModelFieldsFragment } from './src/autogen';
import { RemovepatientModelByIdMutation } from './src/autogen';
import { RemovepatientModelByIdMutationVariables } from './src/autogen';
import { RemovepatientModelByIdDocument } from './src/autogen';
import { usersModelFieldsFragment } from './src/autogen';
import { RemoveusersModelByIdMutation } from './src/autogen';
import { RemoveusersModelByIdMutationVariables } from './src/autogen';
import { RemoveusersModelByIdDocument } from './src/autogen';
import { vehicleModelFieldsFragment } from './src/autogen';
import { RemovevehicleModelByIdMutation } from './src/autogen';
import { RemovevehicleModelByIdMutationVariables } from './src/autogen';
import { RemovevehicleModelByIdDocument } from './src/autogen';
import { vehicle_locationModelFieldsFragment } from './src/autogen';
import { Removevehicle_locationModelByIdMutation } from './src/autogen';
import { Removevehicle_locationModelByIdMutationVariables } from './src/autogen';
import { Removevehicle_locationModelByIdDocument } from './src/autogen';

    export async function deleteobservationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<DeleteobservationModelByIdMutation, DeleteobservationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<DeleteobservationModelByIdMutation>; returning: (observationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<DeleteobservationModelByIdMutation, DeleteobservationModelByIdMutationVariables>({ mutation: DeleteobservationModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_observation && result.data.delete_observation!.returning;
    
      return { result, returning };
    }
  

    export async function deletepModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<DeletepModelByIdMutation, DeletepModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<DeletepModelByIdMutation>; returning: (pModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<DeletepModelByIdMutation, DeletepModelByIdMutationVariables>({ mutation: DeletepModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_p && result.data.delete_p!.returning;
    
      return { result, returning };
    }
  

    export async function deletepatientModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<DeletepatientModelByIdMutation, DeletepatientModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<DeletepatientModelByIdMutation>; returning: (patientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<DeletepatientModelByIdMutation, DeletepatientModelByIdMutationVariables>({ mutation: DeletepatientModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_patient && result.data.delete_patient!.returning;
    
      return { result, returning };
    }
  

    export async function deleteusersModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<DeleteusersModelByIdMutation, DeleteusersModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<DeleteusersModelByIdMutation>; returning: (usersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<DeleteusersModelByIdMutation, DeleteusersModelByIdMutationVariables>({ mutation: DeleteusersModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_users && result.data.delete_users!.returning;
    
      return { result, returning };
    }
  

    export async function deletevehicleModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<DeletevehicleModelByIdMutation, DeletevehicleModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<DeletevehicleModelByIdMutation>; returning: (vehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<DeletevehicleModelByIdMutation, DeletevehicleModelByIdMutationVariables>({ mutation: DeletevehicleModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle && result.data.delete_vehicle!.returning;
    
      return { result, returning };
    }
  

    export async function deletevehicle_locationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Deletevehicle_locationModelByIdMutation, Deletevehicle_locationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Deletevehicle_locationModelByIdMutation>; returning: (vehicle_locationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Deletevehicle_locationModelByIdMutation, Deletevehicle_locationModelByIdMutationVariables>({ mutation: Deletevehicle_locationModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle_location && result.data.delete_vehicle_location!.returning;
    
      return { result, returning };
    }
  