module.exports = function(app){
	
	app.get('/', app.controllers.HomeController.indexView);

};