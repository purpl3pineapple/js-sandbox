function plusMinus(arr) {
  const avg = num => (num / arr.length).toFixed(6);

  let pos = 0;
  let positives = 0;

  let _0s = 0;
  let zeros = 0;

  let neg = 0;
  let negatives = 0;

  arr.forEach(num => {
    if (num > 0) {
      pos++;
      positives = avg(pos);
    } else if (num < 0) {
      neg++;
      negatives = avg(neg);
    } else {
      _0s++;
      zeros = avg(_0s);
    }
  });
  console.log(positives);
  console.log(negatives);
  console.log(zeros);
}
