import express from "express"
import dotenv from "dotenv"
import { DBConnection } from "./db.js"

dotenv.config()

const app = express()

app.get("/home",(req,res)=>{
    res.send("first request made success")
})
app.get("/about",(req,res)=>{
    res.send("test2")
})
DBConnection()

app.listen(3000,()=>{
    console.log("server is running")
})
