
 
$(function (){
    $('li').click(function(event) {
        event.stopPropagation();
    $(event.target).children('ul').slideToggle();
    });
});
/*
$('div>ul>li .dir').click(function() {
    $(this).slideToggle();
});
*/
