export type ObjectWithId<T = any> = { id: T };
export type RefObj = { id: string; __typename: string };

export const NestedRef = "nested";
export type RefTypeMap<T extends string> = { [key: string]: T | typeof NestedRef };
