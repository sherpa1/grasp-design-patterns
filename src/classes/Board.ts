import Case from "./Case";
import GameItem from "./GameItem";
import Position from "./Position";

export default class Board {
  private _cases: Array<Case> = [];
  private _items: Array<GameItem> = [];

  public get cases(): Array<Case> {
    return this._cases;
  }

  constructor(
    width_cases_number: number,
    height_cases_number: number,
    case_width: number
  ) {
    for (var i = 0; i < width_cases_number * height_cases_number; i++) {
      this._cases.push(new Case(new Position(i * case_width, i * case_width)));
    }
  }

  add(item: GameItem) {
    this._items.push(item);
  }

  move(item: GameItem, position: Position) {}
}
