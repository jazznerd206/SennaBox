const router = require("express").Router();
const boxController = require("../../controllers/boxController");

// Matches with "/api/box"
router.route("/")
  .get(boxController.findAll)

module.exports = router;