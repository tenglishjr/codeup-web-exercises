'use strict';

$(function () {

    /**======= jQuery Intro / Selectors ========**/

        // $("#playButton").click(function () {
        //
        //     $("#playOutput").text($("#playInput").val());
        //
        // });
        //
        // $('.importante').on('mouseover', function () {
        //     console.log('Paragraph is importante...');
        //     $(this).css('background-color', 'yellow');
        // });
        //
        // alert($('#corgi').text());

        // $('.codeup').css('border', '1px solid red');

        // $('li').css('font-size', '20px');
        //
        // $('h1, p, li').css('background-color', 'yellow');

        // alert($('h1').text());

    /**======= jQuery Events =======**/

        /* Just for fun */
        $('h1').click(function () {
            setInterval(function (){$('p').toggle(500)},500);
        })



});