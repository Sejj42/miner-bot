const robot = require("robotjs");
const screenSize = robot.getScreenSize();

const coords = {
  playerDefault: {
    x: screenSize.width / 2,
    y: screenSize.height / 2,
  },
  firstInvItem: {
    x: 1368,
    y: 533,
  },
  lastInvItem: {
    x: 1368 + 43.5 * 3,
    y: 533 + 36 * 6,
  },
  firstEastBlock: {
    x: screenSize.width / 2 + 25,
    y: screenSize.height / 2 - 15,
  },
  loopEastBlock: {
    x: screenSize.width / 2 + 25 + 25,
    y: screenSize.height / 2 - 15,
  },
  southBlock: {
    x: screenSize.width / 2 + 5,
    y: screenSize.height / 2 + 10,
  },
  southWestBlock: {
    x: screenSize.width / 2 - 25,
    y: screenSize.height / 2 + 10,
  },
  northBlock: {
    x: screenSize.width / 2 + 5,
    y: screenSize.height / 2 - 40,
  },
};

module.exports = coords;
