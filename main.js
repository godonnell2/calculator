let display = document.querySelector("p");
let result = 0;

let buttons = document.querySelectorAll("button");

let newNumber = 0;

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    const buttonPressed = Number(button.id);
    newNumber = newNumber * 10 + buttonPressed;
    display.textContent = newNumber;
    console.log(newNumber);
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
