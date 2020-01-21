import { FieldDefinitionNode } from "graphql";
import { ContentManager } from ".";
export declare function injectGlobalGqlCode({ contentManager, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectFragmentImport({ contentManager, fragmentName, fragmentRelativeImportPath }: {
    contentManager: ContentManager;
    fragmentName: string;
    fragmentRelativeImportPath: string;
}): void;
export declare function injectFetchAsQueryGql({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField?: FieldDefinitionNode | null;
}): void;
export declare function injectFetchAsSubscriptionGql({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField?: FieldDefinitionNode | null;
}): void;
export declare function injectInsertGql({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
}): void;
export declare function injectUpdateGql({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
}): void;
export declare function injectDeleteGql({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
}): void;
