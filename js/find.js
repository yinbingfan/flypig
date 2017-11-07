$(function () {
    //底部切换效果
    $(".foot>a").mouseenter(function () {
        $(this).find("img").css({
            display:"block"
        });
        $(this).find("i").css({
            display:"none"
        })
    });

    $(".foot>a").mouseleave(function () {
        $(this).find("img").css({
            display:"none"
        });
        $(this).find("i").css({
            display:"block"
        })
    });
})