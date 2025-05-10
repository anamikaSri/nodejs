const express = require('express');
const server = express();
const mongoose = require('mongoose');
const router = require('./router/url');
const staticRouter = require('./router/staticRouter')


// we are setting ejs as view engine and then folder for all views 
server.set('view engine', 'ejs');
server.set('views' , './views');

mongoose.connect("mongodb://127.0.0.1:27017/shortUrls").then(()=>{console.log("MongoDb Connected")});


const PORT =8081;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/url" , router);
server.use("/" , staticRouter);



server.listen(PORT, () => {
    console.log(`Started at port ${PORT}`);
});