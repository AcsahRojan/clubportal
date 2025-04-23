const mongoose = require('mongoose')

// to create user schema 
const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    role:String,
    clubs:[String],
    name:String,    
    phone:Number,
    regno:String,
    
    
})

//
const UserModel = mongoose.model('users',userSchema)
 
//to use this schema in other file 
module.exports = UserModel
