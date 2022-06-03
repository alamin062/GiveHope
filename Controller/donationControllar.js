// get inbox page
const express = require('express');
const mongoose = require('mongoose');
const ProjectSchema = require("../Models/ProjectSchema");
const Project = mongoose.model("Project", ProjectSchema);
async function getDonation1(req, res, next) {
  res.render("donate");
  }

async function getDonation(req, res, next) {
  try {
    const result = await Project.findById(req.params.id);
    res.render("donate", { data: result })
 } catch (err) {
    console.log(err);
 }
  }
  
  module.exports = {
    getDonation,
    getDonation1
  };