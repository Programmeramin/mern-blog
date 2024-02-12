import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import mongodbConnect from "../configs/mongoDBConnect.js";
import userRouter from "../routes/userRoute.js";
import authRouter from "../routes/authRoute.js"


// INIT APP
dotenv.config();
const app = express();

// set environment var
const PORT = process.env.PORT || 6060;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));  

// routing
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// error handle
app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
});

app.listen(PORT, () =>{
    mongodbConnect();
    console.log(`Server is running on port ${PORT}`.bgBlue);
});      