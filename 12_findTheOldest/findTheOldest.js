const findTheOldest = function (arrOfPersons) {
  let now = new Date();
  let compareValue = 0;
  let output;
  for (let item of arrOfPersons) {
    if (!item.yearOfDeath) {
      if (now.getFullYear() - item.yearOfBirth > compareValue) {
        compareValue = now.getFullYear() - item.yearOfBirth;
        output = item;
      }
    }
    if (item.yearOfDeath - item.yearOfBirth > compareValue) {
      compareValue = item.yearOfDeath - item.yearOfBirth;
      output = item;
    }
  }
  return output;
};
// Do not edit below this line
module.exports = findTheOldest;
