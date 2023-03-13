const mongoose=require('mongoose');
const Restaurant=mongoose.model('Restaurant')

const getRestaurants=(options={})=>{
    const {sort}=options;

    const query= Restaurant.find();
    if(sort){
        query.sort(sort); // sort={name:'asc'}
    }
    return query.exec();
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