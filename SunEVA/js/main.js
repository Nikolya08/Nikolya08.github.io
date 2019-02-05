$('.carousel').carousel({
    interval: 8000
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



$(document).ready(function () {
    let count = 1;
    $('.new-box_1 .add-count_1').click(function () {
        let allcount = $('.new-item_1 li:nth-child(1) span.count').attr("count");
        let newcount = Number(allcount) + count;
        count += 1;
        $('.new-item_1 li:nth-child(1) span.count').html(newcount);
    });
    $('.new-box_1 .add-count_2').click(function () {
        let allcount = $('.new-item_1 li:nth-child(2) span.count').attr("count");
        let newcount = Number(allcount) + count;
        count += 1;
        $('.new-item_1 li:nth-child(2) span.count').html(newcount);
    });
    $('.new-box_1 .add-count_3').click(function () {
        let allcount = $('.new-item_1 li:nth-child(3) span.count').attr("count");
        let newcount = Number(allcount) + count;
        count += 1;
        $('.new-item_1 li:nth-child(3) span.count').html(newcount);
    });
});
$(document).ready(function () {
    let count = 1;
    $('.new-box_2 .add-count_1').click(function () {
        let allcount = $('.new-box_2 li:nth-child(1) span.count').attr("count");
        let newcount = Number(allcount) + count;
        count += 1;
        $('.new-box_2 li:nth-child(1) span.count').html(newcount);
    });
    $('.new-box_2 .add-count_2').click(function () {
        let allcount = $('.new-box_2 li:nth-child(2) span.count').attr("count");
        let newcount = Number(allcount) + count;
        count += 1;
        $('.new-box_2 li:nth-child(2) span.count').html(newcount);
    });
    $('.new-box_2 .add-count_3').click(function () {
        let allcount = $('.new-box_2 li:nth-child(3) span.count').attr("count");
        let newcount = Number(allcount) + count;
        count += 1;
        $('.new-box_2 li:nth-child(3) span.count').html(newcount);
    });
});