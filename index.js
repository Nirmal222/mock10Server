const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const productRoutes = require("./routes/productRoute");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/products",productRoutes);

mongoose.connect("mongodb+srv://Nirmal:nirmal222@cluster0.pk8wxgz.mongodb.net/mock11").then(()=>{
    app.listen(8080, () => {console.log('server started at http://localhost:8080')});
})
