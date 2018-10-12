import {Statement} from "./statement";
import {str, IRunnable} from "../combi";

export class EndTestSeam extends Statement {

  public getMatcher(): IRunnable {
    return str("END-TEST-SEAM");
  }

}