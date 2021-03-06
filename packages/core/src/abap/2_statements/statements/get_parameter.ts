import {IStatement} from "./_statement";
import {verNot, seq} from "../combi";
import {Target, Source} from "../expressions";
import {Version} from "../../../version";
import {IStatementRunnable} from "../statement_runnable";

export class GetParameter implements IStatement {

  public getMatcher(): IStatementRunnable {
    const ret = seq("GET PARAMETER ID",
                    Source,
                    "FIELD",
                    Target);

    return verNot(Version.Cloud, ret);
  }

}