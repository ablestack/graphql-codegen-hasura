/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';

  // observation GQL
  //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const ObservationModelFieldsFragmentDoc = gql`
      fragment ObservationModelFields on observation {
      id
      resource
      }
    `;


    // Query: FetchById
    //

    const FETCH_OBSERVATIONMODELFIELDS_BYID = gql`
      query fetchObservationModelFieldsById($observationId: uuid!) {
        observation_by_pk(id: $observationId) {
          ...ObservationModelFields
        }
      }
      ${ObservationModelFieldsFragmentDoc}
    `;


    // Query: Fetch
    //

    const FETCH_OBSERVATIONMODELFIELDSS = gql`
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
      ${ObservationModelFieldsFragmentDoc}
    `;


    // Mutation: Insert
    //

    const INSERT_OBSERVATIONMODELFIELDS = gql`
      mutation insertObservationModelFields($objects: [observation_insert_input!]!, $onConflict: observation_on_conflict) {
        insert_observation(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...ObservationModelFields
          }
        }
      }
      ${ObservationModelFieldsFragmentDoc}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_OBSERVATIONMODELFIELDS_BYID = gql`
      mutation updateObservationModelFieldsById($id: uuid, $set: observation_set_input) {
        update_observation(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...ObservationModelFields
          }
        }
      }
      ${ObservationModelFieldsFragmentDoc}
    `;


    // Mutation: Update
    //

    const UPDATE_OBSERVATIONMODELFIELDSS = gql`
      mutation updateObservationModelFields($set: observation_set_input, $where:observation_bool_exp!) {
        update_observation(_set: $set, where: $where) {
          affected_rows
          returning {
            ...ObservationModelFields
          }
        }
      }
      ${ObservationModelFieldsFragmentDoc}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_OBSERVATIONMODEL_BYID = gql`
      mutation removeObservationModelById($id: uuid) {
        delete_observation(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${ObservationModelFieldsFragmentDoc}
    `;


    // Mutation: Remove
    //

    const REMOVE_OBSERVATIONMODELS = gql`
      mutation removeObservationModel($where:observation_bool_exp!) {
        delete_observation(where: $where) {
          affected_rows
        }
      }
      ${ObservationModelFieldsFragmentDoc}
    `;

  // p GQL
  //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const PModelFieldsFragmentDoc = gql`
      fragment PModelFields on p {
      circle
      id
      poly
      }
    `;


    // Query: FetchById
    //

    const FETCH_PMODELFIELDS_BYID = gql`
      query fetchPModelFieldsById($pId: Int!) {
        p_by_pk(id: $pId) {
          ...PModelFields
        }
      }
      ${PModelFieldsFragmentDoc}
    `;


    // Query: Fetch
    //

    const FETCH_PMODELFIELDSS = gql`
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
      ${PModelFieldsFragmentDoc}
    `;


    // Mutation: Insert
    //

    const INSERT_PMODELFIELDS = gql`
      mutation insertPModelFields($objects: [p_insert_input!]!, $onConflict: p_on_conflict) {
        insert_p(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...PModelFields
          }
        }
      }
      ${PModelFieldsFragmentDoc}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_PMODELFIELDS_BYID = gql`
      mutation updatePModelFieldsById($id: Int, $set: p_set_input) {
        update_p(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...PModelFields
          }
        }
      }
      ${PModelFieldsFragmentDoc}
    `;


    // Mutation: Update
    //

    const UPDATE_PMODELFIELDSS = gql`
      mutation updatePModelFields($set: p_set_input, $where:p_bool_exp!) {
        update_p(_set: $set, where: $where) {
          affected_rows
          returning {
            ...PModelFields
          }
        }
      }
      ${PModelFieldsFragmentDoc}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_PMODEL_BYID = gql`
      mutation removePModelById($id: Int) {
        delete_p(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${PModelFieldsFragmentDoc}
    `;


    // Mutation: Remove
    //

    const REMOVE_PMODELS = gql`
      mutation removePModel($where:p_bool_exp!) {
        delete_p(where: $where) {
          affected_rows
        }
      }
      ${PModelFieldsFragmentDoc}
    `;

  // patient GQL
  //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const PatientModelFieldsFragmentDoc = gql`
      fragment PatientModelFields on patient {
      id
      resource
      }
    `;


    // Query: FetchById
    //

    const FETCH_PATIENTMODELFIELDS_BYID = gql`
      query fetchPatientModelFieldsById($patientId: uuid!) {
        patient_by_pk(id: $patientId) {
          ...PatientModelFields
        }
      }
      ${PatientModelFieldsFragmentDoc}
    `;


    // Query: Fetch
    //

    const FETCH_PATIENTMODELFIELDSS = gql`
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
      ${PatientModelFieldsFragmentDoc}
    `;


    // Mutation: Insert
    //

    const INSERT_PATIENTMODELFIELDS = gql`
      mutation insertPatientModelFields($objects: [patient_insert_input!]!, $onConflict: patient_on_conflict) {
        insert_patient(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...PatientModelFields
          }
        }
      }
      ${PatientModelFieldsFragmentDoc}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_PATIENTMODELFIELDS_BYID = gql`
      mutation updatePatientModelFieldsById($id: uuid, $set: patient_set_input) {
        update_patient(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...PatientModelFields
          }
        }
      }
      ${PatientModelFieldsFragmentDoc}
    `;


    // Mutation: Update
    //

    const UPDATE_PATIENTMODELFIELDSS = gql`
      mutation updatePatientModelFields($set: patient_set_input, $where:patient_bool_exp!) {
        update_patient(_set: $set, where: $where) {
          affected_rows
          returning {
            ...PatientModelFields
          }
        }
      }
      ${PatientModelFieldsFragmentDoc}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_PATIENTMODEL_BYID = gql`
      mutation removePatientModelById($id: uuid) {
        delete_patient(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${PatientModelFieldsFragmentDoc}
    `;


    // Mutation: Remove
    //

    const REMOVE_PATIENTMODELS = gql`
      mutation removePatientModel($where:patient_bool_exp!) {
        delete_patient(where: $where) {
          affected_rows
        }
      }
      ${PatientModelFieldsFragmentDoc}
    `;

  // users GQL
  //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const UsersModelFieldsFragmentDoc = gql`
      fragment UsersModelFields on users {
      created_at
      id
      name
      }
    `;


    // Query: FetchById
    //

    const FETCH_USERSMODELFIELDS_BYID = gql`
      query fetchUsersModelFieldsById($usersId: Int!) {
        users_by_pk(id: $usersId) {
          ...UsersModelFields
        }
      }
      ${UsersModelFieldsFragmentDoc}
    `;


    // Query: Fetch
    //

    const FETCH_USERSMODELFIELDSS = gql`
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
      ${UsersModelFieldsFragmentDoc}
    `;


    // Mutation: Insert
    //

    const INSERT_USERSMODELFIELDS = gql`
      mutation insertUsersModelFields($objects: [users_insert_input!]!, $onConflict: users_on_conflict) {
        insert_users(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...UsersModelFields
          }
        }
      }
      ${UsersModelFieldsFragmentDoc}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_USERSMODELFIELDS_BYID = gql`
      mutation updateUsersModelFieldsById($id: Int, $set: users_set_input) {
        update_users(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...UsersModelFields
          }
        }
      }
      ${UsersModelFieldsFragmentDoc}
    `;


    // Mutation: Update
    //

    const UPDATE_USERSMODELFIELDSS = gql`
      mutation updateUsersModelFields($set: users_set_input, $where:users_bool_exp!) {
        update_users(_set: $set, where: $where) {
          affected_rows
          returning {
            ...UsersModelFields
          }
        }
      }
      ${UsersModelFieldsFragmentDoc}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_USERSMODEL_BYID = gql`
      mutation removeUsersModelById($id: Int) {
        delete_users(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${UsersModelFieldsFragmentDoc}
    `;


    // Mutation: Remove
    //

    const REMOVE_USERSMODELS = gql`
      mutation removeUsersModel($where:users_bool_exp!) {
        delete_users(where: $where) {
          affected_rows
        }
      }
      ${UsersModelFieldsFragmentDoc}
    `;

  // vehicle GQL
  //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const VehicleModelFieldsFragmentDoc = gql`
      fragment VehicleModelFields on vehicle {
      id
      name
      }
    `;


    // Query: FetchById
    //

    const FETCH_VEHICLEMODELFIELDS_BYID = gql`
      query fetchVehicleModelFieldsById($vehicleId: String!) {
        vehicle_by_pk(id: $vehicleId) {
          ...VehicleModelFields
        }
      }
      ${VehicleModelFieldsFragmentDoc}
    `;


    // Query: Fetch
    //

    const FETCH_VEHICLEMODELFIELDSS = gql`
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
      ${VehicleModelFieldsFragmentDoc}
    `;


    // Mutation: Insert
    //

    const INSERT_VEHICLEMODELFIELDS = gql`
      mutation insertVehicleModelFields($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
        insert_vehicle(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...VehicleModelFields
          }
        }
      }
      ${VehicleModelFieldsFragmentDoc}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_VEHICLEMODELFIELDS_BYID = gql`
      mutation updateVehicleModelFieldsById($id: String, $set: vehicle_set_input) {
        update_vehicle(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...VehicleModelFields
          }
        }
      }
      ${VehicleModelFieldsFragmentDoc}
    `;


    // Mutation: Update
    //

    const UPDATE_VEHICLEMODELFIELDSS = gql`
      mutation updateVehicleModelFields($set: vehicle_set_input, $where:vehicle_bool_exp!) {
        update_vehicle(_set: $set, where: $where) {
          affected_rows
          returning {
            ...VehicleModelFields
          }
        }
      }
      ${VehicleModelFieldsFragmentDoc}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_VEHICLEMODEL_BYID = gql`
      mutation removeVehicleModelById($id: String) {
        delete_vehicle(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${VehicleModelFieldsFragmentDoc}
    `;


    // Mutation: Remove
    //

    const REMOVE_VEHICLEMODELS = gql`
      mutation removeVehicleModel($where:vehicle_bool_exp!) {
        delete_vehicle(where: $where) {
          affected_rows
        }
      }
      ${VehicleModelFieldsFragmentDoc}
    `;

  // vehicle_location GQL
  //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const Vehicle_LocationModelFieldsFragmentDoc = gql`
      fragment Vehicle_LocationModelFields on vehicle_location {
      id
      location
      timestamp
      vehicle_id
      }
    `;


    // Query: FetchById
    //

    const FETCH_VEHICLE_LOCATIONMODELFIELDS_BYID = gql`
      query fetchVehicle_LocationModelFieldsById($vehicle_LocationId: Int!) {
        vehicle_location_by_pk(id: $vehicle_LocationId) {
          ...Vehicle_LocationModelFields
        }
      }
      ${Vehicle_LocationModelFieldsFragmentDoc}
    `;


    // Query: Fetch
    //

    const FETCH_VEHICLE_LOCATIONMODELFIELDSS = gql`
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
      ${Vehicle_LocationModelFieldsFragmentDoc}
    `;


    // Mutation: Insert
    //

    const INSERT_VEHICLE_LOCATIONMODELFIELDS = gql`
      mutation insertVehicle_LocationModelFields($objects: [vehicle_location_insert_input!]!, $onConflict: vehicle_location_on_conflict) {
        insert_vehicle_location(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...Vehicle_LocationModelFields
          }
        }
      }
      ${Vehicle_LocationModelFieldsFragmentDoc}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_VEHICLE_LOCATIONMODELFIELDS_BYID = gql`
      mutation updateVehicle_LocationModelFieldsById($id: Int, $set: vehicle_location_set_input) {
        update_vehicle_location(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...Vehicle_LocationModelFields
          }
        }
      }
      ${Vehicle_LocationModelFieldsFragmentDoc}
    `;


    // Mutation: Update
    //

    const UPDATE_VEHICLE_LOCATIONMODELFIELDSS = gql`
      mutation updateVehicle_LocationModelFields($set: vehicle_location_set_input, $where:vehicle_location_bool_exp!) {
        update_vehicle_location(_set: $set, where: $where) {
          affected_rows
          returning {
            ...Vehicle_LocationModelFields
          }
        }
      }
      ${Vehicle_LocationModelFieldsFragmentDoc}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_VEHICLE_LOCATIONMODEL_BYID = gql`
      mutation removeVehicle_LocationModelById($id: Int) {
        delete_vehicle_location(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${Vehicle_LocationModelFieldsFragmentDoc}
    `;


    // Mutation: Remove
    //

    const REMOVE_VEHICLE_LOCATIONMODELS = gql`
      mutation removeVehicle_LocationModel($where:vehicle_location_bool_exp!) {
        delete_vehicle_location(where: $where) {
          affected_rows
        }
      }
      ${Vehicle_LocationModelFieldsFragmentDoc}
    `;