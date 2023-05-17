
const express = require('express');
const router = express.Router();

router.get('/virtual_tour', (req,res)=>{
    res.render('events.ejs');
})
module.exports = router;