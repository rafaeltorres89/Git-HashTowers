//Função Animação Carrossel
$.fn.boxCustomers = function () {
    function repeat(str, num) {
        return new Array( num + 1 ).join( str );
    }
    return this.each(function () {
        var $wrapper = $('> div', this).css('overflow', 'hidden'),
            $slider = $wrapper.find('> ul'),
            $items = $slider.find('> li'),
            $single = $items.filter(':first'),

            singleWidth = $single.outerWidth(),
            visible = 1,//Math.ceil($wrapper.innerWidth() / singleWidth), /// note: doesn't include padding or border
            currentPage = 1,
            pages = Math.ceil($items.length / visible);

        // 1. O número "visible" será sempre visto, caso contrário, criar itens vazia
        if (($items.length % visible) != 0) {
            $slider.append(repeat('<li class="empty" />', visible - ($items.length % visible)));
            $items = $slider.find('> li');
        }

        // 2. Top e cauda da lista com o número "visible" de itens, de cima tem a última seção, e cauda tem o primeiro
        $items.filter(':first').before($items.slice(- visible).clone().addClass('cloned'));
        $items.filter(':last').after($items.slice(0, visible).clone().addClass('cloned'));
        $items = $slider.find('> li'); // reselect

        // 3. Definir a posição da esquerda para o primeiro item 'real'
        $wrapper.scrollLeft(singleWidth * visible);

        // 4. Função de paginação
        function gotoPage(page) {
            var dir = page < currentPage ? -1 : 1,
                n = Math.abs(currentPage - page),
                left = singleWidth * dir * visible * n;

            $wrapper.filter(':not(:animated)').animate({
                scrollLeft : '+=' + left
            }, 500, function () {
                if (page == 0) {
                    $wrapper.scrollLeft(singleWidth * visible * pages);
                    page = pages;
                } else if (page > pages) {
                    $wrapper.scrollLeft(singleWidth * visible);
                    // reset back to start position
                    page = 1;
                }
                currentPage = page;
            });
            return false;
        }

        function automaticSlide() {
            //$('.forward').trigger('click');
            gotoPage(currentPage + 1);
        }
        setInterval(function(){automaticSlide();}, 6000);
        $wrapper.after('<a class="arrow back"></a><a class="arrow forward"></a>');

        // 5. Ligar para os botões de avanço e retrocesso
        $('a.back', this).click(function () {
            return gotoPage(currentPage - 1);
        });

        $('a.forward', this).click(function () {
            return gotoPage(currentPage + 1);
        });

        // Criar uma interface pública para se deslocar para uma página específica
        $(this).bind('goto', function (event, page) {
            gotoPage(page);
        });
    });
};

$(document).ready(function () {
    $('.boxCustomers').boxCustomers();
});