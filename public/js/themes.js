jQuery(document).ready(function($) {
	$.ajaxSetup({
		cache: false
	});

	function loadThemes() {
		var jsondata = {
			themes: [
				{
					name: 'Base (default)',
					description: '',
					css: 'public/css/bootstrap.css'
				},
				{
					name: 'Cerulean',
					description: 'A calm blue sky',
					thumbnail: 'https://bootswatch.com/3/cerulean/thumbnail.png',
					preview: 'https://bootswatch.com/3/cerulean/',
					css: 'public/themes/cerulean.css',
					cssMin: 'https://bootswatch.com/3/cerulean/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cerulean/bootstrap.min.css',
					less: 'https://bootswatch.com/3/cerulean/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/cerulean/variables.less',
					scss: 'https://bootswatch.com/3/cerulean/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/cerulean/_variables.scss'
				},
				{
					name: 'Cosmo',
					description: 'An ode to Metro',
					thumbnail: 'https://bootswatch.com/3/cosmo/thumbnail.png',
					preview: 'https://bootswatch.com/3/cosmo/',
					css: 'public/themes/cosmo.css',
					cssMin: 'https://bootswatch.com/3/cosmo/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cosmo/bootstrap.min.css',
					less: 'https://bootswatch.com/3/cosmo/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/cosmo/variables.less',
					scss: 'https://bootswatch.com/3/cosmo/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/cosmo/_variables.scss'
				},
				{
					name: 'Cyborg',
					description: 'Jet black and electric blue',
					thumbnail: 'https://bootswatch.com/3/cyborg/thumbnail.png',
					preview: 'https://bootswatch.com/3/cyborg/',
					css: 'public/themes/cyborg.css',
					cssMin: 'https://bootswatch.com/3/cyborg/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cyborg/bootstrap.min.css',
					less: 'https://bootswatch.com/3/cyborg/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/cyborg/variables.less',
					scss: 'https://bootswatch.com/3/cyborg/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/cyborg/_variables.scss'
				},
				{
					name: 'Darkly',
					description: 'Flatly in night mode',
					thumbnail: 'https://bootswatch.com/3/darkly/thumbnail.png',
					preview: 'https://bootswatch.com/3/darkly/',
					css: 'public/themes/darkly.css',
					cssMin: 'https://bootswatch.com/3/darkly/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/darkly/bootstrap.min.css',
					less: 'https://bootswatch.com/3/darkly/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/darkly/variables.less',
					scss: 'https://bootswatch.com/3/darkly/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/darkly/_variables.scss'
				},
				{
					name: 'Flatly',
					description: 'Flat and modern',
					thumbnail: 'https://bootswatch.com/3/flatly/thumbnail.png',
					preview: 'https://bootswatch.com/3/flatly/',
					css: 'public/themes/flatly.css',
					cssMin: 'https://bootswatch.com/3/flatly/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css',
					less: 'https://bootswatch.com/3/flatly/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/flatly/variables.less',
					scss: 'https://bootswatch.com/3/flatly/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/flatly/_variables.scss'
				},
				{
					name: 'Journal',
					description: 'Crisp like a new sheet of paper',
					thumbnail: 'https://bootswatch.com/3/journal/thumbnail.png',
					preview: 'https://bootswatch.com/3/journal/',
					css: 'public/themes/journal.css',
					cssMin: 'https://bootswatch.com/3/journal/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/journal/bootstrap.min.css',
					less: 'https://bootswatch.com/3/journal/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/journal/variables.less',
					scss: 'https://bootswatch.com/3/journal/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/journal/_variables.scss'
				},
				{
					name: 'Lumen',
					description: 'Light and shadow',
					thumbnail: 'https://bootswatch.com/3/lumen/thumbnail.png',
					preview: 'https://bootswatch.com/3/lumen/',
					css: 'public/themes/lumen.css',
					cssMin: 'https://bootswatch.com/3/lumen/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/lumen/bootstrap.min.css',
					less: 'https://bootswatch.com/3/lumen/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/lumen/variables.less',
					scss: 'https://bootswatch.com/3/lumen/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/lumen/_variables.scss'
				},
				{
					name: 'Pulse',
					description: 'Material is the metaphor',
					thumbnail: 'https://bootswatch.com/3/paper/thumbnail.png',
					preview: 'https://bootswatch.com/3/paper/',
					css: 'public/themes/pulse.css',
					cssMin: 'https://bootswatch.com/3/paper/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/paper/bootstrap.min.css',
					less: 'https://bootswatch.com/3/paper/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/paper/variables.less',
					scss: 'https://bootswatch.com/3/paper/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/paper/_variables.scss'
				},
				{
					name: 'Litera',
					description: 'Optimized for legibility',
					thumbnail: 'https://bootswatch.com/3/readable/thumbnail.png',
					preview: 'https://bootswatch.com/3/readable/',
					css: 'public/themes/litera.css',
					cssMin: 'https://bootswatch.com/3/readable/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/readable/bootstrap.min.css',
					less: 'https://bootswatch.com/3/readable/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/readable/variables.less',
					scss: 'https://bootswatch.com/3/readable/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/readable/_variables.scss'
				},
				{
					name: 'Sandstone',
					description: 'A touch of warmth',
					thumbnail: 'https://bootswatch.com/3/sandstone/thumbnail.png',
					preview: 'https://bootswatch.com/3/sandstone/',
					css: 'public/themes/sandstone.css',
					cssMin: 'https://bootswatch.com/3/sandstone/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/sandstone/bootstrap.min.css',
					less: 'https://bootswatch.com/3/sandstone/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/sandstone/variables.less',
					scss: 'https://bootswatch.com/3/sandstone/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/sandstone/_variables.scss'
				},
				{
					name: 'Sketchy',
					description: 'Mini and minimalist',
					thumbnail: 'https://bootswatch.com/3/simplex/thumbnail.png',
					preview: 'https://bootswatch.com/3/simplex/',
					css: 'public/themes/sketchy.css',
					cssMin: 'https://bootswatch.com/3/simplex/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/simplex/bootstrap.min.css',
					less: 'https://bootswatch.com/3/simplex/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/simplex/variables.less',
					scss: 'https://bootswatch.com/3/simplex/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/simplex/_variables.scss'
				},
				{
					name: 'Slate',
					description: 'Shades of gunmetal gray',
					thumbnail: 'https://bootswatch.com/3/slate/thumbnail.png',
					preview: 'https://bootswatch.com/3/slate/',
					css: 'public/themes/slate.css',
					cssMin: 'https://bootswatch.com/3/slate/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/slate/bootstrap.min.css',
					less: 'https://bootswatch.com/3/slate/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/slate/variables.less',
					scss: 'https://bootswatch.com/3/slate/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/slate/_variables.scss'
				},
				{
					name: 'Spacelab',
					description: 'Silvery and sleek',
					thumbnail: 'https://bootswatch.com/3/spacelab/thumbnail.png',
					preview: 'https://bootswatch.com/3/spacelab/',
					css: 'public/themes/spacelab.css',
					cssMin: 'https://bootswatch.com/3/spacelab/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/spacelab/bootstrap.min.css',
					less: 'https://bootswatch.com/3/spacelab/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/spacelab/variables.less',
					scss: 'https://bootswatch.com/3/spacelab/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/spacelab/_variables.scss'
				},
				{
					name: 'Superhero',
					description: 'The brave and the blue',
					thumbnail: 'https://bootswatch.com/3/superhero/thumbnail.png',
					preview: 'https://bootswatch.com/3/superhero/',
					css: 'public/themes/superhero.css',
					cssMin: 'https://bootswatch.com/3/superhero/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/superhero/bootstrap.min.css',
					less: 'https://bootswatch.com/3/superhero/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/superhero/variables.less',
					scss: 'https://bootswatch.com/3/superhero/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/superhero/_variables.scss'
				},
				{
					name: 'United',
					description: 'Ubuntu orange and unique font',
					thumbnail: 'https://bootswatch.com/3/united/thumbnail.png',
					preview: 'https://bootswatch.com/3/united/',
					css: 'public/themes/united.css',
					cssMin: 'https://bootswatch.com/3/united/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/united/bootstrap.min.css',
					less: 'https://bootswatch.com/3/united/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/united/variables.less',
					scss: 'https://bootswatch.com/3/united/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/united/_variables.scss'
				},
				{
					name: 'Yeti',
					description: 'A friendly foundation',
					thumbnail: 'https://bootswatch.com/3/yeti/thumbnail.png',
					preview: 'https://bootswatch.com/3/yeti/',
					css: 'public/themes/yeti.css',
					cssMin: 'https://bootswatch.com/3/yeti/bootstrap.min.css',
					cssCdn:
						'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css',
					less: 'https://bootswatch.com/3/yeti/bootswatch.less',
					lessVariables: 'https://bootswatch.com/3/yeti/variables.less',
					scss: 'https://bootswatch.com/3/yeti/_bootswatch.scss',
					scssVariables: 'https://bootswatch.com/3/yeti/_variables.scss'
				},
				{
					name: 'Tycoon',
					description: '',
					css: 'public/themes/tycoon.css'
				},
				{
					name: 'Sea',
					description: '',
					css: 'public/themes/sea.css'
				},
				{
					name: 'Executive',
					description: '',
					css: 'public/themes/executive.css'
				}
			]
		};
		return jsondata;
	}
	function displayThemes(jsondata) {
		var themes = jsondata.themes;
		var numthemespercol = (themes.length / 3).toFixed(0);
		var numthemescol1 = numthemespercol;
		var numthemescol2 = numthemespercol;
		var numthemescol3 = numthemespercol;
		var nummodulothemes = themes.length % 3;
		if (nummodulothemes === 1) {
			numthemescol1++;
		} else if (nummodulothemes === 2) {
			numthemescol1++;
			numthemescol2++;
		}

		var themescol1 = themes.splice(0, numthemescol1);
		var themescol2 = themes.splice(0, numthemescol2);
		var themescol3 = themes.splice(0, numthemescol3);

		themescol1.forEach(function(value, index) {
			$('#first-col').append(
				`<div class="btn btn-block themebtn" id="${value.name}">${value.name}</div>`
			);
		});
		themescol2.forEach(function(value, index) {
			$('#second-col').append(
				`<div class="btn btn-block themebtn" id="col1-${index}">${value.name}</div>`
			);
		});
		themescol3.forEach(function(value, index) {
			$('#third-col').append(
				`<div class="btn btn-block themebtn" id="col1-${index}">${value.name}</div>`
			);
		});

		// for nested columns partial
		themescol1.forEach(function(value, index) {
			$('#nested-first-col').append(
				`<div class="btn btn-block themebtn" id="${value.name}">${value.name}</div>`
			);
		});
		themescol2.forEach(function(value, index) {
			$('#nested-second-col').append(
				`<div class="btn btn-block themebtn" id="${value.name}">${value.name}</div>`
			);
		});
		themescol3.forEach(function(value, index) {
			$('#nested-third-col').append(
				`<div class="btn btn-block themebtn" id="${value.name}">${value.name}</div>`
			);
		});
	}

	function postTheme(themecss, themename) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3500/api/theme',
			data: {
				themecss: themecss,
				themename: themename
			},
			success: function(data) {
				console.log('Success');
			},
			error: function(jqXHR, status, err) {
				alert('Theme update failed with error: ' + error);
			}
		});
	}

	// var select = $('#sel');
	// select.show();
	// $('.alert').toggleClass('alert-info alert-success');
	// $('.alert h4').text('Success!');
	// select
	// 	.change(function() {
	// 		var theme = themes[$(this).val()];
	// 		console.log('selected theme = ', theme);
	// 		$('#themelink').attr('href', theme.css);
	// 		$('h1').text(theme.name);
	// 	})
	// 	.change();

	var jsondata = loadThemes();
	displayThemes(jsondata);

	$('.themebtn').click(function(event) {
		var buttonid = $(this).attr('id');
		var jsondata = loadThemes();
		var themes = jsondata.themes;
		var themecss = '';
		themes.forEach(function(value, index) {
			if (value.name === buttonid) {
				themecss = value.css;
			}
		});
		$('#themelink').attr('href', themecss);
		$('#curr-theme').text(buttonid);
		$('#curr-theme-navbar').text(buttonid);
		postTheme(themecss, buttonid);
	});

	$('.themebtn').css({ 'background-color': '#000000' });
	$('.dropdown').hover(
		function() {
			$('#dropdown-div').show(1000);
		},
		function() {
			$('#dropdown-div').hide(1000);
		}
	);
	$('.themebtn').hover(
		function() {
			$(this).css({
				'background-color': '#101010'
			});
		},
		function() {
			$(this).css({
				'background-color': '#000000'
			});
		}
	);
});
// $('#dropdown-div').hover(
// 	function() {
// 		$('#dropdown-div').show();
// 	},
// 	function() {
// 		$('#dropdown-div').hide();
// 	}
// );
