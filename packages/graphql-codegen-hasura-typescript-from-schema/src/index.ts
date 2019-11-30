import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { GraphQLNamedType, GraphQLSchema } from "graphql";
import {
  getPrimaryKeyIdField,
  makeFragmentName,
  makeModelName,
  makePrimaryCodegenTypescriptImport,
  makeShortCamelCaseName,
  TABLE_TYPE_FILTER,
  makeShortName,
  getIdPostGresFieldType,
  getIdTypeScriptFieldType
} from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  reactApolloVersion?: number;
  primaryCodegenTypeScriptImportPath: string;
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
    `import { ApolloClient } from '${config.reactApolloVersion === 3 ? "@apollo/client" : "apollo-client"}'`,
    `import { FetchResult } from '${config.reactApolloVersion === 3 ? "@apollo/client" : "apollo-link"}'`,
    `import { QueryOptions, MutationOptions } from '${config.reactApolloVersion === 3 ? "@apollo/client" : "react-apollo"}'`
  ];
  const contentArray: string[] = [];

  Object.values(schema.getTypeMap())
    .filter(t => TABLE_TYPE_FILTER(t))
    .map(t => {
      return `
      ${makeEntitySharedTypeScript(t, importArray, contentArray, config)}
      ${config.withInserts && makeEntityInsertMutationTypeScript(t, importArray, contentArray, config)}
      ${config.withQueries && makeEntityQueryMutationTypeScript(t, importArray, contentArray, config)}
      ${config.withUpdates && makeEntityUpdateMutationTypeScript(t, importArray, contentArray, config)}
      ${config.withDeletes && makeEntityDeleteMutationTypeScript(t, importArray, contentArray, config)}
      `;
    });

  return {
    prepend: importArray,
    content: contentArray.join("\n")
  };
};

// --------------------------------------
//

function makeEntitySharedTypeScript(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const fragmentName = makeFragmentName(entityName, config.trimString);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);

  contentArray.push(`
    // ${entityName} Helpers
    //------------------------------------------------
  `);

  if (!primaryKeyIdTypeScriptFieldType.isNative) {
    const typeImport = makePrimaryCodegenTypescriptImport(`${primaryKeyIdTypeScriptFieldType.typeName}`, config.primaryCodegenTypeScriptImportPath);
    if (!importArray.includes(typeImport)) {
      importArray.push(typeImport);
    }
  }

  importArray.push(makePrimaryCodegenTypescriptImport(`${fragmentName}Fragment`, config.primaryCodegenTypeScriptImportPath));
}
// --------------------------------------
//

function makeEntityQueryMutationTypeScript(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const entityShortCamelCaseName = makeShortCamelCaseName(entityName, config.trimString);
  const entityModelName = makeModelName(entityName, config.trimString);
  const fragmentName = makeFragmentName(entityName, config.trimString);

  contentArray.push(`
    // Fetch Helper
    //

    export async function fetch${entityModelName}ById(
      apolloClient: ApolloClient<object>, 
      ${entityShortCamelCaseName}Id: string
      ): Promise<${fragmentName}Fragment | null | undefined> {
      const ${entityShortCamelCaseName}Result = await apolloClient.query<Fetch${entityModelName}ByIdQuery>({ query: Fetch${entityModelName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id } });
      return ${entityShortCamelCaseName}Result.data.${entityName}_by_pk;
    }
  `);

  contentArray.push(`
    export async function fetch${entityModelName}(
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}Id: string,
      queryOptions: Omit<QueryOptions<Fetch${entityModelName}QueryVariables>, 'query'>,
    ): Promise<${fragmentName}Fragment[] | null | undefined> {
      const ${entityShortCamelCaseName}Result = await apolloClient.query<Fetch${entityModelName}Query>({ query: Fetch${entityModelName}Document, ...queryOptions });
      return ${entityShortCamelCaseName}Result.data.${entityName};
    }
  `);

  importArray.push(makePrimaryCodegenTypescriptImport(`Fetch${entityModelName}ByIdQuery`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Fetch${entityModelName}ByIdDocument`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Fetch${entityModelName}Query`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Fetch${entityModelName}Document`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Fetch${entityModelName}QueryVariables`, config.primaryCodegenTypeScriptImportPath));
}

// --------------------------------------
//

function makeEntityInsertMutationTypeScript(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  if (!getPrimaryKeyIdField(namedType)) return;

  const entityName = namedType.name;
  const entityShortCamelCaseName = makeShortCamelCaseName(entityName, config.trimString);
  const entityModelName = makeModelName(entityName, config.trimString);
  const entityFragmentName = makeFragmentName(entityName, config.trimString);

  contentArray.push(`
    // Insert Helper
    //

    export async function insert${entityModelName}(
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}Id: string,
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

function makeEntityUpdateMutationTypeScript(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const entityShortName = makeShortName(entityName);
  const entityShortCamelCaseName = makeShortCamelCaseName(entityName, config.trimString);
  const entityModelName = makeModelName(entityName, config.trimString);
  const entityFragmentName = makeFragmentName(entityName, config.trimString);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);

  contentArray.push(`
    // Update Helper
    //

    export async function update${entityModelName}ById(
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName},
      set: ${entityShortName}_Set_Input,
      mutationOptions: Omit<MutationOptions<Update${entityModelName}ByIdMutation, Update${entityModelName}ByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Update${entityModelName}ByIdMutation>; returning: (${entityFragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Update${entityModelName}ByIdMutation, Update${entityModelName}ByIdMutationVariables>({ mutation: Update${entityModelName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_${entityName} && result.data.update_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  contentArray.push(`
    export async function update${entityModelName}(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Update${entityModelName}Mutation, Update${entityModelName}MutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Update${entityModelName}Mutation>; returning: (${entityFragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Update${entityModelName}Mutation, Update${entityModelName}MutationVariables>({ mutation: Update${entityModelName}Document, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_${entityName} && result.data.update_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  importArray.push(makePrimaryCodegenTypescriptImport(`${entityShortName}_Set_Input`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}ByIdMutation`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}ByIdMutationVariables`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}ByIdDocument`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}Mutation`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}MutationVariables`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}Document`, config.primaryCodegenTypeScriptImportPath));
}

// --------------------------------------
//

function makeEntityDeleteMutationTypeScript(namedType: GraphQLNamedType, importArray: string[], contentArray: string[], config: CstmHasuraCrudPluginConfig) {
  const primaryKeyIdField = getPrimaryKeyIdField(namedType);
  if (!primaryKeyIdField) return;

  const entityName = namedType.name;
  const entityShortCamelCaseName = makeShortCamelCaseName(entityName, config.trimString);
  const entityModelName = makeModelName(entityName, config.trimString);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);

  contentArray.push(`
    // Delete Helper
    //

    export async function remove${entityModelName}ById(
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName},
      mutationOptions: Omit<MutationOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Remove${entityModelName}ByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>({ mutation: Remove${entityModelName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id, }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_${entityName} && result.data.delete_${entityName}!.affected_rows;
    
      return { result, returning };
    }
  `);

  contentArray.push(`
    export async function remove${entityModelName}(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Remove${entityModelName}Mutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>({ mutation: Remove${entityModelName}Document, ...mutationOptions,});
    
      const returning = result && result.data && result.data.delete_${entityName} && result.data.delete_${entityName}!.affected_rows;
    
      return { result, returning };
    }
  `);

  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}Mutation`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}MutationVariables`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}Document`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}ByIdMutation`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}ByIdMutationVariables`, config.primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}ByIdDocument`, config.primaryCodegenTypeScriptImportPath));
}

// --------------------------------------
//
