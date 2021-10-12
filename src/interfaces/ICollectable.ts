import Bonus from "../classes/Bonus";
import Malus from "../classes/Malus";
import Position from "../classes/Position";

export default interface ICollectable {
  _on_board: boolean;

  bonus(): Bonus;
  malus(): Malus;
  collect();
  replace(position: Position);
}
