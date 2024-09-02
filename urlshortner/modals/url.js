const  mongoose = require("mongoose")

const urlSchema = new mongoose.Schema(
    {
        shortUrl :{
            type: String,
            required : true,
            unique : true
        } , 
        redirectUrl :{
           
            type : String , 
            required : true

        } ,

        visitHistory : [
            {timestamp : {type : String}}
        ],

        

    } , {timestamps : true}
)

const URL = mongoose.model("url" ,  urlSchema)

module.exports = URL;

// In the line const URL = mongoose.model("url", urlSchema);:

// URL: This is the variable that stores the Mongoose model. A model in Mongoose is a class that allows you to interact with the documents (records) in a specific MongoDB collection. You use this URL model to create, read, update, and delete documents in the database.

// "url": This is the name of the MongoDB collection associated with this model. When you pass "url" to mongoose.model, Mongoose will create (or use) a collection named "urls" (note the plural form) in the database. The model URL will correspond to documents in this "urls" collection.

// So, URL is the model you work with in your code, and "url" is the name of the collection in the database where the documents are stored.