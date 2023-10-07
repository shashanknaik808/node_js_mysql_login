const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });


const app = express();


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'root123',
    database: 'nodejs-login'
});


db.connect((err)=>{
    if(err){
        console.log();
    }else{
        console.log("MySQL Connected");
    }
});


app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
})