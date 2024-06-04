const express = require('express');
const UserController = require('../controller/user');

const router = express.Router();
const userController = new UserController();

router.get('/users', userController.getUser);

router.post('/users', userController.updateUser);

module.exports = router;
