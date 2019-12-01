const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
//-----------devHutSolutions Code Below------------------------
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3500;
const apiRoute = require('./routes/api');
const pageRoute = require('./routes/pages');
//-----------devHutSolutions Code Above------------------------

//-----------attributions - notes -------------------------

//------------devHutSolutions Code Below-------------------
//------------devHutSolutions Code Above-------------------

const app = express();
app.use(cors());
//-------------------Traversy Tutorial Above---------------
//------------devHutSolutions Code Below-------------------
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));
//------------devHutSolutions Code Above-------------------

//------------------EJS scotch.io tutorial below-----------

// set view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// page routes in routes/pages
app.use('/', pageRoute);

// api routes in routes/api
app.use('/api', apiRoute);

//-----------------EJS soctch.io tutorial above----------
//--------------------------------------------------------
//------------devHutSolutions Code Below-------------------

//------------devHutSolutions Code Above-------------------
//-------------Traversy Tutorial Below

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
