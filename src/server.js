var express = require('express')
var app = express();

app.set('port', process.env.port || 3334);

require('./config/express')(app);
require('./routes')(app);

module.exports = app;
app.listen(app.get('port'), function () {
	console.log('server listening on port ' + app.get('port'));
});