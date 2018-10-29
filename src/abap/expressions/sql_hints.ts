import {seq, str, Expression, IRunnable} from "../combi";
import {Constant} from "./constant";

export class SQLHints extends Expression {
  public getRunnable(): IRunnable {
    let ret = seq(str("%_HINTS"), str("ORACLE"), new Constant());
    return ret;
  }
}