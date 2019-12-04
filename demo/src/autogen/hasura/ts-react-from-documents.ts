import { FetchResult } from '@apollo/client'
import { ApolloClient } from '@apollo/client'
import { FetchVehicleGraphByIdQuery } from '../';
import { FetchVehicleGraphByIdQueryVariables } from '../';
import { FetchVehicleGraphByIdDocument } from '../';
import { FetchVehicleGraphQuery } from '../';
import { FetchVehicleGraphDocument } from '../';
import { FetchVehicleGraphQueryVariables } from '../';
import { Vehicle_Insert_Input } from '../';
import { Vehicle_On_Conflict } from '../';
import { InsertVehicleGraphMutation } from '../';
import { InsertVehicleGraphMutationVariables } from '../';
import { InsertVehicleGraphDocument } from '../';
import { Vehicle_Set_Input } from '../';
import { UpdateVehicleGraphByIdMutation } from '../';
import { UpdateVehicleGraphByIdMutationVariables } from '../';
import { UpdateVehicleGraphByIdDocument } from '../';
import { UpdateVehicleGraphMutation } from '../';
import { UpdateVehicleGraphMutationVariables } from '../';
import { UpdateVehicleGraphDocument } from '../';
import { RemoveVehicleModelMutation } from '../';
import { RemoveVehicleModelMutationVariables } from '../';
import { RemoveVehicleModelDocument } from '../';
import { RemoveVehicleModelByIdMutation } from '../';
import { RemoveVehicleModelByIdMutationVariables } from '../';
import { RemoveVehicleModelByIdDocument } from '../';
import { FetchVehicleGraphLocationOnlyByIdQuery } from '../';
import { FetchVehicleGraphLocationOnlyByIdQueryVariables } from '../';
import { FetchVehicleGraphLocationOnlyByIdDocument } from '../';
import { FetchVehicleGraphLocationOnlyQuery } from '../';
import { FetchVehicleGraphLocationOnlyDocument } from '../';
import { FetchVehicleGraphLocationOnlyQueryVariables } from '../';
import { InsertVehicleGraphLocationOnlyMutation } from '../';
import { InsertVehicleGraphLocationOnlyMutationVariables } from '../';
import { InsertVehicleGraphLocationOnlyDocument } from '../';
import { UpdateVehicleGraphLocationOnlyByIdMutation } from '../';
import { UpdateVehicleGraphLocationOnlyByIdMutationVariables } from '../';
import { UpdateVehicleGraphLocationOnlyByIdDocument } from '../';
import { UpdateVehicleGraphLocationOnlyMutation } from '../';
import { UpdateVehicleGraphLocationOnlyMutationVariables } from '../';
import { UpdateVehicleGraphLocationOnlyDocument } from '../';

    import { QueryHookOptions, useQuery, LazyQueryHookOptions, useLazyQuery, MutationHookOptions, useMutation } from '@apollo/client'

    // vehicle React
    //------------------------------------------------
  

      // Fetch Hooks
      //
  
      /**
       * __useFetchVehicleGraphByIdQuery__
       *
       * To run a query within a React component, call `useVehicleGraphByIdQuery`
       * When your component renders, `useVehicleGraphByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, vehicleGraph } = useFetchVehicleGraphByIdQuery({ vehicleId:<value> });
       */

        // Fetch Hook
        //
        export function useFetchVehicleGraphByIdQuery({ 
          vehicleId, 
          options, 
        }: {
          vehicleId:string,
          options?: Omit<QueryHookOptions<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>, 'query' | 'variables'>
        }) {
            const query = useQuery<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>(FetchVehicleGraphByIdDocument, { variables: { vehicleId }, ...options });
            return { ...query, vehicleGraph: query && query.data && query.data.vehicle_by_pk }
        }

        // Lazy Fetch Hook
        //
        export function useFetchVehicleByIdLazyQuery({ 
          vehicleId, 
          options ,
        }: {
          vehicleId:string,
          options?: Omit<LazyQueryHookOptions<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>, 'query' | 'variables'>
        }) {
          const lazyQuery = useLazyQuery<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>(FetchVehicleGraphByIdDocument, { variables: { vehicleId }, ...options });
          return [lazyQuery[0], { ...lazyQuery[1], vehicleGraph: lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.vehicle_by_pk }]
        }
    

      // Fetch Collection Hook
      //
      export function useFetchVehicleObjectsQuery({ options } : {
        options: Omit<QueryHookOptions<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>, 'query'>
      }) {
          const query = useQuery<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>(FetchVehicleGraphDocument, options);
          return { ...query, objects: query && query.data && query.data.vehicle }
      }
      
      // Lazy Fetch Collection Hook
      //
      export function useFetchVehicleObjectsLazyQuery({ options } : {
        options?: Omit<LazyQueryHookOptions<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>, 'query'>
      }) {
        const lazyQuery = useLazyQuery<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>(FetchVehicleGraphDocument, options);
      
        return [lazyQuery[0], { ...lazyQuery[1], objects: lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.vehicle }]
      }
    

    // Insert Hooks
    //

    export async function useInsertVehicleGraph({
      vehicle,
      onConflict,
      options,
    } :{
      vehicle: Vehicle_Insert_Input,
      onConflict?: Vehicle_On_Conflict,
      options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>( 
        InsertVehicleGraphDocument, 
        {
          variables: { objects: [vehicle], onConflict },
          ...options,
        }
      );
    
      return [lazyMutation[0], { ...lazyMutation[1], vehicleGraph: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning && lazyMutation[1].data.insert_vehicle!.returning[0] }]
    }
  

    export async function insertVehicleGraphObjects({
      options,
    }:{
      options: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>(InsertVehicleGraphDocument, { ...options });
        
      return [lazyMutation[0], { ...lazyMutation[1], objects: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning }]
    }
  

    // Update Hooks
    //

    export async function updateVehicleGraphById({
      vehicleId,
      set,
      options,
    }: { 
      vehicleId: string,
      set: Vehicle_Set_Input,
      options?: Omit<MutationHookOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>(UpdateVehicleGraphByIdDocument, { variables: { id:vehicleId, set }, ...options,});
    
      return [lazyMutation[0], { ...lazyMutation[1], vehicleGraph: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_vehicle && lazyMutation[1].data.update_vehicle!.returning && lazyMutation[1].data.update_vehicle!.returning[0] }]
    }
  

    export async function updateVehicleGraphObjects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationHookOptions<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>(UpdateVehicleGraphDocument, { ...options });
    
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
      const lazyMutation = useMutation<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>(RemoveVehicleModelByIdDocument, { variables: { id:vehicleId }, ...options,});
        
      return [lazyMutation[0], { ...lazyMutation[1], vehicleGraph: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_vehicle && lazyMutation[1].data.delete_vehicle!.affected_rows }]
    }
  

    export async function removeVehicleModelObjects({
      options,
    }:{
      options: Omit<MutationHookOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>(RemoveVehicleModelDocument, { ...options });
        
      return [lazyMutation[0], { ...lazyMutation[1], objects: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_vehicle && lazyMutation[1].data.delete_vehicle!.affected_rows }]
    }
  

      // Fetch Hooks
      //
  
      /**
       * __useFetchVehicleGraphLocationOnlyByIdQuery__
       *
       * To run a query within a React component, call `useVehicleGraphLocationOnlyByIdQuery`
       * When your component renders, `useVehicleGraphLocationOnlyByIdQuery` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, vehicleGraphLocationOnly } = useFetchVehicleGraphLocationOnlyByIdQuery({ vehicleId:<value> });
       */

        // Fetch Hook
        //
        export function useFetchVehicleGraphLocationOnlyByIdQuery({ 
          vehicleId, 
          options, 
        }: {
          vehicleId:string,
          options?: Omit<QueryHookOptions<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>, 'query' | 'variables'>
        }) {
            const query = useQuery<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>(FetchVehicleGraphLocationOnlyByIdDocument, { variables: { vehicleId }, ...options });
            return { ...query, vehicleGraphLocationOnly: query && query.data && query.data.vehicle_by_pk }
        }

        // Lazy Fetch Hook
        //
        export function useFetchVehicleByIdLazyQuery({ 
          vehicleId, 
          options ,
        }: {
          vehicleId:string,
          options?: Omit<LazyQueryHookOptions<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>, 'query' | 'variables'>
        }) {
          const lazyQuery = useLazyQuery<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>(FetchVehicleGraphLocationOnlyByIdDocument, { variables: { vehicleId }, ...options });
          return [lazyQuery[0], { ...lazyQuery[1], vehicleGraphLocationOnly: lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.vehicle_by_pk }]
        }
    

      // Fetch Collection Hook
      //
      export function useFetchVehicleObjectsQuery({ options } : {
        options: Omit<QueryHookOptions<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>, 'query'>
      }) {
          const query = useQuery<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>(FetchVehicleGraphLocationOnlyDocument, options);
          return { ...query, objects: query && query.data && query.data.vehicle }
      }
      
      // Lazy Fetch Collection Hook
      //
      export function useFetchVehicleObjectsLazyQuery({ options } : {
        options?: Omit<LazyQueryHookOptions<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>, 'query'>
      }) {
        const lazyQuery = useLazyQuery<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>(FetchVehicleGraphLocationOnlyDocument, options);
      
        return [lazyQuery[0], { ...lazyQuery[1], objects: lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.vehicle }]
      }
    

    // Insert Hooks
    //

    export async function useInsertVehicleGraphLocationOnly({
      vehicle,
      onConflict,
      options,
    } :{
      vehicle: Vehicle_Insert_Input,
      onConflict?: Vehicle_On_Conflict,
      options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>( 
        InsertVehicleGraphLocationOnlyDocument, 
        {
          variables: { objects: [vehicle], onConflict },
          ...options,
        }
      );
    
      return [lazyMutation[0], { ...lazyMutation[1], vehicleGraphLocationOnly: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning && lazyMutation[1].data.insert_vehicle!.returning[0] }]
    }
  

    export async function insertVehicleGraphLocationOnlyObjects({
      options,
    }:{
      options: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>(InsertVehicleGraphLocationOnlyDocument, { ...options });
        
      return [lazyMutation[0], { ...lazyMutation[1], objects: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning }]
    }
  

    // Update Hooks
    //

    export async function updateVehicleGraphLocationOnlyById({
      vehicleId,
      set,
      options,
    }: { 
      vehicleId: string,
      set: Vehicle_Set_Input,
      options?: Omit<MutationHookOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>(UpdateVehicleGraphLocationOnlyByIdDocument, { variables: { id:vehicleId, set }, ...options,});
    
      return [lazyMutation[0], { ...lazyMutation[1], vehicleGraphLocationOnly: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_vehicle && lazyMutation[1].data.update_vehicle!.returning && lazyMutation[1].data.update_vehicle!.returning[0] }]
    }
  

    export async function updateVehicleGraphLocationOnlyObjects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationHookOptions<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>(UpdateVehicleGraphLocationOnlyDocument, { ...options });
    
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
      const lazyMutation = useMutation<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>(RemoveVehicleModelByIdDocument, { variables: { id:vehicleId }, ...options,});
        
      return [lazyMutation[0], { ...lazyMutation[1], vehicleGraphLocationOnly: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_vehicle && lazyMutation[1].data.delete_vehicle!.affected_rows }]
    }
  