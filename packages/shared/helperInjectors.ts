import { FieldDefinitionNode } from "graphql";
import { getIdTypeScriptFieldType, makeFragmentName, makeModelName, makeShortCamelCaseName, makeShortName, makeImportStatement } from ".";
import { makeFragmentDocName, makeFragmentTypeScriptTypeName } from "./utils";

// ---------------------------------
//
export function injectSharedHelpers({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);

  contentArray.push(`
    // ${entityName} Helpers
    //------------------------------------------------
  `);

  if (!primaryKeyIdTypeScriptFieldType.isNative) {
    const typeImport = makeImportStatement(`${primaryKeyIdTypeScriptFieldType.typeName}`, typescriptCodegenOutputPath);
    if (!importArray.includes(typeImport)) {
      importArray.push(typeImport);
    }
  }

  const fragmentTypeScriptTypeName = makeFragmentTypeScriptTypeName(fragmentName);
  importArray.push(makeImportStatement(fragmentTypeScriptTypeName, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectFetchHelpers({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const entityShortCamelCaseName = makeShortCamelCaseName(entityName, trimString);
  const entityModelName = makeModelName(entityName, trimString);

  contentArray.push(`
      // Fetch Helper
      //
  
      export async function fetch${fragmentName}ById(
        apolloClient: ApolloClient<object>, 
        ${entityShortCamelCaseName}Id: string
        ): Promise<${fragmentName}Fragment | null | undefined> {
        const ${entityShortCamelCaseName}Result = await apolloClient.query<Fetch${fragmentName}ByIdQuery>({ query: Fetch${fragmentName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id } });
        return ${entityShortCamelCaseName}Result.data.${entityName}_by_pk;
      }
    `);
  contentArray.push(`
      export async function fetch${fragmentName}(
        apolloClient: ApolloClient<object>,
        ${entityShortCamelCaseName}Id: string,
        queryOptions: Omit<QueryOptions<Fetch${fragmentName}QueryVariables>, 'query'>,
      ): Promise<${fragmentName}Fragment[] | null | undefined> {
        const ${entityShortCamelCaseName}Result = await apolloClient.query<Fetch${fragmentName}Query>({ query: Fetch${fragmentName}Document, ...queryOptions });
        return ${entityShortCamelCaseName}Result.data.${entityName};
      }
    `);
  importArray.push(makeImportStatement(`Fetch${fragmentName}ByIdQuery`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Fetch${fragmentName}ByIdDocument`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Fetch${fragmentName}Query`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Fetch${fragmentName}Document`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Fetch${fragmentName}QueryVariables`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectInsertHelpers({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const entityShortCamelCaseName = makeShortCamelCaseName(entityName, trimString);
  const entityModelName = makeModelName(entityName, trimString);

  contentArray.push(`
    // Insert Helper
    //

    export async function insert${fragmentName}(
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}Id: string,
      mutationOptions: Omit<MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Insert${fragmentName}Mutation>; returning: (${fragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>({ mutation: Insert${fragmentName}Document, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_${entityName} && result.data.insert_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  importArray.push(makeImportStatement(`Insert${fragmentName}Mutation`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Insert${fragmentName}MutationVariables`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Insert${fragmentName}Document`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectUpdateHelpers({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const entityShortName = makeShortName(entityName);
  const entityShortCamelCaseName = makeShortCamelCaseName(entityName, trimString);
  const entityModelName = makeModelName(entityName, trimString);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);

  contentArray.push(`
    // Update Helper
    //

    export async function update${fragmentName}ById(
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName},
      set: ${entityShortName}_Set_Input,
      mutationOptions: Omit<MutationOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Update${fragmentName}ByIdMutation>; returning: (${fragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>({ mutation: Update${fragmentName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_${entityName} && result.data.update_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  contentArray.push(`
    export async function update${fragmentName}(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Update${fragmentName}Mutation>; returning: (${fragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>({ mutation: Update${fragmentName}Document, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_${entityName} && result.data.update_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  importArray.push(makeImportStatement(`${entityShortName}_Set_Input`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Update${fragmentName}ByIdMutation`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Update${fragmentName}ByIdMutationVariables`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Update${fragmentName}ByIdDocument`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Update${fragmentName}Mutation`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Update${fragmentName}MutationVariables`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Update${fragmentName}Document`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectDeleteHelpers({
  contentArray,
  importArray,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentArray: string[];
  importArray: string[];
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const entityShortCamelCaseName = makeShortCamelCaseName(entityName, trimString);
  const entityModelName = makeModelName(entityName, trimString);
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

  importArray.push(makeImportStatement(`Remove${entityModelName}Mutation`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}MutationVariables`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}Document`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}ByIdMutation`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}ByIdMutationVariables`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}ByIdDocument`, typescriptCodegenOutputPath));
}
