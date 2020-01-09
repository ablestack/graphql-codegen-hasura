export class ContentManager {
  private imports: string[] = [];
  private importsMap: { [key: string]: boolean } = {};

  private content: string[] = [];
  private contentMap: { [key: string]: boolean } = {};

  public addImport(importString: string, customKey?: string) {
    const hash = customKey || this.makeHash(importString);
    if (!this.importsMap[hash]) {
      this.importsMap[hash] = true;
      this.imports.push(importString);
    }
  }

  public addContent(contentString: string, customKey?: string) {
    const hash = customKey || this.makeHash(contentString);
    if (!this.contentMap[hash]) {
      this.contentMap[hash] = true;
      this.content.push(contentString);
    }
  }

  public generateImportArray() {
    return this.imports;
  }

  public createContentString() {
    return this.content.join("\n");
  }

  private makeHash(input: string) {
    var hash = 0,
      i,
      chr;
    if (input.length === 0) return hash;
    for (i = 0; i < input.length; i++) {
      chr = input.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
}
