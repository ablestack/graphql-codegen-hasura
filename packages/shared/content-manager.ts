export class ContentManager {
  private imports: { [key: string]: string } = {};
  private content: { [key: string]: string } = {};

  public addImport(importString: string) {
    const hash = this.makeHash(importString);
    if (!this.imports[hash]) this.imports[hash] = importString;
  }

  public addContent(contentString: string) {
    const hash = this.makeHash(contentString);
    if (!this.content[hash]) this.content[hash] = contentString;
  }

  public generateImportArray() {
    return Object.values(this.imports);
  }

  public createContentString() {
    return Object.values(this.imports).join("\n");
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
