const mongoose = require('mongoose');
const PaymentSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    payment_id:{
        type:String,
        required: true,
    },
    phone:{
        type:String,
        required: true,
    },
    amount:{
        type:String,
        required: true,
    }
});
module.exports = PaymentSchema;