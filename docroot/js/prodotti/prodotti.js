YUI().use('datatable', 'datatable-paginator', 'datatype-number', 'paginator', function(Y) {
	var columns = [
	               //{key:'Immagine',allowHTML: true},
	               {key: 'nome',label:'Nome Prodotto'},
	               {key: 'stato',label: 'Stato',
	            	   nodeFormatter: function(o){
	            		   if(o.data.stato == 'Disponibile'){o.cell.insert(o.data.stato); o.cell.addClass('verde');}
	            		   else if(o.data.stato == 'Non Disponibile'){o.cell.insert(o.data.stato); o.cell.addClass('rosso');}
	            		   }
	               },
	               {
	            	   key: 'Riordina',
	            	   nodeFormatter: function(o){
	            		   if(o.data.stato == 'Disponibile'){o.cell.insert(o.value='<input type="checkbox"  name="item" value="{value}">');}
	            		   else if(o.data.stato == 'Non Disponibile'){o.cell.insert('<input type="checkbox" disabled name="item" value="{value}">');}
	            	   },
	            	   label: 'Riordina',
	            	   allowHTML: true
	               }
	              ];

	var data = [
	            {'nome': 'Bombola Ossigeno - 20L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Ossigeno - 100L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Azoto - 20L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Azoto - 100L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Idrogeno - 100L', 'stato': 'Non Disponibile','Riordina':''},
	            {'nome': 'Bombola Ossigeno - 20L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Ossigeno - 100L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Azoto - 20L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Azoto - 100L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Idrogeno - 100L', 'stato': 'Non Disponibile','Riordina':''},
	            {'nome': 'Bombola Ossigeno - 20L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Ossigeno - 100L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Azoto - 20L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Azoto - 100L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Idrogeno - 100L', 'stato': 'Non Disponibile','Riordina':''},
	            {'nome': 'Bombola Ossigeno - 20L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Ossigeno - 100L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Azoto - 20L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Azoto - 100L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Idrogeno - 100L', 'stato': 'Non Disponibile','Riordina':''},
	            {'nome': 'Bombola Ossigeno - 20L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Ossigeno - 100L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Azoto - 20L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Azoto - 100L', 'stato': 'Disponibile','Riordina':''},
	            {'nome': 'Bombola Idrogeno - 100L', 'stato': 'Non Disponibile','Riordina':''}
	           ];
	
	var table = new Y.DataTable({
		columnset: columns,
		recordset: data,
		rowsPerPage: 5,
		paginatorLocation: ['footer']
	});
	
	table.render('#prodotti_tabella');
	table.setAttrs({width:"100%"},true);

	Y.on('domready', fix_tabella(data,table));
});

YUI().use('aui-button', function(Y){
	new Y.Button(
			{
				boundingBox: '#prodotti_bottone',
		        label: 'Riordina'
		     }).render();
});