const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,
} = require("../../controllers/users-controller");

router.route("/").get(getUsers).post(createUsers);

router.route("/:id").get(getSingleUser).put(updateUsers).delete(deleteUsers);

router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
