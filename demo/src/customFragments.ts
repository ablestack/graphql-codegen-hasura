import gql from "graphql-tag";

const CUSTOM_VEHICLE_FIELDS_FRAGMENT = gql`
  fragment VehicleGraphFields on vehicle {
    id
    name
    locations {
      location
    }
  }
`;
