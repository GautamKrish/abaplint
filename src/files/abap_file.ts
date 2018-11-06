import {Pragma} from "../abap/tokens";
import {Token} from "../abap/tokens/_token";
import {AbstractFile} from "./_abstract_file";
import {IFile} from "./_ifile";
import {StructureNode, StatementNode} from "../abap/node";

// todo: rename to ABAPFile
export class ABAPFile extends AbstractFile {
  // tokens vs statements: pragmas are part of tokens but not in statements
  // todo: need some better way of handling pragmas
  private tokens: Array<Token>;
  private statements: StatementNode[];
  private structure: StructureNode;
  private file: IFile;

  public constructor(file: IFile, tokens: Array<Token>, statements: StatementNode[]) {
    super(file.getFilename());
    this.file       = file;
    this.tokens     = tokens;
    this.statements = statements;
  }

  public getRaw(): string {
    return this.file.getRaw();
  }

  public getRawRows(): Array<string> {
    return this.file.getRawRows();
  }

  public setStructure(node: StructureNode) {
    this.structure = node;
  }

  public getStructure(): StructureNode {
    return this.structure;
  }

  /*
    public static fromJSON(str: string): ParsedFile {
      let json = JSON.parse(str);

      let file: File = new File(json.filename, json.raw);
      let tokens: Array<Token> = undefined;
      let statements: Array<Statement> = undefined;
      let root: RootNode = undefined;

      return new ParsedFile(file, tokens, statements, root);
    }
  */
  public getTokens(withPragmas = true): Array<Token> {
    if (withPragmas === true) {
      return this.tokens;
    } else {
      let tokens: Array<Token> = [];
      this.tokens.forEach((t) => {
        if (!(t instanceof Pragma)) {
          tokens.push(t);
        }
      });
      return tokens;
    }
  }

  public getStatements(): StatementNode[] {
    return this.statements;
  }

  public setStatements(s: StatementNode[]): void {
    this.statements = s;
  }
  /*
    private statementsToTokens(): Array<Token> {
      let ret: Array<Token> = [];

      this.getStatements().forEach((s) => {
        ret = ret.concat(s.getTokens());
      });

      return ret;
    }
  */
}