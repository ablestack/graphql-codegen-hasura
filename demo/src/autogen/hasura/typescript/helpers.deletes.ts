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

    export async function removeobservationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveobservationModelByIdMutation, RemoveobservationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveobservationModelByIdMutation>; returning: (observationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveobservationModelByIdMutation, RemoveobservationModelByIdMutationVariables>({ mutation: RemoveobservationModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.remove_observation && result.data.remove_observation!.returning;
    
      return { result, returning };
    }
  

    export async function removepModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemovepModelByIdMutation, RemovepModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovepModelByIdMutation>; returning: (pModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovepModelByIdMutation, RemovepModelByIdMutationVariables>({ mutation: RemovepModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.remove_p && result.data.remove_p!.returning;
    
      return { result, returning };
    }
  

    export async function removepatientModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemovepatientModelByIdMutation, RemovepatientModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovepatientModelByIdMutation>; returning: (patientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovepatientModelByIdMutation, RemovepatientModelByIdMutationVariables>({ mutation: RemovepatientModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.remove_patient && result.data.remove_patient!.returning;
    
      return { result, returning };
    }
  

    export async function removeusersModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveusersModelByIdMutation, RemoveusersModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveusersModelByIdMutation>; returning: (usersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveusersModelByIdMutation, RemoveusersModelByIdMutationVariables>({ mutation: RemoveusersModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.remove_users && result.data.remove_users!.returning;
    
      return { result, returning };
    }
  

    export async function removevehicleModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemovevehicleModelByIdMutation, RemovevehicleModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovevehicleModelByIdMutation>; returning: (vehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovevehicleModelByIdMutation, RemovevehicleModelByIdMutationVariables>({ mutation: RemovevehicleModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.remove_vehicle && result.data.remove_vehicle!.returning;
    
      return { result, returning };
    }
  

    export async function removevehicle_locationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Removevehicle_locationModelByIdMutation, Removevehicle_locationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Removevehicle_locationModelByIdMutation>; returning: (vehicle_locationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Removevehicle_locationModelByIdMutation, Removevehicle_locationModelByIdMutationVariables>({ mutation: Removevehicle_locationModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.remove_vehicle_location && result.data.remove_vehicle_location!.returning;
    
      return { result, returning };
    }
  