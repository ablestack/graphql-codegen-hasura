"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function injectFetchGql({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField }) {
    const shortName = utils_1.makeShortName(entityName, trimString);
    const entityShortCamelName = utils_1.makeCamelCase(shortName);
    const fragmentDocName = _1.makeFragmentDocName(fragmentName);
    if (primaryKeyIdField) {
        const primaryKeyIdPostGresFieldType = _1.getIdPostGresFieldType(primaryKeyIdField);
        contentManager.addContent(`

    // Query: FetchById
    //

    const FETCH_${fragmentName.toUpperCase()}_BYID = gql\`
      query fetch${fragmentName}ById($${entityShortCamelName}Id: ${primaryKeyIdPostGresFieldType}!) {
        ${entityName}_by_pk(id: $${entityShortCamelName}Id) {
          ...${fragmentName}
        }
      }
      \${${fragmentDocName}}
    \`;`);
    }
    contentManager.addContent(`

    // Query: Fetch
    //

    const FETCH_${fragmentName.toUpperCase()}S = gql\`
      query fetch${fragmentName}(
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
    \`;`);
}
exports.injectFetchGql = injectFetchGql;
// ---------------------------------
//
function injectInsertGql({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField }) {
    const fragmentDocName = _1.makeFragmentDocName(fragmentName);
    contentManager.addContent(`

    // Mutation: Insert
    //

    const INSERT_${fragmentName.toUpperCase()} = gql\`
      mutation insert${fragmentName}($objects: [${entityName}_insert_input!]!) {
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
      mutation insert${fragmentName}WithOnConflict($objects: [${entityName}_insert_input!]!, $onConflict: ${entityName}_on_conflict) {
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
    const primaryKeyIdPostGresFieldType = _1.getIdPostGresFieldType(primaryKeyIdField);
    const fragmentDocName = _1.makeFragmentDocName(fragmentName);
    contentManager.addContent(`

    // Mutation: Update by Id
    //

    const UPDATE_${fragmentName.toUpperCase()}_BYID = gql\`
      mutation update${fragmentName}ById($id: ${primaryKeyIdPostGresFieldType}, $set: ${entityName}_set_input) {
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
      mutation update${fragmentName}($set: ${entityName}_set_input, $where:${entityName}_bool_exp!) {
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