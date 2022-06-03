const mongoose = require('mongoose');
const DonationSchema = mongoose.Schema({
    donator_name: {
        type: String,
        required: true,
    },
    user_id:{
        type: String,
        required: true,
    },
    NGO_id:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    project_title:{
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    project_id: {
        type: String,
        required: true,
    }
});
module.exports = DonationSchema;