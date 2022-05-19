const express = require('express');
const mongoose = require('mongoose');

const ContactSchema = require("./../Models/ContactSchema");
const Contact = new mongoose.model("Contact", ContactSchema);

class BackendController{
    static getHome =(req,res)=>{
        res.render("HomePage"); 
    }
    static getTest =(req,res)=>{
        res.render("test"); 
    }
    static getContact =(req,res)=>{
        res.render("contact"); 
    }
    static getAboutPage =(req,res)=>{
        res.render("about"); 
    }
    static getGallary =(req,res)=>{
        res.render("gallary"); 
    }
    static postMassage =async(req,res)=>{
        try {
            const { name, email, phone, massage } = req.body;
            const newContact = new Contact({
               name: name,
               email: email,
               phone: phone,
               massage: massage,
            });
            const result = await newContact.save();
         } catch (err) {
            console.log(err);
         }
    }

}
module.exports = BackendController;