<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %>

<portlet:defineObjects />

<div style="margin: 0px !important;">
	<div class="div-menu-max" id="button-ordini" style="background-color: #d44f47;">
		<div class="div-dark-max dark-opacity"></div>
		<div class="divlogo-max-menu">
			<img src="<%= request.getContextPath()%>/resources/ordini-logo.png" class="menu-icons">
		</div>
		<div class="divnome-menu">
			<span class="span-menu">Ordini</span>
		</div>
	</div>
	<div class="div-menu-min" id="button-prodotti" style="background-color: #89b95b;">
		<div class="div-dark-min dark-opacity"></div>
		<div class="divlogo-min-menu">
			<img src="<%= request.getContextPath()%>/resources/prodotti-logo.png" class="menu-icons">
		</div>
		<div class="divnome-menu">
			<span class="span-menu">Prodotti</span>
		</div>
	</div>
</div>
<div style="margin: 0px !important;">
	<div class="div-menu-min" id="button-home" style="background-color: #3493d2;">
		<div class="div-dark-min dark-opacity"></div>
		<div class="divlogo-min-menu">
			<img src="<%= request.getContextPath()%>/resources/home-logo.png" class="menu-icons">
		</div>
		<div class="divnome-menu">
			<span class="span-menu">Home</span>
		</div>
	</div>
	<div class="div-menu-min" id="button-profilo" style="background-color: #ffb856;">
		<div class="div-dark-min dark-opacity"></div>
		<div class="divlogo-min-menu">
			<img src="<%= request.getContextPath()%>/resources/profilo-logo.png" class="menu-icons">
		</div>
		<div class="divnome-menu">
			<span class="span-menu">Profilo</span>
		</div>
	</div>
	<div class="div-menu-min" id="button-assistenza" style="background-color: #797979;">
		<div class="div-dark-min dark-opacity"></div>
		<div class="divlogo-min-menu">
			<img src="<%= request.getContextPath()%>/resources/assistenza-logo.png" class="menu-icons">
		</div>
		<div class="divnome-menu">
			<span class="span-menu">Assistenza</span>
		</div>
	</div>
</div>