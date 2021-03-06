"use strict";

(function (){

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return 'Hello, ' + name;
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("TJ English");
    console.log(helloMessage);

    /**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "TJ English";

// console.log(sayHello(myName));



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(number) {
    console.log('Random number: ' + number);
    return (number === 2);
}

console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(percent, billTotal) {
    percent = parseFloat(percent) / 100.0;
    billTotal = parseFloat(billTotal.replace('$', ''));
    return (percent * billTotal).toFixed(2);
}

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

alert ('The amount you will tip equals:\n\n$' + calculateTip(prompt('Enter percentage you would like to tip:'), prompt('Enter the total amount of your bill:')));

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(initialPrice, discountPercent) {
    initialPrice = parseFloat(initialPrice.replace('$', ''));
    discountPercent = parseFloat(discountPercent) / 100.0;
    var discountAmount = initialPrice * discountPercent;
    return (initialPrice - discountAmount).toFixed(2);
}

alert('The new price (with discount applied) equals:\n\n$' + applyDiscount(prompt('What is the regular price of the item?'), prompt('What percentage is this item discounted?')));

// ==========================================BONUS EXERCISES===========================================


// ================ SIMPLE FUNCTION DRILLS

// 1) Make a function called returnTwo() that returns the number 2 when called
function returnTwo() {
    return 2;
}
// console.log(returnTwo());



// 2) Make a function called returnName() that returns the string of your name
function returnName() {
    return "TJ English";
}
// console.log(returnName());



// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
function addThree(number) {
    return (number + 3);
}
// console.log(addThree(5));



// 4) Make a function called sayString() which returns the string input passed in.
function sayString(stringInput) {
    return stringInput;
}
// console.log(sayString("What's up!"));



// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
function sayHowdy() {
    console.log("Howdy!");
}
// sayHowdy();






// ================ CHALLENGING FUNCTION DRILLS




// Write a function called `identity(input)` that takes in an argument called input and returns that input.

function identity(input) {
    return input;
}
// console.log(identity('Twelve'));




// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomNumber(3, 199));



// Write a function called `first(input)` that returns the first character in the provided string.

function first(input) {
    return input.charAt(0);
}
console.log(first('Antidisestablishmentarianism'));



// Write a fuction called `last(input)` that returns the last character of a string

function last(input) {
    var lengthInput = input.length;
    var lastCharOfInput = input.charAt(lengthInput - 1);
    return lastCharOfInput;
}
// console.log(last('Rally'));




// Write a function called `rest(input)` that returns everything but the first character of a string.

function rest(input) {
    return input.substring(1);
}
console.log(rest('Antidisestablishmentarianism'));





// Write a function called `reverse(input)` that takes a string and returns it reversed.

/** This is probably not the easiest way to achieve the desired result, however I wanted some practice with 'for loops'.    **/

function reverse(input) {
    var i, reverseInput = '';
    for (i = input.length; i >= 0; i--) {
        reverseInput += input.charAt(i);
    }
    return reverseInput;
}
console.log(reverse('How much wood could a woodchuck chuck if a woodchuck could chuck wood?'));





// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.

function isNumeric(input) {
    return !isNaN(input);
}
// console.log(isNumeric('148'));





// Write a function called `count(input)` that takes in a string and returns the number of characters.

function count(input) {
    return input.length;
}
// console.log(count('Antidisestablishmentarianism'));





// Write a function called `add(a, b)` that returns the sum of a and b

function add(a, b) {
    return a + b;
}
console.log(add(5, 8));





// Write a function called `subtract(a, b)` that return the difference between the two inputs.

function subtract(a, b) {
    return a - b;
}
console.log(subtract(15, 4));





// Write `multiply(a, b)` function that returns the product

function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 9));






// Write a divide(numerator, denominator) function that returns a divided by b

function divide(numerator, denominator) {
    return numerator / denominator;
}
console.log(divide(32, 8));





// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`

function remainder(number, divisor) {
    return number % divisor;
}
console.log(remainder(34, 8));




// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.

function square(a) {
    return a * a;
}
console.log(square(11));




/** # Super Duper Gold-Star Bonus  **/

// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators

function sumOfSquares(a, b) {
    return add(square(a), square(b));
}
console.log(sumOfSquares(4, 5));





// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.

function doMath(operator, a, b) {
    return operator(a, b);
}
console.log(doMath(multiply, 5, 6));


})();