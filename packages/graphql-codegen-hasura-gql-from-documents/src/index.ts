import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { FieldDefinitionNode, FragmentDefinitionNode, GraphQLSchema } from "graphql";
import { TypeMap } from "graphql/type/schema";
import {
  getIdTypeScriptFieldType,
  getPrimaryKeyIdField,
  injectDeleteGql,
  injectFetchGql,
  injectInsertGql,
  injectUpdateGql,
  makeFragmentsImport,
  makePrimaryCodegenTypescriptImport
} from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  reactApolloVersion?: number;
  fragmentImportFrom?: string;
  trimString?: string;
  withQueries?: boolean;
  withInserts?: boolean;
  withUpdates?: boolean;
  withDeletes?: boolean;
}

export const plugin: PluginFunction<CstmHasuraCrudPluginConfig> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: CstmHasuraCrudPluginConfig) => {
  // Set config defaults
  if (!config.reactApolloVersion) config.reactApolloVersion = 3;

  const importArray: string[] = [
    "/* eslint-disable @typescript-eslint/no-unused-vars */",
    //`import gql from '${config.reactApolloVersion === 3 ? "@apollo/client" : "graphql-tag"}';` //graphql-code-generator still only picking up gql from 'graphql-tag' import. Will switch to "@apollo/client" import when this issue is addressed
    `import gql from 'graphql-tag';`
  ];
  const contentArray: string[] = [];

  // get typemap from schema
  const typeMap = schema.getTypeMap();

  // iterate and generate
  documents
    .map(document => {
      document.content.definitions
        .filter(definition => definition.kind === "FragmentDefinition")
        .map(definition => {
          const fd = definition as FragmentDefinitionNode;
          return `
      ${makeEntityModelSharedGql(fd, typeMap, importArray, contentArray, config)}
      ${config.withQueries && makeEntityQueryMutationGql(fd, typeMap, importArray, contentArray, config)}
      ${config.withInserts && makeEntityInsertMutationGql(fd, typeMap, importArray, contentArray, config)}
      ${config.withUpdates && makeEntityUpdateMutationGql(fd, typeMap, importArray, contentArray, config)}
      ${config.withDeletes && makeEntityDeleteMutationGql(fd, typeMap, importArray, contentArray, config)}
      `;
        });
    })
    .flat();

  return {
    prepend: importArray,
    content: contentArray.join("\n")
  };
};

// --------------------------------------
//

function makeEntityModelSharedGql(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  importArray: string[],
  contentArray: string[],
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentImport = makeFragmentsImport(fragmentName, config.fragmentImportFrom);

  contentArray.push(`
    // ${fragmentName} GQL
    //------------------------------------------------
  `);

  // import fragment if not already
  if (!importArray.includes(fragmentImport)) {
    importArray.push();
  }
}

// --------------------------------------
//

function makeEntityQueryMutationGql(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  importArray: string[],
  contentArray: string[],
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectFetchGql({
    contentArray,
    importArray,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//

function makeEntityInsertMutationGql(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  importArray: string[],
  contentArray: string[],
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectInsertGql({
    contentArray,
    importArray,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//

function makeEntityUpdateMutationGql(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  importArray: string[],
  contentArray: string[],
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectUpdateGql({
    contentArray,
    importArray,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//

function makeEntityDeleteMutationGql(
  fragmentDefinitionNode: FragmentDefinitionNode,
  schemaTypeMap: TypeMap,
  importArray: string[],
  contentArray: string[],
  config: CstmHasuraCrudPluginConfig
) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectDeleteGql({
    contentArray,
    importArray,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField
  });
}

// --------------------------------------
//

// ---------------------------------
//

export function injectFragmentGql({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  primaryCodegenTypeScriptImportPath
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
  primaryCodegenTypeScriptImportPath: string;
}) {
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);

  contentArray.push(`
    // ${entityName} Helpers
    //------------------------------------------------
  `);

  if (!primaryKeyIdTypeScriptFieldType.isNative) {
    const typeImport = makePrimaryCodegenTypescriptImport(`${primaryKeyIdTypeScriptFieldType.typeName}`, primaryCodegenTypeScriptImportPath);
    if (!importArray.includes(typeImport)) {
      importArray.push(typeImport);
    }
  }

  importArray.push(makePrimaryCodegenTypescriptImport(`${fragmentName}Fragment`, primaryCodegenTypeScriptImportPath));
}
