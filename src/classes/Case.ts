import IPositionable from "../interfaces/IPositionable";
import GameItem from "./GameItem";
import Position from "./Position";
import ICollectable from "../interfaces/ICollectable";
import CollectableGameItem from "./CollectableGameItem";

export default class Case implements IPositionable {
  _position: Position;
  _item: GameItem;

  private _occupied: boolean;

  constructor(position: Position = new Position()) {
    this._position = position;
  }

  get position(): Position {
    throw new Error("Method not implemented.");
  }

  add(coming_item: GameItem): boolean {
    if (!this._item) {
      this._item = coming_item;
      return true;
    } else {
      if (this._item instanceof CollectableGameItem) {
        coming_item.add_item(this._item);
        this._item = coming_item;
        return true;
      }

      //case is already occupied
      return false;
    }
  }

  get occupied(): boolean {
    return this._item !== undefined;
  }
}
