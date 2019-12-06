function getTheme() {
	console.log('getTheme() has been called');
	$.ajax({
		type: 'GET',
		url: 'http://localhost:3500/api/gettheme',
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
}
