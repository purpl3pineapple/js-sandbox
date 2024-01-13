function validAnagrams(...strings) {
  const string1Map = new Map();
  const string2Map = new Map();

  strings[0]
    .split("")
    .forEach(char => string1Map.set(char, (string1Map.get(char) || 0) + 1));
  strings[1]
    .split("")
    .forEach(char => string2Map.set(char, (string2Map.get(char) || 0) + 1));

  return [...string1Map].every(([key, val]) => string2Map.get(key) === val);
}
