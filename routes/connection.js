// const mongo = require('mongo');
require('dotenv').config()
const mongoose = require('mongoose');
const books = require('../Schema/booksSchema');

const url = process.env.dbURL||'mongodb://127.0.0.1:27017/LibraryDatabase';

function dbconnection(){
    mongoose.connect(url,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    });
}

const db = mongoose.connection;

db.on('error',console.error.bind('connection error'));
db.once('open',()=>{
    console.log("connected to mongo")
})

module.exports = dbconnection;