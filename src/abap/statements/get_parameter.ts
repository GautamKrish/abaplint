import {Statement} from "./statement";
import {verNot, str, seq, IRunnable} from "../combi";
import {Target, Source} from "../expressions";
import {Version} from "../../version";

export class GetParameter extends Statement {

  public static get_matcher(): IRunnable {
    let ret = seq(str("GET PARAMETER ID"),
                  new Source(),
                  str("FIELD"),
                  new Target());

    return verNot(Version.Cloud, ret);
  }

}