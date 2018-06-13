"use strict";

console.log('Hello from External Javascript!');

// ==========----------==========

alert('Welcome to my website!');

var userFavColorAnswer = prompt('What is your favorite color?');

alert('Awesome, ' + userFavColorAnswer + ' is my favorite color, too! :D ');


// 'QUESTION 3' EXERCISES FROM PREVIOUS LESSON

// A)

var dailyRentalRate = prompt('What is the daily rental rate?');
var littleMermaidDaysRented = prompt('How many days have you rented \'The Little Mermaid\'?');
var brotherBearDaysRented = prompt('How many days have you rented \'Brother Bear\'?');
var herculesDaysRented = prompt('How many days have you rented \'Hercules\'?');

var totalCost = parseInt(littleMermaidDaysRented) * parseInt(dailyRentalRate);
totalCost += parseInt(brotherBearDaysRented) * parseInt(dailyRentalRate);
totalCost += parseInt(herculesDaysRented) * parseInt(dailyRentalRate);

alert('Thanks!\n\nAt $3.00/day, your total should come out to $' + totalCost.toFixed(2) + '. \n\n Enjoy your movies!');


// B)

alert('Now, let\'s calculate how much money you should expect at the end of this week...');

var googleHourlyRate = prompt('What does Google pay per hour?');
var googleTotalHours = prompt('How many hours have you worked for Google this week?');

var amazonHourlyRate = prompt('What does Amazon pay per hour?');
var amazonTotalHours = prompt('How many hours have you worked for Amazon this week?');

var facebookHourlyRate = prompt('What does Facebook pay per hour?');
var facebookTotalHours = prompt('How many hours have you worked for Facebook this week?');

var totalWeeklyPay = parseInt(googleHourlyRate) * parseInt(googleTotalHours);
totalWeeklyPay += parseInt(amazonHourlyRate) * parseInt(amazonTotalHours);
totalWeeklyPay += parseInt(facebookHourlyRate) * parseInt(facebookTotalHours);

alert('Your hard work this week will yield you a hefty payment of:\n\n$' + totalWeeklyPay.toFixed(2) + '.\n\nJACKPOT.');


// C)

alert('Welcome to \"Can I enroll in this class\"!\n\nGet ready to answer some questions...');

var studentEnrollmentEligibility; // Boolean
var className = prompt('What is the name of this class?'); // Just for funskies
var classCapacity = prompt('How many students are allowed into this class, per semester?');
var classSize = prompt('Okay.\n\nHow many students are currently enrolled in this class?');
var noScheduleConflict = confirm('Great! Now, one final question...\n\nOur records show that ' + className + ' takes place on Tuesdays at 7:00PM.\n\nDo you currently have another class during this day and time?\n\n\t\tPress \'Cancel\' to answer \'Yes\'.');

studentEnrollmentEligibility = (parseInt(classSize) < parseInt(classCapacity)) && noScheduleConflict;

if (studentEnrollmentEligibility === true) {
    alert('Based on your answers...\n\nCongratulations! You are eligible to enroll in ' + className + '! GO FOR IT!');
} else {
    alert('Based on your answers...\n\nWe\'re sorry, but you are not eligible to enroll in ' + className + ' at this time. Please try again at a later date.');
}


// D)

var confirmation = confirm('Want to utilize the discount for ShopMart? Answer a few short questions to determine eligibility!');

if (confirmation === true) {

    var productDiscountEligibility;
    var numberOfItemsMin = prompt('What is the minimum number of items ShopMart requires to purchase to qualify for the discount?');
    var numberOfItemsInCart = prompt('ShopMart requires a minimum of ' + parseInt(numberOfItemsMin) + ' items to use this discount.\n\nHow many items are you purchasing today?');
    var isPremiumMember = confirm('Are you currently a Premium shopper at ShopMart?');

    productDiscountEligibility = (parseInt(numberOfItemsInCart) >= parseInt(numberOfItemsMin)) || isPremiumMember;

    if (productDiscountEligibility === true) {
        alert('Based on your responses...\n\nHooray, you are eligible for the ShopMart discount!');
    } else {
        alert('Based on your responses...\n\nWe\'re sorry, you do not qualify for the ShopMart discount.');
    }

} else {

    alert('Aww, man....');

}


