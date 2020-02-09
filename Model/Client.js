const mongoose = require('mongoose');


const ClientSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    memborship:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('clients',ClientSchema);