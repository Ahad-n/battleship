export default (function () {
  const targetGrid = function (board) {
    const grid = document.createElement("div");
    for (let i = 0; i < 10; i++) {
      const row = document.createElement("div");
      row.dataset.x = i;
      for (let j = 0; j < 10; j++) {
        const square = renderTargetNode(board[i][j], j);
        row.appendChild(square);
      }
      row.id = i;
      grid.appendChild(row);
    }
    return grid;
  };

  const oceanGrid = function (board) {
    const grid = document.createElement("div");

    for (let i = 0; i < 10; i++) {
      const row = document.createElement("div");
      row.dataset.x = i;

      for (let j = 0; j < 10; j++) {
        const node = board[i][j];

        row.appendChild(renderOceanNode(node, j));
      }

      grid.appendChild(row);
    }
    return grid;
  };

  function renderTargetNode(node, y) {
    const gridBtn = document.createElement("button");

    gridBtn.dataset.y = y;
    gridBtn.textContent = "-";

    if (node.attacked) {
      gridBtn.classList = node.hit ? "hit" : "miss";
    } else gridBtn.classList = "";

    return gridBtn;
  }

  function renderOceanNode(node, y) {
    const gridBtn = document.createElement("button");

    gridBtn.textContent = node.shipBody ? "@" : "-";
    if (node.attacked) {
      gridBtn.classList = node.hit ? "hit" : "miss";
    }

    return gridBtn;
  }

  return { oceanGrid, targetGrid };
})();
