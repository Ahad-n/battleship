import h from "./helpers/grid_actions.js";
import bot from "./bot.js";
import { Player } from "./components.js";

function gamePage() {
  const p = new Player().game;
  const botBoard = bot.board.getBaord();
  const playerBoard = p.getBaord();

  const container = document.getElementById("container");

  let targetGrid = h.targetGrid(botBoard);
  let oceanGrid = document.createElement("div");
  oceanGrid = h.oceanGrid(playerBoard);

  const oceanLabel = document.createElement("div");
  const targetLabel = document.createElement("div");
  oceanLabel.textContent = "Ocean Grid: ";
  targetLabel.textContent = "Target Grid:";

  container.append(targetLabel, targetGrid, oceanLabel, oceanGrid);
}

export { gamePage };
