import {Statement} from "./statement";
import {str, IRunnable} from "../combi";

export class Resume extends Statement {

  public getMatcher(): IRunnable {
    return str("RESUME");
  }

}