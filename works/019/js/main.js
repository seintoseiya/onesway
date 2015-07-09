$(function(){
    $('#greet').click(function(){
    	if(!$('#user').val() || !$('#message').val()) return;
        $.get('bbs.php', {
        	user: $('#user').val(),
        	message: $('#message').val(),
        	mode: "0" // 書き込み
        }, function(data){
        	$('#result').html(data);
        	// scTarget();
        });
    });
    loadLog();
    logAll();
});

// ログをロードする
function loadLog(){
	$.get('bbs.php', {
		mode: "1" // 読み込み
    }, function(data){
    	$('#result').html(data);
    	// scTarget();
    });
}

// 一定間隔でログをリロードする
function logAll(){
	setTimeout(function(){
		loadLog();
		logAll();
	},5000); //リロード時間はここで調整
}

/*
 * 画面を最下部へ移動させる
 */
// function scTarget(){
// 	var pos = $("#end").offset().top; 
// 	$("#talkField").animate({ 
// 		scrollTop:pos
// 	}, 0, "swing"); //swingで0が良さそう
// 	return false;
// }