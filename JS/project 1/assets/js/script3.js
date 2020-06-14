let a = prompt("3. Enter a number");
let b = prompt("3. Enter a number");

a = +a;
b = +b;

if (a % b === 0) {
    alert("b is a divisor")
} else {
    alert("b isn't a divisor")
}

if (b % a === 0) {
    alert("a is a divisor")
} else {
    alert("a isn't a divisor")
}