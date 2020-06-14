let num = parseInt(prompt("Task 4. Enter a number.."));
document.write("<b>Task 4. </b>");

for (let i = 2;;i++){
	if (num === 0) {
		document.write("Your number is 0! It is not a natural number, so it don't refers to simple or compound numbers.</br>");
	} else if (num === 1) {
		document.write("Your number is 1! It don't refers to simple or compound numbers.</br>");
	} else {
		if (num === i){
			document.write(num + " is a simple number.</br>");
		} else if (num % i !== 0) {
			continue;
		} else {
			document.write(num + " is a compound number.</br>");
		}
	}
break;
}

