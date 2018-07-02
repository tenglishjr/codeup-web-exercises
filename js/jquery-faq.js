$(function () {
    'use strict';

    $('#expand-btn').click(function () {
        $('dd').toggleClass('invisible');
    });

    $('dt').click(function () {
        $(this).toggleClass('highlight');
    });

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


});