const express = require('express');
const router = express.Router();

router.get('/forgotPassword', (req,res)=>{
    res.render('forgotPassword.ejs');
})

router.post('/forgotPassword',(req,res)=>{
    //update with the user password
    try {
        const key=req.body.emailId;
        console.log("We got the emailId: "+ key);
        //await function: for sending the changing link for emailId
        res.redirect('/');
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
module.exports = router;