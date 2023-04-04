const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const {readFile} = require('fs').promises;
const path = require('path')

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'LibraryDatabase';

// async function getData() {
//     let results = await client.connect();
//     console.log('Connected successfully to server');
//     let db = results.db(dbName);
//     let collection = db.collection('Books');
//     let res = await collection.find({}).toArray();
//     console.log(res)
// }

// getData();

app.listen(8000, ()=>{
    console.log("Server started on port 8000");
});


app.use(express.static(path.join(__dirname)));
app.set('views', path.join(__dirname,'views'));
app.set("view engine", "ejs");

app.get('/', (req,res)=>{
    res.render('./index.ejs');
})
app.get('/signIn', (req,res)=>{
    res.render('./signIn.ejs');
})
app.get('/forgotPassword', (req,res)=>{
    res.render('./forgotPassword.ejs');
})