import { FieldDefinitionNode } from "graphql";
import { getIdTypeScriptFieldType, makeImportStatement, makeModelName, makeShortName, ContentManager } from ".";
import { makeCamelCase, makePascalCase } from "./utils";

// ---------------------------------
//
export function injectSharedReact({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentManager: ContentManager;
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const primaryKeyIdTypeScriptFieldType = getIdTypeScriptFieldType(primaryKeyIdField);

  contentManager.addContent(`
    // ${entityName} React
    //------------------------------------------------
  `);

  if (!primaryKeyIdTypeScriptFieldType.isNative) {
    const typeImport = makeImportStatement(`${primaryKeyIdTypeScriptFieldType.typeName}`, typescriptCodegenOutputPath);
    contentManager.addImport(typeImport);
  }
}

// ---------------------------------
//
export function injectFetchReact({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentManager: ContentManager;
  entityName: string;
  fragmentName: string;
  trimString?: string;
  primaryKeyIdField: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const entityShortName = makeShortName(entityName, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);

  contentManager.addContent(`
      // Fetch Hooks
      //
  
      /**
       * __useFetch${fragmentName}ByIdQuery__
       *
       * To run a query within a React component, call \`use${fragmentName}ByIdQuery\`
       * When your component renders, \`use${fragmentName}ByIdQuery\` returns an object from Apollo Client that contains loading, error, data properties, and a shortcut result property 
       *
       * @param options options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
       *
       * @example
       * const { loading, error, ${fragmentNameCamelCase} } = useFetch${fragmentName}ByIdQuery({ ${entityShortCamelCaseName}Id:<value> });
       */

        // Fetch Hook
        //
        export function useFetch${fragmentName}ByIdQuery({ 
          ${entityShortCamelCaseName}Id, 
          options, 
        }: {
          ${entityShortCamelCaseName}Id:string,
          options?: Omit<QueryHookOptions<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>, 'query' | 'variables'>
        }) {
            const query = useQuery<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>(Fetch${fragmentName}ByIdDocument, { variables: { ${entityShortCamelCaseName}Id }, ...options });
            return { ...query, ${fragmentNameCamelCase}: query && query.data && query.data.${entityName}_by_pk }
        }

        // Lazy Fetch Hook
        //
        export function useFetch${fragmentName}ByIdLazyQuery({ 
          ${entityShortCamelCaseName}Id, 
          options ,
        }: {
          ${entityShortCamelCaseName}Id:string,
          options?: Omit<LazyQueryHookOptions<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>, 'query' | 'variables'>
        }) {
          const lazyQuery = useLazyQuery<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>(Fetch${fragmentName}ByIdDocument, { variables: { ${entityShortCamelCaseName}Id }, ...options });
          return [lazyQuery[0], { ...lazyQuery[1], ${fragmentNameCamelCase}: lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.${entityName}_by_pk }]
        }
    `);

  contentManager.addContent(`
      // Fetch Collection Hook
      //
      export function useFetch${fragmentName}ObjectsQuery({ options } : {
        options: Omit<QueryHookOptions<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>, 'query'>
      }) {
          const query = useQuery<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>(Fetch${fragmentName}Document, options);
          return { ...query, objects: query && query.data && query.data.${entityName} }
      }
      
      // Lazy Fetch Collection Hook
      //
      export function useFetch${fragmentName}ObjectsLazyQuery({ options } : {
        options?: Omit<LazyQueryHookOptions<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>, 'query'>
      }) {
        const lazyQuery = useLazyQuery<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>(Fetch${fragmentName}Document, options);
      
        return [lazyQuery[0], { ...lazyQuery[1], objects: lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.${entityName} }]
      }
    `);
  contentManager.addImport(makeImportStatement(`Fetch${fragmentName}ByIdQuery`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Fetch${fragmentName}ByIdQueryVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Fetch${fragmentName}ByIdDocument`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Fetch${fragmentName}Query`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Fetch${fragmentName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Fetch${fragmentName}QueryVariables`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectInsertReact({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentManager: ContentManager;
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

  contentManager.addContent(`
    // Insert Hooks
    //

    export async function useInsert${fragmentName}({
      ${entityShortCamelCaseName},
      onConflict,
      options,
    } :{
      ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input,
      onConflict?: ${entityPascalName}_On_Conflict,
      options?: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>( 
        Insert${fragmentName}Document, 
        {
          variables: { objects: [${entityShortCamelCaseName}], onConflict },
          ...options,
        }
      );
    
      return [lazyMutation[0], { ...lazyMutation[1], ${fragmentNameCamelCase}: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_${entityName} && lazyMutation[1].data.insert_${entityName}!.returning && lazyMutation[1].data.insert_${entityName}!.returning[0] }]
    }
  `);

  contentManager.addContent(`
    export async function insert${fragmentName}Objects({
      options,
    }:{
      options: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>(Insert${fragmentName}Document, { ...options });
        
      return [lazyMutation[0], { ...lazyMutation[1], objects: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_${entityName} && lazyMutation[1].data.insert_${entityName}!.returning }]
    }
  `);

  contentManager.addImport(makeImportStatement(`${entityPascalName}_Insert_Input`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`${entityPascalName}_On_Conflict`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}Mutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}MutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}Document`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectUpdateReact({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentManager: ContentManager;
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

  contentManager.addContent(`
    // Update Hooks
    //

    export async function update${fragmentName}ById({
      ${entityShortCamelCaseName}Id,
      set,
      options,
    }: { 
      ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName},
      set: ${entityPascalName}_Set_Input,
      options?: Omit<MutationHookOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>(Update${fragmentName}ByIdDocument, { variables: { id:${entityShortCamelCaseName}Id, set }, ...options,});
    
      return [lazyMutation[0], { ...lazyMutation[1], ${fragmentNameCamelCase}: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_${entityName} && lazyMutation[1].data.update_${entityName}!.returning && lazyMutation[1].data.update_${entityName}!.returning[0] }]
    }
  `);

  contentManager.addContent(`
    export async function update${fragmentName}Objects({
      apolloClient,
      options,
    }: {
      apolloClient: ApolloClient<object>,
      options: Omit<MutationHookOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>(Update${fragmentName}Document, { ...options });
    
      return [lazyMutation[0], { ...lazyMutation[1], objects: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_${entityName} && lazyMutation[1].data.update_${entityName}!.returning }]
    }
  `);

  contentManager.addImport(makeImportStatement(`${entityPascalName}_Set_Input`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Update${fragmentName}ByIdMutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Update${fragmentName}ByIdMutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Update${fragmentName}ByIdDocument`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Update${fragmentName}Mutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Update${fragmentName}MutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Update${fragmentName}Document`, typescriptCodegenOutputPath));
}

// ---------------------------------
//
export function injectDeleteReact({
  contentManager,
  entityName,
  fragmentName,
  trimString,
  primaryKeyIdField,
  typescriptCodegenOutputPath
}: {
  contentManager: ContentManager;
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

  contentManager.addContent(`
    // Delete Hooks
    //

    export async function remove${entityModelName}ById({
      ${entityShortCamelCaseName}Id,
      options,
    }:{
      ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName},
      options?: Omit<MutationHookOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, 'mutation' | 'variables'>,
    }) {
      const lazyMutation = useMutation<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>(Remove${entityModelName}ByIdDocument, { variables: { id:${entityShortCamelCaseName}Id }, ...options,});
        
      return [lazyMutation[0], { ...lazyMutation[1], ${fragmentNameCamelCase}: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_${entityName} && lazyMutation[1].data.delete_${entityName}!.affected_rows }]
    }
  `);

  contentManager.addContent(`
    export async function remove${entityModelName}Objects({
      options,
    }:{
      options: Omit<MutationHookOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, 'mutation'>,
    }) {
      const lazyMutation = useMutation<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>(Remove${entityModelName}Document, { ...options });
        
      return [lazyMutation[0], { ...lazyMutation[1], objects: lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_${entityName} && lazyMutation[1].data.delete_${entityName}!.affected_rows }]
    }
  `);

  contentManager.addImport(makeImportStatement(`Remove${entityModelName}Mutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}MutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdMutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdMutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdDocument`, typescriptCodegenOutputPath));
}
