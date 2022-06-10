const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controller');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post(
    '/add-user',
    [check('Name').not().isEmpty(),
    check('Email').isEmail(),
    check('ID').not().isEmpty(),
    check('Phone').not().isEmpty(),
    check('IP').not().isEmpty()
    ],
    usersController.createUser);


router.delete('/:uid', usersController.deleteUser);


module.exports = router;
