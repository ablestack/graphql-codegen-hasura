/* eslint-disable @typescript-eslint/class-name-casing */
import { ApolloCache, NormalizedCacheObject, ApolloClient, StoreObject } from '@apollo/client';
import { TypePolicies } from '@apollo/client/cache/inmemory/policies';
import { Vehicle } from '../';
import { Query_RootVehicleArgs } from '../';
import { Dog } from '../';
import { Query_RootDogArgs } from '../';

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
  

  // dog Resolver Types
  //------------------------------------------------

  /** 
   *  The dog Resolver types can be used as follows:
   * 
   *  export const DogResolvers: RootResolver<DogResolverMap> = {
   *    dog: {
   *      anyFieldName: (dog, args, context, info) => {
   *        return dog.anyFieldName;
   *      },
   *     },
   *  };
  */

  //------------------------------------------------
  

  export interface DogResolverFn<TContext> {
    (dog: Partial<Dog>, args: Query_RootDogArgs, context: TContext, info: any): any;
  }

  export interface DogResolverMap<TContext = ApolloContext> {
    [field: string]: DogResolverFn<TContext>;
  }
  