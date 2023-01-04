const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    clientName: String,
    clientLastName: String, 
});

module.exports = clientSchema; 