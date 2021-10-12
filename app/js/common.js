$('.home-slider').slick({
    slidesToShow: 8,
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
    slidesToShow: 3,
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
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.btn-burger').on('click', function () {
   $(this).toggleClass('click');
   $('.mobile-menu').fadeToggle();
});



$('.mobile-menu .dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('show').siblings('.dropdown-menu').slideToggle();
});

$('.dropdown-check').hover(function () {
    $('.dropdown-check').removeClass('show');
   $(this).addClass('show');
});

$(document).mouseover(function (e) { // событие  увода мыши
    var div = $(".balance-of-currency"); // тут указываем ID элемента
    if (!div.is(e.target) // если увели мышку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.find('.dropdown-check').removeClass('show');
    }
});