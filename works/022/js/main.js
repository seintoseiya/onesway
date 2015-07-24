$(function () {
    var pos1 = $('#pa1').offset();
    var pos2 = $('#ra1-1').offset();
    var pos3 = $('#ra2-1').offset();
    var pos4 = $('#tu1').offset();
    var pos5 = $('#ku1').offset();
    var pos6 = $('#su1').offset();

    $(window).scroll(function() {
        var dy = $(this).scrollTop();
        console.log(dy);

        // パ
        $('#pa1').css('top', pos1.top + dy / 10);
        $('#pa1').css('width', 40 + dy * 0.03);
        $('#pa1').css('height', 40 - dy * 0.01);
        $('#pa1').css('transform', 'rotate('+(dy*0.05)+'deg)');

        $('#pa2').css('top', pos1.top + dy / 10);
        $('#pa2').css('left', pos1.left + dy / 22);
        $('#pa2').css('width', 40 + dy * 0.03);
        $('#pa2').css('height', 40 - dy * 0.01);
        $('#pa2').css('transform', 'rotate('+(dy*0.1)+'deg)');

        $('#pa3').css('top', pos1.top + dy / 15);
        $('#pa3').css('left', pos1.left + dy / 15);
        $('#pa3').css('border-radius', dy / 120);

        // ラ
        $('#ra1-1').css('top', pos2.top + dy / 15);
        $('#ra1-1').css('left', pos2.left + dy / 10);
        $('#ra1-1').css('width', 40 + dy * 0.03);
        $('#ra1-1').css('height', 40 - dy * 0.01);

        $('#ra1-2').css('top', pos2.top + dy / 12);
        $('#ra1-2').css('left', pos2.left + dy / 10);
        $('#ra1-2').css('width', 40 + dy * 0.03);
        $('#ra1-2').css('height', 40 - dy * 0.01);
        
        $('#ra1-3').css('top', pos2.top + dy / 9.5);
        $('#ra1-3').css('left', pos2.left + dy / 9);
        $('#ra1-3').css('width', 40 + dy * 0.03);
        $('#ra1-3').css('height', 40 - dy * 0.01);
        $('#ra1-3').css('transform', 'rotate('+(dy*0.05)+'deg)');

        // ラ
        $('#ra2-1').css('top', pos3.top + dy / 15);
        $('#ra2-1').css('left', pos3.left + dy / 6.5);
        $('#ra2-1').css('width', 40 + dy * 0.03);
        $('#ra2-1').css('height', 40 - dy * 0.01);

        $('#ra2-2').css('top', pos3.top + dy / 12);
        $('#ra2-2').css('left', pos3.left + dy / 6.5);
        $('#ra2-2').css('width', 40 + dy * 0.03);
        $('#ra2-2').css('height', 40 - dy * 0.01);
        
        $('#ra2-3').css('top', pos3.top + dy / 9.5);
        $('#ra2-3').css('left', pos3.left + dy / 6);
        $('#ra2-3').css('width', 40 + dy * 0.03);
        $('#ra2-3').css('height', 40 - dy * 0.01);
        $('#ra2-3').css('transform', 'rotate('+(dy*0.05)+'deg)');

        // ッ
        $('#tu1').css('top', pos4.top + dy / 9.5);
        $('#tu1').css('left', pos4.left + dy / 4.9);
        $('#tu1').css('width', 40 - dy * 0.01);
        $('#tu1').css('height', 40 - dy * 0.01);
        $('#tu1').css('transform', 'rotate('+(dy*0.03)+'deg)');

        $('#tu2').css('top', pos4.top + dy / 9.5);
        $('#tu2').css('left', pos4.left + dy / 4.7);
        $('#tu2').css('width', 40 - dy * 0.01);
        $('#tu2').css('height', 40 - dy * 0.01);
        $('#tu2').css('transform', 'rotate('+(dy*0.03)+'deg)');
        
        $('#tu3').css('top', pos4.top + dy / 9);
        $('#tu3').css('left', pos4.left + dy / 4.7);
        $('#tu3').css('width', 40 + dy * 0.01);
        $('#tu3').css('height', 40 - dy * 0.01);
        $('#tu3').css('transform', 'rotate('+(dy*0.05)+'deg)');

        // ク
        $('#ku1').css('top', pos5.top + dy / 13);
        $('#ku1').css('left', pos5.left + dy / 4.3);
        $('#ku1').css('width', 40 + dy * 0.01);
        $('#ku1').css('height', 40 - dy * 0.01);
        $('#ku1').css('transform', 'rotate('+(dy*0.05)+'deg)');

        $('#ku2').css('top', pos5.top + dy / 15);
        $('#ku2').css('left', pos5.left + dy / 4);
        $('#ku2').css('width', 40 + dy * 0.01);
        $('#ku2').css('height', 40 - dy * 0.01);
        
        $('#ku3').css('top', pos5.top + dy / 10);
        $('#ku3').css('left', pos5.left + dy / 4.4);
        $('#ku3').css('width', 40 + dy * 0.05);
        $('#ku3').css('height', 40 - dy * 0.01);
        $('#ku3').css('transform', 'rotate('+(dy*0.05)+'deg)');

        // ス
        $('#su1').css('top', pos6.top + dy / 15);
        $('#su1').css('left', pos6.left + dy / 3.5);
        $('#su1').css('width', 40 + dy * 0.03);
        $('#su1').css('height', 40 - dy * 0.01);

        $('#su2').css('top', pos6.top + dy / 10);
        $('#su2').css('left', pos6.left + dy / 3.7);
        $('#su2').css('width', 40 + dy * 0.06);
        $('#su2').css('height', 40 - dy * 0.01);
        $('#su2').css('transform', 'rotate('+(dy*0.055)+'deg)');
        
        $('#su3').css('top', pos6.top + dy / 8.5);
        $('#su3').css('left', pos6.left + dy / 3.3);
        $('#su3').css('width', 40 + dy * 0.03);
        $('#su3').css('height', 40 - dy * 0.01);
        $('#su3').css('transform', 'rotate('+(dy*0.02)+'deg)');
    });
});