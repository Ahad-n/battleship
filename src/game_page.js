import h from "./helpers/grid_actions.js";

function gamePage() {
  const container = document.getElementById("container");
  container.textContent = "";

  let targetGrid = h.targetGrid();
  let oceanGrid = document.createElement("div");
  oceanGrid = h.oceanGrid();

  const oceanLabel = document.createElement("div");
  const targetLabel = document.createElement("div");
  oceanLabel.textContent = "Ocean Grid: ";
  targetLabel.textContent = "Target Grid:";

  container.append(targetLabel, targetGrid, oceanLabel, oceanGrid);
}

export { gamePage };
