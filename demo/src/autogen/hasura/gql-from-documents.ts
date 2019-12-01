/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { VehicleGraphFieldsFragmentDoc } from '../';

    // VehicleGraphFields GQL
    //------------------------------------------------ 
  


    // Query: FetchById
    //

    const FETCH_VEHICLEGRAPHFIELDS_BYID = gql`
      query fetchVehicleGraphFieldsById($vehicleId: String!) {
        vehicle_by_pk(id: $vehicleId) {
          ...VehicleGraphFields
        }
      }
      ${VehicleGraphFieldsFragmentDoc}
    `;


    // Query: Fetch
    //

    const FETCH_VEHICLEGRAPHFIELDSS = gql`
      query fetchVehicleGraphFields(
        $distinct_on: [vehicle_select_column!]
        $where: vehicle_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [vehicle_order_by!]
      ) {
        vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...VehicleGraphFields
        }
      }
      ${VehicleGraphFieldsFragmentDoc}
    `;


    // Mutation: Insert
    //

    const INSERT_VEHICLEGRAPHFIELDS = gql`
      mutation insertVehicleGraphFields($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
        insert_vehicle(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...VehicleGraphFields
          }
        }
      }
      ${VehicleGraphFieldsFragmentDoc}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_VEHICLEGRAPHFIELDS_BYID = gql`
      mutation updateVehicleGraphFieldsById($id: String, $set: vehicle_set_input) {
        update_vehicle(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...VehicleGraphFields
          }
        }
      }
      ${VehicleGraphFieldsFragmentDoc}
    `;


    // Mutation: Update
    //

    const UPDATE_VEHICLEGRAPHFIELDSS = gql`
      mutation updateVehicleGraphFields($set: vehicle_set_input, $where:vehicle_bool_exp!) {
        update_vehicle(_set: $set, where: $where) {
          affected_rows
          returning {
            ...VehicleGraphFields
          }
        }
      }
      ${VehicleGraphFieldsFragmentDoc}
    `;