$(function(){
    var canvas = document.getElementById('mycanvas');
    if(!canvas || !canvas.getContext) return false;
    var ctx = canvas.getContext('2d');

    var startX,
        startY,
        x,
        y,
        borderWidth = 10,
        isDrawing = false;
        penType = 0;


    $('#mycanvas').mousedown(function(e) {
        isDrawing = true;
        startX = e.pageX - $(this).offset().left - borderWidth;
        startY = e.pageY - $(this).offset().top - borderWidth;
        })
        .mousemove(function(e) {
            if(!isDrawing) return;
            if(penType == 0){
            x = e.pageX - $(this).offset().left - borderWidth;
            y = e.pageY - $(this).offset().top - borderWidth;
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(x, y);
                ctx.stroke();
                startX = x;
                startY = y;
            }
        })
        .mouseup(function(e){
            isDrawing = false;
            if(penType == 1){
                x = e.pageX - $(this).offset().left - borderWidth - startX;
                y = e.pageY - $(this).offset().top - borderWidth - startY;
                ctx.strokeRect(startX, startY, x, y);
            }
        })
        .mouseleave(function(){
            isDrawing = false;
        });

    $('#penType').change(function(){
        penType = $(this).val();
    });
    $('#penColor').change(function(){
        ctx.strokeStyle = $(this).val();
    });
    $('#penWidth').change(function(){
        ctx.lineWidth = $(this).val();
    });
    $('#erase').click(function(){
        if(!confirm('本当に消去しますか')) return;
        ctx.clearRect(0,0, canvas.width, canvas.height);
    });
    $('#save').click(function(){
        var img = $('<img>').attr({
            src: canvas.toDataURL(),
            download: new Date().getTime() + '.png'
        });
        var link = $('<a>').attr({
            href: canvas.toDataURL().replace('image/png', 'application/octet-stream'),
            download: new Date().getTime() + '.png'
        });
        $('#gallery').append(link.append(img.addClass('thumnail')));
        ctx.clearRect(0,0, canvas.width, canvas.height);
    });
});