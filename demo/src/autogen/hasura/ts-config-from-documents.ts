import { ApolloCache, NormalizedCacheObject, ApolloClient, StoreObject } from "@apollo/client";
import { TypePolicies } from "@apollo/client/cache/inmemory/policies";
import { Vehicle } from "../";
import { Query_RootVehicleArgs } from "../";

export interface ApolloContext {
  cache: ApolloCache<NormalizedCacheObject>;
  client: ApolloClient<object>;
  getCacheKey: (object: StoreObject) => string;
}

export interface RootResolver<TableResolverMap> {
  [table: string]: TableResolverMap;
}

// vehicle Resolver Types
//------------------------------------------------

/**
 *  The vehicle Resolver types can be used as follows:
 *
 *  export const VehicleResolvers: RootResolver<VehicleResolverMap> = {
 *    vehicle: {
 *      anyFieldName: (vehicle, args, context, info) => {
 *        return vehicle.anyFieldName;
 *      },
 *     },
 *  };
 */

//------------------------------------------------

export interface VehicleResolverFn {
  (vehicle: Partial<Vehicle>, args: Query_RootVehicleArgs, context: ApolloContext, info: any): any;
}

export interface VehicleResolverMap {
  [field: string]: VehicleResolverFn;
}

// vehicle TypePolicy
//------------------------------------------------

export const VehicleTypePoliciesConfig: TypePolicies = {
  Query: {
    fields: {
      vehicle_by_pk(existingData, { args, toReference }) {
        return existingData || toReference({ __typename: "vehicle", id: args.id });
      }
    }
  }
};

//------------------------------------
//

// COMBINED TYPE POLICIES CONFIG

export const CombinedTypePoliciesConfig: TypePolicies = Object.assign({}, VehicleTypePoliciesConfig);
