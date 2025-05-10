const express = require('express');
const { handleNewShortIdGeneration, showAnanlytics, handleAndReroute, getUrls } = require('../controller/url');


const router = express.Router();

router.post("/", handleNewShortIdGeneration);
router.get("/:shortId", handleAndReroute);
router.get("/analytics/:shortId" , showAnanlytics);


module.exports=router;

