import { ApolloClient, FetchResult, MutationOptions } from '@apollo/client'
import { observationModelFieldsFragment } from './src/autogen';
import { InsertobservationModelMutation } from './src/autogen';
import { InsertobservationModelMutationVariables } from './src/autogen';
import { InsertobservationModelDocument } from './src/autogen';
import { pModelFieldsFragment } from './src/autogen';
import { InsertpModelMutation } from './src/autogen';
import { InsertpModelMutationVariables } from './src/autogen';
import { InsertpModelDocument } from './src/autogen';
import { patientModelFieldsFragment } from './src/autogen';
import { InsertpatientModelMutation } from './src/autogen';
import { InsertpatientModelMutationVariables } from './src/autogen';
import { InsertpatientModelDocument } from './src/autogen';
import { usersModelFieldsFragment } from './src/autogen';
import { InsertusersModelMutation } from './src/autogen';
import { InsertusersModelMutationVariables } from './src/autogen';
import { InsertusersModelDocument } from './src/autogen';
import { vehicleModelFieldsFragment } from './src/autogen';
import { InsertvehicleModelMutation } from './src/autogen';
import { InsertvehicleModelMutationVariables } from './src/autogen';
import { InsertvehicleModelDocument } from './src/autogen';
import { vehicle_locationModelFieldsFragment } from './src/autogen';
import { Insertvehicle_locationModelMutation } from './src/autogen';
import { Insertvehicle_locationModelMutationVariables } from './src/autogen';
import { Insertvehicle_locationModelDocument } from './src/autogen';

    export async function insertobservationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertobservationModelMutation, InsertobservationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertobservationModelMutation>; returning: (observationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertobservationModelMutation, InsertobservationModelMutationVariables>({ mutation: InsertobservationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_observation && result.data.insert_observation!.returning;
    
      return { result, returning };
    }
  

    export async function insertpModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertpModelMutation, InsertpModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertpModelMutation>; returning: (pModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertpModelMutation, InsertpModelMutationVariables>({ mutation: InsertpModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_p && result.data.insert_p!.returning;
    
      return { result, returning };
    }
  

    export async function insertpatientModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertpatientModelMutation, InsertpatientModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertpatientModelMutation>; returning: (patientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertpatientModelMutation, InsertpatientModelMutationVariables>({ mutation: InsertpatientModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_patient && result.data.insert_patient!.returning;
    
      return { result, returning };
    }
  

    export async function insertusersModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertusersModelMutation, InsertusersModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertusersModelMutation>; returning: (usersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertusersModelMutation, InsertusersModelMutationVariables>({ mutation: InsertusersModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_users && result.data.insert_users!.returning;
    
      return { result, returning };
    }
  

    export async function insertvehicleModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertvehicleModelMutation, InsertvehicleModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertvehicleModelMutation>; returning: (vehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertvehicleModelMutation, InsertvehicleModelMutationVariables>({ mutation: InsertvehicleModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle && result.data.insert_vehicle!.returning;
    
      return { result, returning };
    }
  

    export async function insertvehicle_locationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Insertvehicle_locationModelMutation, Insertvehicle_locationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Insertvehicle_locationModelMutation>; returning: (vehicle_locationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Insertvehicle_locationModelMutation, Insertvehicle_locationModelMutationVariables>({ mutation: Insertvehicle_locationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle_location && result.data.insert_vehicle_location!.returning;
    
      return { result, returning };
    }
  