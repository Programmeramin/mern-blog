import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// INIT APP
dotenv.config();
const app = express();
     
     
mongoose.connect(process.env.MONGODB)
        
.then(
    () => {
    console.log(`Mongodb is Connected`.bgGreen.white)})
    .catch((err) =>{
        console.log(err);
    });
 
 
// set environment var
const PORT = process.env.PORT || 6060;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`.bgBlue);
});      