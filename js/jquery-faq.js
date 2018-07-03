/** jQuery Attributes & CSS Exercise **/
/* Create a new file named jquery_faq.html. Commit all changes to GitHub:

    - In a HTML structure, create a definition list containing 10 FAQs about national parks.
    - Add a class to all dd elements named invisible.
    - Create CSS that sets elements with the invisible class to display: none.
    - Update the page with jQuery to add a link that toggles the class invisible on and off for all dd elements.


    *Bonus*

    - When any one dt is clicked, the element that was clicked should be highlighted.*/


/** jQuery Traversing Exercise **/
/*  Open the file named jquery_faq.html for editing. Commit all changes to GitHub:

    - Under the FAQ, add 3 unordered lists. Each list should contain a national park name in an h3 element, and a ul of 4 facts about the park.
    - Create a button that, when clicked, makes the last li in each ul have a yellow background.
    - When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
    - When any list item is clicked, first li of the parent ul should have a font color of blue.


    *Bonus*

    Create 3 divs that each look like a picture Frame; each one should have a unique background image and a button underneath that swaps the image from the frame. Use Traversing functions of jQuery to accomplish this.

    The rules are the following:
    - The left frame swaps to the right and takes the image from the frame in the center.
    - The center frame swaps randomly to either the left or right.
    - The right frame swaps to the left and takes the image from the frame in the center.*/



$(function () {
    'use strict';

    //========= Attributes & CSS
    $('#expand-btn').click(function () {
        $('dd').toggleClass('invisible');
    });

    //bonus
    $('dt').click(function () {
        $(this).toggleClass('highlight');
    });

    //========= Traversing
    $('#highlight-btn').click(function () {
        $('ul').each(function () {
            $(this).children().last().addClass('highlight');
        })
    });

    $('h3').click(function () {
        $(this).next().css('fontWeight', 'bold');
    });

    $('li').click(function () {
        $(this).parent().children().first().css('color', 'blue');
    });


    //bonus
    $('#pic1-btn').click(function () {
        $('.pics').children().first().insertAfter($('.pics').children().first().next());
    });

    $('#pic2-btn').click(function () {
       var random = Math.floor(Math.random() * 2);
        console.log(random);

        if (random === 0) {
           $('.pics').children().first().next().insertAfter($('.pics').children().last());
       } else {
            $('.pics').children().first().insertAfter($('.pics').children().first().next());
       }
    });

    $('#pic3-btn').click(function () {
        $('.pics').children().last().insertBefore($('.pics').children().first().next());
    });


});