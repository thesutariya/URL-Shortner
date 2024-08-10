
const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require('./routes/url');
const URL = require('./models/url');

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url/').then(() =>
    console.log("Mongodb connected"));

app.use(express.json());

app.use("/url", urlRoute);

app.get('/shortid', async (req,res) => {
    const shortid = req.params.shortid;
    await URL.findOneAndUpdate({
        shortid
    }, {
        $push:{
        visitHistory: Date.now(),
    },
});
res.redirect(entry.redirectURL)
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`))