const mongoose=require('mongoose')
const {ObjectId} =mongoose.Schema

const tokenSchema = new mongoose.Schema({
   token:{
         type:String,
         required:true
   },
   userId:{
       type:ObjectId,
       ref:'User',
       required:true
   },
   createdAt:{
       type:Date,
       default:Date.now(),
       required:true,
       expires:86400
   }

})

module.exports =mongoose.model("Token",tokenSchema)