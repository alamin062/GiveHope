const express = require('express');
const mongoose = require('mongoose');
const SSLCommerzPayment = require("sslcommerz");
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

const PaymentSchema = require("../Models/PaymentSchema");
const Payment = mongoose.model("Payment",PaymentSchema);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

async function getPayment (req,res){
      
        return res.status(200).json({
          message: "Welcome to sslcommerz app",
          url: `${process.env.ROOT}/ssl-request`
        })
  }
  async function getSSL (req,res){
        const data = {
          total_amount: 200,
          currency: 'BDT',
          tran_id: 'REF123',
          success_url: `${process.env.ROOT}/ssl-payment-success`,
          fail_url: `${process.env.ROOT}/ssl-payment-fail`,
          cancel_url: `${process.env.ROOT}/ssl-payment-cancel`,
          shipping_method: 'No',
          product_name: 'Computer.',
          product_category: 'Electronic',
          product_profile: 'general',
          cus_name: 'Customer Name',
          cus_email: 'cust@yahoo.com',
          cus_add1: 'Dhaka',
          cus_add2: 'Dhaka',
          cus_city: 'Dhaka',
          cus_state: 'Dhaka',
          cus_postcode: '1000',
          cus_country: 'Bangladesh',
          cus_phone: '01711111111',
          cus_fax: '01711111111',
          multi_card_name: 'mastercard',
          value_a: 'ref001_A',
          value_b: 'ref002_B',
          value_c: 'ref003_C',
          value_d: 'ref004_D',
          ipn_url: `${process.env.ROOT}/ssl-payment-notification`,
        };
      
        const sslcommerz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, false) //true for live default false for sandbox
        sslcommerz.init(data).then(data => {
      
          //process the response that got from sslcommerz 
          //https://developer.sslcommerz.com/doc/v4/#returned-parameters
      
          if (data?.GatewayPageURL) {
            return res.status(200).redirect(data?.GatewayPageURL);
          }
          else {
            return res.status(400).json({
              message: "Session was not successful"
            });
          }
        });
      
  }
async function postSSL (req,res){
      
       return res.status(200).json(
          {
            data: req.body,
            message: 'Payment notification'
          }
        );
}
async function postSSLSuc (req,res){
      
        return res.status(200).json(
          {
            data: req.body,
            message: 'Payment success'
          }
        );
}
async function postSSLFalil (req,res){
      
        return res.status(200).json(
          {
            data: req.body,
            message: 'Payment failed'
          }
        );
}
async function postSSLCencel (req,res){
      
        return res.status(200).json(
          {
            data: req.body,
            message: 'Payment cancelled'
          }
        );
}

module.exports = {
    getPayment,
    getSSL,
    postSSL,
    postSSLSuc,
    postSSLFalil,
    postSSLCencel
  };
