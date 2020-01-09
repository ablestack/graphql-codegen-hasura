import { FieldDefinitionNode, FragmentDefinitionNode } from "graphql";
import { TypeMap } from "graphql/type/schema";
import { ContentManager } from ".";
export declare function injectGlobalConfigCode({ contentManager, typescriptCodegenOutputPath, withResolverTypes, withTypePolicies }: {
    contentManager: ContentManager;
    typescriptCodegenOutputPath: string;
    withResolverTypes: boolean;
    withTypePolicies: boolean;
}): void;
export declare function injectEntityTypePolicy({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField?: FieldDefinitionNode | null;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectEntityCacheRedirect({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField?: FieldDefinitionNode | null;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectEntityResolverTypes({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectCombinedTypePolicyObject(fragmentDefinitionNodes: FragmentDefinitionNode[], contentManager: ContentManager, schemaTypeMap: TypeMap, trimString?: string): void;
