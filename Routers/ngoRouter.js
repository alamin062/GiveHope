const express = require('express');
const router = express.Router();

// internal imports
const decorateHtmlResponse = require("../Middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("./../Middlewares/common/checkLogin");
const { postProject, getNGO } = require("../Controller/ngoControllar");

router.get('/', decorateHtmlResponse("Articles"),getNGO);

module.exports = router;