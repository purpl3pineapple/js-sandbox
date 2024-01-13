function miniMaxSum(arr) {
  const sums = [];

  arr.forEach((_, idx) => {
    const sum = arr
      .filter((_, index) => index !== idx)
      .reduce((total, cur) => total + cur, 0);

    sums.push(sum);
  });

  const max = Math.max(...sums);
  const min = Math.min(...sums);

  console.log(min, max);
}
