const express = require('express');
const router = express.Router();
const books = require('../Schema/booksSchema');

router.get('/search/title', async (req,res)=>{
    try {
        const key = req.query.key;
        const book = await books.find({
                "$or":[
                    {title:{$regex:key}},
                ]
        });
        console.log(book);
        res.send("This is search results "+ book);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;