import { v4 as uuid4 } from 'uuid';

export class Trace {
  private static instance: Trace;
  private id: string = '';

  private constructor() {}

  public static trace(realod?: boolean): string {
    if (!Trace.instance) {
      Trace.instance = new Trace();
      Trace.instance.id = uuid4();
    }

    return Trace.instance.id;
  }
}
