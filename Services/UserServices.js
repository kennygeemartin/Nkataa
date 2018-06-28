var userRepo  = require('../Repos/UserRepository');


exports.addUser = function(req, res, data){
    userRepo.add(data, function(err){
        if(err) res.json('An error occured while adding user');
        res.json('user added successfully');
    });
}

exports.getUserById = function(req, res, id){
    userRepo.getById(id,function(err, user){
        if(err) res.json('Couldnt get the selected user');
        res.json(user);
    });
}

exports.deleteUser = function(req, res, id){
    userRepo.delete(id, function(err, user){
        if(err) res.json('An error occured deleting user');
        res.json('User deleted successfully');
    });
}

exports.getAllUsers = function(req, res){
    userRepo.getWithPopulate({},'[posts]', function(err, data){
        if (err) res.json({err:err, message:'sorry an error occured while retrieving records'});
        res.json(data);
    });
}

exports.updateUser = function(req, res, id, options){
    userRepo.update(id, options, function(err){
        if (err) res.json({err:err, message:'error, user record could not be updated'});
        res.json({message: 'user record updated successfully'});
    });
}