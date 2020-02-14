export type ObjectWithId<T = any> = { id: T };
export type RefObj = { id: string; __typename: string };

export type TypeName = string;
export type RefTypeMap = { [key: string]: TypeName };
