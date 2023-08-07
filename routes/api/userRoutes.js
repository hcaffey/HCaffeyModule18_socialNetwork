const router = require('express').Router();
// setting up routes for user
const {

    getUsers,

    getSingleUser,

    createUser,

  } = require('../../controllers/userController');