const findFirstNonRepeatingCharacter = str => {
  const chars = new Map();

  for (letter of str) {
    chars.set(letter, (chars.get(letter) || 0) + 1);
  }

  for (const char of str) {
    if (chars.get(char) === 1) return char;
  }

  return null;
};
