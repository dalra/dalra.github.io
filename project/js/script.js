var doc = document;

$(doc).ready(function(){
    
    $('.gslider').slick({
        arrows : false
    });
    
    $('.next').on('click', function(){
        $('.gslider').slick('slickNext');
    });
    
    $('.prev').on('click', function(){
        $('.gslider').slick('slickPrev');
    });
});