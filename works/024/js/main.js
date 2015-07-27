$(function () {
    $('#container').mousemove(function(e) {
        // console.log(e.clientX, e.clientY);
        var cx = $(window).width() / 2;
        var cy = $(this).height() / 2;
        var dx = e.clientX - cx;
        var dy = e.clientY - cy;
        // console.log(dx,dy);
        if(dx<25 && dx>-20){
        	$('#box2').css('left', cx + dx * 0.5);
	        $('#box3').css('left', cx + dx * 0.7);
	    }
	    if(dy<25 && dy>-20){
	    	$('#box2').css('top', cy + dy * 0.5);
	        $('#box3').css('top', cy+5 + dy * 0.7);
    	}
    });
});