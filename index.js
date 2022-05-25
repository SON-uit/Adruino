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
app.get('/logs', function(req,res)  {
    return res.render('logs.ejs')
})
server.listen(PORT,() => {
    console.log('listening on port'+ PORT)
});