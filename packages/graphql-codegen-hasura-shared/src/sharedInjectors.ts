import { ContentManager } from ".";

// Replaced by graphql-codegen-hasura-core referenced packages. Keeping as reference in case any shared injectors needed in the future

// // ---------------------------------
// //
// export function injectUtilityMethodGenerateOptimisticResponseForMutation({ contentManager }: { contentManager: ContentManager }) {
//   contentManager.addContent(`
//     // Optimistic response generation utility method
//     //
//     function generateOptimisticResponseForMutation<T>({ operationType, entityName, objects }: { operationType: 'update' | 'insert'; entityName: string; objects: { id:any }[] }): T {
//       const optimisticResponse = ({
//         __typename: 'mutation_root',
//         [\`\${operationType}_\${entityName}\`]: {
//           affected_rows: objects.length,
//           returning: objects.map(entity => {
//             return { ...entity, __typename: entityName };
//           }),
//           __typename: \`\${entityName}_mutation_response\`,
//         },
//       } as unknown) as T;

//       return optimisticResponse;
//     }
//   `);
// }
