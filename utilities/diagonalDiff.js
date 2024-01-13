function diagonalDifference(arr) {
  let leftToRight = 0;
  let rightToLeft = 0;

  for (let left = 0; left < arr.length; left++) {
    let currentLeft = null;
    currentLeft = arr[left][left];
    leftToRight += currentLeft;
  }

  for (let right = arr.length - 1; right >= 0; right--) {
    let currentRight = null;

    for (let r = right; r < arr.length; r++) {
      currentRight = arr[right][r - right];
    }
    rightToLeft += currentRight;
  }

  return Math.abs(leftToRight - rightToLeft);
}
