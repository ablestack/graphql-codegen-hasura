export declare type ObjectWithId<T = any> = {
    id: T;
};
export declare type RefObj = {
    id: string;
    __typename: string;
};
export declare type FieldMap = {
    typenames?: Record<string, string>;
    ignore?: Record<string, boolean>;
    clientOnly?: Record<string, boolean>;
    replace?: Record<string, (fieldName: string, originalVal: any) => any>;
};
export declare type StrictFieldMap = {
    typenames: Record<string, string>;
    ignore: Record<string, boolean>;
    clientOnly: Record<string, boolean>;
    replace: Record<string, (fieldName: string, originalVal: any) => any>;
};
export declare const INSERT_INPUT_CLIENT_FIELDNAME_PREFIX = "___";
export declare const key_created_at = "created_at";
export declare const key_updated_at = "updated_at";
export declare const key_typename = "__typename";
