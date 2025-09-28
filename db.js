const mongoose = require('mongoose');
require('dotenv').config()

 //const mongoURL = 'mongodb://localhost:27017/hotels'
//const mongoURL = 'mongodb+srv://om:<om123>@cluster0.k9kk8sw.mongodb.net/'
//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected' , () => {
 console.log('connected to the mongodb server');
})

db.on('disconnected', () =>{
    console.log('disconnected to the mongodb server');
})

db.on('error' , (err) => {
    console.log('mongodb connection error',err);
});


module.exports = db;