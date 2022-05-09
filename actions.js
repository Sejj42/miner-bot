const { moveMouseAndClick, moveMouseAndRightClick, sleep } = require("./util");
const { firstInvItem } = require("./coords");

const actions = {
  mineNode: (node, ms) => {
    moveMouseAndClick(node.x, node.y);
    sleep(ms);
  },
  dropItem: (i, x, y, ms) => {
    moveMouseAndRightClick(x, y);
    sleep(ms / 5);
    if (i === 6) moveMouseAndClick(x, y + 25);
    else moveMouseAndClick(x, y + 40);
    sleep(ms);
  },

  dropInvColumn: (x, y, ms) => {
    for (let i = 0; i < 7; i++) {
      actions.dropItem(i, x, y, ms);
      y += 36;
    }
  },
  dropFullInv: (ms) => {
    let x = firstInvItem.x;
    let y = firstInvItem.y;
    for (let i = 0; i < 4; i++) {
      actions.dropInvColumn(x, y, ms);
      x += 43.5;
    }
  },
};

module.exports = actions;
