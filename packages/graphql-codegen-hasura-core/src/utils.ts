import { StrictFieldMap, INSERT_INPUT_CLIENT_FIELDNAME_PREFIX, FieldMap } from ".";
import { PostGresUtils } from "./postgres.utils";
import { key_created_at, key_updated_at, key_typename } from "./types";

export function defaultCacheIdFromObject({ __typename, id }: { __typename: string; id: any }) {
  return `${__typename}:${id.toString()}`;
}

// Optimistic response generation utility method
//
export function generateOptimisticResponseForMutation<T>({
  operationType,
  entityName,
  objects,
  fieldMap,
}: {
  operationType: "update" | "insert" | "delete";
  entityName: string;
  objects: { id: any }[];
  fieldMap?: FieldMap;
}): T {
  const optimisticResponse = ({
    __typename: "mutation_root",
    [`${operationType}_${entityName}`]: {
      affected_rows: objects.length,
      returning: objects.map((object) => {
        if (operationType === "insert") return convertObjectToGraph({ input: object, fieldMap: makeStrictFieldmap(fieldMap) });
        else return { ...object, __typename: entityName };
      }),
      __typename: `${entityName}_mutation_response`,
    },
  } as unknown) as T;

  return optimisticResponse;
}

/**
 *
 * @param param0
 */
export function generateUpdateFunctionForMutation<T>({ operationType, entityName, entityId }: { operationType: "delete"; entityName: string; entityId: string | number }) {
  return (cache: any, result: any) => {
    cache.evict(defaultCacheIdFromObject({ __typename: entityName, id: entityId }));
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

export function IS_INSERT_INPUT_CLIENT_FIELDNAME({ key }: { key: string }) {
  return key.startsWith(INSERT_INPUT_CLIENT_FIELDNAME_PREFIX);
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
  return object.map((arrayItem) => convertApolloObjectToRefObj(object));
}

export function ensureTypenameOnFragment(object: any, typename: string) {
  if (!IS_OBJECT_WITH_ID(object)) throw new Error(`Provided object was not of type ObjWithId: ${JSON.stringify(object)}`);
  return { ...object, __typename: typename };
}

export function ensureTypenameOnFragments(object: any[], typename: string) {
  return object.map((arrayItem) => ensureTypenameOnFragment(object, typename));
}

export function makeStrictFieldmap({ typenames, ignore, clientOnly, replace }: FieldMap = {}): StrictFieldMap {
  return { typenames: typenames || {}, ignore: ignore || {}, clientOnly: clientOnly || {}, replace: replace || {} };
}

// -----------------------------------------------------------------------------------------------------------------------
// Series of functions for helping handle translations between Insert Input Object Graphs and Fragment Object Graphs
// -- Mainly used when manually adding an Insert Input object to InMemory cache
// -----------------------------------------------------------------------------------------------------------------------

export function stripInsertInputClientFields({ input }: { input: object }) {
  if (input === null || input === undefined) return input;

  if (IS_JAVASCRIPT_SCALAR_EQUIVALENT(input)) {
    return input;
  }

  // HANDLE ARRAYS
  if (Array.isArray(input)) {
    return input.map((arrayItem) => stripInsertInputClientFields({ input: arrayItem }));
  }

  // HANDLE OBJECTS
  if (IS_NON_NULL_OBJECT(input)) {
    //Loop object and transform as needed

    const o: any = {};
    for (const [key, value] of Object.entries(input)) {
      if (!IS_INSERT_INPUT_CLIENT_FIELDNAME({ key }) && !IS_FRAGMENT_ONLY_FIELD({ key })) {
        o[key] = stripInsertInputClientFields({ input: value });
        continue;
      }
    }
    return o;
  }

  // ESCAPE HATCH
  console.warn(`!! WARN - stripInsertInputClientFields - input is of unhandled type. Returning value`, input);
  return input;
}

export function addTypenameToObj({ object, typename }: { object: any; typename: string }) {
  if (!IS_NON_NULL_OBJECT(object)) return object;
  return { ...object, __typename: typename };
}

/**
 *
 */
export function addTypenameToObjArray({ object, typename }: { object: any[]; typename: string }) {
  return object.map((arrayItem) => addTypenameToObj({ object: arrayItem, typename }));
}

function ignoreField({ key, fieldMap }: { key?: string; fieldMap: StrictFieldMap }) {
  return fieldMap && fieldMap.ignore[key];
}

/*
 *
 */
export function convertInsertInputClientFieldnameToGraphFieldname({ key }: { key: string }) {
  if (!IS_INSERT_INPUT_CLIENT_FIELDNAME({ key })) return key;
  return key.replace(INSERT_INPUT_CLIENT_FIELDNAME_PREFIX, "");
}

/*
 *
 */
export function convertObjectToGraph({ input, fieldMap }: { input: object; fieldMap?: StrictFieldMap }) {
  const o: any = {};

  //Loop object and transform as needed
  for (const [key, value] of Object.entries(input)) {
    if (ignoreField({ key: key, fieldMap })) {
      continue;
    }
    const convertedKey = convertInsertInputClientFieldnameToGraphFieldname({ key });
    if (fieldMap.replace[key]) {
      o[convertedKey] = fieldMap.replace[key](key, value);
    } else {
      o[convertedKey] = _convertToGraph({ value, key: convertedKey, fieldMap });
    }
  }

  return o;
}

/**
 *
 */
function _convertToGraph({ value, key, fieldMap }: { value: any; key?: string; fieldMap?: StrictFieldMap }) {
  if (value === null || value === undefined) {
    if (key === key_created_at || key === key_updated_at) {
      return PostGresUtils.getTSWTZ();
    }
    return null;
  }

  if (IS_JAVASCRIPT_SCALAR_EQUIVALENT(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    if (value.length <= 0) return [];
    return value.map((arrayItem) => _convertToGraph({ value: arrayItem, key, fieldMap }));
  }

  if (IS_INSERT_INPUT_OBJECT(value) && key && fieldMap && fieldMap.typenames[key]) {
    return _convertToGraph({ value: value.data, key, fieldMap });
  }

  if (IS_NON_NULL_OBJECT(value)) {
    let object = convertObjectToGraph({ input: value, fieldMap });
    if (fieldMap && key && fieldMap.typenames[key]) object = addTypenameToObj({ object, typename: fieldMap.typenames[key] });
    return object;
  }

  // Escape hatch. Should not get through to this point - but if we do, return null
  return null;
}

export function convertToGraph({ input, typename, fieldMap }: { input: any; typename?: string; fieldMap?: FieldMap }) {
  let _fieldMap = makeStrictFieldmap(fieldMap || {});
  if (typename) {
    _fieldMap.typenames["___root"] = typename;
  }
  return _convertToGraph({ value: input, key: "___root", fieldMap: _fieldMap });
}

// -----------------------------------------------------------------------------------------------------
// Series of functions for helping handle translations between Fragment Graphs and InsertInput Graphs
// -- Mainly used when cloning an object graph
// -----------------------------------------------------------------------------------------------------
const FRAGMENT_ONLY_FIELDNAMES = [key_typename, key_created_at, key_updated_at];
function IS_FRAGMENT_ONLY_FIELD({ key }: { key: string }) {
  return FRAGMENT_ONLY_FIELDNAMES.find((fofnItem) => fofnItem === key);
}

/*
 *
 */
function convertObjectToInsertInput({ object, fieldMap }: { object: object; fieldMap?: StrictFieldMap }) {
  const o: any = {};

  //Loop object and transform as needed
  for (const [key, value] of Object.entries(object)) {
    if (IS_FRAGMENT_ONLY_FIELD({ key: key }) || ignoreField({ key: key, fieldMap })) {
      continue;
    }
    if (fieldMap.replace[key]) {
      o[key] = fieldMap.replace[key](key, value);
      continue;
    }
    if (fieldMap.clientOnly[key]) {
      o[`${INSERT_INPUT_CLIENT_FIELDNAME_PREFIX}${key}`] = _convertToInsertInput({ value, key, fieldMap });
      continue;
    }
    o[key] = _convertToInsertInput({ value, key, fieldMap });
  }

  return o;
}

function _convertToInsertInput({ value, key, fieldMap }: { value: any; key?: string; fieldMap?: StrictFieldMap }) {
  if (value === null || value === undefined) return value;

  if (IS_JAVASCRIPT_SCALAR_EQUIVALENT(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    return { data: value.map((arrayItem) => _convertToInsertInput({ value: arrayItem, fieldMap })) };
  }

  if (IS_NON_NULL_OBJECT(value)) {
    // If specified in StrictFieldMap
    if (key && fieldMap && fieldMap.typenames[key] && !IS_INSERT_INPUT_OBJECT(value)) {
      // Wrap value in data property
      return convertObjectToInsertInput({ object: { data: value }, fieldMap });
    } else {
      return convertObjectToInsertInput({ object: value, fieldMap });
    }
  }

  // Escape hatch. Should not get through to this point - but if we do, return null
  console.warn(`convertToInsertInput - unknown object type for value:`, { value, key, fieldMap });
  return null;
}

export function convertToInsertInput({ input, fieldMap }: { input: any; fieldMap?: FieldMap }) {
  return _convertToInsertInput({ value: input, fieldMap: makeStrictFieldmap(fieldMap || {}) });
}
