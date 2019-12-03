import { QueryHookOptions, useQuery, LazyQueryHookOptions, useLazyQuery, MutationHookOptions, useMutation } from '@apollo/client'
import { FetchResult } from '@apollo/client'
import { ApolloClient } from '@apollo/client'
import { FetchVehicleGraphFieldsByIdQuery } from '../';
import { FetchVehicleGraphFieldsByIdQueryVariables } from '../';
import { FetchVehicleGraphFieldsByIdDocument } from '../';
import { FetchVehicleGraphFieldsQuery } from '../';
import { FetchVehicleGraphFieldsDocument } from '../';
import { FetchVehicleGraphFieldsQueryVariables } from '../';
import { Vehicle_Insert_Input } from '../';
import { Vehicle_On_Conflict } from '../';
import { InsertVehicleGraphFieldsMutation } from '../';
import { InsertVehicleGraphFieldsMutationVariables } from '../';
import { InsertVehicleGraphFieldsDocument } from '../';
import { Vehicle_Set_Input } from '../';
import { UpdateVehicleGraphFieldsByIdMutation } from '../';
import { UpdateVehicleGraphFieldsByIdMutationVariables } from '../';
import { UpdateVehicleGraphFieldsByIdDocument } from '../';
import { UpdateVehicleGraphFieldsMutation } from '../';
import { UpdateVehicleGraphFieldsMutationVariables } from '../';
import { UpdateVehicleGraphFieldsDocument } from '../';
import { RemoveVehicleModelMutation } from '../';
import { RemoveVehicleModelMutationVariables } from '../';
import { RemoveVehicleModelDocument } from '../';
import { RemoveVehicleModelByIdMutation } from '../';
import { RemoveVehicleModelByIdMutationVariables } from '../';
import { RemoveVehicleModelByIdDocument } from '../';

    // vehicle React
    //------------------------------------------------
  

      // Fetch Hooks
      //
  
      /**
       * __useFetchVehicleGraphFieldsByIdQuery__
       *
       * To run a query within a React component, call `useVehicleGraphFieldsByIdQuery`
       * When your component renders, `useVehicleGraphFieldsByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, vehicleGraphFields } = useFetchVehicleGraphFieldsByIdQuery({ vehicleId:<value> });
       */

        // Fetch Hook
        //
        export function useFetchVehicleGraphFieldsByIdQuery({ 
          vehicleId, 
          options, 
        }: {
          vehicleId:string,
          options?: Omit<QueryHookOptions<FetchVehicleGraphFieldsByIdQuery, FetchVehicleGraphFieldsByIdQueryVariables>, 'query' | 'variables'>
        }) {
            const query = useQuery<FetchVehicleGraphFieldsByIdQuery, FetchVehicleGraphFieldsByIdQueryVariables>(FetchVehicleGraphFieldsByIdDocument, { variables: { vehicleId }, ...options });
            return { ...query, vehicleGraphFields: query && query.data && query.data.vehicle_by_pk }
        }

        // Lazy Fetch Hook
        //
        export function useFetchVehicleByIdLazyQuery({ 
          vehicleId, 
          options ,
        }: {
          vehicleId:string,
          options?: Omit<LazyQueryHookOptions<FetchVehicleGraphFieldsByIdQuery, FetchVehicleGraphFieldsByIdQueryVariables>, 'query' | 'variables'>
        }) {
          const lazyQuery = useLazyQuery<FetchVehicleGraphFieldsByIdQuery, FetchVehicleGraphFieldsByIdQueryVariables>(FetchVehicleGraphFieldsByIdDocument, { variables: { vehicleId }, ...options });
          return [lazyQuery[0], { ...lazyQuery[1], vehicleGraphFields: lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.vehicle_by_pk }]
        }
    

      // Fetch Collection Hook
      //
      export function useFetchVehicleObjectsQuery({ options } : {
        options: Omit<QueryHookOptions<FetchVehicleGraphFieldsQuery, FetchVehicleGraphFieldsQueryVariables>, 'query'>
      }) {
          const query = useQuery<FetchVehicleGraphFieldsQuery, FetchVehicleGraphFieldsQueryVariables>(FetchVehicleGraphFieldsDocument, options);
          return { ...query, objects: query && query.data && query.data.vehicle }
      }
      
      // Lazy Fetch Collection Hook
      //
      export function useFetchVehicleObjectsLazyQuery({ options } : {
        options?: Omit<LazyQueryHookOptions<FetchVehicleGraphFieldsQuery, FetchVehicleGraphFieldsQueryVariables>, 'query'>
      }) {
        const lazyQuery = useLazyQuery<FetchVehicleGraphFieldsQuery, FetchVehicleGraphFieldsQueryVariables>(FetchVehicleGraphFieldsDocument, options);
      
        return [lazyQuery[0], { ...lazyQuery[1], objects: lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.vehicle }]
      }
    

    // Insert Hooks
    //

    export async function useInsertVehicleGraphFields({
      vehicle,
      onConflict,
      options,
    } :{
      vehicle: Vehicle_Insert_Input,
      onConflict?: Vehicle_On_Conflict,
      options?: Omit<MutationHookOptions<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>( 
        InsertVehicleGraphFieldsDocument, 
        {
          variables: { objects: [vehicle], onConflict },
          ...options,
        }
      );
    
      return [lazyMutation[0], { ...lazyMutation[1], vehicleGraphFields: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning && lazyMutation[1].data.insert_vehicle!.returning[0] }]
    }
  

    export async function insertVehicleGraphFieldsObjects({
      options,
    }:{
      options: Omit<MutationHookOptions<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>(InsertVehicleGraphFieldsDocument, { ...options });
        
      return [lazyMutation[0], { ...lazyMutation[1], objects: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning }]
    }
  

    // Update Hooks
    //

    export async function updateVehicleGraphFieldsById({
      vehicleId,
      set,
      options,
    }: { 
      vehicleId: string,
      set: Vehicle_Set_Input,
      options?: Omit<MutationHookOptions<UpdateVehicleGraphFieldsByIdMutation, UpdateVehicleGraphFieldsByIdMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<UpdateVehicleGraphFieldsByIdMutation, UpdateVehicleGraphFieldsByIdMutationVariables>(UpdateVehicleGraphFieldsByIdDocument, { variables: { vehicleId, set }, ...options,});
    
      return [lazyMutation[0], { ...lazyMutation[1], vehicleGraphFields: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_vehicle && lazyMutation[1].data.update_vehicle!.returning && lazyMutation[1].data.update_vehicle!.returning[0] }]
    }
  

    export async function updateVehicleGraphFieldsObjects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationHookOptions<UpdateVehicleGraphFieldsMutation, UpdateVehicleGraphFieldsMutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<UpdateVehicleGraphFieldsMutation, UpdateVehicleGraphFieldsMutationVariables>(UpdateVehicleGraphFieldsDocument, { ...options });
    
      return [lazyMutation[0], { ...lazyMutation[1], objects: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_vehicle && lazyMutation[1].data.update_vehicle!.returning }]
    }
  

    // Delete Hooks
    //

    export async function removeVehicleModelById({
      vehicleId,
      options,
    }:{
      vehicleId: string,
      options?: Omit<MutationHookOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>(RemoveVehicleModelByIdDocument, { variables: { vehicleId }, ...options,});
        
      return [lazyMutation[0], { ...lazyMutation[1], vehicleGraphFields: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_vehicle && lazyMutation[1].data.delete_vehicle!.affected_rows }]
    }
  

    export async function removeVehicleModelObjects({
      options,
    }:{
      options: Omit<MutationHookOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>(RemoveVehicleModelDocument, { ...options });
        
      return [lazyMutation[0], { ...lazyMutation[1], objects: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_vehicle && lazyMutation[1].data.delete_vehicle!.affected_rows }]
    }
  