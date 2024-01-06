function findMissingLetter(arr) {
  str = arr.join("");

  for (const char of str) {
    const idx = str.indexOf(char);
    const current = str.charCodeAt(idx);
    const nextLetter = current + 1;
    const nextIndexed = str.charCodeAt(idx + 1);

    if (nextLetter !== nextIndexed && nextIndexed !== NaN) {
      return String.fromCharCode(nextLetter);
    }
  }
}
