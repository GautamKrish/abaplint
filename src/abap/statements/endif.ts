import {Statement} from "./_statement";
import {str, IStatementRunnable} from "../combi";

export class EndIf extends Statement {

  public getMatcher(): IStatementRunnable {
    return str("ENDIF");
  }

}