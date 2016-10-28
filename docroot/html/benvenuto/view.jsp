<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet"%>

<portlet:defineObjects />

<style>
.footer {
	border: 0;/*1px solid #307ecc;*/
	padding: 0;/*10px 10px 10px 10px;*/
	padding-bottom:30px;
	padding-top: 10px;
	margin: 5px 5px 5px 5x !important;
	height: 100%;
	position:relative;
	
	display: flex;
	align-items: flex-start;
}

.footer_child_left {
	flex: 1;
}

.footer_child_right {
	flex: 1;
}

.minititolo {
	background-color: white;
	color: #307ecc;
	border: 2px solid #307ecc;
	border-top: 0;
	border-left: 0;
	border-right: 0;
	/*margin: 10px 10px 10px 10px;*/
	font-weight: bold;
	font-size: 20;
}
.miniparagrafo{
	border: 2px solid #307ecc;
	border-top: 0;
	border-left: 0;
	border-right: 0;
	margin-top: 10px;
	margin-bottom: 10px;
	padding-bottom:10px;
}

a {
	color: hotpink !important;
}

.evidente {
	font-weight: bold;
}
</style>


<div class="titolo">
	<h2>Benvenuto su Sapio Order</h2>
</div>
<div>
	<p>Grazie a questo portale potrai controllare i tuoi ordini, ricevere informazione su promozioni e
		riordinare prodotti già acquistati. Sapio. Il meglio del meglio del
		meglio.</p>
</div>

<div style=" margin-top:30px;" class="minititolo">Serve aiuto?</div>
<div style='margin-bottom: 30px;' class="miniparagrafo">
	Contattaci al <div class="evidente" style='display:inline;'>0123456789</div><br>
	<div style='display:inline; font-size:80%;'>oppure</div><br> usa il <div class="evidente" style='display:inline;'><a href="/web/guest/assistenza">modulo di assistenza</a></div>.
</div>

<div class="footer">
	<div class="footer_child_left">
		<a href="http://www.sapio.it">SAPIO Group</a>
	</div>
	<div class="footer_child_right">
		<div style='display:inline-block; position: absolute; top:5px; right:90px;'>
			<a href="http://www.facebook.com"><img
				src="<%=request.getContextPath()%>/resources/facebook.png" /></a>
		</div>
		<div style='display:inline-block; position: absolute; top:5px; right:50px;'>
			<a href="http://www.twitter.com"><img
				src="<%=request.getContextPath()%>/resources/twitter.png" /></a>
		</div>
		<div style='display:inline-block; position: absolute; top:5px; right:10px;'>
			<a href="http://www.youtube.com"><img
				src="<%=request.getContextPath()%>/resources/youtube.png" /></a>
		</div>
	</div>
</div>