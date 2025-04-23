const mongoose  = require("mongoose");//import mongoose
//schema creation
const club1memberSchema= new mongoose.Schema({
    name:String,
    rollNo:String,
    dept:String,
    contactNumber:Number,
    clubName:String,
    email:String
})
//model creation-used to call mongoose methods
const Club1Member=mongoose.model('enrolls',club1memberSchema)

module.exports=Club1Member