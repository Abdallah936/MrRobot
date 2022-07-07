const path = require("path");
const express = require("express");
const { check, body } = require("express-validator");
const userController = require("../controllers/use-controller");
const router = express.Router();

router.get("/", userController.getHomePage);

router.get("/countries", userController.getCountries);

router.post("/signup", userController.postSignup);

router.post("/login", userController.postLogin);

module.exports = router;
