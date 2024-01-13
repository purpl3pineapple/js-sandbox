const arraySum = arr => (arr.length === 0 ? 0 : arr.shift() + arraySum(arr));
