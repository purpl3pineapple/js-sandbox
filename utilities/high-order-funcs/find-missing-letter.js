function findMissingLetter(arr) {
  const result = arr.find(
    (char, idx, letters) =>
      char.charCodeAt(0) + 1 !== letters[idx + 1].charCodeAt(0)
  );

  return result === undefined
    ? null
    : String.fromCharCode(result.charCodeAt(0) + 1);
}
