const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const entrySchema= new Schema({
    rollno : {
        type : Number,
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    bookcode : {
        type : String,
        required : true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('DD-MM-YY HH:mm')
    }
},{ timestamps: true })

module.exports = mongoose.model('entries', entrySchema );
