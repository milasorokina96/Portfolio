document.write("<b>Task 2. </b> Squares of numbers from 10 to 20: ");

for (let i = 10; i <= 20; i++){
    let squares = i**2;
    if (i < 20) {
        document.write(squares + ", ")
    } else {
        document.write(squares + "</br>")
    }
}