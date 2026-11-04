export default (function () {
  const oceanGrid = function () {
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

  return { oceanGrid };
})();
