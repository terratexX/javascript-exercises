const caesar = function (string, num) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    let letterNum = string.charCodeAt(i);
    if (letter === letter.toUpperCase() && letterNum + num < 65) {
      output += string[i].replace(
        /\w/g,
        String.fromCharCode(91 - (letterNum + -num - 65))
      );
    } else if (letter === letter.toUpperCase() && letterNum + num > 90) {
      output += string[i].replace(
        /\w/g,
        String.fromCharCode(64 + (letterNum + num - 90))
      );
    } else {
      output += string[i].replace(/\w/g, String.fromCharCode(letterNum + num));
    }
    console.log(letterNum);
    console.log(letterNum + -num);
  }
  return output;
};
console.log(caesar("B", -2));

//todo: "a"=97 to "z"=122,   "A"=65 to "Z"=90

// Do not edit below this line
module.exports = caesar;
