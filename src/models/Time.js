const mongoose=require('mongoose');

const timeSchema=new mongoose.Schema({
    hours:{
        type:Number,
        min:0,
        max:23   
    },
    minutes:{
        type:Number,
        min:0,
        max:59
    },
    _id:false
})

module.exports=timeSchema;