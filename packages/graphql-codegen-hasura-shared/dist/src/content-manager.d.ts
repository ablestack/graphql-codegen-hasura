export declare class ContentManager {
    private imports;
    private importsMap;
    private content;
    private contentMap;
    addImport(importString: string, customKey?: string): void;
    addContent(contentString: string, customKey?: string): void;
    generateImportArray(): string[];
    createContentString(): string;
    private makeHash;
}
