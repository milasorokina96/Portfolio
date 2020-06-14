let doubleNum = prompt("5. Enter a double digit number");
doubleNum = +doubleNum;

let doubleNumDigit1 = parseInt(doubleNum / 10);
let doubleNumDigit2 = doubleNum % 10;

if (doubleNumDigit1 > doubleNumDigit2) {
    alert("First digit is bigger")
} else if (doubleNumDigit2 > doubleNumDigit1) {
    alert("Second digit is bigger")
} else {
    alert ("Digits are same")
}