function delayLoad() {
	var options = {
		template: `<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>`
	};
	$('[data-toggle="tooltip"]').tooltip(options);

	//	document.setTimeout(function() {
	var sources = [
		{
			gitpages:
				'https://chadsconway.github.io/Coursework-MSSE655-WebVisualizations',
			type: 'Course Project',
			name: 'Web Visualizations Frameworks',
			description: `Examples of dashboard visualizations implemented with different jQuery charting plugins.`,
			repo:
				'https://github.com/chadsconway/Coursework-MSSE655-WebVisualizations'
		},
		{
			gitpages: 'https://chadsconway.github.io/Hangman',
			type: 'Course Project',
			name: 'Hangman',
			description: `Classic "Hangman" word-guessing game.  Implemented using vanilla Javascript, HTML, and CSS.`,
			repo: 'https://github.com/chadsconway/Hangman'
		}
	];

	var tmpl = $.templates(`
    <div class="col-md-6 col-sm-12" id="template">
	<div class="devhuteffect delayLoad">
		<iframe frameborder="0" scrolling="no" class="shadow" id="webvisuals" src={{:gitpages}}></iframe>
		<ul class="icon">
			<li>
				<a href="{{:gitpages}}"
					><i class="fas fa-chart-bar" data-toggle="tooltip" data-placement="right" title="Webpage"></i></a
				>
			</li>
			<li>
				<a href="{{:repo}}"
				><i class="fa fa-link" data-toggle="tooltip" data-placement="right" title="Code Repo"></i></a>
			</li>
		</ul>
		<div class="box-content">
			<h3 class="title">{{:name}}</h3>
      <h5 class="post">{{:description}}</h5>
		</div>
	</div>
</div>
    `);

	var newhtml = tmpl.render(sources);
	console.log(newhtml);
	$('#templateDiv').append(newhtml);

	// $.template('githubTempl', githubTempl);
	// sources.forEach(function(sources, index) {
	// 	// Use the template
	// });
	//	}, 2000);
}
