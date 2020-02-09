const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// initializing express App

const app = express();


// Setting Cors options
const corsOptions = {
    origin :"*",
    optionsSuccessStatus:200
}

app.use(cors(corsOptions));

// Parsing Requests of Type application/json

app.use(bodyParser.json());

// Parsing requests of content-type application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({extended:true}));



// Creating the Port of the server

const PORT = process.env.PORT || 9000;

app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`);
})
