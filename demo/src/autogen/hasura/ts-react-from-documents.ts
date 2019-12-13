import { FetchResult } from '@apollo/client'
import { ApolloClient, QueryLazyOptions, MutationFunctionOptions } from '@apollo/client'
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
import { InsertVehicleGraphWithOnConflictMutationVariables } from '../';
import { InsertVehicleGraphDocument } from '../';
import { InsertVehicleGraphWithOnConflictDocument } from '../';
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
import { InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables } from '../';
import { InsertVehicleGraphLocationOnlyDocument } from '../';
import { InsertVehicleGraphLocationOnlyWithOnConflictDocument } from '../';
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
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#usequery for details
       * 
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
    

      /**
       * __useFetchVehicleGraphByIdLazyQuery__
       * 
       * @example
       * const [fetchVehicleGraphById, { called, loading, error, vehicleGraph }] = useFetchVehicleGraphById();
       * fetchVehicleGraphById({ vehicleId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery for details
       * 
       */

      // Lazy Fetch Hook
      //
      export function useFetchVehicleGraphByIdLazyQuery(options?: Omit<LazyQueryHookOptions<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>, 'query' | 'variables'>) {
        const lazyQuery = useLazyQuery<FetchVehicleGraphByIdQuery, FetchVehicleGraphByIdQueryVariables>(FetchVehicleGraphByIdDocument, options );
        
        const wrappedLazyQuery = ({ vehicleId, options }: { vehicleId:string, options?: Omit<QueryLazyOptions<FetchVehicleGraphByIdQueryVariables>, 'variables'> }) => {
          return lazyQuery[0]({ variables: { vehicleId }, ...options });
        };
               
        const pickVehicleGraph = () => { return ( lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.vehicle_by_pk ); };

        return [wrappedLazyQuery, { ...lazyQuery[1], vehicleGraph: pickVehicleGraph() }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { vehicleGraph: ReturnType<typeof pickVehicleGraph> }];
      }
    

      // Fetch Collection Hook
      //
      export function useFetchVehicleGraphObjectsQuery( options: Omit<QueryHookOptions<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>, 'query'> ) {
          const query = useQuery<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>(FetchVehicleGraphDocument, options );
          return { ...query, objects: query && query.data && query.data.vehicle }
      }
  
      // Lazy Fetch Collection Hook
      //
      export function useFetchVehicleGraphObjectsLazyQuery( options?: Omit<LazyQueryHookOptions<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>, 'query'> ) {
        const lazyQuery = useLazyQuery<FetchVehicleGraphQuery, FetchVehicleGraphQueryVariables>(FetchVehicleGraphDocument, options );
      
        const wrappedLazyQuery = ( options?: QueryLazyOptions<FetchVehicleGraphQueryVariables> ) => {
          return lazyQuery[0]();
        };
    
        const pickObjects = () => { return ( lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.vehicle ); };

        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects() }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }
    

  // Insert Hooks
  //
  export function useInsertVehicleGraph( options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation' | 'variables'> ) {
    const lazyMutation = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>( InsertVehicleGraphDocument, options );
                                
    const wrappedLazyMutation = ({ vehicle, options } :{ vehicle: Vehicle_Insert_Input, options?: Omit<MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'variables'> }) => {
      return lazyMutation[0]({ variables: { objects: [vehicle] }, ...options });
    };

    const pickVehicleGraph = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning && lazyMutation[1].data.insert_vehicle!.returning[0] ); };

    return [ wrappedLazyMutation, { ...lazyMutation[1], vehicleGraph: pickVehicleGraph(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { vehicleGraph: ReturnType<typeof pickVehicleGraph> }];
  }
  


  export function useInsertVehicleGraphWithOnConflict( options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation' | 'variables'> ) {
    const lazyMutation = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables>( InsertVehicleGraphWithOnConflictDocument, options );
                                
    const wrappedLazyMutation = ({ vehicle, onConflict, options } :{ vehicle: Vehicle_Insert_Input, onConflict?: Vehicle_On_Conflict, options?: Omit<MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'variables'> }) => {
      return lazyMutation[0]({ variables: { objects: [vehicle], onConflict }, ...options });
    };

    const pickVehicleGraph = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning && lazyMutation[1].data.insert_vehicle!.returning[0] ); };

    return [ wrappedLazyMutation, { ...lazyMutation[1], vehicleGraph: pickVehicleGraph(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { vehicleGraph: ReturnType<typeof pickVehicleGraph> }];
  }
  

  export function useInsertVehicleGraphObjects( options?: Omit<MutationHookOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, 'mutation'> ) {
    const lazyMutation = useMutation<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>( InsertVehicleGraphDocument, options );
                                
    const wrappedLazyMutation = ( options?: MutationFunctionOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables> ) => {
      return lazyMutation[0]( options );
    };

    const pickObjects = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning ); };

    return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
  }
  

    // Update Hooks
    //
    export function useUpdateVehicleGraphById( options?: Omit<MutationHookOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, 'mutation' | 'variables'> ) {
      const lazyMutation = useMutation<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>(UpdateVehicleGraphByIdDocument, options );
      
      const wrappedLazyMutation = ({ vehicleId, set, options }: { vehicleId: string; set: Vehicle_Set_Input; options?: Omit<MutationFunctionOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, 'variables'>; }) => {
        return lazyMutation[0]({ variables: { id: vehicleId, set }, ...options });
      };

      const pickVehicleGraph = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_vehicle && lazyMutation[1].data.update_vehicle!.returning && lazyMutation[1].data.update_vehicle!.returning[0] ); };

      return [ wrappedLazyMutation, { ...lazyMutation[1], vehicleGraph: pickVehicleGraph(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { vehicleGraph: ReturnType<typeof pickVehicleGraph> }];
    }
  

    export function useUpdateVehicleGraph( options?: Omit<MutationHookOptions<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>, 'mutation'> ) {
      const lazyMutation = useMutation<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>(UpdateVehicleGraphDocument, options );
      
      const wrappedLazyMutation = ( options: MutationFunctionOptions<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables> ) => {
        return lazyMutation[0]( options );
      };

      const pickObjects = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_vehicle && lazyMutation[1].data.update_vehicle!.returning ); };

      return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
    }
  

    // Delete Hooks
    //

    export function useRemoveVehicleModelById( options?: Omit<MutationHookOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation' | 'variables'> ) {
      const lazyMutation = useMutation<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>(RemoveVehicleModelByIdDocument, options );
      
      const wrappedLazyMutation = ({ vehicleId, options }:{ vehicleId: string, options?: Omit<MutationFunctionOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'variables'> }) => {
        return lazyMutation[0]({ variables: { id:vehicleId }, ...options });
      }; 
      
      const pickAffectedRows = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_vehicle && lazyMutation[1].data.delete_vehicle!.affected_rows ); };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows() }] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }];
    }
  

    export function useRemoveVehicleModelObjects( options?: Omit<MutationHookOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'> ) {
      const lazyMutation = useMutation<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>(RemoveVehicleModelDocument, options );
      
      const wrappedLazyMutation = ( options: MutationFunctionOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables> ) => {
        return lazyMutation[0]( options );
      };

      const pickAffectedRows = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_vehicle && lazyMutation[1].data.delete_vehicle!.affected_rows ); };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows() }] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }];
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
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#usequery for details
       * 
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
    

      /**
       * __useFetchVehicleGraphLocationOnlyByIdLazyQuery__
       * 
       * @example
       * const [fetchVehicleGraphLocationOnlyById, { called, loading, error, vehicleGraphLocationOnly }] = useFetchVehicleGraphLocationOnlyById();
       * fetchVehicleGraphLocationOnlyById({ vehicleId:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery for details
       * 
       */

      // Lazy Fetch Hook
      //
      export function useFetchVehicleGraphLocationOnlyByIdLazyQuery(options?: Omit<LazyQueryHookOptions<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>, 'query' | 'variables'>) {
        const lazyQuery = useLazyQuery<FetchVehicleGraphLocationOnlyByIdQuery, FetchVehicleGraphLocationOnlyByIdQueryVariables>(FetchVehicleGraphLocationOnlyByIdDocument, options );
        
        const wrappedLazyQuery = ({ vehicleId, options }: { vehicleId:string, options?: Omit<QueryLazyOptions<FetchVehicleGraphLocationOnlyByIdQueryVariables>, 'variables'> }) => {
          return lazyQuery[0]({ variables: { vehicleId }, ...options });
        };
               
        const pickVehicleGraphLocationOnly = () => { return ( lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.vehicle_by_pk ); };

        return [wrappedLazyQuery, { ...lazyQuery[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly() }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { vehicleGraphLocationOnly: ReturnType<typeof pickVehicleGraphLocationOnly> }];
      }
    

      // Fetch Collection Hook
      //
      export function useFetchVehicleGraphLocationOnlyObjectsQuery( options: Omit<QueryHookOptions<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>, 'query'> ) {
          const query = useQuery<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>(FetchVehicleGraphLocationOnlyDocument, options );
          return { ...query, objects: query && query.data && query.data.vehicle }
      }
  
      // Lazy Fetch Collection Hook
      //
      export function useFetchVehicleGraphLocationOnlyObjectsLazyQuery( options?: Omit<LazyQueryHookOptions<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>, 'query'> ) {
        const lazyQuery = useLazyQuery<FetchVehicleGraphLocationOnlyQuery, FetchVehicleGraphLocationOnlyQueryVariables>(FetchVehicleGraphLocationOnlyDocument, options );
      
        const wrappedLazyQuery = ( options?: QueryLazyOptions<FetchVehicleGraphLocationOnlyQueryVariables> ) => {
          return lazyQuery[0]();
        };
    
        const pickObjects = () => { return ( lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.vehicle ); };

        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects() }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }
    

  // Insert Hooks
  //
  export function useInsertVehicleGraphLocationOnly( options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation' | 'variables'> ) {
    const lazyMutation = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>( InsertVehicleGraphLocationOnlyDocument, options );
                                
    const wrappedLazyMutation = ({ vehicle, options } :{ vehicle: Vehicle_Insert_Input, options?: Omit<MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'variables'> }) => {
      return lazyMutation[0]({ variables: { objects: [vehicle] }, ...options });
    };

    const pickVehicleGraphLocationOnly = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning && lazyMutation[1].data.insert_vehicle!.returning[0] ); };

    return [ wrappedLazyMutation, { ...lazyMutation[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { vehicleGraphLocationOnly: ReturnType<typeof pickVehicleGraphLocationOnly> }];
  }
  


  export function useInsertVehicleGraphLocationOnlyWithOnConflict( options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation' | 'variables'> ) {
    const lazyMutation = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables>( InsertVehicleGraphLocationOnlyWithOnConflictDocument, options );
                                
    const wrappedLazyMutation = ({ vehicle, onConflict, options } :{ vehicle: Vehicle_Insert_Input, onConflict?: Vehicle_On_Conflict, options?: Omit<MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'variables'> }) => {
      return lazyMutation[0]({ variables: { objects: [vehicle], onConflict }, ...options });
    };

    const pickVehicleGraphLocationOnly = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning && lazyMutation[1].data.insert_vehicle!.returning[0] ); };

    return [ wrappedLazyMutation, { ...lazyMutation[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { vehicleGraphLocationOnly: ReturnType<typeof pickVehicleGraphLocationOnly> }];
  }
  

  export function useInsertVehicleGraphLocationOnlyObjects( options?: Omit<MutationHookOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, 'mutation'> ) {
    const lazyMutation = useMutation<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>( InsertVehicleGraphLocationOnlyDocument, options );
                                
    const wrappedLazyMutation = ( options?: MutationFunctionOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables> ) => {
      return lazyMutation[0]( options );
    };

    const pickObjects = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_vehicle && lazyMutation[1].data.insert_vehicle!.returning ); };

    return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
  }
  

    // Update Hooks
    //
    export function useUpdateVehicleGraphLocationOnlyById( options?: Omit<MutationHookOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, 'mutation' | 'variables'> ) {
      const lazyMutation = useMutation<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>(UpdateVehicleGraphLocationOnlyByIdDocument, options );
      
      const wrappedLazyMutation = ({ vehicleId, set, options }: { vehicleId: string; set: Vehicle_Set_Input; options?: Omit<MutationFunctionOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, 'variables'>; }) => {
        return lazyMutation[0]({ variables: { id: vehicleId, set }, ...options });
      };

      const pickVehicleGraphLocationOnly = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_vehicle && lazyMutation[1].data.update_vehicle!.returning && lazyMutation[1].data.update_vehicle!.returning[0] ); };

      return [ wrappedLazyMutation, { ...lazyMutation[1], vehicleGraphLocationOnly: pickVehicleGraphLocationOnly(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { vehicleGraphLocationOnly: ReturnType<typeof pickVehicleGraphLocationOnly> }];
    }
  

    export function useUpdateVehicleGraphLocationOnly( options?: Omit<MutationHookOptions<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>, 'mutation'> ) {
      const lazyMutation = useMutation<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>(UpdateVehicleGraphLocationOnlyDocument, options );
      
      const wrappedLazyMutation = ( options: MutationFunctionOptions<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables> ) => {
        return lazyMutation[0]( options );
      };

      const pickObjects = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_vehicle && lazyMutation[1].data.update_vehicle!.returning ); };

      return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
    }
  