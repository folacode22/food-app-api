const mongoose = require ("mongoose");
const orderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght:25 
    },
    address:{
        type: String,
        required: true,
        minlenght:10,
        maxlenght:30
    },
    food:{
        type: String,
        enum:['Rice','Beans'],
        
    },
    number_of_plates:{
        type: Number,

    },
    price:{
        type: Number,
        default:null
    },
},
{timestamps:true},);

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;