
//section_hot选项卡切换效果
$(".sectionList_selectMune li").click(function(){
	$(".sectionList_selectMune li").each(function(){
		$(this).removeClass("active");
	});

	$(this).addClass("active");
	
	var index = $(this).index();
	// alert(index);
	
	$(".sectionList_detial_box").each(function(){
		$(this).removeClass("show");
	});
	$(".sectionList_detial_box").eq(index).addClass("show");
});
