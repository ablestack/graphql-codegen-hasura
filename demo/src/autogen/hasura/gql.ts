/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { VehicleFragmentDoc } from '../';
import { VehicleLocationOnlyFragmentDoc } from '../';
import { DogFragmentDoc } from '../';

    // Vehicle GQL
    //------------------------------------------------ 
  


    // Query: FetchById
    //
    const QUERY_VEHICLE_BYID = gql`
  query queryVehicleById($vehicleId: String!) {
    vehicle_by_pk(id: $vehicleId) {
      ...Vehicle
    }
  }
  ${VehicleFragmentDoc}`;


    // Query: Fetch
    //
    const QUERY_VEHICLE_OBJECTS = gql`
  query queryVehicleObjects(
    $distinct_on: [vehicle_select_column!]
    $where: vehicle_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [vehicle_order_by!]
  ) {
    vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...Vehicle
    }
  }
  ${VehicleFragmentDoc}
  `;


    // Subscription: FetchById
    //
    const SUBSCRIBE_TO_VEHICLE_BYID = gql`
  subscription subscribeToVehicleById($vehicleId: String!) {
    vehicle_by_pk(id: $vehicleId) {
      ...Vehicle
    }
  }
  ${VehicleFragmentDoc}`;


    // Subscription: Fetch
    //
    const SUBSCRIBE_TO_VEHICLE_OBJECTS = gql`
  subscription subscribeToVehicleObjects(
    $distinct_on: [vehicle_select_column!]
    $where: vehicle_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [vehicle_order_by!]
  ) {
    vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...Vehicle
    }
  }
  ${VehicleFragmentDoc}
  `;


    // Mutation: Insert
    //

    const INSERT_VEHICLE = gql`
      mutation insertVehicle($objects: [vehicle_insert_input!]!) {
        insert_vehicle(objects: $objects) {
          affected_rows
          returning {
            ...Vehicle
          }
        }
      }
      ${VehicleFragmentDoc}
    `;


    // Mutation: Insert
    //

    const INSERT_VEHICLE_WITH_ONCONFLICT = gql`
      mutation insertVehicleWithOnConflict($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
        insert_vehicle(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...Vehicle
          }
        }
      }
      ${VehicleFragmentDoc}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_VEHICLE_BYID = gql`
      mutation updateVehicleById($id: String, $set: vehicle_set_input) {
        update_vehicle(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...Vehicle
          }
        }
      }
      ${VehicleFragmentDoc}
    `;


    // Mutation: Update
    //

    const UPDATE_VEHICLES = gql`
      mutation updateVehicle($set: vehicle_set_input, $where:vehicle_bool_exp!) {
        update_vehicle(_set: $set, where: $where) {
          affected_rows
          returning {
            ...Vehicle
          }
        }
      }
      ${VehicleFragmentDoc}
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

    // VehicleLocationOnly GQL
    //------------------------------------------------ 
  


    // Query: FetchById
    //
    const QUERY_VEHICLELOCATIONONLY_BYID = gql`
  query queryVehicleLocationOnlyById($vehicleId: String!) {
    vehicle_by_pk(id: $vehicleId) {
      ...VehicleLocationOnly
    }
  }
  ${VehicleLocationOnlyFragmentDoc}`;


    // Query: Fetch
    //
    const QUERY_VEHICLELOCATIONONLY_OBJECTS = gql`
  query queryVehicleLocationOnlyObjects(
    $distinct_on: [vehicle_select_column!]
    $where: vehicle_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [vehicle_order_by!]
  ) {
    vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...VehicleLocationOnly
    }
  }
  ${VehicleLocationOnlyFragmentDoc}
  `;


    // Subscription: FetchById
    //
    const SUBSCRIBE_TO_VEHICLELOCATIONONLY_BYID = gql`
  subscription subscribeToVehicleLocationOnlyById($vehicleId: String!) {
    vehicle_by_pk(id: $vehicleId) {
      ...VehicleLocationOnly
    }
  }
  ${VehicleLocationOnlyFragmentDoc}`;


    // Subscription: Fetch
    //
    const SUBSCRIBE_TO_VEHICLELOCATIONONLY_OBJECTS = gql`
  subscription subscribeToVehicleLocationOnlyObjects(
    $distinct_on: [vehicle_select_column!]
    $where: vehicle_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [vehicle_order_by!]
  ) {
    vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...VehicleLocationOnly
    }
  }
  ${VehicleLocationOnlyFragmentDoc}
  `;


    // Mutation: Insert
    //

    const INSERT_VEHICLELOCATIONONLY = gql`
      mutation insertVehicleLocationOnly($objects: [vehicle_insert_input!]!) {
        insert_vehicle(objects: $objects) {
          affected_rows
          returning {
            ...VehicleLocationOnly
          }
        }
      }
      ${VehicleLocationOnlyFragmentDoc}
    `;


    // Mutation: Insert
    //

    const INSERT_VEHICLELOCATIONONLY_WITH_ONCONFLICT = gql`
      mutation insertVehicleLocationOnlyWithOnConflict($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
        insert_vehicle(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...VehicleLocationOnly
          }
        }
      }
      ${VehicleLocationOnlyFragmentDoc}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_VEHICLELOCATIONONLY_BYID = gql`
      mutation updateVehicleLocationOnlyById($id: String, $set: vehicle_set_input) {
        update_vehicle(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...VehicleLocationOnly
          }
        }
      }
      ${VehicleLocationOnlyFragmentDoc}
    `;


    // Mutation: Update
    //

    const UPDATE_VEHICLELOCATIONONLYS = gql`
      mutation updateVehicleLocationOnly($set: vehicle_set_input, $where:vehicle_bool_exp!) {
        update_vehicle(_set: $set, where: $where) {
          affected_rows
          returning {
            ...VehicleLocationOnly
          }
        }
      }
      ${VehicleLocationOnlyFragmentDoc}
    `;

    // Dog GQL
    //------------------------------------------------ 
  


    // Query: Fetch
    //
    const QUERY_DOG_OBJECTS = gql`
  query queryDogObjects(
    $distinct_on: [dog_select_column!]
    $where: dog_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [dog_order_by!]
  ) {
    dog(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...Dog
    }
  }
  ${DogFragmentDoc}
  `;


    // Subscription: Fetch
    //
    const SUBSCRIBE_TO_DOG_OBJECTS = gql`
  subscription subscribeToDogObjects(
    $distinct_on: [dog_select_column!]
    $where: dog_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [dog_order_by!]
  ) {
    dog(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...Dog
    }
  }
  ${DogFragmentDoc}
  `;