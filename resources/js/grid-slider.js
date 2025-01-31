$(function() {
    //Other locations slider
    let gridSlider = jQuery(document.getElementsByClassName('grid-slider'));
    if (gridSlider.length) {
        gridSlider.find('.items').not(document.getElementsByClassName('slick-initialized')).slick({
            slide: '.item',
            infinite: false,
            dots: true,
            arrows: false,
            fade: false,
            speed: 800,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 659,
                    settings: "unslick"
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        $(window).on('orientationchange resize', function () {
            gridSlider.find('.items').slick('resize');
        });
    }
});