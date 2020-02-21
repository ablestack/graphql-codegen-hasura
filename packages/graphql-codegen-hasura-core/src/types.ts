export type ObjectWithId<T = any> = { id: T };
export type RefObj = { id: string; __typename: string };

export const IGNORE_FIELD = "IGNORE_FIELD";
export type RefTypeMap<T extends string> = { [key: string]: T | typeof IGNORE_FIELD };
