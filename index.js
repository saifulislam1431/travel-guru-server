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
    console.log(id);
    const selectedRoom = rooms.filter(room => room.id == id);
    res.send(selectedRoom);
})

app.get("/allRooms/:place" , (req, res)=>{
    const place = req.params.place;
    console.log(place);
    const locatedRoom = rooms.filter(room => room.place === place);
    res.send(locatedRoom);
})

app.listen(port,()=>{
    console.log(`This app listening at port: ${port}`);
})