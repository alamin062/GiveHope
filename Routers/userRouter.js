// external imports
const express = require("express");
const { check } = require("express-validator");

// internal imports
const {
  getUsers,
  addUser,
  removeUser,
} = require("../Controller/userController");
const decorateHtmlResponse = require("../Middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../Middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../Middlewares/users/userValidators");

const { checkLogin } = require("../Middlewares/common/checkLogin");

const router = express.Router();

// users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

// remove user
router.delete("/:id", removeUser);

module.exports = router;