$(document).ready(function(){
	$("#add_item_box").on('keydown', function(event) {
		if(event.which == '13'){
			var div = $("<div class='item_div'><span class='btn_delete'><a href='#'><img src='btn_delete.png' style='width: 20px; height: 20px'/></a></span></div>");
			var item = $("#add_item_box").val();
			var item_span = $("<span class = 'item_span'></span>").text(item);
			var new_div = div.prepend(item_span);
			var btn_done = $("<span class='btn_done'><input type='checkbox' class='btn_done'>Got It</span>");
			var item_div = new_div.prepend(btn_done);
			item_div.prependTo("#dynamic_list");
		}
	}).on('keyup', function(event){
		if(event.which == '13'){
			$(this).val(" ");
		}
	});

	$("#submit").on('click', function(e){
		e.preventDefault(e);
		var div = $("<div class='item_div'><span class='btn_delete'><a href='#'><img src='btn_delete.png' style='width: 20px; height: 20px'/></a></span></div>");
		var item = $("#add_item_box").val();
		var item_span = $("<span class = 'item_span'></span>").text(item);
		var new_div = div.prepend(item_span);
		var btn_done = $("<span class='btn_done'><input type='checkbox' class='btn_done'>Got It</span>");
		var item_div = new_div.prepend(btn_done);
		item_div.prependTo("#dynamic_list");
		$("#add_item_box").val(" ");
		});

	$("#reset").on('click', function(){
		$(".item_div").remove();
	});

	$("#dynamic_list").on('click', ".btn_delete", function(e) {
		e.preventDefault();
		$(this).parent().remove();
	});

	$("#dynamic_list").on('mouseenter', ".item_div", function(){
		$(this).find("a").show();
	}).on('mouseleave', ".item_div", function(){
		$(this).find("a").hide();
	});

	$("#dynamic_list").on('click', ".btn_done",function(){
		if($(".btn_done").is(':checked')){
			$(this).closest(".item_div").children().css('text-decoration', 'line-through');
		}
		else {
		$(this).closest(".item_div").children().css('text-decoration', 'none');}

	});
})
