// Optimistic response generation utility method
//
export function generateOptimisticResponseForMutation<T>({
  operationType,
  entityName,
  objects
}: {
  operationType: "update" | "insert";
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
