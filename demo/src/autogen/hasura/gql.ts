/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';

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

    const FETCH_OBSERVATION_MODEL_BYID = gql`
      query fetchobservationModelById($observationId: uuid!) {
        observation_by_pk(id: $observationId) {
          ...observationModelFields
        }
      }
      ${observationModelFields}
    `;

    const FETCH_OBSERVATION_MODELS = gql`
      query fetchobservationModel(
        $distinct_on: [observation_select_column!]
        $where: observation_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [observation_order_by!]
      ) {
        observation(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...observationModelFields
        }
      }
      ${observationModelFields}
    `;

    const UPDATE_OBSERVATION_MODEL_BYID = gql`
      mutation updateobservationModelById($id: uuid, $set: observation_set_input) {
        update_observation(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...observationModelFields
          }
        }
      }
      ${observationModelFields}
    `;

    const UPDATE_OBSERVATION_MODELS = gql`
      mutation updateobservationModel($set: observation_set_input, $where:observation_bool_exp!) {
        update_observation(_set: $set, where: $where) {
          affected_rows
          returning {
            ...observationModelFields
          }
        }
      }
      ${observationModelFields}
    `;

    const REMOVE_OBSERVATION_MODEL_BYID = gql`
      mutation removeobservationModelById($id: uuid) {
        delete_observation(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${observationModelFields}
    `;

    const REMOVE_OBSERVATION_MODELS = gql`
      mutation removeobservationModel($where:observation_bool_exp!) {
        delete_observation(where: $where) {
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

    const FETCH_P_MODEL_BYID = gql`
      query fetchpModelById($pId: Int!) {
        p_by_pk(id: $pId) {
          ...pModelFields
        }
      }
      ${pModelFields}
    `;

    const FETCH_P_MODELS = gql`
      query fetchpModel(
        $distinct_on: [p_select_column!]
        $where: p_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [p_order_by!]
      ) {
        p(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...pModelFields
        }
      }
      ${pModelFields}
    `;

    const UPDATE_P_MODEL_BYID = gql`
      mutation updatepModelById($id: Int, $set: p_set_input) {
        update_p(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...pModelFields
          }
        }
      }
      ${pModelFields}
    `;

    const UPDATE_P_MODELS = gql`
      mutation updatepModel($set: p_set_input, $where:p_bool_exp!) {
        update_p(_set: $set, where: $where) {
          affected_rows
          returning {
            ...pModelFields
          }
        }
      }
      ${pModelFields}
    `;

    const REMOVE_P_MODEL_BYID = gql`
      mutation removepModelById($id: Int) {
        delete_p(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${pModelFields}
    `;

    const REMOVE_P_MODELS = gql`
      mutation removepModel($where:p_bool_exp!) {
        delete_p(where: $where) {
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

    const FETCH_PATIENT_MODEL_BYID = gql`
      query fetchpatientModelById($patientId: uuid!) {
        patient_by_pk(id: $patientId) {
          ...patientModelFields
        }
      }
      ${patientModelFields}
    `;

    const FETCH_PATIENT_MODELS = gql`
      query fetchpatientModel(
        $distinct_on: [patient_select_column!]
        $where: patient_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [patient_order_by!]
      ) {
        patient(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...patientModelFields
        }
      }
      ${patientModelFields}
    `;

    const UPDATE_PATIENT_MODEL_BYID = gql`
      mutation updatepatientModelById($id: uuid, $set: patient_set_input) {
        update_patient(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...patientModelFields
          }
        }
      }
      ${patientModelFields}
    `;

    const UPDATE_PATIENT_MODELS = gql`
      mutation updatepatientModel($set: patient_set_input, $where:patient_bool_exp!) {
        update_patient(_set: $set, where: $where) {
          affected_rows
          returning {
            ...patientModelFields
          }
        }
      }
      ${patientModelFields}
    `;

    const REMOVE_PATIENT_MODEL_BYID = gql`
      mutation removepatientModelById($id: uuid) {
        delete_patient(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${patientModelFields}
    `;

    const REMOVE_PATIENT_MODELS = gql`
      mutation removepatientModel($where:patient_bool_exp!) {
        delete_patient(where: $where) {
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

    const FETCH_USERS_MODEL_BYID = gql`
      query fetchusersModelById($usersId: Int!) {
        users_by_pk(id: $usersId) {
          ...usersModelFields
        }
      }
      ${usersModelFields}
    `;

    const FETCH_USERS_MODELS = gql`
      query fetchusersModel(
        $distinct_on: [users_select_column!]
        $where: users_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [users_order_by!]
      ) {
        users(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...usersModelFields
        }
      }
      ${usersModelFields}
    `;

    const UPDATE_USERS_MODEL_BYID = gql`
      mutation updateusersModelById($id: Int, $set: users_set_input) {
        update_users(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...usersModelFields
          }
        }
      }
      ${usersModelFields}
    `;

    const UPDATE_USERS_MODELS = gql`
      mutation updateusersModel($set: users_set_input, $where:users_bool_exp!) {
        update_users(_set: $set, where: $where) {
          affected_rows
          returning {
            ...usersModelFields
          }
        }
      }
      ${usersModelFields}
    `;

    const REMOVE_USERS_MODEL_BYID = gql`
      mutation removeusersModelById($id: Int) {
        delete_users(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${usersModelFields}
    `;

    const REMOVE_USERS_MODELS = gql`
      mutation removeusersModel($where:users_bool_exp!) {
        delete_users(where: $where) {
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

    const FETCH_VEHICLE_MODEL_BYID = gql`
      query fetchvehicleModelById($vehicleId: String!) {
        vehicle_by_pk(id: $vehicleId) {
          ...vehicleModelFields
        }
      }
      ${vehicleModelFields}
    `;

    const FETCH_VEHICLE_MODELS = gql`
      query fetchvehicleModel(
        $distinct_on: [vehicle_select_column!]
        $where: vehicle_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [vehicle_order_by!]
      ) {
        vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...vehicleModelFields
        }
      }
      ${vehicleModelFields}
    `;

    const UPDATE_VEHICLE_MODEL_BYID = gql`
      mutation updatevehicleModelById($id: String, $set: vehicle_set_input) {
        update_vehicle(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...vehicleModelFields
          }
        }
      }
      ${vehicleModelFields}
    `;

    const UPDATE_VEHICLE_MODELS = gql`
      mutation updatevehicleModel($set: vehicle_set_input, $where:vehicle_bool_exp!) {
        update_vehicle(_set: $set, where: $where) {
          affected_rows
          returning {
            ...vehicleModelFields
          }
        }
      }
      ${vehicleModelFields}
    `;

    const REMOVE_VEHICLE_MODEL_BYID = gql`
      mutation removevehicleModelById($id: String) {
        delete_vehicle(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${vehicleModelFields}
    `;

    const REMOVE_VEHICLE_MODELS = gql`
      mutation removevehicleModel($where:vehicle_bool_exp!) {
        delete_vehicle(where: $where) {
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

    const FETCH_VEHICLE_LOCATION_MODEL_BYID = gql`
      query fetchvehicle_locationModelById($vehicle_locationId: Int!) {
        vehicle_location_by_pk(id: $vehicle_locationId) {
          ...vehicle_locationModelFields
        }
      }
      ${vehicle_locationModelFields}
    `;

    const FETCH_VEHICLE_LOCATION_MODELS = gql`
      query fetchvehicle_locationModel(
        $distinct_on: [vehicle_location_select_column!]
        $where: vehicle_location_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [vehicle_location_order_by!]
      ) {
        vehicle_location(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...vehicle_locationModelFields
        }
      }
      ${vehicle_locationModelFields}
    `;

    const UPDATE_VEHICLE_LOCATION_MODEL_BYID = gql`
      mutation updatevehicle_locationModelById($id: Int, $set: vehicle_location_set_input) {
        update_vehicle_location(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...vehicle_locationModelFields
          }
        }
      }
      ${vehicle_locationModelFields}
    `;

    const UPDATE_VEHICLE_LOCATION_MODELS = gql`
      mutation updatevehicle_locationModel($set: vehicle_location_set_input, $where:vehicle_location_bool_exp!) {
        update_vehicle_location(_set: $set, where: $where) {
          affected_rows
          returning {
            ...vehicle_locationModelFields
          }
        }
      }
      ${vehicle_locationModelFields}
    `;

    const REMOVE_VEHICLE_LOCATION_MODEL_BYID = gql`
      mutation removevehicle_locationModelById($id: Int) {
        delete_vehicle_location(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${vehicle_locationModelFields}
    `;

    const REMOVE_VEHICLE_LOCATION_MODELS = gql`
      mutation removevehicle_locationModel($where:vehicle_location_bool_exp!) {
        delete_vehicle_location(where: $where) {
          affected_rows
        }
      }
      ${vehicle_locationModelFields}
    `;