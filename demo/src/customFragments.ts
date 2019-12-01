import gql from "graphql-tag";

export const VehicleGraphFieldsFragmentDoc = gql`
  fragment VehicleGraphFields on vehicle {
    id
    name
    locations {
      location
    }
  }
`;
