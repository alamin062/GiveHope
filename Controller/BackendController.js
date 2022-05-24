const express = require('express');
const mongoose = require('mongoose');

const ContactSchema = require("./../Models/ContactSchema");
const Contact = new mongoose.model("Contact", ContactSchema);

const UserSchema = require("../Models/UserSchema");
const User = mongoose.model("User",UserSchema);

const ProjectSchema = require("../Models/ProjectSchema");
const Project = mongoose.model("Project",ProjectSchema);

class BackendController{
    static getHome =(req,res)=>{
        res.render("HomePage"); 
    }
    static getCause =async(req,res)=>{
        try {
            const result = await Project.find();
            res.render("cause", { data: result });
         } catch (err) {
            console.log(err);
         }
    }
    static getBlog =(req,res)=>{
        res.render("blog"); 
    }
    static getProfile =async(req,res)=>{
        try {
            const result = await User.find();
            res.render("profile", { data: result });
         } catch (err) {
            console.log(err);
         }
    }
    static getMassage = async(req,res)=>{
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
     static updateProject = async(req,res)=>{
        try{
           // console.log(req.params.id);
            const result = await Project.findByIdAndUpdate(req.params.id, req.body)
           // console.log(result);
            res.redirect("/home/project");
            //res.render("edit", {data:result});
         }catch(err){
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
  
    static getProject =async(req,res)=>{
        try {
            const result = await Project.find();
            res.render("project", { data: result });
         } catch (err) {
            console.log(err);
         }
    }
    static getTest =(req,res)=>{
        res.render("test"); 
    }
    static getContact =(req,res)=>{
        res.render("contact"); 
    }
    static getAdmin =(req,res)=>{
        res.render("AdminDashboard"); 
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
            console.log(result);
         } catch (err) {
            console.log(err);
         }
    }

}
module.exports = BackendController;