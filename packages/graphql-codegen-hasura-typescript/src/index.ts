import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { GraphQLNamedType, GraphQLSchema } from "graphql";
import {
  getIdFieldType,
  getPrimaryKeyIdField,
  makeModelEntityName,
  makeShortCamelCaseEntityName,
  TABLE_TYPE_FILTER,
  makeShortEntityName,
  makeFragmentName,
  makePrimaryCodegenTypescriptImport
} from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  primaryCodegenTypeScriptImportPath: string;
  withQueries?: boolean;
  withInserts?: boolean;
  withUpdates?: boolean;
  withDeletes?: boolean;
}

export const plugin: PluginFunction<CstmHasuraCrudPluginConfig> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: CstmHasuraCrudPluginConfig) => {
  const importArray: string[] = [`import { ApolloClient, FetchResult, MutationOptions } from '@apollo/client'`];
  const contentArray: string[] = [];

  Object.values(schema.getTypeMap())
    .filter(t => TABLE_TYPE_FILTER(t))
    .map(t => {
      return `
      ${makeEntitySharedGql(t, importArray, contentArray, config)}
      ${config.withInserts && makeEntityInsertMutationGql(t, importArray, contentArray, config)}
      ${config.withQueries && makeEntityQueryMutationGql(t, importArray, contentArray, config)}
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

function makeEntitySharedGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const entityModelName = makeModelEntityName(entityName);
  const fragmentName = makeFragmentName(namedType.name);

  importArray.push(makePrimaryCodegenTypescriptImport(`${fragmentName}Fragment`, config.primaryCodegenTypeScriptImportPath));
}
// --------------------------------------
//

function makeEntityQueryMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const entityShortCamelCaseName = makeShortCamelCaseEntityName(namedType.name);
  const entityModelName = makeModelEntityName(entityName);
  const fragmentName = makeFragmentName(namedType.name);

  contentArray.push(`
    export async function fetch${entityModelName}(apolloClient: ApolloClient<object>, ${entityShortCamelCaseName}Id: string): Promise<${fragmentName}Fragment | null | undefined> {
      const ${entityShortCamelCaseName}Result = await apolloClient.query<Fetch${entityModelName}Query>({ query: Fetch${entityModelName}Document, variables: { ${entityShortCamelCaseName}Id } });
      return ${entityShortCamelCaseName}Result.data.${entityName}_by_pk;
    }
  `);

  importArray.push(makePrimaryCodegenTypescriptImport(`Fetch${entityModelName}Query`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Fetch${entityModelName}Document`, config.primaryCodegenTypeScriptImportPath));
}

// --------------------------------------
//

function makeEntityInsertMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  if (!getPrimaryKeyIdField(namedType)) return;

  const entityName = namedType.name;
  const entityModelName = makeModelEntityName(entityName);
  const entityFragmentName = makeFragmentName(entityName);

  contentArray.push(`
    export async function insert${entityModelName}(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Insert${entityModelName}Mutation, Insert${entityModelName}MutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Insert${entityModelName}Mutation>; returning: (${entityFragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Insert${entityModelName}Mutation, Insert${entityModelName}MutationVariables>({ mutation: Insert${entityModelName}Document, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_${entityName} && result.data.insert_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  importArray.push(makePrimaryCodegenTypescriptImport(`Insert${entityModelName}Mutation`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Insert${entityModelName}MutationVariables`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Insert${entityModelName}Document`, config.primaryCodegenTypeScriptImportPath));
}

// --------------------------------------
//

function makeEntityUpdateMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const entityModelName = makeModelEntityName(entityName);
  const entityFragmentName = makeFragmentName(entityName);

  contentArray.push(`
    export async function update${entityModelName}(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Update${entityModelName}ByIdMutation, Update${entityModelName}ByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Update${entityModelName}ByIdMutation>; returning: (${entityFragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Update${entityModelName}ByIdMutation, Update${entityModelName}ByIdMutationVariables>({ mutation: Update${entityModelName}ByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_${entityName} && result.data.update_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}ByIdMutation`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}ByIdMutationVariables`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}ByIdDocument`, config.primaryCodegenTypeScriptImportPath));
}

// --------------------------------------
//

function makeEntityDeleteMutationGql(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const entityModelName = makeModelEntityName(entityName);
  const entityFragmentName = makeFragmentName(entityName);

  contentArray.push(`
    export async function delete${entityModelName}(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Delete${entityModelName}ByIdMutation, Delete${entityModelName}ByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Delete${entityModelName}ByIdMutation>; returning: (${entityFragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Delete${entityModelName}ByIdMutation, Delete${entityModelName}ByIdMutationVariables>({ mutation: Delete${entityModelName}ByIdDocument, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_${entityName} && result.data.delete_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}ByIdMutation`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}ByIdMutationVariables`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}ByIdDocument`, config.primaryCodegenTypeScriptImportPath));
}

// --------------------------------------
