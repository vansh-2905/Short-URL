const express = require("express");
const URL_DB = require("../models/url");
const router = express.Router();

router.get('/', async (req, res) => {
    const allurls = await URL_DB.find({});
    return res.render('home', {
        urls: allurls
    });
});

router.get('/signup', (req, res) => {
    return res.render('signup'); 
});

module.exports = router;