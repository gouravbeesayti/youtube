// require ('dotenv').config({path:'./env'}) // we can use this syntax also but this is not proffetional

import dotenv from "dotenv"
import connectDB from "./db/index.js"
// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";



// as early as possible in your application ,import and cofigure dotenv
//jitni jldi hmari app load hoo vese hi environment variable run hoo jaye
dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console,log('ERROR!',error)
        throw error
    })
    app.listen(process.env.PORT || 8000)
})
.catch((err)=>{
    console.log("MONOGO DB connection failed !!!",err)
})
