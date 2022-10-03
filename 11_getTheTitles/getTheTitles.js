const getTheTitles = function (arr) {
  let output = [];
  arr.forEach((element) => {
    output.push(element.title);
  });
  return output;
};

// Do not edit below this line
module.exports = getTheTitles;
