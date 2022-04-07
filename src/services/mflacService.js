module.exports = function () {
	return {
		getPublicData: function () {
			return "MFLAC: Here's some public data. Everyone can access this.";
		},
		getPrivateData: function (user_id) {
			return "MFLAC: Attention. Here's some restricted data. You should only see this if you're logged in as admin." +
				"<br>" +
				"Your user id is "+ user_id;
		}
	}
};
