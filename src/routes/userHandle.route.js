var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userHandle.controller')
const { celebrate } = require('celebrate');
const user = require('../validations/user.validation')
const authMiddleware = require('../midlewares/auth.middleware')

router.get('/', UserController.getAllUsers);

router.post('/', [celebrate(user.userValidation.createUser)], UserController.createUser);

router.delete('/:email', [celebrate(user.userValidation.deleteUser)], [authMiddleware.authenticateToken], UserController.deleteUser)

router.put('/:email', [celebrate(user.userValidation.updateUser)], [authMiddleware.authenticateToken], UserController.updateUser)

router.post('/signin', [celebrate(user.userValidation.signinUser)], UserController.signinUser)

module.exports = router;
