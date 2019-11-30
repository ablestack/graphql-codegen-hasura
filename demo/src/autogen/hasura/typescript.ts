import { ApolloClient } from '@apollo/client'
import { FetchResult } from '@apollo/client'
import { QueryOptions, MutationOptions } from '@apollo/client'
import { observationModelFieldsFragment } from '../';
import { InsertobservationModelMutation } from '../';
import { InsertobservationModelMutationVariables } from '../';
import { InsertobservationModelDocument } from '../';
import { FetchobservationModelByIdQuery } from '../';
import { FetchobservationModelByIdDocument } from '../';
import { FetchobservationModelQuery } from '../';
import { FetchobservationModelDocument } from '../';
import { FetchobservationModelQueryVariables } from '../';
import { observation_Set_Input } from '../';
import { UpdateobservationModelByIdMutation } from '../';
import { UpdateobservationModelByIdMutationVariables } from '../';
import { UpdateobservationModelByIdDocument } from '../';
import { UpdateobservationModelMutation } from '../';
import { UpdateobservationModelMutationVariables } from '../';
import { UpdateobservationModelDocument } from '../';
import { RemoveobservationModelMutation } from '../';
import { RemoveobservationModelMutationVariables } from '../';
import { RemoveobservationModelDocument } from '../';
import { RemoveobservationModelByIdMutation } from '../';
import { RemoveobservationModelByIdMutationVariables } from '../';
import { RemoveobservationModelByIdDocument } from '../';
import { pModelFieldsFragment } from '../';
import { InsertpModelMutation } from '../';
import { InsertpModelMutationVariables } from '../';
import { InsertpModelDocument } from '../';
import { FetchpModelByIdQuery } from '../';
import { FetchpModelByIdDocument } from '../';
import { FetchpModelQuery } from '../';
import { FetchpModelDocument } from '../';
import { FetchpModelQueryVariables } from '../';
import { p_Set_Input } from '../';
import { UpdatepModelByIdMutation } from '../';
import { UpdatepModelByIdMutationVariables } from '../';
import { UpdatepModelByIdDocument } from '../';
import { UpdatepModelMutation } from '../';
import { UpdatepModelMutationVariables } from '../';
import { UpdatepModelDocument } from '../';
import { RemovepModelMutation } from '../';
import { RemovepModelMutationVariables } from '../';
import { RemovepModelDocument } from '../';
import { RemovepModelByIdMutation } from '../';
import { RemovepModelByIdMutationVariables } from '../';
import { RemovepModelByIdDocument } from '../';
import { patientModelFieldsFragment } from '../';
import { InsertpatientModelMutation } from '../';
import { InsertpatientModelMutationVariables } from '../';
import { InsertpatientModelDocument } from '../';
import { FetchpatientModelByIdQuery } from '../';
import { FetchpatientModelByIdDocument } from '../';
import { FetchpatientModelQuery } from '../';
import { FetchpatientModelDocument } from '../';
import { FetchpatientModelQueryVariables } from '../';
import { patient_Set_Input } from '../';
import { UpdatepatientModelByIdMutation } from '../';
import { UpdatepatientModelByIdMutationVariables } from '../';
import { UpdatepatientModelByIdDocument } from '../';
import { UpdatepatientModelMutation } from '../';
import { UpdatepatientModelMutationVariables } from '../';
import { UpdatepatientModelDocument } from '../';
import { RemovepatientModelMutation } from '../';
import { RemovepatientModelMutationVariables } from '../';
import { RemovepatientModelDocument } from '../';
import { RemovepatientModelByIdMutation } from '../';
import { RemovepatientModelByIdMutationVariables } from '../';
import { RemovepatientModelByIdDocument } from '../';
import { usersModelFieldsFragment } from '../';
import { InsertusersModelMutation } from '../';
import { InsertusersModelMutationVariables } from '../';
import { InsertusersModelDocument } from '../';
import { FetchusersModelByIdQuery } from '../';
import { FetchusersModelByIdDocument } from '../';
import { FetchusersModelQuery } from '../';
import { FetchusersModelDocument } from '../';
import { FetchusersModelQueryVariables } from '../';
import { users_Set_Input } from '../';
import { UpdateusersModelByIdMutation } from '../';
import { UpdateusersModelByIdMutationVariables } from '../';
import { UpdateusersModelByIdDocument } from '../';
import { UpdateusersModelMutation } from '../';
import { UpdateusersModelMutationVariables } from '../';
import { UpdateusersModelDocument } from '../';
import { RemoveusersModelMutation } from '../';
import { RemoveusersModelMutationVariables } from '../';
import { RemoveusersModelDocument } from '../';
import { RemoveusersModelByIdMutation } from '../';
import { RemoveusersModelByIdMutationVariables } from '../';
import { RemoveusersModelByIdDocument } from '../';
import { vehicleModelFieldsFragment } from '../';
import { InsertvehicleModelMutation } from '../';
import { InsertvehicleModelMutationVariables } from '../';
import { InsertvehicleModelDocument } from '../';
import { FetchvehicleModelByIdQuery } from '../';
import { FetchvehicleModelByIdDocument } from '../';
import { FetchvehicleModelQuery } from '../';
import { FetchvehicleModelDocument } from '../';
import { FetchvehicleModelQueryVariables } from '../';
import { vehicle_Set_Input } from '../';
import { UpdatevehicleModelByIdMutation } from '../';
import { UpdatevehicleModelByIdMutationVariables } from '../';
import { UpdatevehicleModelByIdDocument } from '../';
import { UpdatevehicleModelMutation } from '../';
import { UpdatevehicleModelMutationVariables } from '../';
import { UpdatevehicleModelDocument } from '../';
import { RemovevehicleModelMutation } from '../';
import { RemovevehicleModelMutationVariables } from '../';
import { RemovevehicleModelDocument } from '../';
import { RemovevehicleModelByIdMutation } from '../';
import { RemovevehicleModelByIdMutationVariables } from '../';
import { RemovevehicleModelByIdDocument } from '../';
import { vehicle_locationModelFieldsFragment } from '../';
import { Insertvehicle_locationModelMutation } from '../';
import { Insertvehicle_locationModelMutationVariables } from '../';
import { Insertvehicle_locationModelDocument } from '../';
import { Fetchvehicle_locationModelByIdQuery } from '../';
import { Fetchvehicle_locationModelByIdDocument } from '../';
import { Fetchvehicle_locationModelQuery } from '../';
import { Fetchvehicle_locationModelDocument } from '../';
import { Fetchvehicle_locationModelQueryVariables } from '../';
import { vehicle_location_Set_Input } from '../';
import { Updatevehicle_locationModelByIdMutation } from '../';
import { Updatevehicle_locationModelByIdMutationVariables } from '../';
import { Updatevehicle_locationModelByIdDocument } from '../';
import { Updatevehicle_locationModelMutation } from '../';
import { Updatevehicle_locationModelMutationVariables } from '../';
import { Updatevehicle_locationModelDocument } from '../';
import { Removevehicle_locationModelMutation } from '../';
import { Removevehicle_locationModelMutationVariables } from '../';
import { Removevehicle_locationModelDocument } from '../';
import { Removevehicle_locationModelByIdMutation } from '../';
import { Removevehicle_locationModelByIdMutationVariables } from '../';
import { Removevehicle_locationModelByIdDocument } from '../';

    export async function insertobservationModel(
      apolloClient: ApolloClient<object>,
      observationId: string,
      mutationOptions: Omit<MutationOptions<InsertobservationModelMutation, InsertobservationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertobservationModelMutation>; returning: (observationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertobservationModelMutation, InsertobservationModelMutationVariables>({ mutation: InsertobservationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_observation && result.data.insert_observation!.returning;
    
      return { result, returning };
    }
  

    export async function fetchobservationModelById(
      apolloClient: ApolloClient<object>, 
      observationId: string
      ): Promise<observationModelFieldsFragment | null | undefined> {
      const observationResult = await apolloClient.query<FetchobservationModelByIdQuery>({ query: FetchobservationModelByIdDocument, variables: { id:observationId } });
      return observationResult.data.observation_by_pk;
    }
  

    export async function fetchobservationModel(
      apolloClient: ApolloClient<object>,
      observationId: string,
      queryOptions: Omit<QueryOptions<FetchobservationModelQueryVariables>, 'query'>,
    ): Promise<observationModelFieldsFragment | null | undefined> {
      const observationResult = await apolloClient.query<FetchobservationModelQuery>({ query: FetchobservationModelDocument, ...queryOptions });
      return observationResult.data.observation;
    }
  

    export async function updateobservationModelById(
      apolloClient: ApolloClient<object>,
      observationId: string,
      set: observation_Set_Input,
      mutationOptions: Omit<MutationOptions<UpdateobservationModelByIdMutation, UpdateobservationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateobservationModelByIdMutation>; returning: (observationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateobservationModelByIdMutation, UpdateobservationModelByIdMutationVariables>({ mutation: UpdateobservationModelByIdDocument, variables: { id:observationId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_observation && result.data.update_observation!.returning;
    
      return { result, returning };
    }
  

    export async function updateobservationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateobservationModelMutation, UpdateobservationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateobservationModelMutation>; returning: (observationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateobservationModelMutation, UpdateobservationModelMutationVariables>({ mutation: UpdateobservationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_observation && result.data.update_observation!.returning;
    
      return { result, returning };
    }
  

    export async function removeobservationModelById(
      apolloClient: ApolloClient<object>,
      observationId: string,
      mutationOptions: Omit<MutationOptions<RemoveobservationModelByIdMutation, RemoveobservationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveobservationModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveobservationModelByIdMutation, RemoveobservationModelByIdMutationVariables>({ mutation: RemoveobservationModelByIdDocument, variables: { id:observationId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_observation && result.data.delete_observation!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removeobservationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveobservationModelMutation, RemoveobservationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveobservationModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveobservationModelMutation, RemoveobservationModelMutationVariables>({ mutation: RemoveobservationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_observation && result.data.delete_observation!.affected_rows;
    
      return { result, returning };
    }
  

    export async function insertpModel(
      apolloClient: ApolloClient<object>,
      pId: string,
      mutationOptions: Omit<MutationOptions<InsertpModelMutation, InsertpModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertpModelMutation>; returning: (pModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertpModelMutation, InsertpModelMutationVariables>({ mutation: InsertpModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_p && result.data.insert_p!.returning;
    
      return { result, returning };
    }
  

    export async function fetchpModelById(
      apolloClient: ApolloClient<object>, 
      pId: string
      ): Promise<pModelFieldsFragment | null | undefined> {
      const pResult = await apolloClient.query<FetchpModelByIdQuery>({ query: FetchpModelByIdDocument, variables: { id:pId } });
      return pResult.data.p_by_pk;
    }
  

    export async function fetchpModel(
      apolloClient: ApolloClient<object>,
      pId: string,
      queryOptions: Omit<QueryOptions<FetchpModelQueryVariables>, 'query'>,
    ): Promise<pModelFieldsFragment | null | undefined> {
      const pResult = await apolloClient.query<FetchpModelQuery>({ query: FetchpModelDocument, ...queryOptions });
      return pResult.data.p;
    }
  

    export async function updatepModelById(
      apolloClient: ApolloClient<object>,
      pId: string,
      set: p_Set_Input,
      mutationOptions: Omit<MutationOptions<UpdatepModelByIdMutation, UpdatepModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatepModelByIdMutation>; returning: (pModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatepModelByIdMutation, UpdatepModelByIdMutationVariables>({ mutation: UpdatepModelByIdDocument, variables: { id:pId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_p && result.data.update_p!.returning;
    
      return { result, returning };
    }
  

    export async function updatepModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatepModelMutation, UpdatepModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatepModelMutation>; returning: (pModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatepModelMutation, UpdatepModelMutationVariables>({ mutation: UpdatepModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_p && result.data.update_p!.returning;
    
      return { result, returning };
    }
  

    export async function removepModelById(
      apolloClient: ApolloClient<object>,
      pId: string,
      mutationOptions: Omit<MutationOptions<RemovepModelByIdMutation, RemovepModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovepModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovepModelByIdMutation, RemovepModelByIdMutationVariables>({ mutation: RemovepModelByIdDocument, variables: { id:pId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_p && result.data.delete_p!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removepModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemovepModelMutation, RemovepModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovepModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovepModelMutation, RemovepModelMutationVariables>({ mutation: RemovepModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_p && result.data.delete_p!.affected_rows;
    
      return { result, returning };
    }
  

    export async function insertpatientModel(
      apolloClient: ApolloClient<object>,
      patientId: string,
      mutationOptions: Omit<MutationOptions<InsertpatientModelMutation, InsertpatientModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertpatientModelMutation>; returning: (patientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertpatientModelMutation, InsertpatientModelMutationVariables>({ mutation: InsertpatientModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_patient && result.data.insert_patient!.returning;
    
      return { result, returning };
    }
  

    export async function fetchpatientModelById(
      apolloClient: ApolloClient<object>, 
      patientId: string
      ): Promise<patientModelFieldsFragment | null | undefined> {
      const patientResult = await apolloClient.query<FetchpatientModelByIdQuery>({ query: FetchpatientModelByIdDocument, variables: { id:patientId } });
      return patientResult.data.patient_by_pk;
    }
  

    export async function fetchpatientModel(
      apolloClient: ApolloClient<object>,
      patientId: string,
      queryOptions: Omit<QueryOptions<FetchpatientModelQueryVariables>, 'query'>,
    ): Promise<patientModelFieldsFragment | null | undefined> {
      const patientResult = await apolloClient.query<FetchpatientModelQuery>({ query: FetchpatientModelDocument, ...queryOptions });
      return patientResult.data.patient;
    }
  

    export async function updatepatientModelById(
      apolloClient: ApolloClient<object>,
      patientId: string,
      set: patient_Set_Input,
      mutationOptions: Omit<MutationOptions<UpdatepatientModelByIdMutation, UpdatepatientModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatepatientModelByIdMutation>; returning: (patientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatepatientModelByIdMutation, UpdatepatientModelByIdMutationVariables>({ mutation: UpdatepatientModelByIdDocument, variables: { id:patientId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_patient && result.data.update_patient!.returning;
    
      return { result, returning };
    }
  

    export async function updatepatientModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatepatientModelMutation, UpdatepatientModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatepatientModelMutation>; returning: (patientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatepatientModelMutation, UpdatepatientModelMutationVariables>({ mutation: UpdatepatientModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_patient && result.data.update_patient!.returning;
    
      return { result, returning };
    }
  

    export async function removepatientModelById(
      apolloClient: ApolloClient<object>,
      patientId: string,
      mutationOptions: Omit<MutationOptions<RemovepatientModelByIdMutation, RemovepatientModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovepatientModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovepatientModelByIdMutation, RemovepatientModelByIdMutationVariables>({ mutation: RemovepatientModelByIdDocument, variables: { id:patientId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_patient && result.data.delete_patient!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removepatientModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemovepatientModelMutation, RemovepatientModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovepatientModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovepatientModelMutation, RemovepatientModelMutationVariables>({ mutation: RemovepatientModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_patient && result.data.delete_patient!.affected_rows;
    
      return { result, returning };
    }
  

    export async function insertusersModel(
      apolloClient: ApolloClient<object>,
      usersId: string,
      mutationOptions: Omit<MutationOptions<InsertusersModelMutation, InsertusersModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertusersModelMutation>; returning: (usersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertusersModelMutation, InsertusersModelMutationVariables>({ mutation: InsertusersModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_users && result.data.insert_users!.returning;
    
      return { result, returning };
    }
  

    export async function fetchusersModelById(
      apolloClient: ApolloClient<object>, 
      usersId: string
      ): Promise<usersModelFieldsFragment | null | undefined> {
      const usersResult = await apolloClient.query<FetchusersModelByIdQuery>({ query: FetchusersModelByIdDocument, variables: { id:usersId } });
      return usersResult.data.users_by_pk;
    }
  

    export async function fetchusersModel(
      apolloClient: ApolloClient<object>,
      usersId: string,
      queryOptions: Omit<QueryOptions<FetchusersModelQueryVariables>, 'query'>,
    ): Promise<usersModelFieldsFragment | null | undefined> {
      const usersResult = await apolloClient.query<FetchusersModelQuery>({ query: FetchusersModelDocument, ...queryOptions });
      return usersResult.data.users;
    }
  

    export async function updateusersModelById(
      apolloClient: ApolloClient<object>,
      usersId: string,
      set: users_Set_Input,
      mutationOptions: Omit<MutationOptions<UpdateusersModelByIdMutation, UpdateusersModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateusersModelByIdMutation>; returning: (usersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateusersModelByIdMutation, UpdateusersModelByIdMutationVariables>({ mutation: UpdateusersModelByIdDocument, variables: { id:usersId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_users && result.data.update_users!.returning;
    
      return { result, returning };
    }
  

    export async function updateusersModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateusersModelMutation, UpdateusersModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateusersModelMutation>; returning: (usersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateusersModelMutation, UpdateusersModelMutationVariables>({ mutation: UpdateusersModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_users && result.data.update_users!.returning;
    
      return { result, returning };
    }
  

    export async function removeusersModelById(
      apolloClient: ApolloClient<object>,
      usersId: string,
      mutationOptions: Omit<MutationOptions<RemoveusersModelByIdMutation, RemoveusersModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveusersModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveusersModelByIdMutation, RemoveusersModelByIdMutationVariables>({ mutation: RemoveusersModelByIdDocument, variables: { id:usersId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_users && result.data.delete_users!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removeusersModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveusersModelMutation, RemoveusersModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveusersModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveusersModelMutation, RemoveusersModelMutationVariables>({ mutation: RemoveusersModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_users && result.data.delete_users!.affected_rows;
    
      return { result, returning };
    }
  

    export async function insertvehicleModel(
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      mutationOptions: Omit<MutationOptions<InsertvehicleModelMutation, InsertvehicleModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertvehicleModelMutation>; returning: (vehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertvehicleModelMutation, InsertvehicleModelMutationVariables>({ mutation: InsertvehicleModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle && result.data.insert_vehicle!.returning;
    
      return { result, returning };
    }
  

    export async function fetchvehicleModelById(
      apolloClient: ApolloClient<object>, 
      vehicleId: string
      ): Promise<vehicleModelFieldsFragment | null | undefined> {
      const vehicleResult = await apolloClient.query<FetchvehicleModelByIdQuery>({ query: FetchvehicleModelByIdDocument, variables: { id:vehicleId } });
      return vehicleResult.data.vehicle_by_pk;
    }
  

    export async function fetchvehicleModel(
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      queryOptions: Omit<QueryOptions<FetchvehicleModelQueryVariables>, 'query'>,
    ): Promise<vehicleModelFieldsFragment | null | undefined> {
      const vehicleResult = await apolloClient.query<FetchvehicleModelQuery>({ query: FetchvehicleModelDocument, ...queryOptions });
      return vehicleResult.data.vehicle;
    }
  

    export async function updatevehicleModelById(
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      set: vehicle_Set_Input,
      mutationOptions: Omit<MutationOptions<UpdatevehicleModelByIdMutation, UpdatevehicleModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatevehicleModelByIdMutation>; returning: (vehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatevehicleModelByIdMutation, UpdatevehicleModelByIdMutationVariables>({ mutation: UpdatevehicleModelByIdDocument, variables: { id:vehicleId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle && result.data.update_vehicle!.returning;
    
      return { result, returning };
    }
  

    export async function updatevehicleModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatevehicleModelMutation, UpdatevehicleModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatevehicleModelMutation>; returning: (vehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatevehicleModelMutation, UpdatevehicleModelMutationVariables>({ mutation: UpdatevehicleModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle && result.data.update_vehicle!.returning;
    
      return { result, returning };
    }
  

    export async function removevehicleModelById(
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      mutationOptions: Omit<MutationOptions<RemovevehicleModelByIdMutation, RemovevehicleModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovevehicleModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovevehicleModelByIdMutation, RemovevehicleModelByIdMutationVariables>({ mutation: RemovevehicleModelByIdDocument, variables: { id:vehicleId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle && result.data.delete_vehicle!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removevehicleModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemovevehicleModelMutation, RemovevehicleModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovevehicleModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovevehicleModelMutation, RemovevehicleModelMutationVariables>({ mutation: RemovevehicleModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle && result.data.delete_vehicle!.affected_rows;
    
      return { result, returning };
    }
  

    export async function insertvehicle_locationModel(
      apolloClient: ApolloClient<object>,
      vehicle_locationId: string,
      mutationOptions: Omit<MutationOptions<Insertvehicle_locationModelMutation, Insertvehicle_locationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Insertvehicle_locationModelMutation>; returning: (vehicle_locationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Insertvehicle_locationModelMutation, Insertvehicle_locationModelMutationVariables>({ mutation: Insertvehicle_locationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle_location && result.data.insert_vehicle_location!.returning;
    
      return { result, returning };
    }
  

    export async function fetchvehicle_locationModelById(
      apolloClient: ApolloClient<object>, 
      vehicle_locationId: string
      ): Promise<vehicle_locationModelFieldsFragment | null | undefined> {
      const vehicle_locationResult = await apolloClient.query<Fetchvehicle_locationModelByIdQuery>({ query: Fetchvehicle_locationModelByIdDocument, variables: { id:vehicle_locationId } });
      return vehicle_locationResult.data.vehicle_location_by_pk;
    }
  

    export async function fetchvehicle_locationModel(
      apolloClient: ApolloClient<object>,
      vehicle_locationId: string,
      queryOptions: Omit<QueryOptions<Fetchvehicle_locationModelQueryVariables>, 'query'>,
    ): Promise<vehicle_locationModelFieldsFragment | null | undefined> {
      const vehicle_locationResult = await apolloClient.query<Fetchvehicle_locationModelQuery>({ query: Fetchvehicle_locationModelDocument, ...queryOptions });
      return vehicle_locationResult.data.vehicle_location;
    }
  

    export async function updatevehicle_locationModelById(
      apolloClient: ApolloClient<object>,
      vehicle_locationId: string,
      set: vehicle_location_Set_Input,
      mutationOptions: Omit<MutationOptions<Updatevehicle_locationModelByIdMutation, Updatevehicle_locationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Updatevehicle_locationModelByIdMutation>; returning: (vehicle_locationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Updatevehicle_locationModelByIdMutation, Updatevehicle_locationModelByIdMutationVariables>({ mutation: Updatevehicle_locationModelByIdDocument, variables: { id:vehicle_locationId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle_location && result.data.update_vehicle_location!.returning;
    
      return { result, returning };
    }
  

    export async function updatevehicle_locationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Updatevehicle_locationModelMutation, Updatevehicle_locationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Updatevehicle_locationModelMutation>; returning: (vehicle_locationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Updatevehicle_locationModelMutation, Updatevehicle_locationModelMutationVariables>({ mutation: Updatevehicle_locationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle_location && result.data.update_vehicle_location!.returning;
    
      return { result, returning };
    }
  

    export async function removevehicle_locationModelById(
      apolloClient: ApolloClient<object>,
      vehicle_locationId: string,
      mutationOptions: Omit<MutationOptions<Removevehicle_locationModelByIdMutation, Removevehicle_locationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Removevehicle_locationModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<Removevehicle_locationModelByIdMutation, Removevehicle_locationModelByIdMutationVariables>({ mutation: Removevehicle_locationModelByIdDocument, variables: { id:vehicle_locationId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle_location && result.data.delete_vehicle_location!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removevehicle_locationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Removevehicle_locationModelMutation, Removevehicle_locationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Removevehicle_locationModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<Removevehicle_locationModelMutation, Removevehicle_locationModelMutationVariables>({ mutation: Removevehicle_locationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle_location && result.data.delete_vehicle_location!.affected_rows;
    
      return { result, returning };
    }
  