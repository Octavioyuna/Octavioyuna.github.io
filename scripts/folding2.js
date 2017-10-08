

$(function (){
    $('li').click(function(event) {
        event.stopPropagation();
    $(event.target).children('ul').slideToggle();
    });
});
