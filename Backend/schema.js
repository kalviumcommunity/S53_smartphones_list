const mongoose = require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    ram:{
        type:String,
        required:true,
    },
    rom:{
        type:String,
        required:true,
    },
    review:{
        type:String,
    },
    price:{
        type:String,
        required:true
    }
})

const User= new mongoose.model("products",productSchema)
module.exports=User
