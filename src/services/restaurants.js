const mongoose=require('mongoose');
const Restaurant=mongoose.model('Restaurant')

const getRestaurants=()=>{
    return Restaurant.find();
}

const getRestaurantById=(id)=>{
    return Restaurant.findById(id);
}

const getRestaurantBySlug=(slug)=>{
    return Restaurant.findOne(
        {
            slug:slug
        }
    );
}

module.exports={
    getRestaurants,
    getRestaurantById,
    getRestaurantBySlug
};