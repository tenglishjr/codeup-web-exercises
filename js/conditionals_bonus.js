"use strict";

// Pre-Bonus Bonus Function

function invalidInputAlertMessage() {
    alert('INVALID INPUT. Try again.');
}


/** ***************************************************************************************** **/

// Bonus 1
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// - Catch any invalid inputs.
// - Write the logic using if/else ifs and then refactor using a switch case

function favoriteDay() {

    var output, validDay = false;

    do {
        var day = prompt('Enter your favorite day of the week:');
        day = day.toLowerCase();


        // if (day === 'monday') {
        //     output = 'Ugh, Monday\'s huh...';
        //     validDay = true;
        // } else if (day === 'tuesday') {
        //     output = 'Tuesdays? More like "Bruise-days"...';
        //     validDay = true;
        // } else if (day === 'wednesday') {
        //     output = 'HUMP DAYYeeeeee';
        //     validDay = true;
        // } else if (day === 'thursday') {
        //     output = 'You\'re so close to the weekend, I can\'t stand it!';
        //     validDay = true;
        // } else if (day === 'friday') {
        //     output = 'Party time!!';
        //     validDay = true;
        // } else if (day === 'saturday') {
        //     output = 'Aww yeah, Top Golf with the boys!';
        //     validDay = true;
        // } else if (day === 'sunday') {
        //     output = 'Get your church on!';
        //     validDay = true;
        // } else {
        //     invalidInputAlertMessage();
        // }


        switch (day) {

            case 'monday':
                output = 'Ugh, Monday\'s huh...';
                validDay = true;
                break;
            case 'tuesday':
                output = 'Tuesdays? More like "Bruise-days"...';
                validDay = true;
                break;
            case 'wednesday':
                output = 'HUMP DAYYeeeeee';
                validDay = true;
                break;
            case 'thursday':
                output = 'You\'re so close to the weekend, I can\'t stand it!';
                validDay = true;
                break;
            case 'friday':
                output = 'Party time!!';
                validDay = true;
                break;
            case 'saturday':
                output = 'Aww yeah, Top Golf with the boys!';
                validDay = true;
                break;
            case 'sunday':
                output = 'Get your church on!';
                validDay = true;
                break;
            default:
                invalidInputAlertMessage();
        }
    } while (validDay === false);
    return output;
}

// console.log(favoriteDay());

/** ***************************************************************************************** **/

//     Bonus 2
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator

function isNumber() {
    var userInput = prompt('Type something and I\'ll tell you if it is a number!\n\nEnter input:');
    alert('You entered: ' + userInput);

    // if (isNaN(userInput)) {
    //     return userInput + ' is not a number.';
    // } else {
    //     return userInput + ' is a number!';
    // }

    return (isNaN(userInput)) ? (userInput + ' is not a number.') : (userInput + ' is a number!');

}

// alert(isNumber());

/** ***************************************************************************************** **/

// Bonus 3
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months



function seasonMonths() {

    var validInput = false, month, output;

    do {
        var season = prompt('Enter a season:');
        season = season.toLowerCase();

        if (season === 'spring') {
            month = (prompt('This season occurs during the months of March, April, and May.\n\nChoose a month listed above:')).toLowerCase();
            if (month === 'march' || month === 'mar') {
                output = 'Spring break! Woop!';
                validInput = true;
            } else if (month === 'april' || month === 'apr') {
                output = 'April marks the beginning of baseball season! Hooray!';
                validInput = true;
            } else if (month === 'may') {
                output = 'May flowers, or however the saying goes.';
                validInput = true;
            } else {
                invalidInputAlertMessage();
            }
        } else if (season === 'summer') {
            month = (prompt('This season occurs during the months of June, July, and August.\n\nChoose a month listed above:')).toLowerCase();
            if (month === 'june' || month === 'jun') {
                output = 'Schooooooool\'s out...FOR...SUMMER';
                validInput = true;
            } else if (month === 'july' || month === 'jul') {
                output = 'Happy Independence Month! Go blow something up.';
                validInput = true;
            } else if (month === 'august' || month === 'aug') {
                output = 'Aw man...school again already? ::sad-face::';
                validInput = true;
            } else {
                invalidInputAlertMessage();
            }
        } else if (season === 'fall' || season === 'autumn') {
            month = (prompt('This season occurs during the months of September, October, and November.\n\nChoose a month listed above:')).toLowerCase();
            if (month === 'september' || month === 'sep') {
                output = 'I don\'t know much about September...sorry.';
                validInput = true;
            } else if (month === 'october' || month === 'oct') {
                output = ''
            }
        } else if (season === 'winter') {
            month = (prompt('This season occurs during the months of December, January, and February.\n\nChoose a month listed above:')).toLowerCase();
            if (month === 'december' || month === 'dec') {
                output = 'Merry Christmas! Enjoy the snow.';
                validInput = true;
            } else if (month === 'january' || month === 'jan') {
                output = 'Happy New Year! Go blow something up.';
                validInput = true;
            } else if (month === 'february' || month === 'feb') {
                output = 'Happy Valentines Day! You remembered, right..?';
                validInput = true;
            } else {
                invalidInputAlertMessage();
            }
        } else {
            invalidInputAlertMessage();
        }

    } while (validInput === false);

    return output;
}

// alert(seasonMonths());


/** ***************************************************************************************** **/

// GOLD STAR BONUS
// Create a distance unit conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.


// ============ CONVERSION FUNCTIONS ==============

function inchesToFeet(num) {
    return parseFloat(num) / 12;
}

function feetToMiles(num) {
    return parseFloat(num) / 5280;
}

function milesToLightYears(num) {
    return parseFloat(num) / 5878625373184;
}

function lightYearsToMiles(num) {
    return parseFloat(num) * 5878625373184;
}

function milesToFeet(num) {
    return parseFloat(num) * 5280;
}

function feetToInches(num) {
    return parseFloat(num) * 12;
}


// APP FUNCTION

function conversionCalculator(firstUnit, value, secondUnit) {

    var output;

        switch (firstUnit) {

            case 'inches':
                switch (secondUnit) {
                    case 'feet':
                        output = inchesToFeet(value);
                        break;
                    case 'miles':
                        output = feetToMiles(inchesToFeet(value));
                        break;
                    case 'lightyears':
                        output = milesToLightYears(feetToMiles(inchesToFeet(value)));
                        break;
                    default:
                        invalidInputAlertMessage();
                        output = false;
                        break;
                }
                break;
            case 'feet':
                switch (secondUnit) {
                    case 'inches':
                        output = feetToInches(value);
                        break;
                    case 'miles':
                        output = feetToMiles(value);
                        break;
                    case 'lightyears':
                        output = milesToLightYears(feetToMiles(value));
                        break;
                    default:
                        invalidInputAlertMessage();
                        output = false;
                        break;
                }
                break;
            case 'miles':
                switch (secondUnit) {
                    case 'inches':
                        output = feetToInches(milesToFeet(value));
                        break;
                    case 'feet':
                        output = milesToFeet(value);
                        break;
                    case 'lightyears':
                        output = milesToLightYears(value);
                        break;
                    default:
                        invalidInputAlertMessage();
                        output = false;
                        break;
                }
                break;
            case 'lightyears':
                switch (secondUnit) {
                    case 'inches':
                        output = feetToInches(milesToFeet(lightYearsToMiles(value)));
                        break;
                    case 'feet':
                        output = milesToFeet(lightYearsToMiles(value));
                        break;
                    case 'miles':
                        output = lightYearsToMiles(value);
                        break;
                    default:
                        invalidInputAlertMessage();
                        output = false;
                        break;
                }
                break;
            default:
                output = false;
        }

    return output;
}


// APP EXECUTION

function conversionApp() {

    while (true) {

        var result;
        var firstUnit = prompt('Enter the first unit:');
        var numberToConvert = parseFloat(prompt('Enter the number you wish to convert:'));
        var secondUnit = prompt('Enter the unit you wish to convert to:');

        result = conversionCalculator(firstUnit, numberToConvert, secondUnit);

        if (result !== false && !isNaN(result)) {
            return (numberToConvert + ' ' + firstUnit + ' = ' + result.toFixed(0) + ' ' + secondUnit);
        } else {
            invalidInputAlertMessage();
        }
    }
}

// ========= USING THE APP ===========

alert(conversionApp());



/** ***************************************************************************************** **/

//     DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units


/** ########################################################################################## **/

// var orange = 'Oranges';
// var pizza = 'Pizza';
// var salsa = 'Salsa';
//
// var bestFoods = [orange, salsa, pizza];
//
// for (var i = 0; i < bestFoods.length; i++) {
//     console.log(bestFoods[i]);
// }