$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true, // 縦スクロールのナビゲーションの表示
        navigationPosition: 'right', // 縦スライドのナビゲーション位置
        scrollingSpeed: 1000, // スクロールスピード
        scrollBar: true,　// スクロールバーの表示
        loopBottom: true, // 最後の画面をスクロールした後、最初に戻るか
        slidesNavigation: true, // スライドのナビゲーション表示
        // onLeave: function(index, nextIndex, direction){
        //     if(index == 1 && direction =='down'){
        //     //セクション１を下にスクロールしたとき実行されます
        //         alert('１枚目を下にスクロールして、こんにちは２枚目！');
        //     }
        //     else if(index == 2 && direction =='up')
        //     //セクション２を上にスクロールしたときに実行されます
        //         alert('２枚目を上にスクロールして、こんにちは１枚目！');
        // }
    });
});