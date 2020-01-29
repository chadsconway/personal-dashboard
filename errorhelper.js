module.exports = {
	mysql: function(err) {
		console.log('Error connecting to mysql, database will not be available');
		return;
	}
};
