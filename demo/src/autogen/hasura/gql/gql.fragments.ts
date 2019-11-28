/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';

    export const observationModelFields = gql`
      fragment observationModelFields on observation {
      id
      resource
      }
    `;

    export const pModelFields = gql`
      fragment pModelFields on p {
      circle
      id
      poly
      }
    `;

    export const patientModelFields = gql`
      fragment patientModelFields on patient {
      id
      resource
      }
    `;

    export const usersModelFields = gql`
      fragment usersModelFields on users {
      created_at
      id
      name
      }
    `;

    export const vehicleModelFields = gql`
      fragment vehicleModelFields on vehicle {
      id
      name
      }
    `;

    export const vehicle_locationModelFields = gql`
      fragment vehicle_locationModelFields on vehicle_location {
      id
      location
      timestamp
      vehicle_id
      }
    `;