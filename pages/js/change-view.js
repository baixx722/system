var changeView = function(){
	// 查看
	$(".viewClick").click(function(){
		var id = $(this).parents('tr').attr("key");
		$.ajax({
			type: "get",
			url: "content.json",
			data: id,
			success:function(data){
				$.each(data,function(i,o){
					$(".viewName").html(o.name);
					$(".viewTitle").html(o.title);
					$(".viewContent").html(o.content);
				});
			}
		});

		$("#view").removeClass("none");
		$("#change").addClass("none");
		$("#main").addClass("none");
	});


	// 修改
	$(".changeClick").click(function(){
		var id = $(this).parents('tr').attr("key");
		$.ajax({
			type: "get",
			url: "content.json",
			data: id,
			success:function(data){
				$.each(data,function(i,o){
					$("#changeName").val(o.name);
					$("#changeTitle").val(o.title);
					$("#changeContent").val(o.content);
				});
			}
		});

		$("#change").removeClass("none");
		$("#view").addClass("none");
		$("#main").addClass("none");
	});


	//删除 
	$(".deleteClick").click(function(){
		alert("确认删除？");
		var id = $(this).parents('tr').attr("key");
		$.ajax({
			type: "get",
			url: "content.json",
			data: id,
			success:function(data){
				alert("已删除");
			}
		});

	});


	// 侧栏返回列表
	$("#example .file").click(function(){
		$("#main").removeClass("none");
		$("#view").addClass("none");
		$("#change").addClass("none");
	});
}
	