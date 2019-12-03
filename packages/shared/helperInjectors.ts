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
  const fragmentNameCamelCase = makeCamelCase(fragmentName);

  contentArray.push(`
      // Fetch Helper
      //
  
      export async function fetch${fragmentName}ById({
        apolloClient,
        ${entityShortCamelCaseName}Id,
        options,
      }: {
        apolloClient: ApolloClient<object>, 
        ${entityShortCamelCaseName}Id: string,
        options?: Omit<QueryOptions<Fetch${fragmentName}QueryVariables>, 'query' | 'variables'>,
      }) {
        const query = await apolloClient.query<Fetch${fragmentName}ByIdQuery>({ query: Fetch${fragmentName}ByIdDocument, variables: { ${entityShortCamelCaseName}Id }, ...options });
        return { ...query, ${fragmentNameCamelCase}: query && query.data && query.data.${entityName}_by_pk }
      }
    `);
  contentArray.push(`
      export async function fetch${fragmentName}Objects({
        apolloClient,
        options,
      }:{
        apolloClient: ApolloClient<object>,
        options: Omit<QueryOptions<Fetch${fragmentName}QueryVariables>, 'query'>,
      }) {
        const query = await apolloClient.query<Fetch${fragmentName}Query>({ query: Fetch${fragmentName}Document, ...options });
        return { ...query, objects: query && query.data && query.data.${entityName} }
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
  const fragmentNameCamelCase = makeCamelCase(fragmentName);

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
    }) {
      
      const mutation = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>({ 
        mutation: Insert${fragmentName}Document, 
        variables: { objects: [${entityShortCamelCaseName}], onConflict },
        ...options,
      });
        
      return { ...mutation, ${fragmentNameCamelCase}:mutation && mutation.data && mutation.data.insert_${entityName} && mutation.data.insert_${entityName}!.returning && mutation.data.insert_${entityName}!.returning[0] };
    }
  `);

  contentArray.push(`
    export async function insert${fragmentName}Objects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation'>,
    }) {
      
      const mutation = await apolloClient.mutate<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>({ mutation: Insert${fragmentName}Document, ...options,});
       
      return { ...mutation, objects: mutation && mutation.data && mutation.data.insert_${entityName} && mutation.data.insert_${entityName}!.returning };
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
  const fragmentNameCamelCase = makeCamelCase(fragmentName);

  contentArray.push(`
    // Update Helper
    //

    export async function update${fragmentName}ById({
      apolloClient,
      ${entityShortCamelCaseName}Id,
      set,
      options,
    }: { 
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName},
      set: ${entityPascalName}_Set_Input,
      options?: Omit<MutationOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>({ mutation: Update${fragmentName}ByIdDocument, variables: { ${entityShortCamelCaseName}Id, set }, ...options,});
        
      return { ...mutation, ${fragmentNameCamelCase}:mutation && mutation.data && mutation.data.update_${entityName} && mutation.data.update_${entityName}!.returning && mutation.data.update_${entityName}!.returning[0] };
    }
  `);

  contentArray.push(`
    export async function update${fragmentName}Objects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>({ mutation: Update${fragmentName}Document, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.update_${entityName} && mutation.data.update_${entityName}!.returning };
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
  const fragmentNameCamelCase = makeCamelCase(fragmentName);

  contentArray.push(`
    // Delete Helper
    //

    export async function remove${entityModelName}ById({
      apolloClient,
      ${entityShortCamelCaseName}Id,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName},
      options?: Omit<MutationOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, 'mutation'>,
    }) {
      const mutation = await apolloClient.mutate<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>({ mutation: Remove${entityModelName}ByIdDocument, variables: { ${entityShortCamelCaseName}Id, }, ...options,});
    
      return { ...mutation, ${fragmentNameCamelCase}:mutation && mutation.data && mutation.data.delete_${entityName} && mutation.data.delete_${entityName}!.affected_rows };
    }
  `);

  contentArray.push(`
    export async function remove${entityModelName}Objects({
      apolloClient,
      options,
    }:{
      apolloClient: ApolloClient<object>,
      options: Omit<MutationOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, 'mutation'>,
    }) {  
      const mutation = await apolloClient.mutate<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>({ mutation: Remove${entityModelName}Document, ...options,});
        
      return { ...mutation, objects:mutation && mutation.data && mutation.data.delete_${entityName} && mutation.data.delete_${entityName}!.affected_rows };
    }
  `);

  importArray.push(makeImportStatement(`Remove${entityModelName}Mutation`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}MutationVariables`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}Document`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}ByIdMutation`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}ByIdMutationVariables`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}ByIdDocument`, typescriptCodegenOutputPath));
}
