const add = function (numA, numB) {
  return numA + numB;
};

const subtract = function (numA, numB) {
  return numA - numB;
};

const sum = function (arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr.reduce((item1, item2) => item1 + item2);
};

const multiply = function (arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr.reduce((item1, item2) => item1 * item2);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let output = num;
  if (output == 0) {
    return 1;
  }
  for (let i = num - 1; i > 0; i--) {
    output *= i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
