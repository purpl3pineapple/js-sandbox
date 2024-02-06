window.addEventListener("load", () => {
  const userInput = $("#input");
  const result = $("#result");
  const clearBtn = $("#clear");
  const ops = ["/", "x", "+", "-"];

  const leadingZerosCheck = input => /(^0{2}|[/x+-]0{2})/.test(input);
  const mutipleDecimals = number =>
    number.split("").filter(digit => digit === ".").length > 1;

  const multipleDecimalNumberFound = numbers => numbers.some(mutipleDecimals);
  const getNumbers = input =>
    [...input.matchAll(/(\d(\.(?=\d+))?)+/g)].map(([match]) => match);

  const multiply = () => {
    ["+", "-"].forEach(op => console.log(getProducts(result.text(), op)));
  };

  const getTotal = input => {
    let temp;
    input
      .match(
        /^\d*((x|\/|\+|-)*\d(\.(?=\d+))?)+(x|\/|\+|-)+(\d(\.(?=\d+))?)+$/gi
      )
      //.map(([match]) => match)
      .forEach(match => {
        const product = match.split(/(x|\/|\+|-)/gi).map(num => num);
        console.log({ match, product });
        //while (product.length) {
        /* let current = product.shift();
          let op = product.shift();
          let next = product.shift();

          console.log({ current, op, next }); */
        /* if (isNaN(parseFloat(next))) {
            switch (next) {
              case "X":
                console.log({ curr: temp, next, current });
                temp *= parseFloat(current);
                break;

              case "/":
                temp /= parseFloat(current);
                break;

              case "+":
                temp += parseFloat(current);
                break;

              case "-":
                temp -= parseFloat(current);
                break;
            }
          }

          console.log({ temp, next, current }); */
        //}
      });

    return temp;
  };

  const getProducts = (input, op) => {
    const regex =
      /(x|\/|\+|-)?(\d(\.(?=\d+))?)+((x|\/|\+|-)+(\d(\.(?=\d+))?))*/gi;
    /* switch (op) {
      case "x":
        regex = /(x)*(\d(\.(?=\d+))?)+(x)+(\d(\.(?=\d+))?)+/gi;
        break;

      case "/":
        regex = /(\/)*(\d(\.(?=\d+))?)+(\/)+(\d(\.(?=\d+))?)+/g;
        break;

      case "+":
        regex = /(\+)*(\d(\.(?=\d+))?)+(\+)+(\d(\.(?=\d+))?)+/g;
        break;

      case "-":
        regex = /(-)*(\d(\.(?=\d+))?)+(-)+(\d(\.(?=\d+))?)+/g;
        break;
    } */
    console.log({ matcher: input.match(regex) });
    if (input.match(regex)) {
      input.match(regex).forEach(match => {
        console.log({ match });
        const products = match
          //.split(/(x|\/|\+|-)/i)
          .match(/(-)?(\d(\.(\d)+)+)/g)
          .map(num => parseFloat(num));
        /* .map(([num, op, multiple]) => [
            parseFloat(num),
            op,
            parseFloat(multiple),
          ]); */
        //.filter(num => /\d/.test(num) === true)
        /* .reduce(
            (a, b) => {
              switch (op) {
                case "x":
                  return a * b;

                case "/":
                  return a / b;

                case "+":
                  return a + b;

                case "-":
                  return a - b;
              }
            },
            op === "x" || op === "/" ? 1 : 0
          ); */

        //input = input.replace(match, product);
        console.log({ products });
        input = products;
      });
    }

    return input;
  };

  const multiplication = input => getProducts(input, "x");
  const division = input => getProducts(input, "/");

  const updateUserInput = e => {
    let currentText = result.text();
    const clicked = e.target.innerText;
    const numbersForOperation = getNumbers(currentText);
    const multiDecimalFound = multipleDecimalNumberFound(numbersForOperation);

    if (multiDecimalFound) {
      result.text(currentText.substring(0, currentText.lastIndexOf(".")));
    } else if (leadingZerosCheck(currentText)) {
      result.text(currentText.substring(0, currentText.lastIndexOf("0")));
    } else {
      result.text(currentText === "0" ? clicked : currentText + clicked);
    }

    if (!ops.includes(clicked.toLowerCase())) {
      userInput.text(clicked);
    }
  };

  const calculate = equation => {
    //const sequation = multiplication(equation);
    //equation = division(equation);
    getTotal(equation);
    console.log({ equation });
  };

  const clearInput = () => {
    userInput.text(0);
    result.text("");
  };

  $(".num").on("click", updateUserInput);

  $("#multiply").on("click", multiply);

  $(".op").on("click", e => {
    updateUserInput(e);

    /* const multiplication = getProducts(result.text(), "x");
    const division = getProducts(result.text(), "/");
    const addition = getProducts(result.text(), "+");
    const subtraction = getProducts(result.text(), "-");

    console.table({ multiplication, division, addition, subtraction }); */
  });
  $("#equals").on("click", () => calculate(result.text()));
  clearBtn.click(clearInput);
});
