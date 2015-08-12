$(function () {
    // $('.ef').textillate();

    // セレクトボタン切り替えイベント
    $('#effect-in, #effect-out').change(function(){
    	var inVal = $('#effect-in').val();
    	var outVal = $('#effect-out').val();
    	effectIn(inVal, outVal);
    });
    // エフェクト処理
    function effectIn(inVal, outVal){
	    $('.ef').textillate({
	        // 繰り返し、trueにしないと2回目以降が実行されない
	        loop: true,
	        // アニメーション開始までの時間
	        minDisplayTime: 2000,
	        // 遅延時間
	        initialDelay: 0,
	        // アニメーションが自動的にスタートするか
	        autoStart: true,
	        // フェードインのエフェクトの詳細設定
	        in: {
	            // エフェクトの種類（引数から取得）
	            effect: inVal,
	            // 遅延時間の指数
	            delayScale: 1.5,
	            // 文字ごとの遅延時間
	            delay: 50,
	            // trueにすることでアニメーションをすべての文字に同時に適用される
	            sync: false,
	            // trueにすることで文字表示がランダムな順に表示される
	            // (注：syncがtrueの場合は無効になる)
	            shuffle: false
	        },
	        out: {
	            effect: outVal,
	            delayScale: 1.5,
	            delay: 50,
	            sync: false,
	            shuffle: false
	        }
	    });
	}
})