var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    time : Date,
    postBody : String,
});

module.exports = mongoose.model('Post', postSchema);