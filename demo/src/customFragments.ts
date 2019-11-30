import gql from "graphql-tag";

const CUSTOM_VEHICLE_FIELDS_FRAGMENT = gql`
  fragment UsersGraphFields on users {
    created_at
    id
    name
  }
`;
