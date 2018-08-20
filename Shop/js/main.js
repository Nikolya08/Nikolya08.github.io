$(document).ready(function () {

    var newcount = 0;

    $('.add-tovar').click(function () {
        var allprice = $('#block-cart .price span#price').attr("price");
        var price = $(this).attr("price");
        var tovarid = $(this).attr("rel");

        var newprice = Number(allprice) + Number(price);
        newcount = newcount+1;

        $('#block-cart .price span#price').html(newprice+' $').attr("price", newprice);
        $('#block-cart .cart2 span.count').html(newcount);

    });
});



