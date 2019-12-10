import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { RawTypesConfig } from "@graphql-codegen/visitor-plugin-common";
import { FragmentDefinitionNode, GraphQLSchema } from "graphql";
import { TypeMap } from "graphql/type/schema";
import { getPrimaryKeyIdField, injectEntityTypePolicy, ContentManager, makeShortName } from "../../shared";

// -----------------------------------------------------
//
// -----------------------------------------------------

export interface CstmHasuraCrudPluginConfig extends RawTypesConfig {
  typescriptCodegenOutputPath: string;
  trimString?: string;
}

export const plugin: PluginFunction<CstmHasuraCrudPluginConfig> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: CstmHasuraCrudPluginConfig) => {
  const contentManager = new ContentManager();

  contentManager.addImport(`import { TypePolicies } from '@apollo/client/cache/inmemory/policies';`);

  // get typemap from schema
  const typeMap = schema.getTypeMap();

  // find fragment documents
  const documentFragments = documents.flatMap(document => {
    return document.content.definitions.filter(definition => definition.kind === "FragmentDefinition");
  }) as FragmentDefinitionNode[];

  // iterate and generate
  documentFragments.map(fragmentDefinition => {
    injectEntityTypeScript(fragmentDefinition, contentManager, typeMap, config);
  });

  injectEntitiesTypeScript(documentFragments, contentManager, typeMap, config);

  return {
    prepend: contentManager.generateImportArray(),
    content: contentManager.createContentString()
  };
};

// --------------------------------------
//

function injectEntityTypeScript(fragmentDefinitionNode: FragmentDefinitionNode, contentManager: ContentManager, schemaTypeMap: TypeMap, config: CstmHasuraCrudPluginConfig) {
  const fragmentName = fragmentDefinitionNode.name.value;
  const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
  const relatedTableNamedType = schemaTypeMap[fragmentTableName];

  const relatedTablePrimaryKeyIdField = getPrimaryKeyIdField(relatedTableNamedType);
  if (!relatedTablePrimaryKeyIdField) return;

  injectEntityTypePolicy({
    contentManager,
    entityName: relatedTableNamedType.name,
    fragmentName,
    trimString: config.trimString,
    primaryKeyIdField: relatedTablePrimaryKeyIdField,
    typescriptCodegenOutputPath: config.typescriptCodegenOutputPath
  });
}

// --------------------------------------
//

function injectEntitiesTypeScript(fragmentDefinitionNodes: FragmentDefinitionNode[], contentManager: ContentManager, schemaTypeMap: TypeMap, config: CstmHasuraCrudPluginConfig) {
  const entitiesFromFragments = fragmentDefinitionNodes.map(fragmentDefinitionNode => {
    const fragmentTableName = fragmentDefinitionNode.typeCondition.name.value;
    const relatedTableNamedType = schemaTypeMap[fragmentTableName];
    const entityShortName = makeShortName(relatedTableNamedType.name, config.trimString);
    return `${entityShortName}TypePoliciesConfig`;
  });

  const uniqueEntitiesFromFragments = [...new Set(entitiesFromFragments)];

  contentManager.addContent(`
  export const CombinedTypePoliciesConfig: TypePolicies = Object.assign(
    \{\},
    ${uniqueEntitiesFromFragments.join(",\n    ")}
  );
  `);
}
// --------------------------------------
//
