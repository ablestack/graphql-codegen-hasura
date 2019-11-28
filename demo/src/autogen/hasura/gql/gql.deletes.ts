/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { observationModelFields } from './gql.fragments';
import { pModelFields } from './gql.fragments';
import { patientModelFields } from './gql.fragments';
import { usersModelFields } from './gql.fragments';
import { vehicleModelFields } from './gql.fragments';
import { vehicle_locationModelFields } from './gql.fragments';

    const REMOVE_OBSERVATION_MODEL = gql`
      mutation removeobservationModelById($id: uuid) {
        delete_observation(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${observationModelFields}
    `;

    const REMOVE_P_MODEL = gql`
      mutation removepModelById($id: Int) {
        delete_p(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${pModelFields}
    `;

    const REMOVE_PATIENT_MODEL = gql`
      mutation removepatientModelById($id: uuid) {
        delete_patient(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${patientModelFields}
    `;

    const REMOVE_USERS_MODEL = gql`
      mutation removeusersModelById($id: Int) {
        delete_users(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${usersModelFields}
    `;

    const REMOVE_VEHICLE_MODEL = gql`
      mutation removevehicleModelById($id: String) {
        delete_vehicle(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${vehicleModelFields}
    `;

    const REMOVE_VEHICLE_LOCATION_MODEL = gql`
      mutation removevehicle_locationModelById($id: Int) {
        delete_vehicle_location(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${vehicle_locationModelFields}
    `;