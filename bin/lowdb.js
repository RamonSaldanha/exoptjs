module.exports = function (app) {
        
  /*
    @param lowDB = function() => require('lowdb') in model
    @param FileSync = function() => require('lowdb/adapters/FileSync') in model
    @param modelName = string
  */
  this.lowConn = function (lowDB, FileSync, modelName) {

    var dbl = lowDB(new FileSync('./bin/database/' + modelName + '.json'));

    return dbl;
    
  }

  return this;

}
