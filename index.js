
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
//import require('dotenv').config();

//Routes
import customerRoute from "./routes/customerRoutes.js";
import staffRoute from "./routes/staffRoutes.js";
import logInRoute from "./routes/loginroutes.js";


//constant
const port = process.env.PORT || 3000;
const hostName="localhost";
const url=process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/hotelProjectDb"

const app= express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/customer',customerRoute)
app.use('/staff',staffRoute)
app.use('/login',logInRoute)

const client = mongoose.connect(url);

client.then(()=>{
    console.log("Connection with database established!!")
})

app.listen(port,hostName,()=>{
    console.log(`Server is listening at http://${hostName}:${port}`);
})
