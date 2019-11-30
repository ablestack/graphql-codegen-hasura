import { ApolloClient } from '@apollo/client'
import { FetchResult } from '@apollo/client'
import { QueryOptions, MutationOptions } from '@apollo/client'
import { ObservationModelFieldsFragment } from '../';
import { InsertObservationModelMutation } from '../';
import { InsertObservationModelMutationVariables } from '../';
import { InsertObservationModelDocument } from '../';
import { FetchObservationModelByIdQuery } from '../';
import { FetchObservationModelByIdDocument } from '../';
import { FetchObservationModelQuery } from '../';
import { FetchObservationModelDocument } from '../';
import { FetchObservationModelQueryVariables } from '../';
import { Observation_Set_Input } from '../';
import { UpdateObservationModelByIdMutation } from '../';
import { UpdateObservationModelByIdMutationVariables } from '../';
import { UpdateObservationModelByIdDocument } from '../';
import { UpdateObservationModelMutation } from '../';
import { UpdateObservationModelMutationVariables } from '../';
import { UpdateObservationModelDocument } from '../';
import { RemoveObservationModelMutation } from '../';
import { RemoveObservationModelMutationVariables } from '../';
import { RemoveObservationModelDocument } from '../';
import { RemoveObservationModelByIdMutation } from '../';
import { RemoveObservationModelByIdMutationVariables } from '../';
import { RemoveObservationModelByIdDocument } from '../';
import { PModelFieldsFragment } from '../';
import { InsertPModelMutation } from '../';
import { InsertPModelMutationVariables } from '../';
import { InsertPModelDocument } from '../';
import { FetchPModelByIdQuery } from '../';
import { FetchPModelByIdDocument } from '../';
import { FetchPModelQuery } from '../';
import { FetchPModelDocument } from '../';
import { FetchPModelQueryVariables } from '../';
import { P_Set_Input } from '../';
import { UpdatePModelByIdMutation } from '../';
import { UpdatePModelByIdMutationVariables } from '../';
import { UpdatePModelByIdDocument } from '../';
import { UpdatePModelMutation } from '../';
import { UpdatePModelMutationVariables } from '../';
import { UpdatePModelDocument } from '../';
import { RemovePModelMutation } from '../';
import { RemovePModelMutationVariables } from '../';
import { RemovePModelDocument } from '../';
import { RemovePModelByIdMutation } from '../';
import { RemovePModelByIdMutationVariables } from '../';
import { RemovePModelByIdDocument } from '../';
import { PatientModelFieldsFragment } from '../';
import { InsertPatientModelMutation } from '../';
import { InsertPatientModelMutationVariables } from '../';
import { InsertPatientModelDocument } from '../';
import { FetchPatientModelByIdQuery } from '../';
import { FetchPatientModelByIdDocument } from '../';
import { FetchPatientModelQuery } from '../';
import { FetchPatientModelDocument } from '../';
import { FetchPatientModelQueryVariables } from '../';
import { Patient_Set_Input } from '../';
import { UpdatePatientModelByIdMutation } from '../';
import { UpdatePatientModelByIdMutationVariables } from '../';
import { UpdatePatientModelByIdDocument } from '../';
import { UpdatePatientModelMutation } from '../';
import { UpdatePatientModelMutationVariables } from '../';
import { UpdatePatientModelDocument } from '../';
import { RemovePatientModelMutation } from '../';
import { RemovePatientModelMutationVariables } from '../';
import { RemovePatientModelDocument } from '../';
import { RemovePatientModelByIdMutation } from '../';
import { RemovePatientModelByIdMutationVariables } from '../';
import { RemovePatientModelByIdDocument } from '../';
import { UsersModelFieldsFragment } from '../';
import { InsertUsersModelMutation } from '../';
import { InsertUsersModelMutationVariables } from '../';
import { InsertUsersModelDocument } from '../';
import { FetchUsersModelByIdQuery } from '../';
import { FetchUsersModelByIdDocument } from '../';
import { FetchUsersModelQuery } from '../';
import { FetchUsersModelDocument } from '../';
import { FetchUsersModelQueryVariables } from '../';
import { Users_Set_Input } from '../';
import { UpdateUsersModelByIdMutation } from '../';
import { UpdateUsersModelByIdMutationVariables } from '../';
import { UpdateUsersModelByIdDocument } from '../';
import { UpdateUsersModelMutation } from '../';
import { UpdateUsersModelMutationVariables } from '../';
import { UpdateUsersModelDocument } from '../';
import { RemoveUsersModelMutation } from '../';
import { RemoveUsersModelMutationVariables } from '../';
import { RemoveUsersModelDocument } from '../';
import { RemoveUsersModelByIdMutation } from '../';
import { RemoveUsersModelByIdMutationVariables } from '../';
import { RemoveUsersModelByIdDocument } from '../';
import { VehicleModelFieldsFragment } from '../';
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
import { Vehicle_LocationModelFieldsFragment } from '../';
import { InsertVehicle_LocationModelMutation } from '../';
import { InsertVehicle_LocationModelMutationVariables } from '../';
import { InsertVehicle_LocationModelDocument } from '../';
import { FetchVehicle_LocationModelByIdQuery } from '../';
import { FetchVehicle_LocationModelByIdDocument } from '../';
import { FetchVehicle_LocationModelQuery } from '../';
import { FetchVehicle_LocationModelDocument } from '../';
import { FetchVehicle_LocationModelQueryVariables } from '../';
import { Vehicle_Location_Set_Input } from '../';
import { UpdateVehicle_LocationModelByIdMutation } from '../';
import { UpdateVehicle_LocationModelByIdMutationVariables } from '../';
import { UpdateVehicle_LocationModelByIdDocument } from '../';
import { UpdateVehicle_LocationModelMutation } from '../';
import { UpdateVehicle_LocationModelMutationVariables } from '../';
import { UpdateVehicle_LocationModelDocument } from '../';
import { RemoveVehicle_LocationModelMutation } from '../';
import { RemoveVehicle_LocationModelMutationVariables } from '../';
import { RemoveVehicle_LocationModelDocument } from '../';
import { RemoveVehicle_LocationModelByIdMutation } from '../';
import { RemoveVehicle_LocationModelByIdMutationVariables } from '../';
import { RemoveVehicle_LocationModelByIdDocument } from '../';

    // observation Helpers
    //------------------------------------------------
  

    // Insert Helper
    //

    export async function insertObservationModel(
      apolloClient: ApolloClient<object>,
      observationId: string,
      mutationOptions: Omit<MutationOptions<InsertObservationModelMutation, InsertObservationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertObservationModelMutation>; returning: (ObservationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertObservationModelMutation, InsertObservationModelMutationVariables>({ mutation: InsertObservationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_observation && result.data.insert_observation!.returning;
    
      return { result, returning };
    }
  

    // Fetch Helper
    //

    export async function fetchObservationModelById(
      apolloClient: ApolloClient<object>, 
      observationId: string
      ): Promise<ObservationModelFieldsFragment | null | undefined> {
      const observationResult = await apolloClient.query<FetchObservationModelByIdQuery>({ query: FetchObservationModelByIdDocument, variables: { id:observationId } });
      return observationResult.data.observation_by_pk;
    }
  

    export async function fetchObservationModel(
      apolloClient: ApolloClient<object>,
      observationId: string,
      queryOptions: Omit<QueryOptions<FetchObservationModelQueryVariables>, 'query'>,
    ): Promise<ObservationModelFieldsFragment[] | null | undefined> {
      const observationResult = await apolloClient.query<FetchObservationModelQuery>({ query: FetchObservationModelDocument, ...queryOptions });
      return observationResult.data.observation;
    }
  

    // Update Helper
    //

    export async function updateObservationModelById(
      apolloClient: ApolloClient<object>,
      observationId: string,
      set: Observation_Set_Input,
      mutationOptions: Omit<MutationOptions<UpdateObservationModelByIdMutation, UpdateObservationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateObservationModelByIdMutation>; returning: (ObservationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateObservationModelByIdMutation, UpdateObservationModelByIdMutationVariables>({ mutation: UpdateObservationModelByIdDocument, variables: { id:observationId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_observation && result.data.update_observation!.returning;
    
      return { result, returning };
    }
  

    export async function updateObservationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateObservationModelMutation, UpdateObservationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateObservationModelMutation>; returning: (ObservationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateObservationModelMutation, UpdateObservationModelMutationVariables>({ mutation: UpdateObservationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_observation && result.data.update_observation!.returning;
    
      return { result, returning };
    }
  

    // Delete Helper
    //

    export async function removeObservationModelById(
      apolloClient: ApolloClient<object>,
      observationId: string,
      mutationOptions: Omit<MutationOptions<RemoveObservationModelByIdMutation, RemoveObservationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveObservationModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveObservationModelByIdMutation, RemoveObservationModelByIdMutationVariables>({ mutation: RemoveObservationModelByIdDocument, variables: { id:observationId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_observation && result.data.delete_observation!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removeObservationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveObservationModelMutation, RemoveObservationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveObservationModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveObservationModelMutation, RemoveObservationModelMutationVariables>({ mutation: RemoveObservationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_observation && result.data.delete_observation!.affected_rows;
    
      return { result, returning };
    }
  

    // p Helpers
    //------------------------------------------------
  

    // Insert Helper
    //

    export async function insertPModel(
      apolloClient: ApolloClient<object>,
      pId: string,
      mutationOptions: Omit<MutationOptions<InsertPModelMutation, InsertPModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertPModelMutation>; returning: (PModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertPModelMutation, InsertPModelMutationVariables>({ mutation: InsertPModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_p && result.data.insert_p!.returning;
    
      return { result, returning };
    }
  

    // Fetch Helper
    //

    export async function fetchPModelById(
      apolloClient: ApolloClient<object>, 
      pId: string
      ): Promise<PModelFieldsFragment | null | undefined> {
      const pResult = await apolloClient.query<FetchPModelByIdQuery>({ query: FetchPModelByIdDocument, variables: { id:pId } });
      return pResult.data.p_by_pk;
    }
  

    export async function fetchPModel(
      apolloClient: ApolloClient<object>,
      pId: string,
      queryOptions: Omit<QueryOptions<FetchPModelQueryVariables>, 'query'>,
    ): Promise<PModelFieldsFragment[] | null | undefined> {
      const pResult = await apolloClient.query<FetchPModelQuery>({ query: FetchPModelDocument, ...queryOptions });
      return pResult.data.p;
    }
  

    // Update Helper
    //

    export async function updatePModelById(
      apolloClient: ApolloClient<object>,
      pId: number,
      set: P_Set_Input,
      mutationOptions: Omit<MutationOptions<UpdatePModelByIdMutation, UpdatePModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatePModelByIdMutation>; returning: (PModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatePModelByIdMutation, UpdatePModelByIdMutationVariables>({ mutation: UpdatePModelByIdDocument, variables: { id:pId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_p && result.data.update_p!.returning;
    
      return { result, returning };
    }
  

    export async function updatePModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatePModelMutation, UpdatePModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatePModelMutation>; returning: (PModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatePModelMutation, UpdatePModelMutationVariables>({ mutation: UpdatePModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_p && result.data.update_p!.returning;
    
      return { result, returning };
    }
  

    // Delete Helper
    //

    export async function removePModelById(
      apolloClient: ApolloClient<object>,
      pId: number,
      mutationOptions: Omit<MutationOptions<RemovePModelByIdMutation, RemovePModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovePModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovePModelByIdMutation, RemovePModelByIdMutationVariables>({ mutation: RemovePModelByIdDocument, variables: { id:pId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_p && result.data.delete_p!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removePModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemovePModelMutation, RemovePModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovePModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovePModelMutation, RemovePModelMutationVariables>({ mutation: RemovePModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_p && result.data.delete_p!.affected_rows;
    
      return { result, returning };
    }
  

    // patient Helpers
    //------------------------------------------------
  

    // Insert Helper
    //

    export async function insertPatientModel(
      apolloClient: ApolloClient<object>,
      patientId: string,
      mutationOptions: Omit<MutationOptions<InsertPatientModelMutation, InsertPatientModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertPatientModelMutation>; returning: (PatientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertPatientModelMutation, InsertPatientModelMutationVariables>({ mutation: InsertPatientModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_patient && result.data.insert_patient!.returning;
    
      return { result, returning };
    }
  

    // Fetch Helper
    //

    export async function fetchPatientModelById(
      apolloClient: ApolloClient<object>, 
      patientId: string
      ): Promise<PatientModelFieldsFragment | null | undefined> {
      const patientResult = await apolloClient.query<FetchPatientModelByIdQuery>({ query: FetchPatientModelByIdDocument, variables: { id:patientId } });
      return patientResult.data.patient_by_pk;
    }
  

    export async function fetchPatientModel(
      apolloClient: ApolloClient<object>,
      patientId: string,
      queryOptions: Omit<QueryOptions<FetchPatientModelQueryVariables>, 'query'>,
    ): Promise<PatientModelFieldsFragment[] | null | undefined> {
      const patientResult = await apolloClient.query<FetchPatientModelQuery>({ query: FetchPatientModelDocument, ...queryOptions });
      return patientResult.data.patient;
    }
  

    // Update Helper
    //

    export async function updatePatientModelById(
      apolloClient: ApolloClient<object>,
      patientId: string,
      set: Patient_Set_Input,
      mutationOptions: Omit<MutationOptions<UpdatePatientModelByIdMutation, UpdatePatientModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatePatientModelByIdMutation>; returning: (PatientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatePatientModelByIdMutation, UpdatePatientModelByIdMutationVariables>({ mutation: UpdatePatientModelByIdDocument, variables: { id:patientId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_patient && result.data.update_patient!.returning;
    
      return { result, returning };
    }
  

    export async function updatePatientModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatePatientModelMutation, UpdatePatientModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdatePatientModelMutation>; returning: (PatientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatePatientModelMutation, UpdatePatientModelMutationVariables>({ mutation: UpdatePatientModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_patient && result.data.update_patient!.returning;
    
      return { result, returning };
    }
  

    // Delete Helper
    //

    export async function removePatientModelById(
      apolloClient: ApolloClient<object>,
      patientId: string,
      mutationOptions: Omit<MutationOptions<RemovePatientModelByIdMutation, RemovePatientModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovePatientModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovePatientModelByIdMutation, RemovePatientModelByIdMutationVariables>({ mutation: RemovePatientModelByIdDocument, variables: { id:patientId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_patient && result.data.delete_patient!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removePatientModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemovePatientModelMutation, RemovePatientModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemovePatientModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovePatientModelMutation, RemovePatientModelMutationVariables>({ mutation: RemovePatientModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_patient && result.data.delete_patient!.affected_rows;
    
      return { result, returning };
    }
  

    // users Helpers
    //------------------------------------------------
  

    // Insert Helper
    //

    export async function insertUsersModel(
      apolloClient: ApolloClient<object>,
      usersId: string,
      mutationOptions: Omit<MutationOptions<InsertUsersModelMutation, InsertUsersModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertUsersModelMutation>; returning: (UsersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertUsersModelMutation, InsertUsersModelMutationVariables>({ mutation: InsertUsersModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_users && result.data.insert_users!.returning;
    
      return { result, returning };
    }
  

    // Fetch Helper
    //

    export async function fetchUsersModelById(
      apolloClient: ApolloClient<object>, 
      usersId: string
      ): Promise<UsersModelFieldsFragment | null | undefined> {
      const usersResult = await apolloClient.query<FetchUsersModelByIdQuery>({ query: FetchUsersModelByIdDocument, variables: { id:usersId } });
      return usersResult.data.users_by_pk;
    }
  

    export async function fetchUsersModel(
      apolloClient: ApolloClient<object>,
      usersId: string,
      queryOptions: Omit<QueryOptions<FetchUsersModelQueryVariables>, 'query'>,
    ): Promise<UsersModelFieldsFragment[] | null | undefined> {
      const usersResult = await apolloClient.query<FetchUsersModelQuery>({ query: FetchUsersModelDocument, ...queryOptions });
      return usersResult.data.users;
    }
  

    // Update Helper
    //

    export async function updateUsersModelById(
      apolloClient: ApolloClient<object>,
      usersId: number,
      set: Users_Set_Input,
      mutationOptions: Omit<MutationOptions<UpdateUsersModelByIdMutation, UpdateUsersModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateUsersModelByIdMutation>; returning: (UsersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateUsersModelByIdMutation, UpdateUsersModelByIdMutationVariables>({ mutation: UpdateUsersModelByIdDocument, variables: { id:usersId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_users && result.data.update_users!.returning;
    
      return { result, returning };
    }
  

    export async function updateUsersModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateUsersModelMutation, UpdateUsersModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateUsersModelMutation>; returning: (UsersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateUsersModelMutation, UpdateUsersModelMutationVariables>({ mutation: UpdateUsersModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_users && result.data.update_users!.returning;
    
      return { result, returning };
    }
  

    // Delete Helper
    //

    export async function removeUsersModelById(
      apolloClient: ApolloClient<object>,
      usersId: number,
      mutationOptions: Omit<MutationOptions<RemoveUsersModelByIdMutation, RemoveUsersModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveUsersModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveUsersModelByIdMutation, RemoveUsersModelByIdMutationVariables>({ mutation: RemoveUsersModelByIdDocument, variables: { id:usersId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_users && result.data.delete_users!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removeUsersModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveUsersModelMutation, RemoveUsersModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveUsersModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveUsersModelMutation, RemoveUsersModelMutationVariables>({ mutation: RemoveUsersModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_users && result.data.delete_users!.affected_rows;
    
      return { result, returning };
    }
  

    // vehicle Helpers
    //------------------------------------------------
  

    // Insert Helper
    //

    export async function insertVehicleModel(
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      mutationOptions: Omit<MutationOptions<InsertVehicleModelMutation, InsertVehicleModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertVehicleModelMutation>; returning: (VehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertVehicleModelMutation, InsertVehicleModelMutationVariables>({ mutation: InsertVehicleModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle && result.data.insert_vehicle!.returning;
    
      return { result, returning };
    }
  

    // Fetch Helper
    //

    export async function fetchVehicleModelById(
      apolloClient: ApolloClient<object>, 
      vehicleId: string
      ): Promise<VehicleModelFieldsFragment | null | undefined> {
      const vehicleResult = await apolloClient.query<FetchVehicleModelByIdQuery>({ query: FetchVehicleModelByIdDocument, variables: { id:vehicleId } });
      return vehicleResult.data.vehicle_by_pk;
    }
  

    export async function fetchVehicleModel(
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      queryOptions: Omit<QueryOptions<FetchVehicleModelQueryVariables>, 'query'>,
    ): Promise<VehicleModelFieldsFragment[] | null | undefined> {
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
    ): Promise<{ result: FetchResult<UpdateVehicleModelByIdMutation>; returning: (VehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicleModelByIdMutation, UpdateVehicleModelByIdMutationVariables>({ mutation: UpdateVehicleModelByIdDocument, variables: { id:vehicleId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle && result.data.update_vehicle!.returning;
    
      return { result, returning };
    }
  

    export async function updateVehicleModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateVehicleModelMutation, UpdateVehicleModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateVehicleModelMutation>; returning: (VehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
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
  

    // vehicle_location Helpers
    //------------------------------------------------
  

    // Insert Helper
    //

    export async function insertVehicle_LocationModel(
      apolloClient: ApolloClient<object>,
      vehicle_LocationId: string,
      mutationOptions: Omit<MutationOptions<InsertVehicle_LocationModelMutation, InsertVehicle_LocationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<InsertVehicle_LocationModelMutation>; returning: (Vehicle_LocationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertVehicle_LocationModelMutation, InsertVehicle_LocationModelMutationVariables>({ mutation: InsertVehicle_LocationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle_location && result.data.insert_vehicle_location!.returning;
    
      return { result, returning };
    }
  

    // Fetch Helper
    //

    export async function fetchVehicle_LocationModelById(
      apolloClient: ApolloClient<object>, 
      vehicle_LocationId: string
      ): Promise<Vehicle_LocationModelFieldsFragment | null | undefined> {
      const vehicle_LocationResult = await apolloClient.query<FetchVehicle_LocationModelByIdQuery>({ query: FetchVehicle_LocationModelByIdDocument, variables: { id:vehicle_LocationId } });
      return vehicle_LocationResult.data.vehicle_location_by_pk;
    }
  

    export async function fetchVehicle_LocationModel(
      apolloClient: ApolloClient<object>,
      vehicle_LocationId: string,
      queryOptions: Omit<QueryOptions<FetchVehicle_LocationModelQueryVariables>, 'query'>,
    ): Promise<Vehicle_LocationModelFieldsFragment[] | null | undefined> {
      const vehicle_LocationResult = await apolloClient.query<FetchVehicle_LocationModelQuery>({ query: FetchVehicle_LocationModelDocument, ...queryOptions });
      return vehicle_LocationResult.data.vehicle_location;
    }
  

    // Update Helper
    //

    export async function updateVehicle_LocationModelById(
      apolloClient: ApolloClient<object>,
      vehicle_LocationId: number,
      set: Vehicle_Location_Set_Input,
      mutationOptions: Omit<MutationOptions<UpdateVehicle_LocationModelByIdMutation, UpdateVehicle_LocationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateVehicle_LocationModelByIdMutation>; returning: (Vehicle_LocationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicle_LocationModelByIdMutation, UpdateVehicle_LocationModelByIdMutationVariables>({ mutation: UpdateVehicle_LocationModelByIdDocument, variables: { id:vehicle_LocationId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle_location && result.data.update_vehicle_location!.returning;
    
      return { result, returning };
    }
  

    export async function updateVehicle_LocationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateVehicle_LocationModelMutation, UpdateVehicle_LocationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<UpdateVehicle_LocationModelMutation>; returning: (Vehicle_LocationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicle_LocationModelMutation, UpdateVehicle_LocationModelMutationVariables>({ mutation: UpdateVehicle_LocationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle_location && result.data.update_vehicle_location!.returning;
    
      return { result, returning };
    }
  

    // Delete Helper
    //

    export async function removeVehicle_LocationModelById(
      apolloClient: ApolloClient<object>,
      vehicle_LocationId: number,
      mutationOptions: Omit<MutationOptions<RemoveVehicle_LocationModelByIdMutation, RemoveVehicle_LocationModelByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveVehicle_LocationModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveVehicle_LocationModelByIdMutation, RemoveVehicle_LocationModelByIdMutationVariables>({ mutation: RemoveVehicle_LocationModelByIdDocument, variables: { id:vehicle_LocationId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle_location && result.data.delete_vehicle_location!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removeVehicle_LocationModel(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveVehicle_LocationModelMutation, RemoveVehicle_LocationModelMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<RemoveVehicle_LocationModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveVehicle_LocationModelMutation, RemoveVehicle_LocationModelMutationVariables>({ mutation: RemoveVehicle_LocationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle_location && result.data.delete_vehicle_location!.affected_rows;
    
      return { result, returning };
    }
  