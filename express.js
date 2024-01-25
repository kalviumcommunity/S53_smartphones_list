const express=require("express");
const app=express();

app.get("/ping",(req,res)=>{
    res.send("pong")
})

app.listen(4000,()=>{
    console.log("listnening on port 4000");
    
})