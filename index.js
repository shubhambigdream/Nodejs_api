const express=require('express');
const mongoose = require('mongoose');
const userdataroute= require('./Routes/router')
const app=express();

mongoose.connect('mongodb://localhost:27017');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(express.json());
const con=mongoose.connection
con.on('open',()=>console.log("conneted"))
PORT=5000;

app.use('/users',userdataroute);
app.listen(PORT);