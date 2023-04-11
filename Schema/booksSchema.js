const mongoose = require("mongoose");
const SchemaTypes = mongoose.Schema.Types;
const bookSchema = new mongoose.Schema({
    ISBN:{
        type: Number,
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
    edition:Number,
    ddc: {
        type:SchemaTypes.Decimal128,
        required: true,
    },
    rating: SchemaTypes.Decimal128,
    Subject: [{type: String}]
})

module.exports = mongoose.model("Books",bookSchema)