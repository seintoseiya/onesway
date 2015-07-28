$(document).ready(function() {
                 
    // opacityrollover のオプション設定                
    var onMouseOutOpacity = 0.67;  // マウスアウト時の透明度
    $('#thumbs ul.thumbs li').opacityrollover({
        mouseOutOpacity:   onMouseOutOpacity,
        mouseOverOpacity:  1.0, // マウスオーバー時の透明度
        fadeSpeed:         'fast', // フェードの速さ
        exemptionSelector: '.selected' // 現在選択中の要素のクラス
    });
                 
    // Galleriffic のオプション設定
    var gallery = $('#thumbs').galleriffic({
        delay: 5000, // 画像が切り替わる時間
        numThumbs: 9, // 1画面に表示させるサムネイルの数
        preloadAhead: 9, // プリロードする画像数
        enableTopPager: false, // サムネイルの上部のページャーを出す/出さない
        enableBottomPager: true, // サムネイルの下部のページャーを出す/出さない
        maxPagesToShow: 5, // ページの最大値
        imageContainerSel: '#slideshow', // スライドショー画像部分のid名
        controlsContainerSel: '#controls', // コントロール部分のid名
        captionContainerSel: '#caption', // キャプション部分のid名
        loadingContainerSel: '#loading', // ローディング部分のid名
        renderSSControls: true, // trueでスライドショー画像の上部にスライドショーのオンオフボタン表示
        renderNavControls: true, // trueでスライドショー画像の上部に画像送り戻しのボタン表示
        playLinkText: 'Slideshow | Start', // コントローラーのplayのテキスト変更
        pauseLinkText: 'Slideshow | Stop', // コントローラーのPauseのテキスト変更
        prevLinkText: '&lsaquo; Prev', // コントローラーの前の画像へのテキスト変更
        nextLinkText: 'Next &rsaquo;', // コントローラーの次の画像へのテキスト変更
        nextPageLinkText: 'Next &rsaquo;',　// コントローラーの次ページへのテキスト変更
        prevPageLinkText: '&lsaquo; Prev',　// コントローラーの前ページへのテキスト変更
        enableHistory: false, // 画像が切り替わった時にurlのハッシュフラグメントとブラウザのキャッシュを更新するかどうか
        autoStart: false, // 自動再生するかしないか
        syncTransitions: true, // 画像の切り替わりを画像のIn/Outと同時に行う。falseでは個別に行う。
        defaultTransitionDuration: 900, // 初期設定の画像切り替えの際の切り替えに要する時間
        onSlideChange: function(prevIndex, nextIndex) { // スライドが切り替わる時の処理
            // 'this' refers to the gallery, which is an extension of $('#thumbs')
            this.find('ul.thumbs').children()
            .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
            .eq(nextIndex).fadeTo('fast', 1.0);
        },
        onPageTransitionOut: function(callback) { // ページが切り替わる（Out）時の処理
            this.fadeTo('fast', 0.0, callback);
        },
        onPageTransitionIn: function() { // ページが切り替わる（In）時の処理
            this.fadeTo('fast', 1.0);
        }
    });
});