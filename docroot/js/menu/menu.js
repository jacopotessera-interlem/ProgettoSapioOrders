$('#min-menu').click(function(){
	$("#p_p_id_menu_WAR_SapioMockupportlet_").fadeToggle("800", "swing");
});

$('#min-menu, #cart-button').mouseenter(function(){
	$(this).addClass('menu-hover-pointer')
});

$('#min-menu, #cart-button').mouseleave(function(){
	$(this).removeClass('menu-hover-pointer')
});

$('#button-ordini, #button-prodotti, #button-home, #button-profilo, #button-assistenza').mouseenter(function(){
	var a = this.attributes[1].nodeValue;
	var b = '#'+a;
	var me = $(b).children()[0]
	console.log(me);
	$(me).addClass('menu-hover-pointer light-opacity');
	$(me).removeClass('dark-opacity');
});

$('#button-ordini, #button-prodotti, #button-home, #button-profilo, #button-assistenza').mouseleave(function(){
	var a = this.attributes[1].nodeValue;
	var b = '#'+a;
	var me = $(b).children()[0]
	$(me).removeClass('menu-hover-pointer light-opacity');
	$(me).addClass('dark-opacity');
});

$('#button-ordini').click(function(){
	window.location.replace("/web/guest/i-miei-ordini");
});

$('#button-prodotti').click(function(){
	window.location.replace("/web/guest/i-miei-prodotti");
});

$('#button-home').click(function(){
	window.location.replace("/web/guest/home");
});

$('#button-profilo').click(function(){
	window.location.replace("#");
});

$('#button-assistenza').click(function(){
	window.location.replace("/web/guest/assistenza");
});

$('#cart-button').click(function(){
	window.location.replace("/web/guest/carrello");
});