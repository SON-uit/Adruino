const express = require('express');
const http = require('http');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const ejs = require('ejs');
const PORT =3000;
const server = http.createServer(app);
require('dotenv').config()


const DBConnect = require('./mongoConnect');
const connect = new DBConnect(process.env.DBUser,process.env.DBPassword);
const mongoose = require("mongoose");
const Adruino = require('./model/adruino');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get('/dashboard', function(req,res) {
    return res.render('dashboard.ejs');
})
app.get('/login', function(req,res) {
    return res.render('login.ejs');
})

app.get('/signup', function(req,res) {
    return res.render('signup.ejs');
})
app.get('/main', function(req,res)  {
    return res.render('Main.ejs')
})
app.get('/chart', function(req,res)  {
    return res.render('chart.ejs')
})
app.get('/logs', async function(req,res)  {
    const data = await Adruino.find();
    data.forEach(el => el.createdAt = convertTime(el.createdAt));
    return res.render('logs.ejs',{data})
})
server.listen(PORT,() => {
    console.log('listening on port'+ PORT)
});


// thao tac voi database
async function insertData (data) {
    const newData = await Adruino.create(data);
    console.log(newData);
}
function convertTime (time) {
    return new Date(time).toLocaleTimeString('vn-VN');
}
async function getData () {
    const data = await Adruino.find();
    const temp = data[1];
    const time = convertTime(temp.createdAt);
}
async function deleteData () {
    await Adruino.findByIdAndDelete('62937d165dcf17cda9c9696a');
}
//deleteData();
//getData();
//insertData();


// adruno
/* const data = {
    ipAdress: '123.200.200',
    name: 'toaingu',
    sensor: 'hello22',
    value: '3011'
}
data.ipAdress =addadssadasd
data.name =sadasdasdasd
insertData(data)
 */
 
