import diceGameSimulation from "../utilities/dice-game.js";
import validateEmail from "../utilities/validate-email-format.js";

window.addEventListener("load", () => {
  document.getElementById("dice-game-btn").addEventListener("click", () => {
    const rolls = parseFloat(document.getElementById("rolls").value);

    document.getElementById("dice-result").innerText = "Rolling dice...";

    setTimeout(() => {
      const diceRoll = diceGameSimulation(rolls);

      const { dice1, dice2, result } =
        diceRoll[Math.floor(Math.random() * diceRoll.length)];

      document.getElementById(
        "dice-result"
      ).innerText = `Dice 1: ${dice1}\nDice 2: ${dice2}\nResult: ${result}`;
    }, 1500);
  });

  document.getElementById("palindrome-btn").addEventListener("click", () => {
    const palindrome = document.getElementById("palindrome").value;

    function isPalindrome(str) {
      const strng = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

      return {
        str: strng,
        startsWithSpecialChar: /^[^a-z0-9]/i.test(str) === true,
        result: strng.split("").reverse().join("") === strng,
      };
    }

    const checkedForPalindrome = isPalindrome(palindrome);

    if (palindrome === "") {
      alert("Please input a value");
      return;
    } else if (checkedForPalindrome.result) {
      document.getElementById("palindrome-result").innerHTML = `${
        checkedForPalindrome.startsWithSpecialChar
          ? checkedForPalindrome.str
          : palindrome
      } is a palindrome`;
    } else {
      document.getElementById(
        "palindrome-result"
      ).innerHTML = `${palindrome} is not a palindrome`;
    }
  });

  document
    .getElementById("email-validation-btn")
    .addEventListener("click", () => {
      const email = document.getElementById("email").value;

      document.getElementById("email-validation-result").innerText =
        validateEmail(email) === true ? "Email is valid" : "Email is not valid";
    });
});
