/* 
	requires packages
	"express": responsável por rotas, server, view engine
	"consign": responsável pelo autoload de arquivos
*/
const path = require('path'),
		express = require('express'),
		consign = require('consign'),
		http = require('http'),
		ejsLayouts = require('express-ejs-layouts');

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
	autoload em folders
*/
consign()
	.include('./bin/config.json')
	.then('./bin/mongodb.js')
  .then('./models')
  .then('./controllers')
  .then('./routes')
  .into(app);

app.listen(3000, function(){
	console.log("Servidor Online na porta 3000");
});