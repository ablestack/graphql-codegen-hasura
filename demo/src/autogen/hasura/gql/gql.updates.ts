/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { observationModelFields } from './gql.fragments';
import { pModelFields } from './gql.fragments';
import { patientModelFields } from './gql.fragments';
import { usersModelFields } from './gql.fragments';
import { vehicleModelFields } from './gql.fragments';
import { vehicle_locationModelFields } from './gql.fragments';

    const UPDATE_OBSERVATION_MODEL = gql`
      mutation updateobservationModelById($id: uuid, $changes: observation_set_input) {
        update_observation(where: { id: { _eq: $id } }, _set: $changes) {
          affected_rows
          returning {
            ...observationModelFields
          }
        }
      }
      ${observationModelFields}
    `;

    const UPDATE_P_MODEL = gql`
      mutation updatepModelById($id: Int, $changes: p_set_input) {
        update_p(where: { id: { _eq: $id } }, _set: $changes) {
          affected_rows
          returning {
            ...pModelFields
          }
        }
      }
      ${pModelFields}
    `;

    const UPDATE_PATIENT_MODEL = gql`
      mutation updatepatientModelById($id: uuid, $changes: patient_set_input) {
        update_patient(where: { id: { _eq: $id } }, _set: $changes) {
          affected_rows
          returning {
            ...patientModelFields
          }
        }
      }
      ${patientModelFields}
    `;

    const UPDATE_USERS_MODEL = gql`
      mutation updateusersModelById($id: Int, $changes: users_set_input) {
        update_users(where: { id: { _eq: $id } }, _set: $changes) {
          affected_rows
          returning {
            ...usersModelFields
          }
        }
      }
      ${usersModelFields}
    `;

    const UPDATE_VEHICLE_MODEL = gql`
      mutation updatevehicleModelById($id: String, $changes: vehicle_set_input) {
        update_vehicle(where: { id: { _eq: $id } }, _set: $changes) {
          affected_rows
          returning {
            ...vehicleModelFields
          }
        }
      }
      ${vehicleModelFields}
    `;

    const UPDATE_VEHICLE_LOCATION_MODEL = gql`
      mutation updatevehicle_locationModelById($id: Int, $changes: vehicle_location_set_input) {
        update_vehicle_location(where: { id: { _eq: $id } }, _set: $changes) {
          affected_rows
          returning {
            ...vehicle_locationModelFields
          }
        }
      }
      ${vehicle_locationModelFields}
    `;