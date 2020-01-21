/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { VehicleGraphFragmentDoc } from '../';
import { VehicleGraphLocationOnlyFragmentDoc } from '../';
import { DogModelFragmentDoc } from '../';

    // VehicleGraph GQL
    //------------------------------------------------ 
  


    // Query: FetchById
    //
    const FETCH_VEHICLEGRAPH_BYID_AS_QUERY = gql`
  query fetchVehicleGraphByIdAsQuery($vehicleId: String!) {
    vehicle_by_pk(id: $vehicleId) {
      ...VehicleGraph
    }
  }
  ${VehicleGraphFragmentDoc}`;


    // Query: Fetch
    //
    const FETCH_VEHICLEGRAPH_OBJECTS_AS_QUERY = gql`
  query fetchVehicleGraphAsQuery(
    $distinct_on: [vehicle_select_column!]
    $where: vehicle_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [vehicle_order_by!]
  ) {
    vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...VehicleGraph
    }
  }
  ${VehicleGraphFragmentDoc}
  `;


    // Subscription: FetchById
    //
    const FETCH_VEHICLEGRAPH_BYID_AS_SUBSCRIPTION = gql`
  subscription fetchVehicleGraphByIdAsSubscription($vehicleId: String!) {
    vehicle_by_pk(id: $vehicleId) {
      ...VehicleGraph
    }
  }
  ${VehicleGraphFragmentDoc}`;


    // Subscription: Fetch
    //
    const FETCH_VEHICLEGRAPH_OBJECTS_AS_SUBSCRIPTION = gql`
  subscription fetchVehicleGraphAsSubscription(
    $distinct_on: [vehicle_select_column!]
    $where: vehicle_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [vehicle_order_by!]
  ) {
    vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...VehicleGraph
    }
  }
  ${VehicleGraphFragmentDoc}
  `;


    // Mutation: Insert
    //

    const INSERT_VEHICLEGRAPH = gql`
      mutation insertVehicleGraph($objects: [vehicle_insert_input!]!) {
        insert_vehicle(objects: $objects) {
          affected_rows
          returning {
            ...VehicleGraph
          }
        }
      }
      ${VehicleGraphFragmentDoc}
    `;


    // Mutation: Insert
    //

    const INSERT_VEHICLEGRAPH_WITH_ONCONFLICT = gql`
      mutation insertVehicleGraphWithOnConflict($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
        insert_vehicle(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...VehicleGraph
          }
        }
      }
      ${VehicleGraphFragmentDoc}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_VEHICLEGRAPH_BYID = gql`
      mutation updateVehicleGraphById($id: String, $set: vehicle_set_input) {
        update_vehicle(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...VehicleGraph
          }
        }
      }
      ${VehicleGraphFragmentDoc}
    `;


    // Mutation: Update
    //

    const UPDATE_VEHICLEGRAPHS = gql`
      mutation updateVehicleGraph($set: vehicle_set_input, $where:vehicle_bool_exp!) {
        update_vehicle(_set: $set, where: $where) {
          affected_rows
          returning {
            ...VehicleGraph
          }
        }
      }
      ${VehicleGraphFragmentDoc}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_VEHICLEMODEL_BYID = gql`
      mutation removeVehicleModelById($id: String) {
        delete_vehicle(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
    `;


    // Mutation: Remove
    //

    const REMOVE_VEHICLEMODELS = gql`
      mutation removeVehicleModel($where:vehicle_bool_exp!) {
        delete_vehicle(where: $where) {
          affected_rows
        }
      }
    `;

    // VehicleGraphLocationOnly GQL
    //------------------------------------------------ 
  


    // Query: FetchById
    //
    const FETCH_VEHICLEGRAPHLOCATIONONLY_BYID_AS_QUERY = gql`
  query fetchVehicleGraphLocationOnlyByIdAsQuery($vehicleId: String!) {
    vehicle_by_pk(id: $vehicleId) {
      ...VehicleGraphLocationOnly
    }
  }
  ${VehicleGraphLocationOnlyFragmentDoc}`;


    // Query: Fetch
    //
    const FETCH_VEHICLEGRAPHLOCATIONONLY_OBJECTS_AS_QUERY = gql`
  query fetchVehicleGraphLocationOnlyAsQuery(
    $distinct_on: [vehicle_select_column!]
    $where: vehicle_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [vehicle_order_by!]
  ) {
    vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...VehicleGraphLocationOnly
    }
  }
  ${VehicleGraphLocationOnlyFragmentDoc}
  `;


    // Subscription: FetchById
    //
    const FETCH_VEHICLEGRAPHLOCATIONONLY_BYID_AS_SUBSCRIPTION = gql`
  subscription fetchVehicleGraphLocationOnlyByIdAsSubscription($vehicleId: String!) {
    vehicle_by_pk(id: $vehicleId) {
      ...VehicleGraphLocationOnly
    }
  }
  ${VehicleGraphLocationOnlyFragmentDoc}`;


    // Subscription: Fetch
    //
    const FETCH_VEHICLEGRAPHLOCATIONONLY_OBJECTS_AS_SUBSCRIPTION = gql`
  subscription fetchVehicleGraphLocationOnlyAsSubscription(
    $distinct_on: [vehicle_select_column!]
    $where: vehicle_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [vehicle_order_by!]
  ) {
    vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...VehicleGraphLocationOnly
    }
  }
  ${VehicleGraphLocationOnlyFragmentDoc}
  `;


    // Mutation: Insert
    //

    const INSERT_VEHICLEGRAPHLOCATIONONLY = gql`
      mutation insertVehicleGraphLocationOnly($objects: [vehicle_insert_input!]!) {
        insert_vehicle(objects: $objects) {
          affected_rows
          returning {
            ...VehicleGraphLocationOnly
          }
        }
      }
      ${VehicleGraphLocationOnlyFragmentDoc}
    `;


    // Mutation: Insert
    //

    const INSERT_VEHICLEGRAPHLOCATIONONLY_WITH_ONCONFLICT = gql`
      mutation insertVehicleGraphLocationOnlyWithOnConflict($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
        insert_vehicle(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...VehicleGraphLocationOnly
          }
        }
      }
      ${VehicleGraphLocationOnlyFragmentDoc}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_VEHICLEGRAPHLOCATIONONLY_BYID = gql`
      mutation updateVehicleGraphLocationOnlyById($id: String, $set: vehicle_set_input) {
        update_vehicle(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...VehicleGraphLocationOnly
          }
        }
      }
      ${VehicleGraphLocationOnlyFragmentDoc}
    `;


    // Mutation: Update
    //

    const UPDATE_VEHICLEGRAPHLOCATIONONLYS = gql`
      mutation updateVehicleGraphLocationOnly($set: vehicle_set_input, $where:vehicle_bool_exp!) {
        update_vehicle(_set: $set, where: $where) {
          affected_rows
          returning {
            ...VehicleGraphLocationOnly
          }
        }
      }
      ${VehicleGraphLocationOnlyFragmentDoc}
    `;

    // DogModel GQL
    //------------------------------------------------ 
  


    // Query: FetchById
    //
    const FETCH_DOGMODEL_BYID_AS_QUERY = gql`
  query fetchDogModelByIdAsQuery($dogsId: uuid!) {
    dogs_by_pk(id: $dogsId) {
      ...DogModel
    }
  }
  ${DogModelFragmentDoc}`;


    // Query: Fetch
    //
    const FETCH_DOGMODEL_OBJECTS_AS_QUERY = gql`
  query fetchDogModelAsQuery(
    $distinct_on: [dogs_select_column!]
    $where: dogs_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [dogs_order_by!]
  ) {
    dogs(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...DogModel
    }
  }
  ${DogModelFragmentDoc}
  `;


    // Subscription: FetchById
    //
    const FETCH_DOGMODEL_BYID_AS_SUBSCRIPTION = gql`
  subscription fetchDogModelByIdAsSubscription($dogsId: uuid!) {
    dogs_by_pk(id: $dogsId) {
      ...DogModel
    }
  }
  ${DogModelFragmentDoc}`;


    // Subscription: Fetch
    //
    const FETCH_DOGMODEL_OBJECTS_AS_SUBSCRIPTION = gql`
  subscription fetchDogModelAsSubscription(
    $distinct_on: [dogs_select_column!]
    $where: dogs_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [dogs_order_by!]
  ) {
    dogs(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...DogModel
    }
  }
  ${DogModelFragmentDoc}
  `;


    // Mutation: Insert
    //

    const INSERT_DOGMODEL = gql`
      mutation insertDogModel($objects: [dogs_insert_input!]!) {
        insert_dogs(objects: $objects) {
          affected_rows
          returning {
            ...DogModel
          }
        }
      }
      ${DogModelFragmentDoc}
    `;


    // Mutation: Insert
    //

    const INSERT_DOGMODEL_WITH_ONCONFLICT = gql`
      mutation insertDogModelWithOnConflict($objects: [dogs_insert_input!]!, $onConflict: dogs_on_conflict) {
        insert_dogs(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...DogModel
          }
        }
      }
      ${DogModelFragmentDoc}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_DOGMODEL_BYID = gql`
      mutation updateDogModelById($id: uuid, $set: dogs_set_input) {
        update_dogs(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...DogModel
          }
        }
      }
      ${DogModelFragmentDoc}
    `;


    // Mutation: Update
    //

    const UPDATE_DOGMODELS = gql`
      mutation updateDogModel($set: dogs_set_input, $where:dogs_bool_exp!) {
        update_dogs(_set: $set, where: $where) {
          affected_rows
          returning {
            ...DogModel
          }
        }
      }
      ${DogModelFragmentDoc}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_DOGSMODEL_BYID = gql`
      mutation removeDogsModelById($id: uuid) {
        delete_dogs(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
    `;


    // Mutation: Remove
    //

    const REMOVE_DOGSMODELS = gql`
      mutation removeDogsModel($where:dogs_bool_exp!) {
        delete_dogs(where: $where) {
          affected_rows
        }
      }
    `;