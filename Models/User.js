var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name : String,
    email : {type : String, unique : true},
    password : String,
    posts : [{type : mongoose.Schema.Types.ObjectId, ref : 'Post'}]

});


module.exports = mongoose.model('User', userSchema);
