import { ApolloClient, FetchResult, MutationOptions } from '@apollo/client'
import { observationModelFieldsFragment } from './src/autogen';
import { FetchobservationModelQuery } from './src/autogen';
import { FetchobservationModelDocument } from './src/autogen';
import { pModelFieldsFragment } from './src/autogen';
import { FetchpModelQuery } from './src/autogen';
import { FetchpModelDocument } from './src/autogen';
import { patientModelFieldsFragment } from './src/autogen';
import { FetchpatientModelQuery } from './src/autogen';
import { FetchpatientModelDocument } from './src/autogen';
import { usersModelFieldsFragment } from './src/autogen';
import { FetchusersModelQuery } from './src/autogen';
import { FetchusersModelDocument } from './src/autogen';
import { vehicleModelFieldsFragment } from './src/autogen';
import { FetchvehicleModelQuery } from './src/autogen';
import { FetchvehicleModelDocument } from './src/autogen';
import { vehicle_locationModelFieldsFragment } from './src/autogen';
import { Fetchvehicle_locationModelQuery } from './src/autogen';
import { Fetchvehicle_locationModelDocument } from './src/autogen';

    export async function fetchobservationModel(apolloClient: ApolloClient<object>, observationId: string): Promise<observationModelFieldsFragment | null | undefined> {
      const observationResult = await apolloClient.query<FetchobservationModelQuery>({ query: FetchobservationModelDocument, variables: { observationId } });
      return observationResult.data.observation_by_pk;
    }
  

    export async function fetchpModel(apolloClient: ApolloClient<object>, pId: string): Promise<pModelFieldsFragment | null | undefined> {
      const pResult = await apolloClient.query<FetchpModelQuery>({ query: FetchpModelDocument, variables: { pId } });
      return pResult.data.p_by_pk;
    }
  

    export async function fetchpatientModel(apolloClient: ApolloClient<object>, patientId: string): Promise<patientModelFieldsFragment | null | undefined> {
      const patientResult = await apolloClient.query<FetchpatientModelQuery>({ query: FetchpatientModelDocument, variables: { patientId } });
      return patientResult.data.patient_by_pk;
    }
  

    export async function fetchusersModel(apolloClient: ApolloClient<object>, usersId: string): Promise<usersModelFieldsFragment | null | undefined> {
      const usersResult = await apolloClient.query<FetchusersModelQuery>({ query: FetchusersModelDocument, variables: { usersId } });
      return usersResult.data.users_by_pk;
    }
  

    export async function fetchvehicleModel(apolloClient: ApolloClient<object>, vehicleId: string): Promise<vehicleModelFieldsFragment | null | undefined> {
      const vehicleResult = await apolloClient.query<FetchvehicleModelQuery>({ query: FetchvehicleModelDocument, variables: { vehicleId } });
      return vehicleResult.data.vehicle_by_pk;
    }
  

    export async function fetchvehicle_locationModel(apolloClient: ApolloClient<object>, vehicle_locationId: string): Promise<vehicle_locationModelFieldsFragment | null | undefined> {
      const vehicle_locationResult = await apolloClient.query<Fetchvehicle_locationModelQuery>({ query: Fetchvehicle_locationModelDocument, variables: { vehicle_locationId } });
      return vehicle_locationResult.data.vehicle_location_by_pk;
    }
  