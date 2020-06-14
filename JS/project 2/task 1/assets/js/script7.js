document.write("<b>Task 7. </b>");
let sumEven = 0;

for (let i = 30; i <= 80; i++){
	if(i % 2 === 0) {
		sumEven += i;
	}
}

document.write("Sum of only even numbers from 30 to 80 is " + sumEven + "</br>");