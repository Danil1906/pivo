$(function () {
    $('.product-benefits__slider-wrapper').slick({

        nextArrow: '<button type="button" class="custom_arrow custom_arrow-next"></button>',
        prevArrow: '<button type="button" class="custom_arrow custom_arrow-prev"></button>',
        dots: true,
    });

    $('a[href^="#"]').click(function () { // #1
        let anchor = $(this).attr('href');  // #2
        $('html, body').animate({           // #3
            scrollTop: $(anchor).offset().top  // #4
        }, 600);                            // #5
    });
})