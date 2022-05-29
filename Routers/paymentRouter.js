const express = require('express');
const router = express.Router();

// internal imports
const decorateHtmlResponse = require("../Middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("./../Middlewares/common/checkLogin");
const { getPayment,
    getSSL,
    postSSL,
    postSSLSuc,
    postSSLFalil,
    postSSLCencel } = require("../Controller/PaymentControllar");

router.get('/', decorateHtmlResponse("Payment"),getPayment);
router.get('/ssl-request', decorateHtmlResponse("Request"),getSSL);
router.post('/ssl-payment-notification', decorateHtmlResponse("Notification"),postSSL);
router.post('/ssl-payment-success', decorateHtmlResponse("Success"),postSSLSuc);
router.post('/ssl-payment-fail', decorateHtmlResponse("Fail"),postSSLFalil);
router.post('/ssl-payment-cancel', decorateHtmlResponse("Cencel"),postSSLCencel);

module.exports = router;