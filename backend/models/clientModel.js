const mongoose = require('mongoose');
const clientSchema = require('../schema/clientSchema');
 
const ClientModel = mongoose.model('Client', clientSchema);

module.exports = ClientModel;