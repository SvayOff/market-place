$(function () {

    $(".ratestar--small").rateYo({
        rating: 4.5,
        readOnly: true,
        starWidth: '12px',
        ratedFill: "#ffc000",
        spacing: '3px'
    });

    $(".ratestar--big").rateYo({
        rating: 4.5,
        readOnly: true,
        starWidth: '16px',
        ratedFill: "#ffc000",
        spacing: '3px'
    });

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

    $('.corporate-business__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.corporate-business__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.corporate-business__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


    $('input[type="checkbox"], select').styler();

    $('.favorites-filter__mode-list').on('click', function () {
        $('.favorites-content__item').addClass('list');
        $('.favorites-filter__mode-list').addClass('active');
        $('.favorites-filter__mode-large').removeClass('active');
    });
    $('.favorites-filter__mode-large').on('click', function () {
        $('.favorites-content__item').removeClass('list');
        $('.favorites-filter__mode-large').addClass('active');
        $('.favorites-filter__mode-list').removeClass('active');
    });

});