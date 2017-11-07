
// header部分下拉菜单效果
$(".header_right").mouseenter(function(){
	$(".hiddenList").css("display","block");
	$(this).mouseleave(function(){
		$(".hiddenList").css("display","none");
	});
});

//启程返程切换
$(".search_city_icon").click(function(){
	var departPlace = $("#depart").val();
	$("#depart").val($("#return").val());
	$("#return").val(departPlace);
});