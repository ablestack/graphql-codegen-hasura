import { StrictFieldMap, FieldMap } from ".";
export declare function defaultCacheIdFromObject({ __typename, id }: {
    __typename: string;
    id: any;
}): string;
export declare function generateOptimisticResponseForMutation<T>({ operationType, entityName, objects, fieldMap, }: {
    operationType: "update" | "insert" | "delete";
    entityName: string;
    objects: {
        id: any;
    }[];
    fieldMap?: FieldMap;
}): T;
/**
 *
 * @param param0
 */
export declare function generateUpdateFunctionForMutation<T>({ operationType, entityName, entityId }: {
    operationType: "delete";
    entityName: string;
    entityId: string | number;
}): (cache: any, result: any) => void;
export declare function IS_JAVASCRIPT_SCALAR_EQUIVALENT(arg: any, includeNull?: boolean): boolean;
export declare function IS_APOLLO_OBJECT(object: any): any;
export declare function IS_NON_NULL_OBJECT(object: any): boolean;
export declare function IS_OBJECT_WITH_ID(object: any): any;
export declare function IS_INSERT_INPUT_OBJECT(object: any): any;
export declare function IS_INSERT_INPUT_CLIENT_FIELDNAME({ key }: {
    key: string;
}): boolean;
export declare function GET_INSERT_INPUT_DATA(object: any): any;
export declare function convertApolloObjectToRefObj(object: any): {
    id: any;
    __typename: any;
};
export declare function convertApolloObjectArrayToRefObj(object: any[]): {
    id: any;
    __typename: any;
}[];
export declare function ensureTypenameOnFragment(object: any, typename: string): any;
export declare function ensureTypenameOnFragments(object: any[], typename: string): any[];
export declare function makeStrictFieldmap({ typenames, ignore, clientOnly, replace }?: FieldMap): StrictFieldMap;
export declare function stripInsertInputClientFields({ input }: {
    input: object;
}): any;
export declare function addTypenameToObj({ object, typename }: {
    object: any;
    typename: string;
}): any;
/**
 *
 */
export declare function addTypenameToObjArray({ object, typename }: {
    object: any[];
    typename: string;
}): any[];
export declare function convertInsertInputClientFieldnameToGraphFieldname({ key }: {
    key: string;
}): string;
export declare function convertObjectToGraph({ input, fieldMap }: {
    input: object;
    fieldMap?: StrictFieldMap;
}): any;
export declare function convertToGraph({ input, typename, fieldMap }: {
    input: any;
    typename?: string;
    fieldMap?: FieldMap;
}): any;
export declare function convertToInsertInput({ input, fieldMap }: {
    input: any;
    fieldMap?: FieldMap;
}): any;
