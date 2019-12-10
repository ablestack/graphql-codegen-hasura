import { FieldDefinitionNode } from "graphql";
import { getIdTypeScriptFieldType, makeImportStatement, makeModelName, makeShortName, ContentManager } from ".";
import { makeCamelCase, makePascalCase } from "./utils";

// ---------------------------------
//
export function injectEntityTypePolicy({
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
  if (!primaryKeyIdField) return;

  const entityShortName = makeShortName(entityName, trimString);

  contentManager.addContent(`
    // ${entityName} Type Policy
    //------------------------------------------------
  `);

  contentManager.addContent(`
      export const ${entityShortName}TypePoliciesConfig: TypePolicies = {
        Query: {
          fields: {
            ${entityName}_by_pk(existingData, { args, toReference }) {
              return existingData || toReference({ __typename: '${entityName}', id: args.id });
            },
          },
        },
      };
  `);

  //contentManager.addImport(makeImportStatement(`${entityShortName}`, typescriptCodegenOutputPath));
}

// ---------------------------------
//

// ---------------------------------
//
export function injectEntityResolverTypes({
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
  const entityShortPascalCaseName = makePascalCase(entityShortName);

  contentManager.addContent(`
  // ${entityName} Resolver Types
  //------------------------------------------------

  /** 
   *  The ${entityName} Resolver types can be used as follows:
   * 
   *  export const ${entityShortPascalCaseName}Resolvers: RootResolver<${entityShortPascalCaseName}ResolverMap> = {
   *    ${entityName}: {
   *      anyFieldName: (${entityShortCamelCaseName}, args, context, info) => {
   *        return ${entityShortCamelCaseName}.anyFieldName;
   *      },
   *     },
   *  };
  */

  //------------------------------------------------
  `);

  contentManager.addContent(`
  export interface ${entityShortPascalCaseName}ResolverFn {
    (${entityShortCamelCaseName}: Partial<${entityPascalName}>, args: Query_Root${entityPascalName}Args, context: ApolloContext, info: any): any;
  }

  export interface ${entityShortPascalCaseName}ResolverMap {
    [field: string]: ${entityShortName}ResolverFn;
  }
  `);

  contentManager.addImport(makeImportStatement(`${entityPascalName}`, typescriptCodegenOutputPath));
  contentManager.addImport(makeImportStatement(`Query_Root${entityPascalName}Args`, typescriptCodegenOutputPath));
}
