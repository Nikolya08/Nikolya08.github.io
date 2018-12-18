
$('.menu__icon').on('click', function() {
    $(this).closest('.menu')
        .toggleClass('menu_state_open');
});

$('.menu__links-item').on('click', function() {
    $(this).closest('.menu')
        .removeClass('menu_state_open');
});

$(document).ready(function(){
    $(".footer-up, .main-menu, .menu__links").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


