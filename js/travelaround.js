$(function () {
   $(".shade").height($(".bournImg>img").height());
    $(".shade").width($(".bournImg>img").width());
});

//轮播图
var mySwiper = new Swiper ('.banner', {
    // direction: 'vertical',//是否垂直
    loop: true,//是否可以循环拖动
    autoplay:3000,//是否自动播放
    // 如果需要分页器
    pagination: '.swiper-pagination',

});
// 精挑细选选项卡
