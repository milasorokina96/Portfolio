let num = prompt("6. Enter a three-digit number");
num = +num;

let firstDigit = parseInt(num / 100);
let secondDigit = parseInt(num % 100 / 10);
let thirdDigit = parseInt(num % 10);

let sumOfDigits = firstDigit + secondDigit + thirdDigit;
let productOfDigits = firstDigit * secondDigit * thirdDigit;

if (sumOfDigits % 2 == 0) {
    alert ("The sum of digits is even")
} else {
    alert ("The sum of digits is odd")
}

if (sumOfDigits % 5 == 0) {
    alert ("The sum of digits is a multiple of 5")
} else {
    alert ("The sum of digits isn't a multiple of 5")
}

if (productOfDigits > 100) {
    alert ("The product of digits is more than 100")
} else if (productOfDigits < 100){
    alert ("The product of digits is less than 100")
} else {
	alert ("The product of digits is less than 100")
}