let number = prompt("4. Enter a number");
number = +number;
let lastDigit = number % 10;

if (lastDigit % 2 == 0) {
    alert ("Number is even")
    alert(lastDigit)
} else {
    alert ("Number is odd")
    alert(lastDigit)
}