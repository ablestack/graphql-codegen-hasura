import { GraphQLNamedType, FieldDefinitionNode, ObjectTypeDefinitionNode } from "graphql";
import _ from "lodash";
import { type } from "os";
import { toPascalCase } from "@graphql-codegen/visitor-plugin-common";

export const TABLE_TYPE_FILTER = (t: GraphQLNamedType) => {
  return t.description.includes("columns and relationships of");
};

export const ID_FIELD_TEST = (f: FieldDefinitionNode) => {
  return f.name.value === "id";
};

export function SCALAR_TYPE_TEST(f: FieldDefinitionNode) {
  return !f.description || !f.description.block;
}

export function makeCamelCase(typename: string) {
  return customCamelize(typename);
}

export function makePascalCase(typename: string) {
  return toPascalCase(typename);
}

export function makeShortName(typename: string, trimString: string = undefined) {
  return `${toPascalCase(trimString ? typename.replace(trimString, "") : typename)}`;
}

export function makeModelName(typename: string, trimString: string = undefined) {
  return `${makeShortName(typename, trimString)}Model`;
}

export function makeImportStatement(importName: string, importPath: string) {
  return `import { ${importName} } from '${importPath}';`;
}

export function makeFragmentName(typename: string, trimString: string = undefined) {
  return `${makeModelName(typename, trimString)}Fields`;
}

export function makeFragmentTypeScriptTypeName(fragmentName: string) {
  return `${fragmentName}Fragment`;
}

export function makeFragmentDocName(fragmentName: string) {
  return `${fragmentName}FragmentDoc`;
}

export function getIdPostGresFieldType(field: FieldDefinitionNode) {
  const fAny = field as any;
  return ID_FIELD_TEST(fAny) && SCALAR_TYPE_TEST(fAny) && fAny && fAny.type && fAny.type.type && fAny.type.type.name && fAny.type.type.name.value;
}

export function getIdTypeScriptFieldType(field: FieldDefinitionNode): { typeName: string; isNative: boolean } {
  const postGresIdFieldType = getIdPostGresFieldType(field);
  if (postGresIdFieldType.endsWith("_enum")) {
    return { typeName: toPascalCase(postGresIdFieldType), isNative: false };
  } else if (postGresIdFieldType.toLowerCase() === "int") {
    return { typeName: "number", isNative: true };
  } else {
    return { typeName: "string", isNative: true };
  }
}

export const getPrimaryKeyIdField = (t: GraphQLNamedType) => {
  const fields = (t.astNode as ObjectTypeDefinitionNode).fields;
  return fields && fields.find(f => ID_FIELD_TEST(f));
};

export function customCamelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index <= 1 ? match.toLowerCase() : match.toUpperCase();
  });
}
