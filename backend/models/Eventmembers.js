const mongoose=require('mongoose')
const eventmemberSchema =new mongoose.Schema({
    name:String,
    
    email:String,
    phone:String,
    club:String

})
const Eventmembers =mongoose.model('events',eventmemberSchema)
module.exports=Eventmembers