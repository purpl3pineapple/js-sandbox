const numberForm = document.getElementById("validate-number-form");
const phoneNumber = document.getElementById("user-input");
const validateBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const isValid = () =>
  /^(1)?(?:\(\d{3}\)|\s\(\d{3}\)|\s\d{3}|\d{3})(?:|-|\s)?\d{3}(?:-|\s)?\d{4}$/.test(
    phoneNumber.value
  );

const clearResults = () => (result.innerHTML = "");

const validation = () => {
  const validationMsg = document.createElement("p");
  const validationMsgText = document.createTextNode(
    isValid()
      ? "Valid US number: " + phoneNumber.value
      : "Invalid US number: " + phoneNumber.value
  );

  validationMsg.appendChild(validationMsgText);

  return validationMsg;
};

const validateNumber = () => {
  result.innerHTML = "";
  if (!phoneNumber.value) {
    alert("Please provide a phone number");
  } else {
    result.appendChild(validation());
  }
};

clearBtn.addEventListener("click", clearResults);
validateBtn.addEventListener("click", validateNumber);
