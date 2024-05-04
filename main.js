let result = 0;
let display = document.querySelector("p");
console.log(display);
display.textContent = result;

let buttons = document.querySelectorAll("button");

//function storeNumber() {
// let btn = buttons.forEach((button) => button.id);
// console.log(btn);
//display.textContent = btn;
//}

const buttonPressed = (e) => {
  console.log(e.target.id); // Get ID of Clicked Element
};

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

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
