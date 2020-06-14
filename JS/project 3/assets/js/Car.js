function Car (typeOfTransport, typeOfBody, brandCountry, releaseYear, mark, model) {
	this.typeOfTransport = typeOfTransport;
	this.typeOfBody = typeOfBody;
	this.brandCountry = brandCountry;
	this.releaseYear = releaseYear;
	this.mark = mark;
	this.model = model;
	
	this.showInfo = function(owner) {
		document.write("Type of transport: " + this.typeOfTransport + "</br>Type of body: " + this.typeOfBody + "</br>The country of manufacture: " + this.brandCountry + "</br> Release Year: " + this.releaseYear + "</br> Mark: " + this.mark + "</br> Model: " + this.model + "</br> Owner: " + owner + "</br></br>");
	}

	this.addOwner = function(owner) {
		this.owner = owner;
	}
}
