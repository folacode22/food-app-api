//food delivery app Schema
const mongoose = require ("mongoose");
const orderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        Minlenght: 3,
        Maxlenght:25 
    },
    address:{
        type: String,
        required: true,
        Minlenght:10,
        Maxlenght:30
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
//exporting models to routes
module.exports = orderModel;