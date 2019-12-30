import { FieldDefinitionNode } from "graphql";
import { getIdTypeScriptFieldType, makeFragmentName, makeModelName, makeShortName, makeImportStatement, ContentManager } from ".";
import { makeFragmentTypeScriptTypeName, makePascalCase, makeCamelCase } from "./utils";

// ---------------------------------
//
export function injectUtilityMethodGenerateOptimisticResponseForMutationById({ contentManager }: { contentManager: ContentManager }) {
  contentManager.addContent(`
    
    // Optimistic response generation utility method
    //
    function generateOptimisticResponseForMutationById<T>(operationType: "update", entityName: string, entityId: any, setObject: object): T {
      return ({
        __typename: "mutation_root",
        [\`\${operationType}_\${entityName}\`]: {
          affected_rows: 1,
          returning: [
            {
              id: entityId,
              __typename: entityName,
              ...setObject
            }
          ],
          __typename: \`\${entityName}_mutation_response\`
        }
      } as unknown) as T;
    }
  `);
}
