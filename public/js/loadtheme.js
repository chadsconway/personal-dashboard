function getTheme() {
	console.log('getTheme() has been called');
	$.ajax({
		type: 'GET',
		url: 'http://chadsconway.info/api/gettheme',
		success: function(data) {
			if (data.themename === undefined) {
				console.log('Themename undefined, using Base');
				$('#themelink').attr('href', 'public/css/bootstrap.css');
				$('#curr-theme-navbar').text('Base');
			} else {
				console.log('getTheme successful response');
				console.log('themename: ' + data.themename);
				$('#themelink').attr('href', data.themecss);
				$('#curr-theme-navbar').text(data.themename);
			}
		},
		error: function(jqXHR, status, err) {
			alert('Theme update failed with error: ' + error);
		}
	});

	/**
	 *  Server doesn't like ajax request, going with an xmlhttprequest example
	 *  from W3Schools
	 */

	// var xhttp = new XMLHttpRequest();
	// xhttp.onreadystatechange = function() {
	// 	if (this.readyState == 4 && this.status == 200) {
	// 		// Typical action to be performed when the document is ready:
	// 		// document.getElementById('demo').innerHTML = xhttp.responseText;
	// 		console.log(xhttp.responseText);
	// 		console.log(xhttp.status);
	// 		console.log('XML response: ', xhttp.responseXML);
	// 		jQuery('#themelink').attr('href', 'public/css/bootstrap.css');
	// 	}
	// };
	// xhttp.open('GET', 'http://localhost:3500/api/gettheme', true);
	// xhttp.send();
}
