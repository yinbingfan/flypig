// 旅游线路 banner轮播
var mySwiper = new Swiper ('.swiper-container1', {
    // direction: 'vertical',//是否垂直
    loop: true,//是否可以循环拖动
    autoplay:2000,//是否自动播放
    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',

})

//目的地 banner轮播
var mySwiper = new Swiper ('.swiper-container2', {
    loop: true,
    autoplay:2000,
    pagination: '.swiper-pagination',
})
// muneList
var mySwiper = new Swiper ('.swiper-container3', {
    loop: true,
    // autoplay:2000,
    pagination: '.swiper-pagination',
})

// middleAdd
var mySwiper = new Swiper ('.swiper-container4', {
    direction: 'vertical',//是否垂直
    loop: true,
    autoplay:2000,
})
var mySwiper = new Swiper ('.swiper-container5', {
    direction: 'vertical',//是否垂直
    loop: true,
    autoplay:2000,
})
var mySwiper = new Swiper ('.swiper-container6', {
    loop: true,
    autoplay:2000,
})

//精选榜单
var mySwiper = new Swiper ('.swiper-container7', {
    slidesPerView: 2.2,
    paginationClickable: true,
    spaceBetween:10,
    freeMode: true,
    // loop:true,
    calculateHeight:true,
    roundLengths:true,
    cssWidthAndHeight:true,
    visiblilityFullfit:true
})

//经典玩法
var mySwiper = new Swiper ('.swiper-container8', {
    slidesPerView: 1.2,
    paginationClickable: true,
    spaceBetween:45,
    freeMode: true,
    // loop:true,
    calculateHeight:true,
    roundLengths:true,
    cssWidthAndHeight:true,
    visiblilityFullfit:true
})