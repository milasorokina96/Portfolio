document.write("<b>Task 3. </b> Multiplication Table by 7: ");

for (let i = 1; i <= 10; i++){
    let mult = 7 * i;

    if (i < 10) {
        document.write( i + "*7=" + mult + "; ")
    } else {
        document.write(i + "*7=" + mult + "</br>")
    }
}