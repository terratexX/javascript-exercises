const fibonacci = function (num) {
  let fiboLast = 0;
  let fiboNow = 1;
  if (Number(num) < 0) {
    return "OOPS";
  }
  for (let i = 0; i < num; i++) {
    let temp = fiboNow;
    fiboNow += fiboLast;
    fiboLast = temp;
  }
  return fiboLast;
};

// Do not edit below this line
module.exports = fibonacci;
