import { ApolloClient, QueryOptions, MutationOptions } from '@apollo/client'
import { DogsModelFieldsFragment } from '../';
import { FetchDogsModelFieldsByIdQuery } from '../';
import { FetchDogsModelFieldsByIdDocument } from '../';
import { FetchDogsModelFieldsQuery } from '../';
import { FetchDogsModelFieldsDocument } from '../';
import { FetchDogsModelFieldsQueryVariables } from '../';
import { Dogs_Insert_Input } from '../';
import { Dogs_On_Conflict } from '../';
import { InsertDogsModelFieldsMutation } from '../';
import { InsertDogsModelFieldsMutationVariables } from '../';
import { InsertDogsModelFieldsWithOnConflictMutationVariables } from '../';
import { InsertDogsModelFieldsDocument } from '../';
import { InsertDogsModelFieldsWithOnConflictDocument } from '../';
import { Dogs_Set_Input } from '../';
import { UpdateDogsModelFieldsByIdMutation } from '../';
import { UpdateDogsModelFieldsByIdMutationVariables } from '../';
import { UpdateDogsModelFieldsByIdDocument } from '../';
import { UpdateDogsModelFieldsMutation } from '../';
import { UpdateDogsModelFieldsMutationVariables } from '../';
import { UpdateDogsModelFieldsDocument } from '../';
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

    // UTILITY METHODS
    //------------------------------------------------
  

    
    // Optimistic response generation utility method
    //
    function generateOptimisticResponseForMutationById<T>(operationType: "update", entityName: string, entityId: any, setObject: object) {
      return ({
        __typename: "mutation_root",
        [`${operationType}_${entityName}`]: {
          affected_rows: 1,
          returning: [
            {
              id: entityId,
              __typename: entityName,
              ...setObject
            }
          ],
          __typename: `${entityName}_mutation_response`
        }
      } as unknown) as T;
    }
  

    // dogs HELPERS
    //------------------------------------------------

    export type DogsModelFieldsByIdQueryResultEx = { dogsModelFields:DogsModelFieldsFragment | null | undefined };
    export type DogsModelFieldsObjectsQueryResultEx = { objects:DogsModelFieldsFragment[] };
  
  

      // Fetch Helper
      //
      type FetchDogsModelFieldsByIdQueryResult = ApolloQueryResult<FetchDogsModelFieldsByIdQuery>;
      export type FetchDogsModelFieldsByIdQueryResultEx = FetchDogsModelFieldsByIdQueryResult & DogsModelFieldsByIdQueryResultEx;

      export async function fetchDogsModelFieldsById({ apolloClient, dogsId, options }: { apolloClient: ApolloClient<object>, dogsId: string, options?: Omit<QueryOptions<FetchDogsModelFieldsQueryVariables>, 'query' | 'variables'> }): Promise<FetchDogsModelFieldsByIdQueryResultEx> {
        const query: FetchDogsModelFieldsByIdQueryResult = await apolloClient.query<FetchDogsModelFieldsByIdQuery>({ query: FetchDogsModelFieldsByIdDocument, variables: { dogsId }, ...options });
        
        return { ...query, dogsModelFields: query && query.data && query.data.dogs_by_pk }
      }
    

      // Fetch Objects Helper
      //
      type FetchDogsModelFieldsObjectsQueryResult = ApolloQueryResult<FetchDogsModelFieldsQuery>;
      export type FetchDogsModelFieldsObjectsQueryResultEx = FetchDogsModelFieldsObjectsQueryResult & DogsModelFieldsObjectsQueryResultEx;

      export async function fetchDogsModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchDogsModelFieldsQueryVariables>, 'query'> }): Promise<FetchDogsModelFieldsObjectsQueryResultEx> {
        const query: FetchDogsModelFieldsObjectsQueryResult = await apolloClient.query<FetchDogsModelFieldsQuery>({ query: FetchDogsModelFieldsDocument, ...options });
        
        return { ...query, objects: (query && query.data && query.data.dogs) || [] }
      }
    

    // Insert Helper
    //
    type InsertDogsModelFieldsQueryResult = FetchResult<InsertDogsModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertDogsModelFieldsQueryResultEx = InsertDogsModelFieldsQueryResult & DogsModelFieldsByIdQueryResultEx;

    export async function insertDogsModelFields({ apolloClient, dogs, onConflict, options } :{ apolloClient: ApolloClient<object>, dogs: Dogs_Insert_Input, onConflict?: Dogs_On_Conflict, options?: Omit<MutationOptions<InsertDogsModelFieldsMutation, InsertDogsModelFieldsMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertDogsModelFieldsQueryResultEx> {
      const mutation:InsertDogsModelFieldsQueryResult = onConflict
        ? await apolloClient.mutate<InsertDogsModelFieldsMutation, InsertDogsModelFieldsWithOnConflictMutationVariables>({ mutation: InsertDogsModelFieldsWithOnConflictDocument, variables: { objects: [dogs], onConflict }, ...options })
        : await apolloClient.mutate<InsertDogsModelFieldsMutation, InsertDogsModelFieldsMutationVariables>({ mutation: InsertDogsModelFieldsDocument, variables: { objects: [dogs] }, ...options });
        
      return { ...mutation, dogsModelFields:mutation && mutation.data && mutation.data.insert_dogs && mutation.data.insert_dogs!.returning && mutation.data.insert_dogs!.returning[0] };
    }
  

    // Insert Objects Helper
    //
    type InsertDogsModelFieldsObjectsQueryResult = FetchResult<InsertDogsModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertDogsModelFieldsObjectsQueryResultEx = InsertDogsModelFieldsObjectsQueryResult & DogsModelFieldsObjectsQueryResultEx;

    export async function insertDogsModelFieldsObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertDogsModelFieldsMutation, InsertDogsModelFieldsMutationVariables>, 'mutation'> }): Promise<InsertDogsModelFieldsObjectsQueryResultEx> {
      const mutation: InsertDogsModelFieldsObjectsQueryResult = await apolloClient.mutate<InsertDogsModelFieldsMutation, InsertDogsModelFieldsMutationVariables>({ mutation: InsertDogsModelFieldsDocument, ...options });
       
      return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_dogs && mutation.data.insert_dogs!.returning) || [] };
    }
  

    // Update Helper
    //
    type UpdateDogsModelFieldsByIdQueryResult = FetchResult<UpdateDogsModelFieldsByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateDogsModelFieldsByIdQueryResultEx = UpdateDogsModelFieldsByIdQueryResult & DogsModelFieldsByIdQueryResultEx;

    export async function updateDogsModelFieldsById({ apolloClient, dogsId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, dogsId: string, set: Dogs_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateDogsModelFieldsByIdMutation, UpdateDogsModelFieldsByIdMutationVariables>, 'mutation'> }): Promise<UpdateDogsModelFieldsByIdQueryResultEx> {
      const mutationOptions:MutationOptions<UpdateDogsModelFieldsByIdMutation, UpdateDogsModelFieldsByIdMutationVariables> = { mutation: UpdateDogsModelFieldsByIdDocument, variables: { id:dogsId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateDogsModelFieldsByIdMutation>('update', 'dogs', dogsId, set); }

      const mutation:UpdateDogsModelFieldsByIdQueryResult = await apolloClient.mutate<UpdateDogsModelFieldsByIdMutation, UpdateDogsModelFieldsByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, dogsModelFields:mutation && mutation.data && mutation.data.update_dogs && mutation.data.update_dogs!.returning && mutation.data.update_dogs!.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateDogsModelFieldsObjectsQueryResult = FetchResult<UpdateDogsModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type UpdateDogsModelFieldsObjectsQueryResultEx = UpdateDogsModelFieldsObjectsQueryResult & DogsModelFieldsObjectsQueryResultEx;

    export async function updateDogsModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateDogsModelFieldsMutation, UpdateDogsModelFieldsMutationVariables>, 'mutation'> }): Promise<UpdateDogsModelFieldsObjectsQueryResultEx> {  
      const mutation:UpdateDogsModelFieldsObjectsQueryResult = await apolloClient.mutate<UpdateDogsModelFieldsMutation, UpdateDogsModelFieldsMutationVariables>({ mutation: UpdateDogsModelFieldsDocument, ...options } );
        
      return { ...mutation, objects:(mutation && mutation.data && mutation.data.update_dogs && mutation.data.update_dogs!.returning) || [] };
    }
  

    // observation HELPERS
    //------------------------------------------------

    export type ObservationModelFieldsByIdQueryResultEx = { observationModelFields:ObservationModelFieldsFragment | null | undefined };
    export type ObservationModelFieldsObjectsQueryResultEx = { objects:ObservationModelFieldsFragment[] };
  
  

      // Fetch Helper
      //
      type FetchObservationModelFieldsByIdQueryResult = ApolloQueryResult<FetchObservationModelFieldsByIdQuery>;
      export type FetchObservationModelFieldsByIdQueryResultEx = FetchObservationModelFieldsByIdQueryResult & ObservationModelFieldsByIdQueryResultEx;

      export async function fetchObservationModelFieldsById({ apolloClient, observationId, options }: { apolloClient: ApolloClient<object>, observationId: string, options?: Omit<QueryOptions<FetchObservationModelFieldsQueryVariables>, 'query' | 'variables'> }): Promise<FetchObservationModelFieldsByIdQueryResultEx> {
        const query: FetchObservationModelFieldsByIdQueryResult = await apolloClient.query<FetchObservationModelFieldsByIdQuery>({ query: FetchObservationModelFieldsByIdDocument, variables: { observationId }, ...options });
        
        return { ...query, observationModelFields: query && query.data && query.data.observation_by_pk }
      }
    

      // Fetch Objects Helper
      //
      type FetchObservationModelFieldsObjectsQueryResult = ApolloQueryResult<FetchObservationModelFieldsQuery>;
      export type FetchObservationModelFieldsObjectsQueryResultEx = FetchObservationModelFieldsObjectsQueryResult & ObservationModelFieldsObjectsQueryResultEx;

      export async function fetchObservationModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchObservationModelFieldsQueryVariables>, 'query'> }): Promise<FetchObservationModelFieldsObjectsQueryResultEx> {
        const query: FetchObservationModelFieldsObjectsQueryResult = await apolloClient.query<FetchObservationModelFieldsQuery>({ query: FetchObservationModelFieldsDocument, ...options });
        
        return { ...query, objects: (query && query.data && query.data.observation) || [] }
      }
    

    // Insert Helper
    //
    type InsertObservationModelFieldsQueryResult = FetchResult<InsertObservationModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertObservationModelFieldsQueryResultEx = InsertObservationModelFieldsQueryResult & ObservationModelFieldsByIdQueryResultEx;

    export async function insertObservationModelFields({ apolloClient, observation, onConflict, options } :{ apolloClient: ApolloClient<object>, observation: Observation_Insert_Input, onConflict?: Observation_On_Conflict, options?: Omit<MutationOptions<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertObservationModelFieldsQueryResultEx> {
      const mutation:InsertObservationModelFieldsQueryResult = onConflict
        ? await apolloClient.mutate<InsertObservationModelFieldsMutation, InsertObservationModelFieldsWithOnConflictMutationVariables>({ mutation: InsertObservationModelFieldsWithOnConflictDocument, variables: { objects: [observation], onConflict }, ...options })
        : await apolloClient.mutate<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>({ mutation: InsertObservationModelFieldsDocument, variables: { objects: [observation] }, ...options });
        
      return { ...mutation, observationModelFields:mutation && mutation.data && mutation.data.insert_observation && mutation.data.insert_observation!.returning && mutation.data.insert_observation!.returning[0] };
    }
  

    // Insert Objects Helper
    //
    type InsertObservationModelFieldsObjectsQueryResult = FetchResult<InsertObservationModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertObservationModelFieldsObjectsQueryResultEx = InsertObservationModelFieldsObjectsQueryResult & ObservationModelFieldsObjectsQueryResultEx;

    export async function insertObservationModelFieldsObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>, 'mutation'> }): Promise<InsertObservationModelFieldsObjectsQueryResultEx> {
      const mutation: InsertObservationModelFieldsObjectsQueryResult = await apolloClient.mutate<InsertObservationModelFieldsMutation, InsertObservationModelFieldsMutationVariables>({ mutation: InsertObservationModelFieldsDocument, ...options });
       
      return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_observation && mutation.data.insert_observation!.returning) || [] };
    }
  

    // Update Helper
    //
    type UpdateObservationModelFieldsByIdQueryResult = FetchResult<UpdateObservationModelFieldsByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateObservationModelFieldsByIdQueryResultEx = UpdateObservationModelFieldsByIdQueryResult & ObservationModelFieldsByIdQueryResultEx;

    export async function updateObservationModelFieldsById({ apolloClient, observationId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, observationId: string, set: Observation_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateObservationModelFieldsByIdMutation, UpdateObservationModelFieldsByIdMutationVariables>, 'mutation'> }): Promise<UpdateObservationModelFieldsByIdQueryResultEx> {
      const mutationOptions:MutationOptions<UpdateObservationModelFieldsByIdMutation, UpdateObservationModelFieldsByIdMutationVariables> = { mutation: UpdateObservationModelFieldsByIdDocument, variables: { id:observationId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateObservationModelFieldsByIdMutation>('update', 'observation', observationId, set); }

      const mutation:UpdateObservationModelFieldsByIdQueryResult = await apolloClient.mutate<UpdateObservationModelFieldsByIdMutation, UpdateObservationModelFieldsByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, observationModelFields:mutation && mutation.data && mutation.data.update_observation && mutation.data.update_observation!.returning && mutation.data.update_observation!.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateObservationModelFieldsObjectsQueryResult = FetchResult<UpdateObservationModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type UpdateObservationModelFieldsObjectsQueryResultEx = UpdateObservationModelFieldsObjectsQueryResult & ObservationModelFieldsObjectsQueryResultEx;

    export async function updateObservationModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateObservationModelFieldsMutation, UpdateObservationModelFieldsMutationVariables>, 'mutation'> }): Promise<UpdateObservationModelFieldsObjectsQueryResultEx> {  
      const mutation:UpdateObservationModelFieldsObjectsQueryResult = await apolloClient.mutate<UpdateObservationModelFieldsMutation, UpdateObservationModelFieldsMutationVariables>({ mutation: UpdateObservationModelFieldsDocument, ...options } );
        
      return { ...mutation, objects:(mutation && mutation.data && mutation.data.update_observation && mutation.data.update_observation!.returning) || [] };
    }
  

    // p HELPERS
    //------------------------------------------------

    export type PModelFieldsByIdQueryResultEx = { pmodelFields:PModelFieldsFragment | null | undefined };
    export type PModelFieldsObjectsQueryResultEx = { objects:PModelFieldsFragment[] };
  
  

      // Fetch Helper
      //
      type FetchPModelFieldsByIdQueryResult = ApolloQueryResult<FetchPModelFieldsByIdQuery>;
      export type FetchPModelFieldsByIdQueryResultEx = FetchPModelFieldsByIdQueryResult & PModelFieldsByIdQueryResultEx;

      export async function fetchPModelFieldsById({ apolloClient, pId, options }: { apolloClient: ApolloClient<object>, pId: string, options?: Omit<QueryOptions<FetchPModelFieldsQueryVariables>, 'query' | 'variables'> }): Promise<FetchPModelFieldsByIdQueryResultEx> {
        const query: FetchPModelFieldsByIdQueryResult = await apolloClient.query<FetchPModelFieldsByIdQuery>({ query: FetchPModelFieldsByIdDocument, variables: { pId }, ...options });
        
        return { ...query, pmodelFields: query && query.data && query.data.p_by_pk }
      }
    

      // Fetch Objects Helper
      //
      type FetchPModelFieldsObjectsQueryResult = ApolloQueryResult<FetchPModelFieldsQuery>;
      export type FetchPModelFieldsObjectsQueryResultEx = FetchPModelFieldsObjectsQueryResult & PModelFieldsObjectsQueryResultEx;

      export async function fetchPModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchPModelFieldsQueryVariables>, 'query'> }): Promise<FetchPModelFieldsObjectsQueryResultEx> {
        const query: FetchPModelFieldsObjectsQueryResult = await apolloClient.query<FetchPModelFieldsQuery>({ query: FetchPModelFieldsDocument, ...options });
        
        return { ...query, objects: (query && query.data && query.data.p) || [] }
      }
    

    // Insert Helper
    //
    type InsertPModelFieldsQueryResult = FetchResult<InsertPModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertPModelFieldsQueryResultEx = InsertPModelFieldsQueryResult & PModelFieldsByIdQueryResultEx;

    export async function insertPModelFields({ apolloClient, p, onConflict, options } :{ apolloClient: ApolloClient<object>, p: P_Insert_Input, onConflict?: P_On_Conflict, options?: Omit<MutationOptions<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertPModelFieldsQueryResultEx> {
      const mutation:InsertPModelFieldsQueryResult = onConflict
        ? await apolloClient.mutate<InsertPModelFieldsMutation, InsertPModelFieldsWithOnConflictMutationVariables>({ mutation: InsertPModelFieldsWithOnConflictDocument, variables: { objects: [p], onConflict }, ...options })
        : await apolloClient.mutate<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>({ mutation: InsertPModelFieldsDocument, variables: { objects: [p] }, ...options });
        
      return { ...mutation, pmodelFields:mutation && mutation.data && mutation.data.insert_p && mutation.data.insert_p!.returning && mutation.data.insert_p!.returning[0] };
    }
  

    // Insert Objects Helper
    //
    type InsertPModelFieldsObjectsQueryResult = FetchResult<InsertPModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertPModelFieldsObjectsQueryResultEx = InsertPModelFieldsObjectsQueryResult & PModelFieldsObjectsQueryResultEx;

    export async function insertPModelFieldsObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>, 'mutation'> }): Promise<InsertPModelFieldsObjectsQueryResultEx> {
      const mutation: InsertPModelFieldsObjectsQueryResult = await apolloClient.mutate<InsertPModelFieldsMutation, InsertPModelFieldsMutationVariables>({ mutation: InsertPModelFieldsDocument, ...options });
       
      return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_p && mutation.data.insert_p!.returning) || [] };
    }
  

    // Update Helper
    //
    type UpdatePModelFieldsByIdQueryResult = FetchResult<UpdatePModelFieldsByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdatePModelFieldsByIdQueryResultEx = UpdatePModelFieldsByIdQueryResult & PModelFieldsByIdQueryResultEx;

    export async function updatePModelFieldsById({ apolloClient, pId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, pId: number, set: P_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdatePModelFieldsByIdMutation, UpdatePModelFieldsByIdMutationVariables>, 'mutation'> }): Promise<UpdatePModelFieldsByIdQueryResultEx> {
      const mutationOptions:MutationOptions<UpdatePModelFieldsByIdMutation, UpdatePModelFieldsByIdMutationVariables> = { mutation: UpdatePModelFieldsByIdDocument, variables: { id:pId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdatePModelFieldsByIdMutation>('update', 'p', pId, set); }

      const mutation:UpdatePModelFieldsByIdQueryResult = await apolloClient.mutate<UpdatePModelFieldsByIdMutation, UpdatePModelFieldsByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, pmodelFields:mutation && mutation.data && mutation.data.update_p && mutation.data.update_p!.returning && mutation.data.update_p!.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdatePModelFieldsObjectsQueryResult = FetchResult<UpdatePModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type UpdatePModelFieldsObjectsQueryResultEx = UpdatePModelFieldsObjectsQueryResult & PModelFieldsObjectsQueryResultEx;

    export async function updatePModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdatePModelFieldsMutation, UpdatePModelFieldsMutationVariables>, 'mutation'> }): Promise<UpdatePModelFieldsObjectsQueryResultEx> {  
      const mutation:UpdatePModelFieldsObjectsQueryResult = await apolloClient.mutate<UpdatePModelFieldsMutation, UpdatePModelFieldsMutationVariables>({ mutation: UpdatePModelFieldsDocument, ...options } );
        
      return { ...mutation, objects:(mutation && mutation.data && mutation.data.update_p && mutation.data.update_p!.returning) || [] };
    }
  

    // patient HELPERS
    //------------------------------------------------

    export type PatientModelFieldsByIdQueryResultEx = { patientModelFields:PatientModelFieldsFragment | null | undefined };
    export type PatientModelFieldsObjectsQueryResultEx = { objects:PatientModelFieldsFragment[] };
  
  

      // Fetch Helper
      //
      type FetchPatientModelFieldsByIdQueryResult = ApolloQueryResult<FetchPatientModelFieldsByIdQuery>;
      export type FetchPatientModelFieldsByIdQueryResultEx = FetchPatientModelFieldsByIdQueryResult & PatientModelFieldsByIdQueryResultEx;

      export async function fetchPatientModelFieldsById({ apolloClient, patientId, options }: { apolloClient: ApolloClient<object>, patientId: string, options?: Omit<QueryOptions<FetchPatientModelFieldsQueryVariables>, 'query' | 'variables'> }): Promise<FetchPatientModelFieldsByIdQueryResultEx> {
        const query: FetchPatientModelFieldsByIdQueryResult = await apolloClient.query<FetchPatientModelFieldsByIdQuery>({ query: FetchPatientModelFieldsByIdDocument, variables: { patientId }, ...options });
        
        return { ...query, patientModelFields: query && query.data && query.data.patient_by_pk }
      }
    

      // Fetch Objects Helper
      //
      type FetchPatientModelFieldsObjectsQueryResult = ApolloQueryResult<FetchPatientModelFieldsQuery>;
      export type FetchPatientModelFieldsObjectsQueryResultEx = FetchPatientModelFieldsObjectsQueryResult & PatientModelFieldsObjectsQueryResultEx;

      export async function fetchPatientModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchPatientModelFieldsQueryVariables>, 'query'> }): Promise<FetchPatientModelFieldsObjectsQueryResultEx> {
        const query: FetchPatientModelFieldsObjectsQueryResult = await apolloClient.query<FetchPatientModelFieldsQuery>({ query: FetchPatientModelFieldsDocument, ...options });
        
        return { ...query, objects: (query && query.data && query.data.patient) || [] }
      }
    

    // Insert Helper
    //
    type InsertPatientModelFieldsQueryResult = FetchResult<InsertPatientModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertPatientModelFieldsQueryResultEx = InsertPatientModelFieldsQueryResult & PatientModelFieldsByIdQueryResultEx;

    export async function insertPatientModelFields({ apolloClient, patient, onConflict, options } :{ apolloClient: ApolloClient<object>, patient: Patient_Insert_Input, onConflict?: Patient_On_Conflict, options?: Omit<MutationOptions<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertPatientModelFieldsQueryResultEx> {
      const mutation:InsertPatientModelFieldsQueryResult = onConflict
        ? await apolloClient.mutate<InsertPatientModelFieldsMutation, InsertPatientModelFieldsWithOnConflictMutationVariables>({ mutation: InsertPatientModelFieldsWithOnConflictDocument, variables: { objects: [patient], onConflict }, ...options })
        : await apolloClient.mutate<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>({ mutation: InsertPatientModelFieldsDocument, variables: { objects: [patient] }, ...options });
        
      return { ...mutation, patientModelFields:mutation && mutation.data && mutation.data.insert_patient && mutation.data.insert_patient!.returning && mutation.data.insert_patient!.returning[0] };
    }
  

    // Insert Objects Helper
    //
    type InsertPatientModelFieldsObjectsQueryResult = FetchResult<InsertPatientModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertPatientModelFieldsObjectsQueryResultEx = InsertPatientModelFieldsObjectsQueryResult & PatientModelFieldsObjectsQueryResultEx;

    export async function insertPatientModelFieldsObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>, 'mutation'> }): Promise<InsertPatientModelFieldsObjectsQueryResultEx> {
      const mutation: InsertPatientModelFieldsObjectsQueryResult = await apolloClient.mutate<InsertPatientModelFieldsMutation, InsertPatientModelFieldsMutationVariables>({ mutation: InsertPatientModelFieldsDocument, ...options });
       
      return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_patient && mutation.data.insert_patient!.returning) || [] };
    }
  

    // Update Helper
    //
    type UpdatePatientModelFieldsByIdQueryResult = FetchResult<UpdatePatientModelFieldsByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdatePatientModelFieldsByIdQueryResultEx = UpdatePatientModelFieldsByIdQueryResult & PatientModelFieldsByIdQueryResultEx;

    export async function updatePatientModelFieldsById({ apolloClient, patientId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, patientId: string, set: Patient_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdatePatientModelFieldsByIdMutation, UpdatePatientModelFieldsByIdMutationVariables>, 'mutation'> }): Promise<UpdatePatientModelFieldsByIdQueryResultEx> {
      const mutationOptions:MutationOptions<UpdatePatientModelFieldsByIdMutation, UpdatePatientModelFieldsByIdMutationVariables> = { mutation: UpdatePatientModelFieldsByIdDocument, variables: { id:patientId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdatePatientModelFieldsByIdMutation>('update', 'patient', patientId, set); }

      const mutation:UpdatePatientModelFieldsByIdQueryResult = await apolloClient.mutate<UpdatePatientModelFieldsByIdMutation, UpdatePatientModelFieldsByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, patientModelFields:mutation && mutation.data && mutation.data.update_patient && mutation.data.update_patient!.returning && mutation.data.update_patient!.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdatePatientModelFieldsObjectsQueryResult = FetchResult<UpdatePatientModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type UpdatePatientModelFieldsObjectsQueryResultEx = UpdatePatientModelFieldsObjectsQueryResult & PatientModelFieldsObjectsQueryResultEx;

    export async function updatePatientModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdatePatientModelFieldsMutation, UpdatePatientModelFieldsMutationVariables>, 'mutation'> }): Promise<UpdatePatientModelFieldsObjectsQueryResultEx> {  
      const mutation:UpdatePatientModelFieldsObjectsQueryResult = await apolloClient.mutate<UpdatePatientModelFieldsMutation, UpdatePatientModelFieldsMutationVariables>({ mutation: UpdatePatientModelFieldsDocument, ...options } );
        
      return { ...mutation, objects:(mutation && mutation.data && mutation.data.update_patient && mutation.data.update_patient!.returning) || [] };
    }
  

    // users HELPERS
    //------------------------------------------------

    export type UsersModelFieldsByIdQueryResultEx = { usersModelFields:UsersModelFieldsFragment | null | undefined };
    export type UsersModelFieldsObjectsQueryResultEx = { objects:UsersModelFieldsFragment[] };
  
  

      // Fetch Helper
      //
      type FetchUsersModelFieldsByIdQueryResult = ApolloQueryResult<FetchUsersModelFieldsByIdQuery>;
      export type FetchUsersModelFieldsByIdQueryResultEx = FetchUsersModelFieldsByIdQueryResult & UsersModelFieldsByIdQueryResultEx;

      export async function fetchUsersModelFieldsById({ apolloClient, usersId, options }: { apolloClient: ApolloClient<object>, usersId: string, options?: Omit<QueryOptions<FetchUsersModelFieldsQueryVariables>, 'query' | 'variables'> }): Promise<FetchUsersModelFieldsByIdQueryResultEx> {
        const query: FetchUsersModelFieldsByIdQueryResult = await apolloClient.query<FetchUsersModelFieldsByIdQuery>({ query: FetchUsersModelFieldsByIdDocument, variables: { usersId }, ...options });
        
        return { ...query, usersModelFields: query && query.data && query.data.users_by_pk }
      }
    

      // Fetch Objects Helper
      //
      type FetchUsersModelFieldsObjectsQueryResult = ApolloQueryResult<FetchUsersModelFieldsQuery>;
      export type FetchUsersModelFieldsObjectsQueryResultEx = FetchUsersModelFieldsObjectsQueryResult & UsersModelFieldsObjectsQueryResultEx;

      export async function fetchUsersModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchUsersModelFieldsQueryVariables>, 'query'> }): Promise<FetchUsersModelFieldsObjectsQueryResultEx> {
        const query: FetchUsersModelFieldsObjectsQueryResult = await apolloClient.query<FetchUsersModelFieldsQuery>({ query: FetchUsersModelFieldsDocument, ...options });
        
        return { ...query, objects: (query && query.data && query.data.users) || [] }
      }
    

    // Insert Helper
    //
    type InsertUsersModelFieldsQueryResult = FetchResult<InsertUsersModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertUsersModelFieldsQueryResultEx = InsertUsersModelFieldsQueryResult & UsersModelFieldsByIdQueryResultEx;

    export async function insertUsersModelFields({ apolloClient, users, onConflict, options } :{ apolloClient: ApolloClient<object>, users: Users_Insert_Input, onConflict?: Users_On_Conflict, options?: Omit<MutationOptions<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertUsersModelFieldsQueryResultEx> {
      const mutation:InsertUsersModelFieldsQueryResult = onConflict
        ? await apolloClient.mutate<InsertUsersModelFieldsMutation, InsertUsersModelFieldsWithOnConflictMutationVariables>({ mutation: InsertUsersModelFieldsWithOnConflictDocument, variables: { objects: [users], onConflict }, ...options })
        : await apolloClient.mutate<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>({ mutation: InsertUsersModelFieldsDocument, variables: { objects: [users] }, ...options });
        
      return { ...mutation, usersModelFields:mutation && mutation.data && mutation.data.insert_users && mutation.data.insert_users!.returning && mutation.data.insert_users!.returning[0] };
    }
  

    // Insert Objects Helper
    //
    type InsertUsersModelFieldsObjectsQueryResult = FetchResult<InsertUsersModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertUsersModelFieldsObjectsQueryResultEx = InsertUsersModelFieldsObjectsQueryResult & UsersModelFieldsObjectsQueryResultEx;

    export async function insertUsersModelFieldsObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>, 'mutation'> }): Promise<InsertUsersModelFieldsObjectsQueryResultEx> {
      const mutation: InsertUsersModelFieldsObjectsQueryResult = await apolloClient.mutate<InsertUsersModelFieldsMutation, InsertUsersModelFieldsMutationVariables>({ mutation: InsertUsersModelFieldsDocument, ...options });
       
      return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_users && mutation.data.insert_users!.returning) || [] };
    }
  

    // Update Helper
    //
    type UpdateUsersModelFieldsByIdQueryResult = FetchResult<UpdateUsersModelFieldsByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateUsersModelFieldsByIdQueryResultEx = UpdateUsersModelFieldsByIdQueryResult & UsersModelFieldsByIdQueryResultEx;

    export async function updateUsersModelFieldsById({ apolloClient, usersId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, usersId: number, set: Users_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateUsersModelFieldsByIdMutation, UpdateUsersModelFieldsByIdMutationVariables>, 'mutation'> }): Promise<UpdateUsersModelFieldsByIdQueryResultEx> {
      const mutationOptions:MutationOptions<UpdateUsersModelFieldsByIdMutation, UpdateUsersModelFieldsByIdMutationVariables> = { mutation: UpdateUsersModelFieldsByIdDocument, variables: { id:usersId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateUsersModelFieldsByIdMutation>('update', 'users', usersId, set); }

      const mutation:UpdateUsersModelFieldsByIdQueryResult = await apolloClient.mutate<UpdateUsersModelFieldsByIdMutation, UpdateUsersModelFieldsByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, usersModelFields:mutation && mutation.data && mutation.data.update_users && mutation.data.update_users!.returning && mutation.data.update_users!.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateUsersModelFieldsObjectsQueryResult = FetchResult<UpdateUsersModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type UpdateUsersModelFieldsObjectsQueryResultEx = UpdateUsersModelFieldsObjectsQueryResult & UsersModelFieldsObjectsQueryResultEx;

    export async function updateUsersModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateUsersModelFieldsMutation, UpdateUsersModelFieldsMutationVariables>, 'mutation'> }): Promise<UpdateUsersModelFieldsObjectsQueryResultEx> {  
      const mutation:UpdateUsersModelFieldsObjectsQueryResult = await apolloClient.mutate<UpdateUsersModelFieldsMutation, UpdateUsersModelFieldsMutationVariables>({ mutation: UpdateUsersModelFieldsDocument, ...options } );
        
      return { ...mutation, objects:(mutation && mutation.data && mutation.data.update_users && mutation.data.update_users!.returning) || [] };
    }
  

    // vehicle HELPERS
    //------------------------------------------------

    export type VehicleModelFieldsByIdQueryResultEx = { vehicleModelFields:VehicleModelFieldsFragment | null | undefined };
    export type VehicleModelFieldsObjectsQueryResultEx = { objects:VehicleModelFieldsFragment[] };
  
  

      // Fetch Helper
      //
      type FetchVehicleModelFieldsByIdQueryResult = ApolloQueryResult<FetchVehicleModelFieldsByIdQuery>;
      export type FetchVehicleModelFieldsByIdQueryResultEx = FetchVehicleModelFieldsByIdQueryResult & VehicleModelFieldsByIdQueryResultEx;

      export async function fetchVehicleModelFieldsById({ apolloClient, vehicleId, options }: { apolloClient: ApolloClient<object>, vehicleId: string, options?: Omit<QueryOptions<FetchVehicleModelFieldsQueryVariables>, 'query' | 'variables'> }): Promise<FetchVehicleModelFieldsByIdQueryResultEx> {
        const query: FetchVehicleModelFieldsByIdQueryResult = await apolloClient.query<FetchVehicleModelFieldsByIdQuery>({ query: FetchVehicleModelFieldsByIdDocument, variables: { vehicleId }, ...options });
        
        return { ...query, vehicleModelFields: query && query.data && query.data.vehicle_by_pk }
      }
    

      // Fetch Objects Helper
      //
      type FetchVehicleModelFieldsObjectsQueryResult = ApolloQueryResult<FetchVehicleModelFieldsQuery>;
      export type FetchVehicleModelFieldsObjectsQueryResultEx = FetchVehicleModelFieldsObjectsQueryResult & VehicleModelFieldsObjectsQueryResultEx;

      export async function fetchVehicleModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchVehicleModelFieldsQueryVariables>, 'query'> }): Promise<FetchVehicleModelFieldsObjectsQueryResultEx> {
        const query: FetchVehicleModelFieldsObjectsQueryResult = await apolloClient.query<FetchVehicleModelFieldsQuery>({ query: FetchVehicleModelFieldsDocument, ...options });
        
        return { ...query, objects: (query && query.data && query.data.vehicle) || [] }
      }
    

    // Insert Helper
    //
    type InsertVehicleModelFieldsQueryResult = FetchResult<InsertVehicleModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleModelFieldsQueryResultEx = InsertVehicleModelFieldsQueryResult & VehicleModelFieldsByIdQueryResultEx;

    export async function insertVehicleModelFields({ apolloClient, vehicle, onConflict, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, onConflict?: Vehicle_On_Conflict, options?: Omit<MutationOptions<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleModelFieldsQueryResultEx> {
      const mutation:InsertVehicleModelFieldsQueryResult = onConflict
        ? await apolloClient.mutate<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsWithOnConflictMutationVariables>({ mutation: InsertVehicleModelFieldsWithOnConflictDocument, variables: { objects: [vehicle], onConflict }, ...options })
        : await apolloClient.mutate<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>({ mutation: InsertVehicleModelFieldsDocument, variables: { objects: [vehicle] }, ...options });
        
      return { ...mutation, vehicleModelFields:mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning && mutation.data.insert_vehicle!.returning[0] };
    }
  

    // Insert Objects Helper
    //
    type InsertVehicleModelFieldsObjectsQueryResult = FetchResult<InsertVehicleModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleModelFieldsObjectsQueryResultEx = InsertVehicleModelFieldsObjectsQueryResult & VehicleModelFieldsObjectsQueryResultEx;

    export async function insertVehicleModelFieldsObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>, 'mutation'> }): Promise<InsertVehicleModelFieldsObjectsQueryResultEx> {
      const mutation: InsertVehicleModelFieldsObjectsQueryResult = await apolloClient.mutate<InsertVehicleModelFieldsMutation, InsertVehicleModelFieldsMutationVariables>({ mutation: InsertVehicleModelFieldsDocument, ...options });
       
      return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning) || [] };
    }
  

    // Update Helper
    //
    type UpdateVehicleModelFieldsByIdQueryResult = FetchResult<UpdateVehicleModelFieldsByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleModelFieldsByIdQueryResultEx = UpdateVehicleModelFieldsByIdQueryResult & VehicleModelFieldsByIdQueryResultEx;

    export async function updateVehicleModelFieldsById({ apolloClient, vehicleId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, vehicleId: string, set: Vehicle_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateVehicleModelFieldsByIdMutation, UpdateVehicleModelFieldsByIdMutationVariables>, 'mutation'> }): Promise<UpdateVehicleModelFieldsByIdQueryResultEx> {
      const mutationOptions:MutationOptions<UpdateVehicleModelFieldsByIdMutation, UpdateVehicleModelFieldsByIdMutationVariables> = { mutation: UpdateVehicleModelFieldsByIdDocument, variables: { id:vehicleId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateVehicleModelFieldsByIdMutation>('update', 'vehicle', vehicleId, set); }

      const mutation:UpdateVehicleModelFieldsByIdQueryResult = await apolloClient.mutate<UpdateVehicleModelFieldsByIdMutation, UpdateVehicleModelFieldsByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleModelFields:mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning && mutation.data.update_vehicle!.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateVehicleModelFieldsObjectsQueryResult = FetchResult<UpdateVehicleModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleModelFieldsObjectsQueryResultEx = UpdateVehicleModelFieldsObjectsQueryResult & VehicleModelFieldsObjectsQueryResultEx;

    export async function updateVehicleModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateVehicleModelFieldsMutation, UpdateVehicleModelFieldsMutationVariables>, 'mutation'> }): Promise<UpdateVehicleModelFieldsObjectsQueryResultEx> {  
      const mutation:UpdateVehicleModelFieldsObjectsQueryResult = await apolloClient.mutate<UpdateVehicleModelFieldsMutation, UpdateVehicleModelFieldsMutationVariables>({ mutation: UpdateVehicleModelFieldsDocument, ...options } );
        
      return { ...mutation, objects:(mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning) || [] };
    }
  

    // vehicle_location HELPERS
    //------------------------------------------------

    export type Vehicle_LocationModelFieldsByIdQueryResultEx = { vehicle_LocationModelFields:Vehicle_LocationModelFieldsFragment | null | undefined };
    export type Vehicle_LocationModelFieldsObjectsQueryResultEx = { objects:Vehicle_LocationModelFieldsFragment[] };
  
  

      // Fetch Helper
      //
      type FetchVehicle_LocationModelFieldsByIdQueryResult = ApolloQueryResult<FetchVehicle_LocationModelFieldsByIdQuery>;
      export type FetchVehicle_LocationModelFieldsByIdQueryResultEx = FetchVehicle_LocationModelFieldsByIdQueryResult & Vehicle_LocationModelFieldsByIdQueryResultEx;

      export async function fetchVehicle_LocationModelFieldsById({ apolloClient, vehicle_LocationId, options }: { apolloClient: ApolloClient<object>, vehicle_LocationId: string, options?: Omit<QueryOptions<FetchVehicle_LocationModelFieldsQueryVariables>, 'query' | 'variables'> }): Promise<FetchVehicle_LocationModelFieldsByIdQueryResultEx> {
        const query: FetchVehicle_LocationModelFieldsByIdQueryResult = await apolloClient.query<FetchVehicle_LocationModelFieldsByIdQuery>({ query: FetchVehicle_LocationModelFieldsByIdDocument, variables: { vehicle_LocationId }, ...options });
        
        return { ...query, vehicle_LocationModelFields: query && query.data && query.data.vehicle_location_by_pk }
      }
    

      // Fetch Objects Helper
      //
      type FetchVehicle_LocationModelFieldsObjectsQueryResult = ApolloQueryResult<FetchVehicle_LocationModelFieldsQuery>;
      export type FetchVehicle_LocationModelFieldsObjectsQueryResultEx = FetchVehicle_LocationModelFieldsObjectsQueryResult & Vehicle_LocationModelFieldsObjectsQueryResultEx;

      export async function fetchVehicle_LocationModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<FetchVehicle_LocationModelFieldsQueryVariables>, 'query'> }): Promise<FetchVehicle_LocationModelFieldsObjectsQueryResultEx> {
        const query: FetchVehicle_LocationModelFieldsObjectsQueryResult = await apolloClient.query<FetchVehicle_LocationModelFieldsQuery>({ query: FetchVehicle_LocationModelFieldsDocument, ...options });
        
        return { ...query, objects: (query && query.data && query.data.vehicle_location) || [] }
      }
    

    // Insert Helper
    //
    type InsertVehicle_LocationModelFieldsQueryResult = FetchResult<InsertVehicle_LocationModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicle_LocationModelFieldsQueryResultEx = InsertVehicle_LocationModelFieldsQueryResult & Vehicle_LocationModelFieldsByIdQueryResultEx;

    export async function insertVehicle_LocationModelFields({ apolloClient, vehicle_Location, onConflict, options } :{ apolloClient: ApolloClient<object>, vehicle_Location: Vehicle_Location_Insert_Input, onConflict?: Vehicle_Location_On_Conflict, options?: Omit<MutationOptions<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicle_LocationModelFieldsQueryResultEx> {
      const mutation:InsertVehicle_LocationModelFieldsQueryResult = onConflict
        ? await apolloClient.mutate<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsWithOnConflictMutationVariables>({ mutation: InsertVehicle_LocationModelFieldsWithOnConflictDocument, variables: { objects: [vehicle_Location], onConflict }, ...options })
        : await apolloClient.mutate<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>({ mutation: InsertVehicle_LocationModelFieldsDocument, variables: { objects: [vehicle_Location] }, ...options });
        
      return { ...mutation, vehicle_LocationModelFields:mutation && mutation.data && mutation.data.insert_vehicle_location && mutation.data.insert_vehicle_location!.returning && mutation.data.insert_vehicle_location!.returning[0] };
    }
  

    // Insert Objects Helper
    //
    type InsertVehicle_LocationModelFieldsObjectsQueryResult = FetchResult<InsertVehicle_LocationModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicle_LocationModelFieldsObjectsQueryResultEx = InsertVehicle_LocationModelFieldsObjectsQueryResult & Vehicle_LocationModelFieldsObjectsQueryResultEx;

    export async function insertVehicle_LocationModelFieldsObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>, 'mutation'> }): Promise<InsertVehicle_LocationModelFieldsObjectsQueryResultEx> {
      const mutation: InsertVehicle_LocationModelFieldsObjectsQueryResult = await apolloClient.mutate<InsertVehicle_LocationModelFieldsMutation, InsertVehicle_LocationModelFieldsMutationVariables>({ mutation: InsertVehicle_LocationModelFieldsDocument, ...options });
       
      return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_vehicle_location && mutation.data.insert_vehicle_location!.returning) || [] };
    }
  

    // Update Helper
    //
    type UpdateVehicle_LocationModelFieldsByIdQueryResult = FetchResult<UpdateVehicle_LocationModelFieldsByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicle_LocationModelFieldsByIdQueryResultEx = UpdateVehicle_LocationModelFieldsByIdQueryResult & Vehicle_LocationModelFieldsByIdQueryResultEx;

    export async function updateVehicle_LocationModelFieldsById({ apolloClient, vehicle_LocationId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, vehicle_LocationId: number, set: Vehicle_Location_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateVehicle_LocationModelFieldsByIdMutation, UpdateVehicle_LocationModelFieldsByIdMutationVariables>, 'mutation'> }): Promise<UpdateVehicle_LocationModelFieldsByIdQueryResultEx> {
      const mutationOptions:MutationOptions<UpdateVehicle_LocationModelFieldsByIdMutation, UpdateVehicle_LocationModelFieldsByIdMutationVariables> = { mutation: UpdateVehicle_LocationModelFieldsByIdDocument, variables: { id:vehicle_LocationId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateVehicle_LocationModelFieldsByIdMutation>('update', 'vehicle_location', vehicle_LocationId, set); }

      const mutation:UpdateVehicle_LocationModelFieldsByIdQueryResult = await apolloClient.mutate<UpdateVehicle_LocationModelFieldsByIdMutation, UpdateVehicle_LocationModelFieldsByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicle_LocationModelFields:mutation && mutation.data && mutation.data.update_vehicle_location && mutation.data.update_vehicle_location!.returning && mutation.data.update_vehicle_location!.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateVehicle_LocationModelFieldsObjectsQueryResult = FetchResult<UpdateVehicle_LocationModelFieldsMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicle_LocationModelFieldsObjectsQueryResultEx = UpdateVehicle_LocationModelFieldsObjectsQueryResult & Vehicle_LocationModelFieldsObjectsQueryResultEx;

    export async function updateVehicle_LocationModelFieldsObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateVehicle_LocationModelFieldsMutation, UpdateVehicle_LocationModelFieldsMutationVariables>, 'mutation'> }): Promise<UpdateVehicle_LocationModelFieldsObjectsQueryResultEx> {  
      const mutation:UpdateVehicle_LocationModelFieldsObjectsQueryResult = await apolloClient.mutate<UpdateVehicle_LocationModelFieldsMutation, UpdateVehicle_LocationModelFieldsMutationVariables>({ mutation: UpdateVehicle_LocationModelFieldsDocument, ...options } );
        
      return { ...mutation, objects:(mutation && mutation.data && mutation.data.update_vehicle_location && mutation.data.update_vehicle_location!.returning) || [] };
    }
  