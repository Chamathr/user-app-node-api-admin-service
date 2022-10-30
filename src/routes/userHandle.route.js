var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userHandle.controller')
const { celebrate } = require('celebrate');
const userHandle = require('../validations/userHandle.validation')
const authMiddleware = require('../midlewares/auth.middleware')

router.get('/users', UserController.getAllUsers);

router.put('/update-user/:email', [celebrate(userHandle.userValidation.updateUser)], [authMiddleware.authenticateToken], UserController.updateUser);

router.delete('/delete-user/:email', [celebrate(userHandle.userValidation.deleteUser)], [authMiddleware.authenticateToken], UserController.deleteUser)

router.delete('/delete-user-permanent/:email', [celebrate(userHandle.userValidation.deleteUser)], [authMiddleware.authenticateToken], UserController.deleteUserPermanent)

module.exports = router;
