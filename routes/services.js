const express = require('express');
const router = express.Router();

router.get('/services', (req,res)=>{
    res.render('services.ejs');
})
module.exports = router;