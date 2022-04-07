module.exports = function (app) {
    var hpp = require('./controller/hppLeak')(app),
		mflac = require('./controller/mflacLeak')(app);

	app.get('/', function (req, res) {
		res.send(200, 'server is running and listening on Port ' + app.get('port'));
	});

	app.get('/login', function (req, res) {
		req.session.user_id = 'TEST_USER_ID';
		res.send('You are now logged in!');
	});

	app.get('/logout', function (req, res) {
		req.session.destroy(function () {
			res.send('You are now logged out!');
		});
	});

	app.get('/mflac/readPublicData', mflac.readPublicData);
	app.get('/mflac/readPrivateData', mflac.readPrivateData);


    app.get('/hpp', hpp.trustParameterTypes);
}