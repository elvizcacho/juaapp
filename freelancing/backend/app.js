const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const dbConfig = require('./db/database')[process.env.JUAAPP_ENV]
require('./db/models');

// load authentication
require('./authentication');

//Allow api cross domain
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
	res.header("Access-Control-Allow-Headers", req.headers['access-control-request-headers']);
	res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
	// intercept OPTIONS method
	if (req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
});
  
// load routes
require('./routes')(app);

app.listen(PORT, () => {
	console.log(dbConfig)
	console.log(`App listening on port ${PORT}`)
});