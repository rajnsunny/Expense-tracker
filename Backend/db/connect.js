const mongoose = require('mongoose')
require('dotenv').config()

const connect = async () => {
    try{
        mongoose.set('strictQuery',false)
        
        await mongoose.connect(process.env.DB_STRING)

        console.log('DB Connected')
    }
    catch (error){
        console.log(`DB Connection Error: ${error} `);
    }
}

module.exports = {connect};