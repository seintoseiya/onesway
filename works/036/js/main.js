$(function () {
	$('[name=mode]').change(function() {
		var val = $('[name=mode]').val();
		if(val === 'color'){
    		$('body').css('background', '#0bd url(img/bg.jpg) no-repeat');
    	}else if(val === 'image'){
    		$('body').css('background-image', 'url(img/bg.jpg), url(img/bg2.jpg)')
    				
    				.css('background-size', 'cover');
    	}else{
    		$('body').css('background', 'linear-gradient(125deg, #009, #f00) fixed, url(img/bg.jpg)');
    	}
	});
	$('[name=blend]').change(function() {
		var val = $('[name=blend]').val();
    	$('body').css('background-blend-mode', val);
	});
});