const ClientModel = require('../models/clientModel');
const OrderModel = require('../models/orderModel');

const createClient = async (req, res) => {
    const client = new ClientModel({
        clientName: req.body.name,
        clientLastName: req.body.surname
    });
    const result = await client.save()
    if(result) console.log(`Created successfully: ${result}`)
    else console.log(`Error`);
}

const createOrder = async (req, res) => {
    const order = new OrderModel({
        orderName: req.body.orderName,
        timeRequired: req.body.time,
        orderDetails: {
            ingredients: req.body.ing,
            equipment: req.body.eqp
        }
    });
    const result = await order.save()
    if(result) console.log(`Created successfully: ${result}`)
    else console.log(`Error`);
}

module.exports = {
    createClient,
    createOrder
}