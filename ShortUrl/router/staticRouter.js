const express = require('express');
const { getUrls } = require('../controller/urlview')
const router = express.Router();

router.get("/ui", getUrls);

module.exports = router;