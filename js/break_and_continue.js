"use strict";


// 'Break and Continue' Problem


function printOddNumbers() {

    var num;

    while (true) {
        num = prompt('Enter an odd number between 1 & 50:');
        if (num >= 1 && num < 50 && num % 2 !== 0) {
            break;
        } else {
            alert('INVALID NUMBER. Try again.');
        }
    }

    console.log('Number to skip is: ' + num);
    console.log(' ');


    for (var i = 1; i < 50; i += 2) {
        if (i === parseInt(num)) {
            console.log('Yikes! Skipping number: ' + i);
            continue;
        }
        console.log('Here is an odd number: ' + i);
    }
}

printOddNumbers();