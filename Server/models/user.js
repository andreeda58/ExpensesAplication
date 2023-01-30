const mongoose =require("mongoose");
const Schema=mongoose.Schema

const UserSchema=new Schema({
    id:Number,
    name:String,
    currentBalance:Number,
    dayOfTracking: String,
    startDate: Date,
    expireDate:Date
})

const Users=mongoose.model("Users",UserSchema)


module.exports=Users;