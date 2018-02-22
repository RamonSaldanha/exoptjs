module.exports = function ( app ) {

  this.mysqlConn = function () {

    const Sequelize = require('sequelize');

    const sequelizeConn = new Sequelize({
      database: 'teste',
      username: 'root',
      password: null,
      dialect: 'mysql'
    });

    return sequelizeConn;

  }

  return this;

}
