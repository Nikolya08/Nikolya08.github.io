
$(document).ready(function () {


    $(".head-right_circle").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    $(document).on("click", ".head-right_btn .show", function () {
        $('.head-right_inner').slideToggle(500);
        $(this).toggleClass("hide");
    });

    $(document).on("click", "#one .left-content_box .show", function () {
        $('#one .left-open_box').slideToggle(500);
        $(this).toggleClass("hide");
    });
    $(document).on("click", "#two .left-content_box .show", function () {
        $('#two .left-open_box').slideToggle(500);
        $(this).toggleClass("hide");
    });
    $(document).on("click", "#three .left-content_box .show", function () {
        $('#three .left-open_box').slideToggle(500);
        $(this).toggleClass("hide");
    });
    $(document).on("click", "#four .left-content_box .show", function () {
        $('#four .left-open_box').slideToggle(500);
        $(this).toggleClass("hide");
    });
    $(document).on("click", "#five .left-content_box .show", function () {
        $('#five .left-open_box').slideToggle(500);
        $(this).toggleClass("hide");
    });
    $(document).on("click", "#six .left-content_box .show", function () {
        $('#six .left-open_box').slideToggle(500);
        $(this).toggleClass("hide");
    });
    $(document).on("click", "#seven .left-content_box .show", function () {
        $('#seven .left-open_box').slideToggle(500);
        $(this).toggleClass("hide");
    });
    $(document).on("click", "#eight .left-content_box .show", function () {
        $('#eight .left-open_box').slideToggle(500);
        $(this).toggleClass("hide");
    });
    $(document).on("click", "#nine .left-content_box .show", function () {
        $('#nine .left-open_box').slideToggle(500);
        $(this).toggleClass("hide");
    });
    $(document).on("click", "#ten .left-content_box .show", function () {
        $('#ten .left-open_box').slideToggle(500);
        $(this).toggleClass("hide");
    });

});