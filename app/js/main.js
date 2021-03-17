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

    $('.posts__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.posts__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.posts__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('input[type="checkbox"]').styler();

});