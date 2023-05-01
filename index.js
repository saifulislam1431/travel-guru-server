const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const rooms = require("./data/data.json")

app.use(cors());

app.get("/",(req,res)=>{
    res.send("The travel Guru Server");
})

app.get("/rooms",(req,res)=>{
    res.send(rooms);
})

app.get("/room-by-id/:id" , (req,res)=>{
    const id = req.params.id;
    const selectedRoom = rooms.filter(room => room.id == id);
    res.send(selectedRoom);
})

app.get("/room-by-place/:place" , (req, res)=>{
    const place = req.params.place;
    const locatedRoom = rooms.filter(room => room.place == place);
    res.send(locatedRoom);
})

app.listen(port,()=>{
    console.log(`This app listening at port: ${port}`);
})