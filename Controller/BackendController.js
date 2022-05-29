const express = require('express');
const mongoose = require('mongoose');

const ContactSchema = require("./../Models/ContactSchema");
const Contact = new mongoose.model("Contact", ContactSchema);

const UserSchema = require("../Models/UserSchema");
const User = mongoose.model("User", UserSchema);

const ProjectSchema = require("../Models/ProjectSchema");
const Project = mongoose.model("Project", ProjectSchema);

const DonationSchema = require("../Models/DonationSchema");
const Donation = mongoose.model("Donation", DonationSchema);

class BackendController {
   static getHome = (req, res) => {
      res.render("HomePage");
   }
   static getUserRegistration = (req, res) => {
      res.render("userRegistration");
   }
   static getNgoRegistration = (req, res) => {
      res.render("ngoRegistration");
   }
   static getAdminRegistration = (req, res) => {
      res.render("adminRegistration");
   }
   static getUserProfile =(req,res)=>{
      res.render("userProfile"); 
      }

   static getPayment = async (req, res) => {
      try {
         const result = await Donation.find();
         res.render("checkout", { data: result });
      } catch (err) {
         console.log(err);
      }
   }
   static getCause = async (req, res) => {
      try {
         const result = await Project.find();
         res.render("cause", { data: result });
      } catch (err) {
         console.log(err);
      }
   }
   static getBlog = (req, res) => {
      res.render("blog");
   }
   static getProfile = async (req, res) => {
      try {
         const result = await User.find();
         res.render("profile", { data: result });
      } catch (err) {
         console.log(err);
      }
   }
   static getMassage = async (req, res) => {
      try {
         const result = await Contact.find();
         res.render("massage", { data: result });
      } catch (err) {
         console.log(err);
      }
   }
   static DeleteMassage = async (req, res) => {
      try {
         const result = await Contact.findByIdAndDelete(req.params.id);
         //console.log(req.params.id);
         res.redirect("/home/massage");
      } catch (err) {
         console.log(err);
      }
   };
   static DeleteProject = async (req, res) => {
      try {
         const result = await Project.findByIdAndDelete(req.params.id);
         //console.log(req.params.id);
         res.redirect("/home/project");
      } catch (err) {
         console.log(err);
      }
   };
   static updateProject = async (req, res) => {
      try {
         // console.log(req.params.id);
         const result = await Project.findByIdAndUpdate(req.params.id, req.body)
         // console.log(result);
         res.redirect("/home/project");
         //res.render("edit", {data:result});
      } catch (err) {
         console.log(err);
      }
   }

   static getSingleMassage = async (req, res) => {
      try {
         const result = await Contact.findById(req.params.id);
         res.render("SingleMassage", { data: result });
      } catch (err) {
         console.log(err);
      }
   };

   static getProject = async (req, res) => {
      try {
         const result = await Project.find();
         res.render("project", { data: result });
      } catch (err) {
         console.log(err);
      }
   }
   static getTest = (req, res) => {
      res.render("test");
   }
   static getContact = (req, res) => {
      res.render("contact");
   }
   static getAdmin = (req, res) => {
      res.render("AdminDashboard");
   }
   static getAboutPage = (req, res) => {
      res.render("about");
   }
   static getGallary = (req, res) => {
      res.render("gallary");
   }
   static postMassage = async (req, res) => {
      try {
         const { name, email, phone, massage } = req.body;
         const newContact = new Contact({
            name: name,
            email: email,
            phone: phone,
            massage: massage,
         });
         const result = await newContact.save();
         console.log(result);
      } catch (err) {
         console.log(err);
      }
   }
   static postDonate = async (req, res) => {
      try {
         const { donator_name, email, phone, project_title, amount, project_id } = req.body;
         const newDonation = new Donation({
            donator_name: donator_name,
            email: email,
            phone: phone,
            project_title: project_title,
            amount: amount,
            project_id: project_id
         });
         const result = await newDonation.save();
         res.redirect('/home/checkout');
      } catch (err) {
         console.log(err);
      }
   }
   static postPayment = async (req, res) => {
      try {
         const { name, payment_id, amount, phone } = req.body;
         const newDonation = new Donation({
            name: name,
            payment_id: payment_id,
            amount: amount,
            phone: phone
         });
         const result = await newDonation.save();
         res.redirect('/home/checkout', { data: result });
      } catch (err) {
         console.log(err);
      }
   }

}
module.exports = BackendController;