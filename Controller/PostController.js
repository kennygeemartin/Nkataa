// var model = require('../Models/Post');

// var makePost = function(req, res){
//     var value = {
//         time = Date.now,
//         postBody : req.body.postBody,
        
//     }

//     model.create(post,function(err){
//         if(err) res.json({message : "Post not created"});
//         res.json({message: 'Post has been created'});
//     });
// }

// var getPost = function(req, res){
//     model.find(function(err, users){
//         if(err)res.json('No post found');
//         res.json({message : postBody});
//     });
// }


// var deletePost = function(req, res){
//     var options = {postBody : req.params.id};
//     model.remove(options, function(err){
//         if(err)res.json({message: 'An error occured'});
//         res.json('Post has been deleted');
//     })
// }
