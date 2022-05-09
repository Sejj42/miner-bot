const { iron } = require("./ores");
const { startCounter } = require("./util");

const main = (oreFn) => {
  startCounter(oreFn);
  oreFn();
};

main(iron);
