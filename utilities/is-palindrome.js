function isPalindrome(str) {
  const strng = str.replace(/\W+/gi, "").toLowerCase();
  return strng.split("").reverse().join("") === strng;
}
