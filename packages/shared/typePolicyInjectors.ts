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
  primaryKeyIdField: FieldDefinitionNode;
  typescriptCodegenOutputPath: string;
}) {
  const entityShortName = makeShortName(entityName, trimString);

  contentManager.addContent(`
    // ${entityName} TypePolicy
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
