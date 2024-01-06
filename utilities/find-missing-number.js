function findMissingNumber(arr) {
  switch (arr.length) {
    case undefined:
      return arr;
    case 0:
      return 1;
    default:
      let max = Math.max(...arr);
      const count = [];

      while (max > 0) {
        count.push(max);
        max--;
      }

      return count.find(num => !arr.includes(num));
  }
}
