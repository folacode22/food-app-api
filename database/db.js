const mongoose = require("mongoose");

//connecting to db 
const connectDB = async ()=>{ await
  mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("connected to database");
  });
};

module.exports = connectDB;