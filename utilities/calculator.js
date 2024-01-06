function calculator(num1, num2, op) {
  switch (op) {
    default:
      throw new Error("Please use a valid operand...");
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;

    case "%":
      return num1 % num2;
  }
}
