const express = require('express');
const mysql = require('mysql');
//-----------devHutSolutions Code Below------------------------
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3500;
//-----------devHutSolutions Code Above------------------------

//-----------attributions - notes -------------------------

//------------devHutSolutions Code Below-------------------
//------------devHutSolutions Code Above-------------------

const app = express();
//-------------------Traversy Tutorial Above---------------
//------------devHutSolutions Code Below-------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));
//------------devHutSolutions Code Above-------------------

//------------------EJS scotch.io tutorial below-----------

// set view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', (req, res) => {
	res.render('pages/index');
});

// about page
app.get('/about', (req, res) => {
	res.render('pages/about');
});

// drinks page - passing data in
app.get('/drinks', function(req, res) {
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

//-----------------EJS soctch.io tutorial above----------
//--------------------------------------------------------
//------------devHutSolutions Code Below-------------------
app.get('/grid', (req, res, next) => {
	res.render('pages/mygridster');
});

app.get('/edit', (req, res, next) => {
	res.render('/pages/edit');
});

app.get('/tables', (req, res) => {
	res.render('pages/tables');
});
//------------devHutSolutions Code Above-------------------
//-------------Traversy Tutorial Below

// create mysql connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	// password: '123456',
	database: 'nodemysql'
});

// connect
db.connect(err => {
	if (err) {
		throw err;
	}
	console.log('mysql connected ..');
});

// Create db
app.get('/createdb', (req, res) => {
	let sql = 'CREATE DATABASE nodemysql';
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send('database created...');
	});
});

// Create table
app.get('/createpoststable', (req, res) => {
	let sql =
		'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send('posts table created...');
	});
});

// Insert post 1
app.get('/addpost/1', (req, res) => {
	let post = {
		title: 'Post One',
		body: 'This is post one'
	};
	let sql = 'INSERT INTO posts SET ?';
	let query = db.query(sql, post, (err, result) => {
		if (err) throw err;
		res.json(result);
		res.send();
	});
});

// Insert post 2
app.get('/addpost/2', (req, res) => {
	let post = {
		title: 'Post two',
		body: 'This is post two'
	};
	let sql = 'INSERT INTO posts SET ?';
	let query = db.query(sql, post, (err, result) => {
		if (err) throw err;
		res.json(result);
		res.send();
	});
});

// Get All Posts
app.get('/getposts', (req, res) => {
	let sql = 'SELECT * FROM posts';
	let query = db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.json(result);
		res.send();
	});
});

// Get single post
app.get('/getpost/:id', (req, res) => {
	let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
	let query = db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.json(result);
		res.send();
	});
});

// Get single post
app.get('/updatepost/:id', (req, res) => {
	let newTitle = 'updated title';
	let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
	let query = db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.json(result);
		res.send();
	});
});

// Deke single post
app.get('/deletepost/:id', (req, res) => {
	let newTitle = 'updated title';
	let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
	let query = db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.json(result);
		res.send();
	});
});

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
