const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const {userRoutes, emiRoutes} = require("./Routes/index");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/user",userRoutes);
app.use("/calculateEMI",emiRoutes)
app.use("/",(req,res)=>{
    res.send("Welcome")
})
mongoose.connect("mongodb+srv://Nirmal:nirmal222@cluster0.pk8wxgz.mongodb.net/mock10").then(()=>{
    app.listen(8080, () => {console.log('server started at http://localhost:8080')});
})