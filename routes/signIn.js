const express = require('express');
const router = express.Router();

router.get('/signIn', (req,res)=>{
    res.render('signIn.ejs');
})

router.post('/signIn', (req, res) => {
    //Check with the user details
    try {
        const enrollmentNo = req.body.enrollmentNo;
        const password = req.body.password;
        console.log(`Here are the credentials:\n enrollmentNo: ${enrollmentNo} \n password: ${password}`);
        //await function: for checking the credential match with the database
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;