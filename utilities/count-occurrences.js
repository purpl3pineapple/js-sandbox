function countOccurrences(str, char) {
  let count = 0;
  for (const letter of str) {
    if (letter === char || letter === char.toLowerCase()) {
      count++;
    }
  }

  return count;
}
