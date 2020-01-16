"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
exports.TABLE_TYPE_FILTER = (t) => {
    return t.description.includes("columns and relationships of");
};
exports.ID_FIELD_TEST = (f) => {
    return f.name.value === "id";
};
function SCALAR_TYPE_TEST(f) {
    return !f.description || !f.description.block;
}
exports.SCALAR_TYPE_TEST = SCALAR_TYPE_TEST;
function makeCamelCase(typename) {
    return customCamelize(typename);
}
exports.makeCamelCase = makeCamelCase;
function makePascalCase(typename) {
    return visitor_plugin_common_1.toPascalCase(typename);
}
exports.makePascalCase = makePascalCase;
function makeShortName(typename, trimString = undefined) {
    return `${visitor_plugin_common_1.toPascalCase(trimString ? typename.replace(trimString, "") : typename)}`;
}
exports.makeShortName = makeShortName;
function makeModelName(typename, trimString = undefined) {
    return `${makeShortName(typename, trimString)}Model`;
}
exports.makeModelName = makeModelName;
function makeImportStatement(importName, importPath) {
    return `import { ${importName} } from '${importPath}';`;
}
exports.makeImportStatement = makeImportStatement;
function makeFragmentName(typename, trimString = undefined) {
    return `${makeModelName(typename, trimString)}Fields`;
}
exports.makeFragmentName = makeFragmentName;
function makeFragmentTypeScriptTypeName(fragmentName) {
    return `${fragmentName}Fragment`;
}
exports.makeFragmentTypeScriptTypeName = makeFragmentTypeScriptTypeName;
function makeFragmentDocName(fragmentName) {
    return `${fragmentName}FragmentDoc`;
}
exports.makeFragmentDocName = makeFragmentDocName;
function getIdPostGresFieldType(field) {
    const fAny = field;
    return exports.ID_FIELD_TEST(fAny) && SCALAR_TYPE_TEST(fAny) && fAny && fAny.type && fAny.type.type && fAny.type.type.name && fAny.type.type.name.value;
}
exports.getIdPostGresFieldType = getIdPostGresFieldType;
function getIdTypeScriptFieldType(field) {
    const postGresIdFieldType = getIdPostGresFieldType(field);
    if (postGresIdFieldType.endsWith("_enum")) {
        return { typeName: visitor_plugin_common_1.toPascalCase(postGresIdFieldType), isNative: false };
    }
    else if (postGresIdFieldType.toLowerCase() === "int") {
        return { typeName: "number", isNative: true };
    }
    else {
        return { typeName: "string", isNative: true };
    }
}
exports.getIdTypeScriptFieldType = getIdTypeScriptFieldType;
exports.getPrimaryKeyIdField = (t) => {
    const fields = t.astNode.fields;
    return fields && fields.find(f => exports.ID_FIELD_TEST(f));
};
function customCamelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0)
            return ""; // or if (/\s+/.test(match)) for white spaces
        return index <= 1 ? match.toLowerCase() : match.toUpperCase();
    });
}
exports.customCamelize = customCamelize;
function getUniqueEntitiesFromFragmentDefinitions({ fragmentDefinitionNodes, schemaTypeMap, trimString }) {
    const entitiesFromFragments = fragmentDefinitionNodes.map(fragmentDefinitionNode => {
        const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
        const relatedTableNamedType = schemaTypeMap[fragmentTableName];
        const relatedTablePrimaryKeyIdField = exports.getPrimaryKeyIdField(relatedTableNamedType);
        if (!relatedTablePrimaryKeyIdField)
            return null;
        const entityShortName = makeShortName(relatedTableNamedType.name, trimString);
        return `${entityShortName}`;
    });
    return [...new Set(entitiesFromFragments.filter(item => item != null))];
}
exports.getUniqueEntitiesFromFragmentDefinitions = getUniqueEntitiesFromFragmentDefinitions;
//# sourceMappingURL=utils.js.map