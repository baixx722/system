var search = function(){
	// 栏目变化
	var sideText = '',
	selectText = '',
	nameText = '',
	title = '';

	// 初始化
	nameText = $("#example .file").eq(0).text();
	title = $("#title").val();
	$("#example .file").eq(0).addClass("highlight");

	// 左侧栏对应选项
	$("#example .file").click(function(){

		$("#example .file").removeClass("highlight");
		$(this).addClass("highlight");

		sideText = $(this).text();
		nameText = sideText;
		$(".select option").each(function(){
			if ( $(this).val() == sideText ) {
				$(this).attr('selected','selected');
			};
		});

		searchAjax();

		$("#nav").click();
	});

	//选项对应侧栏 
	$(".select").change(function(){

		selectText = $(this).val();
		nameText = selectText;
		$("#example .file").each(function(){
			if ( $(this).text() == selectText ) {
				$(this).addClass("highlight");
			}else{
				$(this).removeClass("highlight");
			};
		});

		searchAjax();
	});

	// 查询按钮
	$("#search").click(function(){

		title = $("#title").val();

		searchAjax();
	});

	//传值 
	var searchAjax = function(){
		$.ajax({
			typ: 'get',
			url: 'datatable.json',
			data:{
				"name": nameText,
				"title": title
			},
			success:function(data){
				tableSuccess(data);
			}
		});

	};

	var tableSuccess = function(data){

		$("#dataTable").html('');

		var datalist = '';
		$.each(data,function(i,o){
				
			datalist += '<tr key = "'+o.id+'"><td class="highlight">'+o.name+'</td><td class="highlight">'+o.title+'</td><td>'+o.time+'</td><td class="highlight"><a href="javascript:;" class="viewClick">访问</a> <a href="javascript:;" class="changeClick">修改</a> <a href="javascript:;" class="deleteClick">删除</a></td></tr>';

		});

		paging(datalist);//分页
		changeView();//查看、修改

	}

	searchAjax();
};
	