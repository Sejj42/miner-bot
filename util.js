const robot = require("robotjs");

const util = {
  moveMouseAndClick: (x, y) => {
    robot.moveMouse(x, y);
    util.sleep(200);
    robot.mouseClick();
  },
  moveMouseAndRightClick: (x, y) => {
    robot.moveMouse(x, y);
    robot.mouseClick("right");
  },

  sleep: (ms) => {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  },
  startCounter: (oreFn) => {
    let secondsLeft = 3;
    console.log(`Starting in ${secondsLeft}...`);
    const interval = setInterval(() => {
      secondsLeft--;
      console.log(`${secondsLeft}...`);
      if (secondsLeft === 0) {
        console.log(`Bot has begun mining ${oreFn.name}`);
        clearInterval(interval);
      }
    }, 1000);
  },
};

module.exports = util;
