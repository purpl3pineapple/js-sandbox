const power = (num, exp) => (exp === 0 ? 1 : num * power(num, exp - 1));
