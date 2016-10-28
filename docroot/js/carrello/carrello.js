var prezzi = new Array();

YUI().use('aui-datatable', function(Y) {
	var columns = [
	               //{key:'Immagine',allowHTML: true},
	               {key: 'Nome Prodotto'},
	               {
	            	   key: 'prezzo',
	            	   label:'Prezzo',
	            	   nodeFormatter: function(o){
	            		   prezzi[o.rowIndex]=o.data.prezzo;
	            		   o.cell.insert(o.data.prezzo+'€');
	            	   }
	               },
	               {	
	            	   key: 'quantita',
	            	   label:'Quantità',
	            	   formatter: function(o) {
	            		   var i = o.rowIndex;
	            		   o.value='<input min="0" id="input'+i+'" placeholder="0" type="number" style="width: 50px;"  maxlength=2 size=2></input>';},
	            		   allowHTML:true
	               }
	               ];

	var data = [
	            {'Nome Prodotto': 'Bombola Mix Aria - 20L', 'quantita': '1','prezzo':'100'},
	            {'Nome Prodotto': 'Bombola Ossigeno - 100L', 'quantita': '2','prezzo':'20'},
	            {'Nome Prodotto': 'Bombola Azoto - 20L', 'quantita': '10','prezzo':'10'},
	            {'Nome Prodotto': 'Bombola Azoto - 100L', 'quantita': '20','prezzo':'2'},
	            {'Nome Prodotto': 'Bombola Idrogeno - 100L', 'quantita': '100','prezzo':'1'}
	            ];

	var table = new Y.DataTable.Base({
		columnset: columns,
		recordset: data
	});
	
	table.render('#carrello_tabella');

	Y.on('domready', function(){
		$("input").change(function(){
			var totale_carrello = 0;
			var numero_articoli = 0;
			var N = table.get("data").size();
			for(var i=0;i<N;i++){
				numero_articoli += Number($("#input"+i).val());
				totale_carrello += $("#input"+i).val()*prezzi[i];
			}
			var stringa = "Totale carrello: "+ totale_carrello+"€ - N.articoli: "+numero_articoli;
			$("#totale").text(stringa);
		})
	});
});

YUI().use('aui-button', function(Y){
	new Y.Button({
		boundingBox: '#carrello_bottone',
		label: 'Invia ordine'
	}).render();
});