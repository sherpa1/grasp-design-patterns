import ICollectable from "../interfaces/ICollectable";
import IPositionable from "../interfaces/IPositionable";
import Bonus from "./Bonus";
import Malus from "./Malus";
import Position from "./Position";
import GameItem from "./GameItem";

export default class CollectableGameItem
  extends GameItem
  implements ICollectable
{
  protected _bonus: Bonus;
  protected _malus: Malus;
  _on_board: boolean;
  _position: Position;

  constructor(position: Position = new Position(), on_board: boolean = true) {
    super();
    this._position = position;
    this._on_board = on_board;
  }
  collect() {
    throw new Error("Method not implemented.");
  }

  get on_board(): boolean {
    throw new Error("Method not implemented.");
  }

  bonus(): Bonus {
    return this._bonus;
  }
  malus(): Malus {
    return this._malus;
  }
  remove() {
    this._on_board = false;
  }
  replace(position: Position) {
    this._position = position;
    this._on_board = false;
  }
}
