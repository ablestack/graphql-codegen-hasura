import { GraphQLNamedType, FieldDefinitionNode, ObjectTypeDefinitionNode, FragmentDefinitionNode } from "graphql";
import _ from "lodash";
import { TypeMap } from "graphql/type/schema";
import { pascalCase } from "change-case";

export const TABLE_TYPE_FILTER = (t: GraphQLNamedType) => {
  return t.description.includes("columns and relationships of");
};

export const ID_FIELD_TEST = (f: FieldDefinitionNode) => {
  return f?.name?.value === "id";
};

export function SCALAR_TYPE_TEST(f: FieldDefinitionNode) {
  return !f.description || !f.description.block;
}

export function makeCamelCase(typename: string) {
  return customCamelize(typename);
}

export function convertNameParts(str: string, func: (str: string) => string, removeUnderscore = false): string {
  if (removeUnderscore) {
    return func(str);
  }

  return str
    .split("_")
    .map((s) => func(s))
    .join("_");
}

export function makePascalCase(str: string, transformUnderscore = false): string {
  return convertNameParts(str, pascalCase, transformUnderscore);
}

export function camelToSnakeUpperCase(str: string) {
  const _ = str.replace(/([A-Z])/g, `_$1`);
  return _.toUpperCase();
}

export function makeShortName(typename: string, trimString: string = undefined) {
  return `${makePascalCase(trimString ? typename.replace(trimString, "") : typename)}`;
}

export function makeModelName(typename: string, trimString: string = undefined) {
  return `${makeShortName(typename, trimString)}Model`;
}

export function makeImportStatement(importName: string, importPath: string) {
  return `import { ${importName} } from '${importPath}';`;
}

export function makeFragmentTypeScriptTypeName(fragmentName: string) {
  return `${makePascalCase(fragmentName)}Fragment`;
}

export function makeFragmentDocName(fragmentName: string) {
  return `${makePascalCase(fragmentName)}FragmentDoc`;
}

export function getIdPostGresFieldType(field: FieldDefinitionNode) {
  const fAny = field as any;
  return ID_FIELD_TEST(fAny) && SCALAR_TYPE_TEST(fAny) && fAny && fAny.type && fAny.type.type && fAny.type.type.name && fAny.type.type.name.value;
}

export function getIdTypeScriptFieldType(field: FieldDefinitionNode): { typeName: string; isNative: boolean } {
  const postGresIdFieldType = getIdPostGresFieldType(field);

  if (!postGresIdFieldType) {
    return undefined;
  } else if (postGresIdFieldType.endsWith("_enum")) {
    return { typeName: makePascalCase(postGresIdFieldType), isNative: false };
  } else if (postGresIdFieldType.toLowerCase() === "int") {
    return { typeName: "number", isNative: true };
  } else {
    return { typeName: "string", isNative: true };
  }
}

export const getPrimaryKeyIdField = (t: GraphQLNamedType) => {
  const fields = (t.astNode as ObjectTypeDefinitionNode).fields;
  return fields && fields.find((f) => ID_FIELD_TEST(f));
};

export function customCamelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index <= 1 ? match.toLowerCase() : match.toUpperCase();
  });
}

export function getUniqueEntitiesFromFragmentDefinitions({
  fragmentDefinitionNodes,
  schemaTypeMap,
  trimString,
}: {
  fragmentDefinitionNodes: FragmentDefinitionNode[];
  schemaTypeMap: TypeMap;
  trimString?: string;
}) {
  const entitiesFromFragments = fragmentDefinitionNodes.map((fragmentDefinitionNode) => {
    const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
    const relatedTableNamedType = schemaTypeMap[fragmentTableName];
    const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);

    if (!relatedTablePrimaryKeyIdField) return null;

    const entityShortName = makeShortName(relatedTableNamedType.name, trimString);
    return `${entityShortName}`;
  });

  return [...new Set(entitiesFromFragments.filter((item) => item != null))];
}
