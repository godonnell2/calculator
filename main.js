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
      console.log(operator);
      secondNumber = firstNumber;
      firstNumber = 0;
      return;
    } else if (buttonPressed === "=") {
      if (operator === "+") {
        result = add(firstNumber, secondNumber);
        display.textContent = result;
        return;
      }
    } else if (buttonPressed === "CE") {
    } else {
      let buttonPressedNumber = Number(buttonPressed);
      firstNumber = firstNumber * 10 + buttonPressedNumber;
      // display.textContent = firstNumber;
      console.log(firstNumber);
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

function subtract(result, b) {
  result = a - b;
  return result;
}

function multiply(result, b) {
  result = a * b;
  return result;
}

function divide(result, b) {
  result = a / b;
  return result;
}
