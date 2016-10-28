<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %>
<portlet:defineObjects />

<div class="titolo" id="invia-mail-titolo">
	<h3>
		Invia richiesta di assistenza
	</h3>
</div>
 
<form id="myForm">
  <div class="form-group">
    <label class="control-label" for="oggetto">Oggetto del messaggio:</label>
    <div class="controls">
      <input name="oggetto" id="oggetto" class="form-control" type="text">
    </div>
  </div>
  <div class="form-group">
    <aui:input name="testo" rows="10" label="Testo del messaggio:" type="textarea"></aui:input>
  </div>
  <input class="btn btn-info" type="submit" value="Submit" disabled="disabled">
  <input class="btn btn-primary" type="reset" value="Reset">
</form>