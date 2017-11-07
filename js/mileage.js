$(".right_right").click(function(){
    $(".qiandaoBox").css("display","block");
    $(this).css("background-color","#ccc");
    $("#sps").html("已签到");
})
$(".qiandaoKong").click(function(){
    $(".qiandaoBox").css("display","none");
})