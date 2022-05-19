const express = require('express');
const router = express.Router();

// internal imports
const decorateHtmlResponse = require("../Middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("./../Middlewares/common/checkLogin");
const { postDonation, getDonation } = require("../Controller/donationControllar");

router.get('/', decorateHtmlResponse("Donation"),getDonation);

module.exports = router;