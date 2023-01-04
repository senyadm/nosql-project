const express = require('express');
const router = express.Router();
const {createClient, createOrder} = require('../controllers/apiControllers');

router.post('/createClient', createClient);
router.post('/createOrder', createOrder);

module.exports = router;