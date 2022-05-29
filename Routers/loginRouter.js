// external imports
const express = require("express");

// internal imports
const { getLogin, login, logout } = require("../Controller/loginController");
const decorateHtmlResponse = require("../Middlewares/common/decorateHtmlResponse");
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../Middlewares/login/loginValidators");
const { redirectLoggedIn } = require("../Middlewares/common/checkLogin");

const router = express.Router();

// set page title
const page_title = "Login";

// login page
router.get("/", decorateHtmlResponse(page_title), redirectLoggedIn, getLogin);

// process login
router.post(
  "/",
  decorateHtmlResponse(page_title),
  doLoginValidators,
  doLoginValidationHandler,
  login
);

// logout
router.delete("/", logout);

module.exports = router;