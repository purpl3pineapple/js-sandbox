const sumOfEvenSquares = arr =>
  arr
    .filter(num => num % 2 === 0)
    .map(even => even ** 2)
    .reduce((sum, current) => sum + current, 0);
