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
    this.shipBody = null;
  }

  attack() {
    if (this.attacked) return;

    const shipBody = this.shipBody;
    if (shipBody) {
      shipBody.hit();
      this.hit = true;
      return true;
    }

    this.attacked = true;
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

  const placeShip = function (start, end) {
    const horizontal = start[0] - end[0] + 1;
    const vertical = start[1] - end[1] + 1;

    if (horizontal < 1 || vertical < 1) {
      placeShip(end, start);
      return;
    }

    let x;
    let y;

    if (vertical) {
      for (let i = 0; i < vertical; i++) {
        x = start[0] + i;
        y = start[1];
      }
    } else if (horizontal) {
      for (let i = 0; i < horizontal; i++) {
        x = start[0];
        y = start[1] + i;
      }
      board[x][y].shipBody = new Ship(horizontal);
    }
  };

  const receiveAttack = function (grid) {
    const x = grid[0];
    const y = grid[1];

    return board[x][y].attack();
  };
}
