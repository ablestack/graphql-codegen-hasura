/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';

  // observation GQL
  //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const ObservationModelFields = gql`
      fragment ObservationModelFields on observation {
      id
      resource
      }
    `;


    // Query: FetchById
    //

    const FETCH_OBSERVATIONMODELFIELDS_MODEL_BYID = gql`
      query fetchObservationModelFieldsById($observationId: uuid!) {
        observation_by_pk(id: $observationId) {
          ...ObservationModelFields
        }
      }
      ${ObservationModelFieldsModelFields}
    `;


    // Query: Fetch
    //

    const FETCH_OBSERVATIONMODELFIELDS_MODELS = gql`
      query fetchObservationModelFields(
        $distinct_on: [observation_select_column!]
        $where: observation_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [observation_order_by!]
      ) {
        observation(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...ObservationModelFields
        }
      }
      ${ObservationModelFieldsModelFields}
    `;


    // Mutation: Insert
    //

    const INSERT_OBSERVATIONMODELFIELDS_MODEL = gql`
      mutation insertObservationModelFields($objects: [observation_insert_input!]!, $onConflict: observation_on_conflict) {
        insert_observation(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...ObservationModelFields
          }
        }
      }
      ${ObservationModelFieldsModelFields}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_OBSERVATIONMODELFIELDS_MODEL_BYID = gql`
      mutation updateObservationModelFieldsById($id: uuid, $set: observation_set_input) {
        update_observation(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...ObservationModelFields
          }
        }
      }
      ${ObservationModelFieldsModelFields}
    `;


    // Mutation: Update
    //

    const UPDATE_OBSERVATIONMODELFIELDS_MODELS = gql`
      mutation updateObservationModelFields($set: observation_set_input, $where:observation_bool_exp!) {
        update_observation(_set: $set, where: $where) {
          affected_rows
          returning {
            ...ObservationModelFields
          }
        }
      }
      ${ObservationModelFieldsModelFields}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_OBSERVATIONMODEL_MODEL_BYID = gql`
      mutation removeObservationModelById($id: uuid) {
        delete_observation(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${ObservationModelFieldsModelFields}
    `;


    // Mutation: Remove
    //

    const REMOVE_OBSERVATIONMODEL_MODELS = gql`
      mutation removeObservationModel($where:observation_bool_exp!) {
        delete_observation(where: $where) {
          affected_rows
        }
      }
      ${ObservationModelFieldsModelFields}
    `;

  // p GQL
  //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const PModelFields = gql`
      fragment PModelFields on p {
      circle
      id
      poly
      }
    `;


    // Query: FetchById
    //

    const FETCH_PMODELFIELDS_MODEL_BYID = gql`
      query fetchPModelFieldsById($pId: Int!) {
        p_by_pk(id: $pId) {
          ...PModelFields
        }
      }
      ${PModelFieldsModelFields}
    `;


    // Query: Fetch
    //

    const FETCH_PMODELFIELDS_MODELS = gql`
      query fetchPModelFields(
        $distinct_on: [p_select_column!]
        $where: p_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [p_order_by!]
      ) {
        p(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...PModelFields
        }
      }
      ${PModelFieldsModelFields}
    `;


    // Mutation: Insert
    //

    const INSERT_PMODELFIELDS_MODEL = gql`
      mutation insertPModelFields($objects: [p_insert_input!]!, $onConflict: p_on_conflict) {
        insert_p(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...PModelFields
          }
        }
      }
      ${PModelFieldsModelFields}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_PMODELFIELDS_MODEL_BYID = gql`
      mutation updatePModelFieldsById($id: Int, $set: p_set_input) {
        update_p(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...PModelFields
          }
        }
      }
      ${PModelFieldsModelFields}
    `;


    // Mutation: Update
    //

    const UPDATE_PMODELFIELDS_MODELS = gql`
      mutation updatePModelFields($set: p_set_input, $where:p_bool_exp!) {
        update_p(_set: $set, where: $where) {
          affected_rows
          returning {
            ...PModelFields
          }
        }
      }
      ${PModelFieldsModelFields}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_PMODEL_MODEL_BYID = gql`
      mutation removePModelById($id: Int) {
        delete_p(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${PModelFieldsModelFields}
    `;


    // Mutation: Remove
    //

    const REMOVE_PMODEL_MODELS = gql`
      mutation removePModel($where:p_bool_exp!) {
        delete_p(where: $where) {
          affected_rows
        }
      }
      ${PModelFieldsModelFields}
    `;

  // patient GQL
  //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const PatientModelFields = gql`
      fragment PatientModelFields on patient {
      id
      resource
      }
    `;


    // Query: FetchById
    //

    const FETCH_PATIENTMODELFIELDS_MODEL_BYID = gql`
      query fetchPatientModelFieldsById($patientId: uuid!) {
        patient_by_pk(id: $patientId) {
          ...PatientModelFields
        }
      }
      ${PatientModelFieldsModelFields}
    `;


    // Query: Fetch
    //

    const FETCH_PATIENTMODELFIELDS_MODELS = gql`
      query fetchPatientModelFields(
        $distinct_on: [patient_select_column!]
        $where: patient_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [patient_order_by!]
      ) {
        patient(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...PatientModelFields
        }
      }
      ${PatientModelFieldsModelFields}
    `;


    // Mutation: Insert
    //

    const INSERT_PATIENTMODELFIELDS_MODEL = gql`
      mutation insertPatientModelFields($objects: [patient_insert_input!]!, $onConflict: patient_on_conflict) {
        insert_patient(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...PatientModelFields
          }
        }
      }
      ${PatientModelFieldsModelFields}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_PATIENTMODELFIELDS_MODEL_BYID = gql`
      mutation updatePatientModelFieldsById($id: uuid, $set: patient_set_input) {
        update_patient(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...PatientModelFields
          }
        }
      }
      ${PatientModelFieldsModelFields}
    `;


    // Mutation: Update
    //

    const UPDATE_PATIENTMODELFIELDS_MODELS = gql`
      mutation updatePatientModelFields($set: patient_set_input, $where:patient_bool_exp!) {
        update_patient(_set: $set, where: $where) {
          affected_rows
          returning {
            ...PatientModelFields
          }
        }
      }
      ${PatientModelFieldsModelFields}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_PATIENTMODEL_MODEL_BYID = gql`
      mutation removePatientModelById($id: uuid) {
        delete_patient(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${PatientModelFieldsModelFields}
    `;


    // Mutation: Remove
    //

    const REMOVE_PATIENTMODEL_MODELS = gql`
      mutation removePatientModel($where:patient_bool_exp!) {
        delete_patient(where: $where) {
          affected_rows
        }
      }
      ${PatientModelFieldsModelFields}
    `;

  // users GQL
  //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const UsersModelFields = gql`
      fragment UsersModelFields on users {
      created_at
      id
      name
      }
    `;


    // Query: FetchById
    //

    const FETCH_USERSMODELFIELDS_MODEL_BYID = gql`
      query fetchUsersModelFieldsById($usersId: Int!) {
        users_by_pk(id: $usersId) {
          ...UsersModelFields
        }
      }
      ${UsersModelFieldsModelFields}
    `;


    // Query: Fetch
    //

    const FETCH_USERSMODELFIELDS_MODELS = gql`
      query fetchUsersModelFields(
        $distinct_on: [users_select_column!]
        $where: users_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [users_order_by!]
      ) {
        users(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...UsersModelFields
        }
      }
      ${UsersModelFieldsModelFields}
    `;


    // Mutation: Insert
    //

    const INSERT_USERSMODELFIELDS_MODEL = gql`
      mutation insertUsersModelFields($objects: [users_insert_input!]!, $onConflict: users_on_conflict) {
        insert_users(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...UsersModelFields
          }
        }
      }
      ${UsersModelFieldsModelFields}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_USERSMODELFIELDS_MODEL_BYID = gql`
      mutation updateUsersModelFieldsById($id: Int, $set: users_set_input) {
        update_users(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...UsersModelFields
          }
        }
      }
      ${UsersModelFieldsModelFields}
    `;


    // Mutation: Update
    //

    const UPDATE_USERSMODELFIELDS_MODELS = gql`
      mutation updateUsersModelFields($set: users_set_input, $where:users_bool_exp!) {
        update_users(_set: $set, where: $where) {
          affected_rows
          returning {
            ...UsersModelFields
          }
        }
      }
      ${UsersModelFieldsModelFields}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_USERSMODEL_MODEL_BYID = gql`
      mutation removeUsersModelById($id: Int) {
        delete_users(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${UsersModelFieldsModelFields}
    `;


    // Mutation: Remove
    //

    const REMOVE_USERSMODEL_MODELS = gql`
      mutation removeUsersModel($where:users_bool_exp!) {
        delete_users(where: $where) {
          affected_rows
        }
      }
      ${UsersModelFieldsModelFields}
    `;

  // vehicle GQL
  //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const VehicleModelFields = gql`
      fragment VehicleModelFields on vehicle {
      id
      name
      }
    `;


    // Query: FetchById
    //

    const FETCH_VEHICLEMODELFIELDS_MODEL_BYID = gql`
      query fetchVehicleModelFieldsById($vehicleId: String!) {
        vehicle_by_pk(id: $vehicleId) {
          ...VehicleModelFields
        }
      }
      ${VehicleModelFieldsModelFields}
    `;


    // Query: Fetch
    //

    const FETCH_VEHICLEMODELFIELDS_MODELS = gql`
      query fetchVehicleModelFields(
        $distinct_on: [vehicle_select_column!]
        $where: vehicle_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [vehicle_order_by!]
      ) {
        vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...VehicleModelFields
        }
      }
      ${VehicleModelFieldsModelFields}
    `;


    // Mutation: Insert
    //

    const INSERT_VEHICLEMODELFIELDS_MODEL = gql`
      mutation insertVehicleModelFields($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
        insert_vehicle(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...VehicleModelFields
          }
        }
      }
      ${VehicleModelFieldsModelFields}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_VEHICLEMODELFIELDS_MODEL_BYID = gql`
      mutation updateVehicleModelFieldsById($id: String, $set: vehicle_set_input) {
        update_vehicle(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...VehicleModelFields
          }
        }
      }
      ${VehicleModelFieldsModelFields}
    `;


    // Mutation: Update
    //

    const UPDATE_VEHICLEMODELFIELDS_MODELS = gql`
      mutation updateVehicleModelFields($set: vehicle_set_input, $where:vehicle_bool_exp!) {
        update_vehicle(_set: $set, where: $where) {
          affected_rows
          returning {
            ...VehicleModelFields
          }
        }
      }
      ${VehicleModelFieldsModelFields}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_VEHICLEMODEL_MODEL_BYID = gql`
      mutation removeVehicleModelById($id: String) {
        delete_vehicle(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${VehicleModelFieldsModelFields}
    `;


    // Mutation: Remove
    //

    const REMOVE_VEHICLEMODEL_MODELS = gql`
      mutation removeVehicleModel($where:vehicle_bool_exp!) {
        delete_vehicle(where: $where) {
          affected_rows
        }
      }
      ${VehicleModelFieldsModelFields}
    `;

  // vehicle_location GQL
  //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const Vehicle_LocationModelFields = gql`
      fragment Vehicle_LocationModelFields on vehicle_location {
      id
      location
      timestamp
      vehicle_id
      }
    `;


    // Query: FetchById
    //

    const FETCH_VEHICLE_LOCATIONMODELFIELDS_MODEL_BYID = gql`
      query fetchVehicle_LocationModelFieldsById($vehicle_LocationId: Int!) {
        vehicle_location_by_pk(id: $vehicle_LocationId) {
          ...Vehicle_LocationModelFields
        }
      }
      ${Vehicle_LocationModelFieldsModelFields}
    `;


    // Query: Fetch
    //

    const FETCH_VEHICLE_LOCATIONMODELFIELDS_MODELS = gql`
      query fetchVehicle_LocationModelFields(
        $distinct_on: [vehicle_location_select_column!]
        $where: vehicle_location_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [vehicle_location_order_by!]
      ) {
        vehicle_location(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...Vehicle_LocationModelFields
        }
      }
      ${Vehicle_LocationModelFieldsModelFields}
    `;


    // Mutation: Insert
    //

    const INSERT_VEHICLE_LOCATIONMODELFIELDS_MODEL = gql`
      mutation insertVehicle_LocationModelFields($objects: [vehicle_location_insert_input!]!, $onConflict: vehicle_location_on_conflict) {
        insert_vehicle_location(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...Vehicle_LocationModelFields
          }
        }
      }
      ${Vehicle_LocationModelFieldsModelFields}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_VEHICLE_LOCATIONMODELFIELDS_MODEL_BYID = gql`
      mutation updateVehicle_LocationModelFieldsById($id: Int, $set: vehicle_location_set_input) {
        update_vehicle_location(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...Vehicle_LocationModelFields
          }
        }
      }
      ${Vehicle_LocationModelFieldsModelFields}
    `;


    // Mutation: Update
    //

    const UPDATE_VEHICLE_LOCATIONMODELFIELDS_MODELS = gql`
      mutation updateVehicle_LocationModelFields($set: vehicle_location_set_input, $where:vehicle_location_bool_exp!) {
        update_vehicle_location(_set: $set, where: $where) {
          affected_rows
          returning {
            ...Vehicle_LocationModelFields
          }
        }
      }
      ${Vehicle_LocationModelFieldsModelFields}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_VEHICLE_LOCATIONMODEL_MODEL_BYID = gql`
      mutation removeVehicle_LocationModelById($id: Int) {
        delete_vehicle_location(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${Vehicle_LocationModelFieldsModelFields}
    `;


    // Mutation: Remove
    //

    const REMOVE_VEHICLE_LOCATIONMODEL_MODELS = gql`
      mutation removeVehicle_LocationModel($where:vehicle_location_bool_exp!) {
        delete_vehicle_location(where: $where) {
          affected_rows
        }
      }
      ${Vehicle_LocationModelFieldsModelFields}
    `;