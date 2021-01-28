import $ from 'jquery';
$(document).ready(function () {
    $('.trigger').on('click', function() {
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            $('body').addClass('menu-opened')
        } else {
            $('body').removeClass('menu-opened')
        }
        $('.menu').fadeToggle(700);

    });
})
