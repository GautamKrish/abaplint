import {seq, opt, tok, regex as reg, Expression, IRunnable} from "../combi";
import {WDash} from "../tokens/";

export class Integer extends Expression {
  public getRunnable(): IRunnable {
    return seq(opt(tok(WDash)), reg(/^\d+$/));
  }
}