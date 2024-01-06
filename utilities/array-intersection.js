const arrayIntersection = (arr1, arr2) => [
  ...new Set([...arr1.filter(item => arr2.includes(item))]),
];
