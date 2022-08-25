const express = require('express')
const { processPayment, sendStripeKey } = require('../controller/paymentController')
const router = express.Router()


router.post('/processpayment',processPayment)
router.get('/getStripeKey',sendStripeKey)

module.exports = router