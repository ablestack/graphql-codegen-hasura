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
  
      export async function fetchObservationModelFieldsById({
        apolloClient,
        observationId,
        options,
      }: {
        apolloClient: ApolloClient<object>, 
        observationId: string,
        options?: Omit<QueryOptions<FetchObservationModelFieldsQueryVariables>, 'query' | 'variables'>,
      }) {
        const query = await apolloClient.query<FetchObservationModelFieldsByIdQuery>({ query: FetchObservationModelFieldsByIdDocument, variables: { observationId }, ...options });
        return { ...query, observationModelFields: query && query.data && query.data.observation_by_pk }
      }
    

      export async function fetchObservationModelFieldsObjects({
        apolloClient,
        options,
      }:{
        apolloClient: ApolloClient<object>,
        options: Omit<QueryOptions<FetchObservationModelFieldsQueryVariables>, 'query'>,
      }) {
        const query = await apolloClient.query<FetchObservationModelFieldsQuery>({ query: FetchObservationModelFieldsDocument, ...options });
        return { ...query, objects: query && query.data && query.data.observation }
      }
    

    // Insert Helper
    //

    export async function insertObservationModelFieldsObject({
      apolloClient,
      observation,
      onConflict,
      options,
    } :{
      apolloClient: ApolloClient<object>,
      observation: Observation_Insert_Input,
      onConflict?: Observation_On_Conflict,
      options?: Omit<MutationOptions<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>, 'mutation' | 'variables'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>({ 
        mutation: InsertObservationModelFieldsDocument, 
        variables: { objects: [observation], onConflict },
        ...options,
      });
        
      return { ...mutation, observationModelFields:mutation && mutation.data && mutation.data.insert_observation && mutation.data.insert_observation!.returning && mutation.data.insert_observation!.returning[0] };
    }
  

    export async function insertObservationModelFieldsObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>, 'mutation'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>({ mutation: InsertObservationModelFieldsDocument, ...options,});
       
      return { ...mutation, objects: mutation && mutation.data && mutation.data.insert_observation && mutation.data.insert_observation!.returning };
    }
  

    // Update Helper
    //

    export async function updateObservationModelFieldsById({
      apolloClient,
      observationId,
      set,
      options,
    }: { 
      apolloClient: ApolloClient<object>,
      observationId: string,
      set: Observation_Set_Input,
      options?: Omit<MutationOptions<UpdateObservationModelFieldsByIdMutation, UpdateObservationModelFieldsByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<UpdateObservationModelFieldsByIdMutation, UpdateObservationModelFieldsByIdMutationVariables>({ mutation: UpdateObservationModelFieldsByIdDocument, variables: { observationId, set }, ...options,});
        
      return { ...mutation, observationModelFields:mutation && mutation.data && mutation.data.update_observation && mutation.data.update_observation!.returning && mutation.data.update_observation!.returning[0] };
    }
  

    export async function updateObservationModelFieldsObjects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<UpdateObservationModelFieldsMutation, UpdateObservationModelFieldsMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<UpdateObservationModelFieldsMutation, UpdateObservationModelFieldsMutationVariables>({ mutation: UpdateObservationModelFieldsDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_observation && mutation.data.update_observation!.returning };
    }
  

    // Delete Helper
    //

    export async function removeObservationModelById({
      apolloClient,
      observationId,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      observationId: string,
      options?: Omit<MutationOptions<RemoveObservationModelByIdMutation, RemoveObservationModelByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<RemoveObservationModelByIdMutation, RemoveObservationModelByIdMutationVariables>({ mutation: RemoveObservationModelByIdDocument, variables: { observationId, }, ...options,});
    
      return { ...mutation, observationModelFields:mutation && mutation.data && mutation.data.delete_observation && mutation.data.delete_observation!.affected_rows };
    }
  

    export async function removeObservationModelObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<RemoveObservationModelMutation, RemoveObservationModelMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<RemoveObservationModelMutation, RemoveObservationModelMutationVariables>({ mutation: RemoveObservationModelDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.delete_observation && mutation.data.delete_observation!.affected_rows };
    }
  

    // p Helpers
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchPModelFieldsById({
        apolloClient,
        pId,
        options,
      }: {
        apolloClient: ApolloClient<object>, 
        pId: string,
        options?: Omit<QueryOptions<FetchPModelFieldsQueryVariables>, 'query' | 'variables'>,
      }) {
        const query = await apolloClient.query<FetchPModelFieldsByIdQuery>({ query: FetchPModelFieldsByIdDocument, variables: { pId }, ...options });
        return { ...query, pmodelFields: query && query.data && query.data.p_by_pk }
      }
    

      export async function fetchPModelFieldsObjects({
        apolloClient,
        options,
      }:{
        apolloClient: ApolloClient<object>,
        options: Omit<QueryOptions<FetchPModelFieldsQueryVariables>, 'query'>,
      }) {
        const query = await apolloClient.query<FetchPModelFieldsQuery>({ query: FetchPModelFieldsDocument, ...options });
        return { ...query, objects: query && query.data && query.data.p }
      }
    

    // Insert Helper
    //

    export async function insertPModelFieldsObject({
      apolloClient,
      p,
      onConflict,
      options,
    } :{
      apolloClient: ApolloClient<object>,
      p: P_Insert_Input,
      onConflict?: P_On_Conflict,
      options?: Omit<MutationOptions<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>, 'mutation' | 'variables'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>({ 
        mutation: InsertPModelFieldsDocument, 
        variables: { objects: [p], onConflict },
        ...options,
      });
        
      return { ...mutation, pmodelFields:mutation && mutation.data && mutation.data.insert_p && mutation.data.insert_p!.returning && mutation.data.insert_p!.returning[0] };
    }
  

    export async function insertPModelFieldsObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>, 'mutation'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>({ mutation: InsertPModelFieldsDocument, ...options,});
       
      return { ...mutation, objects: mutation && mutation.data && mutation.data.insert_p && mutation.data.insert_p!.returning };
    }
  

    // Update Helper
    //

    export async function updatePModelFieldsById({
      apolloClient,
      pId,
      set,
      options,
    }: { 
      apolloClient: ApolloClient<object>,
      pId: number,
      set: P_Set_Input,
      options?: Omit<MutationOptions<UpdatePModelFieldsByIdMutation, UpdatePModelFieldsByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<UpdatePModelFieldsByIdMutation, UpdatePModelFieldsByIdMutationVariables>({ mutation: UpdatePModelFieldsByIdDocument, variables: { pId, set }, ...options,});
        
      return { ...mutation, pmodelFields:mutation && mutation.data && mutation.data.update_p && mutation.data.update_p!.returning && mutation.data.update_p!.returning[0] };
    }
  

    export async function updatePModelFieldsObjects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<UpdatePModelFieldsMutation, UpdatePModelFieldsMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<UpdatePModelFieldsMutation, UpdatePModelFieldsMutationVariables>({ mutation: UpdatePModelFieldsDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_p && mutation.data.update_p!.returning };
    }
  

    // Delete Helper
    //

    export async function removePModelById({
      apolloClient,
      pId,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      pId: number,
      options?: Omit<MutationOptions<RemovePModelByIdMutation, RemovePModelByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<RemovePModelByIdMutation, RemovePModelByIdMutationVariables>({ mutation: RemovePModelByIdDocument, variables: { pId, }, ...options,});
    
      return { ...mutation, pmodelFields:mutation && mutation.data && mutation.data.delete_p && mutation.data.delete_p!.affected_rows };
    }
  

    export async function removePModelObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<RemovePModelMutation, RemovePModelMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<RemovePModelMutation, RemovePModelMutationVariables>({ mutation: RemovePModelDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.delete_p && mutation.data.delete_p!.affected_rows };
    }
  

    // patient Helpers
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchPatientModelFieldsById({
        apolloClient,
        patientId,
        options,
      }: {
        apolloClient: ApolloClient<object>, 
        patientId: string,
        options?: Omit<QueryOptions<FetchPatientModelFieldsQueryVariables>, 'query' | 'variables'>,
      }) {
        const query = await apolloClient.query<FetchPatientModelFieldsByIdQuery>({ query: FetchPatientModelFieldsByIdDocument, variables: { patientId }, ...options });
        return { ...query, patientModelFields: query && query.data && query.data.patient_by_pk }
      }
    

      export async function fetchPatientModelFieldsObjects({
        apolloClient,
        options,
      }:{
        apolloClient: ApolloClient<object>,
        options: Omit<QueryOptions<FetchPatientModelFieldsQueryVariables>, 'query'>,
      }) {
        const query = await apolloClient.query<FetchPatientModelFieldsQuery>({ query: FetchPatientModelFieldsDocument, ...options });
        return { ...query, objects: query && query.data && query.data.patient }
      }
    

    // Insert Helper
    //

    export async function insertPatientModelFieldsObject({
      apolloClient,
      patient,
      onConflict,
      options,
    } :{
      apolloClient: ApolloClient<object>,
      patient: Patient_Insert_Input,
      onConflict?: Patient_On_Conflict,
      options?: Omit<MutationOptions<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>, 'mutation' | 'variables'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>({ 
        mutation: InsertPatientModelFieldsDocument, 
        variables: { objects: [patient], onConflict },
        ...options,
      });
        
      return { ...mutation, patientModelFields:mutation && mutation.data && mutation.data.insert_patient && mutation.data.insert_patient!.returning && mutation.data.insert_patient!.returning[0] };
    }
  

    export async function insertPatientModelFieldsObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>, 'mutation'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>({ mutation: InsertPatientModelFieldsDocument, ...options,});
       
      return { ...mutation, objects: mutation && mutation.data && mutation.data.insert_patient && mutation.data.insert_patient!.returning };
    }
  

    // Update Helper
    //

    export async function updatePatientModelFieldsById({
      apolloClient,
      patientId,
      set,
      options,
    }: { 
      apolloClient: ApolloClient<object>,
      patientId: string,
      set: Patient_Set_Input,
      options?: Omit<MutationOptions<UpdatePatientModelFieldsByIdMutation, UpdatePatientModelFieldsByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<UpdatePatientModelFieldsByIdMutation, UpdatePatientModelFieldsByIdMutationVariables>({ mutation: UpdatePatientModelFieldsByIdDocument, variables: { patientId, set }, ...options,});
        
      return { ...mutation, patientModelFields:mutation && mutation.data && mutation.data.update_patient && mutation.data.update_patient!.returning && mutation.data.update_patient!.returning[0] };
    }
  

    export async function updatePatientModelFieldsObjects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<UpdatePatientModelFieldsMutation, UpdatePatientModelFieldsMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<UpdatePatientModelFieldsMutation, UpdatePatientModelFieldsMutationVariables>({ mutation: UpdatePatientModelFieldsDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_patient && mutation.data.update_patient!.returning };
    }
  

    // Delete Helper
    //

    export async function removePatientModelById({
      apolloClient,
      patientId,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      patientId: string,
      options?: Omit<MutationOptions<RemovePatientModelByIdMutation, RemovePatientModelByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<RemovePatientModelByIdMutation, RemovePatientModelByIdMutationVariables>({ mutation: RemovePatientModelByIdDocument, variables: { patientId, }, ...options,});
    
      return { ...mutation, patientModelFields:mutation && mutation.data && mutation.data.delete_patient && mutation.data.delete_patient!.affected_rows };
    }
  

    export async function removePatientModelObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<RemovePatientModelMutation, RemovePatientModelMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<RemovePatientModelMutation, RemovePatientModelMutationVariables>({ mutation: RemovePatientModelDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.delete_patient && mutation.data.delete_patient!.affected_rows };
    }
  

    // users Helpers
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchUsersModelFieldsById({
        apolloClient,
        usersId,
        options,
      }: {
        apolloClient: ApolloClient<object>, 
        usersId: string,
        options?: Omit<QueryOptions<FetchUsersModelFieldsQueryVariables>, 'query' | 'variables'>,
      }) {
        const query = await apolloClient.query<FetchUsersModelFieldsByIdQuery>({ query: FetchUsersModelFieldsByIdDocument, variables: { usersId }, ...options });
        return { ...query, usersModelFields: query && query.data && query.data.users_by_pk }
      }
    

      export async function fetchUsersModelFieldsObjects({
        apolloClient,
        options,
      }:{
        apolloClient: ApolloClient<object>,
        options: Omit<QueryOptions<FetchUsersModelFieldsQueryVariables>, 'query'>,
      }) {
        const query = await apolloClient.query<FetchUsersModelFieldsQuery>({ query: FetchUsersModelFieldsDocument, ...options });
        return { ...query, objects: query && query.data && query.data.users }
      }
    

    // Insert Helper
    //

    export async function insertUsersModelFieldsObject({
      apolloClient,
      users,
      onConflict,
      options,
    } :{
      apolloClient: ApolloClient<object>,
      users: Users_Insert_Input,
      onConflict?: Users_On_Conflict,
      options?: Omit<MutationOptions<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>, 'mutation' | 'variables'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>({ 
        mutation: InsertUsersModelFieldsDocument, 
        variables: { objects: [users], onConflict },
        ...options,
      });
        
      return { ...mutation, usersModelFields:mutation && mutation.data && mutation.data.insert_users && mutation.data.insert_users!.returning && mutation.data.insert_users!.returning[0] };
    }
  

    export async function insertUsersModelFieldsObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>, 'mutation'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>({ mutation: InsertUsersModelFieldsDocument, ...options,});
       
      return { ...mutation, objects: mutation && mutation.data && mutation.data.insert_users && mutation.data.insert_users!.returning };
    }
  

    // Update Helper
    //

    export async function updateUsersModelFieldsById({
      apolloClient,
      usersId,
      set,
      options,
    }: { 
      apolloClient: ApolloClient<object>,
      usersId: number,
      set: Users_Set_Input,
      options?: Omit<MutationOptions<UpdateUsersModelFieldsByIdMutation, UpdateUsersModelFieldsByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<UpdateUsersModelFieldsByIdMutation, UpdateUsersModelFieldsByIdMutationVariables>({ mutation: UpdateUsersModelFieldsByIdDocument, variables: { usersId, set }, ...options,});
        
      return { ...mutation, usersModelFields:mutation && mutation.data && mutation.data.update_users && mutation.data.update_users!.returning && mutation.data.update_users!.returning[0] };
    }
  

    export async function updateUsersModelFieldsObjects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<UpdateUsersModelFieldsMutation, UpdateUsersModelFieldsMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<UpdateUsersModelFieldsMutation, UpdateUsersModelFieldsMutationVariables>({ mutation: UpdateUsersModelFieldsDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_users && mutation.data.update_users!.returning };
    }
  

    // Delete Helper
    //

    export async function removeUsersModelById({
      apolloClient,
      usersId,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      usersId: number,
      options?: Omit<MutationOptions<RemoveUsersModelByIdMutation, RemoveUsersModelByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<RemoveUsersModelByIdMutation, RemoveUsersModelByIdMutationVariables>({ mutation: RemoveUsersModelByIdDocument, variables: { usersId, }, ...options,});
    
      return { ...mutation, usersModelFields:mutation && mutation.data && mutation.data.delete_users && mutation.data.delete_users!.affected_rows };
    }
  

    export async function removeUsersModelObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<RemoveUsersModelMutation, RemoveUsersModelMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<RemoveUsersModelMutation, RemoveUsersModelMutationVariables>({ mutation: RemoveUsersModelDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.delete_users && mutation.data.delete_users!.affected_rows };
    }
  

    // vehicle Helpers
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchVehicleModelFieldsById({
        apolloClient,
        vehicleId,
        options,
      }: {
        apolloClient: ApolloClient<object>, 
        vehicleId: string,
        options?: Omit<QueryOptions<FetchVehicleModelFieldsQueryVariables>, 'query' | 'variables'>,
      }) {
        const query = await apolloClient.query<FetchVehicleModelFieldsByIdQuery>({ query: FetchVehicleModelFieldsByIdDocument, variables: { vehicleId }, ...options });
        return { ...query, vehicleModelFields: query && query.data && query.data.vehicle_by_pk }
      }
    

      export async function fetchVehicleModelFieldsObjects({
        apolloClient,
        options,
      }:{
        apolloClient: ApolloClient<object>,
        options: Omit<QueryOptions<FetchVehicleModelFieldsQueryVariables>, 'query'>,
      }) {
        const query = await apolloClient.query<FetchVehicleModelFieldsQuery>({ query: FetchVehicleModelFieldsDocument, ...options });
        return { ...query, objects: query && query.data && query.data.vehicle }
      }
    

    // Insert Helper
    //

    export async function insertVehicleModelFieldsObject({
      apolloClient,
      vehicle,
      onConflict,
      options,
    } :{
      apolloClient: ApolloClient<object>,
      vehicle: Vehicle_Insert_Input,
      onConflict?: Vehicle_On_Conflict,
      options?: Omit<MutationOptions<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>, 'mutation' | 'variables'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>({ 
        mutation: InsertVehicleModelFieldsDocument, 
        variables: { objects: [vehicle], onConflict },
        ...options,
      });
        
      return { ...mutation, vehicleModelFields:mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning && mutation.data.insert_vehicle!.returning[0] };
    }
  

    export async function insertVehicleModelFieldsObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>, 'mutation'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>({ mutation: InsertVehicleModelFieldsDocument, ...options,});
       
      return { ...mutation, objects: mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning };
    }
  

    // Update Helper
    //

    export async function updateVehicleModelFieldsById({
      apolloClient,
      vehicleId,
      set,
      options,
    }: { 
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      set: Vehicle_Set_Input,
      options?: Omit<MutationOptions<UpdateVehicleModelFieldsByIdMutation, UpdateVehicleModelFieldsByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<UpdateVehicleModelFieldsByIdMutation, UpdateVehicleModelFieldsByIdMutationVariables>({ mutation: UpdateVehicleModelFieldsByIdDocument, variables: { vehicleId, set }, ...options,});
        
      return { ...mutation, vehicleModelFields:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning && mutation.data.update_vehicle!.returning[0] };
    }
  

    export async function updateVehicleModelFieldsObjects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<UpdateVehicleModelFieldsMutation, UpdateVehicleModelFieldsMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<UpdateVehicleModelFieldsMutation, UpdateVehicleModelFieldsMutationVariables>({ mutation: UpdateVehicleModelFieldsDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning };
    }
  

    // Delete Helper
    //

    export async function removeVehicleModelById({
      apolloClient,
      vehicleId,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      vehicleId: string,
      options?: Omit<MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>({ mutation: RemoveVehicleModelByIdDocument, variables: { vehicleId, }, ...options,});
    
      return { ...mutation, vehicleModelFields:mutation && mutation.data && mutation.data.delete_vehicle && mutation.data.delete_vehicle!.affected_rows };
    }
  

    export async function removeVehicleModelObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>({ mutation: RemoveVehicleModelDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.delete_vehicle && mutation.data.delete_vehicle!.affected_rows };
    }
  

    // vehicle_location Helpers
    //------------------------------------------------
  

      // Fetch Helper
      //
  
      export async function fetchVehicle_LocationModelFieldsById({
        apolloClient,
        vehicle_LocationId,
        options,
      }: {
        apolloClient: ApolloClient<object>, 
        vehicle_LocationId: string,
        options?: Omit<QueryOptions<FetchVehicle_LocationModelFieldsQueryVariables>, 'query' | 'variables'>,
      }) {
        const query = await apolloClient.query<FetchVehicle_LocationModelFieldsByIdQuery>({ query: FetchVehicle_LocationModelFieldsByIdDocument, variables: { vehicle_LocationId }, ...options });
        return { ...query, vehicle_LocationModelFields: query && query.data && query.data.vehicle_location_by_pk }
      }
    

      export async function fetchVehicle_LocationModelFieldsObjects({
        apolloClient,
        options,
      }:{
        apolloClient: ApolloClient<object>,
        options: Omit<QueryOptions<FetchVehicle_LocationModelFieldsQueryVariables>, 'query'>,
      }) {
        const query = await apolloClient.query<FetchVehicle_LocationModelFieldsQuery>({ query: FetchVehicle_LocationModelFieldsDocument, ...options });
        return { ...query, objects: query && query.data && query.data.vehicle_location }
      }
    

    // Insert Helper
    //

    export async function insertVehicle_LocationModelFieldsObject({
      apolloClient,
      vehicle_Location,
      onConflict,
      options,
    } :{
      apolloClient: ApolloClient<object>,
      vehicle_Location: Vehicle_Location_Insert_Input,
      onConflict?: Vehicle_Location_On_Conflict,
      options?: Omit<MutationOptions<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>, 'mutation' | 'variables'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>({ 
        mutation: InsertVehicle_LocationModelFieldsDocument, 
        variables: { objects: [vehicle_Location], onConflict },
        ...options,
      });
        
      return { ...mutation, vehicle_LocationModelFields:mutation && mutation.data && mutation.data.insert_vehicle_location && mutation.data.insert_vehicle_location!.returning && mutation.data.insert_vehicle_location!.returning[0] };
    }
  

    export async function insertVehicle_LocationModelFieldsObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>, 'mutation'>,
    }) {
      
      const mutation = await apolloClient.mutate<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>({ mutation: InsertVehicle_LocationModelFieldsDocument, ...options,});
       
      return { ...mutation, objects: mutation && mutation.data && mutation.data.insert_vehicle_location && mutation.data.insert_vehicle_location!.returning };
    }
  

    // Update Helper
    //

    export async function updateVehicle_LocationModelFieldsById({
      apolloClient,
      vehicle_LocationId,
      set,
      options,
    }: { 
      apolloClient: ApolloClient<object>,
      vehicle_LocationId: number,
      set: Vehicle_Location_Set_Input,
      options?: Omit<MutationOptions<UpdateVehicle_LocationModelFieldsByIdMutation, UpdateVehicle_LocationModelFieldsByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<UpdateVehicle_LocationModelFieldsByIdMutation, UpdateVehicle_LocationModelFieldsByIdMutationVariables>({ mutation: UpdateVehicle_LocationModelFieldsByIdDocument, variables: { vehicle_LocationId, set }, ...options,});
        
      return { ...mutation, vehicle_LocationModelFields:mutation && mutation.data && mutation.data.update_vehicle_location && mutation.data.update_vehicle_location!.returning && mutation.data.update_vehicle_location!.returning[0] };
    }
  

    export async function updateVehicle_LocationModelFieldsObjects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<UpdateVehicle_LocationModelFieldsMutation, UpdateVehicle_LocationModelFieldsMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<UpdateVehicle_LocationModelFieldsMutation, UpdateVehicle_LocationModelFieldsMutationVariables>({ mutation: UpdateVehicle_LocationModelFieldsDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_vehicle_location && mutation.data.update_vehicle_location!.returning };
    }
  

    // Delete Helper
    //

    export async function removeVehicle_LocationModelById({
      apolloClient,
      vehicle_LocationId,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      vehicle_LocationId: number,
      options?: Omit<MutationOptions<RemoveVehicle_LocationModelByIdMutation, RemoveVehicle_LocationModelByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<RemoveVehicle_LocationModelByIdMutation, RemoveVehicle_LocationModelByIdMutationVariables>({ mutation: RemoveVehicle_LocationModelByIdDocument, variables: { vehicle_LocationId, }, ...options,});
    
      return { ...mutation, vehicle_LocationModelFields:mutation && mutation.data && mutation.data.delete_vehicle_location && mutation.data.delete_vehicle_location!.affected_rows };
    }
  

    export async function removeVehicle_LocationModelObjects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<RemoveVehicle_LocationModelMutation, RemoveVehicle_LocationModelMutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<RemoveVehicle_LocationModelMutation, RemoveVehicle_LocationModelMutationVariables>({ mutation: RemoveVehicle_LocationModelDocument, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.delete_vehicle_location && mutation.data.delete_vehicle_location!.affected_rows };
    }
  