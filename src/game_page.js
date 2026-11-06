import h from "./helpers/DOM_helpers.js";
import { Player } from "./components.js";

function gamePage() {
  const p = new Player().game;
  const playerBoard = p.getBaord();

  const container = document.getElementById("container");

  let targetGrid = h.targetGrid();
  let oceanGrid = document.createElement("div");
  oceanGrid = h.oceanGrid(playerBoard);

  const oceanLabel = document.createElement("div");
  const targetLabel = document.createElement("div");
  oceanLabel.textContent = "Ocean Grid: ";
  targetLabel.textContent = "Target Grid:";

  container.append(targetLabel, targetGrid, oceanLabel, oceanGrid);
}

export { gamePage };
