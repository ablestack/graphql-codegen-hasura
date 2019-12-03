import { FieldDefinitionNode } from "graphql";
import { getIdTypeScriptFieldType, makeFragmentName, makeModelName, makeShortName, makeImportStatement } from ".";
import { makeFragmentTypeScriptTypeName, makePascalCase, makeCamelCase } from "./utils";

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
  const entityShortName = makeShortName(entityName, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);

  contentArray.push(`
      // Fetch Helper
      //
  
      export async function fetch${fragmentName}ObjectById({
        apolloClient,
        ${entityShortCamelCaseName}Id,
        options,
      }: {
        apolloClient: ApolloClient<object>, 
        ${entityShortCamelCaseName}Id: string,
        options?: Omit<QueryOptions<Fetch${fragmentName}QueryVariables>, 'query' | 'variables'>,
      }): Promise<${fragmentName}Fragment | null | undefined> {
        const ${entityShortCamelCaseName}Result = await apolloClient.query<Fetch${fragmentName}ByIdQuery>({ query: Fetch${fragmentName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id }, ...options });
        return ${entityShortCamelCaseName}Result.data.${entityName}_by_pk;
      }
    `);
  contentArray.push(`
      export async function fetch${fragmentName}Objects({
        apolloClient,
        options,
      }:{
        apolloClient: ApolloClient<object>,
        options: Omit<QueryOptions<Fetch${fragmentName}QueryVariables>, 'query'>,
      }): Promise<${fragmentName}Fragment[] | null | undefined> {
        const ${entityShortCamelCaseName}Result = await apolloClient.query<Fetch${fragmentName}Query>({ query: Fetch${fragmentName}Document, ...options });
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
  const entityPascalName = makePascalCase(entityName);
  const entityShortName = makeShortName(entityName, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);

  contentArray.push(`
    // Insert Helper
    //

    export async function insert${fragmentName}Object({
      apolloClient,
      ${entityShortCamelCaseName},
      onConflict,
      options,
    } :{
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input,
      onConflict?: ${entityPascalName}_On_Conflict,
      options?: Omit<MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation' | 'variables'>,
    }): Promise<{ result: FetchResult<Insert${fragmentName}Mutation>; returning: ${fragmentName}Fragment | null | undefined }> {
      
      const result = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>({ 
        mutation: Insert${fragmentName}Document, 
        variables: { objects: [${entityShortCamelCaseName}], onConflict },
        ...options,
      });
    
      const returning = result && result.data && result.data.insert_${entityName} && result.data.insert_${entityName}!.returning && result.data.insert_${entityName}!.returning[0];
    
      return { result, returning };
    }
  `);

  contentArray.push(`
    export async function insert${fragmentName}Objects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<Insert${fragmentName}Mutation>; returning: (${fragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>({ mutation: Insert${fragmentName}Document, ...options,});
    
      const returning = result && result.data && result.data.insert_${entityName} && result.data.insert_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  importArray.push(makeImportStatement(`${entityPascalName}_Insert_Input`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`${entityPascalName}_On_Conflict`, typescriptCodegenOutputPath));
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
  const entityPascalName = makePascalCase(entityName);
  const entityShortName = makeShortName(entityName, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);

  contentArray.push(`
    // Update Helper
    //

    export async function update${fragmentName}ObjectById({
      apolloClient,
      ${entityShortCamelCaseName}Id,
      set,
      options,
    }: { 
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName},
      set: ${entityPascalName}_Set_Input,
      options?: Omit<MutationOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<Update${fragmentName}ByIdMutation>; returning: ${fragmentName}Fragment | null | undefined }> {
      
      const result = await apolloClient.mutate<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>({ mutation: Update${fragmentName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id, set }, ...options,});
    
      const returning = result && result.data && result.data.update_${entityName} && result.data.update_${entityName}!.returning && result.data.update_${entityName}!.returning[0];
    
      return { result, returning };
    }
  `);

  contentArray.push(`
    export async function update${fragmentName}Objects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<Update${fragmentName}Mutation>; returning: (${fragmentName}Fragment | null | undefined)[] | null | undefined }> {
      
      const result = await apolloClient.mutate<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>({ mutation: Update${fragmentName}Document, ...options,});
    
      const returning = result && result.data && result.data.update_${entityName} && result.data.update_${entityName}!.returning;
    
      return { result, returning };
    }
  `);

  importArray.push(makeImportStatement(`${entityPascalName}_Set_Input`, typescriptCodegenOutputPath));
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
  const entityShortName = makeShortName(entityName, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const entityModelName = makeModelName(entityName, trimString);
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);

  contentArray.push(`
    // Delete Helper
    //

    export async function remove${entityModelName}ObjectById({
      apolloClient,
      ${entityShortCamelCaseName}Id,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName},
      options?: Omit<MutationOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<Remove${entityModelName}ByIdMutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>({ mutation: Remove${entityModelName}ByIdDocument, variables: { id:${entityShortCamelCaseName}Id, }, ...options,});
    
      const returning = result && result.data && result.data.delete_${entityName} && result.data.delete_${entityName}!.affected_rows;
    
      return { result, returning };
    }
  `);

  contentArray.push(`
    export async function remove${entityModelName}Objects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, 'mutation'>,
    }): Promise<{ result: FetchResult<Remove${entityModelName}Mutation>; returning: number | null | undefined }> {
      
      const result = await apolloClient.mutate<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>({ mutation: Remove${entityModelName}Document, ...options,});
    
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
