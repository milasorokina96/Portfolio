let numb = prompt("7. Enter a three-digit number");
numb = +numb;

let numbDigit1 = parseInt(numb / 100);
let numbDigit2 = parseInt(numb % 100 / 10);
let numbDigit3 = parseInt(numb % 10);

if (numbDigit1 == numbDigit2 == numbDigit3) {
    alert ("All digits are same")
} else if (numbDigit1 == numbDigit2 != numbDigit3) {
    alert ("First and second digits are same")
} else if (numbDigit1 != numbDigit2 == numbDigit3) { 
    alert ("Second and third digits are same")
} else if (numbDigit1 == numbDigit3 != numbDigit2) { 
    alert ("First and third digits are same")
} else {
	alert ("All digits are different") 
}





