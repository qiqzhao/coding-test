const express = require('express');
const UserController = require('../controller/user');

const router = express.Router();
const userController = new UserController();

router.get('/users/:id', userController.getUser);
router.get('/users', userController.getAll);

router.put('/users', userController.updateUser);
router.post('/users', userController.createUser);

module.exports = router;
