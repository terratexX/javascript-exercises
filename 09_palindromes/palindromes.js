const palindromes = function (string) {
  let filtered = string.replace(/\W/g, "").toLowerCase();
  if (filtered === filtered.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
