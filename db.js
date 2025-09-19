const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'


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