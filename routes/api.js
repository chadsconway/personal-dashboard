const express = require('express');
const app = require('../app.js');
const router = express.Router();
const mysql = require('mysql');
const session = require('express-session');

// create mysql connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	// password: '123456'
	database: 'dashboard'
});

// route: '/api/theme'
// router.get('/theme/:themename', (req, res, next) => {
// 	var theme = req.params.themename;
// 	app.locals.themecss = theme;
// };

// connect
db.connect(err => {
	if (err) {
		throw err;
	}
	console.log('mysql connected ..');
});

/**
 * Run Once Routes, db instantiation and creation
 */

// Create db
router.get('/createdb', (req, res) => {
	let sql = 'CREATE DATABASE dashboard';
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send('database created...');
	});
});

// Create themes table
router.get('/createthemestable', (req, res) => {
	let sql =
		'CREATE TABLE themes(id int AUTO_INCREMENT, theme VARCHAR(255), PRIMARY KEY(id))';
	db.query(sql, (err, results) => {
		if (err) throw err;
		console.log(result);
		res.send('themes table created...');
	});
});

// Create table
router.get('/createtodostable', (req, res) => {
	let sql =
		'CREATE TABLE todos(id int AUTO_INCREMENT, complete BOOLEAN, task VARCHAR(255), PRIMARY KEY(id))';
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send('todos table created...');
	});
});

/**
 * Add todo
 */
router.post('/addtodo', (req, res) => {
	let todo = {
		complete: req.body.complete,
		task: req.body.task
	};
	let sql = 'INSERT INTO todos SET ?';
	let query = db.query(sql, todo, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
});

/**
 * Get todos
 */
router.get('/gettodos', (req, res) => {
	let sql = 'SELECT * FROM todos';
	let query = db.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
});

/**
 * Update todo
 */
router.get('/updatetodo/:id/:complete', (req, res) => {
	let sql = `UPDATE todos SET complete = '${req.params.complete}' WHERE id = ${req.params.id}`;
	let query = db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.json(result);
		res.send();
	});
});

/**
 * Delete todo
 */
router.get('/deletetodo/:id', (req, res) => {
	let newTitle = 'updated title';
	let sql = `DELETE FROM todos WHERE id = ${req.params.id}`;
	let query = db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.json(result);
		res.send();
	});
});

// Update current themecss in app.locals.themecss
router.post('/theme', (req, res, next) => {
	app.locals.themename = req.body.themename;
	app.locals.themecss = req.body.themecss;
	console.log('app.locals.themecss = ' + app.locals.themecss);
	session.selectedthemecss = app.locals.themecss;
	session.selectedthemename = app.locals.themename;
	console.log('session.selectedthemename = ' + session.selectedthemename);
	res.send();
});

router.get('/gettheme', (req, res) => {
	if (req.session) {
		console.log('/gettheme if(req.session)');
		res.json({
			themecss: app.locals.themecss,
			themename: app.locals.themename
		});
	} else {
		console.log('/gettheme if(req.session) else block');
		session({
			key: 'session_cookie_name',
			secret: 'session_cookie_secret',
			resave: false,
			saveUnintialized: false,
			selectedthemecss: 'public/bootstrap.css',
			selectedthemename: 'base'
		});
		app.locals.themecss = 'public/bootstrap.css';
		app.locals.themename = 'base';
		res.json({
			themecss: app.locals.themecss,
			themename: app.locals.themename
		});
	}
	// res.locals.theme = app.locals.themecss;
});

module.exports = router;
