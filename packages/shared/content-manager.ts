export class ContentManager {
  private imports: string[] = [];
  private importsMap: { [key: string]: string } = {};

  private content: string[] = [];
  private contentMap: { [key: string]: string } = {};

  public addImport(importString: string) {
    const hash = this.makeHash(importString);
    if (!this.importsMap[hash]) {
      this.importsMap[hash] = null;
      this.imports.push(importString);
    }
  }

  public addContent(contentString: string) {
    const hash = this.makeHash(contentString);
    if (!this.contentMap[hash]) {
      this.contentMap[hash] = null;
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
