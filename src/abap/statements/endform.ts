import {Statement} from "./_statement";
import {verNot, str, IStatementRunnable} from "../combi";
import {Version} from "../../version";

export class Endform extends Statement {

  public getMatcher(): IStatementRunnable {
    const ret = str("ENDFORM");

    return verNot(Version.Cloud, ret);
  }

}