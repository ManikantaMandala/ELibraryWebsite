
const express = require('express');
const router = express.Router();

router.get('/UniversityRepos', (req,res)=>{
    res.redirect('http://drc.bml.edu.in:8080/jspui/');
})
module.exports = router;