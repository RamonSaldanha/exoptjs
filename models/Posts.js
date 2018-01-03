/*
para usar:
1º definir como banco de dados padrão o lowdb
   lá onde o consign inclue as dependências

2º requerer o model dentro do controller, assim:
var posts = app.models.Posts;

3º no model use, algo parecido com:
    var postsVer = posts.query.value();
    
    você pode checar as querys https://github.com/typicode/lowdb
    o método .get(), já é usado no model, então não precisa usar.
*/


// // MODELO DE MODEL LOWDB
// module.exports = function (app) {

//   var modelName = 'posts';

//   var lowDB = require('lowdb'),
//       FileSync = require('lowdb/adapters/FileSync'),
//       conn = new app.bin.lowdb.lowConn(lowDB, FileSync, modelName);
  
//   this.query = conn.defaults({posts: []}).get(modelName);

//   return this;
// }

