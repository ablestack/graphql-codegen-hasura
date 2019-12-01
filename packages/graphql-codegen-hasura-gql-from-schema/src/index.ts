import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { GraphQLNamedType, GraphQLSchema, ObjectTypeDefinitionNode } from "graphql";
import {
  getPrimaryKeyIdField,
  injectDeleteGql,
  injectFetchGql,
  injectFragmentImport,
  injectInsertGql,
  injectUpdateGql,
  makeFragmentName,
  makeModelName,
  SCALAR_TYPE_TEST,
  TABLE_TYPE_FILTER,
  makeFragmentDocName
} from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  reactApolloVersion?: number;
  typescriptCodegenOutputRelativePath?: string;
  trimString?: string;
  withFragments?: boolean;
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

  Object.values(schema.getTypeMap())
    .filter(t => TABLE_TYPE_FILTER(t))
    .map(t => {
      return `
      ${makeEntityModelSharedGql(t, importArray, contentArray, config)}
      ${config.withFragments && makeEntityModelFragmentsGql(t, importArray, contentArray, config)}
      ${config.withQueries && makeEntityQueryMutationGql(t, importArray, contentArray, config)}
      ${config.withInserts && makeEntityInsertMutationGql(t, importArray, contentArray, config)}
      ${config.withUpdates && makeEntityUpdateMutationGql(t, importArray, contentArray, config)}
      ${config.withDeletes && makeEntityDeleteMutationGql(t, importArray, contentArray, config)}
      `;
    });

  return {
    prepend: importArray,
    content: contentArray.join("\n")
  };
};

// --------------------------------------
//

function makeEntityModelSharedGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const entityName = namedType.name;

  contentArray.push(`
  // ${entityName} GQL
  //------------------------------------------------
  `);

  const fragmentName = makeFragmentName(entityName, config.trimString);
  if (config.typescriptCodegenOutputRelativePath) injectFragmentImport({ importArray, fragmentName, fragmentRelativeImportPath: config.typescriptCodegenOutputRelativePath });
}

function makeEntityModelFragmentsGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const entityName = namedType.name;
  const fragmentName = makeFragmentName(entityName, config.trimString);
  const fragmentDocName = makeFragmentDocName(fragmentName);
  const fields = (namedType.astNode as ObjectTypeDefinitionNode).fields;
  const scalarFieldNamesArray: string[] = [];

  if (!fields) return;

  fields.forEach(f => {
    if (SCALAR_TYPE_TEST(f)) {
      scalarFieldNamesArray.push(f.name.value);
    }
  });

  contentArray.push(`

    // Scalar Fields Fragment
    //

    export const ${fragmentDocName} = gql\`
      fragment ${fragmentName} on ${entityName} {
      ${scalarFieldNamesArray.join("\n      ")}
      }
    \`;`);
}

// --------------------------------------
//

function makeEntityQueryMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const fragmentName = makeFragmentName(entityName, config.trimString);

  injectFetchGql({
    contentArray,
    importArray,
    entityName,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField
  });
}

// --------------------------------------
//

function makeEntityInsertMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const fragmentName = makeFragmentName(entityName, config.trimString);

  injectInsertGql({
    contentArray,
    importArray,
    entityName,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField
  });
}

// --------------------------------------
//

function makeEntityUpdateMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const fragmentName = makeFragmentName(entityName, config.trimString);

  injectUpdateGql({
    contentArray,
    importArray,
    entityName,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField
  });
}

// --------------------------------------
//

function makeEntityDeleteMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const fragmentName = makeFragmentName(entityName, config.trimString);

  injectDeleteGql({
    contentArray,
    importArray,
    entityName,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField
  });
}

// --------------------------------------
//
