

$(window).scroll( function() {
    var scolltop=$(document).scrollTop();
    if(scolltop>=50){
        $("#gotop").show();
    }else{
        $("#gotop").hide();
    }
});
$("#gotop").click(function(){
    $("body").animate({scrollTop:0},400);
});