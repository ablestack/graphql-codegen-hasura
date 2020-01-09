"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContentManager {
    constructor() {
        this.imports = [];
        this.importsMap = {};
        this.content = [];
        this.contentMap = {};
    }
    addImport(importString, customKey) {
        const hash = customKey || this.makeHash(importString);
        if (!this.importsMap[hash]) {
            this.importsMap[hash] = true;
            this.imports.push(importString);
        }
    }
    addContent(contentString, customKey) {
        const hash = customKey || this.makeHash(contentString);
        if (!this.contentMap[hash]) {
            this.contentMap[hash] = true;
            this.content.push(contentString);
        }
    }
    generateImportArray() {
        return this.imports;
    }
    createContentString() {
        return this.content.join("\n");
    }
    makeHash(input) {
        var hash = 0, i, chr;
        if (input.length === 0)
            return hash;
        for (i = 0; i < input.length; i++) {
            chr = input.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
}
exports.ContentManager = ContentManager;
//# sourceMappingURL=content-manager.js.map