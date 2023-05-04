const express = require('express');
const router = express.Router();
const db = require('./connection');

router.get('/', (req,res)=>{
    res.render('index.ejs');
})


module.exports = router;