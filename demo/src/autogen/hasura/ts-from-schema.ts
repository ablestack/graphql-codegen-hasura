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
import { InsertObservationModelFieldsWithOnConflictMutationVariables } from '../';
import { InsertObservationModelFieldsDocument } from '../';
import { InsertObservationModelFieldsWithOnConflictDocument } from '../';
import { Observation_Set_Input } from '../';
import { UpdateObservationModelFieldsByIdMutation } from '../';
import { UpdateObservationModelFieldsByIdMutationVariables } from '../';
import { UpdateObservationModelFieldsByIdDocument } from '../';
import { UpdateObservationModelFieldsMutation } from '../';
import { UpdateObservationModelFieldsMutationVariables } from '../';
import { UpdateObservationModelFieldsDocument } from '../';
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
import { InsertPModelFieldsWithOnConflictMutationVariables } from '../';
import { InsertPModelFieldsDocument } from '../';
import { InsertPModelFieldsWithOnConflictDocument } from '../';
import { P_Set_Input } from '../';
import { UpdatePModelFieldsByIdMutation } from '../';
import { UpdatePModelFieldsByIdMutationVariables } from '../';
import { UpdatePModelFieldsByIdDocument } from '../';
import { UpdatePModelFieldsMutation } from '../';
import { UpdatePModelFieldsMutationVariables } from '../';
import { UpdatePModelFieldsDocument } from '../';
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
import { InsertPatientModelFieldsWithOnConflictMutationVariables } from '../';
import { InsertPatientModelFieldsDocument } from '../';
import { InsertPatientModelFieldsWithOnConflictDocument } from '../';
import { Patient_Set_Input } from '../';
import { UpdatePatientModelFieldsByIdMutation } from '../';
import { UpdatePatientModelFieldsByIdMutationVariables } from '../';
import { UpdatePatientModelFieldsByIdDocument } from '../';
import { UpdatePatientModelFieldsMutation } from '../';
import { UpdatePatientModelFieldsMutationVariables } from '../';
import { UpdatePatientModelFieldsDocument } from '../';
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
import { InsertUsersModelFieldsWithOnConflictMutationVariables } from '../';
import { InsertUsersModelFieldsDocument } from '../';
import { InsertUsersModelFieldsWithOnConflictDocument } from '../';
import { Users_Set_Input } from '../';
import { UpdateUsersModelFieldsByIdMutation } from '../';
import { UpdateUsersModelFieldsByIdMutationVariables } from '../';
import { UpdateUsersModelFieldsByIdDocument } from '../';
import { UpdateUsersModelFieldsMutation } from '../';
import { UpdateUsersModelFieldsMutationVariables } from '../';
import { UpdateUsersModelFieldsDocument } from '../';
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
import { InsertVehicleModelFieldsWithOnConflictMutationVariables } from '../';
import { InsertVehicleModelFieldsDocument } from '../';
import { InsertVehicleModelFieldsWithOnConflictDocument } from '../';
import { Vehicle_Set_Input } from '../';
import { UpdateVehicleModelFieldsByIdMutation } from '../';
import { UpdateVehicleModelFieldsByIdMutationVariables } from '../';
import { UpdateVehicleModelFieldsByIdDocument } from '../';
import { UpdateVehicleModelFieldsMutation } from '../';
import { UpdateVehicleModelFieldsMutationVariables } from '../';
import { UpdateVehicleModelFieldsDocument } from '../';
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
import { InsertVehicle_LocationModelFieldsWithOnConflictMutationVariables } from '../';
import { InsertVehicle_LocationModelFieldsDocument } from '../';
import { InsertVehicle_LocationModelFieldsWithOnConflictDocument } from '../';
import { Vehicle_Location_Set_Input } from '../';
import { UpdateVehicle_LocationModelFieldsByIdMutation } from '../';
import { UpdateVehicle_LocationModelFieldsByIdMutationVariables } from '../';
import { UpdateVehicle_LocationModelFieldsByIdDocument } from '../';
import { UpdateVehicle_LocationModelFieldsMutation } from '../';
import { UpdateVehicle_LocationModelFieldsMutationVariables } from '../';
import { UpdateVehicle_LocationModelFieldsDocument } from '../';

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

    export async function insertObservationModelFields({
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
      
      const mutation = onConflict
        ? await apolloClient.mutate<InsertObservationModelFieldsMutation, InsertObservationModelFieldsWithOnConflictMutationVariables>({ 
          mutation: InsertObservationModelFieldsWithOnConflictDocument, 
          variables: { objects: [observation], onConflict },
            ...options,
          })
        : await apolloClient.mutate<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>({ 
          mutation: InsertObservationModelFieldsDocument, 
          variables: { objects: [observation] },
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
      const mutation = await apolloClient.mutate<UpdateObservationModelFieldsByIdMutation, UpdateObservationModelFieldsByIdMutationVariables>({ mutation: UpdateObservationModelFieldsByIdDocument, variables: { id:observationId, set }, ...options,});
        
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

    export async function insertPModelFields({
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
      
      const mutation = onConflict
        ? await apolloClient.mutate<InsertPModelFieldsMutation, InsertPModelFieldsWithOnConflictMutationVariables>({ 
          mutation: InsertPModelFieldsWithOnConflictDocument, 
          variables: { objects: [p], onConflict },
            ...options,
          })
        : await apolloClient.mutate<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>({ 
          mutation: InsertPModelFieldsDocument, 
          variables: { objects: [p] },
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
      const mutation = await apolloClient.mutate<UpdatePModelFieldsByIdMutation, UpdatePModelFieldsByIdMutationVariables>({ mutation: UpdatePModelFieldsByIdDocument, variables: { id:pId, set }, ...options,});
        
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

    export async function insertPatientModelFields({
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
      
      const mutation = onConflict
        ? await apolloClient.mutate<InsertPatientModelFieldsMutation, InsertPatientModelFieldsWithOnConflictMutationVariables>({ 
          mutation: InsertPatientModelFieldsWithOnConflictDocument, 
          variables: { objects: [patient], onConflict },
            ...options,
          })
        : await apolloClient.mutate<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>({ 
          mutation: InsertPatientModelFieldsDocument, 
          variables: { objects: [patient] },
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
      const mutation = await apolloClient.mutate<UpdatePatientModelFieldsByIdMutation, UpdatePatientModelFieldsByIdMutationVariables>({ mutation: UpdatePatientModelFieldsByIdDocument, variables: { id:patientId, set }, ...options,});
        
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

    export async function insertUsersModelFields({
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
      
      const mutation = onConflict
        ? await apolloClient.mutate<InsertUsersModelFieldsMutation, InsertUsersModelFieldsWithOnConflictMutationVariables>({ 
          mutation: InsertUsersModelFieldsWithOnConflictDocument, 
          variables: { objects: [users], onConflict },
            ...options,
          })
        : await apolloClient.mutate<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>({ 
          mutation: InsertUsersModelFieldsDocument, 
          variables: { objects: [users] },
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
      const mutation = await apolloClient.mutate<UpdateUsersModelFieldsByIdMutation, UpdateUsersModelFieldsByIdMutationVariables>({ mutation: UpdateUsersModelFieldsByIdDocument, variables: { id:usersId, set }, ...options,});
        
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

    export async function insertVehicleModelFields({
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
      
      const mutation = onConflict
        ? await apolloClient.mutate<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsWithOnConflictMutationVariables>({ 
          mutation: InsertVehicleModelFieldsWithOnConflictDocument, 
          variables: { objects: [vehicle], onConflict },
            ...options,
          })
        : await apolloClient.mutate<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>({ 
          mutation: InsertVehicleModelFieldsDocument, 
          variables: { objects: [vehicle] },
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
      const mutation = await apolloClient.mutate<UpdateVehicleModelFieldsByIdMutation, UpdateVehicleModelFieldsByIdMutationVariables>({ mutation: UpdateVehicleModelFieldsByIdDocument, variables: { id:vehicleId, set }, ...options,});
        
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

    export async function insertVehicle_LocationModelFields({
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
      
      const mutation = onConflict
        ? await apolloClient.mutate<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsWithOnConflictMutationVariables>({ 
          mutation: InsertVehicle_LocationModelFieldsWithOnConflictDocument, 
          variables: { objects: [vehicle_Location], onConflict },
            ...options,
          })
        : await apolloClient.mutate<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>({ 
          mutation: InsertVehicle_LocationModelFieldsDocument, 
          variables: { objects: [vehicle_Location] },
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
      const mutation = await apolloClient.mutate<UpdateVehicle_LocationModelFieldsByIdMutation, UpdateVehicle_LocationModelFieldsByIdMutationVariables>({ mutation: UpdateVehicle_LocationModelFieldsByIdDocument, variables: { id:vehicle_LocationId, set }, ...options,});
        
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
  