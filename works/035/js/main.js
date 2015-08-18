$(function () {
	// localStorage.setItem('memo','test'); // データセット
	// localStorage.getItem('memo'); // データ取得
	// localStorage.removeItem('memo'); // データ削除
	// localStorage.clear(); // データ全削除

	var list = []; // localStorageの内容をソートして格納するための配列
	var i = 0; // listのアドレス番号及びlocalStorage保存時のkey

	// 初期読み込み
	// アルファベット順で格納されている(key:1,10,2,3,4,5 ...)ので、配列に格納してソートする
	for(var key in localStorage){
		list[key] = localStorage.getItem(key);
		// console.log(list);
	}
	for(i in list){
		// <li>を生成
		console.log(i);
		cleateLi(list[i]);
	}
	// 初期読み込み後にiを+1
	i++;

	// 保存ボタン
	$('#save').click(function(){
		// 入力フィールドの値を取得
		var memo = $('#memo').val();

		// 入力フィールドを空の場合は処理しない
		if(!memo) return;

		// ローカルストレージに保存
		localStorage.setItem(i, memo);

		// <li>を生成
		cleateLi(memo);

		// 入力フィールドを空にする
		$('#memo').val('');

		// iのカウントアップ
		i++;
	});

	// <li>生成メソッド
	function cleateLi(value){
		// 消去ボタン押下時に要素を特定するためにdata属性を利用する
		var li = $('<li>').html(value).addClass('todo').attr('data-todo',i);

		// 要素を末尾に追加
		$('ul').append(li);

		// 動的に生成された要素<li>にonclickイベントを設定
		$('ul').on('click', '.todo', function(){
			localStorage.removeItem($(this).data('todo'));
			$(this).remove();
			console.log($(this).data('todo'));
		});
	}

	// 全消去ボタン
	$('#clear').click(function(){
		localStorage.clear();
		$('li').remove();
	});
})