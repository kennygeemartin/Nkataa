var model = require('../Models/Comments');
var BaseRepository = require('../Repos/BaseRepository');

function CommentRepository(){


}

CommentRepository.prototype = BaseRepository(model);

module.exports = new CommentRepository();
