const express = require('express');
const router = express.Router();

// index page
router.get('/', (req, res) => {
	res.render('pages/index');
});

// about page
router.get('/about', (req, res) => {
	res.render('pages/about');
});

// drinks page - passing data in
router.get('/drinks', function(req, res) {
	var drinks = [
		{ name: 'Bloody Mary', drunkness: 3 },
		{ name: 'Martini', drunkness: 5 },
		{ name: 'Scotch', drunkness: 10 }
	];
	var tagline =
		"Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

	res.render('pages/drinks', {
		drinks: drinks,
		tagline: tagline
	});
});

router.get('/grid', (req, res, next) => {
	res.render('pages/gridstacker');
});

router.get('/edit', (req, res, next) => {
	res.render('pages/edit');
});

router.get('/tables', (req, res) => {
	res.render('pages/tables');
});

router.get('/todo', (req, res, next) => {
	res.render('pages/todos');
});

module.exports = router;
