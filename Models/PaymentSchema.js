const mongoose = require('mongoose');
const PaymentSchema = mongoose.Schema({
    donator_id:{
        type:String,
        required: true,
    },
    project_id:{
        type:String,
        required: true,
    },
    amount:{
        type:String,
        required: true,
    }
});
module.exports = PaymentSchema;