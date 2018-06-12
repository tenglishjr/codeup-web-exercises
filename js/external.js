"use strict";

console.log('Hello from External Javascript!');

// ==========----------==========

alert('Welcome to my website!');

var userFavColorAnswer = prompt('What is your favorite color?');

alert('Awesome, ' + userFavColorAnswer + ' is my favorite color, too! :D ');


// QUESTION 3 EXERCISES FROM PREVIOUS LESSON

// A)

var littleMermaidDaysRented = prompt('How many days have you rented \'The Little Mermaid\'?');
var brotherBearDaysRented = prompt('How many days have you rented \'Brother Bear\'?');
var herculesDaysRented = prompt('How many days have you rented \'Hercules\'?');

var totalCost = littleMermaidDaysRented * 3;
totalCost += brotherBearDaysRented * 3;
totalCost += herculesDaysRented * 3;

alert('Thanks!\n\nAt $3.00/day, your total should come out to $' + totalCost + '.00. \n\n Enjoy your movies!');


// B)

alert('Now, let\'s calculate how much money you should expect at the end of this week...');

var googleHourlyRate = parseInt(prompt('How much does Google pay per hour?'));
var googleTotalHours = parseInt(prompt('How many hours have you worked for Google this week?'));

var amazonHourlyRate = parseInt(prompt('Great!\nHow much does Amazon pay per hour?'));
var amazonTotalHours = parseInt(prompt('How many hours have you worked for Amazon this week?'));

var facebookHourlyRate = parseInt(prompt('Cha-ching!\nHow much does Facebook pay per hour?'));
var facebookTotalHours = parseInt(prompt('How many hours have you worked for Facebook this week?'));

var totalWeeklyPay = googleHourlyRate * googleTotalHours;
totalWeeklyPay += amazonHourlyRate * amazonTotalHours;
totalWeeklyPay += facebookHourlyRate * facebookTotalHours;

alert('Thanks for answering.\n\n\tPress okay to see how many fat stacks you should expect to receive this week!');

alert('Your hard work this week will yield you a hefty payment of:\n\n$' + totalWeeklyPay + '.00.\nJACKPOT.');


// C)

alert('Welcome to \"Can I enroll in this class\"!\n\nGet ready to answer some questions...');

var studentEnrollmentEligibility; // Boolean
var className = prompt('What is the name of this class?'); // Just for funskies
var classCapacity = parseInt(prompt('How many students are allowed into this class, per semester?'));
var classSize = parseInt(prompt('Okay.\n\nHow many students are currently enrolled in this class?'));
var noScheduleConflict = confirm('Great! Now, one final question...\n\nOur records show that ' + className + ' takes place on Tuesdays at 7:00PM.\n\nDo you currently have another class during this day and time?\n\n\t\tPress \'Cancel\' to answer \'Yes\'.');

studentEnrollmentEligibility = (classSize < classCapacity) && noScheduleConflict;

if (studentEnrollmentEligibility === true) {
    alert('Based on your answers...\n\nCongratulations! You are eligible to enroll in ' + className + '! GO FOR IT!');
} else {
    alert('Based on your answers...\n\nWe\'re sorry, but you are not eligible to enroll in ' + className + ' at this time. Please try again at a later date.');
}


// D)

confirm('Want to utilize the discount for ShopMart? Answer a few short questions to determine eligibility!');

var productDiscountEligibility;
var numberOfItemsMin = 3;
var numberOfItemsInCart = parseInt(prompt('ShopMart requires a minimum of ' + numberOfItemsMin + ' items to use this discount.\n\nHow many items are you purchasing today?'));
var isPremiumMember = confirm('Are you currently a Premium shopper at ShopMart?');

productDiscountEligibility = (numberOfItemsInCart >= numberOfItemsMin) || isPremiumMember;

if (productDiscountEligibility === true) {
    alert('Based on your responses...\n\nHooray, you are eligible for the ShopMart discount!');
} else {
    alert('Based on your responses...\n\nWe\'re sorry, you do not qualify for the ShopMart discount.');
}


