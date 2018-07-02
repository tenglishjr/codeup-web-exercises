$(function () {

    $('#expand-btn').click(function () {
        $('dd').toggleClass('invisible');
    });

    $('dt').click(function () {
        $(this).toggleClass('highlight');
    })


})