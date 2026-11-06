import bot from "../bot.js";
import { Player } from "../components.js";
import { gamePage } from "../game_page.js";

export default (function () {
  const p = new Player().game;
  const botBoard = bot.board.getBaord();
  const playerBaord = p.getBaord();

  const targetGrid = function () {
    const grid = document.createElement("div");
    for (let i = 0; i < 10; i++) {
      const row = document.createElement("div");
      for (let j = 0; j < 10; j++) {
        const square = renderTargetNode(botBoard[i][j], i, j);
        row.appendChild(square);
      }
      row.id = i;
      grid.appendChild(row);
    }
    return grid;
  };

  const oceanGrid = function () {
    const grid = document.createElement("div");

    for (let i = 0; i < 10; i++) {
      const row = document.createElement("div");
      row.dataset.x = i;

      for (let j = 0; j < 10; j++) {
        const node = playerBaord[i][j];

        row.appendChild(renderOceanNode(node));
      }

      grid.appendChild(row);
    }
    return grid;
  };

  function renderTargetNode(node, x, y) {
    const gridBtn = document.createElement("button");

    gridBtn.dataset.x = x;
    gridBtn.dataset.y = y;
    gridBtn.textContent = "-";
    gridBtn.addEventListener("click", () => {
      const x = Number(gridBtn.dataset.x);
      const y = Number(gridBtn.dataset.y);

      bot.board.receiveAttack(x, y);
      const counter = bot.attack();
      p.receiveAttack(counter[0], counter[1]);
      gamePage();
    });

    if (node.attacked) {
      gridBtn.classList = node.hit ? "hit" : "miss";
    } else gridBtn.classList = "";

    return gridBtn;
  }

  function renderOceanNode(node) {
    const gridBtn = document.createElement("button");

    gridBtn.textContent = node.shipBody ? "@" : "-";
    if (node.attacked) {
      gridBtn.classList = node.hit ? "hit" : "miss";
    }

    return gridBtn;
  }

  return { oceanGrid, targetGrid };
})();
