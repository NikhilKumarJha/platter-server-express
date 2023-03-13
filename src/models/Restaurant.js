const mongoose=require('mongoose');
const timeSchema=require('./Time');

const restaurantSchema=new mongoose.Schema({
    name:{  // "Mad About Pizza"
        type:String,
        unique:true,
        required:true
    },
    slug:{  // "mad-about-pizza"
        type:string,
        unique:true,
        required:true
    },
    description:{
        type:String,
        required:true,
        minLength:10
    },
    cuisines:{
        type:[String],
        default:[],
    },
    opens:{
        type:timeSchema,
        required:true
    },
    closes:{
        type:timeSchema,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5,
        default:5
    },
    numRatings:{
        type:Number,
        min:0,
        default:0
    },
    costForTwo:{
        type:Number,
        required:true,
        min:0
    },  
    imageUrl:{
        type:String
    }
});

mongoose.model('Restaurant',restaurantSchema);