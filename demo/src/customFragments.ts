import gql from "graphql-tag";

export const VehicleGraphFragmentDoc = gql`
  fragment VehicleGraph on vehicle {
    id
    name
    locations {
      location
    }
  }
`;

export const VehicleGraphLocationOnlyFragmentDoc = gql`
  fragment VehicleGraphLocationOnly on vehicle {
    id
    locations {
      location
    }
  }
`;
