export type ObjectWithId<T = any> = { id: T };
export type RefObj = { id: string; __typename: string };

export type FieldMap = {
  typenames?: Record<string, string>;
  ignore?: Record<string, boolean>;
  clientOnly?: Record<string, boolean>;
  replace?: Record<string, (fieldName: string, originalVal: any) => any>;
};
export type StrictFieldMap = {
  typenames: Record<string, string>;
  ignore: Record<string, boolean>;
  clientOnly: Record<string, boolean>;
  replace: Record<string, (fieldName: string, originalVal: any) => any>;
};

export const INSERT_INPUT_CLIENT_FIELDNAME_PREFIX = "___";
export const key_created_at = "created_at";
export const key_updated_at = "updated_at";
export const key_typename = "__typename";
