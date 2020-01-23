import { defaultDataIdFromObject } from "@apollo/client";

// Optimistic response generation utility method
//
export function generateOptimisticResponseForMutation<T>({
  operationType,
  entityName,
  objects
}: {
  operationType: "update" | "insert" | "delete";
  entityName: string;
  objects: { id: any }[];
}): T {
  const optimisticResponse = ({
    __typename: "mutation_root",
    [`${operationType}_${entityName}`]: {
      affected_rows: objects.length,
      returning: objects.map(entity => {
        return { ...entity, __typename: entityName };
      }),
      __typename: `\${entityName}_mutation_response`
    }
  } as unknown) as T;

  return optimisticResponse;
}

/**
 *
 * @param param0
 */
export function generateUpdateFunctionForMutation<T>({ operationType, entityName, entityId }: { operationType: "delete"; entityName: string; entityId: string | number }) {
  return (cache: any, result: any) => {
    cache.evict(defaultDataIdFromObject({ __typename: entityName, id: entityId }));
  };
}
