const express = require("express");
const mongoose = require("mongoose");
const config = require("./Database/db");
const User = require("./schema");

const app = express();
app.use(express.json());

mongoose.connect(config.mongoURI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

app.get("/post", async (req, res) => {
    try{
    const getData = await User.find({})
    res.status(201).send(getData)
    }catch(err){
        res.status(400).send(err)
    }

});

app.post("/post", async (req, res) => {
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

app.patch("/post/:id", async (req, res) => {
    try{
    const _id=req.params.id;
    const getData = await User.findByIdAndUpdate(_id,req.body)
    res.status(201).send(getData)
    }catch(err){
        res.status(400).send(err)
    }

});

app.delete("/post/:id", async (req, res) => {
    try{
    const _id=req.params.id;
    const getData = await User.findByIdAndDelete(_id)
    res.status(201).send(getData)
    }catch(err){
        res.status(400).send(err)
    }

});

app.listen(5000, () => {
    console.log("Listening at port 5000");
});
