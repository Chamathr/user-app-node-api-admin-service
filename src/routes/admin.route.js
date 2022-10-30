var express = require('express');
var router = express.Router();
const UserController = require('../controllers/admin.controller')
const { celebrate } = require('celebrate');
const user = require('../validations/admin.validation')
const authMiddleware = require('../midlewares/auth.middleware')

router.get('/', UserController.getAllUsers);

router.put('/approve-user/:email', [celebrate(user.userValidation.updateUser)], UserController.updateUser);

module.exports = router;
