const caesar = function (string, num) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    let letterNum = string.charCodeAt(i);

    if (letter === letter.toUpperCase() && letterNum + num > 90) {
      let count = letterNum + num - 90;
      let startNum = 64;
      while (count > 0) {
        if (startNum == 90) {
          startNum = 64;
        }
        startNum += 1;
        count--;
      }
      output += string[i].replace(/\w/g, String.fromCharCode(startNum));
    } else if (letter === letter.toUpperCase() && letterNum + num < 65) {
      let count = 65 - (letterNum + num);
      let startNum = 91;
      while (count > 0) {
        if (startNum == 65) {
          startNum = 91;
        }
        startNum -= 1;
        count--;
      }
      output += string[i].replace(/\w/g, String.fromCharCode(startNum));
    } else if (letter === letter.toUpperCase()) {
      output += string[i].replace(/\w/g, String.fromCharCode(letterNum + num));
    } else if (letter === letter.toLowerCase() && letterNum + num > 122) {
      let count = letterNum + num - 122;
      let startNum = 96;
      while (count > 0) {
        if (startNum == 122) {
          startNum = 96;
        }
        startNum += 1;
        count--;
      }
      output += string[i].replace(/\w/g, String.fromCharCode(startNum));
    } else if (letter === letter.toLowerCase() && letterNum + num < 97) {
      let count = 97 - (letterNum + num);
      let startNum = 123;
      while (count > 0) {
        if (startNum == 97) {
          startNum = 123;
        }
        startNum -= 1;
        count--;
      }
      output += string[i].replace(/\w/g, String.fromCharCode(startNum));
    } else if (letter === letter.toLowerCase()) {
      output += string[i].replace(/\w/g, String.fromCharCode(letterNum + num));
    }
  }
  return output;
};

//todo: "a"=97 to "z"=122,   "A"=65 to "Z"=90

// Do not edit below this line
module.exports = caesar;
