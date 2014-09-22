$(function(){
    //Esconder
    $('#comment, ul.drop, .our_team, #content').hide();

    //Declaração de variáveis
    var nav = $('#nav');
    var second = $('.second');
    var more_project = $('.more-project');
    var offset = nav.offset().top;

    //Menu fixado no topo
    $(document).on('scroll', function () {
        if (offset <= $(window).scrollTop()) {
            nav.addClass('fixar opacity_nav');
            second.css({'margin-top': '86px'});
            more_project.css({'margin-top': '86px'});
        } else {
            nav.removeClass('fixar opacity_nav');
            second.css({'margin-top': '0'});
            more_project.css({'margin-top': '0'});
        }
    });

    //Ancora
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

    //Veja nosso Time
    $('a.team').click(function(event) {
        event.preventDefault();
        $(".our_team").toggle("slow");
    });

    //Menu Mobile
    $('.plus_mob').click(function(event) {
        event.preventDefault();
        $("ul.drop").toggle("slow");
    });

    //Modal
    $('.send').click(function() {
        $('#content').fadeIn();
    });

    $('.btn_modal').click(function() {
        $('#content').fadeOut();
    });
});