import { TypePolicies } from '@apollo/client/cache/inmemory/policies';

    // vehicle TypePolicy
    //------------------------------------------------
  

      export const VehicleTypePoliciesConfig: TypePolicies = {
        Query: {
          fields: {
            vehicle_by_pk(existingData, { args, toReference }) {
              return existingData || toReference({ __typename: 'vehicle', id: args.id });
            },
          },
        },
      };
  

  export const CombinedTypePoliciesConfig: TypePolicies = Object.assign(
    {},
    VehicleTypePoliciesConfig
  );
  