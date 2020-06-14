document.write("<b>Task 6. </b>");
let sumForAverage = 0;
let i = 1;

for (; i <= 500; i++){
	sumForAverage += i;
}

let average = sumForAverage/(i - 1);
document.write("Average of all numbers from 1 to 500 is " + average + ".</br>");