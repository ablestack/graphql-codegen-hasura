/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { VehicleGraphFragmentDoc } from '../';
import { VehicleGraphLocationOnlyFragmentDoc } from '../';

    // VehicleGraph GQL
    //------------------------------------------------ 
  


    // Query: FetchById
    //

    const FETCH_VEHICLEGRAPH_BYID = gql`
      query fetchVehicleGraphById($vehicleId: String!) {
        vehicle_by_pk(id: $vehicleId) {
          ...VehicleGraph
        }
      }
      ${VehicleGraphFragmentDoc}
    `;


    // Query: Fetch
    //

    const FETCH_VEHICLEGRAPHS = gql`
      query fetchVehicleGraph(
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

    const FETCH_VEHICLEGRAPHLOCATIONONLY_BYID = gql`
      query fetchVehicleGraphLocationOnlyById($vehicleId: String!) {
        vehicle_by_pk(id: $vehicleId) {
          ...VehicleGraphLocationOnly
        }
      }
      ${VehicleGraphLocationOnlyFragmentDoc}
    `;


    // Query: Fetch
    //

    const FETCH_VEHICLEGRAPHLOCATIONONLYS = gql`
      query fetchVehicleGraphLocationOnly(
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