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
  makeFragmentDocName,
  ContentManager
} from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  reactApolloVersion?: number;
  typescriptCodegenOutputPath?: string;
  trimString?: string;
  withFragments?: boolean;
  withQueries?: boolean;
  withInserts?: boolean;
  withUpdates?: boolean;
  withDeletes?: boolean;
}

export const plugin: PluginFunction<CstmHasuraCrudPluginConfig> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: CstmHasuraCrudPluginConfig) => {
  // Set config defaults
  if (!config.reactApolloVersion) config.reactApolloVersion = 2;

  const contentManager = new ContentManager();

  contentManager.addImport("/* eslint-disable @typescript-eslint/no-unused-vars */");
  //contentManager.addImport(`import gql from '${config.reactApolloVersion === 3 ? "@apollo/client" : "graphql-tag"}';`);  //graphql-code-generator still only picking up gql from 'graphql-tag' import. Will switch to "@apollo/client" import when this issue is addressed
  contentManager.addImport(`import gql from 'graphql-tag';`);

  Object.values(schema.getTypeMap())
    .filter(t => TABLE_TYPE_FILTER(t))
    .map(t => {
      injectEntityModelSharedGql(t, contentManager, config);
      config.withFragments && injectEntityModelFragmentsGql(t, contentManager, config);
      config.withQueries && injectEntityQueryGql(t, contentManager, config);
      config.withInserts && injectEntityInsertMutationGql(t, contentManager, config);
      config.withUpdates && injectEntityUpdateMutationGql(t, contentManager, config);
      config.withDeletes && injectEntityDeleteMutationGql(t, contentManager, config);
    });

  return {
    prepend: contentManager.generateImportArray(),
    content: contentManager.createContentString()
  };
};

// --------------------------------------
//

function injectEntityModelSharedGql(namedType: GraphQLNamedType, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const entityName = namedType.name;

  contentManager.addContent(`
  // ${entityName} GQL
  //------------------------------------------------
  `);

  const fragmentName = makeFragmentName(entityName, config.trimString);
  if (config.typescriptCodegenOutputPath) injectFragmentImport({ contentManager, fragmentName, fragmentRelativeImportPath: config.typescriptCodegenOutputPath });
}

function injectEntityModelFragmentsGql(namedType: GraphQLNamedType, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
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

  contentManager.addContent(`

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

function injectEntityQueryGql(namedType: GraphQLNamedType, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);

  const entityName = namedType.name;
  const fragmentName = makeFragmentName(entityName, config.trimString);

  injectFetchGql({
    contentManager,
    entityName,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField
  });
}

// --------------------------------------
//

function injectEntityInsertMutationGql(namedType: GraphQLNamedType, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const fragmentName = makeFragmentName(entityName, config.trimString);

  injectInsertGql({
    contentManager,
    entityName,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField
  });
}

// --------------------------------------
//

function injectEntityUpdateMutationGql(namedType: GraphQLNamedType, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const fragmentName = makeFragmentName(entityName, config.trimString);

  injectUpdateGql({
    contentManager,
    entityName,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField
  });
}

// --------------------------------------
//

function injectEntityDeleteMutationGql(namedType: GraphQLNamedType, contentManager: ContentManager, config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const fragmentName = makeFragmentName(entityName, config.trimString);

  injectDeleteGql({
    contentManager,
    entityName,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField
  });
}

// --------------------------------------
//
