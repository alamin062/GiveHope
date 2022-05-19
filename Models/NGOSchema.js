const mongoose = require('mongoose');
const NGOSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    NGO_details:{
        type: String,
        required: true,
    }
});
module.exports = NGOSchema;