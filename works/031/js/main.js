$(function() {
    $(window).scroll(function() {
            var dy = $(this).scrollTop();
            $('nav').css('top', dy < 80 ? 80-dy : 0);
    });
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
    });
});