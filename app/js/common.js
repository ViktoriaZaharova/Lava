$('.home-slider').slick({
    slidesToShow: 6,
    variableWidth: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
    ]
});

$('.translation-slider').slick({
    slidesToShow: 4,
    variableWidth: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.balance-currency-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    // infinite: false,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.btn-burger').on('click', function () {
   $(this).toggleClass('click');
   $('.mobile-menu').fadeToggle();
});