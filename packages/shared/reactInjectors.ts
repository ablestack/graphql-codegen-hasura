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
  primaryKeyIdField?: FieldDefinitionNode | null;
  typescriptCodegenOutputPath: string;
}) {
  const entityShortName = makeShortName(entityName, trimString);
  const entityShortCamelCaseName = makeCamelCase(entityShortName);
  const fragmentNameCamelCase = makeCamelCase(fragmentName);

  if (primaryKeyIdField) {
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
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#usequery for details
       * 
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
    `);

    contentManager.addContent(`
      /**
       * __useFetch${fragmentName}ByIdLazyQuery__
       * 
       * @example
       * const [fetch${fragmentName}ById, { called, loading, error, ${fragmentNameCamelCase} }] = useFetch${fragmentName}ById();
       * fetch${fragmentName}ById({ ${entityShortCamelCaseName}Id:<value> });
       * 
       * The majority of the options and the specifics of their behavior are derived from apollographql. See https://www.apollographql.com/docs/react/api/react-hooks/#uselazyquery for details
       * 
       */

      // Lazy Fetch Hook
      //
      export function useFetch${fragmentName}ByIdLazyQuery(options?: Omit<LazyQueryHookOptions<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>, 'query' | 'variables'>) {
        const lazyQuery = useLazyQuery<Fetch${fragmentName}ByIdQuery, Fetch${fragmentName}ByIdQueryVariables>(Fetch${fragmentName}ByIdDocument, options );
        
        const wrappedLazyQuery = ({ ${entityShortCamelCaseName}Id, options }: { ${entityShortCamelCaseName}Id:string, options?: Omit<QueryLazyOptions<Fetch${fragmentName}ByIdQueryVariables>, 'variables'> }) => {
          return lazyQuery[0]({ variables: { ${entityShortCamelCaseName}Id }, ...options });
        };
               
        const pick${fragmentName} = () => { return ( lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.${entityName}_by_pk ); };

        return [wrappedLazyQuery, { ...lazyQuery[1], ${fragmentNameCamelCase}: pick${fragmentName}() }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { ${fragmentNameCamelCase}: ReturnType<typeof pick${fragmentName}> }];
      }
    `);
  }

  contentManager.addContent(`
      // Fetch Collection Hook
      //
      export function useFetch${fragmentName}ObjectsQuery( options: Omit<QueryHookOptions<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>, 'query'> ) {
          const query = useQuery<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>(Fetch${fragmentName}Document, options );
          return { ...query, objects: query && query.data && query.data.${entityName} }
      }`);

  contentManager.addContent(`  
      // Lazy Fetch Collection Hook
      //
      export function useFetch${fragmentName}ObjectsLazyQuery( options?: Omit<LazyQueryHookOptions<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>, 'query'> ) {
        const lazyQuery = useLazyQuery<Fetch${fragmentName}Query, Fetch${fragmentName}QueryVariables>(Fetch${fragmentName}Document, options );
      
        const wrappedLazyQuery = ( options?: QueryLazyOptions<Fetch${fragmentName}QueryVariables> ) => {
          return lazyQuery[0]();
        };
    
        const pickObjects = () => { return ( lazyQuery[1] && lazyQuery[1].data && lazyQuery[1].data.${entityName} ); };

        return [wrappedLazyQuery, { ...lazyQuery[1], objects: pickObjects() }] as [typeof wrappedLazyQuery, typeof lazyQuery[1] & { objects: ReturnType<typeof pickObjects> }];
      }
    `);

  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`Fetch${fragmentName}ByIdQuery`, typescriptCodegenOutputPath));
  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`Fetch${fragmentName}ByIdQueryVariables`, typescriptCodegenOutputPath));
  if (primaryKeyIdField) contentManager.addImport(makeImportStatement(`Fetch${fragmentName}ByIdDocument`, typescriptCodegenOutputPath));
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
  export function useInsert${fragmentName}( options?: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation' | 'variables'> ) {
    const lazyMutation = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>( Insert${fragmentName}Document, options );
                                
    const wrappedLazyMutation = ({ ${entityShortCamelCaseName}, options } :{ ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input, options?: Omit<MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'variables'> }) => {
      return lazyMutation[0]({ variables: { objects: [${entityShortCamelCaseName}] }, ...options });
    };

    const pick${fragmentName} = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_${entityName} && lazyMutation[1].data.insert_${entityName}!.returning && lazyMutation[1].data.insert_${entityName}!.returning[0] ); };

    return [ wrappedLazyMutation, { ...lazyMutation[1], ${fragmentNameCamelCase}: pick${fragmentName}(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { ${fragmentNameCamelCase}: ReturnType<typeof pick${fragmentName}> }];
  }
  `);

  contentManager.addContent(`

  export function useInsert${fragmentName}WithOnConflict( options?: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation' | 'variables'> ) {
    const lazyMutation = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}WithOnConflictMutationVariables>( Insert${fragmentName}WithOnConflictDocument, options );
                                
    const wrappedLazyMutation = ({ ${entityShortCamelCaseName}, onConflict, options } :{ ${entityShortCamelCaseName}: ${entityPascalName}_Insert_Input, onConflict?: ${entityPascalName}_On_Conflict, options?: Omit<MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'variables'> }) => {
      return lazyMutation[0]({ variables: { objects: [${entityShortCamelCaseName}], onConflict }, ...options });
    };

    const pick${fragmentName} = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_${entityName} && lazyMutation[1].data.insert_${entityName}!.returning && lazyMutation[1].data.insert_${entityName}!.returning[0] ); };

    return [ wrappedLazyMutation, { ...lazyMutation[1], ${fragmentNameCamelCase}: pick${fragmentName}(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { ${fragmentNameCamelCase}: ReturnType<typeof pick${fragmentName}> }];
  }
  `);

  contentManager.addContent(`
  export function useInsert${fragmentName}Objects( options?: Omit<MutationHookOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>, 'mutation'> ) {
    const lazyMutation = useMutation<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables>( Insert${fragmentName}Document, options );
                                
    const wrappedLazyMutation = ( options?: MutationFunctionOptions<Insert${fragmentName}Mutation, Insert${fragmentName}MutationVariables> ) => {
      return lazyMutation[0]( options );
    };

    const pickObjects = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.insert_${entityName} && lazyMutation[1].data.insert_${entityName}!.returning ); };

    return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
  }
  `);

  contentManager.addImport(makeImportStatement(`${entityPascalName}_Insert_Input`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`${entityPascalName}_On_Conflict`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}Mutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}MutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}WithOnConflictMutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Insert${fragmentName}WithOnConflictDocument`, typescriptCodegenOutputPath));
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
    export function useUpdate${fragmentName}ById( options?: Omit<MutationHookOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, 'mutation' | 'variables'> ) {
      const lazyMutation = useMutation<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>(Update${fragmentName}ByIdDocument, options );
      
      const wrappedLazyMutation = ({ ${entityShortCamelCaseName}Id, set, options }: { ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}; set: ${entityPascalName}_Set_Input; options?: Omit<MutationFunctionOptions<Update${fragmentName}ByIdMutation, Update${fragmentName}ByIdMutationVariables>, 'variables'>; }) => {
        return lazyMutation[0]({ variables: { id: ${entityShortCamelCaseName}Id, set }, ...options });
      };

      const pick${fragmentName} = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_${entityName} && lazyMutation[1].data.update_${entityName}!.returning && lazyMutation[1].data.update_${entityName}!.returning[0] ); };

      return [ wrappedLazyMutation, { ...lazyMutation[1], ${fragmentNameCamelCase}: pick${fragmentName}(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { ${fragmentNameCamelCase}: ReturnType<typeof pick${fragmentName}> }];
    }
  `);

  contentManager.addContent(`
    export function useUpdate${fragmentName}( options?: Omit<MutationHookOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>, 'mutation'> ) {
      const lazyMutation = useMutation<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables>(Update${fragmentName}Document, options );
      
      const wrappedLazyMutation = ( options: MutationFunctionOptions<Update${fragmentName}Mutation, Update${fragmentName}MutationVariables> ) => {
        return lazyMutation[0]( options );
      };

      const pickObjects = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.update_${entityName} && lazyMutation[1].data.update_${entityName}!.returning ); };

      return [ wrappedLazyMutation, { ...lazyMutation[1], objects: pickObjects(), }, ] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { objects: ReturnType<typeof pickObjects> }];
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

    export function useRemove${entityModelName}ById( options?: Omit<MutationHookOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, 'mutation' | 'variables'> ) {
      const lazyMutation = useMutation<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>(Remove${entityModelName}ByIdDocument, options );
      
      const wrappedLazyMutation = ({ ${entityShortCamelCaseName}Id, options }:{ ${entityShortCamelCaseName}Id: ${primaryKeyIdTypeScriptFieldType.typeName}, options?: Omit<MutationFunctionOptions<Remove${entityModelName}ByIdMutation, Remove${entityModelName}ByIdMutationVariables>, 'variables'> }) => {
        return lazyMutation[0]({ variables: { id:${entityShortCamelCaseName}Id }, ...options });
      }; 
      
      const pickAffectedRows = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_${entityName} && lazyMutation[1].data.delete_${entityName}!.affected_rows ); };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows() }] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }];
    }
  `);

  contentManager.addContent(`
    export function useRemove${entityModelName}Objects( options?: Omit<MutationHookOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>, 'mutation'> ) {
      const lazyMutation = useMutation<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables>(Remove${entityModelName}Document, options );
      
      const wrappedLazyMutation = ( options: MutationFunctionOptions<Remove${entityModelName}Mutation, Remove${entityModelName}MutationVariables> ) => {
        return lazyMutation[0]( options );
      };

      const pickAffectedRows = () => { return ( lazyMutation[1] && lazyMutation[1].data && lazyMutation[1].data.delete_${entityName} && lazyMutation[1].data.delete_${entityName}!.affected_rows ); };

      return [wrappedLazyMutation, { ...lazyMutation[1], affected_rows: pickAffectedRows() }] as [typeof wrappedLazyMutation, typeof lazyMutation[1] & { affected_rows: ReturnType<typeof pickAffectedRows> }];
    }
  `);

  contentManager.addImport(makeImportStatement(`Remove${entityModelName}Mutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}MutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}Document`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdMutation`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdMutationVariables`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Remove${entityModelName}ByIdDocument`, typescriptCodegenOutputPath));
}
