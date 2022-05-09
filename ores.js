const { mineNode, dropFullInv } = require("./actions");
const {
  firstEastBlock,
  southBlock,
  southWestBlock,
  northBlock,
  loopEastBlock,
} = require("./coords");

const iron = () => {
  mineNode(firstEastBlock, 3000);
  while (true) {
    let i = 0;
    while (i < 6) {
      mineNode(southBlock, 7500);
      mineNode(southWestBlock, 7500);
      mineNode(northBlock, 7500);
      mineNode(loopEastBlock, 7500);
      i++;
    }
    dropFullInv(500);
  }
};

module.exports = { iron };
