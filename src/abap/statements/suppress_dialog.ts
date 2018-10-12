import {Statement} from "./statement";
import {verNot, str, IRunnable} from "../combi";
import {Version} from "../../version";

export class SuppressDialog extends Statement {

  public getMatcher(): IRunnable {
    let ret = str("SUPPRESS DIALOG");

    return verNot(Version.Cloud, ret);
  }

}