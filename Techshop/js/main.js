$(document).ready(function () {

    var newcount = 0;

    $('.add-tovar').click(function () {
        var allprice = $('#block-cart .price span#price').attr("price");
        var price = $(this).attr("price");
        var tovarid = $(this).attr("rel");

        var newprice = Number(allprice) + Number(price);
        newcount = newcount+1;

        $('#block-cart .price span#price').html('$ ' + newprice).attr("price", newprice);
        $('#block-cart .cart2 span.count').html(newcount);

    });
});
$('#menu1').hover(
    function(){
        $('.home').css('margin','27px 0px 0px 550px');
    },
    function(){
        $('.home').css('margin','27px 0px 0px 63px');
    }
);
$('.login, .cont').hover(
    function(){
        $('.mat').css('opacity','0');
    },
    function(){
        $('.mat').css('opacity','1');
    }
);

$('.first_1').hover(
    function(){
        $('.rb').css('display','none');
    },
    function(){
        $('.rb').css('display','block');
    }
);

