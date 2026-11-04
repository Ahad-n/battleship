class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.length === this.hits) return true;
    return false;
  }
}

class gridNode {
  constructor() {
    this.attacked = false;
    this.hit = false;
    this.shipPresent = null;
  }

  attack() {
    if (this.attacked) return;
    else if (this.hit) return;

    const shipBody = this.shipPresent;
    if (shipBody) shipBody.hit();
  }
}

function Gameboard(board = null) {
  if (!board) board = createBoard();

  const createBoard = function () {
    let board = [];
    for (let i = 0; i < 10; i++) {
      row = [];
      for (let i = 0; i < 10; i++) {
        row.push(new gridNode());
      }
    }
    return board;
  };
}
