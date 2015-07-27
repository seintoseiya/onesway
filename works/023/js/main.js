$(function () {
    var pos1 = $('#box1').offset();
    var pos2 = $('#box2').offset();
    var pos3 = $('#box3').offset();

    $(window).scroll(function() {
        var dy = $(this).scrollTop();
        // console.log($(this).width());

        $('#bg1').css('background-position', '0 '+dy+'px');

        if(dy > 800){
            $('#bg2').css('background-position', '0 '+(dy-800)+'px');
        }else{
            $('#bg2').css('background-position', '0 0');
        }
        if(dy > 1600){
            $('#bg3').css('background-position', '0 '+(dy-1600)+'px');
        }else{
            $('#bg3').css('background-position', '0 0');
        }
        // パ
        if(dy > 1600){
            $('#msg1').css('opacity', (dy-1600)/800);
            $('#msg1').css('top', 100);
            var dx = (dy-1600) > $(this).width()/2-24 ? $(this).width()/2-24 : (dy-1600);
            $('#msg1').css('left', dx);
        }else{
            $('#msg1').css('opacity', 0);
        }
        // ラ
        if(dy > 1700){
            $('#msg2').css('opacity', (dy-1700)/800);
            $('#msg2').css('top', 160);
            var dx = (dy-1700) > $(this).width()/2-24 ? $(this).width()/2-24 : (dy-1700);
            $('#msg2').css('right', dx);
        }else{
            $('#msg2').css('opacity', 0);
        }
        // ラ
        if(dy > 1800){
            $('#msg3').css('opacity', (dy-1800)/800);
            $('#msg3').css('top', 220);
            var dx = (dy-1800) > $(this).width()/2-24 ? $(this).width()/2-24 : (dy-1800);
            $('#msg3').css('left', dx);
        }else{
            $('#msg3').css('opacity', 0);
        }
        // ッ
        if(dy > 1900){
            $('#msg4').css('opacity', (dy-1900)/800);
            $('#msg4').css('top', 280);
            var dx = (dy-1900) > $(this).width()/2-24 ? $(this).width()/2-24 : (dy-1900);
            $('#msg4').css('right', dx);
        }else{
            $('#msg4').css('opacity', 0);
        }
        // ク
        if(dy > 2000){
            $('#msg5').css('opacity', (dy-2000)/800);
            $('#msg5').css('top', 340);
            var dx = (dy-2000) > $(this).width()/2-24 ? $(this).width()/2-24 : (dy-2000);
            $('#msg5').css('left', dx);
        }else{
            $('#msg5').css('opacity', 0);
        }
        // ス
        if(dy > 2100){
            $('#msg6').css('opacity', (dy-2100)/800);
            $('#msg6').css('top', 400);
            var dx = (dy-2100) > $(this).width()/2-24 ? $(this).width()/2-24 : (dy-2100);
            $('#msg6').css('right', dx);
        }else{
            $('#msg6').css('opacity', 0);
        }
    });
});