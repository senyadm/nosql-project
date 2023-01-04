const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderName: String,
    timeRequired: String,
    orderDetails: {
        ingredients: String,
        equipment: String
    },
});

module.exports = orderSchema;
