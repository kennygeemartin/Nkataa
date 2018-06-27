var model = require('../Models/User');

exports.addUser = function(req, res){
    var data = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,    
    };
    model.create(data, function(err){
        if(err) res.json({err: err, message: 'the user could not be created'});
        res.json({message : 'The user was created successfully'})
    });

    
}
exports.getUser = function(req , res){
        model.find(function(err, users){
            if(err){
                res.json({err: err, message : 'user not found'})
            }
            else{
                res.json(users);
            }

        });
    }
exports.deleteUser = function(req, res){
    var options = {_id : req.params.id};
    model.remove(options,  function(err){
        if(err)res.json ({err:err, message : 'an error occured'});
        else{
            res.json({message : 'user deleted'});
        }

    });
}

exports.getUserByParam = function(req, res){
   
    var key = req.params.key;
    var values = req.params.values;
        
        switch (key) {
            case 'name': 
                model.find({name : values,}, '-password', function(err, info){
                    if(err) res.json({message:'Name does not exist'});
                    res.json({message: info});
                    
                });
                break;
            case 'email':
                model.findOne({email : values},'name email', function(err, info){
                    if(err) res.json({message:'Couldnt find the name'});
                    res.json({message:info});
                });
            
                break;

            case 'id':
                model.findById({id : values}, 'name email',function(err, info){
                    if(err) res.json({message:'Couldnt find the user with the specified id'});
                    res.json({message:info});
                });

                break;
        
            default:
                res.json('Invalid input');
                break;
        }
}


