$(document).ready(function(){
   $('.imgs').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
    });
    $(".nav ul li").click(function(){
        $('.active-list').removeClass('active-list');
        $(this).addClass('active-list');

        let data_filter = $(this).attr('data-filter');
        $('.imgs').isotope({
            filter: data_filter
        });
        return false;
    });
    $('div.item').click(function () { 
        $('#img01').attr('src',$(this).children('img').attr('src'));
        $('div.modal').show();
    });
    $('span.close').click(function () { 
        $('#img01').attr('src',"");
        $('div.modal').hide();
    });

});

