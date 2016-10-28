<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<portlet:defineObjects />

<div class="titolo" id="carrello_titolo">
	<h3>
		Carrello
	</h3>
</div>

<div id="carrello"><table class="tabella" id="carrello_tabella"></table></div>
<p></p>
<div><p id="totale" align="right">Totale carrello: 0€ - N.articoli: 0</p></div>
<p></p>
<div align="right"><button class="btn btn-lg btn-primary" id="carrello_bottone">Invia ordine</button></div>