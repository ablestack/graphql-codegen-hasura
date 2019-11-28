/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { observationModelFields } from './gql.fragments';
import { pModelFields } from './gql.fragments';
import { patientModelFields } from './gql.fragments';
import { usersModelFields } from './gql.fragments';
import { vehicleModelFields } from './gql.fragments';
import { vehicle_locationModelFields } from './gql.fragments';

    const FETCH_OBSERVATION_MODEL = gql`
      query fetchobservationModel($observationId: uuid!) {
        observation_by_pk(id: $observationId) {
          ...observationModelFields
        }
      }
      ${observationModelFields}
    `;

    const FETCH_P_MODEL = gql`
      query fetchpModel($pId: Int!) {
        p_by_pk(id: $pId) {
          ...pModelFields
        }
      }
      ${pModelFields}
    `;

    const FETCH_PATIENT_MODEL = gql`
      query fetchpatientModel($patientId: uuid!) {
        patient_by_pk(id: $patientId) {
          ...patientModelFields
        }
      }
      ${patientModelFields}
    `;

    const FETCH_USERS_MODEL = gql`
      query fetchusersModel($usersId: Int!) {
        users_by_pk(id: $usersId) {
          ...usersModelFields
        }
      }
      ${usersModelFields}
    `;

    const FETCH_VEHICLE_MODEL = gql`
      query fetchvehicleModel($vehicleId: String!) {
        vehicle_by_pk(id: $vehicleId) {
          ...vehicleModelFields
        }
      }
      ${vehicleModelFields}
    `;

    const FETCH_VEHICLE_LOCATION_MODEL = gql`
      query fetchvehicle_locationModel($vehicle_locationId: Int!) {
        vehicle_location_by_pk(id: $vehicle_locationId) {
          ...vehicle_locationModelFields
        }
      }
      ${vehicle_locationModelFields}
    `;