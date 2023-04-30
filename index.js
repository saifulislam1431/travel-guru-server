const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const rooms = require("./data/data.json")

app.use(cors());

app.get("/",(req,res)=>{
    res.send("The travel Guru Server");
})

app.get("/allRooms",(req,res)=>{
    res.send(rooms);
})

app.get("/allRooms/:id" , (req,res)=>{
    const id = req.params.id;
    const selectedRoom = rooms.filter(room => room.id == id);
    res.send(selectedRoom);
})

app.get("/allRooms/:location" , (req, res)=>{
    const location = req.params.location;
    const locatedRoom = rooms.filter(room => room.location === location);
    res.send(locatedRoom);
})

app.listen(port,()=>{
    console.log(`This app listening at port: ${port}`);
})