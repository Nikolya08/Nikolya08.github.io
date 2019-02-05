

$(document).ready(function () {

    $('.carousel').carousel({
        interval: 8000
    });



    $(".navigation, .head-menu, .contact-up, .btn-down").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    $(document).animateScroll();


    $(document).on("click", ".special-box_one .show", function () {
        $('.special-box_one .special-box_text').slideToggle(500);
        $(this).toggleClass("hide");
        $('.special-box_two .special-box_text').slideUp(500);
        $(".special-box_two .show").removeClass("hide");
        $('.special-box_three .special-box_text').slideUp(500);
        $(".special-box_three .show").removeClass("hide");
        $('.special-box_four .special-box_text').slideUp(500);
        $(".special-box_four .show").removeClass("hide");
        $('.special-box_five .special-box_text').slideUp(500);
        $(".special-box_five .show").removeClass("hide");
    });
    $(document).on("click", ".special-box_two .show", function () {
        $('.special-box_two .special-box_text').slideToggle(500);
        $(this).toggleClass("hide");
        $('.special-box_one .special-box_text').slideUp(500);
        $(".special-box_one .show").removeClass("hide");
        $('.special-box_three .special-box_text').slideUp(500);
        $(".special-box_three .show").removeClass("hide");
        $('.special-box_four .special-box_text').slideUp(500);
        $(".special-box_four .show").removeClass("hide");
        $('.special-box_five .special-box_text').slideUp(500);
        $(".special-box_five .show").removeClass("hide");
    });
    $(document).on("click", ".special-box_three .show", function () {
        $('.special-box_three .special-box_text').slideToggle(500);
        $(this).toggleClass("hide");
        $('.special-box_one .special-box_text').slideUp(500);
        $(".special-box_one .show").removeClass("hide");
        $('.special-box_two .special-box_text').slideUp(500);
        $(".special-box_two .show").removeClass("hide");
        $('.special-box_four .special-box_text').slideUp(500);
        $(".special-box_four .show").removeClass("hide");
        $('.special-box_five .special-box_text').slideUp(500);
        $(".special-box_five .show").removeClass("hide");
    });
    $(document).on("click", ".special-box_four .show", function () {
        $('.special-box_four .special-box_text').slideToggle(500);
        $(this).toggleClass("hide");
        $('.special-box_one .special-box_text').slideUp(500);
        $(".special-box_one .show").removeClass("hide");
        $('.special-box_two .special-box_text').slideUp(500);
        $(".special-box_two .show").removeClass("hide");
        $('.special-box_three .special-box_text').slideUp(500);
        $(".special-box_three .show").removeClass("hide");
        $('.special-box_five .special-box_text').slideUp(500);
        $(".special-box_five .show").removeClass("hide");
    });
    $(document).on("click", ".special-box_five .show", function () {
        $('.special-box_five .special-box_text').slideToggle(500);
        $(this).toggleClass("hide");
        $('.special-box_one .special-box_text').slideUp(500);
        $(".special-box_one .show").removeClass("hide");
        $('.special-box_two .special-box_text').slideUp(500);
        $(".special-box_two .show").removeClass("hide");
        $('.special-box_three .special-box_text').slideUp(500);
        $(".special-box_three .show").removeClass("hide");
        $('.special-box_four .special-box_text').slideUp(500);
        $(".special-box_four .show").removeClass("hide");
    });


});