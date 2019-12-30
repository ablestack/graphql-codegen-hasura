import { ApolloClient, QueryOptions, MutationOptions, ApolloQueryResult, FetchResult } from "@apollo/client";
import { VehicleGraphFragment } from "../";
import { FetchVehicleGraphByIdQuery } from "../";
import { FetchVehicleGraphByIdDocument } from "../";
import { FetchVehicleGraphQuery } from "../";
import { FetchVehicleGraphDocument } from "../";
import { FetchVehicleGraphQueryVariables } from "../";
import { Vehicle_Insert_Input } from "../";
import { Vehicle_On_Conflict } from "../";
import { InsertVehicleGraphMutation } from "../";
import { InsertVehicleGraphMutationVariables } from "../";
import { InsertVehicleGraphWithOnConflictMutationVariables } from "../";
import { InsertVehicleGraphDocument } from "../";
import { InsertVehicleGraphWithOnConflictDocument } from "../";
import { Vehicle_Set_Input } from "../";
import { UpdateVehicleGraphByIdMutation } from "../";
import { UpdateVehicleGraphByIdMutationVariables } from "../";
import { UpdateVehicleGraphByIdDocument } from "../";
import { UpdateVehicleGraphMutation } from "../";
import { UpdateVehicleGraphMutationVariables } from "../";
import { UpdateVehicleGraphDocument } from "../";
import { RemoveVehicleModelMutation } from "../";
import { RemoveVehicleModelMutationVariables } from "../";
import { RemoveVehicleModelDocument } from "../";
import { RemoveVehicleModelByIdMutation } from "../";
import { RemoveVehicleModelByIdMutationVariables } from "../";
import { RemoveVehicleModelByIdDocument } from "../";
import { VehicleGraphLocationOnlyFragment } from "../";
import { FetchVehicleGraphLocationOnlyByIdQuery } from "../";
import { FetchVehicleGraphLocationOnlyByIdDocument } from "../";
import { FetchVehicleGraphLocationOnlyQuery } from "../";
import { FetchVehicleGraphLocationOnlyDocument } from "../";
import { FetchVehicleGraphLocationOnlyQueryVariables } from "../";
import { InsertVehicleGraphLocationOnlyMutation } from "../";
import { InsertVehicleGraphLocationOnlyMutationVariables } from "../";
import { InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables } from "../";
import { InsertVehicleGraphLocationOnlyDocument } from "../";
import { InsertVehicleGraphLocationOnlyWithOnConflictDocument } from "../";
import { UpdateVehicleGraphLocationOnlyByIdMutation } from "../";
import { UpdateVehicleGraphLocationOnlyByIdMutationVariables } from "../";
import { UpdateVehicleGraphLocationOnlyByIdDocument } from "../";
import { UpdateVehicleGraphLocationOnlyMutation } from "../";
import { UpdateVehicleGraphLocationOnlyMutationVariables } from "../";
import { UpdateVehicleGraphLocationOnlyDocument } from "../";
import { DogModelFragment } from "../";
import { FetchDogModelByIdQuery } from "../";
import { FetchDogModelByIdDocument } from "../";
import { FetchDogModelQuery } from "../";
import { FetchDogModelDocument } from "../";
import { FetchDogModelQueryVariables } from "../";
import { Dogs_Insert_Input } from "../";
import { Dogs_On_Conflict } from "../";
import { InsertDogModelMutation } from "../";
import { InsertDogModelMutationVariables } from "../";
import { InsertDogModelWithOnConflictMutationVariables } from "../";
import { InsertDogModelDocument } from "../";
import { InsertDogModelWithOnConflictDocument } from "../";
import { Dogs_Set_Input } from "../";
import { UpdateDogModelByIdMutation } from "../";
import { UpdateDogModelByIdMutationVariables } from "../";
import { UpdateDogModelByIdDocument } from "../";
import { UpdateDogModelMutation } from "../";
import { UpdateDogModelMutationVariables } from "../";
import { UpdateDogModelDocument } from "../";
import { RemoveDogsModelMutation } from "../";
import { RemoveDogsModelMutationVariables } from "../";
import { RemoveDogsModelDocument } from "../";
import { RemoveDogsModelByIdMutation } from "../";
import { RemoveDogsModelByIdMutationVariables } from "../";
import { RemoveDogsModelByIdDocument } from "../";

// GLOBAL TYPES
//------------------------------------------------
export type RemoveEntitiesQueryResultEx = { affected_rows: number };

// UTILITY METHODS
//------------------------------------------------

// Optimistic response generation utility method
//
function generateOptimisticResponseForMutationById<T>(operationType: "update", entityName: string, entityId: any, setObject: object): T {
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

// vehicle HELPERS
//------------------------------------------------

export type VehicleGraphByIdQueryResultEx = { vehicleGraph: VehicleGraphFragment | null | undefined };
export type VehicleGraphObjectsQueryResultEx = { objects: VehicleGraphFragment[] };

// Fetch Helper
//
type FetchVehicleGraphByIdQueryResult = ApolloQueryResult<FetchVehicleGraphByIdQuery>;
export type FetchVehicleGraphByIdQueryResultEx = FetchVehicleGraphByIdQueryResult & VehicleGraphByIdQueryResultEx;

export async function fetchVehicleGraphById({
  apolloClient,
  vehicleId,
  options
}: {
  apolloClient: ApolloClient<object>;
  vehicleId: string;
  options?: Omit<QueryOptions<FetchVehicleGraphQueryVariables>, "query" | "variables">;
}): Promise<FetchVehicleGraphByIdQueryResultEx> {
  const query: FetchVehicleGraphByIdQueryResult = await apolloClient.query<FetchVehicleGraphByIdQuery>({
    query: FetchVehicleGraphByIdDocument,
    variables: { vehicleId },
    ...options
  });

  return { ...query, vehicleGraph: query && query.data && query.data.vehicle_by_pk };
}

// Fetch Objects Helper
//
type FetchVehicleGraphObjectsQueryResult = ApolloQueryResult<FetchVehicleGraphQuery>;
export type FetchVehicleGraphObjectsQueryResultEx = FetchVehicleGraphObjectsQueryResult & VehicleGraphObjectsQueryResultEx;

export async function fetchVehicleGraphObjects({
  apolloClient,
  options
}: {
  apolloClient: ApolloClient<object>;
  options: Omit<QueryOptions<FetchVehicleGraphQueryVariables>, "query">;
}): Promise<FetchVehicleGraphObjectsQueryResultEx> {
  const query: FetchVehicleGraphObjectsQueryResult = await apolloClient.query<FetchVehicleGraphQuery>({ query: FetchVehicleGraphDocument, ...options });

  return { ...query, objects: (query && query.data && query.data.vehicle) || [] };
}

// Insert Helper
//
type InsertVehicleGraphQueryResult = FetchResult<InsertVehicleGraphMutation, Record<string, any>, Record<string, any>>;
export type InsertVehicleGraphQueryResultEx = InsertVehicleGraphQueryResult & VehicleGraphByIdQueryResultEx;

export async function insertVehicleGraph({
  apolloClient,
  vehicle,
  onConflict,
  options
}: {
  apolloClient: ApolloClient<object>;
  vehicle: Vehicle_Insert_Input;
  onConflict?: Vehicle_On_Conflict;
  options?: Omit<MutationOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, "mutation" | "variables">;
}): Promise<InsertVehicleGraphQueryResultEx> {
  const mutation: InsertVehicleGraphQueryResult = onConflict
    ? await apolloClient.mutate<InsertVehicleGraphMutation, InsertVehicleGraphWithOnConflictMutationVariables>({
        mutation: InsertVehicleGraphWithOnConflictDocument,
        variables: { objects: [vehicle], onConflict },
        ...options
      })
    : await apolloClient.mutate<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>({
        mutation: InsertVehicleGraphDocument,
        variables: { objects: [vehicle] },
        ...options
      });

  return {
    ...mutation,
    vehicleGraph: mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning && mutation.data.insert_vehicle!.returning[0]
  };
}

// Insert Objects Helper
//
type InsertVehicleGraphObjectsQueryResult = FetchResult<InsertVehicleGraphMutation, Record<string, any>, Record<string, any>>;
export type InsertVehicleGraphObjectsQueryResultEx = InsertVehicleGraphObjectsQueryResult & VehicleGraphObjectsQueryResultEx;

export async function insertVehicleGraphObjects({
  apolloClient,
  options
}: {
  apolloClient: ApolloClient<object>;
  options: Omit<MutationOptions<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>, "mutation">;
}): Promise<InsertVehicleGraphObjectsQueryResultEx> {
  const mutation: InsertVehicleGraphObjectsQueryResult = await apolloClient.mutate<InsertVehicleGraphMutation, InsertVehicleGraphMutationVariables>({
    mutation: InsertVehicleGraphDocument,
    ...options
  });

  return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning) || [] };
}

// Update Helper
//
type UpdateVehicleGraphByIdQueryResult = FetchResult<UpdateVehicleGraphByIdMutation, Record<string, any>, Record<string, any>>;
export type UpdateVehicleGraphByIdQueryResultEx = UpdateVehicleGraphByIdQueryResult & VehicleGraphByIdQueryResultEx;

export async function updateVehicleGraphById({
  apolloClient,
  vehicleId,
  set,
  autoOptimisticResponse,
  options
}: {
  apolloClient: ApolloClient<object>;
  vehicleId: string;
  set: Vehicle_Set_Input;
  autoOptimisticResponse?: boolean;
  options?: Omit<MutationOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>, "mutation">;
}): Promise<UpdateVehicleGraphByIdQueryResultEx> {
  const mutationOptions: MutationOptions<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables> = {
    mutation: UpdateVehicleGraphByIdDocument,
    variables: { id: vehicleId, set },
    ...options
  };
  if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
    mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateVehicleGraphByIdMutation>("update", "vehicle", vehicleId, set);
  }

  const mutation: UpdateVehicleGraphByIdQueryResult = await apolloClient.mutate<UpdateVehicleGraphByIdMutation, UpdateVehicleGraphByIdMutationVariables>(mutationOptions);

  return {
    ...mutation,
    vehicleGraph: mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning && mutation.data.update_vehicle!.returning[0]
  };
}

// Update Objects Helper
//
type UpdateVehicleGraphObjectsQueryResult = FetchResult<UpdateVehicleGraphMutation, Record<string, any>, Record<string, any>>;
export type UpdateVehicleGraphObjectsQueryResultEx = UpdateVehicleGraphObjectsQueryResult & VehicleGraphObjectsQueryResultEx;

export async function updateVehicleGraphObjects({
  apolloClient,
  options
}: {
  apolloClient: ApolloClient<object>;
  options: Omit<MutationOptions<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>, "mutation">;
}): Promise<UpdateVehicleGraphObjectsQueryResultEx> {
  const mutation: UpdateVehicleGraphObjectsQueryResult = await apolloClient.mutate<UpdateVehicleGraphMutation, UpdateVehicleGraphMutationVariables>({
    mutation: UpdateVehicleGraphDocument,
    ...options
  });

  return { ...mutation, objects: (mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning) || [] };
}

// Delete Helper
//

type RemoveVehicleModelByIdQueryResult = FetchResult<RemoveVehicleModelByIdMutation, Record<string, any>, Record<string, any>>;
export type RemoveVehicleModelByIdQueryResultEx = RemoveVehicleModelByIdQueryResult & RemoveEntitiesQueryResultEx;

export async function removeVehicleModelById({
  apolloClient,
  vehicleId,
  options
}: {
  apolloClient: ApolloClient<object>;
  vehicleId: string;
  options?: Omit<MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, "mutation">;
}): Promise<RemoveVehicleModelByIdQueryResultEx> {
  const mutation: RemoveVehicleModelByIdQueryResult = await apolloClient.mutate<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>({
    mutation: RemoveVehicleModelByIdDocument,
    variables: { id: vehicleId },
    ...options
  });

  return { ...mutation, affected_rows: (mutation && mutation.data && mutation.data.delete_vehicle && mutation.data.delete_vehicle!.affected_rows) || 0 };
}

type RemoveVehicleModelObjectsQueryResult = FetchResult<RemoveVehicleModelMutation, Record<string, any>, Record<string, any>>;
export type RemoveVehicleModelObjectsQueryResultEx = RemoveVehicleModelObjectsQueryResult & RemoveEntitiesQueryResultEx;

export async function removeVehicleModelObjects({
  apolloClient,
  options
}: {
  apolloClient: ApolloClient<object>;
  options: Omit<MutationOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, "mutation">;
}): Promise<RemoveVehicleModelObjectsQueryResultEx> {
  const mutation: RemoveVehicleModelByIdQueryResult = await apolloClient.mutate<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>({
    mutation: RemoveVehicleModelDocument,
    ...options
  });

  return { ...mutation, affected_rows: (mutation && mutation.data && mutation.data.delete_vehicle && mutation.data.delete_vehicle!.affected_rows) || 0 };
}

// vehicle HELPERS
//------------------------------------------------

export type VehicleGraphLocationOnlyByIdQueryResultEx = { vehicleGraphLocationOnly: VehicleGraphLocationOnlyFragment | null | undefined };
export type VehicleGraphLocationOnlyObjectsQueryResultEx = { objects: VehicleGraphLocationOnlyFragment[] };

// Fetch Helper
//
type FetchVehicleGraphLocationOnlyByIdQueryResult = ApolloQueryResult<FetchVehicleGraphLocationOnlyByIdQuery>;
export type FetchVehicleGraphLocationOnlyByIdQueryResultEx = FetchVehicleGraphLocationOnlyByIdQueryResult & VehicleGraphLocationOnlyByIdQueryResultEx;

export async function fetchVehicleGraphLocationOnlyById({
  apolloClient,
  vehicleId,
  options
}: {
  apolloClient: ApolloClient<object>;
  vehicleId: string;
  options?: Omit<QueryOptions<FetchVehicleGraphLocationOnlyQueryVariables>, "query" | "variables">;
}): Promise<FetchVehicleGraphLocationOnlyByIdQueryResultEx> {
  const query: FetchVehicleGraphLocationOnlyByIdQueryResult = await apolloClient.query<FetchVehicleGraphLocationOnlyByIdQuery>({
    query: FetchVehicleGraphLocationOnlyByIdDocument,
    variables: { vehicleId },
    ...options
  });

  return { ...query, vehicleGraphLocationOnly: query && query.data && query.data.vehicle_by_pk };
}

// Fetch Objects Helper
//
type FetchVehicleGraphLocationOnlyObjectsQueryResult = ApolloQueryResult<FetchVehicleGraphLocationOnlyQuery>;
export type FetchVehicleGraphLocationOnlyObjectsQueryResultEx = FetchVehicleGraphLocationOnlyObjectsQueryResult & VehicleGraphLocationOnlyObjectsQueryResultEx;

export async function fetchVehicleGraphLocationOnlyObjects({
  apolloClient,
  options
}: {
  apolloClient: ApolloClient<object>;
  options: Omit<QueryOptions<FetchVehicleGraphLocationOnlyQueryVariables>, "query">;
}): Promise<FetchVehicleGraphLocationOnlyObjectsQueryResultEx> {
  const query: FetchVehicleGraphLocationOnlyObjectsQueryResult = await apolloClient.query<FetchVehicleGraphLocationOnlyQuery>({
    query: FetchVehicleGraphLocationOnlyDocument,
    ...options
  });

  return { ...query, objects: (query && query.data && query.data.vehicle) || [] };
}

// Insert Helper
//
type InsertVehicleGraphLocationOnlyQueryResult = FetchResult<InsertVehicleGraphLocationOnlyMutation, Record<string, any>, Record<string, any>>;
export type InsertVehicleGraphLocationOnlyQueryResultEx = InsertVehicleGraphLocationOnlyQueryResult & VehicleGraphLocationOnlyByIdQueryResultEx;

export async function insertVehicleGraphLocationOnly({
  apolloClient,
  vehicle,
  onConflict,
  options
}: {
  apolloClient: ApolloClient<object>;
  vehicle: Vehicle_Insert_Input;
  onConflict?: Vehicle_On_Conflict;
  options?: Omit<MutationOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, "mutation" | "variables">;
}): Promise<InsertVehicleGraphLocationOnlyQueryResultEx> {
  const mutation: InsertVehicleGraphLocationOnlyQueryResult = onConflict
    ? await apolloClient.mutate<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyWithOnConflictMutationVariables>({
        mutation: InsertVehicleGraphLocationOnlyWithOnConflictDocument,
        variables: { objects: [vehicle], onConflict },
        ...options
      })
    : await apolloClient.mutate<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>({
        mutation: InsertVehicleGraphLocationOnlyDocument,
        variables: { objects: [vehicle] },
        ...options
      });

  return {
    ...mutation,
    vehicleGraphLocationOnly: mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning && mutation.data.insert_vehicle!.returning[0]
  };
}

// Insert Objects Helper
//
type InsertVehicleGraphLocationOnlyObjectsQueryResult = FetchResult<InsertVehicleGraphLocationOnlyMutation, Record<string, any>, Record<string, any>>;
export type InsertVehicleGraphLocationOnlyObjectsQueryResultEx = InsertVehicleGraphLocationOnlyObjectsQueryResult & VehicleGraphLocationOnlyObjectsQueryResultEx;

export async function insertVehicleGraphLocationOnlyObjects({
  apolloClient,
  options
}: {
  apolloClient: ApolloClient<object>;
  options: Omit<MutationOptions<InsertVehicleGraphLocationOnlyMutation, InsertVehicleGraphLocationOnlyMutationVariables>, "mutation">;
}): Promise<InsertVehicleGraphLocationOnlyObjectsQueryResultEx> {
  const mutation: InsertVehicleGraphLocationOnlyObjectsQueryResult = await apolloClient.mutate<
    InsertVehicleGraphLocationOnlyMutation,
    InsertVehicleGraphLocationOnlyMutationVariables
  >({ mutation: InsertVehicleGraphLocationOnlyDocument, ...options });

  return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_vehicle && mutation.data.insert_vehicle!.returning) || [] };
}

// Update Helper
//
type UpdateVehicleGraphLocationOnlyByIdQueryResult = FetchResult<UpdateVehicleGraphLocationOnlyByIdMutation, Record<string, any>, Record<string, any>>;
export type UpdateVehicleGraphLocationOnlyByIdQueryResultEx = UpdateVehicleGraphLocationOnlyByIdQueryResult & VehicleGraphLocationOnlyByIdQueryResultEx;

export async function updateVehicleGraphLocationOnlyById({
  apolloClient,
  vehicleId,
  set,
  autoOptimisticResponse,
  options
}: {
  apolloClient: ApolloClient<object>;
  vehicleId: string;
  set: Vehicle_Set_Input;
  autoOptimisticResponse?: boolean;
  options?: Omit<MutationOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables>, "mutation">;
}): Promise<UpdateVehicleGraphLocationOnlyByIdQueryResultEx> {
  const mutationOptions: MutationOptions<UpdateVehicleGraphLocationOnlyByIdMutation, UpdateVehicleGraphLocationOnlyByIdMutationVariables> = {
    mutation: UpdateVehicleGraphLocationOnlyByIdDocument,
    variables: { id: vehicleId, set },
    ...options
  };
  if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
    mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateVehicleGraphLocationOnlyByIdMutation>("update", "vehicle", vehicleId, set);
  }

  const mutation: UpdateVehicleGraphLocationOnlyByIdQueryResult = await apolloClient.mutate<
    UpdateVehicleGraphLocationOnlyByIdMutation,
    UpdateVehicleGraphLocationOnlyByIdMutationVariables
  >(mutationOptions);

  return {
    ...mutation,
    vehicleGraphLocationOnly: mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning && mutation.data.update_vehicle!.returning[0]
  };
}

// Update Objects Helper
//
type UpdateVehicleGraphLocationOnlyObjectsQueryResult = FetchResult<UpdateVehicleGraphLocationOnlyMutation, Record<string, any>, Record<string, any>>;
export type UpdateVehicleGraphLocationOnlyObjectsQueryResultEx = UpdateVehicleGraphLocationOnlyObjectsQueryResult & VehicleGraphLocationOnlyObjectsQueryResultEx;

export async function updateVehicleGraphLocationOnlyObjects({
  apolloClient,
  options
}: {
  apolloClient: ApolloClient<object>;
  options: Omit<MutationOptions<UpdateVehicleGraphLocationOnlyMutation, UpdateVehicleGraphLocationOnlyMutationVariables>, "mutation">;
}): Promise<UpdateVehicleGraphLocationOnlyObjectsQueryResultEx> {
  const mutation: UpdateVehicleGraphLocationOnlyObjectsQueryResult = await apolloClient.mutate<
    UpdateVehicleGraphLocationOnlyMutation,
    UpdateVehicleGraphLocationOnlyMutationVariables
  >({ mutation: UpdateVehicleGraphLocationOnlyDocument, ...options });

  return { ...mutation, objects: (mutation && mutation.data && mutation.data.update_vehicle && mutation.data.update_vehicle!.returning) || [] };
}

// dogs HELPERS
//------------------------------------------------

export type DogModelByIdQueryResultEx = { dogModel: DogModelFragment | null | undefined };
export type DogModelObjectsQueryResultEx = { objects: DogModelFragment[] };

// Fetch Helper
//
type FetchDogModelByIdQueryResult = ApolloQueryResult<FetchDogModelByIdQuery>;
export type FetchDogModelByIdQueryResultEx = FetchDogModelByIdQueryResult & DogModelByIdQueryResultEx;

export async function fetchDogModelById({
  apolloClient,
  dogsId,
  options
}: {
  apolloClient: ApolloClient<object>;
  dogsId: string;
  options?: Omit<QueryOptions<FetchDogModelQueryVariables>, "query" | "variables">;
}): Promise<FetchDogModelByIdQueryResultEx> {
  const query: FetchDogModelByIdQueryResult = await apolloClient.query<FetchDogModelByIdQuery>({ query: FetchDogModelByIdDocument, variables: { dogsId }, ...options });

  return { ...query, dogModel: query && query.data && query.data.dogs_by_pk };
}

// Fetch Objects Helper
//
type FetchDogModelObjectsQueryResult = ApolloQueryResult<FetchDogModelQuery>;
export type FetchDogModelObjectsQueryResultEx = FetchDogModelObjectsQueryResult & DogModelObjectsQueryResultEx;

export async function fetchDogModelObjects({
  apolloClient,
  options
}: {
  apolloClient: ApolloClient<object>;
  options: Omit<QueryOptions<FetchDogModelQueryVariables>, "query">;
}): Promise<FetchDogModelObjectsQueryResultEx> {
  const query: FetchDogModelObjectsQueryResult = await apolloClient.query<FetchDogModelQuery>({ query: FetchDogModelDocument, ...options });

  return { ...query, objects: (query && query.data && query.data.dogs) || [] };
}

// Insert Helper
//
type InsertDogModelQueryResult = FetchResult<InsertDogModelMutation, Record<string, any>, Record<string, any>>;
export type InsertDogModelQueryResultEx = InsertDogModelQueryResult & DogModelByIdQueryResultEx;

export async function insertDogModel({
  apolloClient,
  dogs,
  onConflict,
  options
}: {
  apolloClient: ApolloClient<object>;
  dogs: Dogs_Insert_Input;
  onConflict?: Dogs_On_Conflict;
  options?: Omit<MutationOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, "mutation" | "variables">;
}): Promise<InsertDogModelQueryResultEx> {
  const mutation: InsertDogModelQueryResult = onConflict
    ? await apolloClient.mutate<InsertDogModelMutation, InsertDogModelWithOnConflictMutationVariables>({
        mutation: InsertDogModelWithOnConflictDocument,
        variables: { objects: [dogs], onConflict },
        ...options
      })
    : await apolloClient.mutate<InsertDogModelMutation, InsertDogModelMutationVariables>({ mutation: InsertDogModelDocument, variables: { objects: [dogs] }, ...options });

  return { ...mutation, dogModel: mutation && mutation.data && mutation.data.insert_dogs && mutation.data.insert_dogs!.returning && mutation.data.insert_dogs!.returning[0] };
}

// Insert Objects Helper
//
type InsertDogModelObjectsQueryResult = FetchResult<InsertDogModelMutation, Record<string, any>, Record<string, any>>;
export type InsertDogModelObjectsQueryResultEx = InsertDogModelObjectsQueryResult & DogModelObjectsQueryResultEx;

export async function insertDogModelObjects({
  apolloClient,
  options
}: {
  apolloClient: ApolloClient<object>;
  options: Omit<MutationOptions<InsertDogModelMutation, InsertDogModelMutationVariables>, "mutation">;
}): Promise<InsertDogModelObjectsQueryResultEx> {
  const mutation: InsertDogModelObjectsQueryResult = await apolloClient.mutate<InsertDogModelMutation, InsertDogModelMutationVariables>({
    mutation: InsertDogModelDocument,
    ...options
  });

  return { ...mutation, objects: (mutation && mutation.data && mutation.data.insert_dogs && mutation.data.insert_dogs!.returning) || [] };
}

// Update Helper
//
type UpdateDogModelByIdQueryResult = FetchResult<UpdateDogModelByIdMutation, Record<string, any>, Record<string, any>>;
export type UpdateDogModelByIdQueryResultEx = UpdateDogModelByIdQueryResult & DogModelByIdQueryResultEx;

export async function updateDogModelById({
  apolloClient,
  dogsId,
  set,
  autoOptimisticResponse,
  options
}: {
  apolloClient: ApolloClient<object>;
  dogsId: string;
  set: Dogs_Set_Input;
  autoOptimisticResponse?: boolean;
  options?: Omit<MutationOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>, "mutation">;
}): Promise<UpdateDogModelByIdQueryResultEx> {
  const mutationOptions: MutationOptions<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables> = {
    mutation: UpdateDogModelByIdDocument,
    variables: { id: dogsId, set },
    ...options
  };
  if (autoOptimisticResponse && (!options || !options.optimisticResponse)) {
    mutationOptions.optimisticResponse = generateOptimisticResponseForMutationById<UpdateDogModelByIdMutation>("update", "dogs", dogsId, set);
  }

  const mutation: UpdateDogModelByIdQueryResult = await apolloClient.mutate<UpdateDogModelByIdMutation, UpdateDogModelByIdMutationVariables>(mutationOptions);

  return { ...mutation, dogModel: mutation && mutation.data && mutation.data.update_dogs && mutation.data.update_dogs!.returning && mutation.data.update_dogs!.returning[0] };
}

// Update Objects Helper
//
type UpdateDogModelObjectsQueryResult = FetchResult<UpdateDogModelMutation, Record<string, any>, Record<string, any>>;
export type UpdateDogModelObjectsQueryResultEx = UpdateDogModelObjectsQueryResult & DogModelObjectsQueryResultEx;

export async function updateDogModelObjects({
  apolloClient,
  options
}: {
  apolloClient: ApolloClient<object>;
  options: Omit<MutationOptions<UpdateDogModelMutation, UpdateDogModelMutationVariables>, "mutation">;
}): Promise<UpdateDogModelObjectsQueryResultEx> {
  const mutation: UpdateDogModelObjectsQueryResult = await apolloClient.mutate<UpdateDogModelMutation, UpdateDogModelMutationVariables>({
    mutation: UpdateDogModelDocument,
    ...options
  });

  return { ...mutation, objects: (mutation && mutation.data && mutation.data.update_dogs && mutation.data.update_dogs!.returning) || [] };
}

// Delete Helper
//

type RemoveDogsModelByIdQueryResult = FetchResult<RemoveDogsModelByIdMutation, Record<string, any>, Record<string, any>>;
export type RemoveDogsModelByIdQueryResultEx = RemoveDogsModelByIdQueryResult & RemoveEntitiesQueryResultEx;

export async function removeDogsModelById({
  apolloClient,
  dogsId,
  options
}: {
  apolloClient: ApolloClient<object>;
  dogsId: string;
  options?: Omit<MutationOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>, "mutation">;
}): Promise<RemoveDogsModelByIdQueryResultEx> {
  const mutation: RemoveDogsModelByIdQueryResult = await apolloClient.mutate<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>({
    mutation: RemoveDogsModelByIdDocument,
    variables: { id: dogsId },
    ...options
  });

  return { ...mutation, affected_rows: (mutation && mutation.data && mutation.data.delete_dogs && mutation.data.delete_dogs!.affected_rows) || 0 };
}

type RemoveDogsModelObjectsQueryResult = FetchResult<RemoveDogsModelMutation, Record<string, any>, Record<string, any>>;
export type RemoveDogsModelObjectsQueryResultEx = RemoveDogsModelObjectsQueryResult & RemoveEntitiesQueryResultEx;

export async function removeDogsModelObjects({
  apolloClient,
  options
}: {
  apolloClient: ApolloClient<object>;
  options: Omit<MutationOptions<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>, "mutation">;
}): Promise<RemoveDogsModelObjectsQueryResultEx> {
  const mutation: RemoveDogsModelByIdQueryResult = await apolloClient.mutate<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>({
    mutation: RemoveDogsModelDocument,
    ...options
  });

  return { ...mutation, affected_rows: (mutation && mutation.data && mutation.data.delete_dogs && mutation.data.delete_dogs!.affected_rows) || 0 };
}
