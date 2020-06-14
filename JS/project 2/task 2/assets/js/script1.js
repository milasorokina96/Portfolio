document.write("<b>Task 1 is in console</b> </br>");
let log = "";

for (let i = 20; i <= 30; i+=0.5){
	if (i < 30) {
		log += i + ", ";
	} else {
		log += i + ".";		
	}
}
console.log(log);
