const sumAll = function (startNum, endNum) {
  if (Number.isInteger(startNum) && Number.isInteger(endNum)) {
    if (startNum < 0 || endNum < 0) {
      return "ERROR";
    }
    if (startNum > endNum) {
      for (let i = endNum; i <= startNum; i++) {
        endNum += i;
      }
      return endNum - 1;
    }
    if (startNum < endNum) {
      for (let i = startNum; i <= endNum; i++) {
        startNum += i;
      }
      return startNum - 1;
    }
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
