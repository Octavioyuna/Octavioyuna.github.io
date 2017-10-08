$('.dir').click(function(e) {
    e.stopPropagation();
    $(this).children().slideToggle();
});
