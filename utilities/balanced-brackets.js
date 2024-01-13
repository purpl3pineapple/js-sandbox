function isBalanced(str) {
  const stack = [];
  let balanced = true;

  for (let t = 0; t < str.length; t++) {
    switch (str[t]) {
      case "{":
      case "(":
      case "[":
        stack.push(str[t]);
        break;

      case "}":
        if (stack.includes("{")) stack.pop();
        else balanced = false;
        break;

      case ")":
        if (stack.includes("(")) stack.pop();
        else balanced = false;
        break;

      case "]":
        if (stack.includes("[")) stack.pop();
        else balanced = false;
        break;
    }
  }

  return balanced && stack.length === 0 ? "YES" : "NO";
}
