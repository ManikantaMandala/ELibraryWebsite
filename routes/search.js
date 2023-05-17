const express = require('express');
const router = express.Router();
const books = require('../Schema/booksSchema');

router.get('/search/title', async (req,res)=>{
    try {
        const key = req.query.key;
        const dropdown = req.query.dropdown;
        var book;
        if(dropdown === "all"){
            book = await books.find({
                    "$or":[
                        {title:{$regex:key}},
                        {author:{$regex:key}},
                        {Subject:{$regex:key}},
                        {subject:{$regex:key}},
                        {ISBN:{$regex:key}},
                        {isbn:{$regex:key}},
                        {ddc:{$regex:key}},
                        {DDC_number:{$regex:key}}
                    ]
            });
        }
        if(dropdown==="title"){
            book = await books.find({
                    "$or":[
                        {title:{$regex:key}},
                    ]
            });
        }
        if(dropdown==="author"){
            book = await books.find({
                    "$or":[
                        {author:{$regex:key}},
                    ]
            });
        }
        if(dropdown === "subject"){
            book = await books.find({
                    "$or":[
                        {subject:{$regex:key}},
                        {Subject:{$regex:key}}
                    ]
            });
        }
        if(dropdown === "ddc"){
            book = await books.find({
                    "$or":[
                        {ddc:{$regex:key}},
                        {DDC_number:{$regex:key}}
                    ]
            });
        }
        // console.log(book);
        if(dropdown === "isbn"){
            book = await books.find({
                    "$or":[
                        {ISBN:{$regex:key}},
                        {isbn:{$regex:key}}
                    ]
            });
        }
        res.render('searchResults',{data : book, dropdown: dropdown });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;
