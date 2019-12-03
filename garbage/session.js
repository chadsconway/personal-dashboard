const session = require('express-session');
let mysqlstore = require('express-mysql-session')(session);

var storeopts = {
	host: 'localhost',
	port: 3306,
	user: 'session-user',
	password: 'password',
	database: 'sessions'
};

var sessionStore = new mysqlstore(storeopts);

app.use(
	session({
		key: 'session_cookie_name',
		secret: 'session_cookie_secret',
		store: sessionStore,
		resave: false,
		saveUnintialized: false
	})
);
