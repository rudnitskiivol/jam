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

    $('.scroller').on( 'click', function(){
        var el = $(this);
        var dest = el.data('scroll-to');
        var offset = el.data('offset') ? Number($(dest).css(el.data('offset')).replace(/[^-\d\.]/g, '')) / 2 : 0;
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({
                    scrollTop: $(dest).offset().top + offset // прокручиваем страницу к требуемому элементу
                }, 700 // скорость прокрутки
            );
        }
        return false;
    });

    $('.scroller-self').on( 'click', function(){
        var dest = $(this);
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({
                    scrollTop: dest.offset().top - 30 // прокручиваем страницу к требуемому элементу
                }, 700 // скорость прокрутки
            );
        }
        return false;
    });

    $('.menu a').on( 'click', function(e){
        e.preventDefault();
        var dest = $(this).attr('href')
        if(dest !== undefined && dest !== '') {
            $('header .trigger').trigger('click');// проверяем существование
            $('html').animate({
                    scrollTop: $(dest).offset().top + 50 // прокручиваем страницу к требуемому элементу
                }, 1000 // скорость прокрутки
            );
        }
        return false;
    });

    $(window).on('scroll', () => {
        $('.animated_scroll:not(".scrolled")').each(function() {
            var offset = 0;
            if ($(this).height() > window.innerHeight / 3) {
                offset = window.innerHeight / 1.25;
            } else {
                offset = window.innerHeight - $(this).height();
            }
            var calcPosTopPosition = $(this).offset().top,
                windowScrollPosition = $(window).scrollTop() + offset;

            if( calcPosTopPosition < windowScrollPosition ) {
                $(this).addClass('scrolled')
                console.log('ok');
            }
        });
    });

    if ($(window).scrollTop() != 0) {
        $('.animated_scroll').addClass('scrolled');
    }
})
