const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


const dotenv = require('dotenv');
const path = require('path');


// this is database connectivity in mongodb
// const mongoose = require('mongoose');
require("./db/conn");

// this is used model & userSchma and import in app.js file
const Register = require("./models/register");

// used datebase main code like json files
app.use(express.urlencoded({extended: false}))


// stati path setting 
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

const model_path = path.join(__dirname, "./models/register.js");
app.use(express.static(model_path));
// console.log(path.join(__dirname));


app.get("/", (req, res) => {
    res.render("index");
    // res.send("this is hoome page in js conn with data");
})

app.post("/register", (req, res) => {
    console.log("sucessful data fill");
})



app.get("/contact", (req, res)=>{
    // res.render("This is About page ");
    res.send("this is contact page in js server ");
})

app.get("/about", (req, res)=>{
    // res.render("This is About page ");
    res.render("this is about page in js server ");
})

// server is listen port no
app.listen(PORT, () =>{
    console.log(`this is localhost port no  ${PORT}`);
})
