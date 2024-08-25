const mongoose = require("mongoose")
const user_schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type : String 
    },
    email: {
        type: String, 
        required: true,
        unique : true
    },
    jobTitle: {
        type : String
    },
    gender: {
        type : String
    }
} , {timestamps: true})


// creating modal using schema
const user = mongoose.model("user", user_schema);

module.exports = user