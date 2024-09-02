const mongoosdb = require("mongoose")

async function connectToMongodb(url) {
    return mongoosdb.connect(url)
    
}


module.exports = connectToMongodb