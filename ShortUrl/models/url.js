const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({

    shortUrl: {
        type: String,
        require: true,
        unique: true,
    },
    originalUrl: {
        type: String,
        require: true
    },
    visitHistory: [
        {
            timeStamp: {
                type: Number
            }
        }
    ]
}, { timestamps: true }  // this will add createdAt and updatedAt fields
);

const URL = mongoose.model('url', urlSchema);

module.exports = URL;