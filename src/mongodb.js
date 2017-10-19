// const mongoose = require('mongoose');

// /*

// Classe de conexão com mongoDB

// */
// var mongooseConn = function() {

// 	mongoose.Promise = global.Promise;
// 	return mongoose.connect('mongodb://127.0.0.1:27017/novo', { useMongoClient: true });

// }

// module.exports = function(){
// 	return mongooseConn;
// }

// /*
// 	para instanciar a conexão com o mongodb, usar os seguintes parametros
// 	var conn = new app.config.database();
// */


module.exports = function(app){


	this.mongoConn = function(){
		
		const mongoose = require('mongoose');

		mongoose.Promise = global.Promise;
		mongoose.connect(app.src.config.db_type.mongodb.mongo_uri , app.src.config.db_type.mongodb.mongo_options);

		return mongoose.connection;

	}

	this.mysqlConn = function(){

	}

	return this;

}