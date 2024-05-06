let display = document.querySelector("p");
let result = 0;

let buttons = document.querySelectorAll("button");

let firstNumber = 0;
let operator;
let secondNumber = 0;

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    const buttonPressed = Number(button.id);
    firstNumber = firstNumber * 10 + buttonPressed;
    display.textContent = firstNumber;
    console.log(firstNumber);
    if (
      buttonPressed === "-" ||
      buttonPressed === "+" ||
      buttonPressed === "/" ||
      buttonPressed === "*"
    ) {
      operator = buttonPressed;
      return;
    }
    //secondNumber = firstNumber * 10 + buttonPressed;
    //console.log(secondNumber);
    //  display.textContent = secondNumber;
    if (buttonPressed === "=") {
    }
    if (buttonPressed === "CE") {
    }
  })
);

function add(result, b) {
  return result + b;
}

function subtract(result, b) {
  return result - b;
}

function multiply(result, b) {
  return result * b;
}

function divide(result, b) {
  return result / b;
}

let b;
let op;
//function operate (a,b, op, function) {

//  if (op === "-") { function subtract(a,b)};
//   else (op === "+") { function subtract(a,b)
//}
