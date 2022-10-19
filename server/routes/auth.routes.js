const router = require("express").Router();
const { checkDuplicateEmail } = require("../middlewares/register.middleware");
const AuthController = require("../controllers/user.controller");

// Register
router.post("/register", [checkDuplicateEmail], AuthController.register);

// Login
router.post("/login", AuthController.login);

module.exports = router;
