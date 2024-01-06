const validateEmail = email =>
  /^(?:\w+|\.|-|_)+@(?:\w+)+\.[a-zA-Z]{3}$/gi.test(email);
