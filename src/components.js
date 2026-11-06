import getPositions from "./helpers/ship_position.js";

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
    this.attacked = true;

    const shipBody = this.shipBody;
    if (shipBody) {
      shipBody.hit();
      this.hit = true;
      return true;
    }
  }
}

function Gameboard() {
  const ships = [];
  let board;

  const createBoard = function () {
    let board = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let i = 0; i < 10; i++) {
        row.push(new gridNode());
      }
      board.push(row);
    }
    return board;
  };

  function placeShip(occupation) {
    const len = occupation.length;
    const ship = new Ship(len);

    occupation.forEach((square) => {
      const x = square[0];
      const y = square[1];

      board[x][y].shipBody = ship;
    });

    ships.push(ship);
  }

  function populateOceanGrid() {
    const occupations = getPositions();
    occupations.forEach((occupation) => {
      placeShip(occupation);
    });
  }

  const receiveAttack = function (x, y) {
    return board[x][y].attack();
  };

  const isLost = function () {
    for (let i = 0; i < ships.length; i++) {
      if (!ships[i].isSunk()) return false;
    }
    return true;
  };

  board = createBoard();
  populateOceanGrid();

  const getBaord = () => board;
  return { receiveAttack, isLost, getBaord };
}

class Player {
  constructor() {
    this.game = Gameboard();
  }
}

export { Gameboard, Player };
