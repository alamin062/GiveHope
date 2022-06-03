const express = require('express');
const router = express.Router();

// internal imports
const decorateHtmlResponse = require("../Middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("./../Middlewares/common/checkLogin");
const { postDonation, getDonation,getDonation1 } = require("../Controller/donationControllar");

router.post('/postdonate/:id', decorateHtmlResponse("Donation1"),getDonation);
router.get('/postdonate/:id', decorateHtmlResponse("Donation"),getDonation1);

module.exports = router;