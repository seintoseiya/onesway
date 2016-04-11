$(function() {
    $('.tap').hammer().on('tap',function(event){
        alert("tap");
    });
    $('.doubletap').hammer().on('doubletap',function(event){
        alert("doubletap");
    });
    $('.swipe').hammer().on('swipe',function(event){
        alert("swipe");
    });
});
