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

export function makeShortCamelCaseName(typename: string, trimString: string = undefined) {
  return customCamelize(makeShortName(typename, trimString));
}

export function makeShortName(typename: string, trimString: string = undefined) {
  return `${toPascalCase(trimString ? typename.replace(trimString, "") : typename)}`;
}

export function makeModelName(typename: string, trimString: string = undefined) {
  return `${makeShortName(typename, trimString)}Model`;
}

export function makeFragmentsImport(typename: string, fragmentsImportPath: string, trimString: string = undefined) {
  return `import { ${makeFragmentName(typename, trimString)} } from '${fragmentsImportPath}';`;
}

export function makePrimaryCodegenTypescriptImport(type: string, primaryCodegenTypeScriptImportPath: string) {
  return `import { ${type} } from '${primaryCodegenTypeScriptImportPath}';`;
}

export function makeFragmentName(typename: string, trimString: string = undefined) {
  return `${makeModelName(typename, trimString)}Fields`;
}

export function getIdPostGresFieldType(field: FieldDefinitionNode) {
  const fAny = field as any;
  return ID_FIELD_TEST(fAny) && SCALAR_TYPE_TEST(fAny) && fAny && fAny.type && fAny.type.type && fAny.type.type.name && fAny.type.type.name.value;
}

export function getIdTypeScriptFieldType(field: FieldDefinitionNode) {
  const postGresIdFieldType = getIdPostGresFieldType(field);
  return postGresIdFieldType.toLowerCase() === "int" ? "number" : "string";
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
