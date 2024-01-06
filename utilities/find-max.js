function findMaxNumber(arr) {
  let greatest = null;

  arr.forEach((num, idx) => {
    if (num >= arr[idx - 1]) {
      greatest = num;
    }
  });

  return greatest;
}
