$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        centerMode: true,
        slidesToScroll: 1,     
        slidesToShow: 1,
        asNavFor: '.slider__mini',
        fade: true,
        autoplay: true,
        autoplaySpeed: 1000,
        
    });
})


$(document).ready(function(){
    $('.slider__mini').slick({
        asNavFor: '.slider',
        dots: true,
        slidesToShow: 7,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
    });
})

