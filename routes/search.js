const express = require('express');
const router = express.Router();
const books = require('../Schema/booksSchema');

router.get('/search/title', async (req,res)=>{
    try {
        const key = req.query.key;
        const book = await books.find({
                "$or":[
                    {title:{$regex:key}},
                    {Subject:{$regex:key}}
                ]
        });
        // console.log(book);
        res.render('searchResults',{data : book});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;