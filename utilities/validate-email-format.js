const validateEmail = email =>
  /^(?:\w+|\.|-|_)+@(?:\w+)+\.[a-zA-Z]{2,4}$/gi.test(email);

export default validateEmail;
