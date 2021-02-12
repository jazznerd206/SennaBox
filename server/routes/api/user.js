const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route('/')
  .get(userController.findAll)
  .post(userController.create)

router.route('/:userId')
  .get(userController.findOne)
  // .put(user.update_a_user)
  .delete(userController.destroy);
module.exports = router;