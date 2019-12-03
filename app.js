require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3500;
const app = (module.exports = express());
const apiRoute = require('./routes/api');
const pageRoute = require('./routes/pages');
// const themetools = require('./modules/themetools');
app.use(cors());
app.locals.count = 0;
app.locals.theme = '/public/bootstrap.css';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
	session({
		key: session.id,
		secret: 'session_cookie_secret',
		resave: false,
		saveUnintialized: false,
		selectedthemecss: '/public/bootstrap.css',
		selectedthemename: 'base'
	})
);
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', (req, res, next) => {
	app.locals.count++;
	console.log('count= ' + app.locals.count);
	console.log('Request received');
	// console.log(req);

	next();
});

// set view engine to ejs
app.set('view engine', 'ejs');

// page routes in routes/pages
app.use('/', pageRoute);

// api routes in routes/api
app.use('/api', apiRoute);

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
