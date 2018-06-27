var model = require('../Models/Post');

exports.createPost = function(req, res){
    var data = {
        time: Date.now(),
        postBody: req.body.postBody,
        user: req.body.user,
        comments: [],
    }
    model.create(data, function(err){
        if (err) res.json({err: err, message: 'Sorry, the post could not be created'});
        res.json({message: 'post created successfully'});
    });
}

exports.viewPosts = function(req, res){
    model.find(function(err, posts){
        if (err) res.json({err: err, message: 'Cant find the post'});
        res.json(posts);
    });
}

exports.deletePost = function(req, res){
    var options = {_id: req.params.id};
    model.remove(options, function(err){
        if (err) res.json({err:err, message:'an error occurred while deleting the post'});
        res.json({message: 'post deleted'});
    });
}

