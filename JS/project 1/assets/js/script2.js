let firstDistanceKm = prompt("2. Enter distance..");
let secondDistanceFt = prompt("2. Enter distance..");

firstDistanceM = 1000 * firstDistanceKm;
secondDistanceM = 0.305 * secondDistanceFt;

if (firstDistanceM > secondDistanceM) {
    alert("secondDistance is shorter")
} else if (secondDistanceM > firstDistanceM) {
    alert("firstDistance is shorter")
} else {
    alert("Distances are same")
}
