const mongoose = require("mongoose");
const SchemaTypes = mongoose.Schema.Types;
const bookSchema = new mongoose.Schema({
    ISBN:{
        type: String,
        required: true,
        unique: true,
    },
    title:{
        type: String,
        required: true,
    },
    author: [{type: String}],
    contributor: [{type: String}],
    publication:String,
    edition:String,
    ddc: {
        type:String,
        required: true,
    },
    rating: SchemaTypes.Decimal128,
    Subject: [{type: String}],
    issueQueue: []
})

module.exports = mongoose.model("Books",bookSchema)
