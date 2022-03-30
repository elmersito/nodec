const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');
const userValidator = require("../validations/userValidator");
const jwToken = require("../validations/jwtValidation");
router.get('/user', usersController.getUser);
router.get('/users', jwToken.validateToken ,usersController.getUsers);
router.post('/user', userValidator.add,usersController.postUser);
router.post("/login",userValidator.id,usersController.getLogin);
router.put('/user', userValidator.update,usersController.putUser);
router.delete('/user', userValidator.id,usersController.deleteUser);

module.exports = router;
