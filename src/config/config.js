var config = {
	'development': {
		'mongoDB': {
			host  : '192.168.2.105',
			port  : 27017,
			dbName: 'insecureApp'
		}
	},
	'test'       : {
		'mongoDB': {
			host  : 'localhost',
			port  : 27017,
			dbName: 'insecureApp_Test'

		}
	}
};

module.exports = config[process.env.NODE_ENV || 'development'];