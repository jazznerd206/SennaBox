const router = require("express").Router();
const boxController = require("../../controllers/boxController");
const box = require("../../models/box");

// Matches with "/api/box"
router.route("/")
  .get(boxController.findAll)
  .post(boxController.create)

router.route("/:boxID")
  .get(boxController.read)
  .post(boxController.update)
  .delete(boxController.destroy)

module.exports = router;