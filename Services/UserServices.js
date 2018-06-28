import { isModuleDeclaration } from 'babel-types';

var userRepo  = require('../Repos/UserRepository');


module.exports.addUser = function(req, res, data){
    userRepo.add(data, function(err){
        if(err) res.json('An error occured while adding user');
        res.json('user added successfully');
    });
}

module.exports.getUserById = function(req, res, id){
    userRepo.getById(id,function(err, user){
        if(err) res.json('Couldnt get the selected user');
        res.json(user);
    });
}

module.exports.deleteUser = function(req, res, id){
    userRepo.delete(id, function(err, user){
        if(err) res.json('An error occured deleting user');
        res.json('User deleted successfully');
    });
}