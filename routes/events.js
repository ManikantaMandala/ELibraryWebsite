
const express = require('express');
const router = express.Router();

router.get('/events', (req,res)=>{
    res.render('events.ejs');
})
module.exports = router;