//npm packages
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const testRouter = require('./routes/food');

const app = express();

//port to use
const port = process.env.PORT || 1500;

//middleware

app.use(express.json());
app.use(testRouter);

//database connected to
mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('connected to database');
});

//404 error
app.use("*", (req, res) => {
  return res
    .status(404)
    .json({ MessageChannel: "oops page not found" });
});

//port listen to
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
    console.log(process.env.NODE_ENV);
});