const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const User = require('../models/user');

const getUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find({}, '-password');
    } catch (err) {
        const error = new HttpError(
            'Fetching users failed, please try again later.',
            500
        );
        return next(error);
    }
    res.json({ users: users.map(user => user.toObject({ getters: true })) });
};

const createUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new HttpError('Invalid inputs passed , please check your data', 422);
    }
    const { Name, Email, ID, Phone, IP } = req.body;

    const createdUser = new User({
        Name,
        Email,
        ID,
        Phone,
        IP,
    });

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError('Creating user failed,please try again', 500);
        return next(error);
    }

    res.status(201).json({ user: createdUser });
};

const deleteUser = async (req, res, next) => {
    const userId = req.params.uid;
    let user;
    try {
        user = await User.findById(userId);
    } catch (err) {
        const error = new HttpError('Deleting user failed1,please try again', 500);
        return next(error);
    }

    try {
        await user.remove();
    } catch (err) {
        const error = new HttpError('Deleting user failed,please try again', 500);
        return next(error);
    }

    res.status(200).json({ message: 'Deleted user.' });
};

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.deleteUser = deleteUser;
