//router
const Order = require("../models/food");
const express = require("express");

const router = express.Router();

//API Endpoint to make new order

router.post("/api/order", async(req,res)=>{
    try {
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
  return  res.status(201).json (newOrder);


  }  catch (error) {
         console.log(error);
     return res.status(500).json({ message: "server error" });
    }
});
//API Endpoint to view request order   
router.get("/api/orders",
async (req,res)=>{
    try {
        const get_all_orders = await Order.find();
        return res
      .status(200)
      .json({
        request_order_counts: get_all_orders.length,
        data: get_all_orders,
      });
    } catch (error) {
         console.log(error);
     return res.status(500).json({ message: "server error" });
    }
});

//API Endpoint to updating of order
router.put("/api/orders/:id", async (req,res)=>{
    try {
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
    } catch (error) {
         console.log(error);
     return res.status(500).json({ message: "server error" });
    }
   
});

//API Endpoint to approve delete order
router.delete("/api/order/:id", async(req,res)=>{
    try {
        const id= req.params.id
    const delete_order = await Order.findByIdAndDelete({_id:id},);
    
    return res.status(200).json(delete_order)
    } catch (error) {
          console.log(error);
     return res.status(500).json({ message: "server error" }); 
    }
});

//exporting router to app
module.exports=router;