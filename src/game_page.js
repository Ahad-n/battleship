import h from "./DOM_helpers.js";
import { Player } from "./components.js";

function gamePage() {
  const p = new Player().game;
  const board = p.getBaord();

  const container = document.getElementById("container");
  let targetGrid = h.targetGrid();
  let oceanGrid = document.createElement("div");
  oceanGrid = h.oceanGrid(board);

  const oceanLabel = document.createElement("div");
  const targetLabel = document.createElement("div");
  oceanLabel.textContent = "Ocean Grid: ";
  targetLabel.textContent = "Target Grid:";

  container.append(targetLabel, targetGrid, oceanLabel, oceanGrid);
}

export { gamePage };
