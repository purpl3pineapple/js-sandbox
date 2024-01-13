const validatePassword = password =>
  [
    password.length >= 8,
    password.split("").some(char => /[a-z]+/.test(char) === true),
    password.split("").some(char => /[A-Z]+/.test(char) === true),
    password.split("").some(char => /\d+/.test(char) === true),
  ].every(check => check === true);
