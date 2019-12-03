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
       * __useFetchVehicleGraphFieldsObjectByIdQuery__
       *
       * To run a query within a React component, call `useVehicleGraphFieldsObjectByIdQuery`
       * When your component renders, `useVehicleGraphFieldsObjectByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param queryHookOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { result, loading, error } = useFetchVehicleGraphFieldsObjectByIdQuery({ vehicleId:<value> });
       */

        // Fetch Hook
        //
        export function useFetchVehicleGraphFieldsObjectByIdQuery({ 
          vehicleId, 
          queryHookOptions, 
        }: {
          vehicleId:string,
          queryHookOptions?: Omit<QueryHookOptions<FetchVehicleGraphFieldsByIdQuery, FetchVehicleGraphFieldsByIdQueryVariables>, 'query' | 'variables'>
        }) {
            const query = useQuery<FetchVehicleGraphFieldsByIdQuery, FetchVehicleGraphFieldsByIdQueryVariables>(FetchVehicleGraphFieldsByIdDocument, { variables: { vehicleId }, ...queryHookOptions });
            return { ...query, returning: query && query.data && query.data.vehicle_by_pk }
        }

        // Lazy Fetch Hook
        //
        export function useFetchVehicleObjectByIdLazyQuery({ 
          vehicleId, 
          queryHookOptions ,
        }: {
          vehicleId:string,
          queryHookOptions?: Omit<LazyQueryHookOptions<FetchVehicleGraphFieldsByIdQuery, FetchVehicleGraphFieldsByIdQueryVariables>, 'query' | 'variables'>
        }) {
          const lazyQuery = useLazyQuery<FetchVehicleGraphFieldsByIdQuery, FetchVehicleGraphFieldsByIdQueryVariables>(FetchVehicleGraphFieldsByIdDocument, { variables: { vehicleId }, ...queryHookOptions });

          return [lazyQuery[0], { ...lazyQuery[1], returning: lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.vehicle_by_pk }]
        }
    

      // Fetch Collection Hook
      //
      export function useFetchVehicleObjectsQuery({ queryHookOptions } : {
        queryHookOptions: Omit<QueryHookOptions<FetchVehicleGraphFieldsQuery, FetchVehicleGraphFieldsQueryVariables>, 'query'>
      }) {
          const query = useQuery<FetchVehicleGraphFieldsQuery, FetchVehicleGraphFieldsQueryVariables>(FetchVehicleGraphFieldsDocument, queryHookOptions);
          return { ...query, returning: query && query.data && query.data.vehicle }
      }
      
      // Lazy Fetch Collection Hook
      //
      export function useFetchVehicleObjectsLazyQuery({ queryHookOptions } : {
        queryHookOptions?: Omit<LazyQueryHookOptions<FetchVehicleGraphFieldsQuery, FetchVehicleGraphFieldsQueryVariables>, 'query'>
      }) {
        const lazyQuery = useLazyQuery<FetchVehicleGraphFieldsQuery, FetchVehicleGraphFieldsQueryVariables>(FetchVehicleGraphFieldsDocument, queryHookOptions);
      
        return [lazyQuery[0], { ...lazyQuery[1], returning: lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.vehicle }]
      }
    

    // Insert Hooks
    //

    export async function useInsertVehicleGraphFieldsObject({
      vehicle,
      onConflict,
      mutationHookOptions,
    } :{
      vehicle: Vehicle_Insert_Input,
      onConflict?: Vehicle_On_Conflict,
      mutationHookOptions?: Omit<MutationHookOptions<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>( 
        InsertVehicleGraphFieldsDocument, 
        {
          variables: { objects: [vehicle], onConflict },
          ...mutationHookOptions,
        }
      );
    
      return [lazyMutation[0], { ...lazyMutation[1], returning: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning && lazyMutation[1].data.insert_vehicle!.returning[0] }]
    }
  

    export async function insertVehicleGraphFieldsObjects({
      mutationHookOptions,
    }:{
      mutationHookOptions: Omit<MutationHookOptions<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<InsertVehicleGraphFieldsMutation, InsertVehicleGraphFieldsMutationVariables>(InsertVehicleGraphFieldsDocument, { ...mutationHookOptions });
        
      return [lazyMutation[0], { ...lazyMutation[1], returning: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning }]
    }
  

    // Update Hooks
    //

    export async function updateVehicleGraphFieldsObjectById({
      vehicleId,
      set,
      mutationHookOptions,
    }: { 
      vehicleId: string,
      set: Vehicle_Set_Input,
      mutationHookOptions?: Omit<MutationHookOptions<UpdateVehicleGraphFieldsByIdMutation, UpdateVehicleGraphFieldsByIdMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<UpdateVehicleGraphFieldsByIdMutation, UpdateVehicleGraphFieldsByIdMutationVariables>(UpdateVehicleGraphFieldsByIdDocument, { variables: { id:vehicleId, set }, ...mutationHookOptions,});
    
      return [lazyMutation[0], { ...lazyMutation[1], returning: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_vehicle && lazyMutation[1].data.update_vehicle!.returning && lazyMutation[1].data.update_vehicle!.returning[0] }]
    }
  

    export async function updateVehicleGraphFieldsObjects({
      apolloClient,
      mutationHookOptions,
    }: {
      apolloClient: ApolloClient<object>,
      mutationHookOptions: Omit<MutationHookOptions<UpdateVehicleGraphFieldsMutation, UpdateVehicleGraphFieldsMutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<UpdateVehicleGraphFieldsMutation, UpdateVehicleGraphFieldsMutationVariables>(UpdateVehicleGraphFieldsDocument, { ...mutationHookOptions });
    
      return [lazyMutation[0], { ...lazyMutation[1], returning: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_vehicle && lazyMutation[1].data.update_vehicle!.returning }]
    }
  

    // Delete Hooks
    //

    export async function removeVehicleModelObjectById({
      vehicleId,
      mutationHookOptions,
    }:{
      vehicleId: string,
      mutationHookOptions?: Omit<MutationHookOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>(RemoveVehicleModelByIdDocument, { variables: { id:vehicleId }, ...mutationHookOptions,});
        
      return [lazyMutation[0], { ...lazyMutation[1], returning: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_vehicle && lazyMutation[1].data.delete_vehicle!.affected_rows }]
    }
  

    export async function removeVehicleModelObjects({
      mutationHookOptions,
    }:{
      mutationHookOptions: Omit<MutationHookOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>(RemoveVehicleModelDocument, { ...mutationHookOptions });
        
      return [lazyMutation[0], { ...lazyMutation[1], returning: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_vehicle && lazyMutation[1].data.delete_vehicle!.affected_rows }]
    }
  