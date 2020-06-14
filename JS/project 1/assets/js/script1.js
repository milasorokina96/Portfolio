let firstNumber = prompt("1. Enter a number..");
let secondNumber = prompt("1. Enter a number..");
firstNumber = +firstNumber;
secondNumber = +secondNumber;

if (firstNumber > secondNumber) {
    alert("First number is bigger than second number")
} else if (firstNumber < secondNumber) {
    alert("Second number is bigger than first number")
} else {
    alert("Numbers are same")
}