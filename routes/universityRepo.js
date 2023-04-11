
const express = require('express');
const router = express.Router();

router.get('/UniversityRepos', (req,res)=>{
    res.render('universityRepo.ejs');
})
module.exports = router;