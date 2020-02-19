import { GraphQLNamedType, FieldDefinitionNode, FragmentDefinitionNode } from "graphql";
import { TypeMap } from "graphql/type/schema";
export declare const TABLE_TYPE_FILTER: (t: GraphQLNamedType) => boolean;
export declare const ID_FIELD_TEST: (f: FieldDefinitionNode) => boolean;
export declare function SCALAR_TYPE_TEST(f: FieldDefinitionNode): boolean;
export declare function makeCamelCase(typename: string): any;
export declare function convertNameParts(str: string, func: (str: string) => string, removeUnderscore?: boolean): string;
export declare function makePascalCase(str: string, transformUnderscore?: boolean): string;
export declare function camelToSnakeUpperCase(str: string): string;
export declare function makeShortName(typename: string, trimString?: string): string;
export declare function makeModelName(typename: string, trimString?: string): string;
export declare function makeImportStatement(importName: string, importPath: string): string;
export declare function makeFragmentTypeScriptTypeName(fragmentName: string): string;
export declare function makeFragmentDocName(fragmentName: string): string;
export declare function getIdPostGresFieldType(field: FieldDefinitionNode): any;
export declare function getIdTypeScriptFieldType(field: FieldDefinitionNode): {
    typeName: string;
    isNative: boolean;
};
export declare const getPrimaryKeyIdField: (t: GraphQLNamedType) => FieldDefinitionNode;
export declare function customCamelize(str: any): any;
export declare function getUniqueEntitiesFromFragmentDefinitions({ fragmentDefinitionNodes, schemaTypeMap, trimString }: {
    fragmentDefinitionNodes: FragmentDefinitionNode[];
    schemaTypeMap: TypeMap;
    trimString?: string;
}): string[];
