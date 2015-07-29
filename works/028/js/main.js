$(function() {
    $('#columns > div').css('opacity', 0);
    $('#columns > div').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().animate({opacity:1}, 300);
        }
        else {
            $(this).stop().animate({opacity: 0}, 300);
        }
    });
});