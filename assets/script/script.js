$(function(){
    var nav = $('#nav');
    var second = $('.second');
    var offset = nav.offset().top;

    $(document).on('scroll', function () {
        if (offset <= $(window).scrollTop()) {
            nav.addClass('fixar');
            second.css({'margin-top': '86px'});
        } else {
            nav.removeClass('fixar');
            second.css({'margin-top': '0'});
        }
    });
});

$.fn.ancora = function(){
    $('body').animate({scrollTop:$(this).offset().top});
}

$(function(){
    $('.main a[href^=#]').click(function(){
        $($(this).attr('href')).ancora();
        return false;
    })
})