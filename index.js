const express =require('express')
require('dotenv').config()
const db=require('./database/connection')
const bodyParser = require('body-parser')
const morgan =require('morgan')
const cookieParser=require('cookie-parser')
const CategoryRoute=require('./routes/categoryRoute')
const ProductRoute=require('./routes/productRoute')
const UserRoute=require('./routes/userRoute')
const OrderRoute=require('./routes/orderRoute')
const cors = require('cors')
const PaymentRoute =require("./routes/paymentRoutes")

const port=process.env.PORT || 8000
//to run server
const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(cors())



//routes
app.use(CategoryRoute)
app.use(ProductRoute)
app.use(UserRoute)
app.use(OrderRoute)
app.use(PaymentRoute)
app.use('/public/uploads',express.static('./public/uploads'))

// app.get('/',(req,res)=>
//     res.send('This is index page.')
// )
// app.get('/hello',(req,res)=>

//     res.send('hello! This is express page.')
// )

// app.get('/hellothere',(req,res)=>
// res.send('hello!this is express.')
// )


app.listen(port,()=>{
    console.log(`server started at port ${port}`)})