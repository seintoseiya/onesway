$(function() {
    function playAnimation(){
        firstAction()
            .then(scoundAction)
            .then(thirdAction)
            .then(showReplay);
    }
    
    // リプレイ 
    $("#replay").click(function(){
        $("#replay").fadeOut();
        playAnimation();
    });

    function firstAction(){
        var d = new $.Deferred;
        // 初期位置指定
        $(".box_red, .box_green").css({
            "top" : "-100px"
        });
        $(".box_blue").css({
            "top" : "-200px"
        });
        // アニメーション
        $(".box_red").animate({
            "top" : "400px"
        }, 1000, function(){
            d.resolve();
        });
        return d.promise();
    }

    function scoundAction(){
        var d = new $.Deferred;        
        $(".box_green").animate({
            "top" : "450px"
            }, 1000, function(){
            d.resolve();
        });
        return d.promise();
    }

    function thirdAction(){
        var d = new $.Deferred;
        $(".box_blue").animate({
            "top" : "300px"
            }, 1000, function(){
            d.resolve();
        });
        return d.promise();
    }

    function showReplay(){
        $("#replay").fadeIn("fast");
    }

    // 実行
    playAnimation();
});