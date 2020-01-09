import { FieldDefinitionNode } from "graphql";
import { ContentManager } from ".";
export declare function injectGlobalHelperCode({ contentManager, typescriptCodegenOutputPath, withUpdates }: {
    contentManager: ContentManager;
    typescriptCodegenOutputPath: string;
    withUpdates: boolean;
}): void;
export declare function injectSharedHelpers({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
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
