module.exports = function (app) {

  /*
    @param lowDB = function() => require('lowdb') in model
    @param FileSync = function() => require('lowdb/adapters/FileSync') in model
    @param modelName = string
  */
  this.lowConn = function (lowDB, FileSync, modelName) {

    const path = require('path');

    const dbl = lowDB(new FileSync(path.join(__dirname, 'database/') + modelName + '.json'));

    return dbl;

  }

  return this;

}
