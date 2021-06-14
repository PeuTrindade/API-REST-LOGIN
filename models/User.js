const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String,minlength:3,maxlength:50},
    email:{type:String,minlength:3,maxlength:100},
    password:{type:String,minlength:5,maxlength:300},
    createDate: {type:Date,default:Date.now},
    admin:{type:Boolean,default:false}
    
});
module.exports = mongoose.model("User",userSchema);