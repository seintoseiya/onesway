$(function(){
    $('#layer_board_area').layerBoard({
        delayTime: 100, // 表示までの待ち時間(初期値：200)
        fadeTime : 500, // 表示のフェード時間(初期値：500)
        alpha : 0.8, // レイヤーの透明度(初期値：0.5)
        limitMin : 1, // 何分経過後に再度表示するか(初期値：1)
        easing: 'swing', // イージング(初期値：linear)
        limitCookie : 10 // cookie保存期間(初期値：1日)
    });
});