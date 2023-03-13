const mongoose=require('mongoose');
const Restaurant=mongoose.model('Restaurant')

const getRestaurants=()=>{
    return Restaurant.find();
}

module.exports={
    getRestaurants
};