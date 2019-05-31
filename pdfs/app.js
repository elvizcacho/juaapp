const express = require('express');
const app = express();
const PORT = process.env.PORT || 4100;
const bodyParser = require('body-parser');
const fs = require('fs');
const pdf = require('html-pdf');
const Handlebars = require('handlebars');
const uuidv4 = require('uuid/v4');


//Allow api cross domain
app.use((req, res, next) => {
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

process.on('uncaughtException', function (err) {
  console.log(err);
})

app.get('/', (req, res, next) => {res.send({ok: 'ok'})});

app.post('/:pdfTemplate', bodyParser.json(), (req, res, next) => {
	try {
		const source = fs.readFileSync(`/usr/src/app/pdfs/templates/${req.params.pdfTemplate}`, 'utf8');
		const template = Handlebars.compile(source);
		const html = template(req.body);
		let options = {};
		if (req.body.pdfOptions) {
			delete req.body.pdfOptions.phantomPath;
			options = req.body.pdfOptions;
			options.phantomPath = '/usr/local/bin/phantomjs';
		} else {
			options = {
				format: 'Legal',
				orientation: 'portrait',
				phantomPath: '/usr/local/bin/phantomjs'
			};
		}
		pdf.create(html, options).toFile(`/usr/src/app/pdfs/temp/${req.body.filename || uuidv4()}.pdf`, function(err, response) {
			if (err) return console.log(err);
			res.sendFile(response.filename);
		});
	} catch(e) {
		console.log(e);
		next(e);
	};
});

// Handle errors
app.use((err, req, res, next) => {
    if (! err) {
        return next();
    }

    res.status(500);
    res.send('500: Internal server error');
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));