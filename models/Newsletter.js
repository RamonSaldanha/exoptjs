// usage:

// out of method controller
// define your const with module
// const Newsletter = app.models.Newsletter;

// in method controller

// const news = Newsletter.query;

// news.findOne().then(news => {
// 	res.render("index", {
// 		layout: 'layouts/layout',
// 		newsletter: news
// 	});
// })

// you can see other example with relationship in github:
// https://github.com/sequelize/express-example



// module.exports = ( app ) => {

// 	this.conn = new app.bin.mysql.mysqlConn;

//   const Inventory = this.conn.define('inventories', {
//     title: this.conn.Sequelize.STRING,
//   });

// 	this.query = Inventory;

// 	return this;

// }