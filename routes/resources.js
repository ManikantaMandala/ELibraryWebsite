const express = require('express');
const router = express.Router();

router.get('/resources', (req,res)=>{
    res.render('resource.ejs');
})

module.exports = router;