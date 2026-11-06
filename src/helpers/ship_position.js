export default function () {
  let occupied = [];
  let positions = [];
  let length = 5;

  while (length >= 2) {
    let p = generatePosition(length, occupied);
    positions.push(p);
    length--;
  }

  return positions;
}

function generatePosition(length, occupied) {
  let x = randomIndex();
  let y = randomIndex();

  const dir = randomIndex() % 2;
  let x2 = x;
  let y2 = y;

  // 0 for hotizontal and 1 for vercial
  if (dir === 0) x2 = x + length - 1;
  else y2 = y + length - 1;

  let p = [
    [x, y],
    [x2, y2],
  ];

  // check for overlap with previous ships
  let squares = getOccupiedSquares(p);

  if (x2 > 9 || y2 > 9 || isOverapped(squares, occupied))
    return generatePosition(length, occupied);

  occupied = [...occupied, ...squares];
  return p;
}

const randomIndex = function () {
  return Math.floor(Math.random() * 10);
};

const getOccupiedSquares = function (position) {
  const occupied = [];
  const start = position[0];
  const end = position[1];

  const horizontal = end[0] - start[0];
  const vertical = end[1] - start[1];

  if (horizontal) {
    for (let i = 0; i <= horizontal; i++)
      occupied.push([start[0] + i, start[1]]);
  } else {
    for (let i = 0; i <= vertical; i++) occupied.push([start[0], start[1] + i]);
  }

  return occupied;
};

const isOverapped = function (squares, occupied) {
  for (let i = 0; i < occupied.length; i++) {
    const square = occupied[i];

    for (let j = 0; j < squares.length; j++) {
      const newSquare = squares[j];
      if (square[0] === newSquare[0] && square[1] === newSquare[1]) return true;
    }
  }
};
