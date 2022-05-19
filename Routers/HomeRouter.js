const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

// internal imports
const {
  getUsers,
  addUser,
  removeUser,
} = require("../Controller/userController");
const decorateHtmlResponse = require("../Middlewares/common/decorateHtmlResponse");
const { checkLogin } = require("../Middlewares/common/checkLogin");
const Controller = require("./../Controller/BackendController");
const avatarUpload = require("../Middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");

router.get('/',decorateHtmlResponse("HomePage"),Controller.getHome);
router.get('/contact',Controller.getContact);
router.get('/gallary',Controller.getGallary);
router.get('/test',decorateHtmlResponse("HomePage"),Controller.getTest);
router.get('/about',decorateHtmlResponse("About"),Controller.getAboutPage);
router.post('/contact',Controller.postMassage);
router.get("/user", decorateHtmlResponse("Users"), getUsers);
router.post(
    "/users",
    avatarUpload,
    addUserValidators,
    addUserValidationHandler,
    addUser
  );

module.exports = router;