export default (function () {
  const targetGrid = function () {
    const grid = document.createElement("div");
    for (let i = 0; i < 10; i++) {
      const row = document.createElement("div");
      for (let j = 0; j < 10; j++) {
        const gridBtn = document.createElement("button");

        gridBtn.id = j;
        gridBtn.textContent = "+";
        row.appendChild(gridBtn);
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

      for (let j = 0; j < 10; j++) {
        const square = document.createElement("button");
        const node = board[i][j];

        if (node.shipBody) square.textContent = "H";
        else square.textContent = "-";

        if (node.attacked && node.hit) square.classList = "hit";
        else if (node.attacked && !node.hit) square.classList = "miss";
        row.appendChild(square);
      }

      grid.appendChild(row);
    }
    return grid;
  };

  return { oceanGrid, targetGrid };
})();
