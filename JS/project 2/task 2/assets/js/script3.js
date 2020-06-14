let N = parseInt(prompt("Task 3. Enter a number.."));
document.write("<b>Task 3. </b></br>");
let square;

for (let i = 1; i <= 100; i++){
	square = i**2;
	if (square <= N){
		document.write(i + " (" + i + "² =" + square + ")</br>");
	} else {
		break;
	}
}
