var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userHandle.controller')
const { celebrate } = require('celebrate');
const user = require('../validations/user.validation')
const authMiddleware = require('../midlewares/auth.middleware')

router.get('/', UserController.getAllUsers);

router.put('/approve-user/:email', [celebrate(user.userValidation.approveUser)], [authMiddleware.authenticateToken], UserController.approveUser);

// router.delete('/:email', [celebrate(user.userValidation.deleteUser)], [authMiddleware.authenticateToken], UserController.deleteUser)

module.exports = router;
