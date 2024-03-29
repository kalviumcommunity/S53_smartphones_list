const express = require("express");
const router=express.Router()
const mongoose = require("mongoose");
const config = require("./Database/db");
const User = require("./schema");
const validation=require("./joivalidation");
const userModel=require("./userschema");
const jwt = require('jsonwebtoken');
require("dotenv").config();


const app = express();
app.use(express.json());

const validateRequest = (req, res, next) => {
    const { error } = validation.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

mongoose.connect(config.mongoURI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

router.get("/", async (req, res) => {
    try{
    const getData = await User.find({})
    res.status(201).send(getData)
    }catch(err){
        res.status(400).send(err)
    }

});

router.post("/",validateRequest,  async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        if (newUser) {
            res.status(201).json(newUser);
        } else {
            res.status(400);
            throw new Error("Failed To Create User");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});
  





router.post("/signup", async (req, res) => {
    try {
        const newUser = await userModel.create(req.body);
        if (newUser) {
            const {username}= newUser;
            const token = jwt.sign(username,process.env.SECRET_KEY);
            res.status(201).json({newUser,token}); 

        } else {
            res.status(400);
            throw new Error("Failed To Create User");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/signup", async (req, res) => {
    try{
    const getData = await userModel.find({})
    res.status(201).send(getData) 
    }catch(err){
        res.status(400).send(err) 
    }

});


router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username });
        
        if (user) {
            if (user.password === password) {
                const token = jwt.sign({ username: user.username }, 'secretkey');
                res.status(201).json({ user, token });
            } else {
                res.json("The password is incorrect");
            }
        } else {
            res.json("No such user exists");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
});







router.patch("/:id", async (req, res) => {
    try{
    const _id=req.params.id;
    const getData = await User.findByIdAndUpdate(_id,req.body)
    res.status(201).send(getData)
    }catch(err){
        res.status(400).send(err)
    }

});

router.delete("/:id", async (req, res) => {
    try{
    const _id=req.params.id;
    const getData = await User.findByIdAndDelete(_id)
    res.status(201).send(getData)
    }catch(err){
        res.status(400).send(err)
    }

});

module.exports=router

