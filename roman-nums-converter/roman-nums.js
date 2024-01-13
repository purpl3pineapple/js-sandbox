const one = { value: 1, roman: "I" };
const four = { value: 4, roman: "IV" };
const five = { value: 5, roman: "V" };
const nine = { value: 9, roman: "IX" };
const ten = { value: 10, roman: "X" };
const forty = { value: 40, roman: "XL" };
const fifty = { value: 50, roman: "L" };
const ninety = { value: 90, roman: "XC" };
const hundred = { value: 100, roman: "C" };
const fourHundred = { value: 400, roman: "CD" };
const fiveHundred = { value: 500, roman: "D" };
const nineHundred = { value: 900, roman: "CM" };
const thousand = { value: 1000, roman: "M" };

const roman5th = num => {
  let roman = five.roman;
  while (num > five.value) {
    roman = roman.concat(one.roman);
    num--;
  }
  return roman;
};

const roman10th = num => {
  let roman = ten.roman;
};

const romanNum = num => {
  for (let tk = one.value; tk <= thousand.value; tk++) {
    if (num === one.value) {
      return one.roman;
    } else if (num > one.value && num < four.value) {
      let count = one.roman;
      while (num > 0) {
        count = count.concat(one.roman);
        num--;
      }
      return count;
    } else if (num === four.value) {
      return four.roman;
    } else if (num === five.value) {
      return five.roman;
    } else if (num > five.value && num < nine.value) {
      return roman5th(num);
    } else if (num === nine.value) {
      return nine.roman;
    } else if (num === ten.value) {
      return ten.roman;
    } else if (num > ten.value && num < forty.value) {
      let count = ten.roman;
      while (forty.value / num > 0) {
        count = count.concat(one.roman);
        num--;
      }
      return count;
    } else if (num === forty.value) {
    } else if (num > forty.value && num < fifty.value) {
    } else if (num === fifty.value) {
    } else if (num > fifty.value && num < ninety.value) {
    } else if (num === ninety.value) {
    } else if (num > ninety.value && num < hundred.value) {
    } else if (num === hundred.value) {
    } else if (num > hundred.value && num < fourHundred.value) {
    } else if (num === fourHundred.value) {
    } else if (num > fourHundred.value && num < fiveHundred.value) {
    } else if (num === fiveHundred.value) {
    } else if (num > fiveHundred.value && num < nineHundred.value) {
    } else if (num === nineHundred.value) {
    } else if (num > nineHundred.value && num < thousand.value) {
    } else if (num === thousand.value) {
    }
  }
};
