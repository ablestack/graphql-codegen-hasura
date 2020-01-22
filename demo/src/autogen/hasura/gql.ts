/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { VehicleGraphFragmentDoc } from '../';
import { VehicleGraphLocationOnlyFragmentDoc } from '../';
import { DogModelFragmentDoc } from '../';

    // VehicleGraph GQL
    //------------------------------------------------ 
  


    // Query: FetchById
    //
    const QUERY_VEHICLEGRAPH_BYID = gql`
  query queryVehicleGraphById($vehicleId: String!) {
    vehicle_by_pk(id: $vehicleId) {
      ...VehicleGraph
    }
  }
  ${VehicleGraphFragmentDoc}`;


    // Query: Fetch
    //
    const QUERY_VEHICLEGRAPH_OBJECTS = gql`
  query queryVehicleGraphObjects(
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
    const SUBSCRIBE_TO_VEHICLEGRAPH_BYID = gql`
  subscription subscribeToVehicleGraphById($vehicleId: String!) {
    vehicle_by_pk(id: $vehicleId) {
      ...VehicleGraph
    }
  }
  ${VehicleGraphFragmentDoc}`;


    // Subscription: Fetch
    //
    const SUBSCRIBE_TO_VEHICLEGRAPH_OBJECTS = gql`
  subscription subscribeToVehicleGraphObjects(
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
    const QUERY_VEHICLEGRAPHLOCATIONONLY_BYID = gql`
  query queryVehicleGraphLocationOnlyById($vehicleId: String!) {
    vehicle_by_pk(id: $vehicleId) {
      ...VehicleGraphLocationOnly
    }
  }
  ${VehicleGraphLocationOnlyFragmentDoc}`;


    // Query: Fetch
    //
    const QUERY_VEHICLEGRAPHLOCATIONONLY_OBJECTS = gql`
  query queryVehicleGraphLocationOnlyObjects(
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
    const SUBSCRIBE_TO_VEHICLEGRAPHLOCATIONONLY_BYID = gql`
  subscription subscribeToVehicleGraphLocationOnlyById($vehicleId: String!) {
    vehicle_by_pk(id: $vehicleId) {
      ...VehicleGraphLocationOnly
    }
  }
  ${VehicleGraphLocationOnlyFragmentDoc}`;


    // Subscription: Fetch
    //
    const SUBSCRIBE_TO_VEHICLEGRAPHLOCATIONONLY_OBJECTS = gql`
  subscription subscribeToVehicleGraphLocationOnlyObjects(
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
    const QUERY_DOGMODEL_BYID = gql`
  query queryDogModelById($dogsId: uuid!) {
    dogs_by_pk(id: $dogsId) {
      ...DogModel
    }
  }
  ${DogModelFragmentDoc}`;


    // Query: Fetch
    //
    const QUERY_DOGMODEL_OBJECTS = gql`
  query queryDogModelObjects(
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
    const SUBSCRIBE_TO_DOGMODEL_BYID = gql`
  subscription subscribeToDogModelById($dogsId: uuid!) {
    dogs_by_pk(id: $dogsId) {
      ...DogModel
    }
  }
  ${DogModelFragmentDoc}`;


    // Subscription: Fetch
    //
    const SUBSCRIBE_TO_DOGMODEL_OBJECTS = gql`
  subscription subscribeToDogModelObjects(
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