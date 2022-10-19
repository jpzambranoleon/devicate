const router = require("express").Router();
const AuthController = require("../controllers/user.controller");

// Register
router.post("/register", [checkDuplicateEmail], AuthController.register);

// Login
router.post("/login", AuthController.login);
