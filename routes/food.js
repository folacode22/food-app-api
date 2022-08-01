const Order = require("../models/food");
const express = require("express");

const router = express.Router();

router.post("/api/order", async(req,res)=>{
    console.log(req.body);
    const { name,address,food,price,number_of_plates, } = req.body;
    const newOrder = new Order({
        name,
        address,
        food,
        price,
        number_of_plates,
    });
    await newOrder.save();
    res.status(201).json (newOrder);
});

router.get("/api/orders",
async (req,res)=>{
    
    const get_all_orders = await Order.find();

    return res
      .status(200)
      .json({
        request_order_counts: get_all_orders.length,
        data: get_all_orders,
      });
});

router.put("/api/orders/:id", async (req,res)=>{
    const id = req.params.id
    const{name,
        address,
        food,
        price,
        number_of_plates}=req.body;
        const update_orders = await Order.findByIdAndUpdate({_id:id},
            {...req.body,},{new:true,}
            );
return res.status(200).json(update_orders);
});

router.delete("/api/order/:id", async(req,res)=>{
    const id= req.params.id
    const delete_order = await Order.findByIdAndDelete({_id:id},);
    return res.status(200).json(delete_order)
});


module.exports=router;