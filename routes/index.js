module.exports = function(app){
	
	app.get('/', app.controllers.HomeController.indexView);

	app.get('/docs/:page', app.controllers.HomeController.docsView);
	app.get('/docs/', function(req,res){
		res.render('docs/installing', {
			layout: 'layouts/layout'
		})
	});

};