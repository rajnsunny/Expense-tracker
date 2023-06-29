const express = require('express');
const cors = require('cors');
const { connect } = require('./db/connect');
const {readdirSync} = require('fs')
require('dotenv').config()

const app = express();

const PORT = process.env.PORT


//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))



const server = () => {

    connect()     //Database 
    app.listen(PORT,() => {
        console.log(`You are listening to Port: ${PORT}`)
    })

}

server()