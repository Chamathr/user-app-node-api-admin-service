var express = require('express');
var router = express.Router();
const AdminController = require('../controllers/admin.controller')
const { celebrate } = require('celebrate');
const admin = require('../validations/admin.validation')
const authMiddleware = require('../midlewares/auth.middleware')

router.get('/', AdminController.getAllAdmins);

router.post('/signup', [celebrate(admin.adminValidation.signupAdmin)], AdminController.signupAdmin);

router.delete('/:email', [celebrate(admin.adminValidation.deleteAdmin)], [authMiddleware.authenticateToken], AdminController.deleteAdmin)

router.put('/update-admin/:email', [celebrate(admin.adminValidation.updateAdmin)], [authMiddleware.authenticateToken], AdminController.updateAdmin)

router.post('/signin', [celebrate(admin.adminValidation.signinAdmin)], AdminController.signinAdmin)

module.exports = router;
