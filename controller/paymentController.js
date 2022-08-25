const stripe = require('stripe')(process.env.STRIPE_SECRECT_KEY)

// to send stripe key to front end

exports.sendStripeKey =  (req,res) =>{
    res.status(200).json({success:true , stripeAPIKey : process.env.STRIPE_API_KEY})
}

// to process payment

exports.processPayment = async(req,res) =>{
    let paymentIntent = await stripe.paymentIntents.create({
        amount:req.body.amount,
        currency:'npr',
        metadata:{
            intergrationCheck : 'accept_a_payment'
        }
    })
    res.status(200).json({
           success:true,
           client_secret : paymentIntent.client_secret
    })
}