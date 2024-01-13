const reverseString = str =>
  str.length === 0 ? "" : str.at(-1) + reverseString(str.slice(0, -1));
