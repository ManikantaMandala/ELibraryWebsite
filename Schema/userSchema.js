const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    LibraryDetails: LibraryDetailsSchema,
    IdentityDetails: IdentitySchema,
    ContactDetails: contactInfoSchema
});

const LibraryDetailsSchema = new mongoose.Schema({
    enrollmentNo: {
        type: Number,
        required: true,
        unique:true
    },
    ExpirationDate: Date,
    Category: String
});

const IdentitySchema = new mongoose.Schema({
    name: UserNameSchema,
    DateOfBirth: Date,
    gender:String,
});

const contactInfoSchema = new mongoose.Schema({
    phoneNumber:{
        type: Number,
        match: "([0-9]){10/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/}",
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
            }
        },
    },
});

const UserNameSchema = new mongoose.Schema({
    surName:{
        type: String,
        require: true
    },
    firstName:{
        type: String,
        require: true
    },
    otherName: String,
});

module.exports = mongoose.model("User",UserSchema)