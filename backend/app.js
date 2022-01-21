//import express to create express app
const express = require('express');
const app = express();
//import path : pour la manipulation des chemin
const path = require('path');
//config file images
app.use('/images', express.static(path.join('backend/images')));
//import body-parser
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
//import mongoose
const mongoose = require('mongoose');
//connect to mongoDB data base 
mongoose.connect('mongodb://localhost:27017/educatedb');
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
//import routes
const authRoute = require('./routes/auth')
const courseRoute = require('./routes/course')
const eventRoute = require('./routes/event')
//use routes
app.use("/api/auth", authRoute);
app.use("/api/course", courseRoute);
app.use("/api/event",eventRoute)
module.exports = app; 