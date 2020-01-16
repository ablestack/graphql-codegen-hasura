import { FieldDefinitionNode, FragmentDefinitionNode } from "graphql";
import { ContentManager } from ".";
import { TypeMap } from "graphql/type/schema";
export declare function injectGlobalHelperCodePre({ contentManager, typescriptCodegenOutputPath, withUpdates }: {
    contentManager: ContentManager;
    typescriptCodegenOutputPath: string;
    withUpdates: boolean;
}): void;
export declare function injectSharedHelpersPre({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectClientAndCacheHelpers({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField?: FieldDefinitionNode | null;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectFetchHelpers({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField?: FieldDefinitionNode | null;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectInsertHelpers({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectUpdateHelpers({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectDeleteHelpers({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectSharedHelpersPost({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath, withClientAndCacheHelpers, withQueries, withInserts, withUpdates, withDeletes }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
    withClientAndCacheHelpers?: boolean;
    withQueries?: boolean;
    withInserts?: boolean;
    withUpdates?: boolean;
    withDeletes?: boolean;
}): void;
export declare function injectGlobalHelperCodePost({ contentManager, fragmentDefinitionNodes, schemaTypeMap, trimString, withClientAndCacheHelpers, withQueries, withInserts, withUpdates, withDeletes }: {
    contentManager: ContentManager;
    fragmentDefinitionNodes: FragmentDefinitionNode[];
    schemaTypeMap: TypeMap;
    trimString?: string;
    withClientAndCacheHelpers?: boolean;
    withQueries?: boolean;
    withInserts?: boolean;
    withUpdates?: boolean;
    withDeletes?: boolean;
}): void;
