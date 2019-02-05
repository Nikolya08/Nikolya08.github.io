$('.logos-img, .comments').hover(
    function(){
        $('.comments').css('opacity','1');
    },
    function(){
        $('.comments').css('opacity','0');
    }
);

$(document).on("click", ".special-box_one .show", function () {
    $('.special-box_one .services-info__text').slideToggle(500);
    $(this).toggleClass("hide");
    $('.special-box_two .services-info__text').slideUp(500);
    $(".special-box_two .show").removeClass("hide");
    $('.special-box_three .services-info__text').slideUp(500);
    $(".special-box_three .show").removeClass("hide");
    $('.special-box_four .services-info__text').slideUp(500);
    $(".special-box_four .show").removeClass("hide");
});
$(document).on("click", ".special-box_two .show", function () {
    $('.special-box_two .services-info__text').slideToggle(500);
    $(this).toggleClass("hide");
    $('.special-box_one .services-info__text').slideUp(500);
    $(".special-box_one .show").removeClass("hide");
    $('.special-box_three .services-info__text').slideUp(500);
    $(".special-box_three .show").removeClass("hide");
    $('.special-box_four .services-info__text').slideUp(500);
    $(".special-box_four .show").removeClass("hide");
});
$(document).on("click", ".special-box_three .show", function () {
    $('.special-box_three .services-info__text').slideToggle(500);
    $(this).toggleClass("hide");
    $('.special-box_one .services-info__text').slideUp(500);
    $(".special-box_one .show").removeClass("hide");
    $('.special-box_two .services-info__text').slideUp(500);
    $(".special-box_two .show").removeClass("hide");
    $('.special-box_four .services-info__text').slideUp(500);
    $(".special-box_four .show").removeClass("hide");
});
$(document).on("click", ".special-box_four .show", function () {
    $('.special-box_four .services-info__text').slideToggle(500);
    $(this).toggleClass("hide");
    $('.special-box_one .services-info__text').slideUp(500);
    $(".special-box_one .show").removeClass("hide");
    $('.special-box_two .services-info__text').slideUp(500);
    $(".special-box_two .show").removeClass("hide");
    $('.special-box_three .services-info__text').slideUp(500);
    $(".special-box_three .show").removeClass("hide");
});


var slideNow = 1;
var slideCount = $('.slidewrapper').children().length;
var slideInterval = 20000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('.viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('.viewport').width() * (navBtnId);
            $('.slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.viewport').width() * (slideNow);
        $('.slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.viewport').width() * (slideCount - 1);
        $('.slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.viewport').width() * (slideNow - 2);
        $('.slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}