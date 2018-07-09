$(document).ready(function () {
    'use strict';

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        },
        {
            name: "Billy",
            favColor: "orange"
        },
        {
            name: "Peter",
            favColor: "aqua"
        }
    ];

    // Creates and Populates <ul> in the #names-list div
    function createList (arr) {
        $(arr).each(function () {
            $('#names-list').append('<li>' + this.name + '</li>');
        });
    }

    // Assigns colors to each li
    function colorListItems(arr){
        $('#names-list > li').each(function (i) {
            $(this).css('color', arr[i].favColor);
        });
    }


    // Button Click Event
    $('#add-names-btn').click(function () {
        createList(people);
        colorListItems(people);
    });
    // add functionality to the button so that when it is clicked, an unordered list of names from the people array (included below) is added to the inner HTML of the div#names-list. For an extra bonus, make the font color of each list item map to that person's favColor value.

    // hints...
    //   - You should iterate over every object in the person array
    //   - For each object you should build an HTML string including the proper opening and closing tags to make the unordered list
    //   - using functions will help better organize your code
    //   - using jQuery will simplify the code needed
    //   - don't forget to create a branch to add and commit your work, then merge with the master


});