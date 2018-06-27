var model = require('../Models/Comments');

exports.addComment = function(req, res){
    var data = {
        time: Date.now(),
        commentBody: req.body.commentBody,
        user: req.body.user,
        post: req.body.post,
    }
    model.create(data, function(err){
        if (err) res.json({err: err, message: 'the comment could not be added'});
        res.json({message: 'comment added successfully'});
    });
}

exports.viewComments = function(req, res){
    var post = req.params.post;
    model.find({post:post}, 'commentBody', function(err, data){
        if (err) res.json({err:err, message:'sorry, something went wrong while retrieving'});
        res.json({message: data});
    });
}