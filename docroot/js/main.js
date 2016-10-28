$(document).ready(function(){
	
	$(document).on("focusin","input",function(){
		$(this).addClass("focus");
	});
	$(document).on("focusout","input",function(){
		$(this).removeClass("focus");
	});
	$(document).on("mouseenter",".tabella tr",function(){
		$(this).addClass("mouseover");
	});
	$(document).on("mouseleave",".tabella tr",function(){
		$(this).removeClass("mouseover");
	});
	
	$(document).on("click",".tabella tr",function(){
		$("tr").removeClass("selected");
		$(this).addClass("selected");
	});

	/*$(".logo").click(function(){//$(document).on("click","img",function(){
		$("#p_p_id_menu_WAR_SapioMockupportlet_").fadeToggle("800", "swing");
	});
	
	$("img").removeAttr("href");
	$(".default-logo").removeAttr("href");
	$(".site-name").attr("title","");
	$(".site-name").html("Menu");*/
});

function fix_tabella(data,table){
	$(".yui3-datatable-paginator-control-first").html('<span class="ui-icon icon-double-angle-left bigger-140"></span>');
	$(".yui3-datatable-paginator-control-prev").html('<span class="ui-icon icon-angle-left bigger-140"></span>');
	$(".yui3-datatable-paginator-control-next").html('<span class="ui-icon icon-angle-right bigger-140"></span>');
	$(".yui3-datatable-paginator-control-last").html('<span class="ui-icon icon-double-angle-right bigger-140"></span>');
	$(".yui3-datatable-foot").attr('align','center');
	$(".yui3-datatable-paginator-group:not(.yui3-datatable-paginator-per-page) > label > button").remove();
	$(".yui3-datatable-paginator-group:not(.yui3-datatable-paginator-per-page) > label").contents().filter(function(){return this.nodeType == 3;}).replaceWith(" |&nbsp; Pagina &nbsp;");
	$(".yui3-datatable-paginator-per-page > label").contents().filter(function(){return this.nodeType == 3;}).replaceWith("");
						
	var totPgs =  Math.ceil(data.length/table.get('rowsPerPage'));
	var stringa = "<label id='paginator-custom-label'>&nbsp;di "+ totPgs +" &nbsp;| &nbsp;</label>";
	$(".yui3-datatable-paginator-group:not(.yui3-datatable-paginator-per-page) > label").after(stringa);
	$("select").click(function(){
		var val=$( "select" ).val();
		var val2=table.get('rowsPerPage');
		if(val == null){totPgs =  Math.ceil(data.length/val2);}
		else{totPgs = Math.ceil(data.length/val);}
		var stringa = "<label id='paginator-custom-label'>&nbsp;di "+ totPgs +" &nbsp;| &nbsp;</label>";
		$("#paginator-custom-label").remove();
		$(".yui3-datatable-paginator-group:not(.yui3-datatable-paginator-per-page) > label").after(stringa);
	});
}