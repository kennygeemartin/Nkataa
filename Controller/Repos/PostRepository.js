var model = require('../Models/Post');
var BaseRepository = require('../Repos/BaseRepository');

function PostRepository(){

}

PostRepository.prototype = BaseRepository(model);

module.exports =  new PostRepository(model);