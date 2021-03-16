$(function () {
    $('.featured-slider__inner').slick({
        prevArrow: '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
        nextArrow: '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>',
    });
    $('.feed-slider__inner').slick({
        prevArrow: '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
        nextArrow: '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $('input[type="checkbox"]').styler();

});