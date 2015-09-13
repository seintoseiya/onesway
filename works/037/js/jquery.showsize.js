;(function($) { // この;は他のファイルの;漏れのための予防

	$.fn.showsize = function(options){
		var elements = this; // このthisは指定した全ての要素（この場合２つのimg）
		elements.each(function(){
			var opts = $.extend({}, $.fn.showsize.default, options, $(this).data()); // $.extendは後ろの引数の方が優先度が高い

			$(this).click(function(){ // このthisは１つのimg
				var msg = opts.message;
				$(this).wrap('<div style="position:relative;")></div>');
				var div = $('<div>')
							.text(msg)
							.css('position', 'absolute')
							.css('top', '0')
							.css('background', 'black')
							.css('color', getRandomColor())
							.css('font-size', opts.size + 'px')
							.css('opacity', opts.opacity)
							.css('padding', '2px');
				$(this).after(div);
			});
		});
		return this; // チェーンメソッドのため
	};

	function getRandomColor(){
		var colors = ['white', 'pink', 'orange', 'green'];
		return colors[Math.floor(Math.random() * colors.length)];
	}

	$.fn.showsize.default = {
		size: 10,
		opacity: 0.9
	}
})(jQuery);