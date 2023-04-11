const express = require('express');
const router = express.Router();
const books = require('../Schema/booksSchema');

router.get("/getBooks", async (req, res) => {
    try {
        const book = await books.find({});
        res.send(`These are the books in library collections: ${book}`)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;