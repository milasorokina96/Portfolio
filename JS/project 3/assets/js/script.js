const carsAmount = getNumber('Enter the amount of cars you need', 1);
const cars = [];

for(let i = 0; i < carsAmount; i++) {
	
	const typeOfTransport = getText("Enter the type of transport you want");
	const typeOfBody = getText("Enter the type of car's body you want");
	const brandCountry = getText("Enter the country of the car");
	const releaseYear = getYear("Enter the release year of the car (2000-2020)", 2000, 2020);
	const mark = getText("Enter the mark of the car");
	const model = getText("Enter the model of the car"); 
	cars.push(new Car(typeOfTransport, typeOfBody, brandCountry, releaseYear, mark, model));
	
	for (let j = 0; j < 1; j++) {
		const currentCar = cars[i];
		const name = getText("Enter name of owner");
		const age = getNumber("Enter age of owner (18+)", 18, 100);
		
		const currentPerson = new Human(name, age);
		currentCar.addOwner(currentPerson);
		const currentOwner = currentPerson.creatBioInfo();
		currentCar.showInfo(currentOwner);
	}
}
console.log(cars);