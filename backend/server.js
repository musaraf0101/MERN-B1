import express from "express"

const app = express()

app.get("/home",(req,res)=>{
    res.send("first request made success")
})
app.get("/about",(req,res)=>{
    res.send("test2")
})

app.listen(3000,()=>{
    console.log("server is running")
})
