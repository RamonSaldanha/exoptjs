module.exports = function(app) {

	/* método que exibe a página inicial */
	this.indexView = function(req, res) {

		res.render("index", {
			layout: 'layouts/layout'
		});

	}

	return this;

}