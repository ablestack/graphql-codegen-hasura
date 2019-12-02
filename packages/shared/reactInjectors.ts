import { FieldDefinitionNode } from "graphql";
import { getIdTypeScriptFieldType, makeImportStatement, makeModelName, makeShortName } from ".";
import { makeCamelCase, makePascalCase } from "./utils";

// ---------------------------------
//
export function injectSharedReact({
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
    // ${entityName} React
    //------------------------------------------------
  `);

  if (!primaryKeyIdTypeScriptFieldType.isNative) {
    const typeImport = makeImportStatement(`${primaryKeyIdTypeScriptFieldType.typeName}`, typescriptCodegenOutputPath);
    if (!importArray.includes(typeImport)) {
      importArray.push(typeImport);
    }
  }
}

// ---------------------------------
//
export function injectFetchReact({
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
      // Fetch Hooks
      //
  
      /**
       * __useFetch${fragmentName}ObjectByIdQuery__
       *
       * To run a query within a React component, call \`use${fragmentName}ObjectByIdQuery\`
       * When your component renders, \`use${fragmentName}ObjectByIdQuery\` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param queryHookOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { result, loading, error } = useFetch${fragmentName}ObjectByIdQuery({ ${entityShortCamelCaseName}Id:<value> });
       */

        // Fetch Hook
        //
        export function useFetch${fragmentName}ObjectByIdQuery({ 
          ${entityShortCamelCaseName}Id, 
          queryHookOptions, 
        }: {
          ${entityShortCamelCaseName}Id:string,
          queryHookOptions?: Omit<QueryHookOptions<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>, 'query' | 'variables'>
        }) {
            const query = useQuery<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>(Fetch${fragmentName}ByIdDocument, { variables: { ${entityShortCamelCaseName}Id }, ...queryHookOptions });
            return { ...query, returning: query && query.data && query.data.${entityName}_by_pk }
        }

        // Lazy Fetch Hook
        //
        export function useFetch${entityShortName}ObjectByIdLazyQuery({ 
          ${entityShortCamelCaseName}Id, 
          queryHookOptions ,
        }: {
          ${entityShortCamelCaseName}Id:string,
          queryHookOptions?: Omit<LazyQueryHookOptions<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>, 'query' | 'variables'>
        }) {
          const lazyQuery = useLazyQuery<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>(Fetch${fragmentName}ByIdDocument, { variables: { ${entityShortCamelCaseName}Id }, ...queryHookOptions });

          return [lazyQuery[0], { ...lazyQuery[1], returning: lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.${entityName}_by_pk }]
        }
    `);

  contentArray.push(`
      // Fetch Collection Hook
      //
      export function useFetch${entityShortName}ObjectsQuery({ queryHookOptions } : {
        queryHookOptions: Omit<QueryHookOptions<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>, 'query'>
      }) {
          const query = useQuery<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>(Fetch${fragmentName}Document, queryHookOptions);
          return { ...query, returning: query && query.data && query.data.${entityName} }
      }
      
      // Lazy Fetch Collection Hook
      //
      export function useFetch${entityShortName}ObjectsLazyQuery({ queryHookOptions } : {
        queryHookOptions?: Omit<LazyQueryHookOptions<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>, 'query'>
      }) {
        const lazyQuery = useLazyQuery<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>(Fetch${fragmentName}Document, queryHookOptions);
      
        return [lazyQuery[0], { ...lazyQuery[1], returning: lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.${entityName} }]
      }
    `);
  importArray.push(makeImportStatement(`Fetch${fragmentName}ByIdQuery`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Fetch${fragmentName}ByIdQueryVariables`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Fetch${fragmentName}ByIdDocument`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Fetch${fragmentName}Query`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Fetch${fragmentName}Document`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Fetch${fragmentName}QueryVariables`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectInsertReact({
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
    // Insert Hooks
    //

    export async function useInsert${fragmentName}Object({
      ${entityShortCamelCaseName},
      onConflict,
      mutationHookOptions,
    } :{
      ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input,
      onConflict?: ${entityPascalName}_On_Conflict,
      mutationHookOptions?: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>( 
        Insert${fragmentName}Document, 
        {
          variables: { objects: [${entityShortCamelCaseName}], onConflict },
          ...mutationHookOptions,
        }
      );
    
      return [lazyMutation[0], { ...lazyMutation[1], returning: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_${entityName} && lazyMutation[1].data.insert_${entityName}!.returning && lazyMutation[1].data.insert_${entityName}!.returning[0] }]
    }
  `);

  contentArray.push(`
    export async function insert${fragmentName}Objects({
      mutationHookOptions,
    }:{
      mutationHookOptions: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>(Insert${fragmentName}Document, { ...mutationHookOptions });
        
      return [lazyMutation[0], { ...lazyMutation[1], returning: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_${entityName} && lazyMutation[1].data.insert_${entityName}!.returning }]
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
export function injectUpdateReact({
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
    // Update Hooks
    //

    export async function update${fragmentName}ObjectById({
      ${entityShortCamelCaseName}Id,
      set,
      mutationHookOptions,
    }: { 
      ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName},
      set: ${entityPascalName}_Set_Input,
      mutationHookOptions?: Omit<MutationHookOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>(Update${fragmentName}ByIdDocument, { variables: { id:${entityShortCamelCaseName}Id, set }, ...mutationHookOptions,});
    
      return [lazyMutation[0], { ...lazyMutation[1], returning: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_${entityName} && lazyMutation[1].data.update_${entityName}!.returning && lazyMutation[1].data.update_${entityName}!.returning[0] }]
    }
  `);

  contentArray.push(`
    export async function update${fragmentName}Objects({
      apolloClient,
      mutationHookOptions,
    }: {
      apolloClient: ApolloClient<object>,
      mutationHookOptions: Omit<MutationHookOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>(Update${fragmentName}Document, { ...mutationHookOptions });
    
      return [lazyMutation[0], { ...lazyMutation[1], returning: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_${entityName} && lazyMutation[1].data.update_${entityName}!.returning }]
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
export function injectDeleteReact({
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
    // Delete Hooks
    //

    export async function remove${entityModelName}ObjectById({
      ${entityShortCamelCaseName}Id,
      mutationHookOptions,
    }:{
      ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName},
      mutationHookOptions?: Omit<MutationHookOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>(Remove${entityModelName}ByIdDocument, { variables: { id:${entityShortCamelCaseName}Id }, ...mutationHookOptions,});
        
      return [lazyMutation[0], { ...lazyMutation[1], returning: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_${entityName} && lazyMutation[1].data.delete_${entityName}!.affected_rows }]
    }
  `);

  contentArray.push(`
    export async function remove${entityModelName}Objects({
      mutationHookOptions,
    }:{
      mutationHookOptions: Omit<MutationHookOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>(Remove${entityModelName}Document, { ...mutationHookOptions });
        
      return [lazyMutation[0], { ...lazyMutation[1], returning: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_${entityName} && lazyMutation[1].data.delete_${entityName}!.affected_rows }]
    }
  `);

  importArray.push(makeImportStatement(`Remove${entityModelName}Mutation`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}MutationVariables`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}Document`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}ByIdMutation`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}ByIdMutationVariables`, typescriptCodegenOutputPath));
  importArray.push(makeImportStatement(`Remove${entityModelName}ByIdDocument`, typescriptCodegenOutputPath));
}
