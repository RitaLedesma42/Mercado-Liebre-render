const express = require('express');
const app = express();
app.use(express.static('public'));

require("dotenv").config()

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`servidor funcionando en puerto ${port}` );
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

//1. npm install express
//2. cd DH-Heroes-Express
//3. npm init
//4. touch init para crear archivo
//5. node app.js
//http://localhost:3030/



//npm i bootstrap@5.3.2