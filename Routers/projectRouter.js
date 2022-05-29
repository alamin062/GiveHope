const express = require('express');
const router = express.Router();

// internal imports
const decorateHtmlResponse = require("../Middlewares/common/decorateHtmlResponse");
const projectUpload = require("./../Middlewares/project/projectUpload");
const {checkLogin} = require("./../Middlewares/common/checkLogin");
const { postProject, getProject } = require("../Controller/projectController");

router.get('/postproject', decorateHtmlResponse("Articles"),checkLogin,getProject);
router.post(
    '/',
    projectUpload,
    // addUserValidators,
    // addUserValidationHandler,
    postProject,
  );

module.exports = router;