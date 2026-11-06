import { Player } from "./components.js";

export default (function () {
  const board = new Player().game;
  const history = [];

  const attack = function () {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const newAttack = [x, y];

    for (let i = 0; i < history.length; i++) {
      const prevAttack = history[i];
      if (prevAttack[0] === newAttack[0] && prevAttack[1] === newAttack[1]) {
        return attack();
      }
    }
    history.push(newAttack);
    return newAttack;
  };

  return { board, attack };
})();
