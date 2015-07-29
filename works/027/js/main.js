$(document).ready(function(){
    $('#nav').localScroll();

    //$('パララックスさせたい要素').parallax(xPosition, speedFactor, outerHeight):
	//xPosition - 要素の水平方向の表示位置
	//inertia - 垂直方向の相対的な速度 ＜例＞0.1 はスクロールの1/10の速さ, 2 はスクロールの2倍の速さ, マイナスをつけると動く方向が反転
	//outerHeight (true/false) - 要素が表示領域のなかに入ったかを判定するのにouterHeight（borderやpaddingを含んだ高さ）を使用するかどうか
    $('#intro').parallax("50%", 0.1);
    $('#second').parallax("50%", 0.1);
    // $('.bg').parallax("50%", 0.4);
    $('#third').parallax("50%", 0.3);
});
