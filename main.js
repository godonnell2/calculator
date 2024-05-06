let display = document.querySelector("p");
let result;

let buttons = document.querySelectorAll("button");

let firstNumber = 0;
let operator = "";
let secondNumber = 0;

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    const buttonPressed = button.id;
    if (
      buttonPressed === "-" ||
      buttonPressed === "+" ||
      buttonPressed === "/" ||
      buttonPressed === "*"
    ) {
      operator = button.id;
      display.textContent = operator;
      console.log(operator);
      firstNumber = secondNumber;
      secondNumber = 0;
      return;
    } else if (buttonPressed === "=") {
      if (operator === "+") {
        result = add(firstNumber, secondNumber);
      } else if (operator === "-") {
        result = subtract(firstNumber, secondNumber);
      } else if (operator === "*") {
        result = multiply(firstNumber, secondNumber);
      } else if (operator === "/") {
        result = divide(firstNumber, secondNumber);
      }
      display.textContent = result;
    } else if (buttonPressed === "CE") {
    } else {
      let buttonPressedNumber = Number(buttonPressed);
      secondNumber = secondNumber * 10 + buttonPressedNumber;
      display.textContent = secondNumber;
      console.log(secondNumber);
    }
    //secondNumber = firstNumber * 10 + buttonPressedNumber;
    //console.log(secondNumber);
    //  display.textContent = secondNumber;
  })
);

function add(a, b) {
  result = a + b;
  return result;
}

function subtract(a, b) {
  result = a - b;
  return result;
}

function multiply(a, b) {
  result = a * b;
  return result;
}

function divide(a, b) {
  result = a / b;
  return result;
}
