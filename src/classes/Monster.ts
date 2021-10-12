import IMovable from "../interfaces/IMovable";
import ILivable from "../interfaces/ILivable";
import Position from "./Position";

export default class Monster implements IMovable, ILivable {
  _life: number;
  _position: Position = new Position();

  constructor(life: number = 5) {
    this._life = life;
  }

  remove() {
    throw new Error("Method not implemented.");
  }

  move(position: Position) {
    throw new Error("Method not implemented.");
  }

  dead() {
    throw new Error("Method not implemented.");
  }

  get position(): Position {
    return this._position;
  }

  set position(value: Position) {
    this._position = value;
  }

  get life(): number {
    return this._life;
  }

  set life(value: number) {
    this._life = value;
  }
}
