import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//cookie code 
app.use(express.json({limit:"16kb"})) // only 16kb ka data ana chahiye  json form me

app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

app.use(cookieParser()) //sercver can get and access of users cookie data


export {app}