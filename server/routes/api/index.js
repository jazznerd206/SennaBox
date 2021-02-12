const router = require("express").Router();
const box = require("./box");
const user = require("./user");

// Box routes
router.use("/box", box);
// User routes
router.use("/user", user);

module.exports = router;