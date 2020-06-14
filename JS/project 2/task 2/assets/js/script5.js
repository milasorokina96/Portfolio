let number = parseInt(prompt("Task 5. Enter a number.."));
document.write("<b>Task 5. </b>");

for (let i = 1;; i++){
	numberToPower = 3**i;
	
	if (number > numberToPower) {
		continue;
	} else if (number === numberToPower){	
		document.write(number + " - this number can be obtained by raising the number 3 to the power of " + i + ".</br");
	} else {
		document.write(number + " - this number can't be obtained by raising the number 3 to the power of any number.</br>");
	}
break;
}