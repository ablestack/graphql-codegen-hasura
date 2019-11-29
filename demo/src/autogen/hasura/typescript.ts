import { ApolloClient } from '@apollo/client'
import { FetchResult } from '@apollo/client'
import { MutationOptions } from '@apollo/client'
import { observationModelFieldsFragment } from './src/autogen';
import { InsertobservationModelMutation } from './src/autogen';
import { InsertobservationModelMutationVariables } from './src/autogen';
import { InsertobservationModelDocument } from './src/autogen';
import { FetchobservationModelQuery } from './src/autogen';
import { FetchobservationModelDocument } from './src/autogen';
import { UpdateobservationModelByIdMutation } from './src/autogen';
import { UpdateobservationModelByIdMutationVariables } from './src/autogen';
import { UpdateobservationModelByIdDocument } from './src/autogen';
import { RemoveobservationModelByIdMutation } from './src/autogen';
import { RemoveobservationModelByIdMutationVariables } from './src/autogen';
import { RemoveobservationModelByIdDocument } from './src/autogen';
import { pModelFieldsFragment } from './src/autogen';
import { InsertpModelMutation } from './src/autogen';
import { InsertpModelMutationVariables } from './src/autogen';
import { InsertpModelDocument } from './src/autogen';
import { FetchpModelQuery } from './src/autogen';
import { FetchpModelDocument } from './src/autogen';
import { UpdatepModelByIdMutation } from './src/autogen';
import { UpdatepModelByIdMutationVariables } from './src/autogen';
import { UpdatepModelByIdDocument } from './src/autogen';
import { RemovepModelByIdMutation } from './src/autogen';
import { RemovepModelByIdMutationVariables } from './src/autogen';
import { RemovepModelByIdDocument } from './src/autogen';
import { patientModelFieldsFragment } from './src/autogen';
import { InsertpatientModelMutation } from './src/autogen';
import { InsertpatientModelMutationVariables } from './src/autogen';
import { InsertpatientModelDocument } from './src/autogen';
import { FetchpatientModelQuery } from './src/autogen';
import { FetchpatientModelDocument } from './src/autogen';
import { UpdatepatientModelByIdMutation } from './src/autogen';
import { UpdatepatientModelByIdMutationVariables } from './src/autogen';
import { UpdatepatientModelByIdDocument } from './src/autogen';
import { RemovepatientModelByIdMutation } from './src/autogen';
import { RemovepatientModelByIdMutationVariables } from './src/autogen';
import { RemovepatientModelByIdDocument } from './src/autogen';
import { usersModelFieldsFragment } from './src/autogen';
import { InsertusersModelMutation } from './src/autogen';
import { InsertusersModelMutationVariables } from './src/autogen';
import { InsertusersModelDocument } from './src/autogen';
import { FetchusersModelQuery } from './src/autogen';
import { FetchusersModelDocument } from './src/autogen';
import { UpdateusersModelByIdMutation } from './src/autogen';
import { UpdateusersModelByIdMutationVariables } from './src/autogen';
import { UpdateusersModelByIdDocument } from './src/autogen';
import { RemoveusersModelByIdMutation } from './src/autogen';
import { RemoveusersModelByIdMutationVariables } from './src/autogen';
import { RemoveusersModelByIdDocument } from './src/autogen';
import { vehicleModelFieldsFragment } from './src/autogen';
import { InsertvehicleModelMutation } from './src/autogen';
import { InsertvehicleModelMutationVariables } from './src/autogen';
import { InsertvehicleModelDocument } from './src/autogen';
import { FetchvehicleModelQuery } from './src/autogen';
import { FetchvehicleModelDocument } from './src/autogen';
import { UpdatevehicleModelByIdMutation } from './src/autogen';
import { UpdatevehicleModelByIdMutationVariables } from './src/autogen';
import { UpdatevehicleModelByIdDocument } from './src/autogen';
import { RemovevehicleModelByIdMutation } from './src/autogen';
import { RemovevehicleModelByIdMutationVariables } from './src/autogen';
import { RemovevehicleModelByIdDocument } from './src/autogen';
import { vehicle_locationModelFieldsFragment } from './src/autogen';
import { Insertvehicle_locationModelMutation } from './src/autogen';
import { Insertvehicle_locationModelMutationVariables } from './src/autogen';
import { Insertvehicle_locationModelDocument } from './src/autogen';
import { Fetchvehicle_locationModelQuery } from './src/autogen';
import { Fetchvehicle_locationModelDocument } from './src/autogen';
import { Updatevehicle_locationModelByIdMutation } from './src/autogen';
import { Updatevehicle_locationModelByIdMutationVariables } from './src/autogen';
import { Updatevehicle_locationModelByIdDocument } from './src/autogen';
import { Removevehicle_locationModelByIdMutation } from './src/autogen';
import { Removevehicle_locationModelByIdMutationVariables } from './src/autogen';
import { Removevehicle_locationModelByIdDocument } from './src/autogen';

    export async function insertobservationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertobservationModelMutation, InsertobservationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertobservationModelMutation>; returning: (observationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertobservationModelMutation, InsertobservationModelMutationVariables>({ mutation: InsertobservationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_observation && result.data.insert_observation!.returning;
    
      return { result, returning };
    }
  

    export async function fetchobservationModel(apolloClient: ApolloClient<object>, observationId: string): Promise<observationModelFieldsFragment | null | undefined> {
      const observationResult = await apolloClient.query<FetchobservationModelQuery>({ query: FetchobservationModelDocument, variables: { observationId } });
      return observationResult.data.observation_by_pk;
    }
  

    export async function updateobservationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateobservationModelByIdMutation, UpdateobservationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateobservationModelByIdMutation>; returning: (observationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateobservationModelByIdMutation, UpdateobservationModelByIdMutationVariables>({ mutation: UpdateobservationModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_observation && result.data.update_observation!.returning;
    
      return { result, returning };
    }
  

    export async function removeobservationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveobservationModelByIdMutation, RemoveobservationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveobservationModelByIdMutation>; returning: (observationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveobservationModelByIdMutation, RemoveobservationModelByIdMutationVariables>({ mutation: RemoveobservationModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.remove_observation && result.data.remove_observation!.returning;
    
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
  

    export async function fetchpModel(apolloClient: ApolloClient<object>, pId: string): Promise<pModelFieldsFragment | null | undefined> {
      const pResult = await apolloClient.query<FetchpModelQuery>({ query: FetchpModelDocument, variables: { pId } });
      return pResult.data.p_by_pk;
    }
  

    export async function updatepModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatepModelByIdMutation, UpdatepModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatepModelByIdMutation>; returning: (pModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatepModelByIdMutation, UpdatepModelByIdMutationVariables>({ mutation: UpdatepModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_p && result.data.update_p!.returning;
    
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
  

    export async function insertpatientModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertpatientModelMutation, InsertpatientModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertpatientModelMutation>; returning: (patientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertpatientModelMutation, InsertpatientModelMutationVariables>({ mutation: InsertpatientModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_patient && result.data.insert_patient!.returning;
    
      return { result, returning };
    }
  

    export async function fetchpatientModel(apolloClient: ApolloClient<object>, patientId: string): Promise<patientModelFieldsFragment | null | undefined> {
      const patientResult = await apolloClient.query<FetchpatientModelQuery>({ query: FetchpatientModelDocument, variables: { patientId } });
      return patientResult.data.patient_by_pk;
    }
  

    export async function updatepatientModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatepatientModelByIdMutation, UpdatepatientModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatepatientModelByIdMutation>; returning: (patientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatepatientModelByIdMutation, UpdatepatientModelByIdMutationVariables>({ mutation: UpdatepatientModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_patient && result.data.update_patient!.returning;
    
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
  

    export async function insertusersModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertusersModelMutation, InsertusersModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertusersModelMutation>; returning: (usersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertusersModelMutation, InsertusersModelMutationVariables>({ mutation: InsertusersModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_users && result.data.insert_users!.returning;
    
      return { result, returning };
    }
  

    export async function fetchusersModel(apolloClient: ApolloClient<object>, usersId: string): Promise<usersModelFieldsFragment | null | undefined> {
      const usersResult = await apolloClient.query<FetchusersModelQuery>({ query: FetchusersModelDocument, variables: { usersId } });
      return usersResult.data.users_by_pk;
    }
  

    export async function updateusersModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateusersModelByIdMutation, UpdateusersModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateusersModelByIdMutation>; returning: (usersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateusersModelByIdMutation, UpdateusersModelByIdMutationVariables>({ mutation: UpdateusersModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_users && result.data.update_users!.returning;
    
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
  

    export async function insertvehicleModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertvehicleModelMutation, InsertvehicleModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertvehicleModelMutation>; returning: (vehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertvehicleModelMutation, InsertvehicleModelMutationVariables>({ mutation: InsertvehicleModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle && result.data.insert_vehicle!.returning;
    
      return { result, returning };
    }
  

    export async function fetchvehicleModel(apolloClient: ApolloClient<object>, vehicleId: string): Promise<vehicleModelFieldsFragment | null | undefined> {
      const vehicleResult = await apolloClient.query<FetchvehicleModelQuery>({ query: FetchvehicleModelDocument, variables: { vehicleId } });
      return vehicleResult.data.vehicle_by_pk;
    }
  

    export async function updatevehicleModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatevehicleModelByIdMutation, UpdatevehicleModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatevehicleModelByIdMutation>; returning: (vehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatevehicleModelByIdMutation, UpdatevehicleModelByIdMutationVariables>({ mutation: UpdatevehicleModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle && result.data.update_vehicle!.returning;
    
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
  

    export async function insertvehicle_locationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Insertvehicle_locationModelMutation, Insertvehicle_locationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Insertvehicle_locationModelMutation>; returning: (vehicle_locationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Insertvehicle_locationModelMutation, Insertvehicle_locationModelMutationVariables>({ mutation: Insertvehicle_locationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle_location && result.data.insert_vehicle_location!.returning;
    
      return { result, returning };
    }
  

    export async function fetchvehicle_locationModel(apolloClient: ApolloClient<object>, vehicle_locationId: string): Promise<vehicle_locationModelFieldsFragment | null | undefined> {
      const vehicle_locationResult = await apolloClient.query<Fetchvehicle_locationModelQuery>({ query: Fetchvehicle_locationModelDocument, variables: { vehicle_locationId } });
      return vehicle_locationResult.data.vehicle_location_by_pk;
    }
  

    export async function updatevehicle_locationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Updatevehicle_locationModelByIdMutation, Updatevehicle_locationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Updatevehicle_locationModelByIdMutation>; returning: (vehicle_locationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Updatevehicle_locationModelByIdMutation, Updatevehicle_locationModelByIdMutationVariables>({ mutation: Updatevehicle_locationModelByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle_location && result.data.update_vehicle_location!.returning;
    
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
  