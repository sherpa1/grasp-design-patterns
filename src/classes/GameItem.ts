import IMovable from "../interfaces/IMovable";
import IPositionable from "../interfaces/IPositionable";
import Position from "./Position";

export default abstract class GameItem implements IMovable, IPositionable {
  _position: Position = new Position();

  private _items: Array<GameItem> = [];

  private _malus_level: number = 0;
  private _bonus_level: number = 0;

  static MAX_MALUS_LEVEL: number = 10;
  static MAX_BONUS_LEVEL: number = 10;

  public get bonus_level(): number {
    return this._bonus_level;
  }
  public set bonus_level(value: number) {
    this._bonus_level = value;
  }
  public get malus_level(): number {
    return this._malus_level;
  }
  public set malus_level(value: number) {
    this._malus_level = value;
  }

  constructor(position: Position = new Position()) {
    this._position = position;
  }

  move(position: Position) {
    this._position = position;
  }

  get position(): Position {
    return this._position;
  }
  set position(value: Position) {
    this._position = value;
  }
  public get items(): Array<GameItem> {
    return this._items;
  }

  add_item(coming_item: GameItem) {
    this._bonus_level += coming_item.bonus_level;
    this._malus_level += coming_item.malus_level;

    if (this._bonus_level >= GameItem.MAX_BONUS_LEVEL) console.log("");
    if (this._malus_level >= GameItem.MAX_MALUS_LEVEL) console.log("");

    this._items.push(coming_item);
  }
}
