/* eslint-disable @typescript-eslint/class-name-casing */
import { ApolloCache, NormalizedCacheObject, ApolloClient, StoreObject } from '@apollo/client';
import { TypePolicies } from '@apollo/client/cache/inmemory/policies';
import { Vehicle } from '../';
import { Query_RootVehicleArgs } from '../';
import { Dogs } from '../';
import { Query_RootDogsArgs } from '../';

  export interface ApolloContext {
    cache: ApolloCache<NormalizedCacheObject>;
    client: ApolloClient<NormalizedCacheObject>;
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
  

  export interface VehicleResolverFn<TContext> {
    (vehicle: Partial<Vehicle>, args: Query_RootVehicleArgs, context: TContext, info: any): any;
  }

  export interface VehicleResolverMap<TContext = ApolloContext> {
    [field: string]: VehicleResolverFn<TContext>;
  }
  

    // vehicle Type Policy
    //------------------------------------------------
  

      export const VehicleTypePoliciesConfig: TypePolicies = {
        Query: {
          fields: {
            vehicle_by_pk:{
              keyArgs: ["id"],
              read(existingData, { args, toReference }) {
                return existingData || toReference({ __typename: 'vehicle', id: args!.id });
              },
            }
          },
        },
      };
  

  // dogs Resolver Types
  //------------------------------------------------

  /** 
   *  The dogs Resolver types can be used as follows:
   * 
   *  export const DogsResolvers: RootResolver<DogsResolverMap> = {
   *    dogs: {
   *      anyFieldName: (dogs, args, context, info) => {
   *        return dogs.anyFieldName;
   *      },
   *     },
   *  };
  */

  //------------------------------------------------
  

  export interface DogsResolverFn<TContext> {
    (dogs: Partial<Dogs>, args: Query_RootDogsArgs, context: TContext, info: any): any;
  }

  export interface DogsResolverMap<TContext = ApolloContext> {
    [field: string]: DogsResolverFn<TContext>;
  }
  

    // dogs Type Policy
    //------------------------------------------------
  

      export const DogsTypePoliciesConfig: TypePolicies = {
        Query: {
          fields: {
            dogs_by_pk:{
              keyArgs: ["id"],
              read(existingData, { args, toReference }) {
                return existingData || toReference({ __typename: 'dogs', id: args!.id });
              },
            }
          },
        },
      };
  