var bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	methodOverride = require('method-override');

module.exports = function (app) {
	app.disable('x-powered-by'); // Why are we doing this?
	app.use(bodyParser.urlencoded({ extended: false }))

	app.use(bodyParser.json())
	app.use(methodOverride());

	// @todo give a better key here than s3cr3t ;)
	app.use(cookieParser('s3cr3t'));
	app.use(session({
		secret: 's3cr3t',
		key   : 'sessionId', // use generic session-cookie name, else it would be "connectSid", revealing your used framework
		cookie: {
			secure: true, // Only allow cookies on https
			maxAge: null // maxAge: null is the default value and should be, since it removes the session on browser-closer.
		}
	}));
};