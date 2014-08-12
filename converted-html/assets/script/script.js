$(function(){
    var nav = $('#nav');
    var second = $('.second');
    var offset = nav.offset().top;

    $(document).on('scroll', function () {
        if (offset <= $(window).scrollTop()) {
            nav.addClass('fixar opacity_nav');
            second.css({'margin-top': '86px'});
        } else {
            nav.removeClass('fixar opacity_nav');
            second.css({'margin-top': '0'});
        }
    });

    $.fn.ancora = function(){
        $('body').animate({scrollTop:$(this).offset().top});
    }

    $('.main a[href^=#]').click(function(event){
        var $target = $(event.target);
        var $li = $target.parent();

        $($(this).attr('href')).ancora();
        $li.addClass('selected').siblings().removeClass('selected');

        return false;
    });

    $('.our_team').hide();

    $('a.team').click(function(event){
        event.preventDefault();
        $(".our_team").toggle("slow");
    });

    //Bloco de comentário
    $('#comment').hide();
});