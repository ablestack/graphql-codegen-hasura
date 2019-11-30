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