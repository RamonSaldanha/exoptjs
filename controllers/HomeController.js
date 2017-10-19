module.exports = function(app) {

	/* importart model */
	var docsModel = app.models.User;


	/* método que exibe a página inicial */
	this.indexView = function(req, res) {

		var alerts = {
			success: [
				{
					alertTitle: 'Teste realizado com sucesso',
					alertBody: 'As variaveis estão sendo transmitida entre o controller e as views',
				},

			],
		  error: [
		  	"Erro 1",
		  	"Erro 2",
		  	"Erro 3",
		  ],
		};

		res.render("index", {
			layout: 'layouts/layout',
			alerts: alerts
		});

	}


	this.docsView = function(req, res){

		switch(req.params.page) {
			case 'controller':
				res.render('docs/controller', {
					layout: 'layouts/layout'
				})
			break;
			case 'route':
				res.render('docs/route', {
					layout: 'layouts/layout'
				})
			break
			case 'installing':
				res.render('docs/installing', {
					layout: 'layouts/layout'
				})
			break
			case 'model':
				res.render('docs/route', {
					layout: 'layouts/layout'
				})
			break
		}
	}

	return this;

}