document.write("<b>Task 2. </b></br>");
let UAH = 24;

for (let i = 10; i <= 100; i+=10){
	let $ = i * UAH;
		
	if (i < 100) {
		document.write(i + "*" + UAH + "=" + $ + "; </br>");
	} else {
		document.write(i + "*" + UAH + "=" + $ + ". </br>")
	}
} 