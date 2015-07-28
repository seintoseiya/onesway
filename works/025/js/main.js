$(function () {
    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            slideshowSpeed: 2000,
            start: function(){
               $('#caption').html('Start'); 
            },
            end: function(){
               $('#caption').html('End');
            }
        }); 
    });
});