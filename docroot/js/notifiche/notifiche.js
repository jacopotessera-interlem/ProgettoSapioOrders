window.getWidthOfText = function(txt,fontweight){//, fontname, fontsize){
  // Create dummy span
  this.e = document.createElement('span');
  // Set font-size
  //this.e.style.fontSize = fontsize;
  // Set font-face / font-family
  this.e.style.fontWeight = fontweight;
  // Set text
  this.e.innerHTML = txt;
  document.body.appendChild(this.e);
  // Get width NOW, since the dummy span is about to be removed from the document
  var w = this.e.offsetWidth;
  // Cleanup
  document.body.removeChild(this.e);
  // All right, we're done
  return w;
}

//$( window ).resize(function() {
//	table.render("#notifiche_tabella");
//});


anteprima = function(data_full){
	var data = [];
	var tit_lar = $("#portlet_notifiche_WAR_SapioMockupportlet").width()*0.2;
	var testo_lar= $("#portlet_notifiche_WAR_SapioMockupportlet").width()*0.7;
	console.log(tit_lar + " "+ testo_lar) ;
  var font_size=14;
	var car_titolo = new Array();
	var l = new Array();

	for(var i=0;i<data_full.length;i++){

		for(car_titolo[i]=0;car_titolo[i]<data_full[i]['titolo'].length;car_titolo[i]++){
	
			l[i] = window.getWidthOfText(data_full[i]['titolo'].substring(0,car_titolo[i])+"...","bold");
			
			
			/*l[i]=$("<span>"++"</span>").width;*/
			//console.log(l[i]);
			if(l[i]>tit_lar){break;}
		}
	}
	
	var carTitolo = 2*Math.max.apply(null, car_titolo);
	console.log(carTitolo);
	//var car_titolo = 2*Math.floor(tit_lar/font_size)-6;
	var car_testo = 2*Math.floor(testo_lar/font_size)-6;

	
	
	
	for(var i=0;i<data_full.length;i++){

		Dtitolo = data_full[i]['titolo'].length>carTitolo ? data_full[i]['titolo'].substring(0,carTitolo-3)+"..." : data_full[i]['titolo'];
		Ddata =data_full[i]['Data'];
		Dtesto= data_full[i]['testo'].length >car_testo ? data_full[i]['testo'].substring(0,car_testo)+"..." : data_full[i]['testo']

		
		data.push({'Titolo':Dtitolo,'Data':Ddata,'Anteprima':Dtesto});
	}
	return data;
}

YUI().use('aui-datatable','event-resize',function(Y) {
	var columns = [
	               {key: 'Titolo'},
	               {key: 'Data'},
	               {key: 'Anteprima'},
	               {
	            	   key: 'Letto',
	            	   formatter: function(o){
	            		   o.rowClass = o.value == '0' ? 'nonletto' : o.rowClass;
	            		   o.rowClass = o.value == '1' ? 'letto' : o.rowClass;
	            	   }
	               }
	               ];

	var data_full = [
	                 {'titolo': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo sem, gravida et quam vitae, sagittis rhoncus tortor. Vivamus ac.', 'Data': '5 Set', 'testo': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit volutpat purus, quis convallis lectus tempor vitae. Sed tempus nibh lorem. Integer sit amet libero risus. Cras volutpat elementum cursus. Vestibulum volutpat arcu eget sapien gravida finibus. Vivamus fringilla pellentesque fermentum. Nullam finibus mi non velit vehicula, eu aliquet erat volutpat. Morbi condimentum purus in nunc viverra, sed feugiat felis finibus. Sed lacinia nisi a lectus lacinia, vehicula volutpat tellus pulvinar. Nulla id tellus id odio vulputate maximus. Proin lacus diam, dignissim a condimentum ut, cursus sed tellus. Phasellus in commodo ligula, eget rhoncus tellus.','Letto': '0'},
	                 {'titolo': 'Lorem ipsum dolor sit amet.', 'Data': '5 Set', 'testo': 'Integer commodo quis massa id laoreet. Pellentesque consequat tortor id erat dictum, vitae posuere lectus faucibus. Duis dolor magna, commodo non velit et, consequat interdum eros. Donec commodo pulvinar nisi, et placerat dolor. Ut pretium mollis interdum. Quisque in nisi nec purus sagittis elementum in facilisis nibh. Proin eget commodo sem. Aliquam vel maximus neque, in efficitur erat. Vivamus dignissim neque quis facilisis pellentesque. Nulla sit amet lectus hendrerit ex mollis commodo. Phasellus eget augue quis tellus gravida fringilla ut eu mauris. Vestibulum et libero sit amet ligula laoreet semper. Morbi pulvinar est neque, eget auctor felis bibendum ac. Nam vel vehicula lorem.','Letto': '0'},
	                 {'titolo': 'Lorem ipsum dolor.', 'Data': '30 Ago', 'testo': 'Cras dapibus interdum tellus id euismod. Pellentesque lacinia et velit eget mollis. Sed accumsan sollicitudin orci, at mattis libero porttitor non. Sed viverra, lacus non cursus volutpat, ligula sapien hendrerit ipsum, sed condimentum metus enim tempor metus. Phasellus varius, ligula et feugiat feugiat, ipsum quam suscipit diam, eu pulvinar nisi enim at metus. Suspendisse accumsan massa a neque tincidunt, ut consequat orci elementum. Nullam sapien libero, consectetur sed augue vitae, ultricies gravida leo. Praesent consectetur quam non felis consequat accumsan eu eget purus. Phasellus tincidunt arcu ut ex lobortis, ut sollicitudin lorem maximus.','Letto': '1'},
	                 {'titolo': 'Lorem ipsum dolor sit amet.. Suspendisse vel tortor nec quam semper accumsan.', 'Data': '28 Ago', 'testo': 'Aenean eu magna id turpis dapibus consectetur. Vestibulum ac turpis vitae purus lacinia mattis at sed magna. Aliquam vitae viverra mauris. Cras lobortis vehicula mauris nec lacinia. Phasellus purus orci, consequat eu facilisis quis, sollicitudin eu augue. Quisque mollis sem sem, eget aliquam nisl sollicitudin sed. Fusce sit amet risus ornare, vehicula lectus id, cursus enim. Vivamus aliquet urna sodales purus porta tempor. In hac habitasse platea dictumst. Integer aliquam eu turpis vel aliquet. Pellentesque volutpat enim justo, id efficitur magna auctor eget. Ut ornare nisi scelerisque nibh egestas, a aliquet elit vehicula. Vestibulum felis magna, condimentum vitae consectetur volutpat, aliquet eget velit.','Letto': '1'},
	                 {'titolo': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo sem, gravida et quam vitae, sagittis rhoncus tortor. Vivamus ac.', 'Data': '27 Ago', 'testo': 'Integer quis porta tellus. Quisque imperdiet bibendum eros. Quisque sit amet leo nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut porttitor nisl nec ornare scelerisque. Nulla nunc metus, tempus id purus ut, aliquam imperdiet nisl. Integer iaculis eget lorem id consequat. Suspendisse et pulvinar elit, in rhoncus est. Aliquam sapien metus, vestibulum vehicula tempus id, rhoncus vel orci. Maecenas eleifend tincidunt cursus. Sed id pulvinar augue, ut rutrum orci. Praesent posuere tincidunt odio, eget rutrum justo consectetur vitae.','Letto': '1'}
	                 ];

	/*var data = [
	            {'Titolo': 'Promozione Speciale su...', 'Data': '5 Set', 'Anteprima': 'Ciao Edoardo, abbiamo pensato una promozione speciale dedicata a te. Compra...','Letto': '0'},
	            {'Titolo': 'Spedizione ordine N.5856...', 'Data': '5 Set', 'Anteprima': 'Ciao Edoardo, il tuo ordine è stato spedito. Scarica il DDT al seguente indirizzo: ...','Letto': '0'},
	            {'Titolo': 'Pagamento in sospeso', 'Data': '30 Ago', 'Anteprima': 'Ciao Edoardo, il pagamento relativo all\'ordine 5856235 risulta non effettuato. Ti invitiamo...','Letto': '1'},
	            {'Titolo': 'Conferma d\'ordine N.5856...', 'Data': '28 Ago', 'Anteprima': 'Ciao Edoardo, il tuo ordine è stato registrato correttamente. Potrai verificare il suo stato...','Letto': '1'},
	            {'Titolo': 'Welcome su SAPIO Order!', 'Data': '27 Ago', 'Anteprima': 'Ciao Edoardo, benvenuto su Sapio Order. Scopri le funzionalità ed i benefici che...','Letto': '1'}
	            ];

*/
	var tit_lar = $("#portlet_notifiche_WAR_SapioMockupportlet").width()*0.2;
	var testo_lar= $("#portlet_notifiche_WAR_SapioMockupportlet").width()*0.7;
	console.log(tit_lar + " "+ testo_lar) ;

	/*var car_titolo = new Array();
	var l = new Array();

	for(var i=0;i<data_full.length;i++){

		for(car_titolo[i]=0;car_titolo[i]<data_full[i]['titolo'].length;car_titolo[i]++){
	
			l[i] = window.getWidthOfText(data_full[i]['titolo'].substring(0,car_titolo[i])+"...","bold");
			
			
			//l[i]=$("<span>"++"</span>").width;
			//console.log(l[i]);
			if(l[i]>tit_lar){break;}
		}
	}
	
	var carTitolo = Math.max.apply(null, car_titolo);
	console.log(carTitolo);
	//var car_titolo = 2*Math.floor(tit_lar/font_size)-6;
	var car_testo = 2*Math.floor(testo_lar/font_size)-6;

	for(var i=0;i<data_full.length;i++){
		data[i]['Titolo']= data_full[i]['titolo'].length>carTitolo ? data_full[i]['titolo'].substring(0,carTitolo)+"..." : data_full[i]['titolo'];
		data[i]['Data']=data_full[i]['Data'];
		data[i]['Anteprima']= data_full[i]['testo'].length >car_testo ? data_full[i]['testo'].substring(0,car_testo)+"..." : data_full[i]['testo']
	} */

    data=anteprima(data_full);
    var table = new Y.DataTable.Base({
		columnset: columns,
		recordset: data	
	}).render('#notifiche_tabella');
	Y.on('domready', function(){
		$("*").removeClass("yui3-datatable-odd");
		$("*").removeClass("yui3-datatable-even");
		$("tr").css('cursor', 'pointer');
	});
	Y.on('windowresize', function(){
		
		data=anteprima(data_full);
		table.set('data',data);
		table.render('#notifiche_tabella');

	});
});

