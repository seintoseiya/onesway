window.onload = function () {
    draw();
};

function draw () {
    var canvas = document.getElementById('mycanvas');
    if (!canvas || !canvas.getContext) return false;
    var ctx = canvas.getContext('2d');

/*
    // 四角形の描画
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 5;
    ctx.lineJoin = "round"; //"bevel" "miter"
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.strokeRect(10,10,50,50); // 始点(x,y)から縦横(width,height)の線
    ctx.fillRect(20,20,50,50); // 塗りつぶし
    ctx.clearRect(25,25,40,40); // 切り抜き
*/
/*
    // グラデーション
    // var g = ctx.createLinearGradient(0,0,0,100); // x.yからx,yに向かって線グラデーション
    var g = ctx.createRadialGradient(50,50,20,50,50,60); // 始点の円：中心(x.y)と半径、終点の円：中心(x.y)半径を使った円グラデーション
    g.addColorStop(0.0, "red");
    g.addColorStop(0.5, "yellow");
    g.addColorStop(1.0, "blue");
    ctx.fillStyle = g;
    ctx.fillRect(0,0,100,100);
*/
/*
    // 影
    ctx.shadowColor = "#ccc";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 2;

    // 透明度
    ctx.globalAlpha = 0.5;

    ctx.fillRect(0,0,100,100);
*/
/*
    // 縮小・拡大
    ctx.scale(0.8,0.8); // x,y方向に何割か変形
    ctx.rotate(30/180*Math.PI); // 左上を基点に30度回転
    ctx.translate(100,10); // 移動
    ctx.fillRect(0,0,100,100);
*/
/*
    // 線の描画
    ctx.beginPath(); // 線を引く宣言
    ctx.moveTo(20,20); // 始点
    ctx.lineTo(120,20); // 始点から次点へ線を引く
    ctx.lineTo(120,120);
    ctx.closePath(); // 始点と終点を結ぶ
    ctx.fill(); // 塗りつぶし
    ctx.stroke(); // 実際に描画
*/
/*
    // 曲線の描画
    ctx.beginPath();
    ctx.arc(100,100,50,10/180*Math.PI,210/180*Math.PI); // (始点x,y,半径,10度の位置から,210度の位置まで)線を引く
    ctx.lineWidth = 15;
    ctx.lineCap = "round"; // "butt","square"
    ctx.stroke(); // 実際に描画
    //ctx.fill(); // 実際に描画(塗りつぶし)
*/
/*
    // 文字の描画
    ctx.font = 'bold 20px Verdana';
    ctx.textAlign = 'left'; // right, center, start, end
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'pink';

    ctx.fillText('Canvas', 20, 20, 200); // (文字,始点x,y,最大横幅)に文字を描画
    ctx.strokeText('Canvas', 20, 20, 200); // 縁取り文字を描画
*/
/*
    // 画像の表示
    var img = new Image();
    img.src = 'start.png';
    img.onload = function(){
        ctx.drawImage(img, 10, 10);
    }
*/
/*
    // 画像をパターン表示
    var img = new Image();
    img.src = 'start.png';
    img.onload = function(){
        var pattern = ctx.createPattern(img, 'repeat'); // no-repeat, repeat-x, repeat-y
        ctx.fillStyle = pattern;
        ctx.fillRect(20, 20, 100, 100);
    }
*/
/*
    // 設定の保存、復元
    ctx.fillStyle = "yellow";
    ctx.save();

    ctx.fillRect(0, 0, 50, 50);

    ctx.fillStyle = "blue";
    ctx.fillRect(100, 0, 50, 50);

    ctx.restore();
    ctx.fillRect(200, 0, 50, 50);
*/

/*
    // 素敵な画像を描画
    ctx.globalAlpha = 0.5;

    for (var i = 0; i < 100; i++) {
        var x = Math.floor(Math.random() * 400);
        var y = Math.floor(Math.random() * 200);
        var r = Math.floor(Math.random() * 200);

        ctx.fillStyle = "rgb("+rgb()+","+rgb()+","+rgb()+")";
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
    }

    function rgb () {
        return Math.floor(Math.random() * 255);
    }
*/
/*
    // canvasでアニメーション
    ctx.fillStyle = "red";
    var y = 0;

    (function loop(){ // 繰り返し描画し続ける
        ctx.clearRect(0,0,canvas.width,canvas.height); // canvasを消す
        if(y > canvas.height) y = -50; 
        y++;
        ctx.fillRect(0,y,50,50);
        setTimeout(loop, 10);
    })();
*/
    // 任意の文字をランダム描画
    ctx.globalAlpha = 0.5;
    var a = new Array('HTML5','CSS','JavaScript','Web','Canvas');

    for (var i = 0; i < 50; i++) {
        var x = Math.floor(Math.random() * 800);
        var y = Math.floor(Math.random() * 600);
        var r = Math.floor(Math.random() * 60);

        ctx.font = "bold "+r+"px Verdana";
        ctx.fillStyle = "rgb("+rgb()+","+rgb()+","+rgb()+")";
        ctx.fillText(a[i%5], x, y, 200); // (文字,始点x,y,最大横幅)に文字を描画
        ctx.strokeText('Canvas', x, y, 200); // 縁取り文字を描画
    }

    function rgb () {
        return Math.floor(Math.random() * 255);
    }
}
