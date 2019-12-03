function getTheme() {
	console.log('getTheme() has been called');
	$.ajax({
		type: 'GET',
		url: 'http://localhost:3500/api/gettheme',
		success: function(data) {
			console.log('getTheme successful response');
			console.log('themename: ' + data.themename);
			$('#themelink').attr('href', data.themecss);
			$('#curr-theme-navbar').text(data.themename);
		},
		error: function(jqXHR, status, err) {
			alert('Theme update failed with error: ' + error);
		}
	});
}
