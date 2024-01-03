document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value;

  function isPalindrome(str) {
    const strng = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

    return {
      str: strng,
      startsWithSpecialChar: /^[^a-z0-9]/i.test(str) === true,
      specialChars: /[^a-z0-9]/gi.test(str) === true,
      result: strng.split("").reverse().join("") === strng,
    };
  }

  const checkedForPalindrome = isPalindrome(input);

  if (input === "") {
    alert("Please input a value");
    return;
  } else if (checkedForPalindrome.result) {
    document.getElementById("result").innerHTML = `${
      checkedForPalindrome.startsWithSpecialChar
        ? checkedForPalindrome.str
        : input
    } is a palindrome`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `${input} is not a palindrome`;
  }
});
