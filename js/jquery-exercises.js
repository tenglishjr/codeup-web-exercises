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

        // $('*').css('background-color', '#06070E').css('color', 'papayawhip');
        //
        // $('button').click(function () {
        //     $('h1').css('color', 'red').css('background-color', '').toggle('#codeup');
        // })

    $('h1').click(function () {
        $('body').css('background', '#C8E0F4');
    });

    $('p').dblclick(function () {
        $('p').css('font-size', '18px');
    });

    $('li').hover(
        function () {
            $('li').css('color', 'red');
        },

        function () {
            $('li').css('color', 'black');
        }
    );


});