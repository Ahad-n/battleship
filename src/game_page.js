import h from "./DOM_helpers.js";
import { Player } from "./components.js";

function gamePage() {
  const p = new Player();
  const board = p.board;

  const container = document.getElementById("container");
  let targetGrid = h.targetGrid();
  let oceanGrid = document.createElement("div");
  oceanGrid = h.oceanGrid(board);

  container.append(targetGrid, oceanGrid);
}

export { gamePage };
