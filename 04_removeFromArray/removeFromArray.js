const removeFromArray = function (array, ...numbers) {
  return array.filter((item) => !numbers.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
