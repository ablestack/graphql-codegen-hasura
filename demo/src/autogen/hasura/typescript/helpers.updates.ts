import { ApolloClient, FetchResult, MutationOptions } from '@apollo/client'
import { observationModelFieldsFragment } from './src/autogen';
import { UpdateobservationModelByIdMutation } from './src/autogen';
import { UpdateobservationModelByIdMutationVariables } from './src/autogen';
import { UpdateobservationModelByIdDocument } from './src/autogen';
import { pModelFieldsFragment } from './src/autogen';
import { UpdatepModelByIdMutation } from './src/autogen';
import { UpdatepModelByIdMutationVariables } from './src/autogen';
import { UpdatepModelByIdDocument } from './src/autogen';
import { patientModelFieldsFragment } from './src/autogen';
import { UpdatepatientModelByIdMutation } from './src/autogen';
import { UpdatepatientModelByIdMutationVariables } from './src/autogen';
import { UpdatepatientModelByIdDocument } from './src/autogen';
import { usersModelFieldsFragment } from './src/autogen';
import { UpdateusersModelByIdMutation } from './src/autogen';
import { UpdateusersModelByIdMutationVariables } from './src/autogen';
import { UpdateusersModelByIdDocument } from './src/autogen';
import { vehicleModelFieldsFragment } from './src/autogen';
import { UpdatevehicleModelByIdMutation } from './src/autogen';
import { UpdatevehicleModelByIdMutationVariables } from './src/autogen';
import { UpdatevehicleModelByIdDocument } from './src/autogen';
import { vehicle_locationModelFieldsFragment } from './src/autogen';
import { Updatevehicle_locationModelByIdMutation } from './src/autogen';
import { Updatevehicle_locationModelByIdMutationVariables } from './src/autogen';
import { Updatevehicle_locationModelByIdDocument } from './src/autogen';

    export async function updateobservationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateobservationModelByIdMutation, UpdateobservationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateobservationModelByIdMutation>; returning: (observationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateobservationModelByIdMutation, UpdateobservationModelByIdMutationVariables>({ mutation: UpdateobservationModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_observation && result.data.update_observation!.returning;
    
      return { result, returning };
    }
  

    export async function updatepModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatepModelByIdMutation, UpdatepModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatepModelByIdMutation>; returning: (pModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatepModelByIdMutation, UpdatepModelByIdMutationVariables>({ mutation: UpdatepModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_p && result.data.update_p!.returning;
    
      return { result, returning };
    }
  

    export async function updatepatientModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatepatientModelByIdMutation, UpdatepatientModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatepatientModelByIdMutation>; returning: (patientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatepatientModelByIdMutation, UpdatepatientModelByIdMutationVariables>({ mutation: UpdatepatientModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_patient && result.data.update_patient!.returning;
    
      return { result, returning };
    }
  

    export async function updateusersModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateusersModelByIdMutation, UpdateusersModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateusersModelByIdMutation>; returning: (usersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateusersModelByIdMutation, UpdateusersModelByIdMutationVariables>({ mutation: UpdateusersModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_users && result.data.update_users!.returning;
    
      return { result, returning };
    }
  

    export async function updatevehicleModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatevehicleModelByIdMutation, UpdatevehicleModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatevehicleModelByIdMutation>; returning: (vehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatevehicleModelByIdMutation, UpdatevehicleModelByIdMutationVariables>({ mutation: UpdatevehicleModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle && result.data.update_vehicle!.returning;
    
      return { result, returning };
    }
  

    export async function updatevehicle_locationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Updatevehicle_locationModelByIdMutation, Updatevehicle_locationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Updatevehicle_locationModelByIdMutation>; returning: (vehicle_locationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Updatevehicle_locationModelByIdMutation, Updatevehicle_locationModelByIdMutationVariables>({ mutation: Updatevehicle_locationModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle_location && result.data.update_vehicle_location!.returning;
    
      return { result, returning };
    }
  