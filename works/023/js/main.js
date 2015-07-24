$(function () {
    var pos1 = $('#box1').offset();
    var pos2 = $('#box2').offset();
    var pos3 = $('#box3').offset();

    $(window).scroll(function() {
        var dy = $(this).scrollTop();
        // console.log($(this).width());

        $('#bg1').css('background-position', '0 '+dy+'px');

        if(dy > 480){
            $('#bg2').css('background-position', '0 '+(dy-480)+'px');
        }else{
            $('#bg2').css('background-position', '0 0');
        }
        if(dy > 960){
            $('#bg3').css('background-position', '0 '+(dy-960)*2+'px');
        }else{
            $('#bg3').css('background-position', '0 0');
        }
        // パ
        if(dy > 960){
            $('#msg1').css('opacity', (dy-960)/480);
            $('#msg1').css('top', 100);
            var dx = (dy-960) > $(this).width()/2-24 ? $(this).width()/2-24 : (dy-960);
            $('#msg1').css('left', dx);
        }else{
            $('#msg1').css('opacity', 0);
        }
        // ラ
        if(dy > 1060){
            $('#msg2').css('opacity', (dy-960)/480);
            $('#msg2').css('top', 160);
            var dx = (dy-1060) > $(this).width()/2-24 ? $(this).width()/2-24 : (dy-1060);
            $('#msg2').css('right', dx);
        }else{
            $('#msg2').css('opacity', 0);
        }
        // ラ
        if(dy > 1160){
            $('#msg3').css('opacity', (dy-960)/480);
            $('#msg3').css('top', 220);
            var dx = (dy-1160) > $(this).width()/2-24 ? $(this).width()/2-24 : (dy-1160);
            $('#msg3').css('left', dx);
        }else{
            $('#msg3').css('opacity', 0);
        }
        // ッ
        if(dy > 1260){
            $('#msg4').css('opacity', (dy-960)/480);
            $('#msg4').css('top', 280);
            var dx = (dy-1260) > $(this).width()/2-24 ? $(this).width()/2-24 : (dy-1260);
            $('#msg4').css('right', dx);
        }else{
            $('#msg4').css('opacity', 0);
        }
        // ク
        if(dy > 1360){
            $('#msg5').css('opacity', (dy-960)/480);
            $('#msg5').css('top', 340);
            var dx = (dy-1360) > $(this).width()/2-24 ? $(this).width()/2-24 : (dy-1360);
            $('#msg5').css('left', dx);
        }else{
            $('#msg5').css('opacity', 0);
        }
        // ス
        if(dy > 1460){
            $('#msg6').css('opacity', (dy-960)/480);
            $('#msg6').css('top', 400);
            var dx = (dy-1460) > $(this).width()/2-24 ? $(this).width()/2-24 : (dy-1460);
            $('#msg6').css('right', dx);
        }else{
            $('#msg6').css('opacity', 0);
        }
    });
});