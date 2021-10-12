export default class Malus {
  private _value: number;
  private _kind: string;

  constructor(kind: string, value: number) {
    this._kind = kind;
    this._value = value;
  }

  public get value(): number {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
  }
  public get kind(): string {
    return this._kind;
  }
  public set kind(value: string) {
    this._kind = value;
  }
}
