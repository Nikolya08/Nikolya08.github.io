$(function () {

    $('.your-class').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: '<i class="fa fa-angle-right"></i>',
        prevArrow: '<i class="fa fa-angle-left"></i>'
    });

});

$(function () {
    $('.myclass').slick({
        dots: true,
        arrows: false,
    });
})

$(document).ready(function () {
    $("a[href*=#]").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
        return false;
    });
});

$('.social__facebook, .box1').hover(
    function(){
        $('.box1').css('opacity','1');
    },
    function(){
        $('.box1').css('opacity','0');
    }
);
$('.social__twitter, .box2').hover(
    function(){
        $('.box2').css('opacity','1');
    },
    function(){
        $('.box2').css('opacity','0');
    }
);
$('.social__google, .box3').hover(
    function(){
        $('.box3').css('opacity','1');
    },
    function(){
        $('.box3').css('opacity','0');
    }
);
$('.social__linkedid, .box4').hover(
    function(){
        $('.box4').css('opacity','1');
    },
    function(){
        $('.box4').css('opacity','0');
    }
);


$(window).load(function() {

    $(".title__main").animate({
        opacity:"1"
    },1100,function() {

        $(".title__line").animate({
            width:"80px"
        }, 800, function() {
        });
    });
});






