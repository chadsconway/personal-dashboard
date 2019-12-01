jQuery(function($) {
	$('.theme-button').click(function(event) {
		console.log('button clicked');
		$('this.id');
		switch ($(this.id)) {
			case 'bubblegum':
				theme = 'bubblegum.css';
				break;
			case 'charming':
				theme = 'charming.css';
				break;
		}
		console.log(theme);
	});
});
