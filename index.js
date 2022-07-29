const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const testRouter = require('./routes/food');

const app = express();

const port = process.env.PORT || 1500;

app.use(express.json());
app.use(testRouter);

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('connected to database');
});

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
    console.log(process.env.NODE_ENV);
});