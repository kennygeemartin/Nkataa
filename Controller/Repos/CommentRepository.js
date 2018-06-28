var model = require('../Models/Comments');
var BaseRepository = require('../Repos/BaseRepository');

function CommentRepository(){


}

CommentRepository.prototype = BaseRepository();

module.exports = function(model){
    return CommentRepository(model);
}