document.write("<b>Task 9. </b>");
let num = parseInt(prompt("Task 9. Enter a number.."));
document.write("All divisors of number " + num + ": ");
let sumDivEven = 0;
let numDivEven = 0;

for (let i = 1;; i++){

	if (num % i === 0) {
		if (i < num) {
        	document.write(i + ", ");
    	} else {
        	document.write(i + "</br>")
   	 	}
   	 	if(i % 2 === 0) {
			sumDivEven += i;

			if (num % i === 0){
				numDivEven = numDivEven + 1;
			}
		}
	}
	if (num === i) break;
}

document.write("Number of its even divisors is " + numDivEven + ".</br>");
document.write("Sum of all even divisors is " + sumDivEven + ".</br>");
