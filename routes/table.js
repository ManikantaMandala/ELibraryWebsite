const express = require('express');
const router = express.Router();
const entries = require('../Schema/EntrydetailsShema')

router.get('/tables',async (req,res)=>{
    const data = await entries.find({});
    res.render('tables',{data : data});
})
router.post('/tables/delete/:id',async (req,res)=>{
    const {id} = req.params;
    const data = await entries.findOneAndDelete({_id : id});
    // res.redirect('/');
})

router.post('/tables/send',async (req,res)=>{
    const data = req.body;
    const savedData =  new entries(data);
    await savedData.save();
    // console.log(savedData);
    res.redirect('/tables');
})

module.exports = router;