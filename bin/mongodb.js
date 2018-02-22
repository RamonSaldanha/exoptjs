module.exports = function(app){


	this.mongoConn = function(){
		
		const mongoose = require('mongoose');

		mongoose.Promise = global.Promise;
		mongoose.connect(app.bin.config.db_type.mongodb.mongo_uri , app.bin.config.db_type.mongodb.mongo_options);

		return mongoose.connection;

	}


	return this;

}