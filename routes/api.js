const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// create mysql connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	// password: '123456'
	database: 'dashboard'
});

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

module.exports = router;
