var express = require('express');
var router = express.Router();
var userController = require('../Controller/UserController');
var postController = require('../Controller/PostController');

/* GET users listing. */
router.post('/create', userController.addUser);
router.get('/',userController.getUser ); 
router.get('/delete:id',userController.deleteUser);
router.get('/getUserByParam/:key/:values', userController.getUserByParam);

//router.post('/update', postController.makePost );


module.exports = router;
