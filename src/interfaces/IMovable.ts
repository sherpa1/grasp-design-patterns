import Position from "../classes/Position";

export default interface IMovable {
  _position: Position;

  move(position: Position);
}
