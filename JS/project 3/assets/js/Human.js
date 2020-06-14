function Human(name, age) {
	this.name = name;
	this.age = age;
	
	this.creatBioInfo = function(){
		let bioInfo;
		return bioInfo = this.name + ", " + this.age + " y.o.";
	}
	
	this.showBio = function(){
		document.write("Name: " + this.name + ", Age: " + this.age);
	}
}