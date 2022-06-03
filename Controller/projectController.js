// external imports
const bcrypt = require("bcrypt");
const { unlink } = require("fs");
const path = require("path");
const mongoose = require("mongoose");

// internal imports
const ProjectSchema = require("../Models/ProjectSchema");
const Project = new mongoose.model("Project", ProjectSchema);

async function getProject (req,res){
  res.render("postProjects"); 
}

// add user
async function postProject(req, res) {
  //console.log(req.files[0].filename);
  
    const newProject = new Project({
      ...req.body,
      images: req.files[0].filename,
    }); 

  // save user or send error
  try {
    const result = await newProject.save();
    res.redirect("/home/cause");
    //res.status(200).json({
      //message: "User was added successfully!",
    //});
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}



module.exports = {
    postProject,
    getProject,
};