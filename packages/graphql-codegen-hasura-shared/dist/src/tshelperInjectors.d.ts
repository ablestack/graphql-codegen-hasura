import { FieldDefinitionNode, FragmentDefinitionNode, GraphQLNamedType } from "graphql";
import { ContentManager } from ".";
import { TypeMap } from "graphql/type/schema";
export declare function injectGlobalHelperCodePre({ contentManager, typescriptCodegenOutputPath, withUpdates, }: {
    contentManager: ContentManager;
    typescriptCodegenOutputPath: string;
    withUpdates: boolean;
}): void;
export declare function injectSharedHelpersPre({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath, }: {
    contentManager: ContentManager;
    entityNamedType: GraphQLNamedType;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectClientAndCacheHelpers({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath, }: {
    contentManager: ContentManager;
    entityNamedType: GraphQLNamedType;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField?: FieldDefinitionNode | null;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectQueryHelpers({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath, }: {
    contentManager: ContentManager;
    entityNamedType: GraphQLNamedType;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField?: FieldDefinitionNode | null;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectSubscriptionHelpers({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath, }: {
    contentManager: ContentManager;
    entityNamedType: GraphQLNamedType;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField?: FieldDefinitionNode | null;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectInsertHelpers({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath, }: {
    contentManager: ContentManager;
    entityNamedType: GraphQLNamedType;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectUpdateHelpers({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath, }: {
    contentManager: ContentManager;
    entityNamedType: GraphQLNamedType;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectDeleteHelpers({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath, }: {
    contentManager: ContentManager;
    entityNamedType: GraphQLNamedType;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectSharedHelpersPost({ contentManager, entityNamedType, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath, withClientAndCacheHelpers, withQueries, withSubscriptions, withInserts, withUpdates, withDeletes, }: {
    contentManager: ContentManager;
    entityNamedType: GraphQLNamedType;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
    withClientAndCacheHelpers?: boolean;
    withQueries?: boolean;
    withSubscriptions?: boolean;
    withInserts?: boolean;
    withUpdates?: boolean;
    withDeletes?: boolean;
}): void;
export declare function injectGlobalHelperCodePost({ contentManager, fragmentDefinitionNodes, schemaTypeMap, trimString, withClientAndCacheHelpers, withQueries, withInserts, withUpdates, withDeletes, }: {
    contentManager: ContentManager;
    fragmentDefinitionNodes: FragmentDefinitionNode[];
    schemaTypeMap: TypeMap;
    trimString?: string;
    withClientAndCacheHelpers?: boolean;
    withQueries?: boolean;
    withSubscriptions?: boolean;
    withInserts?: boolean;
    withUpdates?: boolean;
    withDeletes?: boolean;
}): void;
