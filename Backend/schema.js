const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ram: {
        type: Number,
        required: true,
    },
    rom: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    camera: {
        type: Number,
    },
    battery: {
        type: Number
    },
    os:{
        type:String
    },
    userData:{
        type:String
    }
})

const User = new mongoose.model("products", productSchema)
module.exports = User
