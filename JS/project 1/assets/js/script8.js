let num1 = prompt("8. Enter a six digit number");
let num2 = prompt("8. Enter a six digit number");
num1 = +num1;
num2 = +num2;

let num1Digit1 = parseInt(num1 / 100000);
let num1Digit2 = parseInt(num1 % 100000 / 10000);
let num1Digit3 = parseInt(num1 % 10000 / 1000);
let num1Digit4 = parseInt(num1 % 1000 / 100);
let num1Digit5 = parseInt(num1 % 100 / 10);
let num1Digit6 = parseInt(num1 % 10);

let num2Digit1 = parseInt(num2 / 100000);
let num2Digit2 = parseInt(num2 % 100000 / 10000);
let num2Digit3 = parseInt(num2 % 10000 / 1000);
let num2Digit4 = parseInt(num2 % 1000 / 100);
let num2Digit5 = parseInt(num2 % 100 / 10);
let num2Digit6 = parseInt(num2 % 10);

if (num1Digit1 == num2Digit6 && 
	num1Digit2 == num2Digit5 && 
	num1Digit3 == num2Digit4 && 
	num1Digit4 == num2Digit3 && 
	num1Digit5 == num2Digit2 && 
	num1Digit6 == num2Digit1) {
    alert ("The first six-digit number is mirrored to the second")
} else {
	alert ("The first six-digit number isn't mirrored to the second") 
}
