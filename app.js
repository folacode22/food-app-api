//npm packages
// require dotenv
require('dotenv').config();

//import packages
const express = require('express');

//import database connect
const connectDB = require('./database/db');

//import routes handlers
const testRouter = require('./routes/food.routes');

//invoke our db connection
connectDB();

//create an instance of express
const app = express();

//declare your port 
const port = process.env.PORT || 1500;

//express middleware

app.use(express.json());
app.use('/api',testRouter);

//404 error
app.use("*", (req, res) => {
  return res
    .status(404)
    .json({ MessageChannel: "oops page not found" });
});

//port listen to
app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
    console.log(process.env.NODE_ENV);
});