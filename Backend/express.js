const express=require("express");
const mongoose=require("mongoose");
const config=require("./Database/db");
const cors=require("cors");
const app=express();
app.use(express.json())
app.use(cors())

app.get("/ping",(req,res)=>{ 
    res.send("pong")
})



app.get("/",(req,res)=>{
    
    try {
      let {mongoURI}=config
      mongoose.connect(mongoURI)
      res.send('📦 connected to mongoDB');
    } catch (err) {
      res.send('❌ error connecting to mongoDB:', err.message);
    }

})


const productRoute = require('./routes')
app.use('/data', productRoute)

app.listen(4000,()=>{
    console.log("listnening on port 4000");
    
})