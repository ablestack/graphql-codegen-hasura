import { defaultDataIdFromObject } from "@apollo/client";
import { FieldMap, INSERT_INPUT_CLIENT_FIELD_INDICATOR as INSERT_INPUT_CLIENT_FIELDNAME_PREFIX } from ".";

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
      returning: objects.map(object => {
        if (operationType === "insert") return convertObjectToGraph({ input: object });
        else return { ...object, __typename: entityName };
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

export function IS_APOLLO_OBJECT(object: any) {
  return object && object.id && object.__typename;
}

export function IS_NON_NULL_OBJECT(object: any) {
  return typeof object === "object" && object !== null;
}

export function IS_OBJECT_WITH_ID(object: any) {
  return IS_NON_NULL_OBJECT(object) && object.id;
}

export function IS_INSERT_INPUT_OBJECT(object: any) {
  if (!IS_NON_NULL_OBJECT(object)) return false;

  return object.data;
}

export function IS_INSERT_INPUT_CLIENT_FIELDNAME({ fieldname }: { fieldname: string }) {
  return fieldname.startsWith(INSERT_INPUT_CLIENT_FIELDNAME_PREFIX);
}

export function GET_INSERT_INPUT_DATA(object: any) {
  if (!IS_NON_NULL_OBJECT(object)) throw new Error(`Provided object was not of type InsertInput (with data property): ${JSON.stringify(object)}`);

  return object.data;
}

export function convertApolloObjectToRefObj(object: any) {
  if (!IS_APOLLO_OBJECT(object)) throw new Error(`Provided object was not of type ApolloObject (with id & _typename properties): ${JSON.stringify(object)}`);
  return { id: object.id, __typename: object.__typeName };
}

export function convertApolloObjectArrayToRefObj(object: any[]) {
  return object.map(arrayItem => convertApolloObjectToRefObj(object));
}

export function ensureTypenameOnFragment(object: any, typename: string) {
  if (!IS_OBJECT_WITH_ID(object)) throw new Error(`Provided object was not of type ObjWithId: ${JSON.stringify(object)}`);
  return { ...object, __typename: typename };
}

export function ensureTypenameOnFragments(object: any[], typename: string) {
  return object.map(arrayItem => ensureTypenameOnFragment(object, typename));
}

//
// Series of functions for helping handle translations between input objects and fragments
//

export function stripInsertInputClientFields({ input }: { input: object }) {
  const o: any = {};

  //Loop object and build up a fragment appropriate for a cache-add
  for (const [key, value] of Object.entries(input)) {
    if (!IS_INSERT_INPUT_CLIENT_FIELDNAME({ fieldname: key })) {
      o[key] = value;
    }
  }

  return o;
}

export function addTypenameToObjWithId({ object, typename }: { object: any; typename: string }) {
  if (!IS_OBJECT_WITH_ID(object)) throw new Error(`Provided object was not of type ObjWithId: ${JSON.stringify(object)}`);
  return { ...object, __typename: typename };
}

/**
 *
 */
export function addTypenameToObjWithIdArray({ object, typename }: { object: any[]; typename: string }) {
  return object.map(arrayItem => addTypenameToObjWithId({ object: arrayItem, typename }));
}

function ignoreField({ key, fieldMap }: { key?: string; fieldMap: FieldMap<string> }) {
  return fieldMap && fieldMap[key] && fieldMap[key] === "IGNORE_FIELD";
}

/*
 *
 */
export function convertInsertInputClientFieldnameToGraphFieldname({ fieldname }: { fieldname: string }) {
  if (!IS_INSERT_INPUT_CLIENT_FIELDNAME({ fieldname })) return fieldname;
  return fieldname.replace(INSERT_INPUT_CLIENT_FIELDNAME_PREFIX, "");
}

/*
 *
 */
export function convertObjectToGraph({ input, fieldMap }: { input: object; fieldMap?: FieldMap<string> }) {
  const o: any = {};

  //Loop object and build up a fragment appropriate for a cache-add
  for (const [key, value] of Object.entries(input)) {
    if (!ignoreField({ key: key, fieldMap })) {
      const convertedKey = convertInsertInputClientFieldnameToGraphFieldname({ fieldname: key });
      o[convertedKey] = _convertToGraph({ value, key: convertedKey, fieldMap });
    }
  }

  return o;
}

/**
 *
 */
function _convertToGraph({ value, key, fieldMap }: { value: any; key?: string; fieldMap?: FieldMap<string> }) {
  if (value === null || value === undefined) return null;

  if (IS_JAVASCRIPT_SCALAR_EQUIVALENT(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    if (value.length <= 0) return [];
    return value.map(arrayItem => _convertToGraph({ value: arrayItem, key, fieldMap }));
  }

  if (IS_INSERT_INPUT_OBJECT(value) && key && fieldMap[key]) {
    return _convertToGraph({ value: value.data, key, fieldMap });
  }

  if (IS_NON_NULL_OBJECT(value)) {
    let object = convertObjectToGraph({ input: value, fieldMap });
    if (fieldMap && key && fieldMap[key] && IS_OBJECT_WITH_ID(value)) object = addTypenameToObjWithId({ object, typename: fieldMap[key] });
    return object;
  }

  // Escape hatch. Should not get through to this point - but if we do, return null
  return null;
}

export function convertToGraph({ input, fieldMap }: { input: any; fieldMap?: FieldMap<string> }) {
  return _convertToGraph({ value: input, fieldMap });
}
