const router = require("express").Router();
const box = require("./box");

// Book routes
router.use("/box", box);

module.exports = router;