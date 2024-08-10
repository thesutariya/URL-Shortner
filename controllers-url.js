const shortid = require("shortid");
const URL = require('../models/url');


async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
if
(!body.url) return res.status(400).json({ error: 'Please insert url' });


const shortId= shortid.generate();
await URL.create({

shortId:shortid.generate(),
redirectURL: body.url,
visitHistory: [],
});

return res.json({ id:shortId });
}

module.exports = {
    handleGenerateNewShortURL,
};