import { defaultDataIdFromObject } from "@apollo/client";
import { RefObj, RefTypeMap } from ".";

// Optimistic response generation utility method
//
export function generateOptimisticResponseForMutation<T>({
  operationType,
  entityName,
  objects
}: {
  operationType: "update" | "insert" | "delete";
  entityName: string;
  objects: { id: any }[];
}): T {
  const optimisticResponse = ({
    __typename: "mutation_root",
    [`${operationType}_${entityName}`]: {
      affected_rows: objects.length,
      returning: objects.map(entity => {
        return { ...entity, __typename: entityName };
      }),
      __typename: `\${entityName}_mutation_response`
    }
  } as unknown) as T;

  return optimisticResponse;
}

/**
 *
 * @param param0
 */
export function generateUpdateFunctionForMutation<T>({ operationType, entityName, entityId }: { operationType: "delete"; entityName: string; entityId: string | number }) {
  return (cache: any, result: any) => {
    cache.evict(defaultDataIdFromObject({ __typename: entityName, id: entityId }));
  };
}

export function IS_JAVASCRIPT_SCALAR_EQUIVALENT(arg: any, includeNull: boolean = false) {
  var type = typeof arg;
  return (includeNull && arg === null) || (type != "object" && type != "function");
}

export function IS_APOLLO_OBJECT(o: any) {
  return o && o.id && o.__typename;
}

export function IS_NON_NULL_OBJECT(o: any) {
  return typeof o === "object" && o !== null;
}

export function IS_OBJECT_WITH_ID(o: any) {
  return IS_NON_NULL_OBJECT(o) && o.id;
}

export function IS_INSERT_INPUT_OBJECT(o: any) {
  if (!IS_NON_NULL_OBJECT(o)) return false;

  return o.data && IS_OBJECT_WITH_ID(o.data);
}

export function convertApolloObjectToRefObj(o: any) {
  if (!IS_APOLLO_OBJECT(o)) throw new Error(`Provided object was not of type ApolloObject (with id & _typename properties): ${JSON.stringify(o)}`);
  return { id: o.id, __typename: o.__typeName };
}

export function convertApolloObjectArrayToRefObj(o: any[]) {
  return o.map(arrayItem => convertApolloObjectToRefObj(o));
}

export function convertObjectWithIdToRefObj(o: any, typename: string) {
  if (!IS_OBJECT_WITH_ID(o)) throw new Error(`Provided object was not of type ObjectWithId: ${JSON.stringify(o)}`);
  return { id: o.id, __typename: typename };
}

export function convertObjectWithIdArrayToRefObj(o: any[], typename: string) {
  return o.map(arrayItem => convertObjectWithIdToRefObj(o, typename));
}

function convertToRef(o: any, typename: string) {
  if (!IS_NON_NULL_OBJECT(o)) return null;

  if (Array.isArray(o)) {
    if (o.length === 0 || !o[0] || !IS_OBJECT_WITH_ID(o[0])) return null;
    return convertObjectWithIdArrayToRefObj(o, typename);
  }

  if (IS_OBJECT_WITH_ID(o)) {
    return convertObjectWithIdToRefObj(o, typename);
  }

  //if here, might be a InsertInput object, which has the payload in a property named data
  if (IS_INSERT_INPUT_OBJECT(o)) {
    return convertToRef(o.data, typename);
  }

  // if non of the above, return null
  return null;
}

// childRefsObjs: { [key: string]: RefObj | RefObj[] }

export function convertInsertInputToShallowPartialFragment({ insertInputType, refTypeMap }: { insertInputType: object; refTypeMap?: RefTypeMap }) {
  const fragment: any = {};

  // Loop object and build up a fragment appropriate for a cache-add
  for (const [insertInputKey, insertInputValue] of Object.entries(insertInputType)) {
    //Add scalar values
    if (IS_JAVASCRIPT_SCALAR_EQUIVALENT(insertInputValue)) {
      fragment[insertInputKey] = insertInputValue;
      continue;
    }

    if (IS_NON_NULL_OBJECT(insertInputValue) && refTypeMap && refTypeMap[insertInputKey]) {
      const ref = convertToRef(insertInputValue, refTypeMap[insertInputKey]);
      if (ref) {
        fragment[insertInputKey] = ref;
        continue;
      }
    }

    return fragment;
  }
}
