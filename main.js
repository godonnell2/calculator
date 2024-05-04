let result = 0;
let display = document.querySelector("p");
console.log(display);

let buttons = document.querySelectorAll("button");

let buttonPressed;

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    buttonPressed = button.id;
    display.textContent = buttonPressed;
    return buttonPressed;
  })
);

display.textContent = buttonPressed;

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
