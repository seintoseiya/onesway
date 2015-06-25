$(function(){
    var isPlaying = false;
    var goal = false;
    $('#start').mouseover(function() {
        if(goal) return;
        isPlaying = true;
        $('.barriers > div').css('background-color', '#009dff');
        $('#message').html("Goalを目指しましょう");
    });
    $('#goal').mouseover(function() {
        if(isPlaying){
            alert("Goal!");
            isPlaying = false;
            goal = true;
            $('.barriers > div').css('background-color', '#FFB');
            $('#goal').css('background-color', '#E66');
            $('#message').html("Congratulations‼︎");
        }
    });
    $('.barriers').mouseleave(function() {
        if(isPlaying){
            alert("Out!");
            isPlaying = false;
            $('.barriers > div').css('background-color', '#FFB');
            $('#start').css('background-color', '#E66');
            $('#message').html("Startにマウスを移動してください");
        }
    }); 
});
// スマホからのアクセス処理
if ((navigator.userAgent.indexOf('iPhone') > 0 &&
    navigator.userAgent.indexOf('iPad') == -1) ||
    navigator.userAgent.indexOf('iPod') > 0 ||
    navigator.userAgent.indexOf('Android') > 0) {
    $('#sumaho').html("※PCブラウザからご覧ください");
}
