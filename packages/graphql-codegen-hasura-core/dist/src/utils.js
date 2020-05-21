"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToInsertInput = exports.convertToGraph = exports.convertObjectToGraph = exports.convertInsertInputClientFieldnameToGraphFieldname = exports.addTypenameToObjArray = exports.addTypenameToObj = exports.stripInsertInputClientFields = exports.makeStrictFieldmap = exports.ensureTypenameOnFragments = exports.ensureTypenameOnFragment = exports.convertApolloObjectArrayToRefObj = exports.convertApolloObjectToRefObj = exports.GET_INSERT_INPUT_DATA = exports.IS_INSERT_INPUT_CLIENT_FIELDNAME = exports.IS_INSERT_INPUT_OBJECT = exports.IS_OBJECT_WITH_ID = exports.IS_NON_NULL_OBJECT = exports.IS_APOLLO_OBJECT = exports.IS_JAVASCRIPT_SCALAR_EQUIVALENT = exports.generateUpdateFunctionForMutation = exports.generateOptimisticResponseForMutation = exports.defaultCacheIdFromObject = void 0;
const _1 = require(".");
const postgres_utils_1 = require("./postgres.utils");
const types_1 = require("./types");
function defaultCacheIdFromObject({ __typename, id }) {
    return `${__typename}:${id.toString()}`;
}
exports.defaultCacheIdFromObject = defaultCacheIdFromObject;
// Optimistic response generation utility method
//
function generateOptimisticResponseForMutation({ operationType, entityName, objects, fieldMap, }) {
    const optimisticResponse = {
        __typename: "mutation_root",
        [`${operationType}_${entityName}`]: {
            affected_rows: objects.length,
            returning: objects.map((object) => {
                if (operationType === "insert")
                    return convertObjectToGraph({ input: object, fieldMap: makeStrictFieldmap(fieldMap) });
                else
                    return { ...object, __typename: entityName };
            }),
            __typename: `${entityName}_mutation_response`,
        },
    };
    return optimisticResponse;
}
exports.generateOptimisticResponseForMutation = generateOptimisticResponseForMutation;
/**
 *
 * @param param0
 */
function generateUpdateFunctionForMutation({ operationType, entityName, entityId }) {
    return (cache, result) => {
        cache.evict(defaultCacheIdFromObject({ __typename: entityName, id: entityId }));
    };
}
exports.generateUpdateFunctionForMutation = generateUpdateFunctionForMutation;
function IS_JAVASCRIPT_SCALAR_EQUIVALENT(arg, includeNull = false) {
    var type = typeof arg;
    return (includeNull && arg === null) || (type != "object" && type != "function");
}
exports.IS_JAVASCRIPT_SCALAR_EQUIVALENT = IS_JAVASCRIPT_SCALAR_EQUIVALENT;
function IS_APOLLO_OBJECT(object) {
    return object && object.id && object.__typename;
}
exports.IS_APOLLO_OBJECT = IS_APOLLO_OBJECT;
function IS_NON_NULL_OBJECT(object) {
    return typeof object === "object" && object !== null;
}
exports.IS_NON_NULL_OBJECT = IS_NON_NULL_OBJECT;
function IS_OBJECT_WITH_ID(object) {
    return IS_NON_NULL_OBJECT(object) && object.id;
}
exports.IS_OBJECT_WITH_ID = IS_OBJECT_WITH_ID;
function IS_INSERT_INPUT_OBJECT(object) {
    if (!IS_NON_NULL_OBJECT(object))
        return false;
    return object.data;
}
exports.IS_INSERT_INPUT_OBJECT = IS_INSERT_INPUT_OBJECT;
function IS_INSERT_INPUT_CLIENT_FIELDNAME({ key }) {
    return key.startsWith(_1.INSERT_INPUT_CLIENT_FIELDNAME_PREFIX);
}
exports.IS_INSERT_INPUT_CLIENT_FIELDNAME = IS_INSERT_INPUT_CLIENT_FIELDNAME;
function GET_INSERT_INPUT_DATA(object) {
    if (!IS_NON_NULL_OBJECT(object))
        throw new Error(`Provided object was not of type InsertInput (with data property): ${JSON.stringify(object)}`);
    return object.data;
}
exports.GET_INSERT_INPUT_DATA = GET_INSERT_INPUT_DATA;
function convertApolloObjectToRefObj(object) {
    if (!IS_APOLLO_OBJECT(object))
        throw new Error(`Provided object was not of type ApolloObject (with id & _typename properties): ${JSON.stringify(object)}`);
    return { id: object.id, __typename: object.__typeName };
}
exports.convertApolloObjectToRefObj = convertApolloObjectToRefObj;
function convertApolloObjectArrayToRefObj(object) {
    return object.map((arrayItem) => convertApolloObjectToRefObj(object));
}
exports.convertApolloObjectArrayToRefObj = convertApolloObjectArrayToRefObj;
function ensureTypenameOnFragment(object, typename) {
    if (!IS_OBJECT_WITH_ID(object))
        throw new Error(`Provided object was not of type ObjWithId: ${JSON.stringify(object)}`);
    return { ...object, __typename: typename };
}
exports.ensureTypenameOnFragment = ensureTypenameOnFragment;
function ensureTypenameOnFragments(object, typename) {
    return object.map((arrayItem) => ensureTypenameOnFragment(object, typename));
}
exports.ensureTypenameOnFragments = ensureTypenameOnFragments;
function makeStrictFieldmap({ typenames, ignore, clientOnly, replace } = {}) {
    return { typenames: typenames || {}, ignore: ignore || {}, clientOnly: clientOnly || {}, replace: replace || {} };
}
exports.makeStrictFieldmap = makeStrictFieldmap;
// -----------------------------------------------------------------------------------------------------------------------
// Series of functions for helping handle translations between Insert Input Object Graphs and Fragment Object Graphs
// -- Mainly used when manually adding an Insert Input object to InMemory cache
// -----------------------------------------------------------------------------------------------------------------------
function stripInsertInputClientFields({ input }) {
    if (input === null || input === undefined)
        return input;
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
        const o = {};
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
exports.stripInsertInputClientFields = stripInsertInputClientFields;
function addTypenameToObj({ object, typename }) {
    if (!IS_NON_NULL_OBJECT(object))
        return object;
    return { ...object, __typename: typename };
}
exports.addTypenameToObj = addTypenameToObj;
/**
 *
 */
function addTypenameToObjArray({ object, typename }) {
    return object.map((arrayItem) => addTypenameToObj({ object: arrayItem, typename }));
}
exports.addTypenameToObjArray = addTypenameToObjArray;
function ignoreField({ key, fieldMap }) {
    return fieldMap && fieldMap.ignore[key];
}
/*
 *
 */
function convertInsertInputClientFieldnameToGraphFieldname({ key }) {
    if (!IS_INSERT_INPUT_CLIENT_FIELDNAME({ key }))
        return key;
    return key.replace(_1.INSERT_INPUT_CLIENT_FIELDNAME_PREFIX, "");
}
exports.convertInsertInputClientFieldnameToGraphFieldname = convertInsertInputClientFieldnameToGraphFieldname;
/*
 *
 */
function convertObjectToGraph({ input, fieldMap }) {
    const o = {};
    //Loop object and transform as needed
    for (const [key, value] of Object.entries(input)) {
        if (ignoreField({ key: key, fieldMap })) {
            continue;
        }
        const convertedKey = convertInsertInputClientFieldnameToGraphFieldname({ key });
        if (fieldMap.replace[key]) {
            o[convertedKey] = fieldMap.replace[key](key, value);
        }
        else {
            o[convertedKey] = _convertToGraph({ value, key: convertedKey, fieldMap });
        }
    }
    return o;
}
exports.convertObjectToGraph = convertObjectToGraph;
/**
 *
 */
function _convertToGraph({ value, key, fieldMap }) {
    if (value === null || value === undefined) {
        if (key === types_1.key_created_at || key === types_1.key_updated_at) {
            return postgres_utils_1.PostGresUtils.getTSWTZ();
        }
        return null;
    }
    if (IS_JAVASCRIPT_SCALAR_EQUIVALENT(value)) {
        return value;
    }
    if (Array.isArray(value)) {
        if (value.length <= 0)
            return [];
        return value.map((arrayItem) => _convertToGraph({ value: arrayItem, key, fieldMap }));
    }
    if (IS_INSERT_INPUT_OBJECT(value) && key && fieldMap && fieldMap.typenames[key]) {
        return _convertToGraph({ value: value.data, key, fieldMap });
    }
    if (IS_NON_NULL_OBJECT(value)) {
        let object = convertObjectToGraph({ input: value, fieldMap });
        if (fieldMap && key && fieldMap.typenames[key])
            object = addTypenameToObj({ object, typename: fieldMap.typenames[key] });
        return object;
    }
    // Escape hatch. Should not get through to this point - but if we do, return null
    return null;
}
function convertToGraph({ input, typename, fieldMap }) {
    let _fieldMap = makeStrictFieldmap(fieldMap || {});
    if (typename) {
        _fieldMap.typenames["___root"] = typename;
    }
    return _convertToGraph({ value: input, key: "___root", fieldMap: _fieldMap });
}
exports.convertToGraph = convertToGraph;
// -----------------------------------------------------------------------------------------------------
// Series of functions for helping handle translations between Fragment Graphs and InsertInput Graphs
// -- Mainly used when cloning an object graph
// -----------------------------------------------------------------------------------------------------
const FRAGMENT_ONLY_FIELDNAMES = [types_1.key_typename, types_1.key_created_at, types_1.key_updated_at];
function IS_FRAGMENT_ONLY_FIELD({ key }) {
    return FRAGMENT_ONLY_FIELDNAMES.find((fofnItem) => fofnItem === key);
}
/*
 *
 */
function convertObjectToInsertInput({ object, fieldMap }) {
    const o = {};
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
            o[`${_1.INSERT_INPUT_CLIENT_FIELDNAME_PREFIX}${key}`] = _convertToInsertInput({ value, key, fieldMap });
            continue;
        }
        o[key] = _convertToInsertInput({ value, key, fieldMap });
    }
    return o;
}
function _convertToInsertInput({ value, key, fieldMap }) {
    if (value === null || value === undefined)
        return value;
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
        }
        else {
            return convertObjectToInsertInput({ object: value, fieldMap });
        }
    }
    // Escape hatch. Should not get through to this point - but if we do, return null
    console.warn(`convertToInsertInput - unknown object type for value:`, { value, key, fieldMap });
    return null;
}
function convertToInsertInput({ input, fieldMap }) {
    return _convertToInsertInput({ value: input, fieldMap: makeStrictFieldmap(fieldMap || {}) });
}
exports.convertToInsertInput = convertToInsertInput;
//# sourceMappingURL=utils.js.map