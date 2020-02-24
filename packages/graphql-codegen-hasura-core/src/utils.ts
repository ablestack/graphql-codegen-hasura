import { defaultDataIdFromObject } from "@apollo/client";
import { FieldMap } from ".";

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
      returning: objects.map(o => {
        if (operationType === "insert") return convertInsertInputToPartialFragmentResursive({ insertInput: o });
        else return { ...o, __typename: entityName };
      }),
      __typename: `${entityName}_mutation_response`
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

  return o.data;
}

export function GET_INSERT_INPUT_DATA(o: any) {
  if (!IS_NON_NULL_OBJECT(o)) throw new Error(`Provided object was not of type InsertInput (with data property): ${JSON.stringify(o)}`);

  return o.data;
}

export function convertApolloObjectToRefObj(o: any) {
  if (!IS_APOLLO_OBJECT(o)) throw new Error(`Provided object was not of type ApolloObject (with id & _typename properties): ${JSON.stringify(o)}`);
  return { id: o.id, __typename: o.__typeName };
}

export function convertApolloObjectArrayToRefObj(o: any[]) {
  return o.map(arrayItem => convertApolloObjectToRefObj(o));
}

export function ensureTypenameOnFragment(o: any, typename: string) {
  if (!IS_OBJECT_WITH_ID(o)) throw new Error(`Provided object was not of type ObjWithId: ${JSON.stringify(o)}`);
  return { ...o, __typename: typename };
}

export function ensureTypenameOnFragments(o: any[], typename: string) {
  return o.map(arrayItem => ensureTypenameOnFragment(o, typename));
}

//
// Series of functions for helping handle translations between input objects and fragments
//
export function addTypenameToObjWithId({ o, typename }: { o: any; typename: string }) {
  if (!IS_OBJECT_WITH_ID(o)) throw new Error(`Provided object was not of type ObjWithId: ${JSON.stringify(o)}`);
  return { ...o, __typename: typename };
}

/**
 *
 */
export function addTypenameToObjWithIdArray({ o, typename }: { o: any[]; typename: string }) {
  return o.map(arrayItem => addTypenameToObjWithId({ o: arrayItem, typename }));
}

//
// Series of functions for helping handle translations between input objects and fragments
//
function convertObjWithIdToFragmentR({ o, propertyKey, fieldMap }: { o: any; propertyKey: string; fieldMap?: FieldMap<string> }) {
  if (!IS_OBJECT_WITH_ID(o)) throw new Error(`Provided object was not of type ObjWithId: ${JSON.stringify(o)}`);
  let convertedObject = convertInsertInputToPartialFragmentResursive({ insertInput: o, fieldMap });
  if (fieldMap && fieldMap[propertyKey]) convertedObject = addTypenameToObjWithId({ o: convertedObject, typename: fieldMap[propertyKey] });
  return convertedObject;
}

/**
 *
 */
function convertObjWithIdArrayToFragmentArrayR({ o, propertyKey, fieldMap }: { o: any[]; propertyKey: string; fieldMap?: FieldMap<string> }) {
  return o.map(arrayItem => convertObjWithIdToFragmentR({ o: arrayItem, propertyKey, fieldMap }));
}

/**
 *
 */
function convertObjectToFragmentR({ o, propertyKey, fieldMap }: { o: any; propertyKey: string; fieldMap?: FieldMap<string> }) {
  if (!IS_NON_NULL_OBJECT(o)) return null;

  if (Array.isArray(o)) {
    if (o.length === 0 || !o[0] || !IS_OBJECT_WITH_ID(o[0])) return null;
    return convertObjWithIdArrayToFragmentArrayR({ o, propertyKey, fieldMap });
  }

  if (IS_OBJECT_WITH_ID(o)) {
    return convertObjWithIdToFragmentR({ o, propertyKey, fieldMap });
  }

  if (IS_INSERT_INPUT_OBJECT(o) && fieldMap[propertyKey]) {
    return convertObjectToFragmentR({ o: o.data, propertyKey, fieldMap });
  }

  // if non of the above, return null
  return null;
}

/*
 *
 */
export function convertInsertInputToPartialFragmentResursive({ insertInput, fieldMap }: { insertInput: object; fieldMap?: FieldMap<string> }) {
  const fragment: any = {};

  //Loop object and build up a fragment appropriate for a cache-add
  for (const [insertInputKey, insertInputValue] of Object.entries(insertInput)) {
    //Add scalar values
    if (IS_JAVASCRIPT_SCALAR_EQUIVALENT(insertInputValue)) {
      fragment[insertInputKey] = insertInputValue;
      continue;
    }

    // if non-null object AND no flag to explicity ignore field
    if (IS_NON_NULL_OBJECT(insertInputValue) && (!fieldMap || !fieldMap[insertInputKey] || fieldMap[insertInputKey] !== "IGNORE_FIELD")) {
      const ref = convertObjectToFragmentR({ o: insertInputValue, propertyKey: insertInputKey, fieldMap });

      if (ref) {
        fragment[insertInputKey] = ref;
        continue;
      }
    }
  }

  return fragment;
}
