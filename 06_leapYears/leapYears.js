const leapYears = function (yearNum) {
  if (yearNum % 400 == 0) {
    return true;
  }
  if (yearNum % 100 == 0) {
    return false;
  }
  if (yearNum % 4 == 0) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
