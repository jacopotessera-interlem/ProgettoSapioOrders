YUI().use('datatable', 'datatable-paginator', 'datatype-number', 'paginator', function(Y){
	var columns = [
	               {key: 'Numero Ordine'},
	               {key: 'Data'},
	               {
	            	   key: 'Stato',
	            	   formatter: function(o){
	            		   o.className = o.value == 'Pagato e Consegnato' ? o.className+='verde' : o.className;
	            		   o.className = o.value == 'Pagato e in Consegna' ? o.className+='giallo' : o.className;
	            		   o.className = o.value == 'Da Pagare' ? o.className+='rosso' : o.className;
	            		   }
	               	},
	               	{
	               		key: 'Riordina',
	               		formatter: '<input type="checkbox" name="item" value="{value}">', //sistemare id, conservare check cambiando pagina
	               		label: 'Riordina',
	               		allowHTML: true
	               	}
	               ];
	var data = [
	            {'Numero Ordine': '56789', 'Data': '28/09/2016', 'Stato': 'Da Pagare','Riordina':''},
	            {'Numero Ordine': '45678', 'Data': '21/07/2016', 'Stato': 'Da Pagare','Riordina':''},
	            {'Numero Ordine': '34567', 'Data': '14/05/2016', 'Stato': 'Pagato e in Consegna','Riordina':''},
	            {'Numero Ordine': '23456', 'Data': '07/03/2016', 'Stato': 'Pagato e in Consegna','Riordina':''},
	            {'Numero Ordine': '12345', 'Data': '01/01/2016', 'Stato': 'Pagato e Consegnato','Riordina':''}
	           ];

	var table = new Y.DataTable({
		columnset: columns,
		recordset: data,
		rowsPerPage: 4,
		paginatorLocation: ['footer'],
	});

	table.render('#ordini_tabella');
	table.setAttrs({width:"100%"},true);
	
	Y.on('domready', fix_tabella(data,table));
});

YUI().use('aui-button', function(Y){
	new Y.Button({
		boundingBox: '#ordini_bottone',
		label: 'Riordina'
		}).render();
});