const express = require("express");
const jwt = require("jsonwebtoken");
const { userModel } = require("../Models/index");

const app = express.Router();

app.post("/register", async(req,res)=>{
    const { name, email, password} = req.body;
    try{
        console.log(req.body);
        const user = await userModel.findOne({email});
        if(user) return res.send("user already exist");
        const newUser = await userModel.create({name:name,email:email,password:password});
        return res.send({
            "message": "User Created Successfully"
        })
    }catch(e){
        return res.send(e.message);
    }
})

app.post("/login", async(req,res)=>{
    const {email,password} = req.body;
    console.log(req.body)
    try{
        const user = await userModel.findOne({email,password});
        if(!user) return res.send("Incorrect Credentials");
        const token = jwt.sign({id:user.id, email:user.email},"Token", {
            expiresIn: "2 hours"
        })
        return res.send({
            message: "Login Successfull",
            auth: true,
            token: token,
            user
        })
    }catch(e){
        return res.send(e.message)
    }
});

app.post("/getProfile", async(req,res)=>{
    const token = req.headers.authorization;
    try{
        const payload = jwt.verify(token,"Token");
        const user = await userModel.findOne({email:payload.email});
        res.send(user);
    }catch(e){
        return res.send(e.message);
    }
})

module.exports = app