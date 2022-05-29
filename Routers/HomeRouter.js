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
const { checkLogin, requireRole } = require("../Middlewares/common/checkLogin");
const Controller = require("./../Controller/BackendController");
const avatarUpload = require("../Middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");

router.get('/',decorateHtmlResponse("HomePage"),checkLogin,Controller.getHome);
router.get('/contact',decorateHtmlResponse("Contact"),checkLogin,Controller.getContact);
router.get('/admin',decorateHtmlResponse("Admin"),checkLogin,requireRole(["Admin"]),Controller.getAdmin);
router.get('/profile',decorateHtmlResponse("Profile"),checkLogin,requireRole(["Admin"]),Controller.getProfile);
router.get('/massage',decorateHtmlResponse("Massage"),checkLogin,requireRole(["Admin"]),Controller.getMassage);
router.get('/project',decorateHtmlResponse("Project"),checkLogin,requireRole(["Admin"]),Controller.getProject);
router.get('/blog',decorateHtmlResponse("Blog"),Controller.getBlog);
router.get('/cause',decorateHtmlResponse("Cause"),checkLogin,Controller.getCause);
router.get('/gallary',decorateHtmlResponse("HomePage"),Controller.getGallary);
router.get('/test',decorateHtmlResponse("HomePage"),Controller.getTest);
router.get('/about',decorateHtmlResponse("About"),Controller.getAboutPage);
router.post('/contact',decorateHtmlResponse("Contact"),Controller.postMassage);
router.get("/user", decorateHtmlResponse("Users"), getUsers);
router.get('/massage/:id', Controller.getSingleMassage);
router.get('/deleteMassage/:id',Controller.DeleteMassage);
router.get('/deleteproject/:id',Controller.DeleteProject);
router.post('/updateproject/:id',Controller.updateProject);
router.post('/postdonate',Controller.postDonate);
router.post('/checkout',decorateHtmlResponse("Users"),Controller.postPayment);
router.get('/checkout',decorateHtmlResponse("Users"),Controller.getPayment);
router.get('/adminregistration',decorateHtmlResponse("About"),Controller.getAdminRegistration);
router.get('/ngoregistration',decorateHtmlResponse("About"),Controller.getNgoRegistration);
router.get('/userregistration',decorateHtmlResponse("About"),Controller.getUserRegistration);
router.get('/userprofile',decorateHtmlResponse("Profile"),checkLogin,Controller.getUserProfile);
router.post(
    "/users",
    avatarUpload,
    addUserValidators,
    addUserValidationHandler,
    addUser
  );

module.exports = router;