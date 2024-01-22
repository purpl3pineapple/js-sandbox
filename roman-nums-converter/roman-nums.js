const romanNum = num => {
  let numeral = "";

  const one = "I";
  const four = "IV";
  const five = "V";
  const nine = "IX";
  const ten = "X";
  const forty = "XL";
  const fifty = "L";
  const ninety = "XC";
  const hundred = "C";
  const fourHundred = "CD";
  const fiveHundred = "D";
  const nineHundred = "CM";
  const thousand = "M";

  switch (num) {
    case 0:
      return "";

    case 4:
      numeral += four;
      break;

    case 5:
      numeral += five;
      break;

    case 9:
      numeral += nine;
      break;

    case 10:
      numeral += ten;
      break;

    case 40:
      numeral += forty;
      break;

    case 50:
      numeral += fifty;
      break;

    case 90:
      numeral += ninety;
      break;

    case 100:
      numeral += hundred;
      break;

    case 400:
      numeral += fourHundred;
      break;

    case 500:
      numeral += fiveHundred;
      break;

    case 900:
      numeral += nineHundred;
      break;

    case 1000:
      numeral += thousand;
      break;

    default:
      if (num < 4) {
        while (num > 0) {
          numeral += one;
          num--;
        }
        romanNum(num);
      } else if (num < 9) {
        numeral += five;
        while (num > 5) {
          numeral += one;
          num--;
        }
        romanNum(num);
      } else if (num < 40) {
        let div = Math.floor(num / 10);
        while (div > 0) {
          numeral += ten;
          div--;
        }
        numeral += romanNum(num % 10);
      } else if (num < 50) {
        numeral += forty + romanNum(num % 40);
      } else if (num < 90) {
        numeral += fifty + romanNum(num % 50);
      } else if (num < 100) {
        numeral += ninety + romanNum(num % 90);
      } else if (num < 400) {
        let div = Math.floor(num / 100);
        while (div > 0) {
          numeral += hundred;
          div--;
        }
        numeral += romanNum(num % 100);
      } else if (num < 500) {
        numeral += fourHundred + romanNum(num % 400);
      } else if (num < 900) {
        let div = Math.floor(num / 500);
        while (div > 0) {
          numeral += fiveHundred;
          div--;
        }
        numeral += romanNum(num % 500);
      } else if (num < 1000) {
        numeral += nineHundred + romanNum(num % 900);
      } else if (num < 4000) {
        let div = Math.floor(num / 1000);
        while (div > 0) {
          numeral += thousand;
          div--;
        }
        numeral += romanNum(num % 1000);
      }
      break;
  }

  return numeral;
};

window.addEventListener("load", () => {
  const convertBtn = document.getElementById("convert-btn");
  const number = document.getElementById("number");
  let output = document.getElementById("output");

  convertBtn.addEventListener("click", () => {
    const input = parseInt(number.value);
    if (isNaN(input)) {
      output.innerText = "Please enter a valid number";
      return;
    }

    if (input < 0) {
      output.innerText = "Please enter a number greater than or equal to 1";
      return;
    }

    if (input >= 4000) {
      output.innerText = "Please enter a number less than or equal to 3999";
      return;
    }

    output.innerText = romanNum(input);
  });
});
