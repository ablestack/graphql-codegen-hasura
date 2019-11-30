import { FieldDefinitionNode } from "graphql";
import { getIdTypeScriptFieldType, makeFragmentName, makeModelName, makePrimaryCodegenTypescriptImport, makeShortCamelCaseName, makeShortName } from ".";

// ---------------------------------
//
export function injectSharedHelpers({
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

// ---------------------------------
//
export function injectFetchHelpers({
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
  const entityShortCamelCaseName = makeShortCamelCaseName(entityName, trimString);
  const entityModelName = makeModelName(entityName, trimString);

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
  importArray.push(makePrimaryCodegenTypescriptImport(`Fetch${entityModelName}ByIdQuery`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Fetch${entityModelName}ByIdDocument`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Fetch${entityModelName}Query`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Fetch${entityModelName}Document`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Fetch${entityModelName}QueryVariables`, primaryCodegenTypeScriptImportPath));
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
  const entityShortCamelCaseName = makeShortCamelCaseName(entityName, trimString);
  const entityModelName = makeModelName(entityName, trimString);

  contentArray.push(`
    // Insert Helper
    //

    export async function insert${entityModelName}(
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}Id: string,
      mutationOptions: Omit<MutationOptions<Insert${entityModelName}Mutation, Insert${entityModelName}MutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Insert${entityModelName}Mutation>; returning: (${fragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Insert${entityModelName}Mutation, Insert${entityModelName}MutationVariables>({ mutation: Insert${entityModelName}Document, ...mutationOptions,});
    
      const returning = result && result.data && result.data.insert_${entityName} && result.data.insert_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  importArray.push(makePrimaryCodegenTypescriptImport(`Insert${entityModelName}Mutation`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Insert${entityModelName}MutationVariables`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Insert${entityModelName}Document`, primaryCodegenTypeScriptImportPath));
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
  const entityShortName = makeShortName(entityName);
  const entityShortCamelCaseName = makeShortCamelCaseName(entityName, trimString);
  const entityModelName = makeModelName(entityName, trimString);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);

  contentArray.push(`
    // Update Helper
    //

    export async function update${entityModelName}ById(
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName},
      set: ${entityShortName}_Set_Input,
      mutationOptions: Omit<MutationOptions<Update${entityModelName}ByIdMutation, Update${entityModelName}ByIdMutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Update${entityModelName}ByIdMutation>; returning: (${fragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Update${entityModelName}ByIdMutation, Update${entityModelName}ByIdMutationVariables>({ mutation: Update${entityModelName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id, set }, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_${entityName} && result.data.update_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  contentArray.push(`
    export async function update${entityModelName}(
      apolloClient: ApolloClient<object>,
      mutationOptions: Omit<MutationOptions<Update${entityModelName}Mutation, Update${entityModelName}MutationVariables>, 'mutation'>,
    ): Promise<{ result: FetchResult<Update${entityModelName}Mutation>; returning: (${fragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Update${entityModelName}Mutation, Update${entityModelName}MutationVariables>({ mutation: Update${entityModelName}Document, ...mutationOptions,});
    
      const returning = result && result.data && result.data.update_${entityName} && result.data.update_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  importArray.push(makePrimaryCodegenTypescriptImport(`${entityShortName}_Set_Input`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}ByIdMutation`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}ByIdMutationVariables`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}ByIdDocument`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}Mutation`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}MutationVariables`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Update${entityModelName}Document`, primaryCodegenTypeScriptImportPath));
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

  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}Mutation`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}MutationVariables`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}Document`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}ByIdMutation`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}ByIdMutationVariables`, primaryCodegenTypeScriptImportPath));
  importArray.push(makePrimaryCodegenTypescriptImport(`Remove${entityModelName}ByIdDocument`, primaryCodegenTypeScriptImportPath));
}
