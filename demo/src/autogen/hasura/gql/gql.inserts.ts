/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { observationModelFields } from './gql.fragments';
import { pModelFields } from './gql.fragments';
import { patientModelFields } from './gql.fragments';
import { usersModelFields } from './gql.fragments';
import { vehicleModelFields } from './gql.fragments';
import { vehicle_locationModelFields } from './gql.fragments';

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