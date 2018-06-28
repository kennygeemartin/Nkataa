var BaseRepository = require('../Models');
var router = require('../routes');

function BaseRepository(model){
    this.model = model;

}

BaseRepository.prototype.get = function(options, callback){
    this.model.find(options, callback);
}

BaseRepository.prototype.add = function(data, callback){
    this.model.create(data, callback);
}

BaseRepository.prototype.delete = function(id, callback){
    this.model.remove(options, callback);
}

BaseRepository.prototype.getById = function(id, callback){
    this.model.findById(id, callback);
}

BaseRepository.prototype.getWithPopulate = function(option, parameter, callback){
    this.model.find(options).populate(param).exec(callback);
}

module.exports = function(model){
   return new BaseRepository(model);
}
    

