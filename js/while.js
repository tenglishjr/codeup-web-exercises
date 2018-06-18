"use strict";


// Problems 1 & 2

var x = 2;

while (x < 100000) {
    console.log(x);
    x *= 2;
}


// Problem 3

var allCones = Math.floor(Math.random() * 50) + 50;
console.log('I have ' + allCones + ' cones to sell, total!');

do {

    var purchasedCones = Math.floor(Math.random() * 5) + 1;

    if (purchasedCones < allCones) {
        allCones -= purchasedCones;
        console.log(purchasedCones + ' cones sold...' + allCones + ' cones left!');
    } else if (purchasedCones > allCones) {
        console.log('Cannot sell you ' + purchasedCones + ' cones...I only have ' + allCones + ' left!');
    } else {
        console.log(purchasedCones + ' cones sold...Yay! I sold them all!');
    }

} while (allCones > 0);