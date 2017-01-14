$(document).ready(function() {

    $('.my_slider').slick({
        asNavFor: '.mini-slider'

    });
    $('.mini-slider').slick({
        arrows: false,
        slidesToShow: 4,
        focusOnSelect: true,
        asNavFor: '.my_slider'
    });
    $('.my_slider2').slick({


    });




});
