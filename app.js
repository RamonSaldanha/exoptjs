/*
	requires packages
	"express": responsável por rotas, server, view engine
	"consign": responsável pelo autoload de arquivos
*/
const path = require('path'),
		express = require('express'),
		consign = require('consign'),
		http = require('http'),
		bodyParser = require('body-parser'),
		ejsLayouts = require('express-ejs-layouts');

// REQUIRES OPCIONAIS

/* 
* shortId serve pra gerar números de id 
* (usado principalmente no lowdb) 
*/
// const shortId = require('shortid'); // usar no controller

/*
	fim requires
*/

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*
	layout extractScript/Style, servem pra indicar
	que todas as tags styles irão forçadamente aparecer no topo do código
	e todas as tags scripts irão forçadamente aparecer no rodapé do código

	para indicar onde vai forçar o envio do script e styles, usar no layout ejs
	<%- script %> <%- style %>
*/
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

/*
	habilitar o uso dos layouts ejs
	para utilizar um ejs layout
	no controller ou rota res.render("index", {layout: 'caminhodolayout'})
	no caminho, você poderá definir "yields", usando
  <%- defineContent('content') %>
*/
app.use(ejsLayouts);

/*
	esta função serve para determinar o caminho onde o EJS vai buscar os arquivos
	por exemplo, se você colocar um elemnto html <img src="img/teste.jpg", ele buscará
	a partir da pasta public, ou seja ele buscar public/img/img.jpg, é onde definimos
	qual é a pasta raiz
*/
app.use(express.static(path.join(__dirname, 'public')));

/* 
	body-parser
	utilizado pra transferência de dados em requisições HTTP
	no metodo post, em forms
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/*
*	autoload em folders
*/
consign(/*{cwd: 'exoptjs'} require to use in electron */)
	.include('./bin/config.json')
	/*
	* use lowdb.js or mongodb.js or mysql
	* according to the database of your choice
	* model Newsletter for mysql example using sequelize
	* model Posts for lowdb example
	* model User for mongodb example using mongoose
	*/
	.then('./bin/mysql.js') 
  .then('./models')
  .then('./controllers')
  .then('./routes')
	.into(app);
		
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log("Servidor Online na porta:" + PORT);
});
