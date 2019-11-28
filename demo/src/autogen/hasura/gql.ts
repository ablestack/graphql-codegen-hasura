/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { observationModelFields } from 'undefined';
import { pModelFields } from 'undefined';
import { patientModelFields } from 'undefined';
import { usersModelFields } from 'undefined';
import { vehicleModelFields } from 'undefined';
import { vehicle_locationModelFields } from 'undefined';

    export const observationModelFields = gql`
      fragment observationModelFields on observation {
      id
      resource
      }
    `;

    const INSERT_OBSERVATION_MODEL = gql`
      mutation insertobservationModel($objects: [observation_insert_input!]!, $onConflict: observation_on_conflict) {
        insert_observation(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...observationModelFields
          }
        }
      }
      ${observationModelFields}
    `;

    const FETCH_OBSERVATION_MODEL = gql`
      query fetchobservationModel($observationId: uuid!) {
        observation_by_pk(id: $observationId) {
          ...observationModelFields
        }
      }
      ${observationModelFields}
    `;

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

    const REMOVE_OBSERVATION_MODEL = gql`
      mutation removeobservationModelById($id: uuid) {
        delete_observation(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${observationModelFields}
    `;

    export const pModelFields = gql`
      fragment pModelFields on p {
      circle
      id
      poly
      }
    `;

    const INSERT_P_MODEL = gql`
      mutation insertpModel($objects: [p_insert_input!]!, $onConflict: p_on_conflict) {
        insert_p(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...pModelFields
          }
        }
      }
      ${pModelFields}
    `;

    const FETCH_P_MODEL = gql`
      query fetchpModel($pId: Int!) {
        p_by_pk(id: $pId) {
          ...pModelFields
        }
      }
      ${pModelFields}
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

    const REMOVE_P_MODEL = gql`
      mutation removepModelById($id: Int) {
        delete_p(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${pModelFields}
    `;

    export const patientModelFields = gql`
      fragment patientModelFields on patient {
      id
      resource
      }
    `;

    const INSERT_PATIENT_MODEL = gql`
      mutation insertpatientModel($objects: [patient_insert_input!]!, $onConflict: patient_on_conflict) {
        insert_patient(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...patientModelFields
          }
        }
      }
      ${patientModelFields}
    `;

    const FETCH_PATIENT_MODEL = gql`
      query fetchpatientModel($patientId: uuid!) {
        patient_by_pk(id: $patientId) {
          ...patientModelFields
        }
      }
      ${patientModelFields}
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

    const REMOVE_PATIENT_MODEL = gql`
      mutation removepatientModelById($id: uuid) {
        delete_patient(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${patientModelFields}
    `;

    export const usersModelFields = gql`
      fragment usersModelFields on users {
      created_at
      id
      name
      }
    `;

    const INSERT_USERS_MODEL = gql`
      mutation insertusersModel($objects: [users_insert_input!]!, $onConflict: users_on_conflict) {
        insert_users(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...usersModelFields
          }
        }
      }
      ${usersModelFields}
    `;

    const FETCH_USERS_MODEL = gql`
      query fetchusersModel($usersId: Int!) {
        users_by_pk(id: $usersId) {
          ...usersModelFields
        }
      }
      ${usersModelFields}
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

    const REMOVE_USERS_MODEL = gql`
      mutation removeusersModelById($id: Int) {
        delete_users(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${usersModelFields}
    `;

    export const vehicleModelFields = gql`
      fragment vehicleModelFields on vehicle {
      id
      name
      }
    `;

    const INSERT_VEHICLE_MODEL = gql`
      mutation insertvehicleModel($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
        insert_vehicle(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...vehicleModelFields
          }
        }
      }
      ${vehicleModelFields}
    `;

    const FETCH_VEHICLE_MODEL = gql`
      query fetchvehicleModel($vehicleId: String!) {
        vehicle_by_pk(id: $vehicleId) {
          ...vehicleModelFields
        }
      }
      ${vehicleModelFields}
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

    const REMOVE_VEHICLE_MODEL = gql`
      mutation removevehicleModelById($id: String) {
        delete_vehicle(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${vehicleModelFields}
    `;

    export const vehicle_locationModelFields = gql`
      fragment vehicle_locationModelFields on vehicle_location {
      id
      location
      timestamp
      vehicle_id
      }
    `;

    const INSERT_VEHICLE_LOCATION_MODEL = gql`
      mutation insertvehicle_locationModel($objects: [vehicle_location_insert_input!]!, $onConflict: vehicle_location_on_conflict) {
        insert_vehicle_location(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...vehicle_locationModelFields
          }
        }
      }
      ${vehicle_locationModelFields}
    `;

    const FETCH_VEHICLE_LOCATION_MODEL = gql`
      query fetchvehicle_locationModel($vehicle_locationId: Int!) {
        vehicle_location_by_pk(id: $vehicle_locationId) {
          ...vehicle_locationModelFields
        }
      }
      ${vehicle_locationModelFields}
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

    const REMOVE_VEHICLE_LOCATION_MODEL = gql`
      mutation removevehicle_locationModelById($id: Int) {
        delete_vehicle_location(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${vehicle_locationModelFields}
    `;