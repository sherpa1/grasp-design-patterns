import Board from "./classes/Board";
import Monster from "./classes/Monster";

function init() {
  const monster = new Monster();
  const board = new Board(8, 8, 10);

  board.add(monster);
  console.log(monster);
}

init();
