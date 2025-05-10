const { nanoid } = require('nanoid'); // Add this line
const URL = require('../models/url');

async function handleNewShortIdGeneration(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required" });
    const shortId = nanoid(8);
    URL.create(
        {
            shortUrl: shortId,
            originalUrl: body.url,
            visitHistory: []
        }
    )
    const urls = await URL.find();
    console.log("urls" + urls);
    (urls).forEach(url => {
        console.log(url.shortUrl);
    })
    // return res.render("viewurls", { urls: urls });
    // return res.json({ shortId: shortId });
    res.render("viewurls", { shortId: shortId , urls:urls});
}



async function handleAndReroute(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortUrl: shortId
        }
    )
    if (!entry) { res.status(404).send("here in handleAndReroute url not found")}
    
    entry.visitHistory.push({ timestamp: new Date() });
    return res.redirect(entry.originalUrl)
}

async function showAnanlytics(req, res) {
    const shortId = req.params.shortId;
    console.log("shortId" + shortId);
    const result = await URL.findOne({ shortUrl: shortId });
    console.log("result" + result);
    return res.json({
        count: result.visitHistory.length,
        visitHistory: result.visitHistory
    })

}


module.exports = {
    handleNewShortIdGeneration,
    handleAndReroute,
    showAnanlytics
}

