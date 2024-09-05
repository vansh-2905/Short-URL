const express = require("express");
const urlRoute = require('./routes/url');
const path = require('path');
const { connectToMongoDB } = require("./connect");
const URL_DB = require('./models/url')
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user');
const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url")
.then(() => console.log("MongoDB connected"));

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use('/url', urlRoute);
app.use('/user', userRoute);
app.use('/', staticRoute);

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL_DB.findOneAndUpdate({
        shortId
    }, { $push: {
        visitHistory: {
            timestamp: Date.now(),
        },
    }, 
    }
);
res.redirect(entry.redirectURL)
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

