'use strict';
function showClock() {
    let clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    hours = showTime(hours);
    minutes = showTime(minutes);
    seconds = showTime(seconds);
    let clockInterval = setTimeout(showClock, 1000);
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
}

function showTime(time) {
    let first = parseInt(time / 10);
    let second = parseInt(time % 10);
    for (let i = 0; i < 10; i++) {
        if (i === first) {
            first = '<img src="./assets/img/' + i + '.jpg">';
        }
        if (i === second) {
            second = '<img src="./assets/img/' + i + '.jpg">';
        }  
    }
    return  time = first + second;
}

