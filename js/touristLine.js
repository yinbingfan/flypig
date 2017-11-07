
// header部分下拉菜单效果
$(".header_right").mouseenter(function(){
	$(".hiddenList").css("display","block");
	$(this).mouseleave(function(){
		$(".hiddenList").css("display","none");
	});
});


//旅游怎么玩模块切换效果
$(".section_content_tagList .tagList li").click(function(){
	$(".section_content_tagList .tagList li").each(function(){
		$(this).removeClass("active");
		$(this).children(".label").css("display","block");
	});
	$(this).addClass("active");
	$(this).children(".label").css("display","none");
	$(".showmore_tagList").text($(this).children("p").text());
	
});
$(".section_content_tagList .tagList.top>li").click(function(){
	var index = $(this).index();
	$(".section_content_container .section_content_container_item").each(function(){
		$(this).removeClass("active");
	});
	$(".section_content_container_top .section_content_container_item").eq(index).addClass("active");
});	
$(".section_content_tagList .tagList.bottom>li").click(function(){
	var index = $(this).index();
	$(".section_content_container .section_content_container_item").each(function(){
		$(this).removeClass("active");
	});
	$(".section_content_container_bottom .section_content_container_item").eq(index).addClass("active");
});

// 精挑细选板块下拉菜单切换效果
$(".seclectList_item").click(function(){
	$(".seclectList_item").each(function(){
		$(this).removeClass("active");
	
	});
	$(this).addClass("active");
	var num = $(this).index();
	$(".selectList_mune_list").each(function(){
		$(this).removeClass("show");
	});
	$(".icon.iconfont.icon-shouqijiantouxiao").each(function(){
		$(this).css("display","none");
	});
	$(".icon.iconfont.icon-xialajiantouxiao").each(function(){
		$(this).css("display","block");
	});
	$(".selectList_mune_list").eq(num).addClass("show");
	$(this).children(".icon.iconfont.icon-shouqijiantouxiao").css("display","block");
	$(this).children(".icon.iconfont.icon-xialajiantouxiao").css("display","none");

});

$(".selectList_mune_item li").click(function(){
	$(".selectList_mune_item li").each(function(){
		$(this).removeClass("active");
	
	});
	$(this).addClass("active");

	$(".selectList_mune_list").each(function(){
		$(this).removeClass("show");
	});

	$(".icon.iconfont.icon-shouqijiantouxiao").each(function(){
		$(this).css("display","none");
	});
	$(".icon.iconfont.icon-xialajiantouxiao").each(function(){
		$(this).css("display","block");
	});

});

//精挑细选板块相对可视窗口的固定效果
// $(window).scroll(function(){
// 	var scrollTop = $(this).scrollTop();
	
// 	if (scrollTop>1250) {
// 		alert(1);
// 		$(".selectList").css({
// 			position:"fixed",
// 			top:0,
// 			left:0
// 		});
// 	}
// });

