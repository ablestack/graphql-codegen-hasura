"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectDeleteGql = exports.injectUpdateGql = exports.injectInsertGql = exports.injectFetchAsSubscriptionGql = exports.injectFetchAsQueryGql = exports.injectFragmentImport = exports.injectGlobalGqlCode = void 0;
const _1 = require(".");
const utils_1 = require("./utils");
// ---------------------------------
//
function injectGlobalGqlCode({ contentManager, typescriptCodegenOutputPath }) {
    contentManager.addImport("/* eslint-disable @typescript-eslint/no-unused-vars */");
    //contentManager.addImport(`import gql from '@apollo/client'`);  //graphql-code-generator still only picking up gql from 'graphql-tag' import. Will switch to "@apollo/client" import when this issue is addressed
    contentManager.addImport(`import gql from 'graphql-tag';`);
}
exports.injectGlobalGqlCode = injectGlobalGqlCode;
// ---------------------------------
//
function injectFragmentImport({ contentManager, fragmentName, fragmentRelativeImportPath }) {
    const fragmentDocName = _1.makeFragmentDocName(fragmentName);
    const fragmentImport = utils_1.makeImportStatement(fragmentDocName, fragmentRelativeImportPath);
    contentManager.addImport(fragmentImport);
}
exports.injectFragmentImport = injectFragmentImport;
// ---------------------------------
//
function injectFetchAsQueryGql({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField }) {
    const shortName = utils_1.makeShortName(entityName, trimString);
    const entityShortCamelName = utils_1.makeCamelCase(shortName);
    const fragmentDocName = _1.makeFragmentDocName(fragmentName);
    if (primaryKeyIdField) {
        const primaryKeyIdPostGresFieldType = _1.getIdPostGresFieldType(primaryKeyIdField);
        contentManager.addContent(`

    // Query: FetchById
    //
    ${makeFetchByIdGQL({ fetchType: "query", entityName, fragmentName, trimString, primaryKeyIdField })}`);
    }
    contentManager.addContent(`

    // Query: Fetch
    //
    ${makeFetchObjectsGQL({ fetchType: "query", entityName, fragmentName, trimString, primaryKeyIdField })}`);
}
exports.injectFetchAsQueryGql = injectFetchAsQueryGql;
// ---------------------------------
//
function injectFetchAsSubscriptionGql({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField }) {
    const shortName = utils_1.makeShortName(entityName, trimString);
    const entityShortCamelName = utils_1.makeCamelCase(shortName);
    const fragmentDocName = _1.makeFragmentDocName(fragmentName);
    if (primaryKeyIdField) {
        const primaryKeyIdPostGresFieldType = _1.getIdPostGresFieldType(primaryKeyIdField);
        contentManager.addContent(`

    // Subscription: FetchById
    //
    ${makeFetchByIdGQL({ fetchType: "subscription", entityName, fragmentName, trimString, primaryKeyIdField })}`);
    }
    contentManager.addContent(`

    // Subscription: Fetch
    //
    ${makeFetchObjectsGQL({ fetchType: "subscription", entityName, fragmentName, trimString, primaryKeyIdField })}`);
}
exports.injectFetchAsSubscriptionGql = injectFetchAsSubscriptionGql;
function makeFetchByIdGQL({ fetchType, entityName, fragmentName, trimString, primaryKeyIdField }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const shortName = utils_1.makeShortName(entityName, trimString);
    const entityShortCamelName = utils_1.makeCamelCase(shortName);
    const fragmentDocName = _1.makeFragmentDocName(fragmentName);
    const primaryKeyIdPostGresFieldType = _1.getIdPostGresFieldType(primaryKeyIdField);
    const fetchCamelCaseTypeVerb = fetchType === "query" ? "query" : "subscribeTo";
    const fetchTypeVerbUpperCase = utils_1.camelToSnakeUpperCase(fetchCamelCaseTypeVerb);
    return `const ${fetchTypeVerbUpperCase}_${fragmentName.toUpperCase()}_BYID = gql\`
  ${fetchType} ${fetchCamelCaseTypeVerb}${fragmentNamePascalCase}ById($${entityShortCamelName}Id: ${primaryKeyIdPostGresFieldType}!) {
    ${entityName}_by_pk(id: $${entityShortCamelName}Id) {
      ...${fragmentName}
    }
  }
  \${${fragmentDocName}}\`;`;
}
function makeFetchObjectsGQL({ fetchType, entityName, fragmentName, trimString, primaryKeyIdField }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const shortName = utils_1.makeShortName(entityName, trimString);
    const entityShortCamelName = utils_1.makeCamelCase(shortName);
    const fragmentDocName = _1.makeFragmentDocName(fragmentName);
    const primaryKeyIdPostGresFieldType = _1.getIdPostGresFieldType(primaryKeyIdField);
    const fetchCamelCaseTypeVerb = fetchType === "query" ? "query" : "subscribeTo";
    const fetchTypeVerbUpperCase = utils_1.camelToSnakeUpperCase(fetchCamelCaseTypeVerb);
    return `const ${fetchTypeVerbUpperCase}_${fragmentName.toUpperCase()}_OBJECTS = gql\`
  ${fetchType} ${fetchCamelCaseTypeVerb}${fragmentNamePascalCase}Objects(
    $distinct_on: [${entityName}_select_column!]
    $where: ${entityName}_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [${entityName}_order_by!]
  ) {
    ${entityName}(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...${fragmentName}
    }
  }
  \${${fragmentDocName}}
  \`;`;
}
// ---------------------------------
//
function injectInsertGql({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const fragmentDocName = _1.makeFragmentDocName(fragmentName);
    contentManager.addContent(`

    // Mutation: Insert
    //

    const INSERT_${fragmentName.toUpperCase()} = gql\`
      mutation insert${fragmentNamePascalCase}($objects: [${entityName}_insert_input!]!) {
        insert_${entityName}(objects: $objects) {
          affected_rows
          returning {
            ...${fragmentName}
          }
        }
      }
      \${${fragmentDocName}}
    \`;`);
    contentManager.addContent(`

    // Mutation: Insert
    //

    const INSERT_${fragmentName.toUpperCase()}_WITH_ONCONFLICT = gql\`
      mutation insert${fragmentNamePascalCase}WithOnConflict($objects: [${entityName}_insert_input!]!, $onConflict: ${entityName}_on_conflict) {
        insert_${entityName}(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...${fragmentName}
          }
        }
      }
      \${${fragmentDocName}}
    \`;`);
}
exports.injectInsertGql = injectInsertGql;
// ---------------------------------
//
function injectUpdateGql({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField }) {
    const fragmentNamePascalCase = utils_1.makePascalCase(fragmentName);
    const primaryKeyIdPostGresFieldType = _1.getIdPostGresFieldType(primaryKeyIdField);
    const fragmentDocName = _1.makeFragmentDocName(fragmentName);
    contentManager.addContent(`

    // Mutation: Update by Id
    //

    const UPDATE_${fragmentName.toUpperCase()}_BYID = gql\`
      mutation update${fragmentNamePascalCase}ById($id: ${primaryKeyIdPostGresFieldType}, $set: ${entityName}_set_input) {
        update_${entityName}(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...${fragmentName}
          }
        }
      }
      \${${fragmentDocName}}
    \`;`);
    contentManager.addContent(`

    // Mutation: Update
    //

    const UPDATE_${fragmentName.toUpperCase()}S = gql\`
      mutation update${fragmentNamePascalCase}($set: ${entityName}_set_input, $where:${entityName}_bool_exp!) {
        update_${entityName}(_set: $set, where: $where) {
          affected_rows
          returning {
            ...${fragmentName}
          }
        }
      }
      \${${fragmentDocName}}
    \`;`);
}
exports.injectUpdateGql = injectUpdateGql;
// ---------------------------------
//
function injectDeleteGql({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField }) {
    const entityModelName = _1.makeModelName(entityName, trimString);
    const primaryKeyIdPostGresFieldType = _1.getIdPostGresFieldType(primaryKeyIdField);
    const fragmentDocName = _1.makeFragmentDocName(fragmentName);
    contentManager.addContent(`

    // Mutation: Remove by Id
    //

    const REMOVE_${entityModelName.toUpperCase()}_BYID = gql\`
      mutation remove${entityModelName}ById($id: ${primaryKeyIdPostGresFieldType}) {
        delete_${entityName}(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
    \`;`);
    contentManager.addContent(`

    // Mutation: Remove
    //

    const REMOVE_${entityModelName.toUpperCase()}S = gql\`
      mutation remove${entityModelName}($where:${entityName}_bool_exp!) {
        delete_${entityName}(where: $where) {
          affected_rows
        }
      }
    \`;`);
}
exports.injectDeleteGql = injectDeleteGql;
//# sourceMappingURL=gqlInjectors.js.map