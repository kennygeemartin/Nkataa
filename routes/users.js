var express = require('express');
var router = express.Router();
var userController = require('../Controller/UserController');

/* GET users listing. */
router.post('/create', userController.addUser);
router.get('/',userController.getUser ); 


module.exports = router;
