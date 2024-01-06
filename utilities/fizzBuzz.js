function fizzBuzzArray(num) {
  const fizzy = [];

  while (num > 0) {
    if (num % 3 === 0 && num % 5 === 0) {
      fizzy.push("FizzBuzz");
    } else if (num % 5 === 0) {
      fizzy.push("Buzz");
    } else if (num % 3 === 0) {
      fizzy.push("Fizz");
    } else {
      fizzy.push(num);
    }

    num--;
  }

  return fizzy.reverse();
}
