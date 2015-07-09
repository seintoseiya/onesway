$(function(){
    $('#button').click(function(){
        $.get('bbs.php', {
        	name: $('#message').val()
        }, function(data){
        	$('#result').html(data);
        });
    });
});
