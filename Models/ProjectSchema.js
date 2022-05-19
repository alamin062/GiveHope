const mongoose = require('mongoose');
const ProjectSchema = mongoose.Schema({
    project_title: {
        type: String,
        required: true,
    },
    NGO_name: {
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    project_details:{
        type: String,
        required: true,
    },
    images:{
        type: String,
    }
});
module.exports = ProjectSchema;