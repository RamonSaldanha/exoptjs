module.exports = function(app){

	var mongoose = require('mongoose'),
			Schema = mongoose.Schema,
			conn = new app.src.mongodb.mongoConn;

	this.Schema = new Schema ({
		nome: String,
	});

	this.query = mongoose.model('users', this.Schema);

	return this;

}