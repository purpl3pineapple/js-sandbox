function areAllCharactersUnique(str) {
  const word = str.split("");
  const charCodes = word.map(char => str.charCodeAt(str.indexOf(char)));

  return word.length === [...new Set(charCodes)].length;
}
