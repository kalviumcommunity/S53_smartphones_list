const mongoose =require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId
    }
})

const userModel=new mongoose.model("users",userSchema);
module.exports=userModel;