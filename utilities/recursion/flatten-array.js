function flattenArray(arr) {
  let range = [];

  arr.forEach(
    item =>
      (range = range.concat(Array.isArray(item) ? flattenArray(item) : item))
  );

  return range;
}
