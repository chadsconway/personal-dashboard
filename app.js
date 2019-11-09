const express = require('express');
const mysql = require('mysql');

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

const app = express();

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

app.listen('3500', () => {
	console.log('server started on port 3500');
});
