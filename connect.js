const mongoose = require('mongoose');

async function connectToMongoDB(urlDb) {
    return mongoose.connect(urlDb);    
}

module.exports = { connectToMongoDB, };