import { GraphQLNamedType, FieldDefinitionNode, ObjectTypeDefinitionNode } from "graphql";

export const TABLE_TYPE_FILTER = (t: GraphQLNamedType) => {
  return t.description.includes("columns and relationships of");
};

export const ID_FIELD_TEST = (f: FieldDefinitionNode) => {
  return f.name.value === "id";
};

export function SCALAR_TYPE_TEST(f: FieldDefinitionNode) {
  return !f.description || !f.description.block;
}

export function makeShortCamelCaseEntityName(typename: string) {
  return customCamelize(makeShortEntityName(typename));
}

export function makeShortEntityName(typename: string) {
  return `${typename.replace("CSee_", "")}`;
}

export function makeModelEntityName(typename: string) {
  return `${typename.replace("CSee_", "")}Model`;
}

export function makeFragmentsImport(typename: string, fragmentsImportPath: string) {
  return `import { ${makeFragmentName(typename)} } from '${fragmentsImportPath}';`;
}

export function makePrimaryCodegenTypescriptImport(type: string, primaryCodegenTypeScriptImportPath: string) {
  return `import { ${type} } from '${primaryCodegenTypeScriptImportPath}';`;
}

export function makeFragmentName(typename: string) {
  return `${makeModelEntityName(typename)}Fields`;
}

export function getIdFieldType(field: FieldDefinitionNode) {
  const fAny = field as any;
  return ID_FIELD_TEST(fAny) && SCALAR_TYPE_TEST(fAny) && fAny && fAny.type && fAny.type.type && fAny.type.type.name && fAny.type.type.name.value;
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
