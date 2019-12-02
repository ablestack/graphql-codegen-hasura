import { ApolloClient } from '@apollo/client'
import { FetchResult } from '@apollo/client'
import { QueryOptions, MutationOptions } from '@apollo/client'
import { ObservationModelFieldsFragment } from '../';
import { FetchObservationModelFieldsByIdQuery } from '../';
import { FetchObservationModelFieldsByIdDocument } from '../';
import { FetchObservationModelFieldsQuery } from '../';
import { FetchObservationModelFieldsDocument } from '../';
import { FetchObservationModelFieldsQueryVariables } from '../';
import { Observation_Insert_Input } from '../';
import { Observation_On_Conflict } from '../';
import { InsertObservationModelFieldsMutation } from '../';
import { InsertObservationModelFieldsMutationVariables } from '../';
import { InsertObservationModelFieldsDocument } from '../';
import { Observation_Set_Input } from '../';
import { UpdateObservationModelFieldsByIdMutation } from '../';
import { UpdateObservationModelFieldsByIdMutationVariables } from '../';
import { UpdateObservationModelFieldsByIdDocument } from '../';
import { UpdateObservationModelFieldsMutation } from '../';
import { UpdateObservationModelFieldsMutationVariables } from '../';
import { UpdateObservationModelFieldsDocument } from '../';
import { RemoveObservationModelMutation } from '../';
import { RemoveObservationModelMutationVariables } from '../';
import { RemoveObservationModelDocument } from '../';
import { RemoveObservationModelByIdMutation } from '../';
import { RemoveObservationModelByIdMutationVariables } from '../';
import { RemoveObservationModelByIdDocument } from '../';
import { PModelFieldsFragment } from '../';
import { FetchPModelFieldsByIdQuery } from '../';
import { FetchPModelFieldsByIdDocument } from '../';
import { FetchPModelFieldsQuery } from '../';
import { FetchPModelFieldsDocument } from '../';
import { FetchPModelFieldsQueryVariables } from '../';
import { P_Insert_Input } from '../';
import { P_On_Conflict } from '../';
import { InsertPModelFieldsMutation } from '../';
import { InsertPModelFieldsMutationVariables } from '../';
import { InsertPModelFieldsDocument } from '../';
import { P_Set_Input } from '../';
import { UpdatePModelFieldsByIdMutation } from '../';
import { UpdatePModelFieldsByIdMutationVariables } from '../';
import { UpdatePModelFieldsByIdDocument } from '../';
import { UpdatePModelFieldsMutation } from '../';
import { UpdatePModelFieldsMutationVariables } from '../';
import { UpdatePModelFieldsDocument } from '../';
import { RemovePModelMutation } from '../';
import { RemovePModelMutationVariables } from '../';
import { RemovePModelDocument } from '../';
import { RemovePModelByIdMutation } from '../';
import { RemovePModelByIdMutationVariables } from '../';
import { RemovePModelByIdDocument } from '../';
import { PatientModelFieldsFragment } from '../';
import { FetchPatientModelFieldsByIdQuery } from '../';
import { FetchPatientModelFieldsByIdDocument } from '../';
import { FetchPatientModelFieldsQuery } from '../';
import { FetchPatientModelFieldsDocument } from '../';
import { FetchPatientModelFieldsQueryVariables } from '../';
import { Patient_Insert_Input } from '../';
import { Patient_On_Conflict } from '../';
import { InsertPatientModelFieldsMutation } from '../';
import { InsertPatientModelFieldsMutationVariables } from '../';
import { InsertPatientModelFieldsDocument } from '../';
import { Patient_Set_Input } from '../';
import { UpdatePatientModelFieldsByIdMutation } from '../';
import { UpdatePatientModelFieldsByIdMutationVariables } from '../';
import { UpdatePatientModelFieldsByIdDocument } from '../';
import { UpdatePatientModelFieldsMutation } from '../';
import { UpdatePatientModelFieldsMutationVariables } from '../';
import { UpdatePatientModelFieldsDocument } from '../';
import { RemovePatientModelMutation } from '../';
import { RemovePatientModelMutationVariables } from '../';
import { RemovePatientModelDocument } from '../';
import { RemovePatientModelByIdMutation } from '../';
import { RemovePatientModelByIdMutationVariables } from '../';
import { RemovePatientModelByIdDocument } from '../';
import { UsersModelFieldsFragment } from '../';
import { FetchUsersModelFieldsByIdQuery } from '../';
import { FetchUsersModelFieldsByIdDocument } from '../';
import { FetchUsersModelFieldsQuery } from '../';
import { FetchUsersModelFieldsDocument } from '../';
import { FetchUsersModelFieldsQueryVariables } from '../';
import { Users_Insert_Input } from '../';
import { Users_On_Conflict } from '../';
import { InsertUsersModelFieldsMutation } from '../';
import { InsertUsersModelFieldsMutationVariables } from '../';
import { InsertUsersModelFieldsDocument } from '../';
import { Users_Set_Input } from '../';
import { UpdateUsersModelFieldsByIdMutation } from '../';
import { UpdateUsersModelFieldsByIdMutationVariables } from '../';
import { UpdateUsersModelFieldsByIdDocument } from '../';
import { UpdateUsersModelFieldsMutation } from '../';
import { UpdateUsersModelFieldsMutationVariables } from '../';
import { UpdateUsersModelFieldsDocument } from '../';
import { RemoveUsersModelMutation } from '../';
import { RemoveUsersModelMutationVariables } from '../';
import { RemoveUsersModelDocument } from '../';
import { RemoveUsersModelByIdMutation } from '../';
import { RemoveUsersModelByIdMutationVariables } from '../';
import { RemoveUsersModelByIdDocument } from '../';
import { VehicleModelFieldsFragment } from '../';
import { FetchVehicleModelFieldsByIdQuery } from '../';
import { FetchVehicleModelFieldsByIdDocument } from '../';
import { FetchVehicleModelFieldsQuery } from '../';
import { FetchVehicleModelFieldsDocument } from '../';
import { FetchVehicleModelFieldsQueryVariables } from '../';
import { Vehicle_Insert_Input } from '../';
import { Vehicle_On_Conflict } from '../';
import { InsertVehicleModelFieldsMutation } from '../';
import { InsertVehicleModelFieldsMutationVariables } from '../';
import { InsertVehicleModelFieldsDocument } from '../';
import { Vehicle_Set_Input } from '../';
import { UpdateVehicleModelFieldsByIdMutation } from '../';
import { UpdateVehicleModelFieldsByIdMutationVariables } from '../';
import { UpdateVehicleModelFieldsByIdDocument } from '../';
import { UpdateVehicleModelFieldsMutation } from '../';
import { UpdateVehicleModelFieldsMutationVariables } from '../';
import { UpdateVehicleModelFieldsDocument } from '../';
import { RemoveVehicleModelMutation } from '../';
import { RemoveVehicleModelMutationVariables } from '../';
import { RemoveVehicleModelDocument } from '../';
import { RemoveVehicleModelByIdMutation } from '../';
import { RemoveVehicleModelByIdMutationVariables } from '../';
import { RemoveVehicleModelByIdDocument } from '../';
import { Vehicle_LocationModelFieldsFragment } from '../';
import { FetchVehicle_LocationModelFieldsByIdQuery } from '../';
import { FetchVehicle_LocationModelFieldsByIdDocument } from '../';
import { FetchVehicle_LocationModelFieldsQuery } from '../';
import { FetchVehicle_LocationModelFieldsDocument } from '../';
import { FetchVehicle_LocationModelFieldsQueryVariables } from '../';
import { Vehicle_Location_Insert_Input } from '../';
import { Vehicle_Location_On_Conflict } from '../';
import { InsertVehicle_LocationModelFieldsMutation } from '../';
import { InsertVehicle_LocationModelFieldsMutationVariables } from '../';
import { InsertVehicle_LocationModelFieldsDocument } from '../';
import { Vehicle_Location_Set_Input } from '../';
import { UpdateVehicle_LocationModelFieldsByIdMutation } from '../';
import { UpdateVehicle_LocationModelFieldsByIdMutationVariables } from '../';
import { UpdateVehicle_LocationModelFieldsByIdDocument } from '../';
import { UpdateVehicle_LocationModelFieldsMutation } from '../';
import { UpdateVehicle_LocationModelFieldsMutationVariables } from '../';
import { UpdateVehicle_LocationModelFieldsDocument } from '../';
import { RemoveVehicle_LocationModelMutation } from '../';
import { RemoveVehicle_LocationModelMutationVariables } from '../';
import { RemoveVehicle_LocationModelDocument } from '../';
import { RemoveVehicle_LocationModelByIdMutation } from '../';
import { RemoveVehicle_LocationModelByIdMutationVariables } from '../';
import { RemoveVehicle_LocationModelByIdDocument } from '../';

    // observation Helpers
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchObservationModelFieldsObjectById({
        apolloClient,
        observationId,
        queryOptions,
      }: {
        apolloClient: ApolloClient<object>, 
        observationId: string,
        queryOptions?: Omit<QueryOptions<FetchObservationModelFieldsQueryVariables>, 'query' | 'variables'>,
      }): Promise<ObservationModelFieldsFragment | null | undefined> {
        const observationResult = await apolloClient.query<FetchObservationModelFieldsByIdQuery>({ query: FetchObservationModelFieldsByIdDocument, variables: { id:observationId }, ...queryOptions });
        return observationResult.data.observation_by_pk;
      }
    

      export async function fetchObservationModelFieldsObjects({
        apolloClient,
        queryOptions,
      }:{
        apolloClient: ApolloClient<object>,
        queryOptions: Omit<QueryOptions<FetchObservationModelFieldsQueryVariables>, 'query'>,
      }): Promise<ObservationModelFieldsFragment[] | null | undefined> {
        const observationResult = await apolloClient.query<FetchObservationModelFieldsQuery>({ query: FetchObservationModelFieldsDocument, ...queryOptions });
        return observationResult.data.observation;
      }
    

    // Insert Helper
    //

    export async function insertObservationModelFieldsObject({
      apolloClient,
      observation,
      onConflict,
      mutationOptions,
    } :{
      apolloClient: ApolloClient<object>,
      observation: Observation_Insert_Input,
      onConflict?: Observation_On_Conflict,
      mutationOptions?: Omit<MutationOptions<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>, 'mutation' | 'variables'>,
    }): Promise<{ result: FetchResult<InsertObservationModelFieldsMutation>; returning: ObservationModelFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>({ 
        mutation: InsertObservationModelFieldsDocument, 
        variables: { objects: [observation], onConflict },
        ...mutationOptions,
      });
    
      const returning = result && result.data && result.data.insert_observation && result.data.insert_observation!.returning && result.data.insert_observation!.returning[0];
    
      return { result, returning };
    }
  

    export async function insertObservationModelFieldsObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<InsertObservationModelFieldsMutation>; returning: (ObservationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>({ mutation: InsertObservationModelFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_observation && result.data.insert_observation!.returning;
    
      return { result, returning };
    }
  

    // Update Helper
    //

    export async function updateObservationModelFieldsObjectById({
      apolloClient,
      observationId,
      set,
      mutationOptions,
    }: { 
      apolloClient: ApolloClient<object>,
      observationId: string,
      set: Observation_Set_Input,
      mutationOptions?: Omit<MutationOptions<UpdateObservationModelFieldsByIdMutation, UpdateObservationModelFieldsByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdateObservationModelFieldsByIdMutation>; returning: ObservationModelFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateObservationModelFieldsByIdMutation, UpdateObservationModelFieldsByIdMutationVariables>({ mutation: UpdateObservationModelFieldsByIdDocument, variables: { id:observationId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_observation && result.data.update_observation!.returning && result.data.update_observation!.returning[0];
    
      return { result, returning };
    }
  

    export async function updateObservationModelFieldsObjects({
      apolloClient,
      mutationOptions,
    }: {
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateObservationModelFieldsMutation, UpdateObservationModelFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdateObservationModelFieldsMutation>; returning: (ObservationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateObservationModelFieldsMutation, UpdateObservationModelFieldsMutationVariables>({ mutation: UpdateObservationModelFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_observation && result.data.update_observation!.returning;
    
      return { result, returning };
    }
  

    // Delete Helper
    //

    export async function removeObservationModelObjectById({
      apolloClient,
      observationId,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      observationId: string,
      mutationOptions?: Omit<MutationOptions<RemoveObservationModelByIdMutation, RemoveObservationModelByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<RemoveObservationModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveObservationModelByIdMutation, RemoveObservationModelByIdMutationVariables>({ mutation: RemoveObservationModelByIdDocument, variables: { id:observationId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_observation && result.data.delete_observation!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removeObservationModelObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveObservationModelMutation, RemoveObservationModelMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<RemoveObservationModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveObservationModelMutation, RemoveObservationModelMutationVariables>({ mutation: RemoveObservationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_observation && result.data.delete_observation!.affected_rows;
    
      return { result, returning };
    }
  

    // p Helpers
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchPModelFieldsObjectById({
        apolloClient,
        pId,
        queryOptions,
      }: {
        apolloClient: ApolloClient<object>, 
        pId: string,
        queryOptions?: Omit<QueryOptions<FetchPModelFieldsQueryVariables>, 'query' | 'variables'>,
      }): Promise<PModelFieldsFragment | null | undefined> {
        const pResult = await apolloClient.query<FetchPModelFieldsByIdQuery>({ query: FetchPModelFieldsByIdDocument, variables: { id:pId }, ...queryOptions });
        return pResult.data.p_by_pk;
      }
    

      export async function fetchPModelFieldsObjects({
        apolloClient,
        queryOptions,
      }:{
        apolloClient: ApolloClient<object>,
        queryOptions: Omit<QueryOptions<FetchPModelFieldsQueryVariables>, 'query'>,
      }): Promise<PModelFieldsFragment[] | null | undefined> {
        const pResult = await apolloClient.query<FetchPModelFieldsQuery>({ query: FetchPModelFieldsDocument, ...queryOptions });
        return pResult.data.p;
      }
    

    // Insert Helper
    //

    export async function insertPModelFieldsObject({
      apolloClient,
      p,
      onConflict,
      mutationOptions,
    } :{
      apolloClient: ApolloClient<object>,
      p: P_Insert_Input,
      onConflict?: P_On_Conflict,
      mutationOptions?: Omit<MutationOptions<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>, 'mutation' | 'variables'>,
    }): Promise<{ result: FetchResult<InsertPModelFieldsMutation>; returning: PModelFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>({ 
        mutation: InsertPModelFieldsDocument, 
        variables: { objects: [p], onConflict },
        ...mutationOptions,
      });
    
      const returning = result && result.data && result.data.insert_p && result.data.insert_p!.returning && result.data.insert_p!.returning[0];
    
      return { result, returning };
    }
  

    export async function insertPModelFieldsObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<InsertPModelFieldsMutation>; returning: (PModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>({ mutation: InsertPModelFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_p && result.data.insert_p!.returning;
    
      return { result, returning };
    }
  

    // Update Helper
    //

    export async function updatePModelFieldsObjectById({
      apolloClient,
      pId,
      set,
      mutationOptions,
    }: { 
      apolloClient: ApolloClient<object>,
      pId: number,
      set: P_Set_Input,
      mutationOptions?: Omit<MutationOptions<UpdatePModelFieldsByIdMutation, UpdatePModelFieldsByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdatePModelFieldsByIdMutation>; returning: PModelFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatePModelFieldsByIdMutation, UpdatePModelFieldsByIdMutationVariables>({ mutation: UpdatePModelFieldsByIdDocument, variables: { id:pId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_p && result.data.update_p!.returning && result.data.update_p!.returning[0];
    
      return { result, returning };
    }
  

    export async function updatePModelFieldsObjects({
      apolloClient,
      mutationOptions,
    }: {
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatePModelFieldsMutation, UpdatePModelFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdatePModelFieldsMutation>; returning: (PModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatePModelFieldsMutation, UpdatePModelFieldsMutationVariables>({ mutation: UpdatePModelFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_p && result.data.update_p!.returning;
    
      return { result, returning };
    }
  

    // Delete Helper
    //

    export async function removePModelObjectById({
      apolloClient,
      pId,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      pId: number,
      mutationOptions?: Omit<MutationOptions<RemovePModelByIdMutation, RemovePModelByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<RemovePModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovePModelByIdMutation, RemovePModelByIdMutationVariables>({ mutation: RemovePModelByIdDocument, variables: { id:pId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_p && result.data.delete_p!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removePModelObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemovePModelMutation, RemovePModelMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<RemovePModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovePModelMutation, RemovePModelMutationVariables>({ mutation: RemovePModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_p && result.data.delete_p!.affected_rows;
    
      return { result, returning };
    }
  

    // patient Helpers
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchPatientModelFieldsObjectById({
        apolloClient,
        patientId,
        queryOptions,
      }: {
        apolloClient: ApolloClient<object>, 
        patientId: string,
        queryOptions?: Omit<QueryOptions<FetchPatientModelFieldsQueryVariables>, 'query' | 'variables'>,
      }): Promise<PatientModelFieldsFragment | null | undefined> {
        const patientResult = await apolloClient.query<FetchPatientModelFieldsByIdQuery>({ query: FetchPatientModelFieldsByIdDocument, variables: { id:patientId }, ...queryOptions });
        return patientResult.data.patient_by_pk;
      }
    

      export async function fetchPatientModelFieldsObjects({
        apolloClient,
        queryOptions,
      }:{
        apolloClient: ApolloClient<object>,
        queryOptions: Omit<QueryOptions<FetchPatientModelFieldsQueryVariables>, 'query'>,
      }): Promise<PatientModelFieldsFragment[] | null | undefined> {
        const patientResult = await apolloClient.query<FetchPatientModelFieldsQuery>({ query: FetchPatientModelFieldsDocument, ...queryOptions });
        return patientResult.data.patient;
      }
    

    // Insert Helper
    //

    export async function insertPatientModelFieldsObject({
      apolloClient,
      patient,
      onConflict,
      mutationOptions,
    } :{
      apolloClient: ApolloClient<object>,
      patient: Patient_Insert_Input,
      onConflict?: Patient_On_Conflict,
      mutationOptions?: Omit<MutationOptions<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>, 'mutation' | 'variables'>,
    }): Promise<{ result: FetchResult<InsertPatientModelFieldsMutation>; returning: PatientModelFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>({ 
        mutation: InsertPatientModelFieldsDocument, 
        variables: { objects: [patient], onConflict },
        ...mutationOptions,
      });
    
      const returning = result && result.data && result.data.insert_patient && result.data.insert_patient!.returning && result.data.insert_patient!.returning[0];
    
      return { result, returning };
    }
  

    export async function insertPatientModelFieldsObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<InsertPatientModelFieldsMutation>; returning: (PatientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>({ mutation: InsertPatientModelFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_patient && result.data.insert_patient!.returning;
    
      return { result, returning };
    }
  

    // Update Helper
    //

    export async function updatePatientModelFieldsObjectById({
      apolloClient,
      patientId,
      set,
      mutationOptions,
    }: { 
      apolloClient: ApolloClient<object>,
      patientId: string,
      set: Patient_Set_Input,
      mutationOptions?: Omit<MutationOptions<UpdatePatientModelFieldsByIdMutation, UpdatePatientModelFieldsByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdatePatientModelFieldsByIdMutation>; returning: PatientModelFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatePatientModelFieldsByIdMutation, UpdatePatientModelFieldsByIdMutationVariables>({ mutation: UpdatePatientModelFieldsByIdDocument, variables: { id:patientId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_patient && result.data.update_patient!.returning && result.data.update_patient!.returning[0];
    
      return { result, returning };
    }
  

    export async function updatePatientModelFieldsObjects({
      apolloClient,
      mutationOptions,
    }: {
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdatePatientModelFieldsMutation, UpdatePatientModelFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdatePatientModelFieldsMutation>; returning: (PatientModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdatePatientModelFieldsMutation, UpdatePatientModelFieldsMutationVariables>({ mutation: UpdatePatientModelFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_patient && result.data.update_patient!.returning;
    
      return { result, returning };
    }
  

    // Delete Helper
    //

    export async function removePatientModelObjectById({
      apolloClient,
      patientId,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      patientId: string,
      mutationOptions?: Omit<MutationOptions<RemovePatientModelByIdMutation, RemovePatientModelByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<RemovePatientModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovePatientModelByIdMutation, RemovePatientModelByIdMutationVariables>({ mutation: RemovePatientModelByIdDocument, variables: { id:patientId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_patient && result.data.delete_patient!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removePatientModelObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemovePatientModelMutation, RemovePatientModelMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<RemovePatientModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemovePatientModelMutation, RemovePatientModelMutationVariables>({ mutation: RemovePatientModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_patient && result.data.delete_patient!.affected_rows;
    
      return { result, returning };
    }
  

    // users Helpers
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchUsersModelFieldsObjectById({
        apolloClient,
        usersId,
        queryOptions,
      }: {
        apolloClient: ApolloClient<object>, 
        usersId: string,
        queryOptions?: Omit<QueryOptions<FetchUsersModelFieldsQueryVariables>, 'query' | 'variables'>,
      }): Promise<UsersModelFieldsFragment | null | undefined> {
        const usersResult = await apolloClient.query<FetchUsersModelFieldsByIdQuery>({ query: FetchUsersModelFieldsByIdDocument, variables: { id:usersId }, ...queryOptions });
        return usersResult.data.users_by_pk;
      }
    

      export async function fetchUsersModelFieldsObjects({
        apolloClient,
        queryOptions,
      }:{
        apolloClient: ApolloClient<object>,
        queryOptions: Omit<QueryOptions<FetchUsersModelFieldsQueryVariables>, 'query'>,
      }): Promise<UsersModelFieldsFragment[] | null | undefined> {
        const usersResult = await apolloClient.query<FetchUsersModelFieldsQuery>({ query: FetchUsersModelFieldsDocument, ...queryOptions });
        return usersResult.data.users;
      }
    

    // Insert Helper
    //

    export async function insertUsersModelFieldsObject({
      apolloClient,
      users,
      onConflict,
      mutationOptions,
    } :{
      apolloClient: ApolloClient<object>,
      users: Users_Insert_Input,
      onConflict?: Users_On_Conflict,
      mutationOptions?: Omit<MutationOptions<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>, 'mutation' | 'variables'>,
    }): Promise<{ result: FetchResult<InsertUsersModelFieldsMutation>; returning: UsersModelFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>({ 
        mutation: InsertUsersModelFieldsDocument, 
        variables: { objects: [users], onConflict },
        ...mutationOptions,
      });
    
      const returning = result && result.data && result.data.insert_users && result.data.insert_users!.returning && result.data.insert_users!.returning[0];
    
      return { result, returning };
    }
  

    export async function insertUsersModelFieldsObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<InsertUsersModelFieldsMutation>; returning: (UsersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>({ mutation: InsertUsersModelFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_users && result.data.insert_users!.returning;
    
      return { result, returning };
    }
  

    // Update Helper
    //

    export async function updateUsersModelFieldsObjectById({
      apolloClient,
      usersId,
      set,
      mutationOptions,
    }: { 
      apolloClient: ApolloClient<object>,
      usersId: number,
      set: Users_Set_Input,
      mutationOptions?: Omit<MutationOptions<UpdateUsersModelFieldsByIdMutation, UpdateUsersModelFieldsByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdateUsersModelFieldsByIdMutation>; returning: UsersModelFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateUsersModelFieldsByIdMutation, UpdateUsersModelFieldsByIdMutationVariables>({ mutation: UpdateUsersModelFieldsByIdDocument, variables: { id:usersId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_users && result.data.update_users!.returning && result.data.update_users!.returning[0];
    
      return { result, returning };
    }
  

    export async function updateUsersModelFieldsObjects({
      apolloClient,
      mutationOptions,
    }: {
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateUsersModelFieldsMutation, UpdateUsersModelFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdateUsersModelFieldsMutation>; returning: (UsersModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateUsersModelFieldsMutation, UpdateUsersModelFieldsMutationVariables>({ mutation: UpdateUsersModelFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_users && result.data.update_users!.returning;
    
      return { result, returning };
    }
  

    // Delete Helper
    //

    export async function removeUsersModelObjectById({
      apolloClient,
      usersId,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      usersId: number,
      mutationOptions?: Omit<MutationOptions<RemoveUsersModelByIdMutation, RemoveUsersModelByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<RemoveUsersModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveUsersModelByIdMutation, RemoveUsersModelByIdMutationVariables>({ mutation: RemoveUsersModelByIdDocument, variables: { id:usersId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_users && result.data.delete_users!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removeUsersModelObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveUsersModelMutation, RemoveUsersModelMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<RemoveUsersModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveUsersModelMutation, RemoveUsersModelMutationVariables>({ mutation: RemoveUsersModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_users && result.data.delete_users!.affected_rows;
    
      return { result, returning };
    }
  

    // vehicle Helpers
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchVehicleModelFieldsObjectById({
        apolloClient,
        vehicleId,
        queryOptions,
      }: {
        apolloClient: ApolloClient<object>, 
        vehicleId: string,
        queryOptions?: Omit<QueryOptions<FetchVehicleModelFieldsQueryVariables>, 'query' | 'variables'>,
      }): Promise<VehicleModelFieldsFragment | null | undefined> {
        const vehicleResult = await apolloClient.query<FetchVehicleModelFieldsByIdQuery>({ query: FetchVehicleModelFieldsByIdDocument, variables: { id:vehicleId }, ...queryOptions });
        return vehicleResult.data.vehicle_by_pk;
      }
    

      export async function fetchVehicleModelFieldsObjects({
        apolloClient,
        queryOptions,
      }:{
        apolloClient: ApolloClient<object>,
        queryOptions: Omit<QueryOptions<FetchVehicleModelFieldsQueryVariables>, 'query'>,
      }): Promise<VehicleModelFieldsFragment[] | null | undefined> {
        const vehicleResult = await apolloClient.query<FetchVehicleModelFieldsQuery>({ query: FetchVehicleModelFieldsDocument, ...queryOptions });
        return vehicleResult.data.vehicle;
      }
    

    // Insert Helper
    //

    export async function insertVehicleModelFieldsObject({
      apolloClient,
      vehicle,
      onConflict,
      mutationOptions,
    } :{
      apolloClient: ApolloClient<object>,
      vehicle: Vehicle_Insert_Input,
      onConflict?: Vehicle_On_Conflict,
      mutationOptions?: Omit<MutationOptions<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>, 'mutation' | 'variables'>,
    }): Promise<{ result: FetchResult<InsertVehicleModelFieldsMutation>; returning: VehicleModelFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>({ 
        mutation: InsertVehicleModelFieldsDocument, 
        variables: { objects: [vehicle], onConflict },
        ...mutationOptions,
      });
    
      const returning = result && result.data && result.data.insert_vehicle && result.data.insert_vehicle!.returning && result.data.insert_vehicle!.returning[0];
    
      return { result, returning };
    }
  

    export async function insertVehicleModelFieldsObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<InsertVehicleModelFieldsMutation>; returning: (VehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>({ mutation: InsertVehicleModelFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle && result.data.insert_vehicle!.returning;
    
      return { result, returning };
    }
  

    // Update Helper
    //

    export async function updateVehicleModelFieldsObjectById({
      apolloClient,
      vehicleId,
      set,
      mutationOptions,
    }: { 
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      set: Vehicle_Set_Input,
      mutationOptions?: Omit<MutationOptions<UpdateVehicleModelFieldsByIdMutation, UpdateVehicleModelFieldsByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdateVehicleModelFieldsByIdMutation>; returning: VehicleModelFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicleModelFieldsByIdMutation, UpdateVehicleModelFieldsByIdMutationVariables>({ mutation: UpdateVehicleModelFieldsByIdDocument, variables: { id:vehicleId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle && result.data.update_vehicle!.returning && result.data.update_vehicle!.returning[0];
    
      return { result, returning };
    }
  

    export async function updateVehicleModelFieldsObjects({
      apolloClient,
      mutationOptions,
    }: {
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateVehicleModelFieldsMutation, UpdateVehicleModelFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdateVehicleModelFieldsMutation>; returning: (VehicleModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicleModelFieldsMutation, UpdateVehicleModelFieldsMutationVariables>({ mutation: UpdateVehicleModelFieldsDocument, ...mutationOptions,});
    
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
      mutationOptions?: Omit<MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation'>,
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
  

    // vehicle_location Helpers
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchVehicle_LocationModelFieldsObjectById({
        apolloClient,
        vehicle_LocationId,
        queryOptions,
      }: {
        apolloClient: ApolloClient<object>, 
        vehicle_LocationId: string,
        queryOptions?: Omit<QueryOptions<FetchVehicle_LocationModelFieldsQueryVariables>, 'query' | 'variables'>,
      }): Promise<Vehicle_LocationModelFieldsFragment | null | undefined> {
        const vehicle_LocationResult = await apolloClient.query<FetchVehicle_LocationModelFieldsByIdQuery>({ query: FetchVehicle_LocationModelFieldsByIdDocument, variables: { id:vehicle_LocationId }, ...queryOptions });
        return vehicle_LocationResult.data.vehicle_location_by_pk;
      }
    

      export async function fetchVehicle_LocationModelFieldsObjects({
        apolloClient,
        queryOptions,
      }:{
        apolloClient: ApolloClient<object>,
        queryOptions: Omit<QueryOptions<FetchVehicle_LocationModelFieldsQueryVariables>, 'query'>,
      }): Promise<Vehicle_LocationModelFieldsFragment[] | null | undefined> {
        const vehicle_LocationResult = await apolloClient.query<FetchVehicle_LocationModelFieldsQuery>({ query: FetchVehicle_LocationModelFieldsDocument, ...queryOptions });
        return vehicle_LocationResult.data.vehicle_location;
      }
    

    // Insert Helper
    //

    export async function insertVehicle_LocationModelFieldsObject({
      apolloClient,
      vehicle_Location,
      onConflict,
      mutationOptions,
    } :{
      apolloClient: ApolloClient<object>,
      vehicle_Location: Vehicle_Location_Insert_Input,
      onConflict?: Vehicle_Location_On_Conflict,
      mutationOptions?: Omit<MutationOptions<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>, 'mutation' | 'variables'>,
    }): Promise<{ result: FetchResult<InsertVehicle_LocationModelFieldsMutation>; returning: Vehicle_LocationModelFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>({ 
        mutation: InsertVehicle_LocationModelFieldsDocument, 
        variables: { objects: [vehicle_Location], onConflict },
        ...mutationOptions,
      });
    
      const returning = result && result.data && result.data.insert_vehicle_location && result.data.insert_vehicle_location!.returning && result.data.insert_vehicle_location!.returning[0];
    
      return { result, returning };
    }
  

    export async function insertVehicle_LocationModelFieldsObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<InsertVehicle_LocationModelFieldsMutation>; returning: (Vehicle_LocationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>({ mutation: InsertVehicle_LocationModelFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_vehicle_location && result.data.insert_vehicle_location!.returning;
    
      return { result, returning };
    }
  

    // Update Helper
    //

    export async function updateVehicle_LocationModelFieldsObjectById({
      apolloClient,
      vehicle_LocationId,
      set,
      mutationOptions,
    }: { 
      apolloClient: ApolloClient<object>,
      vehicle_LocationId: number,
      set: Vehicle_Location_Set_Input,
      mutationOptions?: Omit<MutationOptions<UpdateVehicle_LocationModelFieldsByIdMutation, UpdateVehicle_LocationModelFieldsByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdateVehicle_LocationModelFieldsByIdMutation>; returning: Vehicle_LocationModelFieldsFragment | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicle_LocationModelFieldsByIdMutation, UpdateVehicle_LocationModelFieldsByIdMutationVariables>({ mutation: UpdateVehicle_LocationModelFieldsByIdDocument, variables: { id:vehicle_LocationId, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle_location && result.data.update_vehicle_location!.returning && result.data.update_vehicle_location!.returning[0];
    
      return { result, returning };
    }
  

    export async function updateVehicle_LocationModelFieldsObjects({
      apolloClient,
      mutationOptions,
    }: {
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<UpdateVehicle_LocationModelFieldsMutation, UpdateVehicle_LocationModelFieldsMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<UpdateVehicle_LocationModelFieldsMutation>; returning: (Vehicle_LocationModelFieldsFragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<UpdateVehicle_LocationModelFieldsMutation, UpdateVehicle_LocationModelFieldsMutationVariables>({ mutation: UpdateVehicle_LocationModelFieldsDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_vehicle_location && result.data.update_vehicle_location!.returning;
    
      return { result, returning };
    }
  

    // Delete Helper
    //

    export async function removeVehicle_LocationModelObjectById({
      apolloClient,
      vehicle_LocationId,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      vehicle_LocationId: number,
      mutationOptions?: Omit<MutationOptions<RemoveVehicle_LocationModelByIdMutation, RemoveVehicle_LocationModelByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<RemoveVehicle_LocationModelByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveVehicle_LocationModelByIdMutation, RemoveVehicle_LocationModelByIdMutationVariables>({ mutation: RemoveVehicle_LocationModelByIdDocument, variables: { id:vehicle_LocationId, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle_location && result.data.delete_vehicle_location!.affected_rows;
    
      return { result, returning };
    }
  

    export async function removeVehicle_LocationModelObjects({
      apolloClient,
      mutationOptions,
    }:{
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<RemoveVehicle_LocationModelMutation, RemoveVehicle_LocationModelMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<RemoveVehicle_LocationModelMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<RemoveVehicle_LocationModelMutation, RemoveVehicle_LocationModelMutationVariables>({ mutation: RemoveVehicle_LocationModelDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_vehicle_location && result.data.delete_vehicle_location!.affected_rows;
    
      return { result, returning };
    }
  