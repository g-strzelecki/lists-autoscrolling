jQuery(
    function ($) {
        //SCROLL RESET
        $.scrollTo(0);
        $('#link1').click(function () { $.scrollTo($('#slide1'), 500); });
        $('#link2').click(function () { $.scrollTo($('#slide2'), 500); });
        $('#link3').click(function () { $.scrollTo($('#slide3'), 500); });
        $('#link4').click(function () { $.scrollTo($('#slide4'), 500); });
        $('#link5').click(function () { $.scrollTo($('#slide5'), 500); });
        $('#link6').click(function () { $.scrollTo($('#slide6'), 500); });
        $('#link7').click(function () { $.scrollTo($('#slide7'), 500); });
        $('#link8').click(function () { $.scrollTo($('#slide8'), 500); });
        $('#link9').click(function () { $.scrollTo($('#slide9'), 500); });
        $('#link10').click(function () { $.scrollTo($('#slide10'), 500); });
        $('#link11').click(function () { $.scrollTo($('#slide11'), 500); });
        $('#link12').click(function () { $.scrollTo($('#slide12'), 500); });
        $('#link13').click(function () { $.scrollTo($('#slide13'), 500); });
        $('#link14').click(function () { $.scrollTo($('#slide14'), 500); });
        $('#link15').click(function () { $.scrollTo($('#slide15'), 500); });

        $('.scrollup').click(function () { $.scrollTo($('body'), 1000); });
    }
);

//SHOW BUTTON DURING SCROLL
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
}

);
