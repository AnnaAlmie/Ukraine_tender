$(document).ready(function () {

    /*Nav Height*/
    function navHeight() {
        navH = $('.content').height();
        $('nav').css('height', navH + 'px');
    }
    navHeight();
    $(window).resize(function () {
        navHeight();
    });
    /*end Nav Height*/

    $('.burgerBtn').click(function () {
        $('.menu').toggleClass('open-menu');
        popCl();
    });

    /*POPUP*/
    $('.openReg').on('click', function () {
        /*stop scroll*/
        if (window.matchMedia('(max-width: 900px)').matches) {
            $('html, body').css('overflow', 'hidden');
        } else {
            $('html, body').css('overflow', 'hidden');
        }
        /*show popup*/
        $('.containerR').addClass('show');
        $('body').find('.popup').css('display', 'flex');
        $('.popup-content').addClass('show');
        $('.close').addClass('show');


        /*close popup*/
        $('.close, .closeX').on('click', function () {
            popCl();
        });
    });
    function popCl() {
        $('.popup-content').removeClass('show').addClass('hide');
        $('.close').removeClass('show').addClass('hide');
        $('.containerR').removeClass('show');
        if (window.matchMedia('(max-width: 900px)').matches) {
            $('html, body').css('overflow', 'auto');
        } else {
            $('html, body').css('overflow', 'auto');
        }
        setTimeout(function () {
            $('.popup-content').removeClass('hide');
            $('.close').removeClass('hide');
            $('.popup').css('display', 'none');
        }, 500);
    }
    /*end POPUP*/

    /*COUNT COMPLETE REGESTRATION*/
    $('input').focusout(function(){
        setWidthToSpan();
    });
    $('select').change(function () {
        setWidthToSpan();
    });
    function setWidthToSpan() {
        var p = 0;
        $('input').each(function() {
            if ($(this).val().length > 0) {
                $(this).addClass('label-stay');
                console.log($('input').length);
                p += 100 /($('input').length + $('select').length)
            }
        });
        $('select').each(function() {
            if ($(this).find('option:selected').index() > 0) {
                $(this).addClass('label-stay');
                console.log($('input').length);
                p += 100 /($('input').length + $('select').length)
            }
        });
        $('.btn-full span').css({width: p + '%'});
        $('.full span').html(p)
    }
    /*end COUNT COMPLETE REGESTRATION*/

    /*MOVE ON MOUSE*/
   /* var prevX,
        prevY,
        prevTranslateX = 0,
        prevTranslateY = 0,
        cloudBig = $('.cloud_big'),
        cloudSmall = $('.cloud_small'),
        background = $('.background');

    $('.content').on('mousemove', function(e) {
        var deltaX = e.pageX - prevX,
            deltaY = e.pageY - prevY;

        prevTranslateX -= deltaX / 50;
        prevTranslateY -= deltaY / 50;

        cloudSmall.css('transform', 'translate(' + prevTranslateX * 0.75 + 'px,' + prevTranslateY + 'px)');
        cloudBig.css('transform', 'translate(' + -prevTranslateX + 'px,' + -prevTranslateY + 'px)');
        background.css('transform', 'translate(' + -prevTranslateX / 8 + 'px,' + -prevTranslateY / 8 + 'px)');

        prevX = e.pageX;
        prevY = e.pageY;
    });

    $('.content').on('mouseenter', function(e) {
        prevX = e.pageX;
        prevY = e.pageY;
        $(this).addClass('anim');
    });

    $('.content').on('mouseleave', function() {
        prevTranslateX = 0;
        prevTranslateY = 0;
        cloudBig.css('transform', 'translate(' + prevTranslateX + 'px,' + prevTranslateY + 'px)');
        cloudSmall.css('transform', 'translate(' + prevTranslateX + 'px,' + prevTranslateY + 'px)');
        background.css('transform', 'translate(' + prevTranslateX + 'px,' + prevTranslateY + 'px)');
        $(this).removeClass('anim');
    });*/
    /*end MOVE ON MOUSE*/
});
/*VAlidation bootstrap*/
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
                $('.btn').addClass('closeX')
            }, false);
        });
    }, false);
})();
/*end VAlidation*/