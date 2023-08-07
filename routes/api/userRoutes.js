const router = require('express').Router();
//updated controllers
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/userController');

  router.route('/').get(getUsers).post(createUser);

  router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

  router.route('/:userId/friends/:friendID').post(addFriend).delete(deleteFriend)


  module.exports = router