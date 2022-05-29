// external imports
const express = require("express");

// internal imports
const { getInbox } = require("../Controller/inboxController");
const decorateHtmlResponse = require("../Middlewares/common/decorateHtmlResponse");
const { checkLogin } = require("../Middlewares/common/checkLogin");

const router = express.Router();

// inbox page
router.get("/",decorateHtmlResponse("Inbox"), checkLogin, getInbox);

module.exports = router;