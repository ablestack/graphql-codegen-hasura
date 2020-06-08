import gql from "graphql-tag";

export const VehicleFragmentDoc = gql`
  fragment Vehicle on vehicle {
    id
    name
    locations {
      location
    }
  }
`;

export const VehicleLocationOnlyFragmentDoc = gql`
  fragment VehicleLocationOnly on vehicle {
    id
    locations {
      location
    }
  }
`;

// export const DogFragmentDoc = gql`
//   fragment Dog on dog {
//     name
//     breed
//   }
// `;
