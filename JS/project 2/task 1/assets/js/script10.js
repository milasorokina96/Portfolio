document.write("<b>Task 10. </b> Multiplication Table from 1 to 10: </br>");

for (let i = 1; i <= 10; i++){
	for (let j = 1; j <= 9; j++){
		let multTabl = i*j;
		if (j < 9){
			document.write(i + "*" + j + "=" + multTabl + ";</br>");
		} else {
			document.write(i + "*" + j + "=" + multTabl + ".</br></br>");
		}
	}
}