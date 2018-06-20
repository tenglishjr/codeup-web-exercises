(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Original planets array: \n' + planets);

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push('Pluto');
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log('Index of Earth: ' + planets.indexOf('Earth'));

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);


    // ======= BONUS EXERCISES ========


    // Bonus #1

    function charToggle(str) {

        console.log(str);

        var strArray = str.split('');
        var oppCaseChar = [];

        strArray.forEach( function (char) {
            if (char === char.toLowerCase()) {
                oppCaseChar.push(char.toUpperCase());
            } else if (char === char.toUpperCase()) {
                oppCaseChar.push(char.toLowerCase());
            } else {
                oppCaseChar.push(char);
            }
        })

        var strOutput = oppCaseChar.join('');

        return strOutput;

    }

    // console.log(charToggle('DEfgHiJK12#'));


    // ==== Bonus #2

    function matchLengthAndNumber(strWithNumber) {

        console.log(strWithNumber);

        if (strWithNumber.length == strWithNumber[strWithNumber.length - 1]) {
            return 'Yes';
        } else {
            return 'No';
        }
    }

    // console.log(matchLengthAndNumber('superman9'));




})();
