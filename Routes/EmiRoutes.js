const express = require("express");
const jwt = require("jsonwebtoken");


const app = express.Router();

app.post("/",async(req,res)=>{
    const { P,A,N } = req.body;
    try{
        let R = A/12/100;
        let X = 1+R
        let E = (P*R*X*(N*12))/(X*((N*12))-1);
        res.send({emi:E})
    }catch(e){
        res.send(e.message)
    }
});

module.exports = app