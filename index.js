const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

app.get("/",(req,res)=>{
    res.send("The travel Guru Server");
})

app.listen(port,()=>{
    console.log(`This app listening at port: ${port}`);
})