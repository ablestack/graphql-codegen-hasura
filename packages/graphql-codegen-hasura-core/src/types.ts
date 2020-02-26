export type ObjectWithId<T = any> = { id: T };
export type RefObj = { id: string; __typename: string };

export const IGNORE_FIELD = "IGNORE_FIELD";
export type FieldMap<T extends string> = { [key: string]: T | typeof IGNORE_FIELD };

export const INSERT_INPUT_CLIENT_FIELD_INDICATOR = "___";
